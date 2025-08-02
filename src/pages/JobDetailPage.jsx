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
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-6 md:p-12">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-2xl border border-gray-100">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{job.title}</h1>
            <p className="text-xl text-gray-600 mb-1 font-medium">{job.company}</p>
            <p className="text-md text-gray-500 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {job.location}
            </p>
          </div>

          <a 
            href={job.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block w-full text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-8 rounded-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl mb-8"
          >
            Postuler sur le site d'origine
          </a>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Description du poste
            </h2>
            <div 
              className="prose max-w-none text-gray-700 leading-relaxed" 
              dangerouslySetInnerHTML={{ __html: job.description || "Description non disponible." }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
