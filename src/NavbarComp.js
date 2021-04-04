import React, { useState, useRef, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const NavbarComp = () => {

  const [showLinks,setShowLinks]=useState(true)
  const linksContainerRef= useRef(null)
  const linksRef=useRef(null)


  return (
    <nav>
      <div className="nav-center">
        <div className="'nav-header">
          <h2 className="logo">Aaftab Pinjari</h2>
          <button classsName='nav-toggle'
          onClick={()=> setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>
        {showLinks && <div className="links-container show-container" 
        ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link)=>{
              const {id,url,text}=link;
              return <li key={id} >
                <a href={url}>{text}</a>
              </li>
            })}
          </ul>
        </div>}
        <ul className="social-icons">
            {social.map((link)=>{
              const {id,url,icon}=link;
              return <li key={id} >
                <a href={url}>{icon}</a>
              </li>
            })}
        </ul>
      
      
      </div>
    </nav>
  );
}

export default NavbarComp
