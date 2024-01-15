import React, { useState, useRef } from 'react';

function Hover({standard, hover}) {
  const timerRef = useRef(null);
  const [value, setValue] = useState(standard);

  function setHover() {
    clearTimeout(timerRef.current);
    setValue(hover);
    timerRef.current = setTimeout(() => {
      setValue(standard);
    }, 1000);
  }
  
  return (
    <mark className='hoverable' onClick={() => setHover()} onMouseEnter={() => setValue(hover)} onMouseLeave={() => setValue(standard)}>{value}</mark>
  )
}

export default Hover;
