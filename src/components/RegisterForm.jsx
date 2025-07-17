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
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Créer un compte</h2>
      
      {/* On ajoute des zones pour afficher les messages */}
      {message && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">{message}</div>}
      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Adresse Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="votre.email@exemple.com"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email} // On lie l'input à notre état
            onChange={(e) => setEmail(e.target.value)} // On met à jour l'état quand l'utilisateur tape
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            placeholder="******************"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            value={password} // On lie l'input à notre état
            onChange={(e) => setPassword(e.target.value)} // On met à jour l'état
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            S'inscrire
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
