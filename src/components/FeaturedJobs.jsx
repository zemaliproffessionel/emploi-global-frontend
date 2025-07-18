import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import jobApi from '../api/jobApi'; // On importe notre nouveau "téléphone"

const FeaturedJobs = () => {
  // On crée des états pour stocker les offres, et gérer le chargement/erreurs
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect se lance automatiquement au chargement du composant
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await jobApi.getAllJobs();
        // On ne garde que les 4 premières offres pour la page d'accueil
        setJobs(response.data.slice(0, 4)); 
        setLoading(false);
      } catch (err) {
        setError('Impossible de charger les offres d\'emploi.');
        setLoading(false);
      }
    };

    fetchJobs();
  }, []); // Le tableau vide signifie "ne lancer qu'une seule fois"

  // Affichage pendant le chargement
  if (loading) {
    return <div className="text-center py-12">Chargement des offres...</div>;
  }

  // Affichage en cas d'erreur
  if (error) {
    return <div className="text-center py-12 text-red-500">{error}</div>;
  }

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Les dernières offres d'emploi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {jobs.map((job) => (
            <JobCard 
              key={job.id}
              title={job.title}
              company={job.company}
              location={job.location}
              // On va essayer de deviner le drapeau à partir du pays
              countryFlag={job.country === 'France' ? '🇫🇷' : job.country === 'Canada' ? '🇨🇦' : '🇪🇸'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
