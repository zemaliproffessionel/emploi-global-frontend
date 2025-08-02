import React from 'react';
import { Link } from 'react-router-dom';

const AuthForm = ({ title, buttonText, onSubmit, children, error, message, footerLink, footerText }) => {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">
            {title}
          </h2>
        </div>
        <form className="mt-8 space-y-6 bg-white p-8 shadow-2xl rounded-xl border border-gray-100" onSubmit={onSubmit}>
          <div className="space-y-4">
            {React.Children.map(children, (child, index) => (
              <div key={index}>
                {React.cloneElement(child, {
                  className: "w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 hover:border-gray-300"
                })}
              </div>
            ))}
          </div>

          {error && <div className="bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded-lg text-sm text-center">{error}</div>}
          {message && <div className="bg-green-50 border-l-4 border-green-500 text-green-700 px-4 py-3 rounded-lg text-sm text-center">{message}</div>}

          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {buttonText}
            </button>
          </div>
        </form>
        <p className="mt-2 text-center text-sm text-gray-600">
          {footerText}
          <Link to={footerLink} className="font-medium text-orange-600 hover:text-orange-500 transition-colors duration-300">
            {` `}{footerLink === '/register' ? `S'inscrire` : `Se connecter`}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
