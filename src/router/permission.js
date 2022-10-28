import { getToken } from "@/utils";
import router from './index'
router.beforeEach((to, from, next) => {

    if (getToken()) {
        if (to.path === '/login') {
            next('/')
        } else {
            next() //否则进入目标路由
        }
    } else {
        if (to.path === '/login') { //tk不存在的时候，跳出
            next()
        } else {
            next('/login')
        }
    }
})
//如果存在token，说明此时是登陆状态，在登录状态下，如果当前要跳转到登录页(既浏览器输入/login，不是点击退出按钮),会自动到主页面，否则跳转到其他页面(即 next())
//如果token不存在，说明此时是没有登录状态，或者tk过期状态，会跳转到 （‘./login’）,当目标路由为login时，会继续执行，否则会进入死循环。
//点击退出按钮是清除token，路由跳转到登陆页    removeToken("token");
                                           //this.$router.push("/login");