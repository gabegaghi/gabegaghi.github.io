import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App';
import Home from './Components/Home';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Links from "./Components/Links";
import Accessibility from './Components/Accessibility';
import Tech from "./Components/Tech";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/experience' element={<Experience/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/links' element={<Links/>} />
          <Route path='/accessibility' element={<Accessibility/>} />
          <Route path='/tech' element={<Tech/>} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

