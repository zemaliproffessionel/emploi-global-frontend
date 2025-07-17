import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import FeaturedJobs from './components/FeaturedJobs'; // On importe la nouvelle section

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <FeaturedJobs /> {/* On ajoute la section des offres à la une */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
