import Vue from 'vue'
import VueRouter from 'vue-router'
import Discover from '../views/discover.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Discover',
    component: Discover
  },
  {
    path: '/owner',
    name: 'Owner',
    component: () => import(/* webpackChunkName: "owner" */ '../views/owner.vue')
  },
  {
    path: '/cloudcun',
    name: 'Cloudcun',
    component: () => import(/* webpackChunkName: "cloudcun" */ '../views/cloudcun.vue')
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import(/* webpackChunkName: "video" */ '../views/video.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
