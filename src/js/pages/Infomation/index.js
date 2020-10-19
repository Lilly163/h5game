import React, { Component } from 'react'
import './infoStyle.css'
import {Toast,Radio,List} from 'antd-mobile'
const RadioItem = Radio.RadioItem
export default class Infomation extends Component {
    state={
        sexCheck : ''
    }
    componentWillMount(){
        console.log(this.props.location)
       let priceValue = this.props.location.priceValue
       this.setState({
          priceValue
       })
    }
    componentDidMount(){
        Toast.info('这里是天庭身份管理办事处，请填写你的申请资料表',1);
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
    changeSex=(tip,e)=>{
      let sex = tip
      let value = e.target.value
      this.setState({
          sex 
      })
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
                 <div>性别：</div>
                 <div className='choose-sex-main'>
                    <div className='sex-man' onClick={this.changeSex.bind(this,'man')}>
                       <div className={this.state.sex == 'man' ? 'choose-box-checked' : 'choose-box'}></div>
                       <div className='choose-sex'>男</div>
                    </div>
                    <div className='sex-man' onClick={this.changeSex.bind(this,'woman')}>
                       <div  className={this.state.sex == 'woman' ? 'choose-box-checked' : 'choose-box'}></div>
                       <div className='choose-sex'>女</div>
                    </div>
                 </div>
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
