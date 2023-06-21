import React, {useState} from 'react';
import { Box} from '@mui/material';
import HeroBanner from '../components/Herobanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
  const [exercises, setExercices] = useState([]);
  const [bodyPart, setBodyPart]= useState('all');
  return (
    <Box>
        <HeroBanner/>
        <SearchExercises setExercices={setExercices}
         bodyPart={bodyPart}
         setBodyPart={setBodyPart} />
        <Exercises  setExercices={setExercices}
         bodyPart={bodyPart}
         setBodyPart={setBodyPart}/>
    </Box>
  )
}

export default Home