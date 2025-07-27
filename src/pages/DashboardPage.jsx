import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const { user } = useAuth();

  // Sécurité : si les infos de l'utilisateur ne sont pas encore chargées, on affiche un message.
  if (!user) {
    return (
      <div className="container mx-auto p-6 text-center">
        <p>Chargement de vos informations...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 flex-grow">
      <div className="container mx-auto p-6 md:p-12">
        {/* Message de bienvenue */}
        <h1 className="text-3xl md:text-4xl font-bold text-brand-gray-dark mb-2">
          Bienvenue, <span className="text-brand-orange">{user.email}</span> !
        </h1>
        <p className="text-lg text-brand-gray mb-10">
          C'est votre espace personnel pour gérer votre recherche d'emploi à l'international.
        </p>

        {/* Grille de cartes d'information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Carte 1 : Statut de l'abonnement */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-brand-gray-dark mb-4">Votre Abonnement</h2>
            <p className="text-brand-gray mb-1">Statut : <span className="font-semibold text-green-600">Actif (Simulation)</span></p>
            <p className="text-brand-gray">Plan : <span className="font-semibold">Carrière (Simulation)</span></p>
            {/* Plus tard, nous afficherons ici les vraies données de l'abonnement */}
            <Link to="/pricing" className="mt-4 inline-block text-brand-orange hover:underline font-semibold">
              Gérer l'abonnement
            </Link>
          </div>

          {/* Carte 2 : Raccourci de recherche */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
            <h2 className="text-xl font-bold text-brand-gray-dark mb-4">Prêt à trouver votre prochain poste ?</h2>
            <p className="text-brand-gray mb-4">Des milliers d'opportunités vous attendent.</p>
            <Link to="/search" className="w-full bg-brand-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors duration-300">
              Lancer une recherche
            </Link>
          </div>

          {/* Carte 3 : Aide et Support (pour plus tard) */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-brand-gray-dark mb-4">Besoin d'aide ?</h2>
            <p className="text-brand-gray">Consultez notre FAQ ou contactez notre support pour toute question sur votre recherche ou votre candidature.</p>
            <Link to="/faq" className="mt-4 inline-block text-brand-orange hover:underline font-semibold">
              Consulter la FAQ
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
