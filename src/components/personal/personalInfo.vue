<template>
  <div class="personal_info_box">
    <div class="right_box">
      <div class="personal_top">
        <div class="personal_top_title">个人中心</div>
        <div class="avatar">
          <img @click="uploadAvatar" class="avatar_img" src="../../assets/img/avatar.png">
        </div>
      </div>
      <el-form label-position="left"  ref="form" class="info" :model="info" label-width="100px">
        <p class="info_title">个人信息</p>
        <el-form-item label="昵称">
          <el-input v-model="info.nickname"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="info.sex">
            <el-radio label="MALE">男</el-radio>
            <el-radio label="FEMALE">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="国籍">
          <el-select v-model="info.country" placeholder="国家">
            <el-option label="中国" value="zhongguo"></el-option>
            <el-option label="美国" value="meiguo"></el-option>
          </el-select>
          <el-select v-model="info.province" placeholder="省">
            <el-option label="上海" value="shanghai"></el-option>
            <el-option label="北京" value="beijing"></el-option>
            <el-option label="安徽" value="anhui"></el-option>
          </el-select>
          <el-select v-model="info.city" placeholder="市">
            <el-option label="合肥" value="hefei"></el-option>
            <el-option label="亳州" value="bozhou"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="毕业院校">
          <el-input v-model="info.gradutedSchool"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-row>
            <el-col :span="12">
              <el-input v-model="info.phone"></el-input>
            </el-col>
            <el-col :offset="1" :span="11" class="vercode" v-show="!info.phone">
              <el-row>
                <el-col :span="15">
                  <el-input v-model="verCode" class="vercode_input"></el-input>
                </el-col>
                <el-col :offset="1" :span="8">
                  <span class="send_vercode">发送验证码</span>
                </el-col>
              </el-row>
            </el-col>
            <el-col :offset="1" :span="11" class="verified" v-show="info.phone">
              <i class="icon"></i>
              <span class="status">已验证</span>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="电子邮箱">
          <el-row>
            <el-col :span="12">
              <el-input v-model="info.email"></el-input>
            </el-col>
            <el-col :offset="1" :span="11" class="vercode" v-show="!info.email">
              <el-row>
                <el-col :span="15">
                  <el-input v-model="verCode" class="vercode_input"></el-input>
                </el-col>
                <el-col :offset="1" :span="8">
                  <span class="send_vercode">发送验证码</span>
                </el-col>
              </el-row>
            </el-col>
            <el-col :offset="1" :span="11" class="verified" v-show="info.email">
              <i class="icon"></i>
              <span class="status">已验证</span>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="出国原因">
          <el-select v-model="info.abroadReason" placeholder="请选择">
            <el-option label="求学" value="求学"></el-option>
            <el-option label="求职" value="求职"></el-option>
            <el-option label="其他" value="其他"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="自我介绍">
          <el-input type="textarea" v-model="info.selfIntroduce"></el-input>
        </el-form-item>
        <div class="save_btn">
          <span class="save" @click="savePersonalInfo">保存</span>
        </div>
      </el-form>
      <el-form label-position="left"  ref="form" class="password_manager" :model="password" label-width="100px">
        <p class="title">登录管理</p>
        <el-form-item label="初始密码">
          <el-input v-model="password.initial"></el-input>
        </el-form-item>
        <el-form-item label="请输入新密码">
          <el-input v-model="password.new"></el-input>
        </el-form-item>
        <el-form-item label="请输入新密码">
          <el-input v-model="password.newAgain"></el-input>
        </el-form-item>
        <div class="save_password">
          <span class="save" @click="updatePassword">保存</span>
        </div>
        <div class="forget_password">
          <span class="forget" @click="forgetPwd">忘记密码</span>
        </div>
      </el-form>
    </div>
    <!-- <div class="upload_avatar_box">
      <div class="avatar_show_box">

      </div>
      <input id="file" class="file" type="file">
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'PersonalInfo',
  data () {
    return {
      sex: '1',
      info: {},
      verCode: '',
      password: {
        initial: '',
        new: '',
        newAgain: ''
      }
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      let that = this
      this.$ajax({
        method: 'get',
        url: 'mxj/user/info'
      })
        .then((res) => {
          if (res.data.code === 0) {
            that.info = res.data.data
          }
        })
    },
    savePersonalInfo () {
      this.$ajax({
        method: 'post',
        url: '/mxj/user/updUserInfo',
        params: {
          nickname: this.info.nickname,
          sex: this.info.sex,
          phone: this.info.phone,
          email: this.info.email,
          verCode: this.verCode,
          country: this.info.country,
          province: this.info.province,
          city: this.info.city,
          gradutedSchool: this.info.gradutedSchool,
          abroadReason: this.info.abroadReason,
          selfIntroduce: this.info.selfIntroduce
        }
      })
        .then((res) => {
          if (res.data.code === 0) {
            console.log('上传成功')
          }
        })
    },
    forgetPwd () {
      this.$parent.forgetPwd()
    },
    uploadAvatar () {
      console.log('上传头像')
      this.$ajax({
        method: 'post',
        url: 'mxj/user/uploadAvatar',
        params: {
          data: '',
          fileName: ''
        }
      })
        .then((res) => {
          console.log(res.data)
        })
    },
    updatePassword () {
      if (this.password.new === this.password.newAgain && this.password.new !== '') {
        this.$ajax({
          method: 'post',
          url: 'mxj/user/updPwd',
          params: {
            password: this.password.initial,
            newPassword: this.password.new
          }
        })
          .then((res) => {
            console.log(res.data)
          })
      }
    }
  }
}
</script>

