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
      {/* Formulaire de recherche */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <form onSubmit={handleSearch}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Rechercher un emploi..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Tous les pays">Tous les pays</option>
                <option value="France">France</option>
                <option value="Canada">Canada</option>
                <option value="Allemagne">Allemagne</option>
                <option value="Suisse">Suisse</option>
                <option value="Belgique">Belgique</option>
              </select>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Rechercher
            </button>
          </div>
        </form>
      </div>

      {/* Affichage des résultats */}
      <div>
        {loading && <p className="text-center text-gray-600">Chargement...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}
        {!loading && !error && (
          jobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map(job => <JobCard key={job.id} id={job.id} title={job.title} company={job.company} location={job.location} />)}
            </div>
          ) : (
            <p className="text-center text-gray-600">Aucune offre ne correspond à votre recherche.</p>
          )
        )}
      </div>
    </div>
  );
};

export default SearchPage;
