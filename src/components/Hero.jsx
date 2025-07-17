import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Votre Avenir International Commence Ici.
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          La plateforme de confiance pour les talents algériens cherchant à travailler au Canada, en France et en Espagne.
        </p>

        {/* Barre de recherche */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-4 flex flex-col md:flex-row gap-4">
          <input 
            type="text" 
            placeholder="Quel métier ? (ex: Ingénieur, Développeur)"
            className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Quel pays ?</option>
            <option value="canada">Canada</option>
            <option value="france">France</option>
            <option value="espagne">Espagne</option>
          </select>
          <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700">
            Rechercher
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
