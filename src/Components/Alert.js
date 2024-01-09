import React from 'react';
import { NavLink } from 'react-router-dom';
import './Alert.css';

function Alert({full}) {
  return (
    <div className={full? 'alert full' : 'alert'}>
        <h3 className='alert-title'> This website is under construction!</h3>
        {full? <>
        <p className='alert-text'>I have many plans for upcoming features, including some accessibility-related ones.
        However, I'm still learning about the best standards for accessible UI design, so
        feel free to <NavLink className="contact link" to="/contact">contact me</NavLink> with any
        feedback, bug reports, or ideas of features I should add to the list below!</p>
        <ul className='upcoming-list'>
            <h3 className='upcoming-title'>Upcoming Features:</h3>
            <li>dark mode + other themes</li> 
            <li>dyslexia friendly font option</li>
            <li>detailed project info pages</li>
            <li>filter projects (by title/year/tech/etc)</li>
        </ul>
        </> : <p className='redirect-text'>Please check <NavLink className="accessibility link" to="/accessibility"> Accessibility</NavLink> for more information.</p>}
    </div>
  );
}

export default Alert;
