import Immutable from 'immutable';
import {REQUESTING,FINISHED,SUCCESSFUL,FAILED} from '../constants/RequestStatus'
import {CHANGE_REQUEST_STATUS} from '../constants/ActionType'

const initialState = Immutable.fromJS({
    status: FINISHED,
    info: ''
});

export default function request(state = initialState, action) {
    switch (action.type) {
        case CHANGE_REQUEST_STATUS:
            return state.set('status',action.status).set('info', action.info);
        default:
            return state
    }
}