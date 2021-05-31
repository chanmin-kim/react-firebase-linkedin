import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
    
    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    };

    return (
        <div className="header">
            {/* 헤더 왼쪽 */}
            <div className="header__left">
                <img src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" alt="" />

                <div className="header__search">
                    <SearchIcon />
                    <input type="text"></input>
                </div>
            </div>

            {/* 헤더 오른쪽 */}
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption onClick={logoutOfApp} avatar={true} title="me" />
            </div>

        </div>
    )
}

export default Header;
