import React from 'react';
import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Register from './register/register';
import Login from './login/login';
function App() {
  return (
    <div>
      <BrowserRouter >
      <Routes>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;