import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/:id',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/user/index.vue'),
    chidren:[{
      path: 'adasd',
      name: 'About',
      component: () => import('../views/About.vue')
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
