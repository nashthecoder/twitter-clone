import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SidebarOption from './SidebarOption';

function Sidebar() {
    return (
        <div className='sidebar'>

        {/* Twitter icon */}
        <TwitterIcon />

    
        <SidebarOption Icon={HomeIcon} text='Home'/>
        <SidebarOption Icon={SearchIcon} text='Explore'/>
        <SidebarOption Icon={NotificationsNoneIcon} text='Notifications'/>
        <SidebarOption Icon={MailOutlineIcon} text='Messages'/>
        <SidebarOption Icon={TurnedInNotIcon} text='Bookmarks'/>
        <SidebarOption Icon={HomeIcon} text='List'/>
        <SidebarOption Icon={PersonOutlineIcon} text='Profile'/>
        <SidebarOption Icon={HomeIcon} text='More'/>

        {/* Button -> Tweet */}
            
        </div>
    )
}

export default Sidebar
