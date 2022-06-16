import logo from './logo.svg';
import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function App() {
  const [selectedPage, setSelectedPage] = useState("/home");

  const selectNavigation = (curr) => {
    setSelectedPage(curr);
  }

  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <Navbar className="Nav-bar" fixed='top'>
          <Nav className="Navigation" fill activeKey={selectedPage} onSelect={(e) => selectNavigation(e)}>
            <Nav.Link className="Nav-link" href="/home">Home</Nav.Link>
            <Nav.Link className="Nav-link" href="/about">About</Nav.Link>
            <Nav.Link className="Nav-link" href="/experience">Experience</Nav.Link>
            <Nav.Link className="Nav-link" href="/contact">Contact</Nav.Link>
            <Nav.Link className="Nav-link" href="/links">Links</Nav.Link>
            {/*Last ones are separate from rest*/}
            <Nav.Link className="Nav-link last" href="/tech">About this website</Nav.Link>
            <Nav.Link className="Nav-link last" href="/accessibility">Accessibility</Nav.Link>
          </Nav>
        </Navbar>
      </header>
  );
}

export default App;
