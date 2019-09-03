/*
* 能发送异步AJAX请求的函数模块
* 封装 axios
* 函数的返回值是 promise 对象
*
* 1. 优化: 统一处理请求异常 ->
*       方案是在外层包一个 promise 对象
*       在青丘出错的时候，不 reject(error), 而是显示错误提示
* 2. 优化2: 异步得到不是 response，而是 response.data
*       在青丘成功 resolve 时: resolve(response.data)
* */

import axios from 'axios'
import { message } from 'antd'

export default function ajax(url, data={}, type='GET') {

    return new Promise((resolve, reject) => {
        let promise
        // 1. 执行异步 ajax 请求
        if (type === 'GET') {
            // 发送 GET 请求
            promise =  axios.get(url, {
                // 配置对象
                params: {
                    ID: 911019, // 指定请求参数
                }
            })
        } else {
            // 发送 POST 请求
            promise = axios.post(url, data)
        }
        // 2. 如果成功，调用 resolve(value)
        promise.then(response => {
            resolve(response)
        // 3. 如果失败，不调用 reject(reason)，而是提示异常信息
        }).catch( error => {
            message.error('请求出错了：' + error.message)
        })


    })


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