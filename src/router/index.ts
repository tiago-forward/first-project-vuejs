import { createRouter, createWebHistory } from 'vue-router'
// const lazyLoad = (view: string) => import(`@/pages/${view}.vue`)

import Home from '@/pages/Home.vue'
import PlaylistList from '@/pages/Playlist.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/playlist/:id',
    name: 'Playlist',
    component: PlaylistList,
    // component: lazyLoad("PlaylistList")
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
