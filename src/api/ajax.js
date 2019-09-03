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

// 以下为逻辑演示，实际开发使用更高效的模块

// 请求登录接口
// ajax('/login', {
//     username: 'Rust',
//     password: 'admin',
// }, 'POST').then();

// 添加用户
// ajax('/manage/user/add', {
//     username: 'Rust',
//     password: 'admin',
//     'email': 'cooksima@job.com',
// }, 'POST').then();