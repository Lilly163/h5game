import React, {Component} from 'react';
import './infoStyle.css';
import {Toast, Radio, List} from 'antd-mobile';
import Images from '../../utils/Images';
const RadioItem = Radio.RadioItem;
export default class Infomation extends Component {
  state = {
    sexCheck: '',
    nickName: '',
    dream:'',
    sex: ''
  };
  componentWillMount () {
    let priceValue = this.props.location.priceValue;
    this.setState ({
      priceValue,
    });
  }
  componentDidMount () {
    setTimeout(()=>{
      document.querySelector('.modal').style.display = 'none'
    },2500)
  }
  onChange () {}
  // 昵称
  changeName = e => {
    let nickName = e.target.value;
    this.setState ({
      nickName,
    });
  };
  // 生成身份
  showInfo = () => {
    let {nickName,sex,dream} = this.state
    if(!nickName){
       Toast.info('请填写昵称哦')
       return ;
    }
    if(!sex){
       Toast.info('请选择性别')
       return ;
    }
    if(!dream){
       Toast.info('请填写愿望哦')
       return ;
    }
    this.props.history.push({
     pathname: "/showInfo",
     state: {
       nickName: this.state.nickName,
       dream:this.state.dream,
       sex: this.state.sex
      }
 })
  };
  changeName = ( e) => {
    let nickName = e.target.value;
    this.setState ({
      nickName,
    });
  };
  changeDream = ( e) => {
    let dream = e.target.value;
    this.setState ({
      dream,
    });
  };
  changeSex = (tip, e) => {
    let sex = tip;
    let value = e.target.value;
    this.setState ({
      sex,
    });
  };
  render () {
    return (
      <div className="infomation">
       <div className='modal'>
          <div className='modal-text'>
              <div style={{color:'#F18300'}}>您好!</div>
              <div className='middle'>这里是天庭身份管理办事处，请开始填写你的《身份申请资料表》。</div>
              <div>祝好运!</div>
          </div>
       </div>
        <div className="infoContainer">

          <div className='info-title'>身份申请资料表</div>
          <div className="infomation-main">
            <div>
              想一个暴富以后的昵称：
              <input className='name-input' type="text" maxLength={8} onChange={this.changeName} />
            </div>
            <div>
              <div>性别：</div>
              <div className="choose-sex-main">
                <div
                  className="sex-man"
                  onClick={this.changeSex.bind (this, 'man')}
                >
                  <div
                    className={
                      this.state.sex == 'man'
                        ? 'choose-box-checked'
                        : 'choose-box'
                    }
                  />
                  <div className="choose-sex">男</div>
                </div>
                <div
                  className="sex-man"
                  onClick={this.changeSex.bind (this, 'woman')}
                >
                  <div
                    className={
                      this.state.sex == 'woman'
                        ? 'choose-box-checked'
                        : 'choose-box'
                    }
                  />
                  <div className="choose-sex">女</div>
                </div>
              </div>
            </div>
            <div>
              中奖后想实现的第一个愿望（8字以内）：
              <input  className='name-input' type="text" maxLength={8} onChange={this.changeDream} />
            </div>
            <div className='footer' onClick={this.showInfo}>
            <img src={Images.officeBtn} alt=""/>
         </div> 
          </div>

        </div>
       
      </div>
    );
  }
}
