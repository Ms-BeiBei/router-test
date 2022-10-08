import { getToken } from "@/utils";
import router from '.'


router.beforeEach((to, from, next) => {

    if (getToken()) {
        if (to.path === '/login') {
            next('/')
        } else {
            next() //否则进入目标路由
        }
    } else {
        if (to.path === '/login') { //tk不存在的时候，跳出死循环
            next()//跳出死循环
        } else {
            next('/login')
        }
    }
})