import React, {Component} from 'react'
import { message, Button } from 'antd'

/*
* 应用的根组件
* */

export default class App extends Component {

    handClick = () => {
        message.error('服务器开小差啦')
    }

    render() {
        return <Button type="primary" onClick={this.handClick}>Primary</Button>
    }
}

