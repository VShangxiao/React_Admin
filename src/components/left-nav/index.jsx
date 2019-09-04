import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon, Button } from 'antd';

import logo from '../../assets/images/logo.png'
import './index.less'

const { SubMenu } = Menu;

/* 
    左侧导航的组件
*/

export default class LeftNav extends Component {
    render() {
        return (
            <div className="left-nav">
                <Link to='/' className="left-nav-header">
                    <img src={logo} alt="logo" />
                    <h1>领航标注</h1>
                </Link>

                <Menu
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>首 页</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="shop" />
                                <span>商 品</span>
                            </span>
                        }
                    >
                        <Menu.Item key="5">
                            <Icon type="shop" />
                            <span>品类管理</span>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Icon type="shop" />
                            <span>商品管理</span>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

