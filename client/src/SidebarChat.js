import React from 'react'
import './SidebarChat.css'

import {Avatar} from '@material-ui/core';

function SidebarChat() {
   return (
      <div className='sidebarChat'>   
         <Avatar src='https://cdn.pixabay.com/photo/2016/11/01/21/11/avatar-1789663_960_720.png' />
         <div className="sidebarChat__info">
            <h2>Room name</h2>
            <p>This is the last message</p>
         </div>
      </div>
   )
}

export default SidebarChat