import React from 'react'
import './Sidebar.css'

import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import {Avatar, IconButton} from '@material-ui/core';

import SidebarChat from './SidebarChat'

function Sidebar() {
   return (
      <div className='sidebar'>
      <div className="sidebar__header">
            <Avatar src='https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png' />

            <div className="sidebar__headerRight">
               <IconButton>
                  <DonutLargeIcon />
               </IconButton>
               <IconButton>
                  <ChatIcon />
               </IconButton>
               <IconButton>
                  <MoreVertIcon />
               </IconButton>
            </div>           
         </div>
         <div className="sidebar__search">
            <div className="sidebar__searchContainer">
               <SearchOutlinedIcon />
               <input 
               placeholder='Search or start new chat'
               type='text'
            />
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

export default Sidebar