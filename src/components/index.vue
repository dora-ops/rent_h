<template>
  <div class="index_box">
    <v-header></v-header>
    <!-- banner图 -->
    <div class="banner">
      <swiper class="list" :options="bannerSwiperOption" ref="mySwiper">
        <swiper-slide v-for="(item,index) in bannerInfo" class="item" :key="index">
          <a :href="'http://'+item.actionUrl">
            <img :src="item.url"/>
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      </swiper>
    </div>
    <!-- 搜索框 & 新晋房源推荐 -->
    <div class="search_box">
      <div class="search_input">
        <div class="search_type">
          <div class="house_resources on">搜房源</div>
          <div class="home_decoration">搜家装</div>
          <div class="local_service">搜本地服务</div>
        </div>
        <div class="search_btn">
          <i class="icon"></i>
          <input class="search" type="text" placeholder="输入城市" v-model="searchKW">
          <router-link to="/housingResources" class="btn">搜索</router-link>
        </div>
      </div>
      <div class="search_result">
        <div class="title">新晋房源推荐</div>
        <!-- <div class="item_list">
          <div class="item">
            <div class="img">
              <img src="../assets/img/item1.png">
            </div>
            <div class="info">
              <div class="first_line">
                <div class="left">
                  <span class="price">$400</span>
                  <span class="time">每周</span>
                </div>
                <div class="right">
                  <div class="bed">
                    <i class="bed_icon"></i>
                    <span>2</span>
                  </div>
                  <div class="shower">
                    <i class="shower_icon"></i>
                    <span>1</span>
                  </div>
                </div>
              </div>
              <div class="place">Unit 12/26 Braummnem Road,Caulfield North</div>
              <div class="check_in_time">整租·即刻入住</div>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="../assets/img/item1.png">
            </div>
            <div class="info">
              <div class="first_line">
                <div class="left">
                  <span class="price">$400</span>
                  <span class="time">每周</span>
                </div>
                <div class="right">
                  <div class="bed">
                    <i class="bed_icon"></i>
                    <span>2</span>
                  </div>
                  <div class="shower">
                    <i class="shower_icon"></i>
                    <span>1</span>
                  </div>
                </div>
              </div>
              <div class="place">Unit 12/26 Braummnem Road,Caulfield North</div>
              <div class="check_in_time">整租·即刻入住</div>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="../assets/img/item1.png">
            </div>
            <div class="info">
              <div class="first_line">
                <div class="left">
                  <span class="price">$400</span>
                  <span class="time">每周</span>
                </div>
                <div class="right">
                  <div class="bed">
                    <i class="bed_icon"></i>
                    <span>2</span>
                  </div>
                  <div class="shower">
                    <i class="shower_icon"></i>
                    <span>1</span>
                  </div>
                </div>
              </div>
              <div class="place">Unit 12/26 Braummnem Road,Caulfield North</div>
              <div class="check_in_time">整租·即刻入住</div>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="../assets/img/item1.png">
            </div>
            <div class="info">
              <div class="first_line">
                <div class="left">
                  <span class="price">$400</span>
                  <span class="time">每周</span>
                </div>
                <div class="right">
                  <div class="bed">
                    <i class="bed_icon"></i>
                    <span>2</span>
                  </div>
                  <div class="shower">
                    <i class="shower_icon"></i>
                    <span>1</span>
                  </div>
                </div>
              </div>
              <div class="place">Unit 12/26 Braummnem Road,Caulfield North</div>
              <div class="check_in_time">整租·即刻入住</div>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="../assets/img/item1.png">
            </div>
            <div class="info">
              <div class="first_line">
                <div class="left">
                  <span class="price">$400</span>
                  <span class="time">每周</span>
                </div>
                <div class="right">
                  <div class="bed">
                    <i class="bed_icon"></i>
                    <span>2</span>
                  </div>
                  <div class="shower">
                    <i class="shower_icon"></i>
                    <span>1</span>
                  </div>
                </div>
              </div>
              <div class="place">Unit 12/26 Braummnem Road,Caulfield North</div>
              <div class="check_in_time">整租·即刻入住</div>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="../assets/img/item1.png">
            </div>
            <div class="info">
              <div class="first_line">
                <div class="left">
                  <span class="price">$400</span>
                  <span class="time">每周</span>
                </div>
                <div class="right">
                  <div class="bed">
                    <i class="bed_icon"></i>
                    <span>2</span>
                  </div>
                  <div class="shower">
                    <i class="shower_icon"></i>
                    <span>1</span>
                  </div>
                </div>
              </div>
              <div class="place">Unit 12/26 Braummnem Road,Caulfield North</div>
              <div class="check_in_time">整租·即刻入住</div>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="../assets/img/item1.png">
            </div>
            <div class="info">
              <div class="first_line">
                <div class="left">
                  <span class="price">$400</span>
                  <span class="time">每周</span>
                </div>
                <div class="right">
                  <div class="bed">
                    <i class="bed_icon"></i>
                    <span>2</span>
                  </div>
                  <div class="shower">
                    <i class="shower_icon"></i>
                    <span>1</span>
                  </div>
                </div>
              </div>
              <div class="place">Unit 12/26 Braummnem Road,Caulfield North</div>
              <div class="check_in_time">整租·即刻入住</div>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="../assets/img/item1.png">
            </div>
            <div class="info">
              <div class="first_line">
                <div class="left">
                  <span class="price">$400</span>
                  <span class="time">每周</span>
                </div>
                <div class="right">
                  <div class="bed">
                    <i class="bed_icon"></i>
                    <span>2</span>
                  </div>
                  <div class="shower">
                    <i class="shower_icon"></i>
                    <span>1</span>
                  </div>
                </div>
              </div>
              <div class="place">Unit 12/26 Braummnem Road,Caulfield North</div>
              <div class="check_in_time">整租·即刻入住</div>
            </div>
          </div>
        </div> -->
        <div class="item_list">
           <router-link :to="'/detail/'+item.id" class="item" v-for="(item,index) in searchInfo.list" :key="index">
            <div class="img">
              <img :src="item.cover">
            </div>
            <div class="info">
              <div class="first_line">
                <div class="left">
                  <span class="price">${{item.rentalPrice}}</span>
                  <span class="time">{{item.rentalPriceUnit=='YEAR'?'每年':item.rentalPriceUnit=='MONTH'?'每月':item.rentalPriceUnit=='WEEK'?'每周':''}}</span>
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
              <div class="place">{{item.name}} {{item.city}} {{item.area}}</div>
              <div class="check_in_time">{{item.rentalType === 'STUDIO'?'单间': item.rentalType === 'WHOLE'?'整租': item.rentalType === 'PART'?'分租': item.rentalType === 'SUBLET'?'转租': item.rentalType === 'STUDENT-APARTMENT'?'学生公寓': item.rentalType === 'HOME-STAY'?'寄宿家庭': '其他'}}·{{item.checkInTime}}</div>
            </div>
           </router-link>
        </div>
        <router-link to="/housingResources" class="more_btn">更多房源</router-link>
      </div>
    </div>
    <!-- 定制化房屋租赁解决方案 -->
    <div class="custom">
      <div class="title">定制化房屋租赁解决方案</div>
      <div class="title_info">简化繁琐租房流程 为您定制租赁新居</div>
      <div class="custom_box">
        <div class="left">
          <swiper :options="customSwiperOption" ref="mySwiper">
            <swiper-slide v-for="(item,index) in customImgList" :key="index">
              <img :src="item">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="right">
          <div class="chat_box">
            <div class="girl">
              <img class="avatar" src="../assets/img/girl.png">
              <div class="chat_text">
                <i class="icon"></i>
                What do you mean by customizing leasing solution?
              </div>
            </div>
            <div class="boy">
              <img class="avatar" src="../assets/img/boy.png">
              <div class="chat_text">
                <i class="icon"></i>
                The customzied leasing solution is a one-stop service from propertis sorthing to application delievery,which helps tenants cut off tedious steps,and provide professional skills to ensure high offer acceptance rate.Whoever choose out service will embrace out premiem services...
              </div>
            </div>
            <div class="girl">
              <img class="avatar" src="../assets/img/girl.png">
              <div class="chat_text">
                <i class="icon"></i>
                Sounds nice!How could I put an order?
              </div>
            </div>
            <div class="boy">
              <img class="avatar" src="../assets/img/boy.png">
              <div class="chat_text">
                <i class="icon"></i>
                The customzied leasing solution is a one-stop service from propertis sorthing to application delievery,which helps tenants cut off tedious steps,and provide professional skills to ensure high offer acceptance rate.Whoever choose out service will embrace out premiem services...
              </div>
            </div>
          </div>
        </div>
      </div>
      <router-link to="/houseCustom" class="more_btn">详情介绍</router-link>
    </div>
    <!-- 家装租赁解决方案 -->
    <div class="group">
      <div class="title">家装租赁解决方案</div>
      <div class="title_info">精选高质量的时尚家具、电器 从配置、运送、安装到后期维护</div>
      <div class="title_info">为您一次性解决所有担忧</div>
      <div class="item_list">
        <div class="item">
          <div class="img">
            <img src="../assets/img/group.png">
          </div>
          <div class="info">
            <div class="theme">简约生活套装·Simple Life Package</div>
            <div class="option">1/2/3/4居室可选</div>
            <div class="rent">租金低至$49每周</div>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="../assets/img/group.png">
          </div>
          <div class="info">
            <div class="theme">简约生活套装·Simple Life Package</div>
            <div class="option">1/2/3/4居室可选</div>
            <div class="rent">租金低至$49每周</div>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="../assets/img/group.png">
          </div>
          <div class="info">
            <div class="theme">简约生活套装·Simple Life Package</div>
            <div class="option">1/2/3/4居室可选</div>
            <div class="rent">租金低至$49每周</div>
          </div>
        </div>
      </div>
      <router-link to="/homeDecorationRent" class="more_btn">更多组合</router-link>
    </div>
    <!-- 生活服务 -->
    <div class="service">
      <div class="title">生活服务</div>
      <div class="title_info">无论在何处 您需要的 正是我们关心的</div>
      <div class="title_info">墨馨安居联合澳洲本地资深供应商共同打造多种便利生活服务</div>
      <div class="title_info">用新的生态 打造温馨的家</div>
      <div class="service_img">
        <img src="../assets/img/diqiu.png">
      </div>
    </div>
    <choose-us></choose-us>
    <div class="divide"></div>
    <div class="box_list">
      <div class="item_list">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from './header'
