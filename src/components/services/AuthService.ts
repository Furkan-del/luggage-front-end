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
    localStorage.setItem('token', response.data.token);
  }
  return response.data;
};

const logout = (): void => {
  localStorage.removeItem('token');
};

export default {
  login,
  logout
};