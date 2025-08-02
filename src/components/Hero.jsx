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
    <section className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('/hero-background.jpg')" }}>
      {/* Filtre sombre pour la lisibilité du texte */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      <div className="relative container mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Votre Avenir International Commence Ici
        </h1>
        <p className="text-lg md:text-xl mb-8">
          La plateforme de confiance pour les talents algériens cherchant à travailler à l'étranger.
        </p>

        {/* Barre de recherche stylisée */}
        <form onSubmit={handleSearch} className="bg-white rounded-xl shadow-2xl p-6 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-center backdrop-blur-sm">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Quel métier ?"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 hover:border-gray-300"
          />
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 hover:border-gray-300"
          >
            <option value="">Quel pays ?</option>
            <option value="France">France</option>
            <option value="Canada">Canada</option>
            <option value="Espagne">Espagne</option>
            {/* Ajoutez d'autres pays si nécessaire */}
          </select>
          <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Rechercher
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
