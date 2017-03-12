import {SET_USER_INFO} from '../constants/ActionType';
import request from 'superagent'
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

        // dispatch(requestQuestions());

        request.post('/api/u/auth/info')
            .send({token: cookies})
            .type('application/json')
            .accept('application/json')
            .end(function(err, res) {
                try {
                    dispatch(setUserInfo(res.body.data));
                } catch (e) {
                    console.log('Fetch user information request failed!');
                }
            });
    };
}