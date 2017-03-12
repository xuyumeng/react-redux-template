import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {createResponsiveStateReducer} from 'redux-responsive'
import * as reducers from 'reducers/index'

const breakpoints = {
    extraSmall: 480,
    small: 768,
    medium: 992,
    large: 1200,
};

const reducer = combineReducers({
    ...reducers,
    browser: createResponsiveStateReducer(breakpoints),
    routing: routerReducer
});

export default reducer