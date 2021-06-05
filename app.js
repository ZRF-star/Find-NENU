//app.js
var Bmob = require('utils/bmob.js');
Bmob.initialize("9a99a6f6806289a400166dc98fde5978", "1bd6f060672792a6fa4586686bc74cdf");
App({
  onLaunch: function () {
    var user = new Bmob.User() //开始注册用户
    user.auth().then(function (obj) {
      console.log('登陆成功')
    },
      function (err) {
        console.log('失败了', err)
      });
  },
    // 登录
   getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == 'function' && cb(this.globalData.userInfo)
    } else {
      //调用登录接口 
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == 'function' && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
   },
    globalData: {
    userInfo: null
  }
})