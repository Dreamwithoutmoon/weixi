const db = wx.cloud.database({
  env: 'a-hpcrq'
})
Page({
  data: {
    userInfo: {},
    passW: '',
    userName:''
  },
  userNameInput: function (e) {
    console.log(e.detail)
    this.setData({
      userName: e.detail
    })
    console.log(this.data.userName)
  },
  passwd: function (e) {
    console.log(e.detail)
    this.setData({
      passW: e.detail
    })
    console.log(this.data.passW)
  }, 
  loginBtnClick: function (e) {
    console.log("用户名：" + this.data.userName + " 密码：" + this.data.passW);
  },
  onInput: function (e) {
    this.setData({
      passW: e.detail.value
    })
    console.log(e.detail.value)
  },
  loginBtnClick: function () {
    if (this.data.userName.length == 0 || this.data.passW.length == 0) {
      wx.showModal({
        title: '温馨提示：',
        content: '用户名或密码不能为空！',
        showCancel: false
      })
    }else{
    db.collection('asd').where({name: this.data.userName }).get(
  ).then(res=>{
    console.log(res)
    if (this.data.passW == res.data[0].pass) {
      wx.setStorageSync('name', res.data[0].name); 
      wx.redirectTo({
        url: '/pages/yh/yh'
      }) 

 
    }
    else {
      wx.showModal({
        title: '密码错误',
        content: '密码错误',
                showCancel: false
      });
    }

  })
    }
  }
})
