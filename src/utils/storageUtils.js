/*
* 使用 LocalStorage 进行数据存储管理
* */

import store from 'store'
const USER_KEY = 'user_key'

export default {
    /*
    * 1. 保存 user
    * */
    saveUser(user) {
        // 原生写法
        // localStorage.setItem(USER_KEY, JSON.stringify(user))
        store.set(USER_KEY , user)
    },


    /*
    * 2. 读取 user
    * */
    getUser() {
        // 原生写法
        // return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
        return store.get(USER_KEY) || {}
    },

    /*
    * 3. 删除 user
    * */
    removeUser() {
        // 原生写法
        // localStorage.removeItem(USER_KEY)
        store.remove(USER_KEY)
    }
}

