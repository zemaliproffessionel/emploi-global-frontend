import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import jobApi from '../api/jobApi';

const JobDetailPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchJob = async () => {
      try {
        setLoading(true);
        const response = await jobApi.getJobById(id);
        setJob(response.data);
      } catch (err) {
        setError('Impossible de charger les détails de l\'offre.');
      }
      setLoading(false);
    };
    fetchJob();
  }, [id]);

  if (loading) return <p className="text-center p-10">Chargement de l'offre...</p>;
  if (error) return <p className="text-center text-red-500 p-10">{error}</p>;
  if (!job) return <p className="text-center p-10">Offre non trouvée.</p>;

  return (
    <div className="bg-white">
      <div className="container mx-auto p-6 md:p-12">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-brand-gray-dark">{job.title}</h1>
          <p className="text-xl text-brand-gray mt-2">{job.company}</p>
          <p className="text-md text-gray-500 mb-6">{job.location}</p>

          <a 
            href={job.url} 
            target="_blank" 
            rel="noopener noreferrer" // On s'assure que c'est bien là
            className="inline-block w-full text-center bg-brand-orange text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300 mb-8"
          >
            Postuler sur le site d'origine
          </a>

          <h2 className="text-2xl font-bold text-brand-gray-dark mb-4">Description du poste</h2>
          <div 
            className="prose max-w-none text-brand-gray" 
            dangerouslySetInnerHTML={{ __html: job.description || "Description non disponible." }} 
          />
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
