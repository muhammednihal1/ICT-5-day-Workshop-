import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import axios from 'axios'
import React from 'react'

const GetTable = () => {
var [user,setUser]=React.useState([])
axios.get("https://jsonplaceholder.typicode.com/users")
.then((res)=>{
    console.log(res.data)
    setUser(res.data)
})
  return (
    <div>
        <br></br><br></br>
      <TableContainer>
        <Table>
          <TableHead>
            <TableBody>
            {user.map((val)=>{
                return(
                  
                    <TableRow>
                        <TableCell>{val.name}</TableCell>
                        <TableCell>{val.username}</TableCell>
                        <TableCell>{val.email}</TableCell>
                        <TableCell>{val.address.city}</TableCell>
                    </TableRow>
                    )
                    })}
            </TableBody>
          </TableHead>
        </Table>
      </TableContainer>
    </div>
  )
}

export default GetTable
