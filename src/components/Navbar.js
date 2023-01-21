import { Link } from "react-router-dom";
import './navbar.css';

function Navbar () {
    return(
        <nav className="nav">
            <li>
                <Link to='/'>Home</Link>
                <Link to='/registros'>Registros</Link>
                
            </li>
        </nav>
    )
}

export default Navbar;