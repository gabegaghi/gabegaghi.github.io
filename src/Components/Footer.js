import React from 'react';
import { NavLink } from 'react-router-dom';
import Socials from './Socials.js';
import './Footer.css';

function Footer() {
  return (
      <footer className="App-footer">
        {/* wave svg taken from https://codepen.io/rinaw/pen/pGxorQ */}
        <svg className='wave' xmlns='http://www.w3.org/2000/svg' fill='rgb(140, 200, 255)' preserveAspectRatio='none' viewBox='0 0 1186 220'>
          <circle cx='76' cy='125' r='20' fill='white' /><circle cx='870' cy='190' r='11' fill='white'/><circle cx='814.5' cy='160' r='24.5' fill='white'/>
          <path d='M0 15c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z'/>
          <path stroke='white' strokeWidth={20} strokeLinecap='round' d='M0 15c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8'/>
        </svg>
        <Socials spaced/>
        <nav className="navigation">
          <NavLink className="footer-nav" to="/">Home</NavLink>
          <NavLink className="footer-nav" to="/about">About</NavLink>
          <NavLink className="footer-nav" to="/projects">Projects</NavLink>
          <NavLink className="footer-nav" to="/contact">Contact</NavLink>
          <NavLink className="footer-nav" to="/accessibility">Accessibility</NavLink>
        </nav>
      </footer>
  );
}

export default Footer;
