import Immutable from 'immutable';
import {UPDATE_NAV_MENU, TOGGLE_NAV_BAR, CLOSE_NAV_BAR, OPEN_NAV_BAR, SET_ADD_BUTTON_MODAL_TYPE} from '../constants/ActionType';
import {ADD_COMMITTEE} from '../constants/ModalType'
const initialState = Immutable.fromJS({
    sideNav: {
        current: 1,
        open: false
    },
    seatManage: {
        addButtonType: ADD_COMMITTEE,
    }

});

function seatMeta(state = initialState, action) {
    switch (action.type) {
        case UPDATE_NAV_MENU:
            return state.setIn(['sideNav','current'],action.id);
        case TOGGLE_NAV_BAR:
            return state.setIn(['sideNav','open'],!state.getIn(['sideNav','open']));
        case CLOSE_NAV_BAR:
            return state.setIn(['sideNav','open'],false);
        case OPEN_NAV_BAR:
            return state.setIn(['sideNav','open'],true);
        case SET_ADD_BUTTON_MODAL_TYPE:
            return state.setIn(['seatManage','addButtonType'],action.modalType);
        default:
            return state
    }
}

export default seatMeta;