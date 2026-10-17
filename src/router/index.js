import Pluck from '@/views/Pluck.vue'
import Wrangle from '@/views/Wrangle.vue'
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
    }
  ],
})

export default router
