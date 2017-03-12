import Immutable from 'immutable';
import {SET_USER_INFO} from '../constants/ActionType';

const initialState = Immutable.fromJS({
    auth: false,
    token: '',
    name: '',
    email: '',
    phone: '',
    password: '',
    uid: ''
});

export default function user(state = initialState, action) {
    switch (action.type) {
        case SET_USER_INFO:
            return state.merge(action.data);
        default:
            return state
    }
}