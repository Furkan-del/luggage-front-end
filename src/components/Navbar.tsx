import { NavLink } from "react-router-dom";
import './Navbar.css'
import HomePage from "./HomePage";
 const NavBar =  () => {
  return (
    <nav className="navbar-container">
      <NavLink to="/">
  HomePage
      </NavLink>
      <NavLink to="/createFlight">Create Flight</NavLink>
      <NavLink to="/luggages">Luggages</NavLink>
      <NavLink to="/flights">Flights</NavLink>
      <NavLink to="/customers">Customers</NavLink>
    </nav>
  );
}

export default NavBar;


