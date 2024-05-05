import React from 'react';
import { NavLink } from 'react-router-dom';
import './UserNavbar.css'; 

const UserNavbar = () => {
  return (
    <nav className="navbar-container">
      <NavLink to="/userside/">Home</NavLink>
      <NavLink to="/userside/createPassenger">Create Passenger</NavLink>
      <NavLink to="/userside/address"> Add Address</NavLink>
      <NavLink to="/userside/luggage"> Add Luggage</NavLink>
    </nav>
  );
}

export default UserNavbar;