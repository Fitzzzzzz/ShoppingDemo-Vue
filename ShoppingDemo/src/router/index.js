import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Contents from '@/components/Contents'
import ShoppingCart from '@/components/ShoppingCart'

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
    }
  ]
})
