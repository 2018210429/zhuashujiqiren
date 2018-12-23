Page({
  data: {
    motto: '抓书一号',
    motto1:'点击起航',
    imageSrc:'/pages/image/background.jpg'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../search/search'
    })
  },
 
})
