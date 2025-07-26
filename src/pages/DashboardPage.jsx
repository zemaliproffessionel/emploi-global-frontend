import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '../context/AuthContext';
import JobCard from '../components/JobCard';
import { 
  User, 
  Heart, 
  Bookmark, 
  Search, 
  Bell, 
  CreditCard,
  Download,
  Calendar,
  TrendingUp,
  MapPin,
  Briefcase,
  Settings,
  Plus,
  Eye,
  Clock
} from 'lucide-react';

const DashboardPage = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [favoriteJobs, setFavoriteJobs] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [applications, setApplications] = useState([]);

  // Données simulées
  const mockFavoriteJobs = [
    {
      id: 1,
      title: 'Développeur Full Stack',
      company: 'TechCorp France',
      location: 'Paris',
      country: 'France',
      description: 'Nous recherchons un développeur full stack expérimenté...',
      salary: '45 000 - 55 000 €/an',
      contract_type: 'CDI',
      source: 'France Travail',
      posted_at: '2025-01-20',
      url: 'https://example.com/job1'
    },
    {
      id: 2,
      title: 'Data Scientist',
      company: 'AI Innovations',
      location: 'Toronto',
      country: 'Canada',
      description: 'Analysez des données complexes et développez des modèles d\'IA...',
      salary: '80 000 - 95 000 CAD/an',
      contract_type: 'CDI',
      source: 'Talent Montréal',
      posted_at: '2025-01-17',
      url: 'https://example.com/job4'
    }
  ];

  const mockSearchHistory = [
    { query: 'Développeur', country: 'France', date: '2025-01-20', results: 15 },
    { query: 'Marketing', country: 'Canada', date: '2025-01-19', results: 8 },
    { query: 'Infirmier', country: 'Canada', date: '2025-01-18', results: 12 }
  ];

  const mockApplications = [
    { id: 1, jobTitle: 'Développeur Full Stack', company: 'TechCorp France', date: '2025-01-20', status: 'En attente' },
    { id: 2, jobTitle: 'Data Scientist', company: 'AI Innovations', date: '2025-01-19', status: 'Vu par l\'employeur' },
    { id: 3, jobTitle: 'Chef de Projet', company: 'Innovation Labs', date: '2025-01-18', status: 'Réponse reçue' }
  ];

  useEffect(() => {
    // Charger les données utilisateur
    setFavoriteJobs(mockFavoriteJobs);
    setSavedJobs(mockFavoriteJobs);
    setSearchHistory(mockSearchHistory);
    setApplications(mockApplications);
  }, []);

  const userStats = {
    totalSearches: 25,
    favoriteJobs: favoriteJobs.length,
    applications: applications.length,
    profileViews: 12
  };

  const subscription = {
    type: 'Pack Professionnel',
    remaining: 12,
    total: 15,
    expiresAt: '2025-02-20'
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'En attente':
        return 'bg-yellow-100 text-yellow-800';
      case 'Vu par l\'employeur':
        return 'bg-blue-100 text-blue-800';
      case 'Réponse reçue':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: TrendingUp },
    { id: 'favorites', label: 'Favoris', icon: Heart },
    { id: 'saved', label: 'Sauvegardés', icon: Bookmark },
    { id: 'history', label: 'Historique', icon: Clock },
    { id: 'applications', label: 'Candidatures', icon: Briefcase },
    { id: 'settings', label: 'Paramètres', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Bonjour, {user?.name || 'Utilisateur'} !
              </h1>
              <p className="text-gray-600 mt-1">
                Gérez votre recherche d'emploi et suivez vos candidatures
              </p>
            </div>
            <Link to="/search">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Search className="w-4 h-4 mr-2" />
                Nouvelle recherche
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Search className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Recherches</p>
                <p className="text-2xl font-bold text-gray-900">{userStats.totalSearches}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Favoris</p>
                <p className="text-2xl font-bold text-gray-900">{userStats.favoriteJobs}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Candidatures</p>
                <p className="text-2xl font-bold text-gray-900">{userStats.applications}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Vues profil</p>
                <p className="text-2xl font-bold text-gray-900">{userStats.profileViews}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Status */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">{subscription.type}</h3>
              <p className="text-blue-100">
                {subscription.remaining} offres restantes sur {subscription.total}
              </p>
              <p className="text-blue-200 text-sm mt-1">
                Expire le {new Date(subscription.expiresAt).toLocaleDateString('fr-FR')}
              </p>
            </div>
            <div className="text-right">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2">
                <CreditCard className="w-8 h-8" />
              </div>
              <Link to="/pricing">
                <Button variant="secondary" size="sm" className="bg-white text-blue-600 hover:bg-gray-100">
                  Renouveler
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-white/20 rounded-full h-2">
              <div 
                className="bg-white h-2 rounded-full transition-all duration-300"
                style={{ width: `${(subscription.remaining / subscription.total) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Activité récente</h3>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <Search className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-sm text-gray-600">
                        Recherche "Développeur" en France - 15 résultats trouvés
                      </span>
                      <span className="text-xs text-gray-400 ml-auto">Il y a 2 heures</span>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <Heart className="w-5 h-5 text-red-400 mr-3" />
                      <span className="text-sm text-gray-600">
                        Offre ajoutée aux favoris: "Data Scientist chez AI Innovations"
                      </span>
                      <span className="text-xs text-gray-400 ml-auto">Hier</span>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <Briefcase className="w-5 h-5 text-green-400 mr-3" />
                      <span className="text-sm text-gray-600">
                        Candidature envoyée pour "Développeur Full Stack"
                      </span>
                      <span className="text-xs text-gray-400 ml-auto">Il y a 2 jours</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'favorites' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Offres favorites</h3>
                  <span className="text-sm text-gray-500">{favoriteJobs.length} offres</span>
                </div>
                {favoriteJobs.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {favoriteJobs.map(job => (
                      <JobCard
                        key={job.id}
                        job={job}
                        isFavorited={true}
                        onFavorite={(job) => {
                          setFavoriteJobs(favoriteJobs.filter(j => j.id !== job.id));
                        }}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun favori</h3>
                    <p className="text-gray-600 mb-4">
                      Ajoutez des offres à vos favoris pour les retrouver facilement
                    </p>
                    <Link to="/search">
                      <Button>Parcourir les offres</Button>
                    </Link>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'history' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Historique des recherches</h3>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Exporter
                  </Button>
                </div>
                <div className="space-y-3">
                  {searchHistory.map((search, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Search className="w-5 h-5 text-gray-400 mr-3" />
                        <div>
                          <p className="font-medium text-gray-900">
                            "{search.query}" en {search.country}
                          </p>
                          <p className="text-sm text-gray-500">
                            {search.results} résultats trouvés
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">
                          {new Date(search.date).toLocaleDateString('fr-FR')}
                        </p>
                        <Link 
                          to={`/search?query=${search.query}&country=${search.country}`}
                          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                          Relancer
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'applications' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Mes candidatures</h3>
                  <span className="text-sm text-gray-500">{applications.length} candidatures</span>
                </div>
                <div className="space-y-3">
                  {applications.map((application) => (
                    <div key={application.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Briefcase className="w-5 h-5 text-gray-400 mr-3" />
                        <div>
                          <p className="font-medium text-gray-900">{application.jobTitle}</p>
                          <p className="text-sm text-gray-500">{application.company}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
                          {application.status}
                        </span>
                        <p className="text-sm text-gray-500 mt-1">
                          {new Date(application.date).toLocaleDateString('fr-FR')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Paramètres du compte</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Notifications par email</p>
                        <p className="text-sm text-gray-500">Recevoir des alertes pour les nouvelles offres</p>
                      </div>
                      <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Profil public</p>
                        <p className="text-sm text-gray-500">Permettre aux employeurs de voir votre profil</p>
                      </div>
                      <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Préférences de recherche</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pays préférés
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>France</option>
                        <option>Canada</option>
                        <option>Espagne</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Secteur d'activité
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>Informatique</option>
                        <option>Santé</option>
                        <option>Marketing</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
