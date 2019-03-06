<template>
  <div class="search_list_box">
    <v-header></v-header>
    <div class="bread_box">
      <ul class="bread">
        <li><router-link to="/index">首页</router-link></li>
        <li><a href="javascript:;">澳洲房源</a></li>
      </ul>
    </div>
    <div class="search_box">
      <input class="input_text" type="text" placeholder="搜房源      搜家装      搜本地服务" v-model="name">
      <span class="search_btn" @click="getInfo">搜索</span>
    </div>
    <div class="order_box">
      <div class="city sort_item">
        <span class="city_title title">城市:</span>
        <ul class="city_list list">
          <li
            @click="selectCity(index)"
            :class="currentNum.cityCurrent == index?'on':''"
            v-for="(item,index) in cityList"
            :key="index">
            {{item}}
          </li>
        </ul>
      </div>
      <div class="area sort_item">
        <span class="area_title title">地区:</span>
        <ul class="area_list list">
          <li :class="currentNum.areaCurrent == -1?'on':''" @click="selectArea('',-1)">不限</li>
          <li :class="currentNum.areaCurrent == -2?'on':''" @click="selectArea('',-2)">热门区域</li>
          <li
            @click="selectArea(item.code,index)"
            :class="currentNum.areaCurrent == index?'on':''"
            v-for="(item,index) in areaList"
            :key="index">
            {{item.chineseName}}
          </li>
          <li class="area_search_box">
            <input class="area_input" type="text" placeholder="请输入区域名称">
            <span class="area_btn">确认搜索</span>
          </li>
        </ul>
      </div>
      <div class="price sort_item">
        <span class="price_title title">每周价格:</span>
        <ul class="price_list list">
          <li @click="selectPrice(-1)" :class="currentNum.priceCurrent == -1?'on':''">不限AU$</li>
          <li
            @click="selectPrice(index)"
            :class="currentNum.priceCurrent == index?'on':''"
            v-for="(item,index) in priceList"
            :key="index">
            {{item.minPrice}}{{item.maxPrice === null?'以上':'-'}}{{item.maxPrice}}
          </li>
          <li class="price_search_input">
            <input class="min_price_input" type="text" placeholder="最低(AU$)" v-model="minPrice">
            <span>~</span>
            <input class="max_price_input" type="text" placeholder="最高(AU$)" v-model="maxPrice">
            <span class="price_search_btn" @click="getInfo">确认搜索</span>
          </li>
        </ul>
      </div>
      <div class="rental_type sort_item">
        <span class="rental_type_title title">出租类型:</span>
        <ul class="rental_type_list list">
          <li
            @click="selectRentalType(index, item.type)"
            :class="currentNum.rentalCurrent == index?'on':''"
            v-for="(item,index) in rentalList"
            :key="index">
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="house_type sort_item">
        <span class="house_type_title title">房屋类型:</span>
        <ul class="house_type_list list">
          <li
            @click="selectHouseType(index, item.type)"
            :class="currentNum.houseCurrent == index?'on':''"
            v-for="(item,index) in houseList"
            :key="index">
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="house_detail sort_item">
        <span class="house_detail_title title">房屋户型:</span>
        <ul class="house_detail_list list">
          <li>
            <span>居室数目:</span>
            <div class="options">
              <span>{{!currentNum.bedroomNum?"不限":currentNum.bedroomNum}}</span>
              <span class="icon"></span>
              <ul class="dropdown">
                <li v-show="currentNum.bedroomNum" @click="selectNum('bedroom',0)">不限</li>
                <li v-for="i in houseDetailInfo.bedroomNum" :key="i" @click="selectNum('bedroom',i)">{{i}}</li>
              </ul>
            </div>
          </li>
          <li>
            <span>卫浴数目:</span>
            <div class="options">
              <span>{{!currentNum.toiletNum?"不限":currentNum.toiletNum}}</span>
              <span class="icon"></span>
              <ul class="dropdown">
                <li v-show="currentNum.toiletNum" @click="selectNum('toilet',0)">不限</li>
                <li v-for="i in  houseDetailInfo.toiletNum" :key="i" @click="selectNum('toilet',i)">{{i}}</li>
              </ul>
            </div>
          </li>
          <li>
            <span>客厅数目:</span>
            <div class="options">
              <span>{{!currentNum.parlourNum?"不限":currentNum.parlourNum}}</span>
              <span class="icon"></span>
              <ul class="dropdown">
                <li v-show="currentNum.parlourNum" @click="selectNum('parlour',0)">不限</li>
                <li v-for="i in  houseDetailInfo.parlourNum" :key="i" @click="selectNum('parlour',i)">{{i}}</li>
              </ul>
            </div>
          </li>
          <li>
            <span>车位数目:</span>
            <div class="options">
              <span>{{!currentNum.parkNum?"不限":currentNum.parkNum}}</span>
              <span class="icon"></span>
              <ul class="dropdown">
                <li v-show="currentNum.parkNum" @click="selectNum('park',0)">不限</li>
                <li v-for="i in  houseDetailInfo.parkNum" :key="i" @click="selectNum('park',i)">{{i}}</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="supports sort_item">
        <span class="house_detail_title title">配套设施:</span>
        <ul class="supports_list decoration list">
          <li @click="selectFaci('decoration',-1)">
            <span :class="allSelected.decoration?'dot selected':'dot'"></span>
            <span class="text">家装不限</span>
          </li>
          <li v-for="(item,index) in supportDecorationList" :key="index" @click="selectFaci('decoration', index)">
            <span :class="item.selected?'dot selected':'dot'"></span>
            <span class="text">{{item.chineseName}}</span>
          </li>
        </ul>
        <ul class="supports_list facilities list">
          <li @click="selectFaci('facilities',-1)">
            <span :class="allSelected.facilities?'dot selected':'dot'"></span>
            <span class="text">设施不限</span>
          </li>
          <li v-for="(item,index) in supportFacilitiesList" :key="index" @click="selectFaci('facilities', index)">
            <span :class="item.selected?'dot selected':'dot'"></span>
            <span class="text">{{item.chineseName}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="search_content_box">
      <div class="left">
        <div class="bar">
          展开地图
          <i class="icon"></i>
        </div>
        <div class="map">
          <div class="img">
            <img src="../assets/img/map.png">
          </div>
        </div>
      </div>
      <div class="right">
        <div class="order_bar">
          <div class="order_info">
            <a href="javascript:;" :class="sortCurrent==0?'on':''" @click="orderBy('SORT_AUTO')">自动排序</a>
            <a href="javascript:;"  :class="sortCurrent==1?'on':''">
              <span @click="orderBy('SORT_PRICE')">价格</span>
              <span class="arrow" @click="orderBy('SORT_PRICE_DESC')"></span>
              <span class="down" @click="orderBy('SORT_PRICE_ASC')"></span>
            </a>
            <a href="javascript:;" :class="sortCurrent==2?'on':''">
              <span @click="orderBy('SORT_TIME')">发布时间</span>
              <span class="arrow" @click="orderBy('SORT_TIME_DESC')"></span>
              <span class="down" @click="orderBy('SORT_TIME_ASC')"></span>
            </a>
          </div>
        </div>
        <!-- <div class="item_list" v-show="searchList.length>0">
          <div class="item" v-for="(item, index) in searchList" :key="index">
            <div class="item_left">
              <div class="img">
                <img :src="item.cover">
              </div>
            </div>
            <div class="item_center">
              <div class="top">
                <div class="title">{{item.name}} {{item.area}}</div>
                <div class="house_info">
                  <div class="details">
                    <div class="bedroom">
                      <i class="icon"></i>
                      <span>{{item.bedroomNum}}</span>
                    </div>
                    <div class="toilet">
                      <i class="icon"></i>
                      <span>{{item.toiletNum}}</span>
                    </div>
                    <div class="park">
                      <i class="icon"></i>
                      <span>{{item.parkNum}}</span>
                    </div>
                  </div>
                  <div class="house_type">
                    <p>
                      {{
                        item.houseType=='APARTMENT'?'公寓-':
                        item.houseType=='HOUSE'?'别墅-':
                        item.houseType=='TOWNHOUSE'?'联排别墅-':
                        item.houseType=='STUDIO'?'全套单间-':
                        item.houseType=='UNIT'?'单元房-':
                        item.houseType=='OTHERS'?'其他-':''
                      }}{{item.houseType}}
                    </p>
                  </div>
                </div>
              </div>
              <div class="bottom">
                <div class="transform" v-show="item.traffic">
                  <i class="icon"></i>
                  <span>交通: {{item.traffic}}</span>
                </div>
                <div class="school" v-show="item.school">
                  <i class="icon"></i>
                  <span>学校: {{item.school}}</span>
                </div>
                <div class="rental_type" v-show="item.rentalType">
                  <i class="icon"></i>
                  <span>{{item.rentalType === 'STUDIO'?'单间': item.rentalType === 'WHOLE'?'整租': item.rentalType === 'PART'?'分租': item.rentalType === 'SUBLET'?'转租': item.rentalType === 'STUDENT-APARTMENT'?'学生公寓': item.rentalType === 'HOME-STAY'?'寄宿家庭': '其他'}} - {{item.rentalTime}}起租</span>
                </div>
                <div class="rental_period" v-show="item.rentalPeriodUnit">
                  <i class="icon"></i>
                  <span>租期要求 - {{item.rentalPeriod}}{{item.rentalPeriodUnit=='YEAR'?'年':item.rentalPeriodUnit=='MONTH'?'月':item.rentalPeriodUnit=='WEEK'?'周':''}}</span>
                </div>
              </div>
            </div>
            <div class="item_right">
              <div class="price_info">
                <span class="price">AU$ {{item.rentalPrice}}</span>
                <span class="price_unit">{{item.rentalPriceUnit=='YEAR'?'每年':item.rentalPriceUnit=='MONTH'?'每月':item.rentalPriceUnit=='WEEK'?'每周':''}}</span>
              </div>
              <div class="btn_group">
                <router-link :to="'/detail/'+item.id" class="look_up_btn">查看房源</router-link>
                <span v-show="!item.collected" class="collect_btn" @click="collect(item.id)">收藏房源</span>
                <span v-show="item.collected" class="collect_btn collected" @click="cancelCollect(item.id)">已收藏</span>
              </div>
            </div>
          </div>
        </div> -->
        <house-list :list="searchList" :collectStatus="false"></house-list>
        <div class="empty_info" v-show="searchList.length<=0">
          <p class="text">对不起，没有找到您想要的信息</p>
        </div>
        <el-pagination
          v-show="searchList.length>0"
          background
          @current-change="getInfo"
          :current-page.sync="pageIndex"
          :page-size="pageSize"
          layout="prev, pager, next"
          :total="count">
        </el-pagination>
      </div>
    </div>
    <div class="slide_bar">
      <ul class="slide_item_list">
        <li class="top">
          <a class="text" href="#">回到顶部</a>
        </li>
        <li class="phone">
          <a class="text" href="javascript:;">在线咨询</a>
        </li>
        <li class="wechat">
          <a class="text" href="javascript:;">在线咨询</a>
        </li>
        <li class="mail">
          <a class="text" href="javascript:;">在线咨询</a>
        </li>
        <li class="chat">
          <a class="text" href="javascript:;">在线咨询</a>
        </li>
      </ul>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from './header'
import Footer from './footer'
import HouseList from './element/houseList'

export default {
  name: 'SearchList',
  components: {
    'v-header': Header,
    'v-footer': Footer,
    'house-list': HouseList
  },
  created () {
    this.getInfo()
    this.getSupportFacility()
    this.getAreaList()
  },
  data () {
    return {
      name: null,
      kw: '',
      cityCode: null,
      areaCode: null,
      houseType: null,
      minPrice: null,
      maxPrice: null,
      selectedFacilities: [],
      rentalType: null,
      allSelected: {
        decoration: true,
        facilities: true
      },
      cityList: ['墨尔本', '悉尼', '堪培拉', '黄金海岸', '布里斯班', '卧龙岗', '霍巴特', '珀斯'],
      areaList: [],
      priceList: [
        {
          minPrice: 0,
          maxPrice: 250
        },
        {
          minPrice: 250,
          maxPrice: 350
        },
        {
          minPrice: 350,
          maxPrice: 550
        },
        {
          minPrice: 550,
          maxPrice: 750
        },
        {
          minPrice: 750,
          maxPrice: null
        }
      ],
      rentalList: [
        {
          name: '不限',
          type: null
        },
        {
          name: '单间',
          type: 'STUDIO'
        },
        {
          name: '整租',
          type: 'WHOLE'
        },
        {
          name: '分租',
          type: 'PART'
        },
        {
          name: '转租',
          type: 'SUBLET'
        },
        {
          name: '学生公寓',
          type: 'STUDENT-APARTMENT'
        },
        {
          name: '寄宿家庭',
          type: 'HOME-STAY'
        },
        {
          name: '其他',
          type: 'OTHERS'
        }
      ],
      houseList: [
        {
          name: '不限',
          type: null
        },
        {
          name: '公寓Apartment',
          type: 'APARTMENT'
        },
        {
          name: '别墅house',
          type: 'HOUSE'
        },
        {
          name: '联排别墅Townhouse',
          type: 'TOWNHOUSE'
        },
        {
          name: '全套单间Studio',
          type: 'STUDIO'
        },
        {
          name: '单元房Unit',
          type: 'UNIT'
        },
        {
          name: '其他',
          type: null
        }
      ],
      supportDecorationList: [],
      supportFacilitiesList: [],
      houseDetailInfo: {
        'bedroomNum': 5,
        'toiletNum': 5,
        'parlourNum': 5,
        'parkNum': 5
      },
      currentNum: {
        'cityCurrent': 0,
        'areaCurrent': -1,
        'priceCurrent': -1,
        'rentalCurrent': 0,
        'houseCurrent': 0,
        'bedroomNum': null,
        'toiletNum': null,
        'parlourNum': null,
        'parkNum': null
      },
      searchList: [],
      pageSize: 10,
      pageIndex: 1,
      count: 1,
      sortCurrent: 0,
      sort: 'SORT_AUTO'
    }
  },
  methods: {
    getInfo () {
      this.$ajax({
        method: 'post',
        url: 'mxj/house/list',
        headers: {
          'Content-Type': 'X-WWW-FORM-URLENCODED'
        },
        params: {
          cityCode: this.cityCode,
          name: this.name,
          houseType: this.houseType,
          pageSize: this.pageSize,
          pageIndex: this.pageIndex,
          sort: this.sort,
          bedroomNum: this.currentNum.bedroomNum,
          toiletNum: this.currentNum.toiletNum,
          areaCodes: this.areaCode,
          parlourNum: this.currentNum.parlourNum,
          parkNum: this.currentNum.parkNum,
          minRentalPrice: this.minPrice,
          maxRentalPrice: this.maxPrice,
          supportFacilities: this.selectedFacilities,
          rentalType: this.rentalType
        }
      })
        .then((res) => {
          if (res.data.code === 0) {
            this.searchList = res.data.data.list
            this.count = res.data.data.count
          }
        })
    },
    // 获取地区列表
    getAreaList () {
      this.$ajax({
        method: 'get',
        url: 'mxj/resource/hotarea',
        params: {
          cityCode: '1ab2217c0000'
        }
      })
        .then((res) => {
          if (res.data.code === 0) {
            this.areaList = res.data.data
          }
        })
    },
    // 获取配套设施列表
    getSupportFacility () {
      this.$ajax({
        method: 'get',
        url: 'mxj/resource/supportFacility'
      })
        .then((res) => {
          if (res.data.code === 0) {
            this.supportFacilitiesList = res.data.data.facilities
            this.supportDecorationList = res.data.data.facilityDecorations
            for (let i = 0; i < res.data.data.facilities.length; i++) {
              this.supportFacilitiesList[i]['selected'] = false
            }
            for (let i = 0; i < res.data.data.facilityDecorations.length; i++) {
              this.supportDecorationList[i]['selected'] = false
            }
          }
        })
    },
    // 排序
    orderBy (order) {
      if (order === 'SORT_AUTO') {
        this.sortCurrent = 0
        this.sort = order
      } else if (order === 'SORT_PRICE') {
        this.sortCurrent = 1
        if (this.sort === 'SORT_PRICE_ASC') {
          this.sort = 'SORT_PRICE_DESC'
        } else {
          this.sort = 'SORT_PRICE_ASC'
        }
      } else if (order === 'SORT_TIME') {
        this.sortCurrent = 2
        if (this.sort === 'SORT_TIME_ASC') {
          this.sort = 'SORT_TIME_DESC'
        } else {
          this.sort = 'SORT_TIME_ASC'
        }
      } else {
        this.sort = order
      }
      this.getInfo()
    },
    // 城市
    selectCity (index) {
      this.currentNum.cityCurrent = index
      if (index !== 0) {
        this.$alert('您所选的城市暂未开通服务', '提示信息', {
          confirmButtonText: '确定'
        })
      }
    },
    // 地区
    selectArea (code, index) {
      if (index < 0) {
        code = null
      }
      this.areaCode = code
      this.currentNum.areaCurrent = index
      this.getInfo()
    },
    // 每周价格
    selectPrice (index) {
      this.currentNum.priceCurrent = index
      if (index === -1) {
        this.minPrice = null
        this.maxPrice = null
      } else {
        this.minPrice = this.priceList[index].minPrice
        this.maxPrice = this.priceList[index].maxPrice
      }
      this.getInfo()
    },
    // 出租类型
    selectRentalType (index, type) {
      this.currentNum.rentalCurrent = index
      this.rentalType = type
      this.getInfo()
    },
    // 房屋类型
    selectHouseType (index, type) {
      this.currentNum.houseCurrent = index
      this.houseType = type
      this.getInfo()
    },
    // 房屋户型
    selectNum (text, num) {
      if (num === 0) {
        num = null
      }
      if (text === 'bedroom') {
        this.currentNum.bedroomNum = num
      } else if (text === 'toilet') {
        this.currentNum.toiletNum = num
      } else if (text === 'parlour') {
        this.currentNum.parlourNum = num
      } else if (text === 'park') {
        this.currentNum.parkNum = num
      }
      this.getInfo()
    },
    // 配套设施
    selectFaci (type, index) {
      let decoration = this.supportDecorationList
      let facilities = this.supportFacilitiesList
      if (type === 'decoration') {
        // 如果点击家装不限
        if (index === -1) {
          this.allSelected.decoration = !this.allSelected.decoration
          if (this.allSelected.decoration) {
            for (let i = 0; i < decoration.length; i++) {
              decoration[i]['selected'] = false
            }
          }
        } else {
          let obj = decoration[index]
          obj.selected = !obj.selected
          this.$set(decoration, index, obj)
        }
      } else if (type === 'facilities') {
        // 如果点击设施不限
        if (index === -1) {
          this.allSelected.facilities = !this.allSelected.facilities
          if (this.allSelected.facilities) {
            for (let i = 0; i < facilities.length; i++) {
              facilities[i]['selected'] = false
            }
          }
        } else {
          let obj = facilities[index]
          obj.selected = !obj.selected
          this.$set(facilities, index, obj)
        }
      }
      this.selectedFacilities = []
      // 判断哪个家装设施被选中
      for (let i = 0; i < decoration.length; i++) {
        if (decoration[i].selected) {
          this.allSelected.decoration = false
          this.selectedFacilities.push(decoration[i].code)
        }
      }
      for (let i = 0; i < facilities.length; i++) {
        if (facilities[i].selected) {
          this.allSelected.facilities = false
          this.selectedFacilities.push(facilities[i].code)
        }
      }
      if (this.selectedFacilities.length > 0) {
        this.selectedFacilities = this.selectedFacilities.join(',')
      } else {
        this.selectedFacilities = null
      }
      this.getInfo()
    }
  }
}
</script>

<style lang="less">
@orangeColor:#fe5932;
@yahei:"Microsoft YaHei";
.search_list_box{
  a{text-decoration: none;}
  position: relative;
  min-width:1180px;
  background-color:#fff;
  .bread_box{
    margin:10px auto;
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
  .search_box{
    width:1180px;
    height:60px;
    padding:10px;
    box-sizing: border-box;
    margin:0 auto;
    background-color:#e8e8e8;
    .input_text{
      float: left;
      height:40px;
      box-sizing: border-box;
      border:none;
      outline:none;
      width:1010px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      padding-left:35px;
      background:#fff url('../assets/img/search.png') no-repeat 10px center;
    }
    .search_btn{
      cursor: pointer;
      display: inline-block;
      width:150px;
      height:40px;
      background-color:@orangeColor;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      text-align: center;
      line-height:40px;
      color:#fff;
    }
  }
  .order_box{
    width:1180px;
    // height:417px;
    border:1px solid #e8e8e8;
    box-sizing: border-box;
    margin:10px auto;
    .sort_item{
      &:not(:last-child){
        border-bottom:1px dashed #e8e8e8;
      }
      box-sizing: border-box;
      padding:9px 0;
      .city_title,.area_title,.price_title,.rental_type_title,.house_type_title{
        line-height: 28px !important;
      }
      .title{
        float: left;
        width:110px;
        height:100%;
        padding-left:20px;
        box-sizing: border-box;
        font:bold 14px "Microsoft YaHei";
        letter-spacing: 1px;
      }
      .list{
        margin:0;
        padding:0;
        margin-left:110px;
        height:100%;
        overflow: hidden;
        li{
          float: left;
          cursor: pointer;
          list-style: none;
          font:14px @yahei;
          padding:5px;
          border-radius:3px;
          margin-right:28px;
          &.on{
            color:#fff;
            background-color:@orangeColor;
          }
        }
      }
    }
    .area{
      // height:84px;
      .area_list{
        .area_search_box{
          .area_input{
            display: inline-block;
            width:110px;
            height:24px;
            outline:none;
            border:1px solid #e8e8e8;
            border-radius:3px;
            padding:5px;
            box-sizing: border-box;
          }
          .area_btn{
            display: inline-block;
            height:24px;
            line-height:24px;
            border:1px solid #e8e8e8;
            box-sizing: border-box;
            padding:0 12px;
            font-size:12px;
          }
        }
      }
    }
    .price{
      .price_list{
        .price_search_input{
          .min_price_input,.max_price_input{
            display: inline-block;
            width:110px;
            height:24px;
            outline:none;
            border:1px solid #e8e8e8;
            border-radius:3px;
            padding:0 20px;
            box-sizing: border-box;
          }
          .price_search_btn{
            display: inline-block;
            height:24px;
            line-height:24px;
            border:1px solid #e8e8e8;
            box-sizing: border-box;
            padding:0 12px;
            font-size:12px;
          }
        }
      }
    }
    .house_detail{
      .house_detail_list{
        li{
          padding:0;
          .options{
            display: inline-block;
            height:100%;
            width:65px;
            text-align: center;
            color:#999;
            border:1px solid #e8e8e8;
            .icon{
              vertical-align: middle;
              display: inline-block;
              width:11px;
              height:6px;
              background-image:url('../assets/img/down.png');
            }
            .dropdown{
              display: none;
              z-index:3;
              margin:0;
              padding:0;
              position: absolute;
              width:65px;
              // height:127px;
              // overflow-y: auto;
              background-color:#fff;
              border:1px solid #e8e8e8;
              box-sizing: border-box;
              li{
                width:100%;
                height:25px;
                display: inline-block;
                &:hover{
                  background-color:@orangeColor;
                  color:#fff;
                }
              }
            }
            &:hover{
              .dropdown{
                display: block;
              }
            }
          }
        }
      }
    }
    .supports{
      .supports_list{
        &.facilities{
          margin-top:5px;
        }
        li{
          position: relative;
          width:80px;
          height:20px;
          .dot{
            position: absolute;
            top:50%;
            margin-top:-8px;
            width:16px;
            height:16px;
            background-image:url('../assets/img/uncheck.png');
            background-size:100%;
            &.selected{
              width:16px;
              height:16px;
              background-image:url('../assets/img/checked.png');
              background-size:100%;
            }
          }
          .text{
            position: absolute;
            top:50%;
            left:20px;
            margin-top:-10px;
            height:16px;
          }
          padding:0;
        }
      }
    }
  }
  .search_content_box{
    overflow: hidden;
    width:1180px;
    margin:20px auto;
    .left{
      float: left;
      height:670px;
      width:300px;
      .bar{
        position: relative;
        height:45px;
        background-color:#f7f7f7;
        border:1px solid #e8e8e8;
        box-sizing: border-box;
        text-align: center;
        line-height:45px;
        .icon{
          cursor: pointer;
          width:16px;
          height:16px;
          background-image:url('../assets/img/gtdouble.png');
          position: absolute;
          right:10px;
          top:50%;
          margin-top:-8px;
        }
      }
      .map{
        .img{
          img{
            width:100%;
          }
        }
      }
    }
    .right{
      width:860px;
      margin-left:320px;
      .order_bar{
        width:100%;
        height:45px;
        background-color:#f7f7f7;
        border:1px solid #e8e8e8;
        box-sizing: border-box;
        .order_info{
          a{
            position: relative;
            height:100%;
            line-height:45px;
            text-decoration: none;
            font-size:14px;
            color:#333;
            margin:0 20px;
            &.on{
              color:@orangeColor;
            }
            .arrow{
              position: absolute;
              top:1px;
              right:-17px;
              width:11px;
              height:6px;
              background:url('../assets/img/arrow.png');
            }
            .down{
              position: absolute;
              bottom:1px;
              right:-17px;
              width:11px;
              height:6px;
              background:url('../assets/img/down.png');
            }
          }
        }
      }
      .empty_info{
        width:100%;
        height:600px;
        margin-top:20px;
        border:1px dashed #e8e8e8;
        box-sizing: border-box;
        .text{
          line-height: 600px;
          text-align: center;
          font-size:28px;
          color:#333;
        }
      }
      .el-pagination{
        text-align: center;
        margin-top:20px;
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
  .slide_bar{
    position: fixed;
    right:50px;
    top:50%;
    margin-top:-125px;
    width:50px;
    background-color:#fff;
    .slide_item_list{
      margin:0;
      padding:0;
      text-align: center;
      border:1px solid #e8e8e8;
      li{
        cursor: pointer;
        list-style: none;
        height:50px;
        padding-top:12px;
        box-sizing: border-box;
        .text{
          display: none;
          position: absolute;
          width:80px;
          height:100%;
          line-height:50px;
          color:#fff;
          font-size:14px;
          top:0;
          border-top-left-radius:5px;
          border-bottom-left-radius:5px;
          left:-80px;
          background-color:@orangeColor;
        }
        &:hover{
          .text{
            display: block;
          }
        }
        &:not(:last-child){
          border-bottom:1px solid #e8e8e8;
        }
        &.top{
          position: relative;
          background:#fff url(../assets/img/top_unselect.png) no-repeat center;
          &:hover{
            background:@orangeColor url(../assets/img/top_selected.png) no-repeat center;
          }
        }
        &.phone{
          position: relative;
          background:#fff url(../assets/img/phone_unselect.png) no-repeat center;
          &:hover{
            background:@orangeColor url(../assets/img/phone_selected.png) no-repeat center;
          }
        }
        &.wechat{
          position: relative;
          background:#fff url(../assets/img/wechat_unselect.png) no-repeat center;
          &:hover{
            background:@orangeColor url(../assets/img/wechat_selected.png) no-repeat center;
          }
        }
        &.mail{
          position: relative;
          background:#fff url(../assets/img/mail_unselect.png) no-repeat center;
          &:hover{
            background:@orangeColor url(../assets/img/mail_selected.png) no-repeat center;
          }
        }
        &.chat{
          position: relative;
          background:#fff url(../assets/img/mail_unselect.png) no-repeat center;
          &:hover{
            background:@orangeColor url(../assets/img/online_selected.png) no-repeat center;
          }
        }
      }
    }
  }
}
</style>
