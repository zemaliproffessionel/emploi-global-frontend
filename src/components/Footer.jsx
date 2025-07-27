import React from 'react';
import { Link } from 'react-router-dom';

// Le logo, version simplifiée pour le footer
const FooterLogo = () => (
  <div className="flex items-center space-x-2">
    <svg className="h-7 w-7 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
    </svg>
    <span className="font-bold text-xl text-white">
      Emploi<span className="text-brand-orange">Global</span>
    </span>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-brand-gray-dark text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Colonne 1: Logo et description */}
          <div className="md:col-span-2">
            <FooterLogo />
            <p className="mt-4 max-w-md">
              Votre passerelle vers des opportunités de carrière internationales. Nous aidons les talents algériens à réaliser leurs projets professionnels à l'étranger.
            </p>
          </div>

          {/* Colonne 2: Liens rapides */}
          <div>
            <h3 className="font-bold text-white uppercase mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/search" className="hover:text-brand-orange transition-colors">Rechercher une offre</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-orange transition-colors">Nos Abonnements</Link></li>
              <li><Link to="/dashboard" className="hover:text-brand-orange transition-colors">Mon Compte</Link></li>
            </ul>
          </div>

          {/* Colonne 3: Légal */}
          <div>
            <h3 className="font-bold text-white uppercase mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="hover:text-brand-orange transition-colors">Conditions d'utilisation</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-orange transition-colors">Politique de confidentialité</Link></li>
              <li><Link to="/faq" className="hover:text-brand-orange transition-colors">FAQ</Link></li>
            </ul>
          </div>

        </div>

        {/* Ligne de séparation et copyright */}
        <hr className="my-8 border-gray-700" />
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EmploiGlobal. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
