import React, { Fragment, useState } from 'react';
import skills from './SkillsData.js';
import './Skills.css';

function Skills() {
    const [selected, setSelected] = useState('advanced');

    return (
    <>
        <div className='tabs'>
            <div className='tab all' onClick={() => selected === 'all' ? setSelected('advanced') : setSelected('all')}>
                {(selected !== 'all')? 'all' : 'less'}
            </div>
            <div className={'tab familiar ' + (selected==='familiar' ? 'active' : 'inactive')} onClick={() => setSelected('familiar')}><span>familiar</span></div>
            <div className={'tab advanced ' + (selected==='advanced' || selected==='all' ? 'active' : 'inactive')} onClick={() => setSelected('advanced')}><span>advanced</span></div>
            <div className={'tab moderate ' + (selected==='moderate' ? 'active' : 'inactive')} onClick={() => setSelected('moderate')}><span>moderate</span></div>
            </div>
        <div className={selected==='all'? 'all' : 'list-container'}> {Object.entries(skills).map(([prof, list]) =>
            (selected === prof || selected === 'all') ?
            <ul className={'SkillsList ' +  prof} key={prof} title={prof}>
                { list.langs ? list.langs.map(item => 
                    <li className='langs item' key={item}>{item}</li> )
                    : <Fragment key='empty-langs'/>}
                { list.libs ? list.libs.map(item => 
                    <li className='libs item' key={item}>{item}</li> )
                    : <Fragment key='empty-libs'/> }
                { list.tools ? list.tools.map(item => 
                    <li className='tools item' key={item}>{item}</li> )
                    : <Fragment key='empty-tools'/> }
                { list.dbm ? list.dbm.map(item => 
                    <li className='dbs item' key={item}>{item}</li> )
                    : <Fragment key='empty-dbs'/> }
            </ul> : <Fragment key={'empty ' + prof}/>)}
        </div>
    </>);
}

export default Skills;
