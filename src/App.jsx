import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero'; // On importe notre nouveau composant

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      {/* On remplace le contenu principal par notre composant Hero */}
      <main className="flex-grow">
        <Hero />
        
        {/* Le reste du contenu de la page d'accueil viendra ici plus tard */}
        <div className="container mx-auto px-6 py-8">
           <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
             Les dernières offres d'emploi
           </h2>
           {/* Les cartes des offres d'emploi seront ajoutées ici */}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
