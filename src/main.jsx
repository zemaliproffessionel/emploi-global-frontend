import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AuthProvider } from './context/AuthContext.jsx'; // On importe notre fournisseur

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* On enveloppe App avec AuthProvider */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
);
