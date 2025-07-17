import React, { useState } from 'react';
import authApi from '../api/authApi'; // On réutilise notre "téléphone"

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      // On appellera la fonction de connexion de notre "téléphone" ici
      const response = await authApi.login(email, password);
      
      setMessage(response.data.message);
      // Plus tard, on stockera le "token" reçu pour garder l'utilisateur connecté
      console.log('Token reçu:', response.data.token);

    } catch (err) {
      setError(err.response?.data?.message || 'Une erreur est survenue.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Se connecter</h2>
      
      {message && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">{message}</div>}
      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="login-email">
            Adresse Email
          </label>
          <input
            type="email"
            id="login-email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="login-password">
            Mot de passe
          </label>
          <input
            type="password"
            id="login-password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Se connecter
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
