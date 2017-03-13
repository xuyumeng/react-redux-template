import React, {PureComponent} from 'react';
import { browserHistory } from 'react-router'

import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import {URL} from '../../../config/config'

const panelStyle = {
    height: 150,
    width: 256,
    margin: 0,
    textAlign: 'center',
    display: 'inline-block'
};

const avatarStyle = {
    marginTop: 18
};

const userInfo = {
    marginTop: 18
};

const userName = {
    marginLeft: 100,
    float: 'left'
};

const iconStyles = {
    margin: -12
};


class UserPanel extends PureComponent {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.user !== nextProps.user
    }


    render() {
        const {user} = this.props;

        const routes = [
            {
                id: 1,
                name: '我的资料',
                url: '/profile'
            }
        ];

        function handleClick(route) {
            browserHistory.push(route);
        }

        return <Paper style={panelStyle} zDepth={0} rounded={false}>
            <Avatar size={64} style={avatarStyle} src={user.get('avatar')}/>
            <div style={userInfo}>
                <div style={userName}>{user.get('name')}</div>
                <IconMenu
                    iconButtonElement={<IconButton style={iconStyles}><ArrowDropDown /></IconButton>}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                    {routes.map((route) => {
                        return (
                            <MenuItem
                                key={route.id}
                                primaryText={route.name}
                                onTouchTap={e => { e.preventDefault(); handleClick(route.url)}}
                            />
                        )
                    })}
                    <MenuItem
                        key={999}
                        primaryText='修改密码'
                        onTouchTap={() => {if (typeof window !== 'undefined') {window.open(URL.sso)}}}
                    />
                </IconMenu>
            </div>
        </Paper>
    }
}

export default UserPanel;
