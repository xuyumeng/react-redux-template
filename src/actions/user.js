import {SET_USER_INFO} from '../constants/ActionType';
import {get} from './helper/agent'
import Cookies from 'js-cookie'

function setUserInfo(text) {
    return {
        type: SET_USER_INFO,
        data: text
    };
}

export function fetchUserInfo(text) {
    return dispatch => {
        let cookies = Cookies.get('token');

        const url = '/api/u/auth/info';

        return dispatch(get(cookies, url, SET_USER_INFO))
    };
}