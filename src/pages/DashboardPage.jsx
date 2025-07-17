import React from 'react';
import { useAuth } from '../context/AuthContext'; // On importe notre hook

const DashboardPage = () => {
  // On lit les informations de l'utilisateur depuis notre "tableau d'affichage"
  const { user, logout } = useAuth();

  return (
    <div className="container mx-auto py-12 text-center">
      <h1 className="text-3xl font-bold">Tableau de Bord</h1>
      {user ? (
        <div>
          <p className="mt-4 text-xl">
            Bienvenue, <span className="font-semibold">{user.email}</span> !
          </p>
          <button 
            onClick={logout}
            className="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Se déconnecter
          </button>
        </div>
      ) : (
        <p>Chargement des informations...</p>
      )}
    </div>
  );
};

export default DashboardPage;
