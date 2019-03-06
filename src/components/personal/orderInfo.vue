<template>
  <div class="order_info_box">
    <div class="top">
      <div class="top_title">我的订单</div>
    </div>
    <div class="order_list">
      <div class="item" v-for="(item,index) in orderList" :key="index">
        <div class="item_top">
          <div class="left">
            <span class="ordersn">
              订单号：
              <span class="ordersn_num">{{item.tradoNo}}</span>
            </span>
            <span class="vertical_line">|</span>
            <span class="order_time">
              下单时间:
              <span class="time">{{item.createTime}}</span>
            </span>
          </div>
          <div class="right">
            <span class="price">CNY {{item.rentalPrice}}</span>
            <span class="status paid">{{item.status === 'UNPAID' ? '未支付' : item.status === 'PAID' ? '已支付' : item.status === 'REFUNDING' ? '退款中' : item.status === 'REFUNDED' ? '已退款' : ''}}</span>
          </div>
        </div>
        <div class="item_content">
          <div class="left"></div>
          <div class="center">
            <p class="title">定制化租房(Melbourne·Australia)</p>
            <div class="house_demand">
              <span class="text">房源需求：</span>
              <span class="status sure des">
                <i class="icon"></i>
                已确认
              </span>
            </div>
            <div class="area">
              <span class="text">地区：</span>
              <span class="des">Caulfield</span>
            </div>
            <div class="type">
              <div class="housing_type">
                <span class="text">户型：</span>
                <span class="bedroom des">{{item.expectedMaxBedroomNum}}<i class="icon"></i></span>
                <span class="toilet des">{{item.expectedMaxToiletNum}}<i class="icon"></i></span>
              </div>
              <div class="house_type">
                <span class="text">房型：</span>
                <span class="des">Apartment公寓、Townhouse联排别墅</span>
              </div>
            </div>
            <div class="price_time">
              <div class="price">
                <span class="text">每周预算：</span>
                <span class="des">不高于AU$ {{item.expectedMaxRentalPrice}}</span>
              </div>
              <div class="time">
                <span class="text">预期入住时间:</span>
                <span class="des">{{item.expectedCheckInTime}}</span>
              </div>
            </div>
            <div class="is_feet">
              <span class="text">是否饲养宠物：</span>
              <span class="des">是 或 否</span>
            </div>
            <div class="others">
              <span class="text">其他需求描述：</span>
              <span class="des">{{item.requirement.slice(0, 50)}}</span>
            </div>
          </div>
          <div class="right">
            <span class="btn detail">订单详情</span>
            <span class="btn modify">修改订单</span>
            <span class="btn refund" @click="refundOrder(item.id)">申请退款</span>
            <span class="btn delete" @click="deleteOrder(item.id)">删除订单</span>
            <span class="btn custom">定制管理</span>
          </div>
        </div>
        <div class="custom_flow" v-show="item.type === 'CUSTOM'">
          <div class="top">
            <p class="title">房源定制化服务管理</p>
            <p class="title_des">友情提示：请点击关键词完成任务要求，如遇困难可以咨询顾问。</p>
          </div>
          <div class="flow">
            <div class="step step_1" @click="custom(item.id)">
              <div class="step_num">1</div>
              <span class="text">专属服务顾问(微信)</span>
              <div class="right_btn wait">
                <i class="icon"></i>
                <span>待完成</span>
              </div>
            </div>
            <div class="next_step">
              <img class="next_step_img" src="../../assets/img/flow.png">
            </div>
            <div class="step step_2" @click="collectTenantInfo(item.id)">
              <div class="step_num">2</div>
              <span class="text">房客相关信息收集表</span>
              <div class="right_btn wait">
                <i class="icon"></i>
                <span>待完成</span>
              </div>
            </div>
            <div class="next_step">
              <img class="next_step_img" src="../../assets/img/flow.png">
            </div>
            <div class="step step_3" @click="orderMaterial(item.id)">
              <div class="step_num">3</div>
              <span class="text">海外租房材料及证明</span>
              <div class="right_btn wait">
                <i class="icon"></i>
                <span>待完成</span>
              </div>
            </div>
            <div class="next_step">
              <img class="next_step_img" src="../../assets/img/flow.png">
            </div>
            <div class="step step_4" @click="seaoutHouse(item.id)">
              <div class="step_num">4</div>
              <span class="text">精选海外房源</span>
              <div class="right_btn wait">
                <i class="icon"></i>
                <span>待完成</span>
              </div>
            </div>
            <div class="next_step">
              <img class="next_step_img" src="../../assets/img/flow.png">
            </div>
            <div class="step step_5" @click="getAccept(item.id)">
              <div class="step_num">5</div>
              <span class="text">海外房源入住许可</span>
              <div class="right_btn wait">
                <i class="icon"></i>
                <span>待完成</span>
              </div>
            </div>
            <div class="next_step">
              <img class="next_step_img" src="../../assets/img/flow.png">
            </div>
            <div class="finally">
              <img class="icon" src="../../assets/img/bsure.png">
              <p class="text">恭喜获得房源，定制服务完成</p>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item_top">
          <div class="left">
            <span class="ordersn">
              订单号：
              <span class="ordersn_num">12321321321322</span>
            </span>
            <span class="vertical_line">|</span>
            <span class="order_time">
              下单时间:
              <span class="time">2018年1月21日 12:11PM</span>
            </span>
          </div>
          <div class="right">
            <span class="price">CNY 3,000</span>
            <span class="status paid">已支付</span>
          </div>
        </div>
        <div class="item_content">
          <div class="left"></div>
          <div class="center">
            <p class="title">定制化租房(Melbourne·Australia)</p>
            <div class="house_demand">
              <span class="text">房源需求：</span>
              <span class="status sure des">
                <i class="icon"></i>
                已确认
              </span>
            </div>
            <div class="area">
              <span class="text">地区：</span>
              <span class="des">Caulfield</span>
            </div>
            <div class="type">
              <div class="housing_type">
                <span class="text">户型：</span>
                <span class="bedroom des">2<i class="icon"></i></span>
                <span class="toilet des">2<i class="icon"></i></span>
              </div>
              <div class="house_type">
                <span class="text">房型：</span>
                <span class="des">Apartment公寓、Townhouse联排别墅</span>
              </div>
            </div>
            <div class="price_time">
              <div class="price">
                <span class="text">每周预算：</span>
                <span class="des">不高于AU$ 450</span>
              </div>
              <div class="time">
                <span class="text">预期入住时间：</span>
                <span class="des">2018年6月中旬前后</span>
              </div>
            </div>
            <div class="is_feet">
              <span class="text">是否饲养宠物：</span>
              <span class="des">是 或 否</span>
            </div>
            <div class="others">
              <span class="text">其他需求描述：</span>
              <span class="des">此处根据下单的需求表中顾客额外提出的需求情况，自动调用，最多可以支持50个字。此处根据下单的需求表中顾客额外提出的需求情况，自动调用，最多可以支持50个字。此处根据下单的需求表中顾客额外提出的需求情况，自动调用，最多可以支持50个字。</span>
            </div>
          </div>
          <div class="right">
            <span class="btn detail">订单详情</span>
            <span class="btn modify">修改订单</span>
            <span class="btn refund">申请退款</span>
            <span class="btn delete">删除订单</span>
            <span class="btn custom on">定制管理</span>
          </div>
        </div>
        <div class="custom_flow">
          <div class="top">
            <p class="title">房源定制化服务管理</p>
            <p class="title_des">友情提示：请点击关键词完成任务要求，如遇困难可以咨询顾问。</p>
          </div>
          <div class="flow">
            <div class="step step_1" @click="custom(1)">
              <div class="step_num">1</div>
              <span class="text">专属服务顾问(微信)</span>
              <div class="right_btn sure">
                <i class="icon"></i>
                <span>已完成</span>
              </div>
            </div>
            <div class="next_step">
              <img class="next_step_img" src="../../assets/img/flow.png">
            </div>
            <div class="step step_2" @click="collectTenantInfo(1)">
              <div class="step_num">2</div>
              <span class="text">房客相关信息收集表</span>
              <div class="right_btn wait">
                <i class="icon"></i>
                <span>待完成</span>
              </div>
            </div>
            <div class="next_step">
              <img class="next_step_img" src="../../assets/img/flow.png">
            </div>
            <div class="step step_3" @click="orderMaterial(1)">
              <div class="step_num">3</div>
              <span class="text">海外租房材料及证明</span>
              <div class="right_btn unpass">
                <i class="icon"></i>
                <span>未通过</span>
              </div>
            </div>
            <div class="next_step">
              <img class="next_step_img" src="../../assets/img/flow.png">
            </div>
            <div class="step step_4" @click="seaoutHouse(1)">
              <div class="step_num">4</div>
              <span class="text">精选海外房源</span>
              <div class="right_btn ing">
                <i class="icon"></i>
                <span>审核中</span>
              </div>
            </div>
            <div class="next_step">
              <img class="next_step_img" src="../../assets/img/flow.png">
            </div>
            <div class="step step_5" @click="getAccept(1)">
              <div class="step_num">5</div>
              <span class="text">海外房源入住许可</span>
              <div class="right_btn sure">
                <i class="icon"></i>
                <span>已完成</span>
              </div>
            </div>
            <div class="next_step">
              <img class="next_step_img" src="../../assets/img/flow.png">
            </div>
            <div class="finally">
              <img class="icon" src="../../assets/img/bsure.png">
              <p class="text">恭喜获得房源，定制服务完成</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wechat_model model" v-show="isShowWechatModel">
      <div class="wechat_content content">
        <div class="close" @click="isShowWechatModel = false">
          <img src="../../assets/img/close2.png">
        </div>
        <div class="top">
          <p class="title">1.请关注官方微信服务号</p>
        </div>
        <div class="left">
          <div class="item_list">
            <div class="item">
              <img class="icon" src="../../assets/img/rigth_green.png" alt="">
              <span class="text">在线客服答疑解惑</span>
            </div>
            <div class="item">
              <img class="icon" src="../../assets/img/rigth_green.png" alt="">
              <span class="text">订单进度定期更新</span>
            </div>
            <div class="item">
              <img class="icon" src="../../assets/img/rigth_green.png" alt="">
              <span class="text">最新房源随时查看</span>
            </div>
            <div class="item">
              <img class="icon" src="../../assets/img/rigth_green.png" alt="">
              <span class="text">生活服务随叫随到</span>
            </div>
          </div>
          <div class="erweima_box">
            <div class="info">
              <p>微信扫一扫关注</p>
              <p>获取最新订单信息</p>
            </div>
            <div class="erweima">
              <img class="erweima_img" src="../../assets/img/erweima2.png" alt="">
            </div>
          </div>
        </div>
        <div class="bottom">
          <p class="title">2.请输入您的个人微信号 您的顾问将马上联系您</p>
          <div class="input_box">
            <input class="wechat_input" type="text" v-model="wechatId" placeholder="输入您的微信号">
            <span class="confirm_btn" @click="submitWechatId">提交</span>
          </div>
        </div>
      </div>
    </div>
    <div class="email_model model" v-show="isShowEmailModel">
      <div class="email_content content">
        <div class="close" @click="isShowEmailModel = false">
          <img src="../../assets/img/close2.png">
        </div>
        <div class="email_center">
          <div class="email_img">
            <img src="../../assets/img/mail.png">
          </div>
          <div class="email_main">
            <p class="title">输入接收邮箱</p>
            <p class="title">获取房源入住许可</p>
            <input v-model="email" class="input" type="text">
            <span class="confirm_btn" @click="submitEmail">提交</span>
          </div>
        </div>
      </div>
    </div>
    <div class="submit_success_model model" v-show="isShowSuccessModel">
      <div class="submit_success_content content">
        <div class="close" @click="isShowSuccessModel = false">
          <img src="../../assets/img/close2.png">
        </div>
        <div class="submit_success_center">
          <div class="submit_success_img">
            <img src="../../assets/img/bsure.png">
          </div>
          <div class="submit_success_main">
            <p class="title">提交成功</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderInfo',
  data () {
    return {
      orderList: [],
      reason: '',
      isShowWechatModel: false,
      isShowEmailModel: false,
      isShowSuccessModel: false,
      currentId: -1,
      wechatId: '',
      email: ''
    }
  },
  created () {
    this.getOrderInfo()
  },
  methods: {
    getOrderInfo () {
      let that = this
      this.$ajax({
        url: 'mxj/order/list',
        method: 'get'
      })
        .then((res) => {
          if (res.data.code === 0) {
            that.orderList = res.data.data
          }
          console.log(res.data)
        })
    },
    // step1 : 专属服务顾问
    custom (id) {
      this.isShowWechatModel = true
      this.currentId = id
      // this.$ajax({
      //   method: 'get',
      //   url: 'mxj/order/custom/track',
      //   params: {
      //     orderId: id
      //   }
      // })
      //   .then((res) => {
      //     if (res.data.code === 0) {
      //       console.log(res.data.message)
      //     }
      //     console.log('custom' + res.data)
      //   })
    },
    // step2 : 房客相关信息收集表
    collectTenantInfo (id) {
      this.$router.push('/custom/collectTenantInfo/' + id)
    },
    // step3 : 海外租房材料及证明
    orderMaterial (id) {
      this.$router.push('/custom/orderMaterial/' + id)
    },
    // step4 : 精选海外房源
    seaoutHouse (id) {
      // 精选海外房源
      this.$router.push('/seaoutHouse')
    },
    // step5 : 获取海外房源入住许可
    getAccept (id) {
      this.isShowEmailModel = true
      this.currentId = IDBFactory
    },
    // 提交微信号
    submitWechatId () {
      let that = this
      this.$ajax({
        method: 'post',
        url: 'mxj/order/material/advisor',
        data: {
          orderId: this.currentId,
          wechatId: this.wechatId
        }
      })
        .then((res) => {
          if (res.data.code === 0) {
            that.isShowWechatModel = false
            that.isShowSuccessModel = true
          }
        })
    },
    submitEmail () {
      let that = this
      this.$ajax({
        method: 'post',
        url: 'mxj/order/material/checkin',
        data: {
          orderId: this.currentId,
          email: this.email
        }
      })
        .then((res) => {
          if (res.data.code === 0) {
            that.isShowEmailModel = false
            that.isShowSuccessModel = true
          }
        })
    },
    // 退款
    refundOrder (id) {
      let that = this
      this.$ajax({
        method: 'post',
        url: 'mxj/order/refund',
        data: {
          orderId: id,
          reason: this.reason
        }
      })
        .then((res) => {
          if (res.data.code === 0) {
            console.log(res.data.message)
            that.getOrderInfo()
          }
          console.log('refund' + res.data)
        })
    },
    // 删除订单
    deleteOrder (id) {
      let that = this
      this.$ajax({
        method: 'post',
        url: 'mxj/order/delete',
        data: {
          orderId: id
        }
      })
        .then((res) => {
          if (res.data.code === 0) {
            console.log(res.data.message)
            that.getOrderInfo()
          }
          console.log('delete' + res.data)
        })
    }
  }
}
</script>

