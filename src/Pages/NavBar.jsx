import React from 'react';
import { NavLink } from 'react-router-dom';
import LogMeOut from '../components/LogMeOut';

const Navbar = ({ token, setToken }) => {
  return (
    <div className='header'>
      <nav>
        <NavLink to='/'>Home  </NavLink>
        {!token &&
          <NavLink to='/login'>Login  </NavLink>
        }
        {!token &&
          <NavLink to='/register'>Register  </NavLink>
        }
        {
          !token &&
          <NavLink to='/routines'>Routines   </NavLink>
        }
        {
          !token &&
          <NavLink to='/activities'>Activities   </NavLink>
        }
        {token &&
          <LogMeOut token={token} setToken={setToken} />
        }
        {token &&
          <NavLink to='/myroutines'>My Routines  </NavLink>
        }
        {token &&
          <NavLink to='/activities'>Activities  </NavLink>
        }
      </nav>
    </div>
  );
};

export default Navbar;