import Pluck from '@/views/Pluck.vue'
import PortfolioPage from '@/views/PortfolioPage.vue'
import Wrangle from '@/views/Wrangle.vue'
import Cart from '@/views/Cart.vue'
import CartCheckout from '@/views/Cart Checkout.vue'
import ProductView from '@/views/ProductView.vue'
import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/wranglepage',
      name: 'WranglePage',
      component: Wrangle
    },
    {
      path: '/pluckpage',
      name: 'PluckPage',
      component: Pluck
    },
    {
      path: '/',
      name: 'Portfolio',
      component: PortfolioPage
    },
    {
      path: '/Cart',
      name: 'CartPage',
      component: Cart
    },
    {
      path: '/Cart-checkout',
      name: 'Cart-Checkout',
      component: CartCheckout
    },
    {
      path: '/Productview',
      name: 'ProductView',
      component: ProductView
    },
    {
      path: '/Home',
      name: 'HomePage',
      component: Home
    }
  ],
})

export default router
