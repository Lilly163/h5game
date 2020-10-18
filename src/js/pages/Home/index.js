
import React, {Component} from 'react';
import Images from '../../utils/Images'
import { withRouter } from 'react-router-dom';
// import { CSSTransition,TransitionGroup } from 'react-transition-group';

import './styleHome.css';


class PageHome extends Component {


    btnHandler =()=> {
        this.props.history.push('/dialogue');
    }

    render() {
        return (
            <div className='pagehome'>
            <div className='clond-left'>
                <img src={Images.clond_left} alt=""/>
            </div>
            <div className='clond-right'>
               <img src={Images.clond_right} alt=""/>
            </div>
              <div className='frame'>
              <div className='container'>
                 <div className='frame-ul'>
                      <div className='li-info ani1'>
                          <div className='spot'></div> 
                          天庭大数据显示，富二代、拆二代已实现白日梦自由了。
                      </div>
                      <div className='li-info ani2' >
                          <div className='spot'></div> 
                          为了进一步提高凡间人类的幸福感指数，帮助更多人实现白日梦自由，天庭任性推出新型富人身份--"奖"二代。
                      </div>
                      <div className='li-info ani3'>
                          <div className='spot'></div> 
                          呼叫财神，领取你的专属<span className='price-text'>"奖"</span>二代身份证号
                    </div>
                  </div>
                  <div className='btn_call'  onClick={this.btnHandler}>
                      <img src={Images.btn_call} alt=""/>
                  </div>
              </div>
              <div className='rich-god'>
                <img src={Images.rich_god} alt=""/>
              </div>  
                  
              </div>
            </div>
        );
    }
}

export default withRouter(PageHome)
