import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppleIcon from '@mui/icons-material/Apple';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <AppBar position="fixed" sx={{ backgroundColor: '#000000' }}>
        <Toolbar>
          <AppleIcon sx={{ color: 'white', mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
            Apple.inc
          </Typography>

          <Button sx={{ color: 'white' }}>Home</Button>

          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button sx={{ color: 'white' }}>Login</Button>
          </Link>

          <Link to="/sign" style={{ textDecoration: 'none' }}>
            <Button sx={{ color: 'white' }}>SignUp</Button>
          </Link>

          <Link to="/table" style={{ textDecoration: 'none' }}>
            <Button sx={{ color: 'white' }}>Table</Button>

               <Link to="/state" style={{ textDecoration: 'none' }}>
            <Button sx={{ color: 'white' }}>State</Button>
            <Link to="/buttons" style={{ textDecoration: 'none' }}>
            <Button sx={{ color: 'white' }}>Buttons</Button>
           
            <Link to="/counter" style={{ textDecoration: 'none' }}>
            <Button sx={{ color: 'white' }}>Counter</Button>
             <Link to="/product" style={{ textDecoration: 'none' }}>
            <Button sx={{ color: 'white' }}>Product</Button>
            </Link>
          </Link>
          </Link>
          </Link>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
