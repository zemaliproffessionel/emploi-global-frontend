import React from 'react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Découverte',
    price: '2900 DA',
    duration: '7 jours',
    features: [
      'Accès complet aux offres',
      'Assistance IA pour 9 candidatures',
      'Support par email'
    ],
    cta: 'Choisir ce plan'
  },
  {
    name: 'Carrière',
    price: '3900 DA',
    duration: '30 jours',
    features: [
      'Accès complet aux offres',
      'Assistance IA pour 24 candidatures',
      'Support prioritaire'
    ],
    cta: 'Choisir ce plan',
    popular: true
  },
  {
    name: 'Expert',
    price: '5900 DA',
    duration: '2 mois',
    features: [
      'Accès complet aux offres',
      'Assistance IA illimitée',
      'Support premium 24/7'
    ],
    cta: 'Choisir ce plan'
  }
];

const PricingPage = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Nos Plans d'Abonnement</h1>
          <p className="text-lg text-gray-600 mt-4">Choisissez le plan qui correspond à vos ambitions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-lg shadow-lg p-8 flex flex-col ${plan.popular ? 'border-4 border-blue-600' : ''}`}>
              {plan.popular && <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full self-start mb-4">LE PLUS POPULAIRE</span>}
              <h2 className="text-2xl font-bold text-gray-800">{plan.name}</h2>
              <p className="text-4xl font-extrabold my-4">{plan.price}<span className="text-lg font-medium text-gray-500"> / {plan.duration}</span></p>
              <ul className="space-y-4 text-gray-600 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/payment" state={{ plan: plan }} className="mt-8 block w-full text-center bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700">
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
