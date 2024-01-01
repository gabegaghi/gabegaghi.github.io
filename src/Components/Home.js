import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Alert from './Alert';
import './Home.css';

function Home() {
  const [cityHover, setCityHover] = useState('Tkaronto');
  const [nameHover, setNameHover] = useState('Gabe');
  return (
    <main className='home page'>
      <Alert/>
      <div className='intro'>
        <h1 className='intro-title'>Hey, I'm <mark className='hoverable' onPointerEnter={()=> setNameHover("Gabriela")} onPointerLeave={() => setNameHover("Gabe")}>{nameHover}</mark> Esquivel Gaghi</h1>
        <h2 className='intro-subtitle'>A newly graduated software developer with a focus on front-end design</h2>
        <h3 className='intro-text'>I also make logos and other graphic designs, including some used in my <NavLink className='projects link' to='/projects'>projects</NavLink>!</h3>
        <div className='availability'>
          <box-icon class='location-icon' size='30px' name='map' type='solid' color='#f03333'></box-icon>
          <p className='availability-text'>Available full-time for remote opportunities or in-person in <mark className='hoverable' onPointerEnter={() => setCityHover('Toronto')} onPointerLeave={() => setCityHover('Tkaronto')}>{cityHover}</mark></p>
        </div>
      </div>
    </main>
  );
}

export default Home;
