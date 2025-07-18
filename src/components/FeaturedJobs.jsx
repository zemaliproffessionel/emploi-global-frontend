import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import jobApi from '../api/jobApi';

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await jobApi.getAllJobs();
        setJobs(response.data.slice(0, 4)); 
        setLoading(false);
      } catch (err) {
        setError('Impossible de charger les offres d\'emploi.');
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  if (loading) return <div className="text-center py-12">Chargement des offres...</div>;
  if (error) return <div className="text-center py-12 text-red-500">{error}</div>;

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
              jobId={job.id} // <-- LIGNE MISE À JOUR
              title={job.title}
              company={job.company}
              location={job.location}
              countryFlag={job.country === 'France' ? '🇫🇷' : job.country === 'Canada' ? '🇨🇦' : '🇪🇸'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;```
4.  Cliquez sur **"Commit changes"**.

**Action de correction pour `SearchPage.jsx` :**

1.  Allez dans le dossier `src/pages`.
2.  Ouvrez `SearchPage.jsx` et cliquez sur l'icône "crayon".
3.  Remplacez **tout le contenu** par le code ci-dessous (ici aussi, on ajoute `jobId={job.id}`) :

```jsx
import React, { useState, useEffect } from 'react';
import jobApi from '../api/jobApi';
import JobCard from '../components/JobCard';

const SearchPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({ title: '', country: '' });

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
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          {/* ... (le formulaire de filtre ne change pas) ... */}
        </form>
      </div>
      <div>
        {loading ? (
          <p className="text-center">Chargement...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.length > 0 ? (
              jobs.map(job => (
                <JobCard
                  key={job.id}
                  jobId={job.id} // <-- LIGNE MISE À JOUR
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
