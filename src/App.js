import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice'

/** Component */
import Sidebar from './components/Sidebar';
import Chat from './components/Chat'


/***** CSS *****/
import './App.css';



function App() {

  const user = useSelector(selectUser);

  return (
    <div className="app">
      {user ? (
        <Fragment>
          <Sidebar />
          <Chat />
        </Fragment>
      ):(
        <h2>You need to login</h2>
      )}
    </div>
  );
}

export default App;
