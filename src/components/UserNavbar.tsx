import { NavLink } from "react-router-dom";
import './Navbar.css'

const UserNavbar = () => {
  return (
    <nav className="user-navbar-container">
      <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
      <NavLink to="/create-passenger" className={({ isActive }) => isActive ? "active-link" : ""}>Create Passenger</NavLink>
      <NavLink to="/create-address" className={({ isActive }) => isActive ? "active-link" : ""}>Create Address</NavLink>
      <NavLink to="/create-luggage" className={({ isActive }) => isActive ? "active-link" : ""}> Create Luggage</NavLink>
    </nav>
  );
}

export default UserNavbar;