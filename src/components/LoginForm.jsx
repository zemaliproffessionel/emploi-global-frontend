import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // On importe notre hook
import { useNavigate } from 'react-router-dom'; // Pour rediriger l'utilisateur

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const { login } = useAuth(); // On récupère la fonction login du contexte
  const navigate = useNavigate(); // Outil pour la redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password); // On appelle la fonction du contexte
      navigate('/dashboard'); // On redirige vers le tableau de bord après connexion
    } catch (err) {
      setError(err.response?.data?.message || 'Une erreur est survenue.');
    }
  };

  // Le reste du JSX (la partie visuelle du formulaire) ne change pas
  // ... (le code JSX existant reste ici)
};

export default LoginForm;
