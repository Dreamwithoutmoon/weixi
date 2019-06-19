// pages/ceshi/ceshi.js

Page({

  tapName: function tapName(event, ownerInstance) {
    var instance = ownerInstance.selectComponent('.classSelector') // 返回组件的实例
    instance.setStyle({
      "font-size": "14px" // 支持rpx
    })
    instance.getDataset()
    instance.setClass(className)
  },


  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    goodsName: '',
    goodStyle: '',
    imgUrls: [
      {
        link: '/pages/index/index',
        url: 'https://m.360buyimg.com/babel/jfs/t1/48729/40/1840/46680/5cf8cd2bE3225a156/7b0b716cbc1f1bcc.jpg!q70.jpg.webp'

      }, {
        link: '/pages/logs/logs',
        url: 'https://img10.360buyimg.com/N12/s735x363_jfs/t1/24216/14/2036/168900/5c189d14E7100fbf7/371fcad2d783e8ca.jpg'

      }, {
        link: '/pages/index/index',
        url: 'http://img.weiye.me/zcimgdir/album/file_591163e6b1ef5.png'
      }
    ],
    imgtp: [
      {
        link: '/pages/index/index',
        url: 'http://img.weiye.me/zcimgdir/album/file_59102b946b0f1.png'

      }, {
        link: '/pages/logs/logs',
        url: 'http://img.weiye.me/zcimgdir/album/file_5912aafde2231.png'

      },
    ],

    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000

  },
  onChange(event) {
    if (event.detail==3){
      wx.redirectTo({
        url: '/pages/yh/yh'//[主页面]
      }) 
    }
    console.log(event.detail);
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  onInput: function (e) {
    console.log(e.detail)

  },

int:function(){
  db.collection("yongh").add(
    {

      data:{
        name:"asdd",
        age:23
      },
      success:(res)=>{
        console.log(res)
      },
       fail: (res) => {
        console.log(res)
      }
    }
  )

},

int2:function(){
  db.collection('yongh').doc('08560c9e5d0209d0008dbc7a5662f153').update({
    data: {
      name: "add"
    },
    success: function (res) {
      console.log(res)
    }
  })

},











  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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