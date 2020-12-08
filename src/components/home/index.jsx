import {Component} from 'react'
import './home.less'
import {Button} from 'antd'
export default class Home extends Component{

  render(){
    return (
      <div className = 'homeComponent'>
        <Button type="primary">按钮</Button>
      </div>
    )
  }
}