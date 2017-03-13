import React, {PureComponent} from 'react';
import Snackbar from 'material-ui/Snackbar';
import {SHOW_SNACK_BAR} from '../../constants/ActionType'

class Info extends PureComponent {
    render() {
        const {snackBar,hide} = this.props;

        return (
            <Snackbar
                open={snackBar.get('status') === SHOW_SNACK_BAR}
                message={snackBar.get('info')}
                autoHideDuration={4000}
                onRequestClose={() => hide()}
            />
        )
    }
}

export default Info