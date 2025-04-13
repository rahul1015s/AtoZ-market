// src/App.jsx
import React from 'react';
import NavBar from './components/NavBar.jsx';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer.jsx';


function App() {
  return (
  
      <div>   
        <NavBar />
        <Outlet />
        <Footer />
      </div>  
      

  );
}

export default App;
