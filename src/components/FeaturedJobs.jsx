import React, { useState, useEffect } from 'react';
import JobCard from './JobCard'; // On s'assure que le chemin est correct
import jobApi from '../api/jobApi';

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFeaturedJobs = async () => {
      try {
        const response = await jobApi.getAllJobs();
        // On ne garde que les 3 premières offres pour la page d'accueil
        setJobs(response.data.slice(0, 3));
      } catch (err) {
        setError('Impossible de charger les offres populaires.');
      }
      setLoading(false);
    };

    fetchFeaturedJobs();
  }, []); // Ne s'exécute qu'une seule fois

  if (loading) {
    return <p className="text-center py-8">Chargement des offres...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 py-8">{error}</p>;
  }

  return (
    <section className="bg-brand-gray-light py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-brand-gray-dark mb-8">
          Offres à la Une
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* ==================== LIGNE CORRIGÉE ==================== */}
          {jobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
          {/* ======================================================== */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
