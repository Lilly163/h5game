
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch, IndexRedirect} from 'react-router-dom';
import common from './js/utils/commom'
import App from './App';
import Home from './js/pages/Home';
import Dialogue from './js/pages/Dialogue';
// 初始化webview高度
common.webViewHeight = window.document.body.offsetHeight;

function Example() {
    return (
    <Router>
        <Route path="/" component={(props) => (
            <App {...props}>
                <Switch>
                    <Route exact path="/" component={Dialogue}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/dialogue' component={Dialogue}/>
                </Switch>
            </App>
        )}/>
    </Router>
    )

};
export default Example;
