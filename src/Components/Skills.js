import React, { Fragment, useState } from 'react';
import skills from './SkillsData.js';
import './Skills.css';

function Skills() {
    const [selected, setSelected] = useState('advanced');

    return (
    <>
        <div className='tabs'>
            <div className='proficiency advanced' onClick={() => setSelected('advanced')}>advanced</div>
            <div className='proficiency experienced' onClick={() => setSelected('experienced')}>experienced</div>
            <div className='proficiency familiar' onClick={() => setSelected('familiar')}>familiar</div>
            <div className='proficiency all' onClick={() => selected === 'all' ? setSelected('advanced') : setSelected('all')}>
                {(selected !== 'all')? 'all' : 'less'}
            </div>
        </div>
        <ul className={selected==='all'? 'all' : 'list-container'}> {Object.entries(skills).map(([prof, list]) =>
            (selected === prof || selected === 'all') ?
            <ul className={'SkillsList ' +  prof} key={prof} title={prof}>
                {list.langs ? <ul className='list' key='langs' title='languages'>
                    { list.langs.map(item => 
                    <li className='langs item' key={item}>{item}</li> )}
                </ul> : <Fragment key='empty-langs'/> }
                {list.libs ? <ul className='list' key='libs' title='libraries & frameworks'>
                    { list.libs.map(item => 
                    <li className='libs item' key={item}>{item}</li> )}
                </ul> : <Fragment key='empty-libs'/> }
                { list.tools ? <ul className='list' key='tools' title='dev tools'>
                    { list.tools.map(item => 
                    <li className='tools item' key={item}>{item}</li> )}
                </ul> : <Fragment key='empty-tools'/> }
                { list.dbm ? <ul className='list' key='dbs' title='database related'>
                    { list.dbm.map(item => 
                    <li className='dbs item' key={item}>{item}</li> )}
                </ul> : <Fragment key='empty-dbs'/> }
            </ul> : <Fragment key={'empty ' + prof}/>)}
        </ul>
    </>);
}

export default Skills;
