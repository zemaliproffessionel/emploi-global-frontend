import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-brand-gray-dark mb-8">
          Politique de Confidentialité
        </h1>
        
        <div className="prose lg:prose-lg max-w-none mx-auto text-brand-gray">
          <p className="text-sm text-center mb-8">Dernière mise à jour : 27 Juillet 2025</p>

          <p>Bienvenue sur EmploiGlobal. La protection de vos données personnelles est une priorité absolue pour nous. Cette politique vise à vous informer clairement sur les données que nous collectons, pourquoi nous le faisons, et comment nous garantissons leur sécurité.</p>

          <h2>1. Quelles données collectons-nous ?</h2>
          <p>Nous collectons différentes informations en fonction de votre utilisation du site :</p>
          <ul>
            <li><strong>Lors de votre inscription :</strong> Votre nom, votre adresse e-mail et votre mot de passe (qui est toujours stocké de manière hachée et sécurisée).</li>
            <li><strong>Lors de l'abonnement :</strong> Un historique de vos transactions (type de pack, date), sans jamais stocker vos informations bancaires complètes.</li>
            <li><strong>Données futures (Outils IA) :</strong> Les documents (CV, lettres) que vous choisirez de soumettre à nos outils d'assistance.</li>
          </ul>

          <h2>2. Pourquoi collectons-nous ces données ?</h2>
          <p>Vos données sont essentielles pour :</p>
          <ul>
            <li>Fournir et personnaliser nos services.</li>
            <li>Sécuriser votre compte et gérer vos abonnements.</li>
            <li>Améliorer constamment notre plateforme.</li>
          </ul>
          <p>Nous nous engageons à ne jamais vendre ou transmettre vos données à des tiers à des fins commerciales.</p>

          <h2>3. Comment vos données sont-elles protégées ?</h2>
          <p>Nous mettons en œuvre des mesures de sécurité strictes, incluant le protocole HTTPS/SSL pour toutes les communications, le hachage systématique des mots de passe et un accès restreint aux données en interne.</p>
          
          <h2>4. Quels sont vos droits ?</h2>
          <p>Vous restez maître de vos données. Vous disposez d'un droit d'accès, de rectification et de suppression de votre compte et des données associées. Pour exercer ces droits, il vous suffit de nous contacter à l'adresse <a href="mailto:contact@emploiglobal.com">contact@emploiglobal.com</a>.</p>

          <h2>5. Durée de conservation</h2>
          <p>Vos données sont conservées tant que votre compte est actif. Un compte inactif est automatiquement supprimé après 2 ans, conformément aux meilleures pratiques.</p>

          <div className="mt-10 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
            <p className="font-bold">Note importante</p>
            <p>Ce document est fourni à titre indicatif. Il est recommandé de le faire valider par un conseil juridique pour une conformité totale.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
