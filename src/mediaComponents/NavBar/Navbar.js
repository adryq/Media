import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
import logo from '../../mediaAssets/womansworldoriginal.png';
import {FaTimes, FaBars} from 'react-icons/fa'


function Navbar() {
  
  const [click, setClick] = useState(false);
  
  const handleClick = () => setClick(!click);



  return (
    <>
    <nav className="Navbar">
      <div className='navbar-container container'>
          <div className="navbar-logo" >
            <img src={logo} width="50" height="50" alt="Logo" />
         </div>       
       <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
       </div>
       <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
        <Link to='/Music' className='nav-links'>
          Music
        </Link>
          </li>
          <li className='nav-item'>
        <Link to='/Podcasts' className='nav-links'>
          Podcasts
        </Link>
          </li>
          <li className='nav-item'>
        <Link to='/Interviews' className='nav-links'>
          Interviews
        </Link>
        </li>
        <li className='nav-item'>
        <Link to='/Art' className='nav-links'>
          Art
        </Link>
          </li>
       </ul>
      </div>
    </nav>
    </>
  )
}





export default Navbar
