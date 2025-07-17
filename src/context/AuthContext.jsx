import React, { createContext, useState, useContext } from 'react';
import authApi from '../api/authApi';

// 1. On crée le contexte (le tableau d'affichage)
const AuthContext = createContext();

// 2. On crée le "Fournisseur" de contexte. C'est lui qui gère le tableau.
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Au début, personne n'est connecté

  // Fonction pour la connexion
  const login = async (email, password) => {
    const response = await authApi.login(email, password);
    // On stocke le token dans le "localStorage" du navigateur pour s'en souvenir
    localStorage.setItem('userToken', response.data.token);
    // On met à jour notre tableau d'affichage avec les infos de l'utilisateur
    setUser(response.data.user);
    return response;
  };

  // Fonction pour la déconnexion
  const logout = () => {
    localStorage.removeItem('userToken');
    setUser(null); // On efface les infos du tableau
  };

  // On met à disposition les informations (user) et les actions (login, logout)
  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// 3. On crée un "hook" personnalisé pour lire facilement le tableau d'affichage
export const useAuth = () => {
  return useContext(AuthContext);
};
