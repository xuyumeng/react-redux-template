import React from 'react'
import ReactDOM from 'react-dom'
import Immutable from 'immutable';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router'
import { Provider } from 'react-redux'
import { calculateResponsiveState } from 'redux-responsive'

/* Third party plugin */
import useScroll from 'react-router-scroll';
import injectTapEventPlugin from 'react-tap-event-plugin';

/* Routes */
import routes from 'components/routes.react';

/* Store Dev */
import configureStore from './store'

const initialState = Immutable.fromJS(window.__INITIAL_STATE__);
const store = configureStore(initialState);

injectTapEventPlugin();

console.log('%c 停下！', 'font-size: 4rem; color: red');
console.log('%c 此浏览器功能专供开发者使用。若某人让你在此复制粘贴某内容以启用某功能或“入侵”某人帐户，此为欺诈，会使对方获权进入你的帐户', 'font-size: 1.2rem;');
console.log('%c 查看https://www.facebook.com/selfxss详细了解。','font-size: 1.2rem;');

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
            { routes }
        </Router>
    </Provider>
), document.getElementById('app'));

store.dispatch(calculateResponsiveState(window));
