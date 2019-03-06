<template>
  <div class="detail_box">
    <v-header></v-header>
    <div class="content_box">
      <div class="bread_box">
        <ul class="bread">
          <li><router-link to="/index">首页</router-link></li>
          <li><router-link to="/housingResources">澳洲房源</router-link></li>
          <li><a href="javascript:;">墨尔本房源</a></li>
          <li><a href="javascript:;">{{houseInfo.name}},{{houseInfo.area}}</a></li>
        </ul>
      </div>
      <div class="detail_primary">
        <div class="left">
          <div class="b_img">
            <img :src="imgList[onImgIndex]">
          </div>
          <div class="s_img">
            <div class="img_box">
              <ul class="img_list" :style="{left: left +'px'}">
                <li v-for="(item,index) in imgList" :key="index" @mouseenter="onImgIndex = index"><img :src="item"></li>
              </ul>
            </div>
            <a href="javascript:;" class="prev" @click="changeImg(true)"></a>
            <a href="javascript:;" class="next" @click="changeImg(false)"></a>
          </div>
        </div>
        <div class="right">
          <div class="btn_box">
            <div class="share">
              <i class="icon"></i>
              <a href="javascript:;">分享房源</a>
            </div>
            <div class="collect" v-show="!houseInfo.collected" @click="collectHouse">
              <i class="icon"></i>
              <a href="javascript:;">收藏房源</a>
            </div>
            <div class="collect" v-show="houseInfo.collected" @click="cancelCollect">
              <i class="icon collected"></i>
              <a href="javascript:;">已收藏</a>
            </div>
          </div>
          <div :class="isFixed?'introduce_card fixed':'introduce_card'">
            <div class="top_info">
              <p class="title_text">{{houseInfo.name}}</p>
              <div class="label">
                <span class="free_application">免申请费</span>
                <span class="platform_guarantee">平台担保</span>
              </div>
              <div class="address">
                <i class="icon"></i>
                <span class="address_text">{{houseInfo.location}}</span>
              </div>
              <div class="supports">
                <div class="supports_group">
                  <div class="bedroom">
                    <i class="icon"></i>
                    <span class="bedroom_number">{{houseInfo.bedroomNum}}</span>
                  </div>
                  <div class="shower">
                    <i class="icon"></i>
                    <span class="shower_number">{{houseInfo.toiletNum}}</span>
                  </div>
                </div>
                <div class="rental_info">
                  <span class="text">
                    {{
                      houseInfo.houseType=='APARTMENT'?'公寓':
                      houseInfo.houseType=='HOUSE'?'别墅':
                      houseInfo.houseType=='TOWNHOUSE'?'联排别墅':
                      houseInfo.houseType=='STUDIO'?'全套单间':
                      houseInfo.houseType=='UNIT'?'单元房':
                      houseInfo.houseType=='OTHERS'?'其他':''
                    }} - {{houseInfo.rentalType === 'STUDIO'?'单间/STUDIO': houseInfo.rentalType === 'WHOLE'?'整租/WHOLE': houseInfo.rentalType === 'PART'?'分租/PART': houseInfo.rentalType === 'SUBLET'?'转租/SUBLET': houseInfo.rentalType === 'STUDENT-APARTMENT'?'学生公寓/STUDENT-APARTMENT': houseInfo.rentalType === 'HOME-STAY'?'寄宿家庭/HOME-STAY': ''}}</span>
                </div>
              </div>
            </div>
            <div class="center_info">
              <div class="price_text">
                <span class="price_unit">AU$</span>
                <span class="price_number">{{houseInfo.rentalPrice}}</span>
                <span class="price_text">{{houseInfo.rentalPriceUnit === 'WEEK'?'每周': houseInfo.rentalPriceUnit === 'MONTH'?'每月': houseInfo.rentalPriceUnit === 'YEAR'?'每年':''}}</span>
              </div>
              <p class="des_text">多套可选 时间灵活</p>
            </div>
            <div class="bottom_info">
              <span class="ask_now">立即咨询</span>
              <span class="buy_now">一键下单</span>
            </div>
          </div>
        </div>
      </div>
      <div class="detail_content">
        <div class="house_introduce">
          <div class="title">
            <p class="title_text">房源介绍</p>
          </div>
          <div class="content">
            <p class="content_text">
              <!-- 此套房源卫浴Clayton的交通枢纽 - Clayton Station附近，卫浴Clayton商店街道背后，毗邻众多超市、餐馆、银行等等，距离注明的南半球最大亚洲超市 -- 香港超市仅1千米距离。公寓为新建成的多层现代风格建筑，公寓配备24小时监控系统和物业管理团队。 -->
              {{houseInfo.introduction}}
            </p>
          </div>
        </div>
        <div class="divide"></div>
        <div class="choose_type" v-show="houseRooms.STUDIO || houseRooms.SINGLE_ROOM || houseRooms.SHARE_ROOM">
          <div class="title">
            <p class="title_text">房源选择</p>
          </div>
          <div class="content">
            <div class="choose_tips">
              <div v-show="houseRooms.STUDIO" :class="roomType==='STUDIO'?'tip_item on':'tip_item'" @click="roomType = 'STUDIO'">
                <i class="icon"></i>
                <span class="text">单人套房Studio</span>
                <div class="tooltip">
                  <div class="title">单人套房 Studio</div>
                  <span class="tooltip_text">介绍：Studio即为常见的全套单身公寓，麻雀虽小五脏俱全，客厅、厨房、卧室、浴卫等。最大的特点是厨房和客厅没有分割。入住者可以独自享有一个家的所有元素。是单身贵族、情侣们的心爱之选。房源具体包含的家具类型、尺寸以及电器种类，数量都需要提前咨询确认。</span>
                </div>
              </div>
              <div v-show="houseRooms.SINGLE_ROOM" :class="roomType === 'SINGLE_ROOM'?'tip_item on':'tip_item'" @click="roomType = 'SINGLE_ROOM'">
                <i class="icon"></i>
                <span class="text">单人间Single Room</span>
                <div class="tooltip">
                  <div class="title">单人间 Single Room</div>
                  <span class="tooltip_text">介绍：单人间一般为一个完整的房屋空间内，入住者单独享有的一个居住空间，一般都有住宿区域、生活区域、卫浴等，需要和他人一起共享。房源具体包含的家具类型、尺寸以及电器种类、数量都需要提前确认咨询。</span>
                </div>
              </div>
              <div v-show="houseRooms.SHARE_ROOM" :class="roomType === 'SHARE_ROOM'?'tip_item on':'tip_item'" @click="roomType = 'SHARE_ROOM'">
                <i class="icon"></i>
                <span class="text">多人间Share Room</span>
                <div class="tooltip">
                  <div class="title">多人间Share Room</div>
                  <span class="tooltip_text">介绍：多人间一般为一个完整的房屋空间内，入住者为2人或2人以上，一般共有住宿区域、生活区域、卫浴等，需要和他人一起共享。房源具体包含的家具类型、尺寸以及电器种类、数量都需要提前咨询确认。</span>
                </div>
              </div>
            </div>
            <div class="choose_list" v-show="roomType === 'STUDIO'">
              <div class="item" v-for="(item,index) in houseRooms.STUDIO" :key="index">
                <div class="item_left">
                  <div class="img">
                    <img :src="item.picture">
                  </div>
                </div>
                <div class="item_center">
                  <div class="title">{{item.title}}</div>
                  <div class="rental_info">
                    <span class="">租期{{item.rentalPeriod}}{{item.rentalPeriodUnit === 'YEAR'?'年': item.rentalPeriodUnit === 'MONTH'?'月': item.rentalPeriodUnit === 'WEEK'?'周':''}}</span>
                    -
                    <span class="">{{item.rentalTime}}入住</span>
                  </div>
                  <!-- <div class="label">
                    <span class="count">20%折扣</span>
                  </div> -->
                </div>
                <div class="item_right">
                  <div class="price_info">
                    <span class="price">AU$ {{item.rentalPrice}}</span>
                    <span class="rental_unit">{{item.rentalPriceUnit=='YEAR'?'每年':item.rentalPriceUnit=='MONTH'?'每月':item.rentalPriceUnit=='WEEK'?'每周':''}}</span>
                    <i class="icon"></i>
                  </div>
                  <!-- <div class="old_price_info">
                    <span class="old_price">AU$ 433</span>
                  </div> -->
                </div>
              </div>
            </div>
            <div class="choose_list" v-show="roomType === 'SINGLE_ROOM'">
              <div class="item" v-for="(item,index) in houseRooms.SINGLE_ROOM" :key="index">
                <div class="item_left">
                  <div class="img">
                    <img :src="item.picture">
                  </div>
                </div>
                <div class="item_center">
                  <div class="title">{{item.title}}</div>
                  <div class="rental_info">
                    <span class="">租期{{item.rentalPeriod}}{{item.rentalPeriodUnit === 'YEAR'?'年': item.rentalPeriodUnit === 'MONTH'?'月': item.rentalPeriodUnit === 'WEEK'?'周':''}}</span>
                    -
                    <span class="">{{item.rentalTime}}入住</span>
                  </div>
                  <!-- <div class="label">
                    <span class="count">20%折扣</span>
                  </div> -->
                </div>
                <div class="item_right">
                  <div class="price_info">
                    <span class="price">AU$ {{item.rentalPrice}}</span>
                    <span class="rental_unit">{{item.rentalPriceUnit=='YEAR'?'每年':item.rentalPriceUnit=='MONTH'?'每月':item.rentalPriceUnit=='WEEK'?'每周':''}}</span>
                    <i class="icon"></i>
                  </div>
                  <!-- <div class="old_price_info">
                    <span class="old_price">AU$ 433</span>
                  </div> -->
                </div>
              </div>
            </div>
            <div class="choose_list" v-show="roomType === 'SHARE_ROOM'">
              <div class="item" v-for="(item,index) in houseRooms.SHARE_ROOM" :key="index">
                <div class="item_left">
                  <div class="img">
                    <img :src="item.picture">
                  </div>
                </div>
                <div class="item_center">
                  <div class="title">{{item.title}}</div>
                  <div class="rental_info">
                    <span class="">租期{{item.rentalPeriod}}{{item.rentalPeriodUnit === 'YEAR'?'年': item.rentalPeriodUnit === 'MONTH'?'月': item.rentalPeriodUnit === 'WEEK'?'周':''}}</span>
                    -
                    <span class="">{{item.rentalTime}}入住</span>
                  </div>
                  <!-- <div class="label">
                    <span class="count">20%折扣</span>
                  </div> -->
                </div>
                <div class="item_right">
                  <div class="price_info">
                    <span class="price">AU$ {{item.rentalPrice}}</span>
                    <span class="rental_unit">{{item.rentalPriceUnit=='YEAR'?'每年':item.rentalPriceUnit=='MONTH'?'每月':item.rentalPriceUnit=='WEEK'?'每周':''}}</span>
                    <i class="icon"></i>
                  </div>
                  <!-- <div class="old_price_info">
                    <span class="old_price">AU$ 433</span>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 室内设施 -->
        <div class="inside_facilities" v-show="indoorFacilities.length > 0">
          <div class="title">
            <p class="title_text">室内设施</p>
          </div>
          <div class="content">
            <div class="list">
              <div class="item" v-for="(item,index) in indoorFacilities" :key="index">
                <i class="icon"><img :src="item.icon"></i>
                <span class="text">{{item.chineseName}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="public_facilities" v-show="publicFacilities.length > 0">
          <div class="title">
            <p class="title_text">公共设施</p>
          </div>
          <div class="content">
            <div class="list">
              <div class="item" v-for="(item,index) in publicFacilities" :key="index">
                <i class="icon"><img :src="item.icon"></i>
                <span class="text">{{item.chineseName}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="divide" v-show="rentContains.length > 0"></div>
        <div class="rental_content" v-show="rentContains.length > 0">
          <div class="title">
            <p class="title_text">房租包含</p>
          </div>
          <div class="content">
            <div class="list">
              <div class="item" v-for="(item,index) in rentContains" :key="index">
                <i class="icon"><img :src="item.icon"></i>
                <span class="text">{{item.chineseName}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="divide" v-show="safetyHealth.length > 0"></div>
        <div class="safe_healthy" v-show="safetyHealth.length > 0">
          <div class="title">
            <p class="title_text">安全与健康</p>
          </div>
          <div class="content">
            <div class="list">
              <div class="item" v-for="(item,index) in safetyHealth" :key="index">
                <i class="icon"><img :src="item.icon"></i>
                <span class="text">{{item.chineseName}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="divide" v-show="houseRegulations.length > 0"></div>
        <div class="house_rule" v-show="houseRegulations.length > 0">
          <div class="title">
            <p class="title_text">房屋规定</p>
          </div>
          <div class="content">
            <div class="list">
              <div class="item" v-for="(item,index) in houseRegulations" :key="index">
                <i class="icon"><img :src="item.icon"></i>
                <span class="text">{{item.chineseName}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="divide"></div>
        <div class="map">
          <div class="title">
            <p class="title_text">地图</p>
          </div>
          <div class="content">
            <div class="address">
              <i class="icon"></i>
              <span>{{houseInfo.name}},{{houseInfo.area}},{{houseInfo.city}}</span>
            </div>
            <div class="img">
              <!-- <img src="../" alt=""> -->
            </div>
            <div class="near_box">
              <div class="near_tabbar">
                <a :class="nearTab === 'school'?'tabbar_item on': 'tabbar_item'" href="javascript:;" @click="nearTab = 'school'">附近学校</a>
                <a :class="nearTab === 'traffic'?'tabbar_item on': 'tabbar_item'" href="javascript:;" @click="nearTab = 'traffic'">附近交通</a>
                <a :class="nearTab === 'supportFacilities'?'tabbar_item on': 'tabbar_item'" href="javascript:;" @click="nearTab = 'supportFacilities'">附近设施</a>
              </div>
              <div class="near_content">
                <ul class="list">
                  <li class="list_item">距离Mnash University CAultield Campus 步行890米</li>
                  <li class="list_item">距离Mnash University CAultield Campus 步行890米</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 相似推荐 -->
      <div class="similar_recommand">
        <div class="title">
          <p class="title_text">相似推荐</p>
        </div>
        <div class="content">
          <div class="item_list">
            <div class="item" v-for="(item,index) in houseInfo.similarHouses" :key="index">
              <div class="img">
                <img :src="item.cover">
              </div>
              <div class="info">
                <div class="first_line">
                  <div class="left">
                    <span class="price">${{item.rentalPrice}}</span>
                    <span class="time">{{item.rentalPriceUnit === 'WEEK'?'每周': item.rentalPriceUnit === 'MONTH'? '每月': item.rentalPriceUnit === 'YEAR'?'每年': ''}}</span>
                  </div>
                  <div class="right">
                    <div class="bed">
                      <i class="bed_icon"></i>
                      <span>{{item.bedroomNum}}</span>
                    </div>
                    <div class="shower">
                      <i class="shower_icon"></i>
                      <span>{{item.toiletNum}}</span>
                    </div>
                  </div>
                </div>
                <div class="place">Unit 12/26 Braummnem Road,Caulfield North</div>
                <div class="check_in_time">{{item.rentalType === 'STUDIO'?'单间': item.rentalType === 'WHOLE'?'整租': item.rentalType === 'PART'?'分租': item.rentalType === 'SUBLET'?'转租': item.rentalType === 'STUDENT-APARTMENT'?'学生公寓': item.rentalType === 'HOME-STAY'?'寄宿家庭': '其他'}}·{{item.checkInTime}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from './header'
import Footer from './footer'

export default {
  name: 'Detail',
  components: {
    'v-header': Header,
    'v-footer': Footer
  },
  data () {
    return {
      houseInfo: {},
      onImgIndex: 0,
      isFixed: false,
      left: -100,
      imgList: [],
      houseRooms: {},
      roomType: 'STUDIO',
      nearTab: 'school',
      indoorFacilities: [],
      publicFacilities: [],
      rentContains: [],
      safetyHealth: [],
      houseRegulations: []
    }
  },
  created () {
    this.getDetailInfo()
  },
  mounted () {
    let that = this
    window.onscroll = function () {
      if (document.documentElement.scrollTop >= 233) {
        that.isFixed = true
      } else {
        that.isFixed = false
      }
    }
  },
  methods: {
    getDetailInfo () {
      let that = this
      this.$ajax({
        method: 'get',
        url: 'mxj/house/info',
        params: {
          houseId: this.$route.params.id
        }
      })
        .then((res) => {
          that.houseInfo = res.data.data
          that.imgList = res.data.data.housePictures
          that.houseRooms = res.data.data.houseRooms
          that.indoorFacilities = res.data.data.indoorFacilities
          that.publicFacilities = res.data.data.publicFacilities
          that.rentContains = res.data.data.rentContains
          that.safetyHealth = res.data.data.safetyHealth
          that.houseRegulations = res.data.data.houseRegulations
          console.log(res.data.data)
        })
    },
    changeImg (bool) {
      // 上一个
      if (bool) {
        if (this.left + (this.imgList.length - 4) * 150 > 50) {
          this.left -= 150
        }
      // 下一个
      } else {
        if (this.left <= -50) {
          this.left += 150
        }
      }
    },
    collectHouse () {
      let that = this
      this.$ajax({
        method: 'post',
        url: 'mxj/house/collect',
        params: {
          houseId: this.houseInfo.id
        }
      })
        .then((res) => {
          if (res.data.code === 20100) {
            this.$message({
              message: '对不起，您尚未登录，请登录后收藏',
              type: 'warning'
            })
          } else if (res.data.code === 0) {
            that.getDetailInfo()
            that.$message({
              message: '恭喜您，收藏成功！',
              type: 'success'
            })
          }
        })
    },
    // 取消收藏
    cancelCollect () {
      let that = this
      this.$ajax({
        method: 'post',
        url: 'mxj/house/cancelCollect',
        params: {
          houseId: this.houseInfo.id
        }
      })
        .then((res) => {
          if (res.data.code === 0) {
            that.getDetailInfo()
          }
        })
    }
  }
}
</script>

<style lang="less">
@orangeColor: #fe5932;
p{
  margin: 0;
}
.detail_box{
  .content_box{
    width: 1180px;
    margin:0 auto;
    .bread_box{
      margin:10px auto;
      width:1180px;
      .bread{
        padding:0;
        margin:0;
        li{
          list-style:none;
          display: inline-block;
          a{
            text-decoration: none;
            font:14px "Microsoft YaHei";
            color:#333;
          }
          &:not(:last-child):after{
            content:" >";
          }
        }
      }
    }
    .detail_primary{
      width: 100%;
      height: 470px;
      position: relative;
      .left{
        width:690px;
        float: left;
        .b_img{
          width:100%;
          height: 380px;
          margin-bottom: 10px;
          img{
            width:100%;
            height: 100%;
          }
        }
        .s_img{
          width: 100%;
          height: 80px;
          position: relative;
          .img_box{
            width:100%;
            height: 100%;
            overflow: hidden;
            position: relative;
            .img_list{
              width: 9999px;
              height: 100%;
              list-style: none;
              margin: 0;
              padding: 0;
              position: absolute;
              li{
                cursor: pointer;
                float: left;
                width: 140px;
                height: 100%;
                &:not(:last-child){
                  margin-right:10px;
                }
                img{
                  width:100%;
                  height: 100%;
                }
              }
            }
          }
          .prev{
            display: inline-block;
            width: 40px;
            height: 100%;
            background:rgba(0,0,0,.5) url('../assets/img/prev.png') no-repeat center center;
            background-size: 8px 13px;
            position: absolute;
            top: 0;
            left:0;
          }
          .next{
            display: inline-block;
            width: 40px;
            height: 100%;
            background:rgba(0,0,0,.5) url('../assets/img/next.png') no-repeat center center;
            background-size: 8px 13px;
            position: absolute;
            top: 0;
            right:0;
          }
        }
      }
      .right{
        float: right;
        width: 450px;
        height: 100%;
        position: relative;
        vertical-align: bottom;
        .btn_box{
          color: #999;
          font-size: 14px;
          position: absolute;
          top:15px;
          right: 0;
          .share{
            cursor: pointer;
            margin-right: 30px;
            display: inline-block;
            .icon{
              display: inline-block;
              width: 16px;
              height: 16px;
              background: url(../assets/img/share.png);
              background-size: 100%;
              vertical-align: text-top;
            }
            a{
              text-decoration: none;
              color: #999;
            }
          }
          .collect{
            cursor: pointer;
            display: inline-block;
            .icon{
              display: inline-block;
              width: 16px;
              height: 16px;
              background: url(../assets/img/collect.png);
              background-size: 100%;
              vertical-align: text-top;
              &.collected{
                background: url(../assets/img/collected.png);
              }
            }
            a{
              text-decoration: none;
              color: #999;
            }
          }
        }
        .fixed{
          position: fixed !important;
          top: 0;
        }
        .introduce_card{
          position: absolute;
          bottom: 0;
          width: 450px;
          height: 428px;
          background-color: #fff;
          border: 1px solid #e8e8e8;
          box-sizing: border-box;
          .top_info{
            height: 218px;
            border-bottom: 1px solid #e8e8e8;
            box-sizing: border-box;
            .title_text{
              height: 67px;
              text-align: center;
              font-size: 24px;
              color: #333;
              padding-top:20px;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }
            .label{
              text-align: center;
              color: #fff;
              font-size: 14px;
              .free_application{
                display: inline-block;
                width: 90px;
                height: 30px;
                text-align: center;
                line-height: 30px;
                border-radius: 5px;
                background-color: #32dba4;
                margin-right: 30px;
              }
              .platform_guarantee{
                display: inline-block;
                width: 90px;
                height: 30px;
                text-align: center;
                line-height: 30px;
                border-radius: 5px;
                background-color: #ffbc52;
              }
            }
            .address{
              text-align: center;
              margin: 20px 0 14px;
              .icon{
                display: inline-block;
                width: 16px;
                height: 16px;
                background: url(../assets/img/position.png);
              }
            }
            .supports{
              text-align: center;
              font-size: 14px;
              .supports_group{
                padding-right:15px;
                display: inline-block;
                .bedroom{
                  display: inline-block;
                  .icon{
                    display: inline-block;
                    width: 24px;
                    height: 24px;
                    vertical-align: text-bottom;
                    background: url(../assets/img/bedroom24.png);
                    background-size: 100%;
                  }
                }
                .shower{
                  display: inline-block;
                  .icon{
                    display: inline-block;
                    width: 24px;
                    height: 24px;
                    vertical-align: text-bottom;
                    background: url(../assets/img/shower24.png);
                    background-size: 100%;
                  }
                }
              }
              .rental_info{
                border-left: 1px solid #e8e8e8;
                padding-left:15px;
                display: inline-block;
                color: #999;
              }
            }
          }
          .center_info{
            height: 100px;
            border-bottom: 1px solid #e8e8e8;
            box-sizing: border-box;
            padding: 24px 0;
            .price_text{
              text-align: center;
              color: @orangeColor;
              margin-bottom: 5px;
              .price_unit{
                font-size: 24px;
              }
              .price_number{
                font-size: 24px;
              }
              .price_text{
                font-size: 16px;
              }
            }
            .des_text{
              text-align: center;
            }
          }
          .bottom_info{
            height:110px;
            font-size:20px;
            color: #ffffff;
            position: relative;
            .ask_now{
              cursor: pointer;
              display: inline-block;
              height: 50px;
              width:180px;
              background-color: @orangeColor;
              border-radius: 5px;
              line-height: 50px;
              text-align: center;
              position: absolute;
              top: 50%;
              margin-top: -25px;
              left:30px;
            }
            .buy_now{
              cursor: pointer;
              display: inline-block;
              height: 50px;
              width:180px;
              background-color: #000000;
              border-radius: 5px;
              line-height: 50px;
              text-align: center;
              position: absolute;
              top: 50%;
              margin-top: -25px;
              right:30px;
            }
          }
        }
      }
    }
    .detail_content{
      width: 690px;
      .divide{
        width: 100%;
        height: 1px;
        padding: 0;
        background-color: #e8e8e8;
      }
      >div{
        padding:40px 0;
        .title{
          .title_text{
            margin-bottom:30px;
            color: #333;
            font-size: 20px;
          }
        }
        // 图标列表
        .list{
          overflow: hidden;
          .item{
            margin-bottom: 20px;
            float: left;
            width: 140px;
            height: 24px;
            line-height: 24px;
            &:not(:nth-child(4n)){
              margin-right: 43px;
            }
            .icon{
              display: inline-block;
              width: 24px;
              height: 24px;
              margin-right:15px;
              vertical-align: middle;
            }
          }
        }
        .content{
          font-size: 14px;
          color: #333;
          .el-row{
            &:not(:last-child){
              margin-bottom: 20px;
            }
            .icon{
              display:inline-block;
              width: 24px;
              height: 24px;
              margin-right: 15px;
              vertical-align: text-top;
              img{
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
      .house_introduce{
        .title{
          .title_text{
            margin-bottom: 20px;
          }
        }
      }
      .choose_type{
        .content{
          .choose_tips{
            height: 77px;
            margin-bottom: 10px;
            .tip_item{
              cursor: pointer;
              position: relative;
              display: inline-block;
              width: 210px;
              height: 70px;
              background: url(../assets/img/choose_bg.png);
              opacity: .8;
              color:#fff;
              text-align: center;
              font-size: 16px;
              line-height: 70px;
              &:hover{
                height: 77px;
                background: url(../assets/img/choose_bg.png);
                opacity: 1;
                .tooltip{
                  display: block;
                }
              }
              &.on{
                height: 77px;
                background: url(../assets/img/choose_bg.png);
                opacity: 1;
              }
              &:not(:last-child){
                margin-right: 25px;
              }
              .icon{
                position: absolute;
                top: 8px;
                right: 8px;
                width: 16px;
                height: 16px;
                background: url(../assets/img/wenhao.png);
              }
              .tooltip{
                display: none;
                width: 304px;
                height: 261px;
                position: absolute;
                top: 77px;
                z-index: 1000;
                background: url(../assets/img/tip_bg.png) no-repeat;
                line-height: 25px;
                padding: 30px 15px 15px;
                box-sizing: border-box;
                text-align: justify;
                .title{
                  font-size: 16px;
                  color: #fffefe;
                }
                .tooltip_text{
                  font-size: 14px;
                  color: #fff;
                }
              }
            }
          }
          .choose_list{
            width:100%;
            border:1px solid #e8e8e8;
            box-sizing: border-box;
            .item{
              position: relative;
              height:140px;
              box-sizing: border-box;
              &:not(:last-child){
                border-bottom: 1px dashed #e8e8e8;
              }
              .item_left{
                position: absolute;
                width:185px;
                height: 100%;
                .img{
                  width: 100%;
                  height: 100%;
                  img{
                    width:100%;
                    height:100%;
                    padding: 20px 0;
                    box-sizing:border-box;
                  }
                }
              }
              .item_center{
                position: absolute;
                top: 20px;
                left: 195px;
                width: 340px;
                .title{
                  font:bold 16px "Arial";
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;
                  overflow: hidden;
                }
                .rental_info{
                  margin-top: 10px;
                  color: #999;
                  font-size: 14px;
                }
                .label{
                  .count{
                    margin-top: 10px;
                    display: inline-block;
                    width: 68px;
                    text-align: center;
                    background: #ffbc52;
                    color:#fff;
                    font-size: 14px;
                    padding: 3px 5px;
                    box-sizing:border-box;
                    border-radius: 5px;
                  }
                }
              }
              .item_right{
                position: absolute;
                top: 30px;
                right:0;
                width:160px;
                height:100%;
                .price_info{
                  position: absolute;
                  top:20px;
                  color:@orangeColor;
                  .price{
                    font-size: 20px;
                    color:@orangeColor;
                  }
                  .icon{
                    margin-left: 10px;
                    display: inline-block;
                    width: 16px;
                    height: 16px;
                    background: url(../assets/img/uncheck.png);
                    background-size: 100%;
                    vertical-align: text-top;
                    &.on{
                      background: url(../assets/img/selected.png);
                    }
                  }
                }
                .old_price_info{
                  position: absolute;
                  top:50px;
                  .old_price{
                    font-size: 20px;
                    text-decoration: line-through;
                  }
                }
              }
            }
          }
        }
      }
      .inside_facilities{
        padding-bottom: 0;
      }
      .map{
        .content{
          .address{
            color: #999;
            .icon{
              display: inline-block;
              width: 16px;
              height: 16px;
              background: url(../assets/img/position.png);
            }
          }
          .img{
            margin: 20px 0 10px;
            width: 100%;
            height: 380px;
            background-color: #ddd;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .near_box{
            width: 100%;
            border:1px solid #e8e8e8;
            font-size: 14px;
            .near_tabbar{
              height:40px;
              background-color: #f7f7f7;
              border-bottom:1px solid #e8e8e8;
              box-sizing: border-box;
              .tabbar_item{
                float:left;
                width: 140px;
                text-align: center;
                line-height: 40px;
                border-right: 1px solid #e8e8e8;
                box-sizing: border-box;
                text-decoration: none;
                color: #333;
                &.on{
                  background-color:#fff;
                  border-bottom-color: #fff;
                }
              }
            }
            .near_content{
              .list{
                list-style: decimal;
                padding-bottom:20px;
                li{
                  line-height:40px;
                }
              }
            }
          }
        }
      }
    }
    .similar_recommand{
      .title{
        .title_text{
          margin-bottom:30px;
          color: #333;
          font-size: 20px;
        }
      }
      .content{
        .item_list{
          box-sizing: border-box;
          width:100%;
          overflow: hidden;
          .item{
            cursor: pointer;
            float: left;
            width:278px;
            height:320px;
            border:1px solid #ececec;
            box-sizing: border-box;
            margin:0 20px 30px 0;
            &:nth-child(4n){
              margin-right:0;
            }
            .img{
              width:100%;
              height:172px;
              img{
                width:100%;
                height:100%;
              }
            }
            .info{
              height: 148px;
              padding:20px;
              box-sizing: border-box;
              .first_line{
                overflow: hidden;
                .left{
                  float: left;
                  .price{
                    font:bold 22px "Arial";
                    color:#000;
                    margin-right:5px;
                  }
                  .time{
                    vertical-align: text-top;
                    font:14px "AdobeHeitiStd-Regular";
                    color:#333;
                  }
                }
                .right{
                  float: right;
                  font-size: 14px;
                  color:#333;
                  .bed{
                    display:inline-block;
                    margin-right:10px;
                    vertical-align: middle;
                    .bed_icon{
                      margin-right:2px;
                      display: inline-block;
                      width:20px;
                      height:18px;
                      background: url('../assets/img/bed.png');
                    }
                  }
                  .shower{
                      vertical-align: middle;
                      display:inline-block;
                    .shower_icon{
                      margin-right:2px;
                      display: inline-block;
                      width:17px;
                      height:16px;
                      background: url('../assets/img/shower.png');
                    }
                  }
                }
              }
              .place{
                height: 42px;
                margin:15px 0 10px;
                font-size: 16px;
                color:#333;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
              }
              .check_in_time{
                font-size:14px;
                color:#999;
              }
            }
          }
        }
      }
    }
  }
}
</style>
