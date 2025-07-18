import React from 'react';
import { useLocation } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const { plan } = location.state || {}; // Récupère les infos du plan choisi

  if (!plan) {
    return <div className="text-center py-12">Aucun plan sélectionné. Veuillez retourner à la page des offres.</div>;
  }

  return (
    <div className="container mx-auto py-12">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-2">Finalisez votre paiement</h1>
        <p className="text-center text-gray-600 mb-8">Vous avez choisi le plan : <span className="font-bold text-blue-600">{plan.name}</span></p>
        
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Instructions pour le virement bancaire</h2>
          <p className="mb-2">Veuillez effectuer un virement de <strong className="text-lg">{plan.price}</strong> sur le compte suivant :</p>
          <div className="bg-white p-4 rounded-md border">
            <p><strong>Nom du bénéficiaire :</strong> [Votre Nom Complet ou Nom de l'Entreprise]</p>
            <p><strong>RIB :</strong> [Votre Numéro de RIB complet]</p>
            <p><strong>Banque :</strong> [Nom de votre Banque]</p>
          </div>
          <p className="mt-4 font-semibold text-red-600">
            IMPORTANT : Veuillez inclure votre adresse email dans le motif du virement pour que nous puissions vous identifier.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Après le virement</h2>
          <p>Une fois le virement effectué, veuillez nous envoyer une capture d'écran ou une photo de la preuve de paiement à l'adresse email suivante :</p>
          <p className="text-center font-bold text-blue-600 my-4 text-lg">contact@emploiglobal.com</p>
          <p>Votre compte sera activé manuellement dans un délai de 24h après réception de la preuve.</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
