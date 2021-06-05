Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputtext: '',
    photo: "",
    src: "/images/addimage.png",
    flag: true,
    maxlength: 300
  },

  chooseImage: function () {
    var that = this
    wx.chooseImage({
      count: 3,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        that.setData({
          src: tempFilePaths,
          flag: false
        })
      }
    })
  },
  clear: function () {
    this.setData({
      src: "/img/addimage.png",
      flag: true
    })
  },
  submitdate: function (event) {
    var textInfo = event.detail.value;
    wx.setStorage({
      key: 'textInfo',
      data: textInfo,
      success: function (res) {
        wx.navigateTo({
          url: '../First/First'
        })
      }
    })

  }

})
