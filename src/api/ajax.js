/**
 * request.js
 * 通过promise对axios做二次封装，针对用户端参数，做灵活配置
 */

import notification from 'ant-design-vue/es/notification';
import qs from 'qs';

//封装postForm
function postForm(parameter, path, headParam) {
    return axios({
        url: path,
        method: 'post',
        data: qs.stringify(parameter),
        headers: { 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8', ...headParam, },
    }).then((res) => {
        return dealError(res);
    });
}
//封装postJson
function postJson(parameter, path) {
    return axios({
        url: path,
        method: 'post',
        data: parameter,
        headers: {
            'content-type': 'application/json; charset=UTF-8',
        },
    }).then((res) => {
        return dealError(res);
    });
}
//封装postFileData
function postFileData(parameter, path) {
    let dd = {
        url: path,
        method: 'post',
        data: parameter,
        headers: { 'Content-Type': 'multipart/form-data', },
    };
    console.log('------->', dd);
    return axios(dd).then((res) => {
        return dealError(res);
    });
}
/**
* get 将参数拼接到url后面
* @param parameter  json格式
* @param path
* @returns {*}
*/
//封装get
function get(parameter, path) {
    let args = qs.stringify(parameter);
    if (parameter) {
        if (path.indexOf('?') === -1) {
            path = path + "?" + args;
        } else {
            path = path + args;
        }
    }
    return axios({
        url: path,
        method: 'get',
    }).then((res) => {
        return dealError(res);
    });
}

function dealError(res) {
    if (typeof res.success !== 'undefined' && res.success !== true) {
      notification.error({
        message: "调用失败",
        description: res.msg,
        style: {
          background: '#f4bdbd!important',
        },
      });
    }  
     return res;
  }


  export default {
    postJson, postForm, postFileData, get,
}