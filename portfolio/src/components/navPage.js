import React from 'react';
import {  Outlet, Link } from "react-router-dom";
import '../App.css';
const Navbar= () =>{
  return (
  
  <div className='main-menu-desktop'>
    <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio">Projects</Link>
        </li>
        <li>
          <Link to="/proficiencies">Proficiencies</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/about">GitHub</Link>
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
     
  </div>
  );
}
export default Navbar;