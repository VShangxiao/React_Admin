import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Modal } from 'antd'

import LinkButton from '../link-button'
import { reqWeather } from '../../api'
import menuList from '../../config/menuConfig'
import { formateDate } from '../../utils/dateUtils'
import memoryUtils from "../../utils/memoryUtils"
import storageUtils from '../../utils/storageUtils.js'
import './index.less'

/* 
    头部导航的组件
*/

class Header extends Component {

    state = {
        currentTime: formateDate(Date.now()),
        dayPictureUrl: '', // 天气图片的url
        weather: '', // 天气的文本
    }

    // 获取当前时间
    getTime = () => {
        // 每隔一秒获取一次当前时间, 并更新 currentTime 
        this.intervalId = setInterval(() => {
            const currentTime = formateDate(Date.now())
            this.setState({ currentTime })
        }, 1000)
    }


    // 获取当前天气
    getWeather = async () => {
        // 调用接口请求异步获取数据
        const { dayPictureUrl, weather } = await reqWeather('大连')
        // 更新状态
        this.setState({ dayPictureUrl, weather })
    }

    // 更新状态
    getTitle = () => {
        // 得到当前请求路径
        const path = this.props.location.pathname
        let title
        menuList.forEach(item => {
            if (item.key === path) {
                // 如果当前 item 对象的 key 与 path 一样，item 的 title 就是需要显示的 title
                title = item.title
            } else if (item.children) {
                // 在所有的 子item 中查找匹配的
                const cItem = item.children.find(cItem => cItem.key === path)
                // 如果有值说明匹配
                if (cItem) {
                    title = cItem.title
                }
            }
        })
        return title
    }

    /* 
        退出登录
    */
   logout = () => {
       // 显示确认框
       Modal.confirm(({
        title: '确定退出当前标注系统吗?',
        content: '确认退出',
        onOk: () => {
          console.log('已退出', this);
          // 删除保存的 user 数据 
          storageUtils.removeUser()
          memoryUtils.user = {}

          // 跳转到登录页面
          this.props.history.replace('/login')
        }
      }))
   }

    /* 
        第一次 render() 之后执行一次
        一般再次执行异步操作: 发 ajax 请求 / 启动定时器
    */
    componentWillMount() {
        // 获取当前时间
        this.getTime()
        // 获取当前天气
        this.getWeather()
    }

    /* 
        当前组件卸载之前调用
    */
    componentWillUnmount() {
        // 清除定时器
        clearInterval(this.intervalId)
    }

    render() {

        const { currentTime, dayPictureUrl, weather } = this.state

        const username = memoryUtils.user.username

        // 得到当前需要显示的 title 
        const title = this.getTitle()

        return (
            <div className="header">
                <div className="header-top">
                    <span>欢迎, {username}</span>
                    <LinkButton onClick={this.logout}>退出</LinkButton>
                </div>

                <div className="header-bottom">
                    <div className="header-bottom-left">{title}</div>
                    <div className="header-bottom-right">
                        <span>{currentTime}</span>
                        <img src={dayPictureUrl} alt="weather" />
                        <span>{weather}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)

