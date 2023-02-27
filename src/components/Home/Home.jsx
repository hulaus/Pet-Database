import './styles.css';
import Login from '../Login/Login'  
import NavBar from '../navBar/navbar'; 

function Home() {
    return (
        <div>
            <NavBar />
            <div id="welcome">
                <h1>Clinic Dashboard</h1>
            </div>
            <div>
                <Login />
            </div>
        </div>
    )
}

export default Home