import React from 'react'
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Petlog from './components/petlog/Petlog';
import NewPet from './components/newPet/NewPet';
import navBar from '../src/components/navBar/navbar'; 


function App() {
    return (

      <div>
        <Home />
      </div>

    );
  }
export default App;




