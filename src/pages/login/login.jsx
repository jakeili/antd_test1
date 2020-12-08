import {Component} from 'react'

import './login.less'
import logo from '../../assets/images/logo.png'
export default class Login extends Component{

  render(){
    return (
      <div className= "login">
        <header className = "login-header">
          <img className = "logo-img" src={logo} alt="logo"/>
          <p className="logo-title">React后台管理系统</p>
        </header>
        <section className="content">
          <h2>用户登录</h2>
          <div className="form-box">
            
          </div>
        </section>
      </div>
    )
  }
}