import request from 'superagent'
import makeActionCreator from './makeAction'
import { requestStart, requestFinished, requestFailed, signInExpire } from '../requestStatus'
import { closeModal } from '../modal'
import { show } from '../snackBar'

export function get(token, url, setAction) {
    return dispatch => {
        dispatch(requestStart());

        const set = makeActionCreator(setAction, 'data');

        request.get(url)
            .send({
                token: token
            })
            .type('application/json')
            .accept('application/json')
            .end(function(err, res) {
                try {
                    if (res.body.result === 0) {
                        dispatch(set(res.body.data));
                        dispatch(requestFinished());
                    } else if (res.body.result === 1) {
                        dispatch(signInExpire());
                    } else {
                        dispatch(requestFailed('内部错误'));
                    }
                } catch (e) {
                    dispatch(requestFailed('信息获取失败，请稍后再试！'));
                }
            });
    };
}

export function add(dispatch, token, url, data, addAction) {
    return dispatch => {
        const localAdd = makeActionCreator(addAction, 'data');

        request.post(url)
            .send({
                token: token,
                data: data
            })
            .type('application/json')
            .accept('application/json')
            .end(function(err, res) {
                try {
                    if (res.body.result === 0) {
                        dispatch(closeModal());
                        dispatch(localAdd(Object.assign({},res.body.data,data)));
                        dispatch(show('添加成功！'));
                    } else if (res.body.result === 1) {
                        dispatch(signInExpire());
                    } else {
                        dispatch(requestFailed('内部错误'));
                    }
                } catch (e) {
                    dispatch(requestFailed('添加失败，请稍后再试！'));
                }
            });
    }

}

export function update(dispatch, token, url, id, data, updateAction) {
    return dispatch => {
        const localUpdate = makeActionCreator(updateAction, 'id', 'data');

        request.put(url)
            .send({
                token: token,
                id: id,
                data: data
            })
            .type('application/json')
            .accept('application/json')
            .end(function(err, res) {
                try {
                    if (res.body.result === 0) {
                        dispatch(closeModal());
                        dispatch(localUpdate(id,data));
                        dispatch(show('更新成功！'));
                    } else if (res.body.result === 1) {
                        dispatch(signInExpire());
                    } else {
                        dispatch(requestFailed('内部错误'));
                    }
                } catch (e) {
                    dispatch(requestFailed('更新失败，请稍后再试！'));
                }
            });
    };
}

export function del(dispatch, token, url, id, deleteAction) {
    return dispatch => {
        const localDel = makeActionCreator(deleteAction, 'id');

        request.del(url)
            .send({
                token: token,
                id: id
            })
            .type('application/json')
            .accept('application/json')
            .end(function(err, res) {
                try {
                    if (res.body.result === 0) {
                        dispatch(closeModal());
                        dispatch(localDel(id));
                        dispatch(show('删除成功！'));
                    } else if (res.body.result === 1) {
                        dispatch(signInExpire());
                    } else {
                        dispatch(requestFailed('内部错误'));
                    }
                } catch (e) {
                    dispatch(requestFailed('删除失败，请稍后再试！'));
                }
            });
    }

}