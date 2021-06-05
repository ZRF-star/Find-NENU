const app = getApp()
Page({
  data: {
    // 初始化用户信息：userInfo hasUserInfo
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //将信息更新到动态数据上
  getMyInfo: function (e) {
    let info = e.detail.userInfo;
    this.setData({
      isLogin: true,//确认登录状态
      src: info.avatarUrl,//更新图片来源
      nickName: info.nickName//更新昵称
    })
    // 获取到用户信息后，调用wx.navigateBack()返回上一页，即个人中心页，wx.navigateBack()一定要在这个位置：
    wx.navigateBack()
  },

  //个人信息
  userinfo(event) {
    wx.navigateTo({
      url: 'userinfo/userinfo'
    })
  },
  //我要发布
  userpublish(event) {
    wx.navigateTo({
      url: 'userpublish/userpublish'
    })
  },
  //我的消息
  mymessage(event) {
    wx.navigateTo({
      url: 'msg/msg'
    })
  },
  //我的收藏
  mycollect(event) {
    wx.navigateTo({
      url: 'collect/collect'
    })
  },
  //投诉
  mycpt(event) {
    wx.navigateTo({
      url: 'cpt/cpt'
    })
  },
  myuserfile(event) {
    wx.navigateTo({
      url: 'userfile/userfile'
    })
  }
})
