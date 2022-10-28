import axios from 'axios'
import router from '@/router'

let axiosIns = axios.create({
    baseURL: 'https://www.fastmock.site',
    timeout: 10000,
});
//设置request拦截器
axiosIns.interceptors.request.use((configer) => {
    //在这里处理request，可以对所有请求统一处理请求头
    configer.headers.common['token'] = localStorage.getItem('token')
    console.log(localStorage.getItem('token'),888)
    return configer
})

//设置response拦截器
axiosIns.interceptors.response.use((response) => {
    // if (response.data.code === 200) {
    //     setTimeout(() => {
    //         localStorage.removeItem('token')
    //         router.replace('/login')
    //     }, 5000)
    // }
    //在这里处理response，这是全局的，对所有使用axios的请求起作用
    return response
});
export default axiosIns