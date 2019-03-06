<template>
  <div class="house_custom_box">
    <v-header></v-header>
    <div class="content_box">
      <div class="top_box">
        <div class="title_box">
          <p class="title">房源定制化服务</p>
        </div>
        <div class="banner_box">
          <textarea class="textarea"></textarea>
          <div class="btn_group">
            <span class="ask_now btn">立即咨询</span>
            <span class="apply btn">申请服务</span>
          </div>
        </div>
      </div>
      <div class="main_box">
        <div class="custom_flow_box">
          <p class="title">定制服务流程</p>
          <div class="step_box">
            <div class="circle first active">
              <p class="num">1</p>
              <p class="text">下单支付</p>
              <div class="tooltip bottom">
                <p class="label">说明：</p>
                <p class="text">咨询了解服务并支付下单，开启您的私人定制之旅~</p>
              </div>
            </div>
            <div class="circle second">
              <p class="num">2</p>
              <p class="text">资料完善</p>
              <div class="tooltip top">
                <p class="label">说明：</p>
                <p class="text">依据当地租房的相关要求，线上提交相关信息和材料，等待您的专属顾问为您审核把关。</p>
              </div>
            </div>
            <div class="circle third">
              <p class="num">3</p>
              <p class="text">房源挑选</p>
              <div class="tooltip bottom">
                <p class="label">说明：</p>
                <p class="text">专属顾问全程服务，为您提供真实、有效、让您满意的海量房源，供您挑选，并为您安排线上和线下两种看房渠道，保障'租到的'就是'看到的'。</p>
              </div>
            </div>
            <div class="circle fourth">
              <p class="num">4</p>
              <p class="text">顾问办理</p>
              <div class="tooltip top">
                <p class="label">说明：</p>
                <p class="text">依据您的偏好选择，安居顾问为您办理入住，获得房源入住许可。</p>
              </div>
            </div>
            <div class="circle fifth">
              <p class="num">5</p>
              <p class="text">签约入住</p>
              <div class="tooltip bottom">
                <p class="label">说明：</p>
                <p class="text">缴纳相关费用并签署房屋合同，配合安居顾问完成入住相关事宜，等待安心入住~</p>
              </div>
            </div>
          </div>
        </div>
        <div class="example_show_box">
          <p class="title">案例展示</p>
          <div class="example_box">
            <div class="item">
              <div class="picture left">
                <img src="../assets/img/custom_picture_1.png">
              </div>
              <div class="text right">
                <p class="example_num">案例一</p>
                <p class="example_title">墨尔本市中心 一居室城市公寓</p>
                <p class="example_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima omnis voluptatum nisi, veritatis tenetur ipsum officiis maiores totam necessitatibus exercitationem ratione esse repudiandae fuga itaque aspernatur dolorum alias similique unde!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima omnis voluptatum nisi, veritatis tenetur ipsum officiis maiores totam necessitatibus exercitationem ratione esse repudiandae fuga itaque aspernatur dolorum alias similique unde!</p>
                <p class="example_origin">—— Dianna 来自莫纳什大学</p>
                <span class="read_btn" @click="showModel">点击阅读</span>
              </div>
            </div>
            <div class="item">
              <div class="picture right">
                <img src="../assets/img/custom_picture_2.png">
              </div>
              <div class="text right">
                <p class="example_num">案例二</p>
                <p class="example_title">Caulfield区域 两居室学区公寓</p>
                <p class="example_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima omnis voluptatum nisi, veritatis tenetur ipsum officiis maiores totam necessitatibus exercitationem ratione esse repudiandae fuga itaque aspernatur dolorum alias similique unde!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima omnis voluptatum nisi, veritatis tenetur ipsum officiis maiores totam necessitatibus exercitationem ratione esse repudiandae fuga itaque aspernatur dolorum alias similique unde!</p>
                <p class="example_origin">—— Dianna 来自莫纳什大学</p>
                <span class="read_btn" @click="showModel">点击阅读</span>
              </div>
            </div>
            <div class="item">
              <div class="picture left">
                <img src="../assets/img/custom_picture_3.png">
              </div>
              <div class="text left">
                <p class="example_num">案例三</p>
                <p class="example_title">Chadstone区域 四居室豪华别墅</p>
                <p class="example_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima omnis voluptatum nisi, veritatis tenetur ipsum officiis maiores totam necessitatibus exercitationem ratione esse repudiandae fuga itaque aspernatur dolorum alias similique unde!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima omnis voluptatum nisi, veritatis tenetur ipsum officiis maiores totam necessitatibus exercitationem ratione esse repudiandae fuga itaque aspernatur dolorum alias similique unde!</p>
                <p class="example_origin">—— Dianna 来自莫纳什大学</p>
                <span class="read_btn" @click="showModel">点击阅读</span>
              </div>
            </div>
            <div class="item">
              <div class="picture right">
                <img src="../assets/img/custom_picture_4.png">
              </div>
              <div class="text left">
                <p class="example_num">案例四</p>
                <p class="example_title">墨尔本市中心 Urbanest学生公寓</p>
                <p class="example_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima omnis voluptatum nisi, veritatis tenetur ipsum officiis maiores totam necessitatibus exercitationem ratione esse repudiandae fuga itaque aspernatur dolorum alias similique unde!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima omnis voluptatum nisi, veritatis tenetur ipsum officiis maiores totam necessitatibus exercitationem ratione esse repudiandae fuga itaque aspernatur dolorum alias similique unde!</p>
                <p class="example_origin">—— Dianna 来自莫纳什大学</p>
                <span class="read_btn" @click="showModel">点击阅读</span>
              </div>
            </div>
          </div>
          <div class="bottom_text">
            <p class="more_text">更多精彩案例 期待与您分享</p>
            <div class="apply_service">申请服务</div>
          </div>
        </div>
      </div>
    </div>
    <choose-us></choose-us>
    <v-footer></v-footer>
    <div class="house_custom_model" v-show="isShowModel">
      <div class="model_content">
        <div class="close" @click="isShowModel = false">
          <img src="../assets/img/close2.png">
        </div>
        <p class="model_num">案例一</p>
        <p class="model_title">墨尔本市中心 一居室城市公寓</p>
        <div class="content">
          <div class="video_box">
            <img src="../assets/img/video_bg.png">
            <div class="play_btn">
              <img src="../assets/img/custom_play.png">
            </div>
          </div>
          <div class="text_content">
            <p class="des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque soluta, sint adipisci provident quia, quas sunt dolor ad vitae atque odit facere, mollitia placeat voluptate nesciunt? Necessitatibus reiciendis officiis officia.</p>
            <p class="origin">—— Dianna 来自莫纳什大学</p>
          </div>
          <div class="swiper_content">
            <img src="../assets/img/custom_picture.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './header'
