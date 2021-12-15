import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Register from './Register';
import Login from './Login';
import ForgetPassword from './ForgetPassword';
import ShowData from './ShowData';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom' 

function App(){


  return (
    <div className="App">
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />}> </Route>
          <Route path='login' element={<Login/>}> </Route>
          <Route path='forgetpassword' element={<ForgetPassword/>}> </Route>
          <Route path='showdata' element={<ShowData/>}> </Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
