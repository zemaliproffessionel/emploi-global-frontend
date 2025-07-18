import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import des composants de structure
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// Import de toutes nos pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import SearchPage from './pages/SearchPage';
import JobDetailPage from './pages/JobDetailPage';
import PricingPage from './pages/PricingPage';
import PaymentPage from './pages/PaymentPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            {/* Routes publiques */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/search" element={<SearchPage />} />

            {/* Routes protégées */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/job/:id" 
              element={
                <ProtectedRoute>
                  <JobDetailPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/payment" 
              element={
                <ProtectedRoute>
                  <PaymentPage />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
