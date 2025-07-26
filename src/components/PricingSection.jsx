import React from 'react';
import { Link } from 'react-router-dom';

const PricingCard = ({ plan }) => (
  <div className={`border rounded-lg p-6 text-center flex flex-col ${plan.popular ? 'border-brand-orange scale-105 bg-white' : 'border-gray-300 bg-white'}`}>
    {plan.popular && <span className="bg-brand-orange text-white text-xs font-bold uppercase px-3 py-1 rounded-full self-center -mt-10 mb-4">Le plus populaire</span>}
    <h3 className="text-2xl font-bold text-brand-gray-dark mb-2">{plan.name}</h3>
    <p className="text-4xl font-bold text-brand-gray-dark mb-4">{plan.price}<span className="text-lg font-medium text-brand-gray"> / {plan.duration}</span></p>
    <ul className="text-left space-y-2 mb-6 flex-grow">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          {feature}
        </li>
      ))}
    </ul>
    <Link to="/pricing" className={`mt-auto font-bold py-3 px-6 rounded-lg transition-colors duration-300 ${plan.popular ? 'bg-brand-orange text-white hover:bg-orange-600' : 'bg-brand-blue text-white hover:bg-blue-800'}`}>
      {plan.cta}
    </Link>
  </div>
);

const PricingSection = () => {
  const plans = [
    { name: 'Découverte', price: '2900 DA', duration: '7 jours', features: ['Accès complet aux offres', 'Assistance IA pour 9 candidatures', 'Support par email'], cta: 'Choisir ce plan' },
    { name: 'Carrière', price: '3900 DA', duration: '30 jours', features: ['Accès complet aux offres', 'Assistance IA pour 24 candidatures', 'Support prioritaire'], cta: 'Choisir ce plan', popular: true },
    { name: 'Expert', price: '5900 DA', duration: '2 mois', features: ['Accès complet aux offres', 'Assistance IA illimitée', 'Support premium 24/7'], cta: 'Choisir ce plan' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-brand-gray-dark mb-4">Choisissez le Plan qui Vous Convient</h2>
        <p className="text-brand-gray mb-12 max-w-2xl mx-auto">Un investissement unique pour une carrière internationale. Pas de frais cachés, pas d'arnaques.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          {plans.map(plan => <PricingCard key={plan.name} plan={plan} />)}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
