import React, { useState } from 'react';

// Le composant pour une seule question/réponse (l'accordéon)
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-brand-gray-dark focus:outline-none"
      >
        <span>{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 text-brand-gray">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

// La page FAQ complète
const FAQPage = () => {
  const faqData = [
    {
      category: '🌍 Questions Générales',
      items: [
        { q: 'Qu’est-ce qu’EmploiGlobal ?', a: 'EmploiGlobal est une plateforme en ligne dédiée aux chercheurs d’emploi algériens qui souhaitent travailler à l’étranger. Nous centralisons les offres fiables, vérifiées et accessibles pour vous permettre de postuler en toute sécurité.' },
        { q: 'Comment fonctionne EmploiGlobal ?', a: 'Notre site agrège automatiquement des offres d’emploi internationales. En vous inscrivant, vous pouvez consulter les annonces. Avec un abonnement, vous accédez aux détails complets et aux outils de candidature.' },
        { q: 'Pourquoi choisir EmploiGlobal plutôt qu’un cabinet de placement ?', a: 'Nous offrons une solution 100 % en ligne, sans frais cachés et avec des abonnements clairs. Notre objectif est de lutter contre les arnaques qui exploitent les chercheurs d’emploi.' },
        { q: 'Est-ce que EmploiGlobal est un cabinet de recrutement ?', a: 'Non. Nous sommes une plateforme technologique d’agrégation d’offres. Vous êtes libre de postuler vous-même aux offres qui vous intéressent.' },
      ]
    },
    {
      category: '💼 Questions sur les Offres d’Emploi',
      items: [
        { q: 'D’où proviennent les offres publiées sur EmploiGlobal ?', a: 'Nos offres sont collectées à partir de sites d\'emploi reconnus et de plateformes officielles. Chaque offre passe par un filtre anti-arnaque avant d’être publiée.' },
        { q: 'Comment savoir si une offre est toujours valable ?', a: 'Nos systèmes mettent à jour les offres régulièrement. Les offres expirées sont automatiquement retirées ou signalées.' },
      ]
    },
    {
      category: '💳 Questions sur les Abonnements et le Paiement',
      items: [
        { q: 'Dois-je payer pour accéder aux offres ?', a: 'La consultation de la liste des offres est gratuite. Pour voir les détails complets et le lien de candidature, un abonnement est nécessaire.' },
        { q: 'Comment puis-je payer mon abonnement ?', a: 'Vous pouvez payer par carte bancaire algérienne, virement CCP ou d’autres moyens électroniques sécurisés. Nous vous guiderons étape par étape.' },
        { q: 'Mon abonnement est-il renouvelé automatiquement ?', a: 'Non. Il n’y a pas de renouvellement automatique. À la fin de votre période, vous décidez si vous souhaitez continuer.' },
      ]
    },
    {
      category: '🤖 Questions sur les Outils d’Aide à la Candidature (IA)',
      items: [
        { q: 'Quels sont les outils à venir ?', a: 'Très prochainement, EmploiGlobal proposera des outils d’Intelligence Artificielle pour vous aider à rédiger un CV, générer des lettres de motivation, et simuler des entretiens.' },
        { q: 'Ces outils seront-ils payants ?', a: 'Certains seront inclus dans les abonnements, d’autres proposés en option. Nous ferons toujours en sorte qu’ils soient accessibles et abordables.' },
      ]
    }
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-brand-gray-dark mb-4">Foire Aux Questions (FAQ)</h1>
        <p className="text-center text-lg text-brand-gray mb-12">Bienvenue sur EmploiGlobal, votre passerelle vers l’emploi à l’étranger en toute confiance.</p>
        
        <div className="max-w-3xl mx-auto">
          {faqData.map(category => (
            <div key={category.category} className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-6">{category.category}</h2>
              {category.items.map(item => <FAQItem key={item.q} question={item.q} answer={item.a} />)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
