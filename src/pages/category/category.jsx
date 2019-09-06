import React, { Component } from 'react';
import {
    Card,
    Table,
    Button,
    Icon,
} from 'antd'

import LinkButton from '../../components/link-button'

/* 
    商品分类路由
*/
class category extends Component {
    render() {

        // Card 的左侧标题
        const title = '一级分类列表'

        // Card 右侧额外信息
        const extra = (
            <Button type='primary'>
                <Icon type='plus' />
                更多
            </Button>
        )

        // 表格
        const dataSource = [
            {
                "parentId": "0",
                "_id": "5ca9d70cb49ef916541160ba",
                "name": "家用电器",
                "_v": 0
            },
            {
                "parentId": "0",
                "_id": "5ca9d70cb49ef916541160bb",
                "name": "电脑",
                "_v": 0
            },
            {
                "parentId": "0",
                "_id": "5ca9d70cb49ef916541160bc",
                "name": "图书",
                "_v": 0
            },
            {
                "parentId": "0",
                "_id": "5ca9d70cb49ef916541160bd",
                "name": "服装",
                "_v": 0
            },
            {
                "parentId": "0",
                "_id": "5ca9d70cb49ef916541160be",
                "name": "食品",
                "_v": 0
            },
            {
                "parentId": "0",
                "_id": "5ca9d70cb49ef916541160bf",
                "name": "玩具",
                "_v": 0
            },
          ];
          
          const columns = [
            {
              title: '分类的名称',
              dataIndex: 'name', // 显示数据对应的属性名
            },
            {
              title: '操作',
              width: 300,
              render: () => (
                  // 返回需要显示的界面标签
                  <span>
                      <LinkButton>修改分类</LinkButton>
                      <LinkButton>查看子分类</LinkButton>
                  </span>
              )
            },
          ]

        return (
            <Card title={title} extra={extra}>
                <Table
                 bordered
                 rowKey='_id'
                 dataSource={dataSource} 
                 columns={columns} 
                />
            </Card>
        );
    }
}

export default category;