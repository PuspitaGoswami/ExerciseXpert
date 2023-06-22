import React from 'react';
import { Typography, Stack } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyParts = ({ bodyPart, item, setBodyPart }) => {
  return (
    <Stack type='button' alignItems='center' justifyContent='center'
      className='bodyPart-card'

      sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px'
      }}
    >
      <img src={Icon} alt='icon' style={{ width: '40px', height: '40px' }} />
    </Stack>
  )
}

export default BodyParts;