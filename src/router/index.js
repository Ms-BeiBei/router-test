import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redircet: '/manage',
    children: [
      {
        path: 'manage',
        name: 'manage',
        component: () => import('@/views/About.vue')
      },
      {
        path: 'position',
        name: 'position',
        component: () => import('@/views/user/index.vue'),
      },
      {
        path: 'userinfo',
        name: 'userinfo',
        component: () => import('@/views/userinfo.vue')
      }]
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  console.log(to,1111)

  if (localStorage.getItem('token')) {//tk已经存在，并且目标为登录页面
    if (to.path === '/login') {
      next('/')
    } else {
      next() //否则进入目标路由
    }
  } else {
    if (to.path === '/login') { //tk不存在，并且目标为登陆页面
      next()
    }else{
      next('/login')
    }
    // next('/login')//如果这样写，会一直执行这一句，进入死循环。
  }
})


export default router
