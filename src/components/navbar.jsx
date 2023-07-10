import '../styles/navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="logo">
                <img src='Images/navLogo.svg' width="150" alt="Logo" />
            </div>
            <div className="nav_links">
            <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/movies">FAVOURTES</Link></li>
                    <li><Link to="/addfav">ADD TO FAV</Link></li>
                    <li><Link to="">LOG OUT</Link></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;
