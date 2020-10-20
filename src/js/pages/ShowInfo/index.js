import React, { Component } from 'react'
import './infoStyle.css'
import Images from '../../utils/Images'
import html2canvas from 'html2canvas'
import MyCanvas2Image from "../../utils/MyCanvas2Image";
let myWidth = document.body.scrollWidth
let myHeight = document.body.scrollHeight
let phonewidth = window.screen.width

const manIcon = [
    Images.man1,
    Images.man2,
    Images.man3,
]
const womanIcon = [
    Images.woman1,
    Images.woman2,
    Images.woman3,
]


export default class ShowInfo extends Component {
    state={
        headerIcon:'',
        dltNum : {
            redBall:['01','02','03','04','13'],
            blueBall:['01','02']
        },
        ssqNum : {
            redBall:['01','02','03','04','13','19'],
            blueBall:['01']
        }
    }
    componentWillMount(){
        let random = Math.floor(Math.random()*3)
        this.setState({
            headerIcon:womanIcon[random]
        })
    }
    componentDidMount() {
        let that = this
        let image = that.convertToImage(document.getElementById('showInfo'))
        image.then((value, err) => {
            that.setState({
                newImage: value.src
            })
        })
        
    }
    convertToImage = (container, options = {}) => {
        return html2canvas(container, options).then(canvas => {
            const imageEl = MyCanvas2Image.convertToPNG(canvas, canvas.width, canvas.height);
            return imageEl;
        });
    }
  
  render() {
    return (
        // this.state.newImage ? <img style={{width: myWidth, height: myHeight}} src={`${this.state.newImage}`}/> : 
      <div className='showInfo' id='showInfo'>
      <div className='showInfo_main'>
        <div className='container1'>
          <div className='container-text'>
          <div className='title'>奖二代身份证</div>
             <div className='header-icon'><img src={this.state.headerIcon} alt=""/></div>
             <div style={{marginBottom:'15px',marginTop:'20px'}}>姓名 <span>小丽丽</span></div>
             <div style={{marginBottom:'15px'}}>性别：<span>女</span></div>
             <div style={{marginBottom:'15px'}}>中奖愿望：<span>天涯海角</span></div>
             <div style={{marginBottom:'35px'}}>住址：<span>地球的凡间</span></div>
             <div className='show-number'>
                 <div>奖二代身份证号（大乐透）</div>
                 <div className='ball-area'>
                     {
                         this.state.dltNum.redBall.map(value=>{
                             return <span className='red-ball'>{value}</span>
                         })
                     }
                     {
                         this.state.dltNum.blueBall.map(value=>{
                             return <span className='blue-ball'>{value}</span>
                         })
                     }
                    </div>
             </div>
             <div className='show-number'>
                 <div>奖二代身份证号（双色球）</div>
                 <div className='ball-area'>
                     {
                         this.state.ssqNum.redBall.map(value=>{
                             return <span className='red-ball'>{value}</span>
                         })
                     }
                     {
                         this.state.ssqNum.blueBall.map(value=>{
                             return <span className='blue-ball'>{value}</span>
                         })
                     }
                    </div>
             </div>
             <div className='share_text_area'>
               <div  className='share-text'>长按保存图片，分享朋友圈</div>
             </div>
          </div>
        </div>
       </div>


       <div className='showInfo_footer'> 
            <div  className='game_qrcode'>
                    <div className='code'>
                    </div>
                    <div className='qrcode-text'>
                        开始游戏
                    </div>
            </div>
            <div className='go_login'>
                <img src={Images.loginBtn} alt=""/>
                <div className='get_idcard'>领取"奖二代身份证"</div>
            </div>
        </div>
      
      </div>
    )
  }
}
