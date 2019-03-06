<template>
  <div class="personal_info_box">
    <div class="right_box">
      <div class="top">
        <div class="title">消息中心</div>
        <div class="avatar">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageInfo'
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
      .avatar{
        height: 200px;
        border-bottom: 1px solid #e8e8e8;
      }
    }
  }
}
</style>
