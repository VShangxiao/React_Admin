import React, { Component } from 'react'

import { formateDate } from '../../utils/dateUtils'
import { reqWeather } from "../../api";
import memoryUtils from "../../utils/memoryUtils";
import './index.less'

/* 
    头部导航的组件
*/

export default class Header extends Component {

    state = {
        currentTime: formateDate(Date.now()),
        dayPictureUrl: '', // 天气图片的url
        weather: '', // 天气的文本
    }

    // 获取当前时间
    getTime = () => {
        // 每隔一秒获取一次当前时间, 并更新 currentTime 
        setInterval(() => {
            const currentTime = formateDate(Date.now())
            this.setState({ currentTime })
        }, 1000)
    }

    // 获取当前天气
    getWeather = async () => {
        // 调用接口请求异步数据
        const weatherData = await reqWeather('大连')
        const dayPictureUrl = weatherData['dayPictureUrl']
        const weather = weatherData['weather']
        // 更新状态
        // if (!weather) {
        //     alert('天气未获得')
        // } else {
        //     this.setState({ dayPictureUrl, weather })
        // }

        this.setState({ dayPictureUrl, weather })
    }

    // 获取当前天气
    getWeather = async () => {
        // 调用接口请求异步获取数据
        const { dayPictureUrl, weather } = await reqWeather('大连')
        console.log('大连天气: ', weather)
        // 更新状态
        if (!weather) {
            alert('天气未获得')
        } else {
            this.setState({ dayPictureUrl, weather })
        }
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

    render() {

        const { currentTime, dayPictureUrl, weather } = this.state

        const username = memoryUtils.user.username

        return (
            <div className="header">
                <div className="header-top">
                    <span>欢迎, {username}</span>
                    <a href="javascript:">退出</a>
                </div>

                <div className="header-bottom">
                    <div className="header-bottom-left">
                        首页
                    </div>
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

