// miniprogram/pages/spxq/spxq.js
const db = wx.cloud.database({
  env: 'a-hpcrq'
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    spid:'',
 active: 1,
  },
jr:function(e){
  console.log(e.target.dataset.spid)
  this.setData({
    spid: e.target.dataset.spid
  }),
    wx.setStorageSync('spid',this.data.spid); 
  wx.redirectTo({
    url: '/pages/shangc/shangc'
  }) 
 
},

  onChange(event) {
    if (event.detail == 0) {
      wx.redirectTo({
        url: '/pages/index/index'//[主页面]
      })
    }

    if (event.detail == 2) {
      wx.redirectTo({
        url: '/pages/diz/diz'//[主页面]
      })
    }
    if (event.detail == 3) {
      wx.redirectTo({
        url: '/pages/yh/yh'//[主页面]
      })
    }
    console.log(event.detail);
  },
asd:function(){
  db.collection("asd").add(
    {
      data: {
        name: "玫瑰话语鲜花店",
        fl:1,
        spid: 1,
        ms:"起送￥60元,配送费￥5"
      },
        success: (res) => {
        console.log(res)
      },
})},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection('asd').where({ fl: "1" }).get(
    ).then(res => {
      this.setData({
        list:res.data
      })
      console.log(this.data.list)

    })
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