<style lang="less">
@orangeColor: #fe5932;
input{
  border-color: @orangeColor;
}
.personal_info_box{
  .right_box{
    width: 1000px;
    margin-bottom: 30px;
    background: #fff;
    margin-left: 20px;
    box-sizing: border-box;
    float: left;
    .personal_top{
      .personal_top_title{
        padding: 30px 0 20px;
        font-size: 30px;
        text-align: center;
        border-bottom: 1px solid #e8e8e8;
      }
      .avatar{
        height: 200px;
        border-bottom: 1px solid #e8e8e8;
        text-align: center;
        .avatar_img{
          cursor: pointer;
          margin-top: 25px;
          width: 150px;
          height: 150px;
        }
      }
    }
    .info{
      margin: 0 80px;
      border-bottom: 1px dashed #e8e8e8;
      .verified{
        .icon{
          display: inline-block;
          width: 19px;
          height: 19px;
          background: url(../../assets/img/status_sure.png);
          background-size: 100% 100%;
          vertical-align: text-top;
        }
        .status{
          color: #999;
          font-size:14px;
          line-height: 16px;
        }
      }
      .vercode{
        .send_vercode{
          cursor: pointer;
          text-align: center;
          border-radius: 5px;
          display: block;
          color: #fff;
          background-color: #33CC99;
        }
      }
      .info_title{
        padding: 15px 0;
        font-size: 18px;
        font-weight: bold;
      }
      .el-textarea__inner{
        resize: none;
      }
      .save_btn{
        cursor: pointer;
        .save{
          display: inline-block;
          text-align: center;
          line-height: 30px;
          border-radius: 5px;
          width: 90px;
          height: 30px;
          background-color: #33CC99;
          color: #fff;
          margin-bottom: 20px;
        }
      }
    }
    .password_manager{
      margin: 0 80px;
      .title{
        padding: 15px 0;
        font-size: 18px;
        font-weight: bold;
      }
      .save_password{
        cursor: pointer;
        display: inline-block;
        .save{
          display: inline-block;
          text-align: center;
          line-height: 30px;
          border-radius: 5px;
          width: 90px;
          height: 30px;
          background-color: #33CC99;
          color: #fff;
          margin-bottom: 20px;
        }
      }
      .forget_password{
        margin-left: 30px;
        display: inline-block;
        cursor: pointer;
        .forget{
          display: inline-block;
          text-align: center;
          line-height: 30px;
          border-radius: 5px;
          width: 90px;
          height: 30px;
          background-color: #fff;
          border: 1px solid #000;
          box-sizing: border-box;
          margin-bottom: 20px;
        }
      }
    }
  }
  .upload_avatar_box{
    position: fixed;
    width: 400px;
    height: 500px;
    background-color: #fff;
    border:1px solid #e8e8e8;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    margin-top: -250px;
    margin-left: -200px;
    text-align: center;
    .avatar_show_box{
      margin: 50px auto 30px;
      width: 200px;
      height: 200px;
      border-radius: 10px;
      border: 1px dashed #e8e8e8;
    }
  }
}
</style>
