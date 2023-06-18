import React from 'react'
import {Box, Stack, Typography} from '@mui/material';

const Herobanner = props => {
  return (
    <Box sx={{mt: {lg:'212px', xs:'70px'}, ml:{sm:'50px'}}} position='relative' p='20px'>
      <Typography color='#ff2625' fontWeight='600' fontSize='26px'>Fitness Club</Typography>
      <Typography fontWeight={700} sx={{fontSize:{lg:'44px', xs:'40px'}}}>Sweat, Smile <br/> and Repeat</Typography>
    </Box>
  )
}

Herobanner.propTypes = {}

export default Herobanner