<template>
  <div class="footer_box">
    <div class="divide"></div>
    <div class="footer">
      <div class="left">
        <img class="logo" src="../assets/img/logo.png">
      </div>
      <div class="center">
        <div class="lists">
          <div class="moxin">
            <span class="moxin_title">墨馨安居</span>
            <ul class="list">
              <li>
                <a href="javascript:;">关于我们</a>
              </li>
              <li>
                <a href="javascript:;">联系我们</a>
              </li>
              <li>
                <a href="javascript:;">合作加盟</a>
              </li>
              <li>
                <a href="javascript:;">招贤纳士</a>
              </li>
            </ul>
          </div>
          <div class="problem">
            <span class="problem_title">常见问题</span>
            <ul class="list">
              <li>
                <a href="javascript:;">网站服务协议</a>
              </li>
              <li>
                <a href="javascript:;">隐私条款</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="contact_way">
          <div class="tel">
            <i class="icon"></i>
            <span>400 123 321 12</span>
          </div>
          <div class="mail">
            <i class="icon"></i>
            <span>info@melrealty.com</span>
          </div>
        </div>
      </div>
      <!-- <div class="right">
        <span class="weixin">微信服务号</span>
        <span class="guanzhu">关注我们</span>
        <img class="erweima" src="../assets/img/erweima.png">
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
@orangeColor:#fe5932;
@yaHei:"Microsoft YaHei";
@arialMT:Arial;
@pingFang:"PingFang SC Regular";
.footer_box{
  .divide{
    width: 100%;
    height: 1px;
    background-color: #f1f1f1;
  }
  .footer{
    width: 1180px;
    padding: 40px 0 60px;
    margin: 0 auto;
    overflow: hidden;
    a{
      text-decoration: none;
    }
    .left{
      float: left;
    }
    .center{
      float:left;
      margin-left:140px;
      .lists{
        float: left;
        .moxin,.problem{
          margin-right:90px;
          float: left;
          .moxin_title,.problem_title{
            font:bold 16px @yaHei;
            color:#333;
          }
          .list{
            margin-top:25px;
            padding:0;
            li{
              list-style:none;
              margin-bottom:10px;
              a{
                font:14px @yaHei;
                color:#666;
              }
            }
          }
        }
      }
      .contact_way{
        float: left;
        font:bold 24px @arialMT;
        color:@orangeColor;
        .tel{
          .icon{
            display: inline-block;
            width:20px;
            height:20px;
            background: url('../assets/img/footer_phone.png') no-repeat;
            background-size: 100% 100%;
          }
        }
        .mail{
          margin-top:60px;
          .icon{
            display: inline-block;
            width:20px;
            height:20px;
            background:url('../assets/img/footer_mail.png');
            background-size: 100% 100%;
          }
        }
      }
    }
    .right{
      width:200px;
      height:200px;
      float: right;
      position: relative;
      .weixin{
        position: absolute;
        top:0;
        right: 0px;
        text-align: center;
        width:120px;
        font:16px @yaHei;
        color:#333;
      }
      .guanzhu{
        width:14px;
        height:129px;
        position: absolute;
        top:45px;
        right:130px;
        font:14px @yaHei;
        color:#666;
      }
      .erweima{
        width:120px;
        height:129px;
        position: absolute;
        top:25px;
        right:0;
      }
    }
  }
}
</style>
