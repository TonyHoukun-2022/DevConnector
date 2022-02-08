import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/' >
          <i className='fas fa-code'></i> DevConnector
        </Link>
        {/* <a href='index.html'></a> */}
      </h1>
      <ul>
        <li>
          <a href='profiles.html'>Developers</a>
        </li>
        <li>
          {/* <a href='register.html'>Register</a> */}
          <Link to='/register'>Register</Link>
        </li>
        <li>
          {/* <a href='login.html'>Login</a> */}
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar

