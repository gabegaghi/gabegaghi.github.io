import logo from './logo.svg';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar className="Nav-bar" fixed='top'>
          <Nav className="Navigation">
            <Nav.Link className="Nav-link" href="#home">Home</Nav.Link>
            <Nav.Link className="Nav-link" href="#about">About</Nav.Link>
            <Nav.Link className="Nav-link" href="#projects">Experience</Nav.Link>
            <Nav.Link className="Nav-link" href="#contact">Contact</Nav.Link>
            <Nav.Link className="Nav-link" href="#links">Links</Nav.Link>
            {/*Last ones are separate from rest*/}
            <Nav.Link className="Nav-link last" href="#dev-info">About this website</Nav.Link>
            <Nav.Link className="Nav-link last" href="#accessibility">Accessibility</Nav.Link>
          </Nav>
        </Navbar>
      </header>
    </div>
  );
}

export default App;
