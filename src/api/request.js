import axios from './ajax.js'
import api from './index'
const commservice = {
    loginIn(params) {
        return axios.postJson(params, api.loginIn)
    },
    getImageUrl(params){
        return axios.get(params, api.loginIn)

    },
}
export default commservice
