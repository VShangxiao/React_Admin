/*
* 后台管理主路由组件
*/

import React, { Component } from "react"
import { Redirect } from 'react-router-dom'

import memoryUtils from "../../utils/memoryUtils";

export default class Admin extends Component {
    render() {
        const user = memoryUtils.user
        // 如果内存中没有存储 user ==> 当前没有登录
        if (!user || !user.id) {
            // 自动跳转到登录
            return <Redirect to='/login' />
        }
        return (
            <div>
                欢迎 {user.username} 进入后台管理
            </div>
        )
    }
}
