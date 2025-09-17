import { TextField, Button } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
  const [a, seta] = useState("Batman")
  const [b, setb] = useState()
  const ChangeName = (e) => {
    console.log(e.target.value)
    seta(e.target.value)
  }
  const submitHandler = () => {
    setb(a)
  }
  return (
    <div>
      <h4>Welcome {b}</h4>
      <TextField
        variant='outlined'
        label='Enter Name'
        onChange={ChangeName}
      />
      <Button variant='contained' onClick={submitHandler}>
        Submit
      </Button>
    </div>
  )
}

export default StateBasics
