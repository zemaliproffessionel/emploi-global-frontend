import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // Il regarde le "tableau d'affichage" pour voir si un utilisateur est connecté

  if (!user) {
    // Si personne n'est connecté, il redirige vers la page de connexion
    return <Navigate to="/login" />;
  }

  // Si un utilisateur est connecté, il laisse passer et affiche la page demandée
  return children;
};

export default ProtectedRoute;
