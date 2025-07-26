import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import JobCard from '../components/JobCard';
import jobApi from '../api/jobApi';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // États pour les champs du formulaire
  const [query, setQuery] = useState(searchParams.get('query') || '');
  const [country, setCountry] = useState(search_params.get('country') || 'France');

  const fetchJobs = async (params) => {
    setLoading(true);
    setError('');
    try {
      const response = await jobApi.getAllJobs(params);
      setJobs(response.data);
    } catch (err) {
      setError('Une erreur est survenue lors de la recherche.');
    }
    setLoading(false);
  };

  // Lancer la recherche au premier chargement de la page si des paramètres sont dans l'URL
  useEffect(() => {
    const initialParams = {
      query: searchParams.get('query'),
      country: searchParams.get('country')
    };
    if (initialParams.country) { // On ne cherche que si un pays est défini
      fetchJobs(initialParams);
    }
  }, []); // Ne s'exécute qu'une fois

  const handleSearch = (e) => {
    e.preventDefault();
    const params = { query, country };
    setSearchParams(params); // Met à jour l'URL
    fetchJobs(params); // Lance la recherche avec les bons paramètres
  };

  return (
    <div className="container mx-auto p-6">
      {/* Le formulaire de recherche reste identique */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <form onSubmit={handleSearch}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label htmlFor="query" className="block text-sm font-medium text-gray-700">Métier ou mot-clé</label>
              <input
                type="text"
                id="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ex: Développeur, Marketing..."
              />
            </div>
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Pays</label>
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="France">France</option>
                <option value="Canada">Canada</option>
                <option value="Espagne">Espagne</option>
                <option value="Portugal">Portugal</option>
                <option value="Allemagne">Allemagne</option>
                <option value="Italie">Italie</option>
                <option value="Belgique">Belgique</option>
              </select>
            </div>
          </div>
          <div className="text-right mt-4">
            <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-700">
              Rechercher
            </button>
          </div>
        </form>
      </div>

      {/* Affichage des résultats */}
      <div>
        {loading && <p className="text-center">Recherche en cours...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading && !error && (
          jobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* ==================== LIGNE CORRIGÉE ==================== */}
              {jobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
              {/* ======================================================== */}
            </div>
          ) : (
            <p className="text-center text-gray-500">Aucune offre ne correspond à votre recherche.</p>
          )
        )}
      </div>
    </div>
  );
};

export default SearchPage;
  
