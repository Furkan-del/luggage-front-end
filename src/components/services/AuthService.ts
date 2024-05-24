import { useNavigate } from 'react-router-dom';
import  LoginRequest  from '../types/LoginRequest';
import  LoginResponse  from '../types/LoginResponse'; 
import axios from 'axios';

const API_URL = 'http://localhost:8080/auth/';

const login = async (username: string, password: string): Promise<LoginResponse> => {
  const requestData: LoginRequest = {
    username,
    password
  };

  const response = await axios.post<any>(API_URL + 'login', requestData);
  if (response.data.token) {
    console.log(response.data.token,"response Data Token")
    localStorage.setItem('token', response.data.token);
  }
  console.log(response.data,"response Data")
  return response.data;
};

const logout = (): void => {
  const navigate = useNavigate();
  try {
    axios.get(API_URL+'logout', { withCredentials: true });
    alert('Logout successful');
    navigate('/login');
  } catch (error) {
    console.error('There was an error logging out!', error);
  }

  localStorage.removeItem('token');
};

export default {
  login,
  logout
};