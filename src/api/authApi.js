import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users/';

// Fonction pour l'inscription (inchangée )
const register = (email, password) => {
  return axios.post(API_URL + 'register', {
    email,
    password,
  });
};

// NOUVELLE fonction pour la connexion
const login = (email, password) => {
  return axios.post(API_URL + 'login', {
    email,
    password,
  });
};

const authApi = {
  register,
  login, // On ajoute la nouvelle fonction à notre objet
};

export default authApi;
