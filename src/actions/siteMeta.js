import {UPDATE_NAV_MENU, TOGGLE_NAV_BAR, CLOSE_NAV_BAR, OPEN_NAV_BAR, SET_ADD_BUTTON_MODAL_TYPE} from '../constants/ActionType';


export function updateNavMenu(id) {
    return {
        type: UPDATE_NAV_MENU,
        id: id
    }
}

export function toggleNavBar() {
    return {
        type: TOGGLE_NAV_BAR
    }
}

export function closeNavBar() {
    return {
        type: CLOSE_NAV_BAR
    }
}

export function openNavBar() {
    return {
        type: OPEN_NAV_BAR
    }
}

export function setAddModalType(modalType) {
    return {
        type: SET_ADD_BUTTON_MODAL_TYPE,
        modalType: modalType
    }
}