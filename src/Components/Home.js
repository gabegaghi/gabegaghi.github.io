import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Alert from './Alert';
import './Home.css';

function Home() {
  const [nameHover, setNameHover] = useState('Gabe');
  const [btnHover, setBtnHover] = useState(false);
  return (
    <main className='home page'>
      <Alert/>
      <div className='intro'>
        <h1 className='intro-title'>Hey, I'm <mark className='hoverable' onPointerEnter={()=> setNameHover("Gabriela")} onPointerLeave={() => setNameHover("Gabe")}>{nameHover}</mark> Esquivel Gaghi!</h1>
        <h2 className='intro-subtitle'>Newly graduated software developer with a focus on front-end design within a holistic approach. </h2>
        <p className='intro-text'>I also make logos and other graphic designs, some of which have been used in my <NavLink className='projects link' to='/projects'>projects</NavLink>!</p>
        <NavLink to='/about' className='about-button' onPointerEnter={() => setBtnHover(true)} onPointerLeave={() => setBtnHover(false)}><span>Learn more <b>about me</b></span><box-icon name='right-arrow-alt' animation={ btnHover ? 'fade-right' : 'none'} color='rgb(255, 225, 255)'></box-icon></NavLink>
      </div>
    </main>
  );
}

export default Home;
