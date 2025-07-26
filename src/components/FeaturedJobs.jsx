import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import jobApi from '../api/jobApi';

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  // ... (le reste de la logique de fetch reste la même) ...
  useEffect(() => {
    const fetchFeaturedJobs = async () => {
      try {
        const response = await jobApi.getAllJobs();
        setJobs(response.data.slice(0, 3));
      } catch (err) {
        console.error("Erreur dans FeaturedJobs:", err);
      }
    };
    fetchFeaturedJobs();
  }, []);

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Offres à la Une
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
