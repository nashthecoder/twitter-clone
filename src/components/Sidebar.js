import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter'
import SidebarOption from './SidebarOption'

function Sidebar() {
    return (
        <div className='sidebar'>

        {/* Twitter icon */}
        <TwitterIcon />

    
        <SidebarOption text='Home'/>
        <SidebarOption text='Explore'/>
        <SidebarOption text='Notifications'/>
        <SidebarOption text='Messages'/>
        <SidebarOption text='Bookmarks'/>
        <SidebarOption text='List'/>
        <SidebarOption text='Profile'/>
        <SidebarOption text='More'/>

        {/* Button -> Tweet */}
            
        </div>
    )
}

export default Sidebar
