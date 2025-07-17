import React from 'react';
import JobCard from './JobCard';

// Données de test. Plus tard, elles viendront de notre backend.
const jobs = [
  { title: 'Développeur Web Fullstack', company: 'Tech Solutions Inc.', location: 'Montréal, Canada', countryFlag: '🇨🇦' },
  { title: 'Infirmier / Infirmière', company: 'Hôpital Central de Lyon', location: 'Lyon, France', countryFlag: '🇫🇷' },
  { title: 'Chef de Projet Marketing', company: 'Innovate Digital', location: 'Barcelone, Espagne', countryFlag: '🇪🇸' },
  { title: 'Ingénieur en Mécanique', company: 'Automotive Experts', location: 'Paris, France', countryFlag: '🇫🇷' },
];

const FeaturedJobs = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Les dernières offres d'emploi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {jobs.map((job, index) => (
            <JobCard 
              key={index}
              title={job.title}
              company={job.company}
              location={job.location}
              countryFlag={job.countryFlag}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
