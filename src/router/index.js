import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/info',
    name: 'Home',
    component: Home
  },
  {
    path: '/manage',
    name: 'manage',
    component: () => import('../views/About.vue')
  },
  {
    path: '/position',
    name: 'position',
    component: () => import('../views/user/index.vue'),
    chidren: []
  },
  {
    path: '/userinfo',
    name: 'userinfo',
    component: () => import('../views/userinfo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router
