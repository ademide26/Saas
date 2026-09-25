import Home from '@/views/Home.vue'
import Mypage from '@/views/mypage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: Home
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: Mypage
    }
  ],
})

export default router
