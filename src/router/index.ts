import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

const lazyLoad = (view: string) => import(`@/pages/${view}.vue`)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/',
    name: '',
    component: lazyLoad("")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