<style lang="less">
@orangeColor: #fe5932;
input{
  border-color: @orangeColor;
}
.order_info_box{
  width: 1000px;
  margin-bottom: 30px;
  background: #fff;
  margin-left: 20px;
  box-sizing: border-box;
  float: left;
  .top{
    .top_title{
      padding: 30px 0 20px;
      font-size: 30px;
      text-align: center;
    }
  }
  .order_list{
    .item{
      margin: 0 20px 20px;
      width: 960px;
      // height: 290px;
      border: 1px solid #e8e8e8;
      box-sizing: border-box;
      .item_top{
        height: 50px;
        background: #f8f8f8;
        border-bottom: 1px solid #e8e8e8;
        box-sizing: border-box;
        padding: 0 20px;
        line-height: 50px;
        .left{
          float: left;
          font-size: 14px;
          .ordersn{
            color: #999;
            .ordersn_num{
              color: #333;
            }
          }
          .vertical_line{
            color: #999;
            margin: 0 10px;
          }
          .order_time{
            color: #999;
            .time{
              color: #333;
            }
          }
        }
        .right{
          float: right;
          .price{
            font-size: 20px;
            color: #333;
          }
          .status{
            margin-left: 30px;
            font-size: 14px;
            font-weight: bold;
            &.paid{
              color: #33cc33;
            }
          }
        }
      }
      .item_content{
        padding: 20px;
        height: 240px;
        box-sizing: border-box;
        .left{
          float: left;
          width: 200px;
          height: 200px;
          background-color: #ddd;
        }
        .center{
          padding: 0 10px;
          box-sizing: border-box;
          float: left;
          width: 610px;
          height: 200px;
          font-size: 12px;
          color: #999;
          .title{
            margin-top: 0;
            color: #333;
          }
          .des{
            color: #333;
          }
          .house_demand{
            height: 15px;
            .sure{
              color: #33cc33;
              font-weight: bold;
              line-height: 15px;
              .icon{
                display: inline-block;
                width: 15px;
                height: 15px;
                background: url(../../assets/img/status_sure.png);
                background-size: 100%;
                vertical-align: text-top;
              }
            }
          }
          .type{
            .housing_type{
              display: inline-block;
              width: 180px;
              .bedroom{
                .icon{
                  display: inline-block;
                  width: 18px;
                  height: 17px;
                  background: url(../../assets/img/bed.png) no-repeat;
                  background-size: 100%;
                  vertical-align: text-top;
                  margin-left: 3px;
                }
              }
              .toilet{
                margin-left: 10px;
                .icon{
                  display: inline-block;
                  width: 18px;
                  height: 17px;
                  background: url(../../assets/img/shower.png) no-repeat;
                  background-size: 100%;
                  vertical-align: text-top;
                  margin-left: 3px;
                }
              }
            }
            .house_type{
              display: inline-block;
            }
          }
          &>div:not(:last-child){
            margin-bottom: 12px;
          }
          .price_time{
            .price{
              display: inline-block;
              width: 180px;
            }
            .time{
              display: inline-block;
            }
          }
          .others{
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
        }
        .right{
          float: right;
          width: 100px;
          .btn{
            cursor: pointer;
            display: inline-block;
            width: 100px;
            height: 30px;
            border: 1px solid #e8e8e8;
            box-sizing: border-box;
            border-radius: 5px;
            text-align: center;
            line-height: 30px;
            margin-bottom: 12px;
            font-size: 14px;
            color: #333;
            &.custom{
              background-color: @orangeColor;
              color: #fff;
              &.on{
                background-color: #fff;
                color: @orangeColor;
              }
            }
          }
        }
      }
      .custom_flow{
        border-top: 1px solid #e8e8e8;
        .top{
          text-align: center;
          .title{
            font-size: 30px;
            color: #333;
            margin: 30px 0 20px;
          }
          .title_des{
            margin: 0;
            font-size: 14px;
            color: #999;
          }
        }
        .flow{
          width: 450px;
          margin: 30px auto 50px;
          .step{
            cursor: pointer;
            .step_num{
              text-align: center;
              line-height: 50px;
              width: 50px;
              height: 50px;
              display: inline-block;
              border-radius: 50%;
              font-size: 30px;
              color: #fe683e;
              background-color: #ffe6de;
              margin-right: 15px;
            }
            .text{
              color: #fe683e;
              font-size: 20px;
            }
            .right_btn{
              float: right;
              width: 120px;
              height: 40px;
              margin-top: 5px;
              text-align: center;
              border: 1px solid #e8e8e8;
              box-sizing: border-box;
              line-height: 40px;
              border-radius: 5px;
              font-size: 16px;
              // 已完成
              &.sure{
                color: #2dcb2c;
                .icon{
                  display: inline-block;
                  width: 18px;
                  height: 18px;
                  background: url(../../assets/img/status_sure.png) no-repeat;
                  background-size: 100%;
                  vertical-align: text-bottom;
                  margin-right: 10px;
                }
              }
              // 待完成
              &.wait{
                color: #fe9953;
                .icon{
                  display: inline-block;
                  width: 18px;
                  height: 18px;
                  background: url(../../assets/img/status_wait_confirm.png) no-repeat;
                  background-size: 100%;
                  vertical-align: text-bottom;
                  margin-right: 10px;
                }
              }
              // 未通过
              &.unpass{
                color: #ff4b51;
                .icon{
                  display: inline-block;
                  width: 18px;
                  height: 18px;
                  background: url(../../assets/img/status_unpass.png) no-repeat;
                  background-size: 100%;
                  vertical-align: text-bottom;
                  margin-right: 10px;
                }
              }
              // 审核中
              &.ing{
                color: #333;
                .icon{
                  display: inline-block;
                  width: 18px;
                  height: 18px;
                  background: url(../../assets/img/status_ing.png) no-repeat;
                  background-size: 100%;
                  vertical-align: text-bottom;
                  margin-right: 10px;
                }
              }
            }
          }
          .next_step{
            width: 50px;
            text-align: center;
            margin: 5px 0 3px;
          }
          .finally{
            overflow: hidden;
            .icon{
              float: left;
              margin-right: 15px;
            }
            .text{
              float: left;
              font-size: 20px;
              line-height: 50px;
              margin: 0;
            }
          }
        }
      }
    }
  }
  .model{
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.5);
    .wechat_content{
      position: absolute;
      left: 50%;
      margin-left: -421px;
      background: url('../../assets/img/custom_bg.png');
      background-size: 100% 100%;
      width: 842px;
      height: 998px;
      color: #fff;
      .close{
        position: absolute;
        right: 0px;
        top: 0px;
        padding: 20px;
        box-sizing: border-box;
        width: 62px;
        height: 62px;
        cursor: pointer;
        z-index: 1000;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .top{
        width: 100%;
        text-align: center;
        font-size: 28px;
        position: absolute;
        top: 30px;
      }
      .left{
        position: absolute;
        top: 180px;
        left: 100px;
        font-size: 16px;
        .item_list{
          .item{
            margin-bottom: 15px;
            .icon{
              width: 22px;
              height: 22px;
              vertical-align: text-top;
              margin-right: 5px;
            }
            .text{
              color: #ededed;
            }
          }
        }
        .erweima_box{
          margin-top: 60px;
          .info{
            width: 166px;
            height: 82px;
            background: url(../../assets/img/chat_bg.png);
            color: #333;
            margin-left: 1px;
            font-size: 14px;
            padding-top: 15px;
            box-sizing: border-box;
            p{
              margin: 0 0 5px;
              text-align: center;
            }
          }
          .erweima{
            margin-top: 5px;
            .erweima_img{
              width: 168px;
              height: 168px;
            }
          }
        }
      }
      .bottom{
        width: 100%;
        color: #000;
        position: absolute;
        top: 739px;
        .title{
          font-size: 18px;
          margin-top: 60px;
          margin-bottom: 44px;
          text-align: center;
        }
        .input_box{
          overflow: hidden;
          .wechat_input{
            margin-left: 200px;
            float: left;
            width: 334px;
            height: 60px;
            box-sizing: border-box;
            border: 1px solid #d0d0d0;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            border-right: none;
            padding-left: 15px;
            font-size: 20px;
          }
          .confirm_btn{
            cursor: pointer;
            float: left;
            width: 120px;
            height: 60px;
            background-color: @orangeColor;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            color: #fff;
            font-size: 20px;
            text-align: center;
            line-height: 60px;
          }
        }
      }
    }
    .email_content{
      position: absolute;
      top: 50%;
      left: 50%;
      width: 500px;
      height: 400px;
      margin-top: -200px;
      margin-left: -250px;
      border-radius: 10px;
      text-align: center;
      color: #333;
      background: #fff;
      padding: 20px;
      box-sizing: border-box;
      .close{
        position: absolute;
        right: 0px;
        top: 0px;
        padding: 20px;
        box-sizing: border-box;
        width: 62px;
        height: 62px;
        cursor: pointer;
        z-index: 1000;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .email_center{
        .email_img{
          margin: 50px auto 10px;
          width: 100px;
          height: 100px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .email_main{
          .title{
            font-size: 18px;
            line-height: 25px;
            margin: 0;
          }
          .input{
            margin: 20px auto;
            padding: 5px 10px;
            display: block;
            width: 380px;
            height: 40px;
            box-sizing: border-box;
            border: 1px solid #e8e8e8;
            border-radius: 5px;
          }
          .confirm_btn{
            cursor: pointer;
            display: inline-block;
            width: 120px;
            height: 40px;
            color: #fff;
            line-height: 40px;
            text-align: center;
            border-radius: 5px;
            background-color: @orangeColor;
          }
        }
      }
    }
    .submit_success_content{
      position: absolute;
      top: 50%;
      left: 50%;
      width: 400px;
      height: 300px;
      margin-top: -150px;
      margin-left: -200px;
      border-radius: 10px;
      text-align: center;
      color: #333;
      background: #fff;
      padding: 60px;
      box-sizing: border-box;
      .close{
        position: absolute;
        right: 0px;
        top: 0px;
        padding: 20px;
        box-sizing: border-box;
        width: 62px;
        height: 62px;
        cursor: pointer;
        z-index: 1000;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .submit_success_center{
        .submit_success_img{
          margin: 0 auto 20px;
          width: 100px;
          height: 100px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .submit_success_main{
          .title{
            font-size: 24px;
          }
        }
      }
    }
  }
}
</style>
