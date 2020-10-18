import React, { Component } from 'react'
import './infoStyle.css'
import Images from '../../utils/Images'
import html2canvas from 'html2canvas'
let myWidth = document.body.scrollWidth
let myHeight = document.body.scrollHeight
let phonewidth = window.screen.width

const manIcon = [
    Images.btn_call,
    Images.chat_corner,
    Images.clond_left,
]
const womanIcon = [
    Images.pointer,
    Images.rich_god,
    Images.chat_voice,
]

export default class ShowInfo extends Component {
    state={
        headerIcon:''
    }
    componentWillMount(){
        let random = Math.floor(Math.random()*3)
        this.setState({
            headerIcon:womanIcon[random]
        })
    }
    componentDidMount() {
        // const imgurl  =canvas.toDataURL
        // this.setState({
        //     imgurl
        // })
        
    }
  
  render() {
    return (
      <div className='showInfo'>
          <div>奖二代身份证</div>
          <div className='info-container'>
             <div className='header-icon'>头像 <img src={this.state.headerIcon} alt=""/></div>
             <div>姓名 <span>小丽丽</span></div>
             <div>性别：<span>女</span></div>
             <div>中奖愿望：<span>天涯海角</span></div>
             <div>住址：<span>地球的凡间</span></div>
             <div>奖二代身份证号（大乐透）：01,02,03,04,05  02,03</div>
          </div>
      </div>
    )
  }
}
