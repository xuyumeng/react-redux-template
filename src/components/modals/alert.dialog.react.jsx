import React, {PureComponent} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {FAILED, SIGN_IN_EXPIRE} from '../../constants/RequestStatus'

class Alert extends PureComponent {
    render() {
        const {request,requestFinished} = this.props;

        const style = {
            overlay: {
                zIndex: 9999
            }
        };

        return (
            <Dialog
                actions={<FlatButton
                    label={request.get('status') === SIGN_IN_EXPIRE?"重新登陆":"关闭"}
                    primary={true}
                    onTouchTap={() => {
                        request.get('status') === SIGN_IN_EXPIRE && typeof window !== 'undefined'? window.location = 'http://sso.ichangemun.com?redirect=iseat.ichangemun.com/ic-admin' :requestFinished()
                    }}
                />}
                contentStyle={{maxWidth: 360}}
                modal={false}
                style={style.overlay}
                open={request.get('status') === FAILED || request.get('status') === SIGN_IN_EXPIRE}
                onRequestClose={() => requestFinished()}
            >
                {request.get('info')}
            </Dialog>
        )
    }
}

export default Alert