import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/video',
    name: 'video',
    component: () => import('../views/video.vue'),
//     children:[
//       { 
//         path: '/Newa',
//         name: 'Newa',
//         component: Newa,
// }
    // ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
