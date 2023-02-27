import React from 'react';
import './App.css';
import Login from './components/Login/Login'
import Home from './components/Home/Home';
import Petlog from './components/petlog/Petlog';
import NewPet from './components/newPet/NewPet';
import { Navbar } from 'react-bootstrap';
import NavbarComp from './components/navBar/NavbarComp'
import { BrowserRouter, Router, Link, Route, Routes } from 'react-router-dom';

function App () {
  return (
    <Home />
  )
}

export default App;




 /* function App() {
  return (
    <div>
      <Navbar fix="top" /> 
      <Home />
    </div>

  );
}


function App() {
  return(
    <><div className="app">
      <NavbarComp />
    </div>
    <BrowserRouter>
    <nav>
      <Link to="/"></Link>
      <Link to="/create"></Link>
    </nav>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Home" element={<Home />} />
      <Route path="/create" element={<NavbarComp />} />
      <Route path="/Petlog" element={<Petlog />} />
      <Route path="/NewPet" element={<NewPet />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

*/