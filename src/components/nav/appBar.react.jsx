import React,{PureComponent} from 'react';

import AppBar from 'material-ui/AppBar';
import Badge from 'material-ui/Badge';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';


class MyAppBar extends PureComponent {
    render() {
        const {openSideNav} = this.props;

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
            }
        };

        return (
            <AppBar
                iconElementLeft={
                    <IconButton onTouchTap={() => openSideNav()}>
                        <MenuIcon/>
                    </IconButton>
                }
                style={style.appBar}
                title='Admin'
                zDepth={1}/>
        );
    }
}


export default MyAppBar;

