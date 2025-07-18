import axios from 'axios';

// L'adresse de notre backend
const API_URL = 'http://localhost:5000/api/jobs/';

// Fonction pour récupérer toutes les offres (avec filtres optionnels )
const getAllJobs = (params = {}) => {
  return axios.get(API_URL, { params });
};

const jobApi = {
  getAllJobs,
};
// ... (code existant) ...
const getJobById = (id) => {
  return axios.get(API_URL + id);
};

const jobApi = {
  getAllJobs,
  getJobById, // On ajoute la nouvelle fonction
};

export default jobApi;
