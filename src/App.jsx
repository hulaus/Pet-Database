import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Petlog from './components/petlog/Petlog';
import NewPet from './components/newPet/NewPet';
import Home from './components/Home/Home'
import SearchBar from "./components/SearchBar"





function App() {
  return (
    <div>
      <Router>
        <nav className='Nav-Container'>
          <div>
        <ul>
          <li className="Nav-Item">
            <Link to='/Home'> Home </Link>
          </li>
          <li className="Nav-Item">
            <Link to='/Petlog'> Pet Log </Link>
          </li>
          <li className="Nav-Item">
            <Link to='/NewPet'>New Pet</Link>
          </li>
        </ul>
        <Routes>
          <Route path='/' />
          <Route path='/Petlog' element={<Petlog />} />
          <Route path='/NewPet' element={<NewPet />} />
          <Route path='/Home' element={<Home />} />
        </Routes>
      </div>
      </nav>
      </Router>
    </div>
  );
}

<SearchBar />

  export default App;
