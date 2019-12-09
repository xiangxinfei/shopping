/**
 *  分类api
 */
import Fetch from './fetch';
export default class ApiCategory {
  // 轮播图
  static getCategory() {
    return Fetch.request('categories');
  };
}
