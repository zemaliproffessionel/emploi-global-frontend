import axios from 'axios';

// L'adresse de notre backend (utilise le proxy Vite en développement)
const API_URL = '/api/jobs/';

// Fonction pour récupérer toutes les offres (avec filtres optionnels )
const getAllJobs = (params = {}) => {
  return axios.get(API_URL, { params });
};

// Fonction pour récupérer une seule offre par son ID
const getJobById = (id) => {
  return axios.get(API_URL + id);
};

// On exporte un seul objet contenant les deux fonctions
const jobApi = {
  getAllJobs,
  getJobById,
};

export default jobApi;
