import './styles.css';
import Login from '../Login/Login'  
import navBar from '../navBar/Navbar'; 

function Home() {
    return (
        <div>
            <div id="welcome">
        <h1>Clinic Dashboard</h1>
        </div>
        <div>
        </div>
        <div>
            <Login />
        </div>
        </div>
    )
}

export default Home