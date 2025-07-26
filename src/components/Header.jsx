import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Assurez-vous que ce chemin est correct

// Notre logo Avion, maintenant comme un composant réutilisable
const Logo = () => (
  <Link to="/" className="flex items-center space-x-2">
    {/* L'icône de l'avion */}
    <svg className="h-8 w-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
    </svg>
    {/* Le nom de la société avec la couleur orange */}
    <span className="font-bold text-2xl text-brand-gray-dark">
      Emploi<span className="text-brand-orange">Global</span>
    </span>
  </Link>
);

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        <div className="flex items-center space-x-4">
          <Link to="/search" className="text-brand-gray-dark hover:text-brand-orange font-medium transition-colors">
            Trouver un emploi
          </Link>
          {/* Plus tard, nous ajouterons d'autres liens ici */}

          {user ? (
            <>
              <Link to="/dashboard" className="px-4 py-2 text-sm font-semibold bg-brand-gray-light rounded-md hover:bg-gray-200">
                Mon Compte
              </Link>
              <button onClick={handleLogout} className="px-4 py-2 text-sm font-semibold bg-brand-orange text-white rounded-md hover:bg-orange-600">
                Se déconnecter
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-brand-gray-dark hover:text-brand-orange font-medium transition-colors">
                Se connecter
              </Link>
              <Link to="/register" className="ml-4 px-4 py-2 bg-brand-blue text-white rounded-md hover:bg-blue-800 transition-colors">
                S'inscrire
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
