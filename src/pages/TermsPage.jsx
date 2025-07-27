import React from 'react';

const TermsPage = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-brand-gray-dark mb-8">
          Conditions Générales d’Utilisation (CGU)
        </h1>
        
        <div className="prose lg:prose-lg max-w-none mx-auto text-brand-gray">
          <p className="text-sm text-center mb-8">Dernière mise à jour : 27 Juillet 2025</p>

          <p>Le présent document constitue les Conditions Générales d’Utilisation du site EmploiGlobal (ci-après « le Site »), édité par Manus AI (ci-après « l’Éditeur »).</p>

          <h2>1. Objet du service</h2>
          <p>Le Site EmploiGlobal est une plateforme numérique d’information et de facilitation de recherche d’emploi à l’international. Le Site agrège automatiquement des offres d’emploi publiées par des plateformes tierces. EmploiGlobal n’est pas un cabinet de recrutement et ne garantit en aucun cas l’obtention d’un emploi.</p>

          <h2>2. Conditions d’accès et d’inscription</h2>
          <p>L’accès au Site est libre. L’accès aux fonctionnalités avancées est soumis à inscription préalable et paiement d’un abonnement. Lors de l’inscription, l’utilisateur s’engage à fournir des informations exactes et à maintenir la confidentialité de son mot de passe.</p>

          <h2>3. Abonnements et modalités de paiement</h2>
          <p>Le Site propose des formules d’abonnement à durée déterminée. Le paiement est unique, sans reconduction automatique. Les moyens de paiement disponibles sont ceux indiqués sur la plateforme au moment de l'achat.</p>

          <h2>4. Obligations de l’utilisateur</h2>
          <p>L’utilisateur s’engage à utiliser son compte à titre personnel uniquement et à ne pas partager ses identifiants. Toute extraction massive ou reproduction du contenu du Site à des fins commerciales est interdite.</p>

          <h2>5. Limitation de responsabilité</h2>
          <p>EmploiGlobal agit en tant qu’intermédiaire technique. Nous ne pouvons être tenus responsables de l'exactitude ou de la fiabilité du contenu des offres provenant de sources externes. L’utilisateur reste entièrement responsable des démarches qu’il entreprend.</p>

          <h2>6. Propriété intellectuelle</h2>
          <p>L’ensemble des éléments du Site (textes, logo, charte graphique, etc.) est protégé par le droit de la propriété intellectuelle. Toute reproduction sans autorisation écrite est interdite.</p>

          <h2>7. Droit applicable et juridiction compétente</h2>
          <p>Les présentes CGU sont soumises au droit algérien. Tout litige sera de la compétence exclusive des tribunaux algériens compétents.</p>
          
          <div className="mt-10 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
            <p className="font-bold">Clause de non-substitution juridique</p>
            <p>Ce texte est un modèle de travail. Il est recommandé de faire valider ce document par un juriste qualifié avant sa publication officielle.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
