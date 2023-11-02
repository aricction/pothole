import React from 'react';
import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Register from './register/register';
import Login from './login/login';
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Process from "./components/Process";

function App() {
  return (
    <div>
      <BrowserRouter >
      <Routes>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      
        <Route path="/" element={<Layout />} >
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/dash" element={<Layout />} >
          <Route index element={<Dashboard />} />
        </Route>

          <Route path="/process" element={<Layout />} >
          <Route index element={<Process />} />
          
        </Route>
          
        
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;