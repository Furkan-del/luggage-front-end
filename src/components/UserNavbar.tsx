
import { NavLink } from 'react-router-dom';
import './UserNavbar.css'; 

const UserNavbar = () => {
  return (
    <nav className="navbar-container">
      <NavLink to="/auth/:userId/flights">Home</NavLink>
      <NavLink to="flights/:flightId/passengers">Create Passenger</NavLink>
      <NavLink to="flights/:flightId/passengers/:passengerId/addresses"> Add Address</NavLink>
      <NavLink to="auth/flights/:flightId/passengers/:passengerId/luggages"> Add Luggage</NavLink>
      <NavLink to="auth/my-profile"> User Profile</NavLink>
      <NavLink to="auth/editprofile"> Edit Profile</NavLink>
    </nav>
  );
}

export default UserNavbar;