<template>
  <div class="house_list_box">
    <div class="item_list" v-show="list.length>0">
      <div class="item" v-for="(item, index) in list" :key="index">
        <div class="item_left">
          <div class="img">
            <img :src="item.cover">
          </div>
        </div>
        <div class="item_center">
          <div class="top">
            <div class="top_title">{{item.name}} {{item.area}}</div>
            <div class="house_info">
              <div class="details">
                <div class="bedroom">
                  <i class="icon"></i>
                  <span>{{item.bedroomNum}}</span>
                </div>
                <div class="toilet">
                  <i class="icon"></i>
                  <span>{{item.toiletNum}}</span>
                </div>
                <div class="park">
                  <i class="icon"></i>
                  <span>{{item.parkNum}}</span>
                </div>
              </div>
              <div class="house_type">
                <p>
                  {{
                    item.houseType=='APARTMENT'?'公寓-':
                    item.houseType=='HOUSE'?'别墅-':
                    item.houseType=='TOWNHOUSE'?'联排别墅-':
                    item.houseType=='STUDIO'?'全套单间-':
                    item.houseType=='UNIT'?'单元房-':
                    item.houseType=='OTHERS'?'其他-':''
                  }}{{item.houseType}}
                </p>
              </div>
            </div>
          </div>
          <div class="bottom">
            <div class="transform" v-show="item.traffic">
              <i class="icon"></i>
              <span>交通: {{item.traffic}}</span>
            </div>
            <div class="school" v-show="item.school">
              <i class="icon"></i>
              <span>学校: {{item.school}}</span>
            </div>
            <div class="rental_type" v-show="item.rentalType">
              <i class="icon"></i>
              <span>{{item.rentalType === 'STUDIO'?'单间': item.rentalType === 'WHOLE'?'整租': item.rentalType === 'PART'?'分租': item.rentalType === 'SUBLET'?'转租': item.rentalType === 'STUDENT-APARTMENT'?'学生公寓': item.rentalType === 'HOME-STAY'?'寄宿家庭': '其他'}} - {{item.rentalTime}}起租</span>
            </div>
            <div class="rental_period" v-show="item.rentalPeriodUnit">
              <i class="icon"></i>
              <span>租期要求 - {{item.rentalPeriod}}{{item.rentalPeriodUnit=='YEAR'?'年':item.rentalPeriodUnit=='MONTH'?'月':item.rentalPeriodUnit=='WEEK'?'周':''}}</span>
            </div>
          </div>
        </div>
        <div class="item_right">
          <div class="price_info">
            <span class="price">AU$ {{item.rentalPrice}}</span>
            <span class="price_unit">{{item.rentalPriceUnit=='YEAR'?'每年':item.rentalPriceUnit=='MONTH'?'每月':item.rentalPriceUnit=='WEEK'?'每周':''}}</span>
          </div>
          <div class="btn_group" v-show="!collectStatus">
            <router-link :to="'/detail/'+item.id" class="look_up_btn">查看房源</router-link>
            <span v-show="!item.collected" class="collect_btn" @click="collect(item.id)">收藏房源</span>
            <span v-show="item.collected" class="collect_btn collected" @click="cancelCollect(item.id)">取消收藏</span>
          </div>
          <div class="btn_group" v-show="collectStatus">
            <router-link :to="'/detail/'+item.id" class="look_up_btn">查看房源</router-link>
            <span class="collect_btn collected" @click="cancelCollect(item.id)">取消收藏</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HouseList',
  props: ['list', 'collectStatus'],
  methods: {
    // 收藏
    collect (index) {
      let that = this
      this.$ajax({
        method: 'post',
        url: 'mxj/house/collect',
        params: {
          houseId: index
        }
      })
        .then((res) => {
          if (res.data.code === 20100) {
            this.$message({
              message: '对不起，您尚未登录，请登录后收藏',
              type: 'warning'
            })
          } else if (res.data.code === 0) {
            that.$parent.getInfo()
          }
        })
    },
    // 取消收藏
    cancelCollect (index) {
      let that = this
      this.$ajax({
        method: 'post',
        url: 'mxj/house/cancelCollect',
        params: {
          houseId: index
        }
      })
        .then((res) => {
          if (res.data.code === 0) {
            that.$parent.getInfo()
          }
        })
    }
  }
}
</script>

