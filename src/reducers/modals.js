import {SHOW_MODAL,CLOSE_MODAL} from '../constants/ActionType';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    modalType: null,
    meta: {},
    data: {}
});

function modals(state = initialState, action) {
    switch (action.type) {
        case SHOW_MODAL:
            return state.set("modalType",action.modalType).set("data",action.data).set("meta",action.meta);
        case CLOSE_MODAL:
            return initialState;
        default:
            return state
    }
}

export default modals;