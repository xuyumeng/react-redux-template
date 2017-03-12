import {SHOW_SNACK_BAR,HIDE_SNACK_BAR} from '../constants/ActionType';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    status: HIDE_SNACK_BAR,
    info: '',
    time: 4000
});

function snackBar(state = initialState, action) {
    switch (action.type) {
        case SHOW_SNACK_BAR:
            return state.set("status",action.type).set("info",action.info).set("time",action.time);
        case HIDE_SNACK_BAR:
            return initialState;
        default:
            return state
    }
}

export default snackBar;