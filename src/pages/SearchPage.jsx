import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import JobCard from '../components/JobCard';
import jobApi from '../api/jobApi';

const countryTranslation = {
  'France': 'France', 'Canada': 'Canada', 'Espagne': 'Spain',
  'Portugal': 'Portugal', 'Allemagne': 'Germany', 'Italie': 'Italy', 'Belgique': 'Belgium',
};

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // États pour les champs du formulaire, initialisés depuis l'URL ou par défaut
  const [queryInput, setQueryInput] = useState(searchParams.get('query') || '');
  const [countryInput, setCountryInput] = useState(searchParams.get('country') || 'Tous les pays');

  // Le useEffect se déclenche à chaque changement de l'URL (searchParams)
  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError('');
          
      const currentQuery = searchParams.get('query') || '';
      const currentCountry = searchParams.get('country') || ''; // Le terme de recherche réel
          
      try {
        const response = await jobApi.getAllJobs({ query: currentQuery, country: currentCountry });
        setJobs(response.data);
      } catch (err) {
        setError('Une erreur est survenue lors de la recherche.');
      }
      setLoading(false);
    };

    fetchJobs();
  }, [searchParams]); // Dépendance cruciale : se relance quand l'URL change

  // La fonction de recherche met à jour l'URL, ce qui déclenche le useEffect
  const handleSearch = (e) => {
    e.preventDefault();
    const countryToSearch = countryInput === 'Tous les pays' ? '' : countryTranslation[countryInput] || '';
    setSearchParams({ query: queryInput, country: countryToSearch });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <form onSubmit={handleSearch}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label htmlFor="query" className="block text-sm font-medium text-gray-700">Métier ou mot-clé</label>
              <input
                type="text"
                id="query"
                value={queryInput}
                onChange={(e) => setQueryInput(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-orange focus:border-brand-orange"
                placeholder="Ex: Développeur, Marketing..."
              />
            </div>
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Pays</label>
              <select
                id="country"
                value={countryInput}
                onChange={(e) => setCountryInput(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-orange focus:border-brand-orange"
              >
                <option value="Tous les pays">Tous les pays</option>
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
            <button type="submit" className="bg-brand-orange text-white font-bold py-2 px-6 rounded-md hover:bg-orange-600 transition-colors duration-300">
              Rechercher
            </button>
          </div>
        </form>
      </div>

      <div>
        {loading && <p className="text-center text-lg font-semibold">Recherche en cours...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading && !error && (
          jobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map(job => (
                <JobCard
                  key={job.id}
                  jobId={job.id}
                  title={job.title}
                  company={job.company}
                  location={job.location}
                />
              ))}
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
