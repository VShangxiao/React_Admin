import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import { Layout } from 'antd'

import memoryUtils from '../../utils/memoryUtils'

import LeftNav from '../../components/left-nav'
import Header from '../../components/header'

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
            <Content style={{  backgroundColor: 'antiquewhite' }}>Content</Content>
            <Footer style={{ textAlign: 'center', color: '#999999' }}>腾讯开放平台 QQ物联 DNSPod 微信公众平台 腾讯优图 腾讯蓝鲸 企业QQ 腾讯微云 腾讯文档 友情链接</Footer>
          </Layout>
      </Layout> 
    )
  }
}