import React from 'react';
import './App.css';
import Login from './components/Login/Login'
import Home from './components/Home/Home';
import Petlog from './components/petlog/Petlog';
import NewPet from './components/newPet/NewPet';
import Update from '../src/components/newPet/updatePet'
import { Navbar } from 'react-bootstrap';
import NavbarComp from './components/navBar/NavbarComp'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Axios from 'axios';

function App() {
  return(
    <><div className="app">
      <NavbarComp />
    </div>
  <BrowserRouter>
    <nav>
      <Link to="/Home"></Link>
      <Link to="/Petlog"></Link>
      <Link to="/NewPet"></Link>
    </nav>
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Petlog" element={<Petlog />} />
      <Route path="/NewPet" element={<NewPet />} />
      <Route path="/UpdatePet:id" element={<Update />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
