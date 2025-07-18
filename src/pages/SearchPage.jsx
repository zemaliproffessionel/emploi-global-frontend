import React, { useState, useEffect } from 'react';
import jobApi from '../api/jobApi';
import JobCard from '../components/JobCard';

const SearchPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({ title: '', country: '' });

  // Fonction pour lancer la recherche
  const performSearch = async () => {
    setLoading(true);
    try {
      const response = await jobApi.getAllJobs(filters);
      setJobs(response.data);
    } catch (error) {
      console.error("Erreur lors de la recherche :", error);
    }
    setLoading(false);
  };

  // Lancer une recherche vide au premier chargement de la page
  useEffect(() => {
    performSearch();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    performSearch();
  };

  return (
    <div className="container mx-auto py-8">
      {/* Section des filtres */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="flex flex-col">
            <label htmlFor="title" className="font-semibold mb-1">Métier ou mot-clé</label>
            <input
              type="text"
              name="title"
              id="title"
              value={filters.title}
              onChange={handleFilterChange}
              placeholder="Développeur, Marketing..."
              className="p-2 border rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="country" className="font-semibold mb-1">Pays</label>
            <select
              name="country"
              id="country"
              value={filters.country}
              onChange={handleFilterChange}
              className="p-2 border rounded-md"
            >
              <option value="">Tous les pays</option>
              <option value="France">France</option>
              <option value="Canada">Canada</option>
              <option value="Espagne">Espagne</option>
            </select>
          </div>
          <button type="submit" className="bg-blue-600 text-white font-bold p-2 rounded-md hover:bg-blue-700 h-10">
            {loading ? 'Recherche...' : 'Rechercher'}
          </button>
        </form>
      </div>

      {/* Section des résultats */}
      <div>
        {loading ? (
          <p className="text-center">Chargement...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.length > 0 ? (
              jobs.map(job => (
                <JobCard
                  key={job.id}
                  title={job.title}
                  company={job.company}
                  location={job.location}
                  countryFlag={job.country === 'France' ? '🇫🇷' : job.country === 'Canada' ? '🇨🇦' : '🇪🇸'}
                />
              ))
            ) : (
              <p className="col-span-full text-center">Aucune offre ne correspond à votre recherche.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
