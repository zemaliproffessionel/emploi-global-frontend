import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          EmploiGlobal
        </div>
        
        {/* Liens de navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#" className="text-gray-600 hover:text-blue-600">Accueil</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Trouver un emploi</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Nos Offres</a>
        </div>
        
        {/* Boutons d'action */}
        <div className="hidden md:flex items-center space-x-4">
           <a href="#" className="text-gray-600 hover:text-blue-600">Se connecter</a>
           <a href="#" className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600">
            S'inscrire
           </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
