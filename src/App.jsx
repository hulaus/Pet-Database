import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Petlog from './components/Petlog';
import NewPet from './components/NewPet'


function App() {
  return (
    <div className="App">
      <Router>
      <header>
        <ul>
          <li>
            <Link to='/'> Home </Link>
          </li>
          <li>
            <Link to='/Petlog'> Pet Log </Link>
          </li>
          <li>
            <Link to='/NewPet'>New Pet</Link>
          </li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path='/' />
          <Route path='/Petlog' element={<Petlog />} />
          <Route path='/NewPet' element={<NewPet />} />
        </Routes>
      </main>
      </Router>
    </div>
  );
}

export default App;
