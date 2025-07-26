import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [query, setQuery] = useState('');
  const [country, setCountry] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // On redirige vers la page de recherche avec les filtres dans l'URL
    navigate(`/search?query=${query}&country=${country}`);
  };

  return (
    <section className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop' )" }}>
      {/* Filtre sombre pour la lisibilité du texte */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative container mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Votre Avenir International Commence Ici
        </h1>
        <p className="text-lg md:text-xl mb-8">
          La plateforme de confiance pour les talents algériens cherchant à travailler à l'étranger.
        </p>

        {/* Barre de recherche stylisée */}
        <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-lg p-4 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Quel métier ?"
            className="w-full px-4 py-3 border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange"
          />
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full px-4 py-3 border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange"
          >
            <option value="">Quel pays ?</option>
            <option value="France">France</option>
            <option value="Canada">Canada</option>
            <option value="Espagne">Espagne</option>
            {/* Ajoutez d'autres pays si nécessaire */}
          </select>
          <button type="submit" className="w-full bg-brand-orange text-white font-bold py-3 px-6 rounded-md hover:bg-orange-600 transition-colors duration-300">
            Rechercher
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
