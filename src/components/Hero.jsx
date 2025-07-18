import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [title, setTitle] = useState('');
  const [country, setCountry] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // On redirige vers la page de recherche en passant les filtres dans l'URL
    navigate(`/search?title=${title}&country=${country}`);
  };

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Votre Avenir International Commence Ici.
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          La plateforme de confiance pour les talents algériens cherchant à travailler au Canada, en France et en Espagne.
        </p>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-4 flex flex-col md:flex-row gap-4">
          <input 
            type="text" 
            placeholder="Quel métier ?"
            className="flex-grow p-3 border rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <select 
            className="p-3 border rounded-md"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Quel pays ?</option>
            <option value="France">France</option>
            <option value="Canada">Canada</option>
            <option value="Espagne">Espagne</option>
          </select>
          <button 
            onClick={handleSearch}
            className="bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700"
          >
            Rechercher
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
