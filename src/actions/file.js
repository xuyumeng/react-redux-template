import Cookies from 'js-cookie'
import agent from './helper/agent'
import {SET_FILE_LIST, DEL_FILE} from '../constants/ActionType';

export function getList() {
    return (dispatch => {
        let cookies = Cookies.get('token');

        const url = '/api/m/file/list'

        agent.get(cookies, url, SET_FILE_LIST)
    };
}

export function handleDelete(id) {
    return dispatch => {
        let cookies = Cookies.get('token');

        const url = '/api/m/file/delete'

        agent.del(cookies, url, id, DEL_FILE)
    };
}


