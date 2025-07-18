import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import jobApi from '../api/jobApi'; // Nous devrons le mettre à jour

const JobDetailPage = () => {
  const { id } = useParams(); // Récupère l'ID de l'offre depuis l'URL
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        // Nous ajouterons la fonction getJobById à jobApi
        const response = await jobApi.getJobById(id); 
        setJob(response.data);
      } catch (error) {
        console.error("Erreur:", error);
      }
      setLoading(false);
    };
    fetchJob();
  }, [id]);

  if (loading) return <p className="text-center py-12">Chargement de l'offre...</p>;
  if (!job) return <p className="text-center py-12">Offre non trouvée.</p>;

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold">{job.title}</h1>
        <p className="text-xl text-blue-600 mt-2">{job.company}</p>
        <p className="text-gray-600 mt-1">{job.location}</p>
        <hr className="my-6" />
        <h2 className="text-2xl font-semibold mb-4">Description du poste</h2>
        <p className="text-gray-700 whitespace-pre-wrap">{job.description || "Description non disponible."}</p>
        <a 
          href={job.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-orange-500 text-white font-bold py-3 px-6 rounded-md hover:bg-orange-600"
        >
          Postuler sur le site d'origine
        </a>
      </div>
    </div>
  );
};

export default JobDetailPage;
