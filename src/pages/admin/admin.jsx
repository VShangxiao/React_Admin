import React, {Component} from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'

import memoryUtils from '../../utils/memoryUtils'

import LeftNav from '../../components/left-nav'
import Header from '../../components/header'

import Home from '../home/home'
import Category from '../category/category'
import Product from "../product/product"
import User from "../user/user"
import Role from "../role/role"
import Bar from "../charts/bar";
import Line from "../charts/line"
import Pie from "../charts/pie"

const { Footer, Sider, Content } = Layout;

/*
后台管理的路由组件
 */
export default class Admin extends Component {
  render () {
    const user = memoryUtils.user
    // 如果内存没有存储user ==> 当前没有登陆
    if(!user || !user._id) {
      // 自动跳转到登陆(在render()中)
      return <Redirect to='/login'/>
    }
    return (
      <Layout style={{ height: '100%'}}>
        <Sider>
          <LeftNav />
        </Sider>
          <Layout>
            <Header>Header</Header>
            <Content style={{  margin: 20, backgroundColor: 'skyblue' }}>
              <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/category' component={Category}/>
                <Route path='/product' component={Product}/>
                <Route path='/role' component={Role}/>
                <Route path='/user' component={User}/>
                <Route path='/charts/bar' component={Bar}/>
                <Route path='/charts/line' component={Line}/>
                <Route path='/charts/pie' component={Pie}/>
                <Redirect to='/home' />
              </Switch>
            </Content>
            <Footer style={{ textAlign: 'center', color: '#999999' }}>腾讯开放平台 QQ物联 DNSPod 微信公众平台 腾讯优图 腾讯蓝鲸 企业QQ 腾讯微云 腾讯文档 友情链接</Footer>
          </Layout>
      </Layout> 
    )
  }
}
