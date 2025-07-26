import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import JobCard from '../components/JobCard';
import jobApi from '../api/jobApi';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({
    query: searchParams.get('query') || '',
    country: searchParams.get('country') || '',
  });

  const performSearch = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await jobApi.getAllJobs(filters);
      setJobs(response.data);
    } catch (err) {
      setError('Une erreur est survenue lors de la recherche.');
      console.error("Erreur dans SearchPage:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    performSearch();
  }, [searchParams]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams(filters);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Formulaire de recherche */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <form onSubmit={handleSubmit}>
          {/* ... (le code du formulaire reste identique) ... */}
        </form>
      </div>

      {/* Affichage des résultats */}
      <div>
        {loading && <p className="text-center">Recherche en cours...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading && !error && (
          jobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map(job => (
                <JobCard key={job.id} job={job} />
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
