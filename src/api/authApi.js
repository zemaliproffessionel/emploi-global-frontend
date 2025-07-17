import axios from 'axios';

// L'adresse de notre backend. Pour l'instant, c'est une adresse locale.
// Plus tard, ce sera l'adresse de notre serveur en ligne.
const API_URL = 'http://localhost:5000/api/users/';

// Fonction pour appeler la route d'inscription du backend
const register = (email, password ) => {
  return axios.post(API_URL + 'register', {
    email,
    password,
  });
};

const authApi = {
  register,
};

export default authApi;
