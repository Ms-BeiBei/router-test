import axios from 'axios'
let axiosIns = axios.create({
    baseURL: 'https://www.fastmock.site',
    timeout: 10000,
});
//设置request拦截器
axiosIns.interceptors.request.use((configer) => {
    //在这里处理request，可以对所有请求统一处理请求头等
    configer.headers.common['tk']=sessionStorage.getItem('tk')
    console.log(configer,9999);

    return configer
})

//设置response拦截器
axiosIns.interceptors.response.use((response) => {
    //在这里处理response，这是全局的，对所有使用axios的请求起作用
    return response
});
export default axiosIns