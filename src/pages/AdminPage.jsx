import React, { useState, useEffect } from 'react';
// Nous créerons adminApi juste après
// import adminApi from '../api/adminApi'; 

const AdminPage = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        // const response = await adminApi.getPayments();
        // setPayments(response.data);
        
        // Données de test en attendant de créer adminApi
        const testData = [
          { id: '123', email: 'test1@email.com', amount: '2900', plan_name: 'Découverte', status: 'pending', created_at: new Date().toISOString() },
          { id: '456', email: 'test2@email.com', amount: '3900', plan_name: 'Carrière', status: 'completed', created_at: new Date().toISOString() },
        ];
        setPayments(testData);

      } catch (error) {
        console.error("Erreur:", error);
      }
      setLoading(false);
    };
    fetchPayments();
  }, []);

  const handleValidate = (paymentId) => {
    alert(`Validation du paiement ${paymentId}. Cette action activera l'abonnement.`);
    // Logique pour appeler le backend et mettre à jour l'état
  };

  if (loading) return <p>Chargement...</p>;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Panneau d'Administration</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Gestion des Paiements</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Email Utilisateur</th>
                <th className="py-2 px-4 border-b">Plan</th>
                <th className="py-2 px-4 border-b">Montant</th>
                <th className="py-2 px-4 border-b">Statut</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {payments.map(p => (
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
