const app = getApp()
const db = wx.cloud.database({
  env: 'a-hpcrq'
})
Page({
  data: {
    list:[],
    tabIndex: 0,
    // 统计商品数量和价格
    orderCount: {
      num: 0,
      money: 0
    },
    bottomFlag: false,
    // 提交的订单
    orders: true,
    menus: [{
      id: 1,
      menu: '老板力荐'
    }, {
      id: 2,
      menu: '精品套餐'
    }, {
      id: 3,
      menu: '优惠美食'
    }, {
      id: 4,
      menu: '饮品'
    }, {
      id: 5,
      menu: '补单'
    }
     ],
    // 商品列表
    items: [{
      id: 1,
      title: '湖南辣椒小炒肉1',
      price: 12,
      active: false,
      num: 2
    }, {
      id: 2,
      title: '湖南辣椒小炒肉2',
      price: 13,
      active: false,
      num: 1
    }, {
      id: 3,
      title: '湖南辣椒小炒肉3',
      price: 14,
      active: false,
      num: 1
    },],
     items2          : [{
      id: 1,
      title: '辣椒小炒肉1',
      price: 12,
      active: false,
      num: 2
    }, {
      id: 2,
      title: '湖南辣椒小炒肉2',
      price: 13,
      active: false,
      num: 1
    }, {
      id: 3,
      title: '湖南辣椒小炒肉3',
      price: 14,
      active: false,
      num: 1
    },]
  },
  // 下拉刷新
  onPullDownRefresh: function () {
    setTimeout(() => {
      wx.showToast({
        title: '成功加载数据',
        icon: 'success',
        duration: 500
      });
      wx.stopPullDownRefresh()
    }, 500);
  },
  tabMenu: function (event) {
    let index = event.target.dataset.index;
    this.setData({
      items: this.data.items(index),
      tabIndex: index
    });
    
  },
  // 点击去购物车结账
  card: function () {
    let that = this;
    // 判断是否有选中商品
    if (that.data.orderCount.num !== 0) {
      wx.showToast({
        title: '购买成功：',
        showCancel: false
      }
      )
      wx.redirectTo({
        url: '/pages/ysq/ysq'
      });
    } else {
      wx.showToast({
        title: '您未选中任何商品',
        icon: 'none',
        duration: 2000
      })
    }
  },
  addOrder: function (event) {
    let that = this;
    let id = event.target.dataset.id;
    let index = event.target.dataset.index;
    let param = this.data.items[index];
    let subOrders = []; // 购物单列表存储数据
    param.active ? param.active = false : param.active = true;
    // 改变添加按钮的状态
    this.data.items.splice(index, 1, param);
    that.setData({
      items: this.data.items
    });
    // 将已经确定的菜单添加到购物单列表
    this.data.items.forEach(item => {
      if (item.active) {
        subOrders.push(item);
      }
    });
    // 判断底部提交菜单显示隐藏
    if (subOrders.length == 0) {
      that.setData({
        bottomFlag: false
      });
    } else {
      that.setData({
        bottomFlag: true
      });
    }
    let money = 0;
    let num = subOrders.length;
    subOrders.forEach(item => {
      money += item.price; // 总价格求和
    });
    let orderCount = {
      num,
      money
    }
    // 设置显示对应的总数和全部价钱
    this.setData({
      orderCount
    });
    // 将选中的商品存储在本地
    wx.setStorage({
      key: "orders",
      data: subOrders
    });
  },
  onLoad: function (options) {
    var spid = wx.getStorageSync('spid'); 
    console.log("asdasdsad"+spid)
    db.collection('asd').where({ dpid: spid}).get(
    ).then(res => {
      this.setData({
        list: res.data
      })
      console.log(this.data.list)
    })
  },
  onClickLeft() {
    console.log(this.data.list)
    wx.redirectTo({
      url: '/pages/spxq/spxq'//[主页面]
    })
  },
})