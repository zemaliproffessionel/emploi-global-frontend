import React, { useState, useEffect } from 'react';
import adminApi from '../api/adminApi'; // On importe notre API admin

const AdminPage = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchPayments = async () => {
    try {
      setLoading(true);
      const response = await adminApi.getPayments();
      setPayments(response.data);
      setLoading(false);
    } catch (error) {
      setError('Impossible de charger les paiements.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  const handleValidate = async (paymentId) => {
    if (window.confirm(`Êtes-vous sûr de vouloir valider le paiement ${paymentId} ?`)) {
      try {
        await adminApi.validatePayment(paymentId);
        alert('Paiement validé avec succès !');
        // On rafraîchit la liste pour voir le changement de statut
        fetchPayments(); 
      } catch (error) {
        alert('Erreur lors de la validation du paiement.');
      }
    }
  };

  if (loading) return <p className="text-center py-12">Chargement des paiements...</p>;
  if (error) return <p className="text-center py-12 text-red-500">{error}</p>;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Panneau d'Administration</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Gestion des Paiements</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Email Utilisateur</th>
                <th className="py-2 px-4 border-b text-left">Plan</th>
                <th className="py-2 px-4 border-b text-left">Montant</th>
                <th className="py-2 px-4 border-b text-left">Statut</th>
                <th className="py-2 px-4 border-b text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {payments.length > 0 ? payments.map(p => (
                <tr key={p.id}>
                  <td className="py-2 px-4 border-b">{p.email}</td>
                  <td className="py-2 px-4 border-b">{p.plan_name}</td>
                  <td className="py-2 px-4 border-b">{p.amount} DA</td>
                  <td className="py-2 px-4 border-b">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${p.status === 'pending' ? 'bg-yellow-200 text-yellow-800' : 'bg-green-200 text-green-800'}`}>
                      {p.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b">
                    {p.status === 'pending' && (
                      <button onClick={() => handleValidate(p.id)} className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600">
                        Valider
                      </button>
                    )}
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="5" className="text-center py-4">Aucun paiement à afficher.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
