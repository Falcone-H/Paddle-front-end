import axios from 'axios';
axios.defaults.baseURL = '/api'; // 配置代理服务器的代理路径

export default {
    get(url, data, responseType) {
        /*
         * url: 接口路径
         * data: 请求参数
         * responseType: 相应的数据类型，默认为 json
         */
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url,
                data,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json; charset=utf-8',
                    withCredentials: true,
                },
                // 默认json格式，如果是下载文件，需要传 responseType:'blob'
                responseType: (responseType == null || responseType == '') ? 'json' : responseType
            }).then(res => {
                if (res.status == 200) {
                    resolve(res)
                } else {
                    reject(res)
                }
            })
        })
    },

    post(url, data, responseType) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                rul,
                data,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json; charset=utf-8',
                    withCredentials: true,
                },
                responseType: (responseType == null || responseType == '') ? 'json' : responseType
            }).then(res => {
                if (res.status == 200) {
                    resolve(res)
                } else {
                    reject(res)
                }
            })
        })
    }
}