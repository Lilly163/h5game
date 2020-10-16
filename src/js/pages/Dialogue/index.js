import React, { Component } from 'react'
import './styleDialogue.css'
import Images from '../../utils/Images'
import {Button} from 'antd-mobile'
const chatList = [
    {id:'1',value:'你好，我是财神'},
    {id:'2',value:'感谢互联网技术和5G'},
    {id:'3',value:'让本神可以和平凡的你取得联系'},
    {id:'4',value:'请回复你希望的中奖金额，点击“发送”，本神将为你转接<span>天庭身份管理办事处'},
]
export default class componentName extends Component {
  render() {
    return (
      <div className='dialogue'>
           <div  className='chat-container'>
               {chatList.map((value)=>{
                   
                return  <div className='chat-li'>
                       <div className='chat-head'>
                         <img src={Images.chat_head_icon} alt=""/>
                       </div>
                       <div className='chat-contain'>
                          <img src={Images.chat_corner} alt=""/>
                          <div className='chat-contain-text'>
                              {value.value}
                          </div>
                       </div>
                   </div>
               })}
           </div>
           <div className='pointer'>
             <img src={Images.pointer} alt=""/>
           </div>
           <div className='bottom'>
              <div className='voice'>
                  <img src={Images.chat_voice} alt=""/>
              </div>
              <div className='input-box'>
                  <input type="text"/>
              </div>
              <div className='btn-sure'>
                 发送
              </div>
           </div>
      </div>
    )
  }
}
