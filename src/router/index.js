import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index.vue'

Vue.use(VueRouter)

export const accestRoutes = [
  {
    key: 'login',
    path: '/login',
    name: 'login',
    type: 'dashboard',
    component: () => import('@/views/login.vue'),
  },
]

export const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redircet: '/about',
    meta: {
      title: '首页'
    },
    children: [
      {
        path: 'about',
        name: 'about',
        meta: {
          title: '关于'
        },
        component: () => import('@/views/About.vue'),
        children:[]
      },
      {
        path: 'role',
        name: 'role',
        component: () => import('@/views/role/index.vue'),
        meta: {
          title: '角色中心'
        },
        children:[]
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/user/index.vue'),
        meta: {
          title: '用户中心'
        },
        children:[]
      },
      {
        path: 'menu',
        name: 'menu',
        component: () => import('@/views/menu/index.vue'),
        meta: {
          title: '菜单管理'
        },
        children:[]
      },
    ]
  },
  // {
  
  //   path: 'userinfo',
  //   name: 'userinfo',
  //   component: () => import('@/views/userinfo.vue'),
  //   meta: {
  //     title: '中心'
  //   },
  //   children: []
  // }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes: accestRoutes.concat(routes)
})




export default router
