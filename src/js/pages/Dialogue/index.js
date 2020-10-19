import React, { Component } from 'react'
import './styleDialogue.css'
import Images from '../../utils/Images'
import { spawn } from 'child_process';
const chatList = [
    {id:'1',value:'你好，我是财神'},
    {id:'2',value:'感谢互联网技术和5G'},
    {id:'3',value:'让本神可以和平凡的你取得联系'},
    {id:'4',value:'请回复你希望的中奖金额，点击“发送”，本神将为你转接<span>天庭身份管理办事处'},
]
export default class componentName extends Component {
    state = {
        count :0
    }
    countFocus=()=>{
        document.querySelector('.pointer').style.display='none'
    }
    countBlur=()=>{
        let pointer = document.querySelector('.pointer')
        setTimeout(() => {
            if(pointer){pointer.style.display='block'}
        }, 30);
    }
    countChange=(e)=>{
        let value=e.target.value
        console.log(value)
        this.setState({
            count : value
        })
    }
    send=()=>{
       let value = this.state.count
       this.props.history.push({
        pathname: "/infomation",
        state: {priceValue: value}
    })
    }
  render() {
    return (
      <div className='dialogue'>
           <div  className='chat-container'>
               {chatList.map((value,index)=>{
                   
                return  <div className={`chat-li chat-${index}`}>
                       <div className='chat-head'>
                         <img src={Images.chat_head_icon} alt=""/>
                       </div>
                       <div className='chat-contain'>
                          <img src={Images.chat_corner} alt=""/>
                          <div className='chat-contain-text'>
                              {value.value.includes('<span>')?
                              <div>
                                {value.value.split('<span>')[0]}
                                <span className='office-text'>{value.value.split('<span>')[1]}</span>
                              </div>
                              :
                              value.value
                            }
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
                  <input type="number" onFocus={this.countFocus} onBlur={this.countBlur} onChange={this.countChange}/>
              </div>
              <div className='btn-sure' onClick={this.send}>
                 发送
              </div>
           </div>
      </div>
    )
  }
}
