/**
 *  首页api
 */
import Fetch from './fetch';
export default class ApiIndex {
  // 轮播图
  static getSlides() {
    return Fetch.request('home/swiperdata');
  };
  // 导航
  static getTabs() {
    return Fetch.request('home/catitems');
  };
  // 楼层分类
  static getClassify() {
    return Fetch.request('home/floordata');
  };
}
