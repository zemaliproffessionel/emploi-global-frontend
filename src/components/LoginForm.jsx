import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      // Redirige vers une page de tableau de bord après la connexion
      // Nous créerons cette page plus tard.
      navigate('/dashboard'); 
    } catch (err) {
      setError(err.response?.data?.message || 'Une erreur est survenue.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-2xl border border-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Connectez-vous à votre compte</h2>
      
      {error && <div className="bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded-lg relative mb-6">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="login-email">
            Email
          </label>
          <input
            type="email"
            id="login-email"
            placeholder="Adresse email"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 hover:border-gray-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="login-password">
            Mot de passe
          </label>
          <input
            type="password"
            id="login-password"
            placeholder="Mot de passe"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 hover:border-gray-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
