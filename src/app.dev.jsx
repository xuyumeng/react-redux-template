import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory, applyRouterMiddleware} from 'react-router'
import {Provider} from 'react-redux'

/* Third party plugin */
import useScroll from 'react-router-scroll';
import injectTapEventPlugin from 'react-tap-event-plugin';

/* Routes */
import routes from 'components/routes.react';

/* Store Dev */
import store from './store.dev'

/* devTools */
import DevTools from 'components/dev/devTools'

injectTapEventPlugin();

ReactDOM.render((
    <Provider store={store}>
        <div>
            <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
                { routes }
            </Router>
            <DevTools/>
        </div>
    </Provider>
), document.getElementById('app'));