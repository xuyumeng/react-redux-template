import React,{PureComponent} from 'react';
import Divider from 'material-ui/Divider';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { browserHistory } from 'react-router'
import {grey300} from 'material-ui/styles/colors'

// icons
import Home from 'material-ui/svg-icons/action/home';


class NavMenu extends PureComponent {
    render() {
        const {current, update, closeSideNav} = this.props;

        const routes = [
            {
                id: 1,
                name: '首页',
                icon: <Home />,
                url: '/ic-admin/'
            },
        ];

        function handleClick(route) {
            closeSideNav();
            update(route.id);
            browserHistory.push(route.url);
        }

        return (
            <Menu>
                <Divider />
                {routes.map((route) => {
                    return (
                        <MenuItem
                            key={route.id}
                            primaryText={route.name}
                            style={route.id === current?{backgroundColor: grey300}:{}}
                            leftIcon={route.icon}
                            onTouchTap={e => { e.preventDefault(); handleClick(route)}}
                        />
                    )
                })}
            </Menu>
        );
    }

}


export default NavMenu;

