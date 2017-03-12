import {SHOW_DROP_DOWN, CLOSE_DROP_DOWN} from '../constants/ActionType';

function show(id,data,meta) {
    return ({
        type: SHOW_DROP_DOWN,
        id: id,
        data: data,
        meta: meta
    })
}

function close() {
    return ({
        type: CLOSE_DROP_DOWN
    })
}

export function toggle(state,id,data,meta) {
    if (state === true) {
        return show(id,data,meta)
    } else if (state === false) {
        return close()
    }
}
