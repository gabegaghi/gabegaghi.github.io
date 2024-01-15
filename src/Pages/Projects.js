import React from 'react';
import TechStack from '../Components/Tech';
import placeholder from '../assets/placeholder.png';
import projects from './ProjectsData';
import './Projects.css';

function Projects() {
  return (
    <main className='projects page'>
      <h1 className='page-title'>Selected Projects</h1>
      <ul className='proj list'>
        { projects.map(proj => 
          <li key={proj.title}>
            <div className='proj-item'>
            {proj.public ?
                <a href={proj.repo} target='_blank' rel='noopener noreferrer' className='repo' aria-label={proj.title + ' github repo (new tab)'}>
                  <box-icon class='public' type='logo' color='white' name='github'/>
                </a> : <box-icon class='private repo' color='red' name='hide'/>}
                <h2 className='proj-title'>{proj.title}</h2>
              <div className='proj-subheading'>
                <b className='proj-date' aria-label='Date'>{proj.year}</b>
                <i className='affiliation' aria-label='Affiliation'>{proj.for}</i>
              </div>
              <div className='proj-body'>
                <div className='proj-text'>
                  {proj.logo ? <img className='proj-logo' src={proj.logo} alt={proj.title + ' logo'}/>
                  : <img className='placeholder' src={placeholder} alt='placeholder'/> }
                  <span className='description'>{proj.desc}</span>
                </div>
                <TechStack stack={proj.tech}/>
              </div>
            </div>
         </li>
        )}
      </ul>
    </main>
  );
}

export default Projects;
