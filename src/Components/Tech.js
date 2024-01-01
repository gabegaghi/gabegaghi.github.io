import React from 'react';
import './Tech.css';
function Tech({stack}) {
  // stack options:
  // langs: css3, html5, python, typescript, javascript, java, 
  // libs: nodejs, react, jquery
  // dbm: graphql, mongodb, spring-boot    !! missing: mysql
  // tools: visual-studio, figma, docker, github, firebase

  return (
    <div className='TechStack'>
      <ul className='langs list' title='languages'>
        { stack.langs.map(tech => 
        <li className='item' key={tech}>
          <box-icon class='lang tech-icon' size='calc(1rem + 1.5vmin)' type='logo' name={tech}/>
        </li> )}
      </ul>
      <ul className='libs list' title='libraries & frameworks'>
        { stack.libs.map(tech => 
        <li className='item' key={tech}>
          <box-icon class='lib-fw tech-icon' size='calc(1rem + 1.5vmin)' type='logo' name={tech}/>
        </li> )}
      </ul>
      { stack.dbms ? 
      <ul className='dbs list' title='database related'>
        {stack.dbms.map(tech => 
        <li className='item' key={tech}>
          <box-icon class='dbrel tech-icon' size='calc(1rem + 1.5vmin)' type='logo' name={tech}/>
        </li> )}
      </ul>
      : <></>}
      <ul className='tools list' title='misc tools'>
        { stack.tools.map(tech => 
        <li className='item' key={tech}>
          <box-icon class='tool tech-icon' size='calc(1rem + 1.5vmin)' type='logo' name={tech}/>
        </li> )}
      </ul>
    </div>
  );
}

export default Tech;