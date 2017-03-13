// Use Material-UI as example
import React, {PureComponent} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Badge from 'material-ui/Badge';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import CircularProgress from 'material-ui/CircularProgress';
import {green100, green500, green700} from 'material-ui/styles/colors';

import {REQUESTING, FINISHED} from '../constants/RequestStatus'


// Component
import SideNavComponent from './nav/sideNav.wrapper.react'
import AppBarComponent from './nav/appBar.react'
import Alert from './modals/alert.dialog.react'
import Info from './modals/info.snackbar.react'

const lightTheme = getMuiTheme({
    palette: {
        primary1Color: green500,
        primary2Color: green700,
        primary3Color: green100,
    },
}, {
    avatar: {
        borderColor: null,
    },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.82 Safari/537.36',
});


class App extends PureComponent {
    componentWillMount() {
        this.props.fetchUserInfo()
    }

    render() {
        const {user,request,requestFinished,snackBar,sideNav,browser,
            hideSnackBar,updateNavMenu, openSideNav, closeSideNav
        } = this.props;

        const sideNavAlwaysShows = browser.greaterThan.medium;

        const style = {
            appBar: {
                position: 'fixed',
                top: 0,
                left: 0
            },
            badgeWrapper: {
                paddingTop: 14,
                paddingRight: 14
            },
            badgeStyle: {
                height: 16,
                width: 16
            },
            menu: {
                paddingTop: 0,
                paddingRight: 12
            },
            mainWrapper: {
                paddingTop: 64,
                minHeight: 400,
                paddingLeft: sideNavAlwaysShows? 256 : 0
            },
            progressWrapper: {
                display: request.get('status') == REQUESTING || FINISHED ? 'inline' : 'none',
                position: 'fixed',
                zIndex: 1000,
                top: '47%',
                left: '55%',
            },
            glassWrapper: {
                display: request.get('status') == REQUESTING ? 'inline' : 'none',
                position: 'fixed',
                zIndex: 999,
                top: 64,
                bottom: 0,
                left: 256,
                right: 0,
                backgroundColor: 'rgba(255,255,255,0.6)'
            }
        };

        const Progress = () => {
            return (
                <div style={style.glassWrapper}>
                    <div style={style.progressWrapper}>
                        <CircularProgress size={60} thickness={7}/>
                    </div>
                </div>
            )

        };

        return (
            <MuiThemeProvider muiTheme={lightTheme}>
                <div>
                    <div>
                        <AppBarComponent openSideNav={openSideNav}/>
                        <SideNavComponent user={user} sideNavAlwaysShows={sideNavAlwaysShows} sideNav={sideNav} closeSideNav={closeSideNav} updateNavMenu={updateNavMenu}/>
                        <div style={style.mainWrapper}>
                            {this.props.children}
                            {Progress()}
                        </div>
                        <Alert request={request} requestFinished={requestFinished}/>
                        <Info snackBar={snackBar} hide={hideSnackBar}/>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;