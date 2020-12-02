import { useEffect } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';

function App() {

  useEffect(() => {
    var pusher = new Pusher('1d4b692500be30505e07', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      alert(JSON.stringify(data));
    });
  }, [])

  return (
    <div className="app">
      <div className="app__body">

        <Sidebar />

        <Chat />
        
      </div>
    </div>
  );
}

export default App;
