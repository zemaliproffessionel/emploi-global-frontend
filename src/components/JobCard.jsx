import React from 'react';
import { Link } from 'react-router-dom';

// Un petit composant pour afficher une icône simple
const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5 text-brand-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
 );

const JobCard = ({ job }) => {
  // On s'assure que job existe pour éviter les erreurs
  if (!job) {
    return null;
  }

  return (
    // Le conteneur principal de la carte
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col">
      
      {/* Section du haut : Titre et Logo (simulé) */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-bold text-lg text-brand-gray-dark group-hover:text-brand-orange">
          {job.title || 'Titre non disponible'}
        </h3>
        {/* Ici, on pourrait mettre un logo d'entreprise plus tard */}
      </div>

      {/* Nom de l'entreprise */}
      <p className="text-brand-gray-dark font-medium mb-2">
        {job.company || 'Entreprise non spécifiée'}
      </p>

      {/* Localisation avec icône */}
      <div className="flex items-center text-brand-gray mb-4">
        <LocationIcon />
        <span>{job.location || 'Lieu non spécifié'}</span>
      </div>

      {/* Espace pour grandir et pousser le bouton vers le bas */}
      <div className="flex-grow"></div>

      {/* Bouton "Voir les détails" */}
      <Link
        to={`/job/${job.id}`}
        className="mt-4 inline-block text-center bg-brand-orange text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300"
      >
        Voir les détails
      </Link>
    </div>
  );
};

export default JobCard;