<style lang="less">
@orangeColor:#fe5932;
@yahei:"Microsoft YaHei";
.house_list_box{
  width:860px;
  .item_list{
    .item{
      position: relative;
      height:210px;
      border-bottom:1px dashed #e8e8e8;
      .item_left{
        position: absolute;
        width:278px;
        height:100%;
        .img{
          height:100%;
          img{
            width:100%;
            height:100%;
            padding:20px 0;
            box-sizing:border-box;
          }
        }
      }
      .item_center{
        position: absolute;
        left:300px;
        width:350px;
        height:100%;
        .top{
          position: absolute;
          top:20px;
          .top_title{
            font:bold 16px "Arial";
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
          .house_info{
            overflow: hidden;
            margin-top:10px;
            .details{
              float: left;
              height:25px;
              border-right:1px solid #e8e8e8;
              font:14px "Arial";
              padding-right:3px;
              .bedroom{
                height: 100%;
                margin-right:5px;
                display:inline-block;
                .icon{
                  display: inline-block;
                  width:25px;
                  height:25px;
                  vertical-align: middle;
                  background: url('../../assets/img/bedroom24.png') no-repeat;
                  background-size: 100% 100%;
                }
                span{
                  display: inline-block;
                  height:100%;
                  line-height: 25px;
                }
              }
              .toilet{
                height: 100%;
                margin-right:5px;
                display:inline-block;
                .icon{
                  display: inline-block;
                  width:25px;
                  height:25px;
                  vertical-align: middle;
                  background: url('../../assets/img/shower24.png') no-repeat;
                  background-size: 100% 100%;
                }
                span{
                  display: inline-block;
                  height:100%;
                  line-height: 25px;
                }
              }
              .park{
                height: 100%;
                margin-right:5px;
                display:inline-block;
                .icon{
                  display: inline-block;
                  width:25px;
                  height:25px;
                  vertical-align: middle;
                  background: url('../../assets/img/car.png') no-repeat;
                  background-size: 100% 100%;
                }
                span{
                  display: inline-block;
                  height:100%;
                  line-height: 25px;
                }
              }
            }
            .house_type{
              float: left;
              margin-left:10px;
              height:25px;
              color:#999;
              font:14px @yahei;
              p{
                margin: 0;
                line-height:25px;
              }
            }
          }
        }
        .bottom{
          position: absolute;
          bottom:20px;
          font:14px @yahei;
          color:#999;
          .transform{
            overflow: hidden;
            .icon{
              float:left;
              margin-right:2px;
              width:16px;
              height:16px;
              background: url('../../assets/img/transform.png');
            }
            span{
              float: left;
            }
          }
          .school{
            overflow: hidden;
            .icon{
              float:left;
              margin-right:2px;
              width:16px;
              height:14px;
              background: url('../../assets/img/school&type.png');
            }
            span{
              float: left;
            }
          }
          .rental_type{
            overflow: hidden;
            .icon{
              float:left;
              margin-right:2px;
              width:16px;
              height:18px;
              background: url('../../assets/img/school&type.png') 0 18px;
            }
            span{
              float: left;
            }
          }
          .rental_period{
            overflow: hidden;
            .icon{
              float:left;
              margin-right:2px;
              width:16px;
              height:16px;
              background: url('../../assets/img/period.png');
            }
            span{
              float: left;
            }
          }
        }
      }
      .item_right{
        position: absolute;
        right:0;
        width:110px;
        height:100%;
        .price_info{
          position: absolute;
          top:20px;
          color:@orangeColor;
          .price{
            font:bold 16px @yahei;
          }
          .price_unit{
            font:14px "Microsoft YaHei";
          }
        }
        .btn_group{
          position: absolute;
          bottom:0;
          width:100%;
          font:14px "Microsoft YaHei";
          .look_up_btn{
            cursor: pointer;
            display: block;
            width:100%;
            color:#fff;
            margin-bottom:20px;
            padding:5px 0 5px 33px;
            box-sizing: border-box;
            border-radius:5px;
            background:@orangeColor url('../../assets/img/search_white.png') no-repeat 10px center;
          }
          .collect_btn{
            cursor: pointer;
            display: block;
            width:100%;
            color:#333;
            border:1px solid #e8e8e8;
            margin-bottom:20px;
            padding:5px 0 5px 33px;
            box-sizing: border-box;
            border-radius:5px;
            background:#fff url('../../assets/img/collect.png') no-repeat 10px center;
            &.collected{
              background-image: url(../../assets/img/remove_collect.png);
            }
          }
        }
      }
    }
  }
  .empty_info{
    width:100%;
    height:600px;
    margin-top:20px;
    border:1px dashed #e8e8e8;
    box-sizing: border-box;
    .text{
      text-align: center;
      font-size:28px;
      color:#333;
    }
  }
}
</style>
