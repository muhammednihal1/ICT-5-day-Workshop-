import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Sign = () => {
  return (
    <div>
      <h1>Sign Up Page</h1>
      <TextField id="filled-basic" label="Username" variant="filled" /><br></br>
       <TextField id="filled-basic" label="Email" variant="filled" /><br></br>
        <TextField id="filled-basic" label="Password" variant="filled" /><br></br><br></br>
       <Button variant="outlined">Sign up</Button>
    </div>

  )
}

export default Sign
