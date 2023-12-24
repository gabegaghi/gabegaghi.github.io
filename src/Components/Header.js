import logo from '../assets/MCLogo.png';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Socials from './Socials';
import headshot from '../assets/headshot.jpg';
import './Header.css';

function Header() {

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <nav className="Navigation" >
        <NavLink className="Nav-link" to="/">Home</NavLink>
        <NavLink className="Nav-link" to="/about">About</NavLink>
        <NavLink className="Nav-link" to="/projects">Projects</NavLink>
        <NavLink className="Nav-link" to="/contact">Contact</NavLink>
        <NavLink className="Nav-link" to="/accessibility">Accessibility</NavLink>
      </nav>
      <div className='dd-container'>
        <img src={headshot}  className="mini-headshot" alt="headshot"/>
        <box-icon color='white' name='chevron-down'></box-icon>
        <Socials dropdown/>
      </div>
    </header>
  );
}

export default Header;
