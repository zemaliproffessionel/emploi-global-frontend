import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-6 text-center">
        <p>© 2025 EmploiGlobal. Tous droits réservés.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-orange-500">À propos</a>
          <a href="#" className="hover:text-orange-500">Contact</a>
          <a href="#" className="hover:text-orange-500">FAQ</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