import Footer from './footer'
import ChooseUs from './chooseUs'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Index',
  components: {
    swiper,
    swiperSlide,
    'v-header': Header,
    'v-footer': Footer,
    'choose-us': ChooseUs
  },
  data () {
    return {
      searchKW: '',
      bannerSwiperOption: {
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      customSwiperOption: {
        loop: true,
        autoplay: true,
        // effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      bannerInfo: [],
      searchInfo: {},
      customImgList: [ 'static/img/custom.png', 'static/img/custom.png', 'static/img/custom.png', 'static/img/custom.png' ]
    }
  },
  created () {
    this.getBannerInfo()
    this.getSearchInfo()
  },
  methods: {
    getBannerInfo () {
      this.$ajax({
        method: 'get',
        url: 'mxj/banners?scene=INDEX',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      })
        .then((res) => {
          if (res.data.code === 0) {
            this.bannerInfo = res.data.data
          }
        })
    },
    getSearchInfo () {
      this.$ajax({
        method: 'post',
        url: 'mxj/house/list',
        headers: {
          'Content-Type': 'X-WWW-FORM-URLENCODED'
        },
        params: {
          pageSize: 8,
          pageIndex: 1
        }
      })
        .then((res) => {
          if (res.data.code === 0) {
            this.searchInfo = res.data.data
          }
        })
    }
  }
}
</script>

<style lang="less">
@orangeColor:#fe5932;
@yaHei:"Microsoft YaHei";
@arialMT:Arial;
@pingFang:"PingFang SC Regular";
// 垂直居中
.verticalCenter{
  position: relative;
  top:50%;
  transform: translateY(-50%);
}
// 水平居中
.alignCenter{
  margin-left:auto;
  margin-right:auto;
}
a{
  text-decoration: none;
}
input{
  outline: none;
}
.index_box{
  min-width:1180px;
  background-color:#fff;
  // 分割线
  .divide{
    width:100%;
    height:1px;
    background-color:#f1f1f1;
  }
  // 通用部分
  .search_box,.custom,.group,.service,.box_list{
    .alignCenter;
    width:1180px;
    .title{
      text-align: center;
      margin-top:50px;
      font:30px @yaHei;
      color:#333;
    }
    .title_info{
      text-align: center;
      font:16px @yaHei;
      color:#999;
    }
    .more_btn{
      display: block;
      .alignCenter;
      width:120px;
      height:40px;
      border-radius:8px;
      font:16px "AdobeHeitiStd-Regular";
      color:@orangeColor;
      border:1px solid @orangeColor;
      text-align:center;
      line-height:40px;
      margin-top:40px;
      cursor: pointer;
    }
  }
  .banner{
    width:100%;
    min-width:1200px;
    min-height:383px;
    img{
      width:100%;
    }
    .swiper-pagination-bullet{
      width:13px !important;
      height:13px !important;
      background-color:#fff !important;
      opacity:0.7 !important;
      &.swiper-pagination-bullet-active{
        background-color:#007aff !important;
      }
      &:hover{
        transform: scale(1.1);
      }
    }
    .swiper-button-white{
      background-color:#000;
      opacity:.4;
      padding:23px 15px;
      border-radius:10px;
      &.swiper-button-next{
        margin-right:15px;
      }
      &.swiper-button-prev{
        margin-left:15px;
      }
      &:hover{
        opacity:.5;
      }
    }
  }
  .search_box{
    .search_input{
      .alignCenter;
      width:830px;
      .search_type{
        overflow:hidden;
        font:bold 16px "AdobeHeitiStd-Regular";
        color:#999;
        margin:20px 0 14px;
        .house_resources,.home_decoration,.local_service{
          cursor: pointer;
          float: left;
          margin-left:30px;
          &.on{
            color:#333;
          }
        }
      }
      .search_btn{
        height:45px;
        position: relative;
        .icon{
          position: absolute;
          top:14px;
          left:13px;
          display: inline-block;
          width:14px;
          height:16px;
          background:url('../assets/img/search.png');
        }
        .search{
          float: left;
          width:700px;
          height:100%;
          box-sizing:border-box;
          border:1px solid #e7e7e7;
          outline:none;
          padding-left:32px;
          border-radius:5px 0 0 5px;
          font-size:16px;
          &::-webkit-input-placeholder {
            font:16px @yaHei;
            color:#a4a4a4;
          }
        }
        .btn{
          cursor: pointer;
          display: inline-block;
          width:130px;
          height:100%;
          text-align: center;
          padding:10px 0;
          box-sizing: border-box;
          background-color:@orangeColor;
          color:#fff;
          font:16px @yaHei;
          border-radius:0 5px 5px 0;
        }
      }
    }
    .search_result{
      width:100%;
      .title{
        margin-bottom:40px;
      }
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
            padding:20px;
            .first_line{
              overflow: hidden;
              .left{
                float: left;
                .price{
                  font:bold 20px @arialMT;
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
                font:14px @yaHei;
                color:#333;
                .bed{
                  display:inline-block;
                  margin-right:10px;
                  .bed_icon{
                    margin-right:2px;
                    display: inline-block;
                    vertical-align: text-bottom;
                    width:20px;
                    height:18px;
                    background: url('../assets/img/bed.png');
                  }
                }
                .shower{
                  display:inline-block;
                  .shower_icon{
                    margin-right:2px;
                    display: inline-block;
                    vertical-align: text-bottom;
                    width:17px;
                    height:16px;
                    background: url('../assets/img/shower.png');
                  }
                }
              }
            }
            .place{
              margin:18px 0 14px;
              height:36px;
              line-height: 18px;
              font:16px @arialMT;
              color:#333;
              text-align: justify;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }
            .check_in_time{
              font:14px @yaHei;
              color:#999;
            }
          }
        }
      }
      .more_btn{
        margin-top:20px;
      }
    }
  }
  .custom{
    .custom_box{
      margin-top:40px;
      width:100%;
      overflow: hidden;
      .left{
        float: left;
        width:331px;
        height:474px;
        img{
          width:100%;
          height: 100%;
          cursor: pointer;
        }
        .swiper-pagination-bullet{
          background-color:#fff !important;
          opacity:0.8 !important;
          &.swiper-pagination-bullet-active{
            background-color:#007aff !important;
          }
          &:hover{
            transform: scale(1.2);
          }
        }
      }
      .right{
        float:right;
        width:800px;
        height:474px;
        .chat_box{
          .girl{
            float:left;
            .avatar{
              float: left;
              width:60px;
              height:60px;
            }
            .chat_text{
              margin-left:15px;
              float: left;
              width:297px;
              height:80px;
              border:1px solid #f2f1f1;
              border-radius:10px;
              font:14px @arialMT;
              color:#333;
              padding:15px 10px;
              box-sizing: border-box;
              position: relative;
              line-height: 20px;
              height: 70px;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              .icon{
                width:15px;
                height:15px;
                background-color:#fff;
                position:absolute;
                border-bottom:1px solid #f2f1f1;
                border-left:1px solid #f2f1f1;
                left:-8px;
                top:22px;
                transform: rotate(45deg);
              }
            }
          }
          .boy{
            float:right;
            margin:25px 0;
            .avatar{
              float: right;
              width:60px;
              height:60px;
            }
            .chat_text{
              float: right;
              position:relative;
              width:388px;
              background-color:#31dba4;
              padding:15px 10px;
              box-sizing: border-box;
              border-radius:10px;
              margin-right:15px;
              font:14px @arialMT;
              color:#fff;
              line-height: 20px;
              height: 130px;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 5;
              overflow: hidden;
              .icon{
                width:15px;
                height:15px;
                background-color:#31dba4;
                position:absolute;
                right:-7px;
                top:22px;
                transform: rotate(45deg);
              }
            }
          }
        }
      }
    }
  }
  .group{
    .item_list{
      width:100%;
      padding-bottom:5px;
      margin-top:40px;
      overflow: hidden;
      .item{
        cursor: pointer;
        width:380px;
        height:366px;
        border:1px solid #ececec;
        box-sizing: border-box;
        float:left;
        margin-right:20px;
        &:hover{
          box-shadow:0 5px 5px rgba(229,229,229,0.7);
         }
        &:last-child{
          margin-right:0;
        }
        .img{
          width:380px;
          height:235px;
        }
        .info{
          padding:20px;
          .theme{
            font:16px "AdobeHeitiStd-Regular",@yaHei;
            color:#333;
            margin-bottom:15px;
          }
          .option{
            font:14px @yaHei;
            color:#999;
            margin-bottom:5px;
          }
          .rent{
            font:14px @yaHei;
            color:#999;
          }
        }
      }
    }
  }
  .service{
    .service_img{
      margin:40px auto 50px;
      width:870px;
      img{
        width:100%;
      }
    }
  }
  .box_list{
    .item_list{
      margin:30px 0;
      overflow: hidden;
      .item{
        float: left;
        margin:0 57px 20px 0;
        width:190px;
        height:80px;
        background-color:#ddd;
        &:nth-child(5n){
          margin-right:0;
        }
      }
    }
  }
}
</style>
