import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/header'
import Carditerator from './components/Carditerator'
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Assignment from './components/Assignment';
import Newhomework from './components/Newhomework'
import Activitystream from './components/Activitystream';
import Grading from './components/Grading';
import GPACalculator from './components/GPACalculator';
<<<<<<< HEAD
=======
import Sendemail from './components/Sendemail'
>>>>>>> ebb866d (commit)


function App() { 
  return ( 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/assignments/:id' element={<Assignment/>} />
       
      <Route path='/posthw' element={<Newhomework/>} /> 
      <Route path='/Activitystream' element={<Activitystream/>}/>
      <Route path='/grading' element={<Grading/>}/>
      <Route path='/GPACalculator' element={<GPACalculator/>}/>
<<<<<<< HEAD
=======
      <Route path='/sendemail' element={<Sendemail/>} />
>>>>>>> ebb866d (commit)
    
    </Routes>
   
  ); 

} 


export default App;
