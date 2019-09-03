/*
* 能发送异步AJAX请求的函数模块
* 封装 axios
* 函数的返回值是 promise 对象
* */

import axios from 'axios'

export default function ajax(url, data={}, type='GET') {
    if (type==='GET') {
        // 发送 GET 请求
        return axios.get(url, {
            // 配置对象
            params: {
                ID: 911019, // 指定请求参数
            }
        })
    } else {
        // 发送 POST 请求
        return axios.post(url, data)
    }
}