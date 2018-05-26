//index.js
//获取应用实例
const app = getApp()

Page({
  clickMe: function () {
    this.setData({ msg: "你好啊" })
  },
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
//轮播图片
    jsonindex: [
    [
      { id: 1 ,url:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'},
      { id: 2 ,url:'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'},
      { id: 3 ,url:'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'},
    ],
//首页菜单导航页
    [
      { id :1, icon: "http://pics.sc.chinaz.com/Files/pic/icons128/6981/b10.png", title: '注射',url: '/pages/inject/inject'},
      { id: 2, icon: "http://pics.sc.chinaz.com/Files/pic/icons128/6981/b10.png", title: '文秀', url: '/pages/inject/inject'},
      { id: 3, icon: "http://pics.sc.chinaz.com/Files/pic/icons128/6981/b11.png", title: '私密', url: '/pages/inject/inject'},
      { id: 4, icon: "http://pics.sc.chinaz.com/Files/pic/icons128/6981/b14.png", title: '美容', url: '/pages/inject/inject' },
      { id: 5, icon: "http://pics.sc.chinaz.com/Files/pic/icons128/6981/b14.png", title: '美容', url: '/pages/inject/inject' },
    ],
//vido
    'http://www.w3school.com.cn//i/movie.mp4',
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShareAppMessage:function(res){
    return {
      title:'神美国际',
      path:'/pages/index/index'
    }
  },
  wx:function(){
    wx.navigateTo({
      url: 'pages/inject/inject',
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
