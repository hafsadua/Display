import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Register from './Register';
import Login from './Login';
import ForgetPassword from './ForgetPassword';
import ShowData from './ShowData';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom' 
import Welcome from './Welcome';
import ComponentPacing from './ComponentPacing';
import OnOffTasks from './OnOffTasks';
import OpportunitiesToRespond from './OpportunitiesToRespond';
import UseOfQuestions from './UseOfQuestions';
import Verbalbehaviour from './VerbalBehaviour';
function App(){


  return (
    <div className="App">
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />}> </Route>
          <Route path='login' element={<Login/>}> </Route>
          <Route path='forgetpassword' element={<ForgetPassword/>}> </Route>
          <Route path='showdata' element={<ShowData/>}> </Route>
          <Route path='welcome' element={<Welcome/>}> </Route>
          <Route path='ComponentPacing' element={<ComponentPacing/>}> </Route>
          <Route path='OnOffTasks' element={<OnOffTasks/>}> </Route>
          <Route path='OpportunitiesToRespond' element={<OpportunitiesToRespond/>}> </Route>
          <Route path='UseOfQuestions' element={<UseOfQuestions/>}> </Route>
          <Route path='Verbalbehaviour' element={<Verbalbehaviour/>}> </Route>
          

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
