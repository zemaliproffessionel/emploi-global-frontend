import axios from 'axios';

// L'adresse de notre backend
const API_BASE_URL = import.meta.env.PROD
  ? 'https://emploi-global-backend.onrender.com/api'
  : '/api';

// Fonction pour récupérer toutes les offres (avec filtres optionnels )
const getAllJobs = (params = {}) => {
  return axios.get(`${API_BASE_URL}/jobs/`, { params });
};

// Fonction pour récupérer une seule offre par son ID
const getJobById = (id) => {
  return axios.get(`${API_BASE_URL}/jobs/${id}`);
};

// On exporte un seul objet contenant les deux fonctions
const jobApi = {
  getAllJobs,
  getJobById,
};

export default jobApi;
