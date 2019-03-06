<template>
  <div class="choose_us_box">
    <div class="divide"></div>
    <!-- 选择我们 安置您海外的家 -->
    <div class="privide">
      <div class="title">选择我们 安置您海外的家</div>
      <div class="item_list">
        <div class="item">
          <img src="../assets/img/home.png">
        </div>
        <div class="item">
          <img src="../assets/img/home.png">
        </div>
        <div class="item">
          <img src="../assets/img/home.png">
        </div>
        <div class="item">
          <img src="../assets/img/home.png">
        </div>
      </div>
      <div class="title_info">我们来自五湖四海 我们曾海外漂泊 我们也更懂你</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChooseUs'
}
</script>

<style lang="less">
.choose_us_box{
  // 分割线
  .divide{
    width:100%;
    height:1px;
    background-color:#f1f1f1;
  }
  .privide{
    width: 1180px;
    margin: 0 auto;
    .title{
      text-align: center;
      margin-top:50px;
      font:30px "Microsoft YaHei";
      color:#333;
    }
    .title_info{
      text-align: center;
      font:16px "Microsoft YaHei";
      color:#999;
    }
    .item_list{
      width:100%;
      overflow: hidden;
      margin-top:30px;
      padding:5px;
      .item{
        cursor: pointer;
        margin-right:20px;
        &:hover{
          box-shadow:0px 0px 20px rgba(229,229,229,1);
        }
        float: left;
        width:270px;
        height:200px;
        img{
          width:114px;
          height:114px;
          position: relative;
          top:33px;
          left:68px;
        }
      }
    }
    .title_info{
      margin:30px 0 40px 0;
    }
  }
}
</style>
