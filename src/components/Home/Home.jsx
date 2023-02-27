import './styles.css';
import Login from '../Login/Login'  
import NavbarComp from '../navBar/NavbarComp'; 

function Home() {
    return (
        <div>
            <div id="welcome">
        <h1>Clinic Dashboard</h1>
        </div>
        <div>
        </div>
        <div>
            <NavbarComp />
            <Login />
        </div>
        </div>
    )
}

export default Home