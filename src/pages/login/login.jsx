/*
用户登录的路由组件
* */

import React, { Component } from "react"
import {
    Form,
    Icon,
    Input,
    Button,
    message,
} from 'antd';

import './login.less'
import logo from '../../assets/images/logo.png'
import { reqLogin } from '../../api'
import memoryUtils from "../../utils/memoryUtils";
import storageUtils from "../../utils/storageUtils";

const Item = Form.Item // 不能写在import之前

class Login extends Component {

    handleSubmit = (event) => {
    // 阻止事件的默认行为
        event.preventDefault()
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                // 请求登录
                const { username, password } = values
                const response = await reqLogin(username, password)
                // console.log('请求成功！', response.data)
                const result = response.data;
                if (result.status === 0) {
                    // 登陆成功
                    message.success('登录成功!')

                    // 保存用户数据 user
                    const user = result.data
                    // 保存在内存中
                    memoryUtils.user = user
                    // 保存到 local 中
                    storageUtils.saveUser(user)

                    // 跳转到管理界面 (不需要再回退到登录界面，所以用 replace)
                    this.props.history.replace('/')
                } else {
                    // 登录失败
                    message.error('错误：', result.msg)
                }
            } else {
                console.log('校验失败!')
            }
        });
    // 得到 form 对象
    //     const form = this.props.form
    // 获取表单项的输入数据
    //     const values = form.getFieldsValue()
    //     console.log('handleSubmit() 的值', values)
    };

    /*
    * 对密码进行自定义验证
    * */

    /*
    用户名/密码的的合法性要求
    1). 必须输入
    2). 必须大于等于4 位
    3). 必须小于等于12 位
    4). 必须是英文、数字或下划线组成
    */
    validatePwd = (rule, value, callback) => {
        console.log('validatePwd() ', rule, value)
        if (!value) {
            callback('必须输入密码')
        } else if (value.length < 4) {
            callback('密码长度不少于4位')
        } else if (value.length > 12) {
            callback('密码长度不能大于12位')
        }  else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
            callback('密码必须由英文、数字或下划线组成')
        } else {
            callback()  // 验证通过
        }
    }

    render() {

        const form = this.props.form
        const { getFieldDecorator } = this.props.form

        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1>领航内容标注审核系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                        {
                            getFieldDecorator('username', {
                            //  配置对象: 属性名是特定的一些名称
                            //  声明式验证: 直接使用定义好的验证规则进行验证
                                rules: [
                                    { required: true, whitespace: true, message: '用户名不能为空' },
                                    { min: 4, message: '用户名不少于4位' },
                                    { max: 12, message: '用户名最多12位' },
                                    { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须由英文、数字或下划线组成' },
                                ],
                            })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="输入用户名"
                            />,
                        )}
                        </Item>
                        <Form.Item>
                        {
                            getFieldDecorator('password', {
                                rules: [
                                    {
                                        validator: this.validatePwd
                                    }
                                ]
                            })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="输入密码"
                            />
                            )
                        }

                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登  录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}

/*
* 包装 Form 组件生成一个新的组件：Form(Login)
* 新组建会向 Form 组件传递一个强大的对象属性：form
* */
const WrapLogin  = Form.create()(Login)
export default WrapLogin
