import React, { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import jobApi from "../api/jobApi";

const SearchPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("Tous les pays");
  const [countries, setCountries] = useState([]);
  const [countriesLoading, setCountriesLoading] = useState(true);

  const performSearch = async (searchParams) => {
    console.log("[Frontend SearchPage] Lancement de la recherche avec les paramètres :", searchParams);
    setLoading(true);
    setError("");
    try {
      const response = await jobApi.getAllJobs(searchParams);
      console.log("[Frontend SearchPage] Réponse reçue du backend :", response.data);
      setJobs(response.data);
    } catch (err) {
      console.error("[Frontend SearchPage] ERREUR lors de l'appel API :", err);
      setError("Une erreur est survenue lors de la recherche.");
    }
    setLoading(false);
  };

  const fetchCountries = async () => {
    try {
      setCountriesLoading(true);
      const response = await jobApi.getUniqueCountries();
      console.log("[Frontend SearchPage] Pays récupérés :", response.data);
      setCountries(response.data);
    } catch (err) {
      console.error("[Frontend SearchPage] ERREUR lors de la récupération des pays :", err);
      // En cas d'erreur, on utilise une liste par défaut
      setCountries(["France", "Canada", "Allemagne", "Suisse", "Belgique"]);
    }
    setCountriesLoading(false);
  };

  useEffect(() => {
    performSearch({}); // Recherche initiale sans filtres
    fetchCountries(); // Récupération des pays disponibles
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const params = {};
    if (query) params.query = query;
    if (country !== "Tous les pays") params.country = country;
    performSearch(params);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Formulaire de recherche */}
      <div className="bg-white p-8 rounded-xl shadow-xl mb-8 border border-gray-100">
        <form onSubmit={handleSearch}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Rechercher un emploi..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 hover:border-gray-300"
              />
            </div>
            <div className="flex-1">
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                disabled={countriesLoading}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 hover:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="Tous les pays">
                  {countriesLoading ? "Chargement des pays..." : "Tous les pays"}
                </option>
                {countries.map((countryName) => (
                  <option key={countryName} value={countryName}>
                    {countryName}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? "Recherche..." : "Rechercher"}
            </button>
          </div>
        </form>
      </div>

      {/* Affichage des résultats */}
      <div>
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
            <span className="ml-3 text-gray-600">Recherche en cours...</span>
          </div>
        )}
        
        {error && (
          <div className="text-center py-12">
            <p className="text-red-500 mb-4">{error}</p>
            <button 
              onClick={() => performSearch({})} 
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
            >
              Réessayer
            </button>
          </div>
        )}
        
        {!loading && !error && (
          jobs.length > 0 ? (
            <>
              <div className="mb-4 text-gray-600">
                {jobs.length} offre{jobs.length > 1 ? "s" : ""} trouvée{jobs.length > 1 ? "s" : ""}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map(job => <JobCard key={job.id} id={job.id} title={job.title} company={job.company} location={job.location} />)}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">Aucune offre ne correspond à votre recherche.</p>
              <button 
                onClick={() => {
                  setQuery("");
                  setCountry("Tous les pays");
                  performSearch({});
                }} 
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
              >
                Voir toutes les offres
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SearchPage;
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map(job => <JobCard key={job.id} id={job.id} title={job.title} company={job.company} location={job.location} />)}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">Aucune offre ne correspond à votre recherche.</p>
              <button 
                onClick={() => {
                  setQuery('');
                  setCountry('Tous les pays');
                  performSearch({});
                }} 
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
              >
                Voir toutes les offres
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SearchPage;
