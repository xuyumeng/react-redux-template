import {REQUESTING,FINISHED,SUCCESSFUL,SUCCESSFUL_INFO,FAILED,SIGN_IN_EXPIRE} from '../constants/RequestStatus'
import {CHANGE_REQUEST_STATUS} from '../constants/ActionType'

export function requestStart() {
    return {
        type: CHANGE_REQUEST_STATUS,
        status: REQUESTING
    };
}

export function requestFinished() {
    return {
        type: CHANGE_REQUEST_STATUS,
        status: FINISHED
    };
}

export function requestSuccessful(info) {
    return {
        type: CHANGE_REQUEST_STATUS,
        status: SUCCESSFUL,
        info: info
    };
}

export function requestSuccessfulWithInfo(info) {
    return {
        type: CHANGE_REQUEST_STATUS,
        status: SUCCESSFUL_INFO,
        info: info
    };
}

export function requestFailed(info) {
    return {
        type: CHANGE_REQUEST_STATUS,
        status: FAILED,
        info: info
    };
}

export function signInExpire() {
    return {
        type: CHANGE_REQUEST_STATUS,
        status: SIGN_IN_EXPIRE,
        info: '登陆超时或权限不足，请重新登陆'
    };
}
