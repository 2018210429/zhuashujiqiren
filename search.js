Page({
  data: {
    searchKey: null 
  },
  searchInputEvent: function (e) {
    this.setData({ searchKey:e.detail.value });
    wx.request({
      url:'http://api.heclouds.com/devices/504957373/datapoints?type=3',
      method:'POST',
     header:{
       'api-key':'M38HT7q1VGzeq81xF0lSxjPwg7c='
     },
     data: {'bookname': e.detail.value}
    })
  },
  searchClickEvent: function () {
    if (this.data.searchKey == '小火龙' || this.data.searchKey == '妙蛙草' || this.data.searchKey == '杰尼龟' || this.data.searchKey == '伊布' || this.data.searchKey == '皮卡丘' || this.data.searchKey =='沼跃鱼'){
      wx.showToast({
        title:'发送成功',
        icon:'success',
        duration:1000,
        mask:true,
      })
    }else{
      wx.showToast({
        title: '宝可梦404',
        icon:'none',
        duration:1000,
        mask:true,
      });
    }
  }
})