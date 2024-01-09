import React from 'react';
import headshot from '../assets/headshot.jpg';
import Skills from './Skills';
import './About.css';

function About() {

  return (
    <main className='About page'>
      <div className='top'>
        <img src={headshot} className="Headshot" height={150} width={150} alt="headshot"/>
        <div>
          <h1 className='page-title'>Get to know me!</h1>
          <span className='definition'><b>marinho:</b> (<i>adj.</i>) marine; of the sea.</span>
        </div>
      </div>
      <div className='container'>
        <div className='abt-me'>
          <p>My journey in software development started 5 years ago, when I built
            a command-line version of the Brazilian card game <i>Presidente</i>, 
            where the user plays against 3 bots. I fell in love with programming,
            and later that year I moved to Canada to study Computer Science at UofT!</p>
          <p>Nowadays, my focus is in web and mobile front-end development, from 
            UX/UI design to back-end interaction. I believe that a holistic development
            process is vital to build fast, seamless, and maintainable applications. 
            For this reason, whenever possible, I participate in and familiarize
            myself with the database design, and nurture an open line of communication
            with the other developers.</p>
          <p>I’m looking for a job where I can contribute transformative ideas, 
            ask for support and learn from my mistakes, and continue honing my 
            skills as I grow into my full potential. If you know of any opportunities
            like that for a recent grad front-end developer, I’d love to hear about
            it!</p>
        </div>  
        <div className='skills box'>
          <h2 className='title'>Skills</h2>
          <Skills/>
        </div>
        <div className='education box'>
          <h2 className='title'>Education</h2>
            <div className='first row'>
              <b className='role'>Honours B.Sc in Computer Science</b>
              <i className='right date'>Nov 2023</i>
            </div>
            <div className='second row'>
              <span className='company'>University of Toronto Scarborough</span>
              <span className='right location'>ON, Canada</span>
            </div>
            <ul>
              <li><b>Accomplishments:</b> Named to the Dean's List in 2020 and 2021; Graduated with distinction.</li>
              <li><b>Co-Curricular:</b> Volunteer International Student Ambassador in 2021 and 2022.</li>
              <li><b>Relevant Courses:</b> Databases, Human-Computer Interaction, Programming on the Web, Machine Learning and Data Mining, Engineering Large Software Systems</li>
            </ul>
        </div>
        <div className='experience box'>
          <h2 className='title'>Experience</h2>
            <div className='first row'>
              <a className='role' href='https://www.credly.com/badges/37d515a7-1b27-49b8-9907-50699ae1dabb/' rel='noopener noreferrer' target='_blank'>Software Engineer Intern <box-icon name='badge-check' type='solid' class='link-icon' size='18px' color='darkcyan' /></a>
              <i className='right date'>Jun - Aug 2022</i>
            </div>
            <div className='second row'>
              <span className='company'>Publicis Sapient</span>
              <span className='right location'>Toronto, ON</span>
            </div>
            <ul>
              <li>Completed 5 weeks of certified training on topics such as: APIs, Web Development, Databases, Microservices, DevOps, Security & Risk Management, and Testing.</li>
              <li>Planned and built a cross-platform financial mobile app called Pigeon using Node.js as a front-end developer on an Agile Scrum team of 9 interns.</li>
              <li>Presented the application and its 5-week development process to an audience of technical and non-technical clients, leaders, and colleagues from the company.</li>
            </ul>
        </div>
      </div>
    </main>
  );
}

export default About;
