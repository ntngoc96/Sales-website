import { Redirect } from 'react-router-dom';

export const UserService = {
  login,
  logout,
}

function login(aid,password) {
  
}

function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  // eslint-disable-next-line no-restricted-globals
  location.reload(true);
}