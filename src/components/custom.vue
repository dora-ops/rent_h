<template>
  <div class="custom_info_box">
    <v-header></v-header>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from './header'
import Footer from './footer'
export default {
  name: 'Custom',
  components: {
    'v-header': Header,
    'v-footer': Footer
  }
}
</script>

<style lang="less">
@orangeColor: #fe5932;
.custom_info_box{
  .info_box{
    .bread_box{
      margin:20px auto;
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
    .header_box{
      width: 830px;
      margin: 0 auto;
      .header_title{
        font-size: 30px;
        text-align: center;
        margin-top: 30px;
      }
      .header_info{
        font-size: 20px;
        color: red;
        margin: 20px 0 50px;
      }
    }
    .content_box{
      width: 830px;
      margin: 0 auto;
      .add_tab{
        margin-bottom: 10px;
        border-bottom: 1px solid #e8e8e8;
        height: 30px;
        .item{
          cursor: pointer;
          font-size: 18px;
          width: 80px;
          height: 100%;
          text-align: center;
          line-height: 30px;
          border: 1px solid #e8e8e8;
          background-color:#fff;
          border-bottom-color: #fff;
          float: left;
          box-sizing: border-box;
          &.on{
            box-sizing: content-box;
          }
          &:not(:first-child){
            border-left: none;
          }
        }
        .add_btn{
          cursor: pointer;
          float: left;
          font-size: 20px;
          border: 1px solid #000;
          text-align: center;
          border-radius: 5px;
          margin-left: 10px;
          margin-top: 5px;
          line-height: 20px;
          width: 20px;
          height: 20px;
        }
        .right_info{
          line-height: 30px;
          font-size: 14px;
          float: right;
          color: #333;
        }
      }
      .form_box{
        .el-form{
          border-bottom: 1px solid #e8e8e8;
          .divide{
            width: 100%;
            border: 1px dashed #e8e8e8;
          }
          .form_title{
            margin: 20px 0 10px;
            font-size: 16px;
            font-weight: bold;
          }
          .form_des{
            font-size: 14px;
            font-weight: bold;
          }
          .el-form-item__label{
            font-size: 14px;
            padding: 0;
          }
          .el-form-item__content{
            font-size: 18px;
            .el-radio,.el-radio-button{
              .el-radio-button__inner:hover{
                color: @orangeColor;
              }
              &:hover{
                .el-radio__label{
                  color: @orangeColor;
                }
                .el-radio__inner{
                  border-color: @orangeColor;
                }
              }
              &.is-checked,&.is-active{
                .el-radio__inner,.el-radio-button__inner{
                  background: @orangeColor;
                  border-color: @orangeColor;
                  box-shadow: none;
                }
                .el-radio__label{
                  color: @orangeColor;
                }
              }
            }
          }
        }
        .form_btns{
          margin: 30px 0;
          text-align: center;
          font-size: 18px;
            letter-spacing: 2px;
          .submit{
            display: inline-block;
            width: 130px;
            height: 40px;
            text-decoration: none;
            background-color: @orangeColor;
            color: #fff;
            text-align: center;
            line-height: 40px;
            border-radius: 5px;
            margin-right: 30px;
          }
          .save{
            display: inline-block;
            width: 130px;
            height: 40px;
            text-decoration: none;
            border: 1px solid #000;
            color: #000;
            text-align: center;
            line-height: 40px;
            border-radius: 5px;
          }
        }
      }
    }
  }
}
</style>
