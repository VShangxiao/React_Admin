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
                    <Menu.Item key="/home">
                        <Link to='/home'>
                            <Icon type="pie-chart" />
                            <span>首 页</span>
                        </Link>
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
                        <Menu.Item key="/category">
                            <Link to='/category'>
                                <Icon type="shop" />
                                <span>品类管理</span>
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="/product">
                            <Link to='/product'>
                                <Icon type="shop" />
                                <span>商品管理</span>
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="/user">
                            <Link to='/user'>
                                <Icon type="user" />
                                <span>用户管理</span>
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="/role">
                            <Link to='/role'>
                                <Icon type="idcard" />
                                <span>角色管理</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

