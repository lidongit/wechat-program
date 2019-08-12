const constant = require("../../util/constant.js");
const http = require("../../util/http.js");

Page({
  data: {
    window_width: getApp().globalData.window_width,
    banner_list: [{
      banner_id: 0,
      banner_image: '//qb-img.qiushibaike.com/yuedu_img_res/touch/4.png'
    }, {
      banner_id: 1,
      banner_image: '//qb-img.qiushibaike.com/yuedu_img_res/touch/21.png'
    }, {
      banner_id: 2,
      banner_image: '//qb-img.qiushibaike.com/yuedu_img_res/touch/3.png'
    }],
    category_list: [],
    product_list: [
      {
        title: '非吸收性外科缝针PF-1408',
        price: 145,
        cover: '//qb-img.qiushibaike.com/yuedu_img_res/touch/5.png'
      },
      {
        title: '非吸收性外科缝针PF-147ds8',
        price: 1459,
        cover: '//qb-img.qiushibaike.com/yuedu_img_res/touch/53.png'
      },
      {
        title: '非吸收性外科缝针PF-1478',
        price: 59,
        cover: '//qb-img.qiushibaike.com/yuedu_img_res/touch/58.png'
      },
      {
        title: '非吸收性外科缝针PF-1408',
        price: 145,
        cover: '//qb-img.qiushibaike.com/yuedu_img_res/touch/5.png'
      },
      {
        title: '非吸收性外科缝针PF-147ds8',
        price: 1459,
        cover: '//qb-img.qiushibaike.com/yuedu_img_res/touch/53.png'
      },
      {
        title: '非吸收性外科缝针PF-1478',
        price: 59,
        cover: '//qb-img.qiushibaike.com/yuedu_img_res/touch/58.png'
      },
    ],
  },
  onLoad: function() {
    
  },
  onReady: function() {

  },
  onShow: function() {

  },
  onHide: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {

  }
});