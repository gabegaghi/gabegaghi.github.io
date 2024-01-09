import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './Components/Header.js';
import Home from './Components/Home';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Accessibility from './Components/Accessibility';
import Footer from "./Components/Footer";
import './App.css';
import Loading from './Components/Loading.js'

import Cloud from './assets/cloud.svg';
import Headshot from "./assets/headshot.jpg";
import Wave from "./assets/wave.png";

function App() {
  const [cityHover, setCityHover] = useState('Tkaronto');
  
  return (
    <div className="App">
      <div className='dim-check page'>
        <h1 className='mobile-warn'>Mobile version coming soon!</h1>
        <p className='dim-warn'>This website must be viewed on a device with a width of at least <b>500px</b>.</p>
        <span>Until then, have the loading spinner I made for this website:</span>
        <Loading forever/>
      </div>
      <div className='app-container'>
        <Header/>
        <Loading srcList={[Cloud, Headshot, Wave]}>
          <div className='availability'>
            <p className='availability-text'><box-icon class='location-icon' size='21px' name='map' type='solid' color='#f03333' />
              <span>Available full-time for remote opportunities or in-person in <mark className='hoverable' onPointerEnter={() => setCityHover('Toronto')} onPointerLeave={() => setCityHover('Tkaronto')}>{cityHover}</mark>.</span></p>
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
    </div>
  );
}

export default App;
