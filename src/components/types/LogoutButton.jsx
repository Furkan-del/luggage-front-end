import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:8080/auth/logout', { withCredentials: true });
      alert('Logout successful');
      navigate('/login');
    } catch (error) {
      console.error('There was an error logging out!', error);
    }
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default  LogoutButton;
