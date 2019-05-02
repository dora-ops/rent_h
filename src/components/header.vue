<template>
  <div class="header_box">
    <div class="nav">
      <div class="left">
        <span class="watermark">为每一个飘扬过海的梦想，找一个家</span>
      </div>
      <div class="right">
        <div class="login_register" v-if="!userInfo">
          <a href="javascript:;" class="login" @click="login">登录</a>
          <span class="v_divide">|</span>
          <a href="javascript:;" class="register" @click="register">注册</a>
        </div>
        <div class="login_register" v-else>
          <a href="javascript:;" class="login" @mouseenter="isShowDropdown = true" @mouseleave="isShowDropdown = false">
            {{userInfo.username}}
            <i class="el-icon-arrow-down"></i>
            <div class="dropdown" v-show="isShowDropdown">
              <div class="content">
                <div class="left">
                  <router-link tag="div" to="/personal/orderInfo" class="account">我的账户</router-link>
                  <router-link tag="div" to="/personal/messageInfo" class="message">消息中心</router-link>
                  <router-link tag="div" to="/personal/collectInfo" class="collect">我的收藏</router-link>
                </div>
                <router-link to="/personal/personalInfo" tag="div" class="right">
                  <img class="avatar" src="../assets/img/avatar.png">
                </router-link>
              </div>
              <div @click="logout" class="logout">退出</div>
            </div>
          </a>
          <span class="v_divide">|</span>
          <router-link to="/personal/orderInfo" class="order">我的订单</router-link>
        </div>
        <div class="publish_box">
          <button class="publish">发布房源</button>
        </div>
      </div>
    </div>
    <div class="divide"></div>
    <div class="search_nav">
      <div class="left">
        <img class="logo" src="../assets/img/logo.png">
      </div>
      <div class="center">
        <ul class="index_nav">
          <li :class="on=='Index'?'on':''">
            <router-link to="/index">首页</router-link>
          </li>
          <li :class="on=='HousingResources'?'on':''">
            <router-link to="/housingResources">房源</router-link>
          </li>
          <!-- <li :class="on=='HouseCustom'?'on':''">
            <router-link to="/houseCustom">房源定制化服务</router-link>
          </li>
          <li :class="on=='HomeDecorationRent'?'on':''">
            <router-link to="/homeDecorationRent">家装租赁</router-link>
          </li>
          <li :class="on=='LifeService'?'on':''">
            <router-link to="/lifeService">生活服务</router-link>
          </li>
          <li :class="on=='FootMark'?'on':''">
            <router-link to="/footMark">澳洲足迹</router-link>
          </li> -->
        </ul>
      </div>
      <div class="right">
        <span class="tel_title">
          <i class="icon"></i>
          咨询热线：
        </span>
        <span class="tel">400 123 321 12</span>
      </div>
    </div>
    <div class="divide"></div>
    <div class="form_model_box" v-show="formAbout">
      <div class="content_box">
        <!-- 注册 -->
        <div class="form_box" v-show="formAbout == 'REGISTER'">
          <div class="title">注册新账户</div>
          <div class="register_type type">
            <a :class="accountType=='PHONE'?'phone on':'phone'" href="javascript:;" @click="changeType('PHONE')">手机注册</a>
            <a :class="accountType=='EMAIL'?'mail on':'mail'" href="javascript:;" @click="changeType('EMAIL')">邮箱注册</a>
          </div>
          <div class="form_about">
            <div class="phone_input" v-show="accountType == 'PHONE'">
              <el-select v-model="selectedValue" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <input :class="errorInput.account?'phone_number error_input':'phone_number'" type="text" @blur="checkAccount()" @focus="errorInput.account = false" v-model="account" placeholder="输入您的手机号码"/>
            </div>
            <div class="mail_input" v-show="accountType == 'EMAIL'">
              <input :class="errorInput.account?'mail_number error_input':'mail_number'" type="text" @blur="checkAccount()" @focus="errorInput.account = false" v-model="account" placeholder="输入您的邮箱地址"/>
            </div>
            <div class="img_input">
              <input :class="errorInput.captcha?'img_text error_input':'img_text'" type="text" @blur="checkCaptcha" @focus="errorInput.captcha = false" v-model="captcha" placeholder="输入图形验证码"/>
              <div class="active_img">
                <img class="img" :src="activeImg">
              </div>
              <div class="refresh_img" @click="refreshImgActive">
                <span class="refresh_text">换一批</span>
                <i class="refresh_icon"></i>
              </div>
            </div>
            <div class="active_input" v-show="accountType == 'PHONE'">
              <input :class="errorInput.verCode?'active_number error_input':'active_number'" type="text" @blur="checkVerCode" @focus="errorInput.verCode = false" v-model="verCode" placeholder="输入短信验证码"/>
              <span class="get_active" @click="getSmsCode">获取验证码</span>
            </div>
            <div class="active_input" v-show="accountType == 'EMAIL'">
              <input :class="errorInput.verCode?'active_number error_input':'active_number'" type="text" @blur="checkVerCode" @focus="errorInput.verCode = false" v-model="verCode" placeholder="输入邮箱验证码"/>
              <span class="get_active" @click="getSmsCode">获取验证码</span>
            </div>
            <div class="pwd_input">
              <input :class="errorInput.pwd?'pwd_number error_input':'pwd_number'" type="password" @blur="checkPwd" @focus="errorInput.pwd = false" v-model="pwd" placeholder="请设置新密码 6至10位 (含有字母、数字)"/>
            </div>
            <div class="agree_rule">
              <i :class="isAgree?'selected icon':'icon'" @click="isAgree = !isAgree"></i>
              <span class="agree_text">
                勾选表示您同意
                <a href="javascript:;">使用条款、</a>
                <a href="javascript:;">服务条款、</a>
                <a href="javascript:;">隐私条款</a>
                以及
                <a href="javascript:;">Cookie政策</a>
              </span>
            </div>
            <div class="register_btn confirm">
              <span :class="account && captcha && verCode && pwd && isAgree?'btn_available btn':'btn'" @click="confirmRegister">完成注册</span>
            </div>
            <div class="bottom_info">
              <span class="bottom_text">
                已有账号？点击
                <a href="javascript:;" class="login" @click="login">登录</a>
              </span>
            </div>
            <div class="logo">
              <img class="logo_before" src="../assets/img/logo_before.png">
              <img class="logo_text" src="../assets/img/logo.png">
            </div>
          </div>
        </div>
        <!-- 登录 -->
        <div class="form_box" v-show="formAbout == 'LOGIN'">
          <div class="title">账户登录</div>
          <div class="login_type type">
            <a :class="accountType=='PHONE'?'phone on':'phone'" href="javascript:;" @click="changeType('PHONE')">手机登录</a>
            <a :class="accountType=='EMAIL'?'mail on':'mail'" href="javascript:;" @click="changeType('EMAIL')">邮箱登录</a>
          </div>
          <div class="form_about">
            <div class="phone_input" v-show="accountType == 'PHONE'">
              <el-select v-model="selectedValue" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <input :class="errorInput.account?'phone_number error_input':'phone_number'" type="text" v-model="account" @blur="checkAccount()" @focus="errorInput.account = false" placeholder="输入您的手机号码"/>
            </div>
            <div class="mail_input" v-show="accountType == 'EMAIL'">
              <input :class="errorInput.account?'mail_number error_input':'mail_number'" type="text" v-model="account" @blur="checkAccount()" @focus="errorInput.account = false" placeholder="输入您的邮箱地址"/>
            </div>
            <!-- <div class="img_input">
              <input :class="errorInput.captcha?'img_text error_input':'img_text'" type="text" @blur="checkCaptcha" @focus="errorInput.captcha = false" v-model="captcha" placeholder="输入图形验证码"/>
              <div class="active_img">
                <img class="img" :src="activeImg">
              </div>
              <div class="refresh_img" @click="refreshImgActive">
                <span class="refresh_text">换一批</span>
                <i class="refresh_icon"></i>
              </div>
            </div> -->
            <div class="pwd_input">
              <input :class="errorInput.pwd?'pwd_number error_input':'pwd_number'" type="password" @blur="checkPwd" @focus="errorInput.pwd = false" v-model="pwd" placeholder="请输入密码"/>
            </div>
            <div class="memory">
              <div class="left">
                <i :class="isRemember?'selected icon':'icon'" @click="isRemember = !isRemember"></i>
                <span class="agree_text">记住账户</span>
              </div>
              <div class="right">
                <a href="javascript:;" @click="forgetPwd">忘记密码？</a>
              </div>
            </div>
            <div class="login_btn confirm">
              <span :class="account && captcha && pwd?'btn_available btn':'btn'" @click="confirmLogin">登录</span>
            </div>
            <div class="bottom_info">
              <span class="bottom_text">
                已有账号？点击
                <a href="javascript:;" class="login" @click="register">注册</a>
              </span>
            </div>
            <div class="logo">
              <img class="logo_before" src="../assets/img/logo_before.png">
              <img class="logo_text" src="../assets/img/logo.png">
            </div>
          </div>
        </div>
        <!-- 密码找回 -->
        <div class="form_box" v-show="formAbout == 'FORGET_PWD'">
          <div class="title">密码找回</div>
          <div class="find_type type">
            <a :class="accountType=='PHONE'?'phone on':'phone'" href="javascript:;" @click="changeType('PHONE')">手机找回</a>
            <a :class="accountType=='EMAIL'?'mail on':'mail'" href="javascript:;" @click="changeType('EMAIL')">邮箱找回</a>
          </div>
          <div class="form_about">
            <div class="phone_input" v-show="accountType == 'PHONE'">
              <el-select v-model="selectedValue" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <input :class="errorInput.account?'phone_number error_input':'phone_number'" type="text" @blur="checkAccount()" @focus="errorInput.account = false" v-model="account" placeholder="输入您的手机号码"/>
            </div>
            <div class="mail_input" v-show="accountType == 'EMAIL'">
              <input :class="errorInput.account?'mail_number error_input':'mail_number'" type="text" @blur="checkAccount()" @focus="errorInput.account = false" v-model="account" placeholder="输入您的邮箱地址"/>
            </div>
            <div class="active_input" v-show="accountType == 'PHONE'">
              <input :class="errorInput.verCode?'active_number error_input':'active_number'" type="text" @blur="checkVerCode" @focus="errorInput.verCode = false" v-model="verCode" placeholder="输入短信验证码"/>
              <span class="get_active" @click="getSmsCode">获取验证码</span>
            </div>
            <div class="active_input" v-show="accountType == 'EMAIL'">
              <input :class="errorInput.verCode?'active_number error_input':'active_number'" type="text" @blur="checkVerCode" @focus="errorInput.verCode = false" v-model="verCode" placeholder="输入邮箱验证码"/>
              <span class="get_active" @click="getSmsCode">获取验证码</span>
            </div>
            <div class="pwd_input">
              <input :class="errorInput.pwd?'pwd_number error_input':'pwd_number'" type="password" @blur="checkPwd" @focus="errorInput.pwd = false" v-model="pwd" placeholder="请输入新密码"/>
            </div>
            <div class="pwd_input">
              <input :class="errorInput.againPwd?'pwd_number error_input':'pwd_number'" type="password" @blur="checkAgainPwd" @focus="errorInput.againPwd = false" v-model="againPwd" placeholder="请再次输入新密码"/>
            </div>
            <div class="update_btn confirm">
              <span :class="account && verCode && pwd && againPwd?'btn_available btn':'btn'" @click="confirmUpdate">确认修改</span>
            </div>
            <div class="bottom_info">
              <span class="bottom_text">
                没有账号？点击
                <a href="javascript:;" class="login" @click="register">注册</a>
              </span>
            </div>
            <div class="logo">
              <img class="logo_before" src="../assets/img/logo_before.png">
              <img class="logo_text" src="../assets/img/logo.png">
            </div>
          </div>
        </div>
        <div class="close" @click="closeModel">
          <img class="close_img" src="../assets/img/close.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {userOpt } from "../sqlMap.js";
