import React from 'react';
import '../assets/CSS/Sidebar.css';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src='https://pps.whatsapp.net/v/t61.24694-24/176624092_366342715220726_4652057089174865227_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVxT6PCSBCac7Dap_m8wqigejpXlGYjllAgQ5RtdAR6BBw&oe=628FB582' />
                <div className="sidebar__headerRight">
                    <IconButton style={{ marginRight: '2vw' }} >
                        <DonutLargeIcon fontSize='small' />
                    </IconButton>
                    <IconButton style={{ marginRight: '2vw' }} >
                        <ChatIcon fontSize='small' />
                    </IconButton>
                    <IconButton style={{ marginRight: '2vw' }} >
                        <MoreVertIcon fontSize='small' />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar;
