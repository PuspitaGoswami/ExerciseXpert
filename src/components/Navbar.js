import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import logo from '../assets/ExersiceXpert.png';

const Navbar = () => {
  return (
    <div>
      <Stack>
        <Link to="/">
        <img src={logo} alt='logo' style={{width:'48px', height:'48px', margin:'0 20px'}}/>
        </Link>
      </Stack>
      <Stack>
        <Link to='/'>Home</Link>
        <a href='#exercises' style={{textDecoration:'none', color:'#3A1212'}}>Exercises</a>
      </Stack>

    </div>
  )
}

export default Navbar;