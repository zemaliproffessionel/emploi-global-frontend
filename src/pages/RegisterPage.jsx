import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authApi from '../api/authApi'; // Assurez-vous que le chemin est correct
import AuthForm from '../components/AuthForm';

const RegisterPage = () => {
  const [name, setName] = useState(''); // Ajout du champ nom
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    try {
      // Note : notre API backend actuelle n'utilise pas le champ "name",
      // mais nous le gardons pour une future amélioration.
      const response = await authApi.register(email, password);
      setMessage(response.data.message + " Vous allez être redirigé...");
      setTimeout(() => {
        navigate('/login');
      }, 2000); // Redirection vers la page de connexion après 2 secondes
    } catch (err) {
      setError(err.response?.data?.message || 'Une erreur est survenue lors de l\'inscription.');
    }
  };

  return (
    <AuthForm
      title="Créez votre compte"
      buttonText="S'inscrire"
      onSubmit={handleSubmit}
      error={error}
      message={message}
      footerText="Vous avez déjà un compte ?"
      footerLink="/login"
    >
      {/* J'ai ajouté un champ pour le nom, pour rendre le formulaire plus complet */}
      <div>
        <label htmlFor="name" className="sr-only">Nom complet</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-brand-orange focus:border-brand-orange focus:z-10 sm:text-sm"
          placeholder="Nom complet"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email-address" className="sr-only">Email</label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-brand-orange focus:border-brand-orange focus:z-10 sm:text-sm"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password" className="sr-only">Mot de passe</label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-brand-orange focus:border-brand-orange focus:z-10 sm:text-sm"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </AuthForm>
  );
};

export default RegisterPage;
