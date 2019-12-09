import ApiIndex from '../../api/index'
Page({
  data: {
    swiperList: [], // 轮播图列表
    tabsList: [], // tabs栏
    classify: [], // 楼层分类
  },
  onLoad() {
    ApiIndex.getSlides().then(res => {
      this.setData({
        swiperList: res.data.message
      })
    });
    ApiIndex.getTabs().then(res => {
      this.setData({
        tabsList: res.data.message
      })
    });
    ApiIndex.getClassify().then(res => {
      this.setData({
        classify: res.data.message
      })
    });
  }
})
