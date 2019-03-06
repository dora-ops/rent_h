<template>
  <div class="personal_info_box">
    <div class="right_box">
      <div class="collect_top">
        <div class="collect_title">我的收藏</div>
      </div>
      <house-list :list="collectList" :collectStatus="true" v-show="collectList.length > 0"></house-list>
      <div class="collect_content" v-show="collectList.length == 0">
        <div class="info">
          <div class="icon">
            <img src="../../assets/img/none_collect.png">
          </div>
          <p class="text">目前没有收藏哦</p>
        </div>
      </div>
      <el-pagination
        v-show="collectList.length>0"
        background
        @current-change="getInfo"
        :current-page.sync="pageIndex"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="count">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import HouseList from '../element/houseList'
export default {
  name: 'CollectInfo',
  components: {
    'house-list': HouseList
  },
  data () {
    return {
      collectList: [],
      pageIndex: 1,
      pageSize: 10,
      count: 1
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      this.$ajax({
        methods: 'get',
        url: 'mxj/house/collect/list'
      })
        .then((res) => {
          if (res.data.code === 0) {
            this.collectList = res.data.data.list
            this.count = res.data.data.count
          }
        })
    }
  }
}
</script>

<style lang="less">
@orangeColor: #fe5932;
input{
  border-color: @orangeColor;
}
a{
  text-decoration: none;
}
.personal_info_box{
  .right_box{
    width: 1000px;
    margin-bottom: 30px;
    background: #fff;
    margin-left: 20px;
    box-sizing: border-box;
    float: left;
    .collect_top{
      .collect_title{
        padding: 30px 0 20px;
        font-size: 30px;
        text-align: center;
        border-bottom: 1px solid #e8e8e8;
      }
    }
    .collect_content{
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
    .el-pagination{
      text-align: center;
      margin: 20px 0;
      .btn-prev,.btn-next{
        width:34px;
        height:34px;
        background-color:#fff;
        border:1px solid #e8e8e8;
      }
      .el-pager{
        li{
          line-height:34px;
          width:34px;
          height:34px;
          font-weight: normal;
          font-size:14px;
          font-family:"Microsoft YaHei";
          background:#fff;
          border:1px solid #e8e8e8;
          &.active{
            background:@orangeColor;
          }
          &:not(.active):hover{
            color:@orangeColor;
          }
        }
      }
    }
  }
}
</style>
