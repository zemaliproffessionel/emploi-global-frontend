import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import JobCard from '../components/JobCard';
import jobApi from '../api/jobApi';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // On garde les filtres dans un seul état
  const [filters, setFilters] = useState({
    query: searchParams.get('query') || '',
    country: searchParams.get('country') || '',
  });

  // La fonction qui appelle l'API
  const performSearch = async (currentFilters) => {
    setLoading(true);
    setError('');
    try {
      const response = await jobApi.getAllJobs(currentFilters);
      setJobs(response.data);
    } catch (err) {
      setError('Une erreur est survenue lors de la recherche.');
      console.error("Erreur dans SearchPage:", err);
    }
    setLoading(false);
  };

  // Se déclenche quand l'URL change (ex: après un submit)
  useEffect(() => {
    const currentFilters = {
      query: searchParams.get('query') || '',
      country: searchParams.get('country') || '',
    };
    performSearch(currentFilters);
  }, [searchParams]);

  // Met à jour l'état des filtres quand l'utilisateur tape
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  // Gère la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams(filters); // Met à jour l'URL, ce qui déclenchera le useEffect
  };

  return (
    <div className="container mx-auto p-6">
      {/* ==================== FORMULAIRE DE RECHERCHE RÉINTRODUIT ==================== */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div className="md:col-span-2">
              <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-1">
                Métier ou mot-clé
              </label>
              <input
                type="text"
                name="query"
                id="query"
                value={filters.query}
                onChange={handleFilterChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                placeholder="Ex: Développeur, Marketing..."
              />
            </div>
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                Pays
              </label>
              <select
                name="country"
                id="country"
                value={filters.country}
                onChange={handleFilterChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="">Tous les pays</option>
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
            <button type="submit" className="bg-orange-500 text-white font-bold py-2 px-6 rounded-md hover:bg-orange-600 transition-colors duration-300">
              Rechercher
            </button>
          </div>
        </form>
      </div>
      {/* ============================================================================== */}

      {/* Affichage des résultats */}
      <div>
        {loading && <p className="text-center py-10">Recherche en cours...</p>}
        {error && <p className="text-center text-red-500 py-10">{error}</p>}
        {!loading && !error && (
          jobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-10">Aucune offre ne correspond à votre recherche.</p>
          )
        )}
      </div>
    </div>
  );
};

export default SearchPage;
