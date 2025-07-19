import axios from 'axios';

// L'adresse de notre backend pour les paiements
const API_URL = 'https://emploi-global-backend.onrender.com/api/payments/';
// Fonction pour récupérer tous les paiements
const getPayments = ( ) => {
  // Plus tard, on ajoutera le token de l'admin ici
  return axios.get(API_URL);
};

// Fonction pour valider un paiement
const validatePayment = (paymentId) => {
  return axios.put(API_URL + `${paymentId}/validate`);
};

const adminApi = {
  getPayments,
  validatePayment,
};

export default adminApi;
