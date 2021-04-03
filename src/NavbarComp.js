import React, { useState, useRef, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { BsJustify } from 'react-icons/bs'
import { links, social } from './data'
import logo from './logo.svg'

const NavbarComp = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="'nav-header">
          <img src={logo} alt='logo' />
          <button classsName='nav-toggle'>
            <BsJustify />
          </button>
        </div>
        <div className='links-container show-container'>
          <ul className="links">
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
            <li>
              <a href='#'>Projects</a>
            </li>
          </ul>
        </div>
        <ul className="social-icons">

        
        </ul>
      
      
      </div>
    </nav>
  );
}

export default NavbarComp
