import React, { useState } from 'react';

function Hover({standard, hover}) {
  const [value, setValue] = useState(standard);

  function setHover() {
    value===standard? setValue(hover) : setValue(standard);
  }
  
  return (
    <mark className='hoverable' onClick={() => setHover()} onMouseEnter={() => setValue(hover)} onMouseLeave={() => {setValue(standard)}}>{value}</mark>
  )
}

export default Hover;
