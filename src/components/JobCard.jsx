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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-orange-600 transition-colors duration-200">{title}</h3>
        <p className="text-gray-600 mb-1 font-medium">{company}</p>
        <p className="text-gray-500 text-sm flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {location}
        </p>
      </div>
      <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100">
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
