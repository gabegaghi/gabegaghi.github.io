import React from 'react';
import './Socials.css';

function Socials({dropdown}) {
  return (
    <div className={dropdown? 'socials dropdown' : 'socials wide'}>
        <a href="https://linkedin.com/in/gesquivelgaghi" target='_blank' rel='noopener noreferrer' className='linkedin-link' aria-label='Linkedin'>
            <box-icon class='linkedin icon' type='logo' name='linkedin'></box-icon>
        </a>
        <a href="https://github.com/gabegaghi" target='_blank' rel='noopener noreferrer' className='github-link' aria-label='Github'>
            <box-icon class='github icon' type='logo' name='github'></box-icon>
        </a>
        <a href="mailto:gesquivelgaghi@gmail.com" className='email-link' aria-label='Gmail'>
            <box-icon class='email icon' type='logo' name='gmail'></box-icon>
        </a>
    </div>
  );
}

export default Socials;