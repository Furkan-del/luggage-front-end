
import { NavLink } from 'react-router-dom';
import './UserNavbar.css'; 

const UserNavbar = () => {
  return (
    <nav className="navbar-container">
      <NavLink to="/userside/">Home</NavLink>
      <NavLink to="/userside/createPassenger">Create Passenger</NavLink>
      <NavLink to="/userside/address"> Add Address</NavLink>
      <NavLink to="/userside/:flighId/passengers/:passengerId/luggages"> Add Luggage</NavLink>
      <NavLink to="auth/my-profile"> User Profile</NavLink>
      <NavLink to="auth/editprofile"> Edit Profile</NavLink>
    </nav>
  );
}

export default UserNavbar;