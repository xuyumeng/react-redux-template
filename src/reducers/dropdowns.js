import {SHOW_DROP_DOWN,CLOSE_DROP_DOWN} from '../constants/ActionType';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    id: null,
    meta: {},
    data: {}
});

function dropDowns(state = initialState, action) {
    switch (action.type) {
        case SHOW_DROP_DOWN:
            return state.set("id",action.id).set("data",action.data).set("meta",action.meta);
        case CLOSE_DROP_DOWN:
            return initialState;
        default:
            return state
    }
}

export default dropDowns;