import Footer from './footer'
import ChooseUs from './chooseUs'
export default {
  name: 'HouseCustom',
  components: {
    'v-header': Header,
    'v-footer': Footer,
    'choose-us': ChooseUs
  },
  data () {
    return {
      isShowModel: false
    }
  },
  methods: {
    showModel () {
      this.isShowModel = true
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style lang="less">
@orangeColor: #fe5924;
p{
  margin: 0;
}
.house_custom_box{
  .content_box{
    .top_box{
      min-width: 1180px;
      .title_box{
        height: 140px;
        background: url(../assets/img/custom_top_bg.png) no-repeat;
        .title{
          margin: 0;
          font-size: 30px;
          text-align: center;
          line-height: 140px;
        }
      }
      .banner_box{
        height: 450px;
        background: url(../assets/img/custom_big_banner.png);
        text-align: center;
        .textarea{
          padding: 10px;
          box-sizing: border-box;
          margin-top: 40px;
          font-size: 20px;
          width: 824px;
          height: 282px;
          resize: none;
          outline: none;
          border: none;
          border-radius: 5px;
          background: rgba(255,255,255,.9);
        }
        .btn_group{
          color: #fff;
          margin-top: 40px;
          .btn{
            cursor: pointer;
            font-size: 14px;
            width: 200px;
            height: 40px;
            display: inline-block;
            line-height: 40px;
          }
          .ask_now{
            border-radius: 5px;
            background-color: @orangeColor;
          }
          .apply{
            margin-left: 20px;
            background: url(../assets/img/custom_btn_bg.png);
          }
        }
      }
    }
    .main_box{
      .custom_flow_box{
        border-bottom: 1px solid #e8e8e8;
        .title{
          font-size: 30px;
          margin: 50px;
          text-align: center;
        }
        .step_box{
          width: 1180px;
          margin: 0 auto;
          position: relative;
          height: 410px;
          background: url(../assets/img/custom_four_line.png) no-repeat center 150px;
          background-size: 794px 80px;
          .circle{
            position: absolute;
            width: 150px;
            height: 150px;
            border: 1px solid #e8e8e8;
            border-radius: 50%;
            cursor: pointer;
            .num{
              margin-top: 20px;
              text-align: center;
              font-size: 50px;
              color: #999;
            }
            .text{
              font-size: 18px;
              font-weight: bold;
              color: #333;
              text-align: center;
            }
            &.active{
              .num{
                color: #333;
              }
              .text{
                color: @orangeColor;
              }
            }
            &.first{
              top: 0;
              left:45px
            }
            &.second{
              bottom: 50px;
              left: 280px;
            }
            &.third{
              top: 0;
              left: 515px;
            }
            &.fourth{
              bottom: 50px;
              left: 750px;
            }
            &.fifth{
              top: 0;
              left: 985px;
            }
            .tooltip{
              display: none;
              position: absolute;
              left: 50%;
              margin-left: -90px;
              background-color: #fff;
              padding: 20px;
              line-height: 20px;
              box-sizing: border-box;
              box-shadow: 0px 0px 5px #C8C8C8;
              width: 180px;
              &.top{
                bottom: 170px;
              }
              &.bottom{
                top: 170px;
              }
              .label{
                margin-bottom: 10px;
                font-size: 14px;
                color: #999;
              }
              .text{
                font-size: 14px;
                text-align: justify;
                color: #333;
              }
              &.bottom:before{
                content: '';
                display: inline-block;
                position: absolute;
                top: -8px;
                left: 50%;
                margin-left: -5px;
                width: 16px;
                height: 16px;
                background: #fff;
                box-shadow: 1px 1px 1px #C8C8C8;
                transform: rotate(-135deg);
              }
              &.top:before{
                content: '';
                display: inline-block;
                position: absolute;
                bottom: -8px;
                left: 50%;
                margin-left: -5px;
                width: 16px;
                height: 16px;
                background: #fff;
                box-shadow: 1px 1px 1px #C8C8C8;
                transform: rotate(45deg);
              }
            }
            &:hover{
              .tooltip{
                display: block;
              }
            }
          }
        }
      }
      .example_show_box{
        background: #fcfaf5;
        .title{
          font-size: 30px;
          padding: 50px 0 59px;
          text-align: center;
        }
        .example_box{
          width: 1180px;
          margin: 0 auto;
          .item{
            height: 400px;
            margin-bottom: 40px;
            .left{
              float: left;
              height: 100%;
            }
            .right{
               float: right;
               height: 100%;
            }
            .picture{
              width: 650px;
              img{
                width: 100%;
                height: 100%;
              }
            }
            .text{
              position: relative;
              width: 530px;
              box-sizing: border-box;
              .example_num,.example_title{
                margin-top: 10px;
                font-size: 24px;
                text-align: center;
              }
              .example_content{
                margin: 15px 50px 10px;
                font-size: 16px;
                color: #666;
                text-align: justify;
                line-height: 20px;
                height: 200px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 10;
                overflow: hidden;
              }
              .example_origin{
                margin-right: 50px;
                text-align: right;
                color: #999;
                font-size: 16px;
              }
              .read_btn{
                cursor: pointer;
                position: absolute;
                left: 50%;
                margin-left: -60px;
                bottom: 10px;
                width: 120px;
                height: 40px;
                text-align: center;
                line-height: 40px;
                border-radius: 5px;
                background-color: #000;
                color: #fff;
              }
            }
          }
        }
      }
      .bottom_text{
        padding-bottom: 50px;
        .more_text{
          font-size: 16px;
          text-align: center;
          color: #999;
        }
        .apply_service{
          cursor: pointer;
          width: 380px;
          height: 50px;
          margin: 40px auto 0;
          color: #fff;
          text-align: center;
          line-height: 50px;
          font-size: 22px;
          background: url(../assets/img/custom_bottom_btn_bg.png);
        }
      }
    }
  }
  .house_custom_model{
    z-index: 1000;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4099px;
    background: rgba(0,0,0,.5);
    .model_content{
      position: absolute;
      top:200px;
      left: 50%;
      margin-left: -421px;
      width: 842px;
      height: 1077px;
      border-radius: 10px;
      background-color: #fff;
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
      .model_num{
        font-size: 30px;
        text-align: center;
        margin: 30px 0 20px;
      }
      .model_title{
        font-size: 30px;
        text-align: center;
        margin-bottom: 25px;
      }
      .content{
        padding: 0 120px;
        .video_box{
          position: relative;
          margin-bottom: 30px;
          width: 600px;
          height: 340px;
          img{
            width: 100%;
            height: 100%;
          }
          .play_btn{
            cursor: pointer;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -24px;
            margin-left: -24px;
            width: 48px;
            height: 48px;
          }
        }
        .text_content{
          .des{
            line-height: 20px;
            max-height: 100px;
            overflow: hidden;
            text-align: justify;
            margin-bottom: 20px;
          }
          .origin{
            text-align: right;
            margin-bottom: 30px;
          }
        }
      }
    }
  }
}
</style>
