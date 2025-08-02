import React from 'react';
import { Link } from 'react-router-dom';

// Ce composant accepte les propriétés individuelles : id, title, company, location.
// C'est la version qui correspond exactement à ce que la page de recherche (SearchPage.jsx) lui envoie.
const JobCard = ({ id, title, company, location }) => {
  
  // Sécurité : si pour une raison quelconque une offre n'a pas de titre, on ne l'affiche pas pour éviter de faire planter la page.
  if (!title) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-brand-dark-gray mb-2">{title}</h3>
        <p className="text-gray-600 mb-1">{company}</p>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
      <div className="p-6 bg-gray-50">
            <Link 
              to={`/job/${id}`} 
              className="w-full text-center block bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Voir les détails
            </Link>
      </div>
    </div>
  );
};

export default JobCard;
