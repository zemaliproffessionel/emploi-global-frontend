import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Le contenu principal de la page viendra ici */}
      <main className="flex-grow container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Votre Avenir International Commence Ici.
        </h1>
        <p className="text-center text-gray-600 mt-4">
          La plateforme de confiance pour les talents algériens cherchant à travailler au Canada, en France et en Espagne.
        </p>
      </main>

      <Footer />
    </div>
  );
}

export default App;
