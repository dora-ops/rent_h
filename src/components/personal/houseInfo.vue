<template>
  <div class="personal_info_box">
    <div class="right_box">
      <div class="top">
        <div class="title">我的房源</div>
      </div>
      <div class="content">
        <div class="info">
          <div class="icon">
            <img src="../../assets/img/none_house_origin.png">
          </div>
          <p class="text">目前没有您发布的房源哦</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HouseInfo'
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
    .top{
      .title{
        padding: 30px 0 20px;
        font-size: 30px;
        text-align: center;
        border-bottom: 1px solid #e8e8e8;
      }
    }
    .content{
      .info{
        text-align: center;
        padding: 200px 0;
        .icon{
          margin: 0 auto;
          width: 72px;
          height: 72px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .text{
          margin-top: 10px;
          color: #999;
        }
      }
    }
  }
}
</style>
