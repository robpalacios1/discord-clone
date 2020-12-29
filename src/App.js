import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/userSlice'
import { auth } from './components/firebase'
import { login, logout } from './features/userSlice'


/** Component */
import Sidebar from './components/Sidebar';
import Chat from './components/Chat'
import Login from './components/Login';

/***** CSS *****/
import './App.css';


function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName
          })
        );
      } else {
        // the user is logged out
        dispatch(logout());
      }
    })
  },[dispatch])

  return (
    <div className="app">
      {user ? (
        <Fragment>
          <Sidebar />
          <Chat />
        </Fragment>
      ):(
        <Login />
      )}
    </div>
  );
}

export default App;
