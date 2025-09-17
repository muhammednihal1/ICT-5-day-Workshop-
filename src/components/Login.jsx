import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>

       <TextField id="filled-basic" label="Username" variant="filled" /> <br></br>

               <TextField id="filled-basic" label="Password" variant="filled" /><br></br><br></br>
              <Button variant="outlined">Log in</Button>
    </div>
  )
}

export default Login
