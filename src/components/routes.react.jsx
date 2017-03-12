import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {AppWrapper} from '../containers/app'
import {MainPage} from '../containers/pages'

const requireAuth = (nextState, replace) => {
};

const routes = (
    <Route path="/admin-panel/" component={AppWrapper}>
        <IndexRoute component={MainPage} onEnter={requireAuth}/>
        <Route path="main" component={MainPage} onEnter={requireAuth}/>

        <Route path="developing" component={Developing} onEnter={requireAuth}/>
    </Route>
);

export default routes;