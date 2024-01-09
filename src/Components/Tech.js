import React from 'react';
import './Tech.css';
function Tech({stack}) {

  return (
    <div className='TechStack'>
      <ul className='langs list' title='languages'>
        { stack.langs.map(tech => 
        <li className='item' key={tech}>
          <box-icon class='lang tech-icon' type='logo' name={tech}/>
        </li> )}
      </ul>
      <ul className='libs list' title='libraries & frameworks'>
        { stack.libs.map(tech => 
        <li className='item' key={tech}>
          <box-icon class='lib-fw tech-icon' type='logo' name={tech}/>
        </li> )}
      </ul>
      <ul className='tools list' title='dev tools'>
        { stack.tools.map(tech => 
        <li className='item' key={tech}>
          <box-icon class='tool tech-icon' type='logo' name={tech}/>
        </li> )}
      </ul>
      { stack.dbm ? 
      <ul className='dbs list' title='database related'>
        {stack.dbm.map(tech => 
        <li className='item' key={tech}>
          <box-icon class='dbrel tech-icon' type='logo' name={tech}/>
        </li> )}
      </ul>
      : <></>}
    </div>
  );
}

export default Tech;
