import React from 'react';
import { Typography, Stack } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyParts = () => {
  return (
    <Stack type='button' alignItems='center' >
        <img src={Icon} alt='icon' style={{width:'40px', height:'40px'}}/>
    </Stack>
  )
}

export default BodyParts;