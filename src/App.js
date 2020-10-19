
import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import common from './js/utils/commom'
import Home from './js/pages/Home';
import Dialogue from './js/pages/Dialogue';
import Infomation from './js/pages/Infomation';
import ShowInfo from './js/pages/ShowInfo';
// 初始化webview高度
common.webViewHeight = window.document.body.offsetHeight;

class App extends React.Component {

    render() {
        return (
            <Router>
             <Route path="/" component={(props) => (
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/dialogue' component={Dialogue}/>
                    <Route path='/infomation' component={Infomation}/>
                    <Route path='/showInfo' component={ShowInfo}/>
                </Switch>
        )}/>
    </Router>
        )

    }
}


export default App


