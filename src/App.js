
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';

import ExerciseDetails from './pages/ExerciseDetails';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Box width='400px'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/exercise/:id'element={<ExerciseDetails/>} />
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
