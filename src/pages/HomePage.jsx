import React from 'react';
import Hero from '../components/Hero';
import FeaturedJobs from '../components/FeaturedJobs';
import PricingSection from '../components/PricingSection';

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
