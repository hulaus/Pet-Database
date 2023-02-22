
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Petlog from './components/Petlog';

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
        </ul>
      </header>
      <main>
        <Routes>
          <Route path='/' />
          <Route path='/Petlog' element={<Petlog />} />
        </Routes>
      </main>
      </Router>
    </div>
  );
}

export default App;
