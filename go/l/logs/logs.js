//logs.js
const util = require('../../utils/util.js')

Page({
  data: {     //Participate in page rendering data.
    logs: []
  },
  onLoad: function () {  //Execution after page rendering.
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
