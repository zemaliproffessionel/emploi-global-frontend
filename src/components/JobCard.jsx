import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ jobId, title, company, location, countryFlag }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{company}</p>
        <div className="flex items-center mt-4">
          <span className="text-2xl mr-2">{countryFlag}</span>
          <p className="text-gray-500">{location}</p>
        </div>
      </div>
      <Link to={`/job/${jobId}`} className="mt-6 block w-full text-center bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700">
        Voir les détails
      </Link>
    </div>
  );
};

export default JobCard;
