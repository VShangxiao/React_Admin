import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon, Button } from 'antd';

import logo from '../../assets/images/logo.png'
import menuList from "../../config/menuConfig";
import './index.less'

const { SubMenu } = Menu;

/* 
    左侧导航的组件
*/

export default class LeftNav extends Component {

    /*
        根据 menu 的数据数组生成对应的标签数组
        使用 map + 递归调用
     */
    getMenuNodes_map = (menuList) => {
        return menuList.map(item => {
            /* 
                {
                    title: '首页', // 菜单标题名称
                    key: '/home', // 对应的path
                    icon: 'home', // 图标名称
                    children: [], // 可能有，可能没有
                }

                // 可能是这个形式
                <Menu.Item key="/home">
                    <Link to='/home'>
                        <Icon type="pie-chart" />
                        <span>首 页</span>
                    </Link>
                </Menu.Item>

                // 也可能是这个形式
                <SubMenu
                key="sub1"
                title={
                    <span>
                        <Icon type="shop" />
                        <span>商 品</span>
                    </span>
                  }
                >
                </Menu.Item>
                </SubMenu>

            */
            if (!item.children) {
                return (
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            } else {
                return (
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {this.getMenuNodes(item.children)}
                    </SubMenu >
                )
            }

        })
    }

    /*
        根据 menu 的数据数组生成对应的标签数组
        使用 mreduce() + 递归调用
    */
    getMenuNodes = (menuList) => {
        return menuList.reduce((pre, item) => {
            // 向 pre 添加 <Menu.Item>
            if (!item.children) {
                pre.push((
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                ))
            } else {
                // 向 pre 添加 <SubMenu>
                pre.push((
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {this.getMenuNodes(item.children)}
                    </SubMenu >
                ))
            }

            return pre
        }, [])
    }

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
                    {/* 
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
                </SubMenu> */}

                    {
                        this.getMenuNodes_map(menuList)
                    }
                </Menu>
            </div>
        )
    }
}

