import React, { useState } from 'react'
import './Chat.css'; 
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import {Avatar, IconButton} from '@material-ui/core';
import axios from './axios';

function Chat({ messages }) {
   const [input, setInput] = useState('')

   const sendMessage = async (e) => {
      e.preventDefault()

      await axios.post('/messages/new', {
         message: input,
         name: "Demo Name",
         timestamp: new Date().toUTCString(),
         receiver: false
     })

     setInput('')
   }

   return (
      <div className='chat'>
         <div className="chat__header">
            <Avatar src='https://cdn.pixabay.com/photo/2016/11/01/18/41/alien-1789184_960_720.png' />

            <div className="chat__headerInfo">
               <h3>Room name</h3>
               <p>Last seen at ...</p>
            </div>

            <div className="chat__headerRight">               
               <IconButton>
                  <SearchOutlinedIcon />
               </IconButton>
               <IconButton>
                  <AttachFileIcon />
               </IconButton>
               <IconButton>
                  <MoreVertIcon />
               </IconButton>
            </div>
         </div>

         <div className="chat__body">
            {messages.map((message) => (
               <p key={Math.random()} className={`chat__message ${message.receiver && "chat__reciever"}`}>
                  <span className="chat__name">{message.name}</span>               
                     {message.message}
                  <span className="chat__timestamp">
                     {message.timestamp}
                  </span>
               </p>
            ))}
            
            
            {/* <p className='chat__message chat__reciever'>
               <span className="chat__name">Sonny</span>               
                  This is a message
               <span className="chat__timestamp">
                  {new Date().toUTCString()}
               </span>
            </p>
            
            <p className='chat__message'>
               <span className="chat__name">Sonny</span>               
                  This is a message
               <span className="chat__timestamp">
                  {new Date().toUTCString()}
               </span>
            </p> */}
         </div>   

         <div className="chat__footer">
            <InsertEmoticonIcon />
            <form>
               <input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder='Type a message'
                  type="text"
               />
               <button
                  onClick={sendMessage}
                  type='submit'
               >
                  Send a message
               </button>
            </form>
            <MicIcon />
         </div>      
      </div>
   )
}

export default Chat