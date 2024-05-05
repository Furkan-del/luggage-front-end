import { NavLink } from "react-router-dom";
import './Navbar.css'
import HomePage from "./HomePage";
 const NavBar =  () => {
  return (
    <nav className="navbar-container">
      <NavLink to="/backoffice">
  HomePage
      </NavLink>
      <NavLink to="/backoffice/createFlight">Create Flight</NavLink>
      <NavLink to="/backoffice/luggages">Luggages</NavLink>
      <NavLink to="/backoffice/flights">Flights</NavLink>
      <NavLink to="/backoffice/passengers">Passengers</NavLink>
    </nav>
  );
}

export default NavBar;


