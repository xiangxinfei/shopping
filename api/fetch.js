import Config from '../config/config';

/**
 * 请求接口数据
 * url
 * options 参数  object
 * type 请求类型  大写
 */

/* 同时发请求的数量 */
let requestNums = 0;
export default class Fetch {
  static request(url, options, type) {
    requestNums++;
    wx.showLoading({
      title: '加载中',
      mask: true
    });
    return new Promise((resolve, reject) => {
      try {
        wx.request({
          url: Config.baseURL + url,
          data: {
            ...options,
          },
          method: type || 'GET',
          ...(type === 'POST' ? {
            header: {
              'content-type': 'application/x-www-form-urlencoded',
            },
          } : {
            header: {
              'content-type': 'json',
            },
          }),
          success: (res) => {
            if (res.statusCode === 200) {
              resolve(res);
            } else {
              reject(res);
            }
          },
          fail: (err) => {
            reject(new Error('服务器异常'));
          },
          complete: () => {
            requestNums--;
            if (requestNums === 0) {
              wx.hideLoading();
            }
          }
        });
      } catch (error) {
        wx.hideLoading();
        reject(new Error('服务器异常'));
      }
    });
  }
}
