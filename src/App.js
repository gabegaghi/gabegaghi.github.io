import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header.js';
import Home from './Components/Home';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Accessibility from './Components/Accessibility';
import Footer from "./Components/Footer";
import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/accessibility' element={<Accessibility/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
