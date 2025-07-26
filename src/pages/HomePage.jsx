import React from 'react';
import Hero from '../components/Hero';
import FeaturedJobs from '../components/FeaturedJobs';
import PricingSection from '../components/PricingSection'; // Nous allons créer ce composant juste après

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedJobs />
      <PricingSection />
    </>
  );
};

export default HomePage;
