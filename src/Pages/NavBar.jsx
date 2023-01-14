import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ token }) => {
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
          <NavLink to='/myroutines'>MyRoutines  </NavLink>
        }
        {token &&
          <NavLink to='/myactivities'>MyActivities  </NavLink>
        }
      </nav>
    </div>
  );
};

export default Navbar;