import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from "./Pages/HomePage";
// import Profile from "./Pages/MyRoutines";
import Register from "./components/RegisterUser";
import LogMeIn from "./components/LogMeIn";
import Navbar from "./Pages/NavBar";
import Routines from "./components/Routines";
import Activities from "./Pages/Activities";
import MyRoutines from "./Pages/MyRoutines";


function App() {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState('');

  if (localStorage.token && !token) {
    setToken(localStorage.token);
  };

  return (
    <div className="App">
      <div>Welcome To Our FitnessTrack.er</div>
      <Navbar token={token} />
      <Routes>
        <Route path='/'
          element={<Home
            token={token}
            userId={userId}
            setToken={setToken} />}
        />
        {!token &&
          <Route path='/register' element={<Register setToken={setToken} />} />
        }
        {!token &&
          <Route path='/login' element={<LogMeIn setToken={setToken} setUserId={setUserId} />} />
        }

        {!token &&
          <Route path='/routines' element={<Routines />} />
        }
        {!token &&
          <Route path='/activities' element={<Activities />} />
        }

        {token &&
          <Route path='/myroutines' element={<MyRoutines
            token={token}
            userId={userId} />} />
        }
        {token &&
          <Route path='/activities' element={<Activities
            token={token}
            userId={userId} />} />
        }
        <Route path='*' element={<Navigate replace to='/' />}
        />

      </Routes>
    </div>
  )
}

export default App;