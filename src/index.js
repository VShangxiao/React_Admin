/*
    入口 js
*/
import React from 'react'
import ReactDOM from 'react-dom'
// import 'antd/dist/antd.css'

import App from "./App"
import storageUtils from "./utils/storageUtils";
import memoryUtils from "./utils/memoryUtils";

// 读取 local 中保存的 user, 保存到内存中
const user = storageUtils.getUser()
memoryUtils.user = user

// 将 App 组件渲染到 index 页面的 div 上
ReactDOM.render(<App />, document.getElementById('root'));
