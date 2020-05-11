import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../pages/admin/Admin.vue'
import Order from '../pages/order/Order.vue'
import Product from '../pages/admin/product/Product'
import Offer from '../pages/admin/offer/Offer'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/admin', component: Admin,
    children: [
      { path: 'offer', component: Offer },
      { path: 'product', component: Product },
    ]
  },
  {
    path: '/order', component: Order,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
