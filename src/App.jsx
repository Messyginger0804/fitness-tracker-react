import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from "./Pages/HomePage";
import Profile from "./Pages/Profile";
import Register from "./components/RegisterUser";
import LogMeIn from "./components/LogMeIn";
import Navbar from "./Pages/NavBar";
import Routines from "./components/Routines";

function App() {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState('');

  if (localStorage.token && !token) {
    setToken(localStorage.token);
  };

  return (
    <div className="App">
      <div>Welcome To Our FitnessTrack.er</div>
      <Navbar token={ token }/>
      <Routes>
        <Route path='/' 
          element={<Home 
          token={ token } 
          posts={ posts } 
          setPosts={ setPosts }
          userId={ userId }
          setToken={ setToken }/>} 
        />
        {!token &&
          <Route path='/register' element={ <Register setToken={ setToken } /> }/>
        }
        {!token &&
          <Route path='/login' element={ <LogMeIn setToken={ setToken } setUserId={ setUserId } /> } />
        }

        {!token &&
          <Route path='/routines' element={ <Routines  /> } />
        }

        {token &&
          <Route path='profile' element={<Profile token={ token } setToken={ setToken } />} />
        }
        <Route path='*' element={<Navigate replace to='/' />}

        // {!token &&
        //   <Route path='/routines' element={ <Routines /> } />//not made yet!!!!!
        // }
        />
        
      </Routes>
    </div>
  )
}

export default App;