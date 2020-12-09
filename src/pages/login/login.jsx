import {Component} from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import './login.less'
import logo from '../../assets/images/logo.png'
class Login extends Component{
  handleSubmit = e => {
    const {form:{getFieldsValue,validateFields}}  = this.props
    // 组织表单默认提交
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        // 验证通过发送请求
        console.log('验证通过发送请求: ', values);
      }else{
        // 验证不通过
        alert('你所填写的内容不符合验证规则')
      }
    });
  };
  validatorPwd = (rule,value,callback) => {
    // value  该校验方法对应的值 callback必须要有
    if(!value){
      callback('密码为必填')
    }else if(value.length<4){
      callback('密码长度至少4位')
    }else if(value.length>12){
      callback('密码长度不能大于12wei')
    }else if(!(/^[a-zA-Z0-9_]+$/.test(value))){
      callback('密码必须有a-z A-Z 0-9 _组成')
    }else{
      callback() //验证通过
    }
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <div className= "login">
        <header className = "login-header">
          <img className = "logo-img" src={logo} alt="logo"/>
          <p className="logo-title">React后台管理系统</p>
        </header>
        <section className="content">
          <h2>用户登录</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {
                // 申明式校验方法
                getFieldDecorator('username',{
                  rules:[
                    {required:true,message:"用户名必填"},
                    {min:4,message:"用户名至少4位"},
                    {
                      // 正则校验 a-z, A-Z ,0-9, _
                      pattern:/^[a-zA-Z0-9_]+$/,message:"用户名组成为a-z, A-Z ,0-9, _"
                    }
                  ]
                })(
                  <Input
                    prefix = {<Icon type = 'user' style = {{color:"rgba(0,0,0,0.25"}}/>}
                    placeholder = "用户名"
                  />
                )
              }
            </Form.Item>
            
            <Form.Item>
              {getFieldDecorator('password', {
                // 自定义校验方式
                rules: [{validator:this.validatorPwd}],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    )
  }
}

const WrapLogin = Form.create({ name: 'normal_login' })(Login);
export default WrapLogin