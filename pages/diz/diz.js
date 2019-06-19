// miniprogram/pages/diz/diz.js

const db = wx.cloud.database({
  env: 'a-hpcrq'
}
  )
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    active: 2,

  },
  pj:function(){
    wx.showModal({
      title: '谢谢评价：',
      content: '小杰欢迎你下次光临哦！',
      showCancel: false}
     
    )

  },
  
  onChange(event) {
    if (event.detail == 0) {
      wx.redirectTo({
        url: '/pages/index/index'//[主页面]
      })
    }

    if (event.detail == 1) {
      wx.redirectTo({
        url: '/pages/spxq/spxq'//[主页面]
      })
    }
    if (event.detail == 3) {
      wx.redirectTo({
        url: '/pages/yh/yh'//[主页面]
      })
    }
    console.log(event.detail);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection('asd').where({ fl: "1" }).get(
    ).then(res => {
      this.setData({
        list: res.data
      })
      console.log(this.data.list)

    })

  },
  cx:function(){



    db.collection("asd").add(
      {

        data: {
          name: "asdd",
          age: 23
        },
        success: (res) => {
          console.log(res)
        },
        fail: (res) => {
          console.log(res)
        }
      }
    )



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