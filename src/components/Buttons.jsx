import React, { useState } from 'react';
import Button from '@mui/material/Button';

const Buttons = () => {
  const [clickedText, setClickedText] = useState('');

  const handleClick = (label) => {
    setClickedText(`Welcome to : ${label}`);
  };
  const setA = (
    <Button variant="contained" onClick={() => handleClick('React')}>
      React
    </Button>
  );
  const setB = (
    <Button variant="contained" onClick={() => handleClick('Angular')}>
      Angular
    </Button>
  );
  const setC = (
    <Button variant="contained" onClick={() => handleClick('Vue')}>
      Vue
    </Button>
  );
  return (
    <div>
        <br></br><br></br>
      {setA}<br></br><br></br>
      {setB}<br></br><br></br>
      {setC}
      <p>{clickedText}</p>
    </div>
  );
};

export default Buttons;
