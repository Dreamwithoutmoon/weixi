// miniprogram/pages/spxq/spxq.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 3,
    name: "游客",
    dengl:""

  },
  dl:function(e){
    var namee = wx.getStorageSync('name'); 
    console.log(namee)
    if(namee==null){
      wx.redirectTo({
        url: '/pages/dengl/dengl'//[主页面]
      })
    }else{
      wx.setStorageSync('name', null); 
      var b = "请登录"
      var c="游客"
      dengl: b
      this.setData({
        dengl: b,
         name:c
      })
    }
   

  },
  onChange(event) {
    active: event.detail
    if (event.detail == 0) {
      wx.redirectTo({
        url: '/pages/index/index'
      })
    }
    if (event.detail == 1) {
      wx.redirectTo({
        url: '/pages/spxq/spxq'
      })
    }
    if (event.detail == 2) {
      wx.redirectTo({
        url: '/pages/diz/diz'
      })
    }

  
    console.log(event.detail);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var namee = wx.getStorageSync('name'); 
    console.log(namee)
    if(namee==null)
    {
      var c="游客"
    name:c
      var b = "请登录"
      dengl:b
      this.setData({
        dengl: b
      })
    }else{
      this.setData({
        name: namee,
      })
      var b = "退出登录"
      this.setData({
        dengl: b
      })

    }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})