export default {
  name: 'Header',
  data () {
    return {
      on: 'Index',
      isShowDropdown: false,
      formAbout: '',
      accountType: 'PHONE',
      options: [
        {
          value: '中国大陆',
          label: '+86'
        },
        {
          value: '中国台湾',
          label: '+886'
        },
        {
          value: '中国香港',
          label: '+852'
        },
        {
          value: '美国',
          label: '+1'
        },
        {
          value: '英国',
          label: '+44'
        },
        {
          value: '澳大利亚',
          label: '+61'
        },
        
      ],
      selectedValue: '+86',
      // registerData: {
      //   account: '',
      //   verCode: '',
      //   password: ''
      // },
      // loginData: {
      //   account: '',
      //   password: ''
      // },
      account: '',
      captcha: '',
      verCode: '',
      pwd: '',
      againPwd: '',
      isAgree: false,
      isRemember: false,
      activeImg: 'http://111.231.85.203:8080/mxj/captcha',
      errorInput: {
        account: false,
        captcha: false,
        verCode: false,
        pwd: false,
        againPwd: false
      },
      userInfo: null
    }
  },
  created () {
    this.on = this.$route.name
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
  },
  methods: {
    getUserInfo () {
      let that = this
      this.$ajax({
        method: 'get',
        url: 'mxj/user/info'
      })
        .then((res) => {
          localStorage.setItem('userInfo', JSON.stringify(res.data.data))
          that.userInfo = res.data.data
          console.log(res.data.data)
        })
    },
    logout () {
      this.userInfo = null
      localStorage.removeItem('userInfo')
       this.$message({
              message: '恭喜您，登出成功',
              type: 'success'
            })
    
    },
    // 注册
    register () {
      this.formAbout = 'REGISTER'
      this.changeType('PHONE')
    },
    // 登录
    login () {
      this.formAbout = 'LOGIN'
      this.changeType('PHONE')
    },
    // 找回密码
    forgetPwd () {
      this.formAbout = 'FORGET_PWD'
      this.changeType('PHONE')
    },
    closeModel () {
      this.formAbout = ''
      this.account = ''
      this.pwd = ''
      this.verCode = ''
      this.captcha = ''
      this.accountType = 'PHONE'
      this.errorInput.account = false
      this.errorInput.captcha = false
      this.errorInput.verCode = false
      this.errorInput.pwd = false
      this.errorInput.againPwd = false
    },
    // 改变注册方式
    changeType (type) {
      this.accountType = type
      if (this.formAbout === 'LOGIN' && localStorage.getItem('accountType') === type) {
        this.account = localStorage.getItem('account') || ''
        this.pwd = localStorage.getItem('pwd') || ''
      } else {
        this.account = ''
        this.pwd = ''
      }
      this.captcha = ''
      this.activeImg += '?'
      this.verCode = ''
      this.againPwd = ''
      this.isAgree = false
      this.errorInput.account = false
      this.errorInput.captcha = false
      this.errorInput.verCode = false
      this.errorInput.pwd = false
      this.errorInput.againPwd = false
    },
    // 检查账号格式
    checkAccount () {
      if (this.accountType === 'PHONE') {
        let reg = /^\d{11}$/
        if (!reg.test(this.account * 1)) {
          this.errorInput.account = true
        } else {
          this.errorInput.account = false
        }
      } else if (this.accountType === 'EMAIL') {
        let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        if (!reg.test(this.account)) {
          this.errorInput.account = true
        } else {
          this.errorInput.account = false
        }
      }
      return this.errorInput.account
    },
    // 检查图形验证码格式
    checkCaptcha () {
      let reg = /^[a-zA-Z0-9]{4}$/
      if (!reg.test(this.captcha)) {
        this.errorInput.captcha = true
      } else {
        this.errorInput.captcha = false
      }
      return this.errorInput.captcha
    },
    // 检查手机/邮箱验证码格式
    checkVerCode () {
      let reg = /^\d{6}$/
      if (!reg.test(this.verCode * 1)) {
        this.errorInput.verCode = true
      } else {
        this.errorInput.verCode = false
      }
      return this.errorInput.verCode
    },
    // 检查密码格式
    checkPwd () {
      if (!this.pwd) {
        this.errorInput.pwd = true
      } else {
        this.errorInput.pwd = false
      }
      return this.errorInput.pwd
    },
    // 检查第二次输入密码
    checkAgainPwd () {
      if (this.pwd === this.againPwd && !this.checkPwd()) {
        this.errorInput.againPwd = false
      } else {
        this.errorInput.againPwd = true
      }
      return this.errorInput.againPwd
    },
    // 获取验证码
    getSmsCode () {
      if (this.accountType === 'PHONE') {
        this.$ajax({
          method: 'post',
          url: 'mxj/msg/sendSmsCode',
          params: {
            type: 'REGISTER',
            phone: this.account,
            captcha: this.captcha
          }
        })
          .then((res) => {
            console.log(res.data)
          })
      } else if (this.accountType === 'EMAIL') {
        this.$ajax({
          method: 'post',
          url: 'mxj/msg/sendEmailCode',
          params: {
            type: 'REGISTER',
            email: this.account
          }
        })
          .then((res) => {
            this.$message({
              message: res.data.message,
              type: 'warning'
            })
          })
      }
    },
    // 刷新图形验证码
    refreshImgActive () {
      this.activeImg += '?'
    },
    // 完成注册
    confirmRegister () {
      if (!(this.checkAccount() || this.checkPwd() || this.isAgree)) {
        this.$ajax({
          method: 'post',
          url: 'insert',
          params: {
            account: this.account,
            password: this.pwd,
            // verCode: this.verCode,
            // accountType: this.accountType
          }
        })
          .then((res) => {
            console.log(res.data)
            if (res.data.code === 0) {
              this.closeModel()
              this.$message({
                message: '恭喜您，注册成功',
                type: 'success'
              })
            } else {
              this.$message({
                message: res.data.message,
                type: 'warning'
              })
            }
          })
      }
    },
    // 完成登录
    confirmLogin () {
      if (!(this.checkAccount() || this.checkPwd())) {
        let that = this
        var sql=userOpt.login.replace("?", this.account)
          .replace("?", this.pwd);
        this.$ajax.post("action", {
          sql: sql
        })
          .then((res) => {
            if (res.data.length != 0) {
              // 如果记住密码
              if (that.isRemember) {
                localStorage.setItem('accountType', this.accountType)
                localStorage.setItem('account', this.account)
                localStorage.setItem('pwd', this.pwd)
              }
              localStorage.setItem('userInfo', JSON.stringify(res.data[0]))
              that.userInfo = res.data[0]
              this.closeModel()
              this.$message({
                message: '恭喜您，登录成功',
                type: 'success'
              })
            } else {
              this.$message({
                message: '账号密码错误',
                type: 'warning'
              })
            }
          })
      }
    },
    // 确认修改
    confirmUpdate () {
      let that = this
      if (!(this.checkAccount() || this.checkVerCode() || this.checkPwd() || this.checkAgainPwd())) {
        this.$ajax({
          method: 'post',
          url: 'mxj/user/forgetPwd',
          params: {
            account: this.account,
            password: this.pwd,
            verCode: this.verCode,
            accountType: this.accountType
          }
        })
          .then((res) => {
            if (res.data.code === 0) {
              that.logout()
              this.$message({
                message: '恭喜您，修改成功，请重新登录',
                type: 'success'
              })
            } else {
              this.$message({
                message: res.data.message,
                type: 'warning'
              })
            }
          })
      }
    }
  }
}
</script>

