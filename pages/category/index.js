import ApiCategory from '../../api/category';
Page({
  data: {
    leftMenu: [], // 左侧菜单
    rightValue: [], // 右侧内容
    currentIndex: 0, // 选中的索引
  },
  categories: [], //  接口返回的数据
  onLoad() {
    this.getData()
  },
  /* 加载数据 */
  getData() {
    ApiCategory.getCategory().then(res => {
      this.categories = res.data.message;
      const leftMenu = this.categories.map(item => item.cat_name);
      const rightValue = this.categories[0].children;
      this.setData({
        leftMenu,
        rightValue
      })
    })
  },
  /* 点击左侧菜单 */
  handleItem(e) {
    const {
      index
    } = e.currentTarget.dataset;
    const rightValue = this.categories[index].children;
    this.setData({
      currentIndex: index,
      rightValue,
    })
  },
})
