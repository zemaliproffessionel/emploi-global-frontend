import React, { useState } from 'react';
import authApi from '../api/authApi'; // On importe notre "téléphone"

const RegisterForm = () => {
  // On utilise des "états" pour mémoriser ce que l'utilisateur tape
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // États pour gérer les messages à l'utilisateur
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Cette fonction est appelée quand l'utilisateur soumet le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche la page de se recharger
    
    // On réinitialise les messages
    setMessage('');
    setError('');

    try {
      // On utilise notre "téléphone" pour appeler le backend
      const response = await authApi.register(email, password);
      
      // Si tout va bien, on affiche le message de succès du backend
      setMessage(response.data.message);

    } catch (err) {
      // S'il y a une erreur, on affiche le message d'erreur du backend
      setError(err.response?.data?.message || 'Une erreur est survenue.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-2xl border border-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Créer un compte</h2>
      
      {/* Messages d'état améliorés */}
      {message && <div className="bg-green-50 border-l-4 border-green-500 text-green-700 px-4 py-3 rounded-lg relative mb-6">{message}</div>}
      {error && <div className="bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded-lg relative mb-6">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
            Adresse Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="votre.email@exemple.com"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 hover:border-gray-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            placeholder="******************"
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
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
