import Vue from 'vue'
import Router from 'vue-router'
// 首页
import Index from '@/components/index'
// 澳洲房源
import HousingResources from '@/components/housingResources'
// 房源定制化服务
import HouseCustom from '@/components/houseCustom'
// 家装租赁
import HomeDecorationRent from '@/components/homeDecorationRent'
// 生活服务
import LifeService from '@/components/lifeService'
// 澳洲足迹
import FootMark from '@/components/footMark'
// 房源详情页
import Detail from '@/components/detail'
// 定制管理
import Custom from '@/components/custom'
// 海外租房材料及证明
import OrderMeterial from '@/components/custom/orderMaterial'
// 房客信息收集页
import CollectTenantInfo from '@/components/custom/collectTenantInfo'
// 个人中心
import Personal from '@/components/personal'
import OrderInfo from '@/components/personal/orderInfo'
import MessageInfo from '@/components/personal/messageInfo'
import CollectInfo from '@/components/personal/collectInfo'
import HouseInfo from '@/components/personal/houseInfo'
import PersonalInfo from '@/components/personal/personalInfo'
// 精选海外房源页
import SeaoutHouse from '@/components/order/seaoutHouse'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    // 首页
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    // 澳洲房源
    {
      path: '/housingResources',
      name: 'HousingResources',
      component: HousingResources
    },
    // 房源定制化服务
    {
      path: '/houseCustom',
      name: 'HouseCustom',
      component: HouseCustom
    },
    // 家装租赁
    {
      path: '/homeDecorationRent',
      name: 'HomeDecorationRent',
      component: HomeDecorationRent
    },
    // 生活服务
    {
      path: '/lifeService',
      name: 'LifeService',
      component: LifeService
    },
    // 澳洲足迹
    {
      path: '/footMark',
      name: 'FootMark',
      component: FootMark
    },
    // 房源详情页
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    // 个人中心
    {
      path: '/personal',
      name: 'Personal',
      component: Personal,
      children: [
        // 我的订单
        {
          path: '/personal/orderInfo',
          name: 'OrderInfo',
          component: OrderInfo
        },
        // 消息中心
        {
          path: '/personal/messageInfo',
          name: 'MessageInfo',
          component: MessageInfo
        },
        // 我的收藏
        {
          path: '/personal/collectInfo',
          name: 'CollectInfo',
          component: CollectInfo
        },
        // 我的房源
        {
          path: '/personal/houseInfo',
          name: 'HouseInfo',
          component: HouseInfo
        },
        // 个人中心
        {
          path: '/personal/personalInfo',
          name: 'PersonalInfo',
          component: PersonalInfo
        }
      ]
    },
    // 定制管理 -》 信息收集
    {
      path: '/custom',
      name: 'Custom',
      component: Custom,
      children: [
        // 房客信息收集表
        {
          path: '/custom/collectTenantInfo/:orderId',
          name: 'CollectTenantInfo',
          component: CollectTenantInfo
        },
        // 海外租房材料及证明
        {
          path: '/custom/orderMaterial/:orderId',
          name: 'OrderMaterial',
          component: OrderMeterial
        }
      ]
    },
    // 精选海外房源
    {
      path: '/seaoutHouse',
      name: 'SeaoutHouse',
      component: SeaoutHouse
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
