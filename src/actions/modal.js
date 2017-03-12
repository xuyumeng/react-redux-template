import {SHOW_MODAL,CLOSE_MODAL} from '../constants/ActionType';

export function openModal(modalType,data=null,meta=null) {
    return {
        type: SHOW_MODAL,
        modalType: modalType,
        data: data,
        meta: meta
    }
}

export function closeModal() {
    return {
        type: CLOSE_MODAL
    }
}