import React from 'react';

const JobCard = ({ title, company, location, countryFlag }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{company}</p>
      <div className="flex items-center mt-4">
        <span className="text-2xl mr-2">{countryFlag}</span>
        <p className="text-gray-500">{location}</p>
      </div>
      <button className="mt-6 w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700">
        Voir les détails
      </button>
    </div>
  );
};

export default JobCard;
