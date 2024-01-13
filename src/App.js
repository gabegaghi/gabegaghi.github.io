import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Accessibility from './Components/Accessibility';
import Footer from "./Components/Footer";
import Loading from './Components/Loading';
import Hover from "./Components/Hover";

import './App.css';

import Cloud from './assets/cloud.svg';
import Headshot from "./assets/headshot.jpg";
import Wave from "./assets/wave.png";

function App() {

  // hide hoverable popup when ESC is pressed, as per WCAG 2.2 standard.
  document.addEventListener("keydown", (e) => {
  if ((e.key || e.code) === 'Escape')
    document.getElementById("popup").style.display = "none";
  });
  
  return (
    <div className="App">
      <Header/>
      <Loading srcList={[Cloud, Headshot, Wave]}>
        <div className='availability'>
          <p className='availability-text'>
            <box-icon class='location-icon' size='21px' name='map' type='solid' color='#f03333' />
            <span id='popup'>Available full-time for remote opportunities or in-person in <Hover standard='Tkaronto' hover='Toronto'/>.</span>
          </p>
        </div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/accessibility' element={<Accessibility/>} />
        </Routes>
      </Loading>
      <Footer/>
    </div>
  );
}

export default App;
