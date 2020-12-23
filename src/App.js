import React from 'react';

/** Component */
import Sidebar from './components/Sidebar';
import Chat from './components/Chat'

/***** CSS *****/
import './App.css';


function App() {
  return (
    <div className="app">
      <Sidebar />

      <Chat />
    </div>
  );
}

export default App;
