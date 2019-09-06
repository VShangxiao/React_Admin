import React, { Component } from 'react';
import {
    Card,
    Table,
    Button,
    Icon,
    message,
} from 'antd'

import LinkButton from '../../components/link-button'

import { reqCategorys } from '../../api'


/* 
    商品分类路由
*/
class category extends Component {

    state = {
        loading: false, // 是否正在获取数据中
        categorys: [], // 一级分类列表
    }

    /* 
        初始化 Table 所有列的数组
    */
    initColumns = () => {
        this.columns = [
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
    }

    // 上课版: 异步获取一级分类列表
    getCategorys = async () => {
        // 发请求前，显示 loading
        this.setState({ loading: true})

        // 发异步ajax请求，获取数据
        const result = await reqCategorys('0')

        // 请求完成后,隐藏 loading 
        this.setState({ loading: false})

        if (result.status===0) {
            const categorys = result.data
            // 更新状态
            this.setState({
                categorys
            })
        } else {
            message.error('获取分类列表失败')
        }
    }



    // 为第一次 render() 准备数据
    componentWillMount() {
        this.initColumns()
    }

    // 执行异步任务：发异步ajax请求
    componentDidMount() {
        this.getCategorys()
    }

    render() {

        // 读取状态数据
        const { categorys, loading } = this.state

        // Card 的左侧标题
        const title = '一级分类列表'

        // Card 右侧额外信息
        const extra = (
            <Button type='primary'>
                <Icon type='plus' />
                更多
            </Button>
        )



        return (
            <Card title={title} extra={extra}>
                <Table
                    bordered
                    rowKey='_id'
                    loading={loading}
                    dataSource={categorys}
                    columns={this.columns}
                    pagination={{defaultPageSize: 5, showQuickJumper: true}}
                />
            </Card>
        );
    }
}

export default category;