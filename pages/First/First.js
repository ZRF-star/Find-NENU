// pages/First/First.js
Page({

  data: {
    textInfo: {},
    currentView: 1,
    swiperImg: [
      { src: '/images/11.jpg' },
      { src: '/images/22.jpg' },
      { src: '/images/77.jpg' },
    ],
  },

  tabItemTap: function (e) {
    var _dataSet = e.currentTarget.dataset;
    this.setData({
       currentView: _dataSet.view
       })
  },


  onLoad: function () {
    var that = this;
    wx.getStorage({
      key: 'textInfo',
      success: function (res) {
        that.setData({
          textInfo: res.data
        })
      }
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