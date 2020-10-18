import React, { Component } from 'react'
import './infoStyle.css'
import {Toast,Radio,List} from 'antd-mobile'
const RadioItem = Radio.RadioItem
export default class Infomation extends Component {
    state={

    }
    componentDidMount(){
        Toast.info('这里是天庭身份管理办事处，请填写你的申请资料表',5);
    }
    onChange(){}
    // 昵称
    changeName=(e)=>{
     let nickName = e.target.value
     this.setState({
        nickName
     })
    }
    // 梦想
    changeDream=(e)=>{
     let mydream = e.target.value
     this.setState({
         mydream
     })
    }
    // 生成身份
    showInfo =()=>{
        this.props.history.push('/showInfo');
    }
  render() {
    return (
      <div className='infomation'>
         <div>身份申请资料表</div>
         <div className='infoContainer'>
             <div>
                 想一个暴富以后的昵称<input type="text"  onChange={this.changeName}/>
             </div>
             <div>
                 性别 
                 <List>
                    <RadioItem checked={true} onChange={() => this.onChange('man')}>
                       男
                    </RadioItem>
                    <RadioItem checked={false} onChange={() => this.onChange('man')}>
                       女
                    </RadioItem>
                </List>
             </div>
             <div>
                 中奖后想实现的第一个愿望（8字以内）
                 <input type="text" onChange={this.changeDream}/>
             </div>
         </div>
         <div className='footer' onClick={this.showInfo}>
            <div>生成身份</div>
         </div>
      </div>
    )
  }
}
