import { connect } from 'react-redux';
import App from '../components/app.react';
import {fetchUserInfo} from '../actions/user'
import {requestFinished} from '../actions/requestStatus'
import {hide} from '../actions/snackBar'
import {updateNavMenu, closeNavBar, openNavBar} from '../actions/siteMeta'

export const AppWrapper = connect(
    function mapStateToProps(state) {
        return {
            user: state.user,
            request: state.request,
            modal: state.modals,
            snackBar: state.snackBar,
            sideNav: state.siteMeta.get('sideNav'),
            browser: state.browser
        };
    },
    function mapDispatchToProps(dispatch) {
        return {
            fetchUserInfo: () => dispatch(fetchUserInfo()),
            requestFinished: () => dispatch(requestFinished()),
            updateNavMenu: (id) => dispatch(updateNavMenu(id)),
            hideSnackBar: () => dispatch(hide()),
            openSideNav: () => dispatch(openNavBar()),
            closeSideNav: () => dispatch(closeNavBar())
        }
    }
)(App);