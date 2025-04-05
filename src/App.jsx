// src/App.jsx
import React from 'react';
import NavBar from './components/NavBar.jsx';
import { Outlet } from 'react-router-dom';
import HomePage from './Home/HomePage.jsx';


function App() {
  return (
  
      <div>   
        <NavBar />
        <Outlet />
      </div>  
      

  );
}

export default App;
