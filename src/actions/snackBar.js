import {SHOW_SNACK_BAR,HIDE_SNACK_BAR} from '../constants/ActionType';

export function show(info,time=4000) {
    return {
        type: SHOW_SNACK_BAR,
        info: info,
        time: time
    }
}

export function hide() {
    return {
        type: HIDE_SNACK_BAR
    }
}