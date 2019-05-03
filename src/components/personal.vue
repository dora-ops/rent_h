<template>
  <div class="personal_box">
    <v-header ref="header"></v-header>
    <div class="content_box">
      <div class="bread_box">
        <ul class="bread">
          <li><router-link to="/index">首页</router-link></li>
          <li><router-link to="/personal/orderInfo">我的账户</router-link></li>
          <li><router-link :to="path">{{page === 'OrderInfo' ? '我的订单' : page === 'MessageInfo' ? '消息中心' : page === 'CollectInfo' ? '我的收藏' : page === 'HouseInfo' ? '我的房源' : page === 'PersonalInfo' ? '个人中心' : ''}}</router-link></li>
        </ul>
      </div>
      <div class="body_box">
        <div class="left_box">
          <ul class="tab_list">
            <!-- <li>
              <router-link to="/personal/orderInfo" :class="page === 'OrderInfo'?'on':''">
                <img v-show="page === 'OrderInfo'" class="icon" src="../assets/img/house_manager.png">
                <img v-show="page !== 'OrderInfo'" class="icon" src="../assets/img/house_manager_unsel.png">
                我的订单
              </router-link>
            </li>
            <li>
              <router-link to="/personal/messageInfo" :class="page === 'MessageInfo'?'on':''">
                <img v-show="page === 'MessageInfo'" class="icon" src="../assets/img/message_center.png">
                <img v-show="page !== 'MessageInfo'" class="icon" src="../assets/img/message_center_unsel.png">
                消息中心
              </router-link>
            </li>
            <li>
              <router-link to="/personal/collectInfo" :class="page === 'CollectInfo'?'on':''">
                <img v-show="page === 'CollectInfo'" class="icon" src="../assets/img/my_collect.png">
                <img v-show="page !== 'CollectInfo'" class="icon" src="../assets/img/my_collect_unsel.png">
                我的收藏
              </router-link>
            </li> -->
            <li>
              <router-link to="/personal/houseInfo" :class="page === 'HouseInfo'?'on':''">
                <img v-show="page === 'HouseInfo'" class="icon" src="../assets/img/house_manager.png">
                <img v-show="page !== 'HouseInfo'" class="icon" src="../assets/img/house_manager_unsel.png">
                我的房源
              </router-link>
            </li>
            <li>
              <router-link to="/personal/personalInfo" :class="page === 'PersonalInfo'?'on':''">
                <img class="icon" src="../assets/img/personal_unsel.png">
                发布房源
              </router-link>
            </li>
          </ul>
        </div>
        <router-view/>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from './header'
import Footer from './footer'
export default {
  components: {
    'v-header': Header,
    'v-footer': Footer
  },
  name: 'Personal',
  data () {
    return {
      page: '',
      path: ''
    }
  },
  created () {
    this.page = this.$route.name
    this.path = this.$route.path
  },
  watch: {
    '$route': function () {
      this.page = this.$route.name
      this.path = this.$route.path
    }
  },
  methods: {
    forgetPwd () {
      this.$refs.header.forgetPwd()
    }
  }
}
</script>

<style lang="less">
@orangeColor: #fe5932;
input{
  border-color: @orangeColor;
}
.personal_box{
  .content_box{
    background: #F7F7F7;
    .bread_box{
      margin-bottom: 20px;
      width:1180px;
      margin: 0 auto;
      padding: 20px 0;
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
    .body_box{
      width: 1180px;
      margin: 0 auto;
      overflow: hidden;
      .left_box{
        float: left;
        width: 160px;
        .tab_list{
          background-color: #fff;
          list-style: none;
          padding: 0;
          margin: 0;
          text-align: center;
          padding: 20px 0;
          li{
            cursor: pointer;
            height: 60px;
            border-bottom: 1px dashed #e8e8e8;
            box-sizing: border-box;
            a{
              display: inline-block;
              width: 100%;
              color: #999;
              line-height: 60px;
              font-size: 16px;
              text-decoration: none;
              &.on{
                color: @orangeColor;
              }
              .icon{
                vertical-align: text-bottom;
                margin-right: 8px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
