import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Contents from '@/components/Contents'
import ShoppingCart from '@/components/ShoppingCart'
import GoodsDetail from '@/components/GoodsDetail'
import Admin from '@/components/Admin'
import AddGoods from '@/components/Admin-add-goods'
import Undelivered from '@/components/Admin-undelivered'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/1',
      name: 'Test',
      component: Contents
    },
    {
      path: '/ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/detail',
      name: 'GoodsDetail',
      component: GoodsDetail
    },
    {
      path: '/admin',
      component: Admin,
      children:[
        {
          path: 'add',
          component: AddGoods
        },
        {
          path: 'undelivered',
          component: Undelivered
        }
      ]
    }
  ]
})