<style lang="less">
input{
  outline: none;
}
@orangeColor:#fe5932;
// 垂直居中
.verticalCenter{
  position: relative;
  top:50%;
  transform: translateY(-50%);
}
.header_box{
  .divide{
    width:100%;
    height:1px;
    background-color:#f1f1f1;
  }
  a{
    text-decoration: none;
  }
  .nav{
    width:1180px;
    height:50px;
    margin-left:auto;
    margin-right:auto;
    >.left{
      float: left;
      .verticalCenter;
      .watermark{
        font:14px "PingFang SC Regular";
        color:#999;
      }
    }
    >.right{
      float:right;
      height: 100%;
      .login_register{
        height: 100%;
        float: left;
        .login,.register,.order{
          line-height: 50px !important;
          position: relative;
          display: inline-block;
          height: 100%;
          cursor: pointer;
          font:14px "PingFang SC Regular";
          vertical-align: middle;
          color:#333;
          .dropdown{
            width: 190px;
            background: #fff;
            z-index: 2;
            line-height: 40px;
            position: absolute;
            top: 50px;
            right: -7px;
            border: 1px solid #e8e8e8;
            border-radius: 5px;
            .content{
              padding: 5px 20px;
              overflow: hidden;
              .left{
                width: 50%;
                float: left;
              }
              .right{
                float: right;
                width: 50%;
                .avatar{
                  margin-top: 20px;
                  width: 80px;
                  height: 80px;
                }
              }
            }
            .logout{
              padding:3px 20px;
              border-top: 1px solid #e8e8e8;
              text-align: right;
            }
          }
        }
        .v_divide{
          color:#333;
        }
      }
      .publish_box{
        display: inline-block;
        margin-left:20px;
        line-height: 50px;
        .publish{
          font:bold 14px "Microsoft YaHei";
          width:90px;
          height:30px;
          color:@orangeColor;
          background-color:#fff;
          border:1px solid #cdcdcd;
          border-radius:3px;
          outline:none;
          cursor: pointer;
        }
      }
    }
  }
  .search_nav{
    width:1180px;
    height:70px;
    margin-left:auto;
    margin-right:auto;
    .left{
      .verticalCenter;
      width:171px;
      height:48px;
      float: left;
      .logo{
        width:100%;
        height:100%;
      }
    }
    .center{
      .verticalCenter;
      // width:660px;
      float: left;
      .index_nav{
        width:100%;
        list-style: none;
        overflow:hidden;
        padding:0;
        li{
          float: left;
          margin-left:40px;
          &.on{
            a{
              color:@orangeColor;
            }
          }
          a{
            font:bold 16px "Microsoft YaHei";
            color:#666;
          }
        }
      }
    }
    .right{
      // width:204px;
      .verticalCenter;
      float: right;
      .tel_title{
        font:14px "PingFang SC Regular";
        vertical-align: text-top;
        color:#999;
      }
      .tel{
        font:bold 16px Arial;
        color:@orangeColor;
      }
    }
  }
  .form_model_box{
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.5);
    .content_box{
      position: absolute;
      top: 120px;
      left: 50%;
      margin-left: -268px;
      border-radius: 15px;
      width: 536px;
      background: #fff;
      .form_box{
        .error_input{
          border:2px solid @orangeColor;
          animation:shake 100ms 5;
          -webkit-animation:shake 100ms 5;
        }
        @keyframes shake{
          from {transform: translateX(2px);}
          to {transform: translateX(-2px);}
        }

        @-webkit-keyframes shake{
          from {transform: translateX(2px);}
          to {transform: translateX(-2px);}
        }
        input{
          padding-left: 15px;
          border-radius: 5px;
          height: 44px;
          border: 1px solid #e8e8e8;
          box-sizing: border-box;
        }
        a{
          color: @orangeColor;
        }
        width: 356px;
        margin: 0 auto;
        .title{
          text-align: center;
          font-size: 26px;
          margin-top: 50px;
        }
        .type{
          width: 100%;
          height: 50px;
          padding: 0 5px;
          margin-top: 20px;
          box-sizing: border-box;
          a{
            color: #999;
            float: left;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            font-family: "PingFang SC Regular";
            width: 50%;
            height: 100%;
            line-height: 50px;
            border-bottom: 2px solid #e8e8e8;
            box-sizing: border-box;
            &.on{
              border-color: @orangeColor;
              color: @orangeColor;
            }
          }
        }
        .mail_input{
          height: 44px;
          margin-top: 30px;
          .mail_number{
            width: 100%;
          }
        }
        .phone_input{
          height: 44px;
          margin-top: 30px;
          .el-select{
            float: left;
            width: 102px;
            height: 44px;
          }
          .phone_number{
            float: left;
            width: 242px;
            margin-left: 10px;
          }
        }
        .active_input{
          height: 44px;
          margin-top: 20px;
          .active_number{
            float: left;
            width: 256px;
            border-radius:0;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
          }
          .get_active{
            cursor: pointer;
            float: left;
            width: 100px;
            height:100%;
            background-color: #31dba4;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            color: #fff;
            text-align: center;
            line-height: 44px;
            font-size: 14px;
          }
        }
        .img_input{
          position: relative;
          height: 44px;
          margin-top: 30px;
          .img_text{
            width: 150px;
          }
          .active_img{
            position: absolute;
            top: 50%;
            margin-top: -26px;
            left: 160px;
            width: 137px;
            height: 53px;
            background: #F3FBFE;
            border-radius: 5px;
            .img{
              width: 100%;
              height: 100%;
            }
          }
          .refresh_img{
            cursor: pointer;
            position: absolute;
            top: 50%;
            margin-top: -26px;
            right: 0;
            width: 40px;
            height: 53px;
            .refresh_text{
              position: absolute;
              top: 50%;
              margin-top: -21px;
              font-size: 14px;
              line-height: 14px;
              color: #999;
              width: 14px;
            }
            .refresh_icon{
              float: right;
              width: 16px;
              height: 100%;
              background: url(../assets/img/refresh.png) no-repeat center;
              background-size: 16px 16px;

            }
          }
        }
        .pwd_input{
          margin-top: 30px;
          height: 44px;
          .pwd_number{
            width: 100%;
          }
        }
        .agree_rule{
          margin-top: 30px;
          font-size: 14px;
          color: #999;
          .icon{
            cursor: pointer;
            display: inline-block;
            width: 16px;
            height: 16px;
            background-image:url(../assets/img/uncheck.png);
            background-size:100%;
            vertical-align: text-top;
            &.selected{
              background-image:url(../assets/img/selected.png);
            }
          }
        }
        .memory{
          margin-top: 30px;
          font-size: 14px;
          color: #999;
          overflow: hidden;
          .left{
            float: left;
            .icon{
              cursor: pointer;
              display: inline-block;
              width: 16px;
              height: 16px;
              background-image:url(../assets/img/uncheck.png);
              background-size:100%;
              vertical-align: text-top;
              &.selected{
                background-image:url(../assets/img/selected.png);
              }
            }
          }
          .right{
            float: right;
          }
        }
        .confirm{
          margin-top: 39px;
          .btn{
            display: inline-block;
            width: 356px;
            height: 46px;
            background: #D3D3D3;
            border-radius: 5px;
            color: #fff;
            text-align: center;
            line-height: 46px;
            &.btn_available{
              cursor: pointer;
              background: @orangeColor;
            }
          }
        }
        .bottom_info{
          margin-top: 20px;
          text-align: center;
          position: relative;
          .bottom_text{
            font-size:14px;
            color: #999;
            &:before{
              position: absolute;
              top: 50%;
              left: 0;
              content: '';
              width: 108px;
              height: 1px;
              background-color: #e8e8e8;
            }
            &:after{
              position: absolute;
              top: 50%;
              right: 0;
              content: '';
              width: 108px;
              height: 1px;
              background-color: #e8e8e8;
            }
          }
        }
        .logo{
          text-align: center;
          margin-top: 40px;
          margin-bottom: 50px;
        }
      }
      .close{
        cursor: pointer;
        position: absolute;
        top: 20px;
        right: 30px;
        width:16px;
        height: 16px;
        .close_img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
.el-select-dropdown{
  .selected{
    color:@orangeColor;
  }
}
</style>
