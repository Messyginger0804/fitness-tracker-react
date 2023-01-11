import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({token}) => {
  return (
    <div className='header'>
    <nav>
      <NavLink to='/'>Home  </NavLink>
      { !token &&
        <NavLink to='/login'>Login  </NavLink>
      }
      { !token &&
        <NavLink to='/register'>Register  </NavLink>
      }
      { token &&
        <NavLink to='/profile'>Profile  </NavLink>
      }
    </nav>
    </div>
  );
};

export default Navbar;