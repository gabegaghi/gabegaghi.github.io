import React from 'react';
import TechStack from './Tech';
import placeholder from '../assets/placeholder.png';
// import projects from './ProjectsData';
// import Loading from "./Loading";
import './Projects.css';

function Projects() {
  return (
    <div></div>
    // <Loading>
    // <main className='projects page'>
    //   <h1 className='page-title'>Selected Projects</h1>
    //   <ul className='proj-list'>
    //     { projects.map(proj => 
    //     <li key={proj.title}>
    //       <div className='proj-item'>
    //         <div className='proj-heading'>
    //           <h2 className='proj-title'>{proj.title}</h2>
    //           {proj.public ?
    //             <a href={proj.repo} target='_blank' rel='noopener noreferrer' className='proj-repo' aria-label={proj.title + ' github repo (new tab)'}>
    //               <box-icon class='public' type='logo' color='white' name='github'/>
    //             </a> : <box-icon class='private' color='red' name='hide'/>}
    //         </div>
    //         <div className='proj-subheading'>
    //             <b className='proj-date' aria-label='Date'>{proj.year}</b>
    //             <i className='under' aria-label='Affiliation'>{proj.for}</i>
    //         </div>
    //         <div className='proj-body'>
    //           {proj.logo ? <img className='proj logo' src={proj.logo} alt={proj.title + ' logo'}/>
    //           : <img className='placeholder' src={placeholder} alt='placeholder'/> }
    //           <div className='proj-text'>
    //             <span className='description'>{proj.desc}</span>
    //             <TechStack stack={proj.tech}/>
    //           </div>
    //         </div>
    //       </div>
    //     </li> )}
    //   </ul>
    // </main>
    // </Loading>
  );
}

export default Projects;