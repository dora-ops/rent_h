<template>
  <div class="personal_info_box">
    <div class="right_box">
      <div class="top">
        <div class="title">我的房源</div>
      </div>
      <div class="content">
        <div class="info">
          <div class="icon" v-show="searchList.length<=0">
            <img src="../../assets/img/none_house_origin.png">
          </div>
          <house-list :list="searchList" :collectStatus="true"></house-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../header'
import Footer from '../footer'
import HouseList from '../element/houseList'
import {pub_house,cityList,houseList,rentalList} from "../../sqlMap.js"
export default {
  name: 'HouseInfo',
  components: {
    'v-header': Header,
    'v-footer': Footer,
    'house-list': HouseList
  },
   data () {
    return {
     
      searchList: [],
      pageSize: 10,
      pageIndex: 1,
      count: 1,
      sortCurrent: 0,
      sort: 'SORT_AUTO',
      userInfo:{}
    }
  },
  created(){
      this.request()
  },
  methods:{
      request(){
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
        var sql=pub_house.find.replace('?',this.userInfo.id)
         this.$ajax.post("action", {
          sql: sql
        })
          .then((res) => {
              this.searchList=res.data
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
