import React, {PureComponent} from 'react';
import Drawer from 'material-ui/Drawer';
import { Scrollbars } from 'react-custom-scrollbars';

// Component
import UserPanel from './sideNav/userPanel.react'
import NavMenu from './sideNav/navMenu.react'

export default class SideNavComponent extends PureComponent {
    render() {
        const {user, sideNavAlwaysShows, sideNav, updateNavMenu, closeSideNav} = this.props;

        return (
            <div>
                <Drawer
                    zDepth={1}
                    open={sideNavAlwaysShows? true: sideNav.get('open')}
                    docked={sideNavAlwaysShows}
                    onRequestChange={() => closeSideNav()}
                >
                    <Scrollbars
                        autoHide
                        autoHideTimeout={1000}
                        autoHideDuration={200}
                        style={{ width: 256, height: '100%' }}>
                    <UserPanel user={user}/>
                    <NavMenu current={sideNav.get('current')} closeSideNav={closeSideNav} update={updateNavMenu}/>
                    </Scrollbars>
                </Drawer>
            </div>
        );
    }
}