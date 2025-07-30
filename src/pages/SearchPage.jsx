import React, { useState, useEffect } from 'react';
import JobCard from '../components/JobCard';
import jobApi from '../api/jobApi';

const SearchPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [country, setCountry] = useState('Tous les pays');

  const performSearch = async (searchParams) => {
    console.log('[Frontend SearchPage] Lancement de la recherche avec les paramètres :', searchParams);
    setLoading(true);
    setError('');
    try {
      const response = await jobApi.getAllJobs(searchParams);
      console.log('[Frontend SearchPage] Réponse reçue du backend :', response.data);
      setJobs(response.data);
    } catch (err) {
      console.error('[Frontend SearchPage] ERREUR lors de l\'appel API :', err);
      setError('Une erreur est survenue lors de la recherche.');
    }
    setLoading(false);
  };

  useEffect(() => {
    performSearch({}); // Recherche initiale sans filtres
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const params = {};
    if (query) params.query = query;
    if (country !== 'Tous les pays') params.country = country;
    performSearch(params);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Le formulaire de recherche reste le même */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <form onSubmit={handleSearch}>
          {/* ... (le JSX du formulaire ne change pas) ... */}
        </form>
      </div>
      {/* La section d'affichage reste la même */}
      <div>
        {loading && <p>Chargement...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && (
          jobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map(job => <JobCard key={job.id} {...job} />)}
            </div>
          ) : (
            <p>Aucune offre ne correspond à votre recherche.</p>
          )
        )}
      </div>
    </div>
  );
};

export default SearchPage;
