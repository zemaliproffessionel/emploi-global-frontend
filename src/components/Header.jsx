import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          EmploiGlobal
        </Link>
        
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-gray-600 hover:text-blue-600">Accueil</Link>
          {/* Ce lien pointera vers la page de recherche plus tard */}
          <Link to="/search" className="text-gray-600 hover:text-blue-600">Trouver un emploi</Link>
          <Link to="/pricing" className="text-gray-600 hover:text-blue-600">Nos Offres</Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
           <Link to="/login" className="text-gray-600 hover:text-blue-600">Se connecter</Link>
           <Link to="/register" className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600">
            S'inscrire
           </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
