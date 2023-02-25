import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import "../navBar/styles.css";


const navBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
      <div className="nav-elements">
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
          </div>
      </div>
    </nav>
  )
}

export default navBar;
