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
let dltRedBall = []
let dltBullBall = []
let ssqRedBall = []
let ssqBlueBall = []
for (var i = 0; i < 35; i++) {
    dltRedBall[i] = i + 1 ;
}
for (var i = 0; i < 12; i++) {
    dltBullBall[i] = i + 1;
}
let ssqNum = {
    redBall:[],blueBall:[]
}
for (var i = 0; i < 33; i++) {
    ssqRedBall[i] = i + 1;
}
for (var i = 0; i < 16; i++) {
    ssqBlueBall[i] = i + 1;
}
export default class ShowInfo extends Component {
    state={
        headerIcon:'',
        dltRedRandom:[],
        dltBlueRandom:[],
        ssqRedRandom:[],
        ssqBlueRandom:[],
    }
    componentWillMount(){
        
    console.log (this.props.location);
    let pathState = this.props.location.state ?this.props.location.state: {}
    this.setState({
        nickName:pathState.nickName,
        sex:pathState.sex,
        dream:pathState.dream,
    },()=>{
        let random = Math.floor(Math.random()*3)
        this.setState({
            headerIcon:this.state.sex=='man'?manIcon[random]:womanIcon[random]
        })
    })
       
    }
    getSort=()=>{
        return 0.5 - Math.random();
    }
    componentDidMount() {
        let dltRedRandom = []
        let dltBlueRandom = []
        let ssqRedRandom = []
        let ssqBlueRandom = []
        console.log(dltRedBall,dltBullBall)
        console.log(ssqRedBall,ssqBlueBall)
        dltRedBall.sort(function () {
            return 0.5 - Math.random();
        }); //大乐透红球
        dltBullBall.sort(function () {
            return 0.5 - Math.random();
        });//大乐透蓝球
        dltRedRandom = dltRedBall.slice(0, 5);
        dltBlueRandom = dltBullBall.slice(0, 2);
        ssqRedBall.sort(function () {
            return 0.5 - Math.random();
        }); //大乐透红球
        ssqBlueBall.sort(function () {
            return 0.5 - Math.random();
        });//大乐透蓝球
        ssqRedRandom = ssqRedBall.slice(0, 6);
        ssqBlueRandom = ssqBlueBall.slice(0, 1);
        this.setState({
            dltRedRandom,
            dltBlueRandom,
            ssqRedRandom,             
            ssqBlueRandom
        })
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
             <div style={{marginBottom:'15px',marginTop:'20px'}}>姓名 <span>{this.state.nickName}</span></div>
             <div style={{marginBottom:'15px'}}>性别：<span>{this.state.sex == 'man' ? '男':'女'}</span></div>
             <div style={{marginBottom:'15px'}}>中奖愿望：<span>{this.state.dream}</span></div>
             <div style={{marginBottom:'35px'}}>住址：<span>地球的凡间</span></div>
             <div className='show-number'>
                 <div>奖二代身份证号（大乐透）</div>
                 <div className='ball-area'>
                     {
                         this.state.dltRedRandom.map(value=>{
                             return <span className='red-ball'>{value >9?value:'0'+value}</span>
                         })
                     }
                     {
                         this.state.dltBlueRandom.map(value=>{
                             return <span className='blue-ball'>{value >9?value:'0'+value}</span>
                         })
                     }
                    </div>
             </div>
             <div className='show-number'>
                 <div>奖二代身份证号（双色球）</div>
                 <div className='ball-area'>
                     {
                         this.state.ssqRedRandom.map(value=>{
                             return <span className='red-ball'>{value >9?value:'0'+value}</span>
                         })
                     }
                     {
                         this.state.ssqBlueRandom.map(value=>{
                             return <span className='blue-ball'>{value >9?value:'0'+value}</span>
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
