import React from 'react';
import { Link } from 'react-router-dom';

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
 );

// On accepte un seul objet "job" pour la simplicité
const JobCard = ({ job }) => {
  // Sécurité : si job n'existe pas ou n'a pas d'ID, on n'affiche rien.
  if (!job || !job.id) {
    return null;
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col">
      <h3 className="font-bold text-lg text-gray-800 mb-2">
        {job.title || 'Titre non disponible'}
      </h3>
      <p className="text-gray-600 font-medium mb-3">
        {job.company || 'Entreprise non spécifiée'}
      </p>
      <div className="flex items-center text-gray-500 mb-4">
        <LocationIcon />
        <span>{job.location || 'Lieu non spécifié'}</span>
      </div>
      <div className="flex-grow"></div>
      <Link
        to={`/job/${job.id}`}
        className="mt-4 text-center bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300"
      >
        Voir les détails
      </Link>
    </div>
  );
};

export default JobCard;
