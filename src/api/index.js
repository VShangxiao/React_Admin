/*
* 包含应用中所有接口请求函数的模块
* 每个函数的返回值都是 promise
* */
import ajax from "./ajax";

const BASE = ''

// 登录接口
export const reqLogin = (username, password) => ajax(BASE + '/login', {
    username,
    password,
}, 'POST')

// 添加用户接口
export const reqAddUser = (user) => ajax(BASE + '/manage/user/add', user, 'POST')