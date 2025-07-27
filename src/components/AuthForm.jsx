import React from 'react';
import { Link } from 'react-router-dom';

const AuthForm = ({ title, buttonText, onSubmit, children, error, message, footerLink, footerText }) => {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-brand-gray-dark">
            {title}
          </h2>
        </div>
        <form className="mt-8 space-y-6 bg-white p-8 shadow-lg rounded-lg" onSubmit={onSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            {children}
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {message && <p className="text-green-500 text-sm text-center">{message}</p>}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-brand-blue hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange"
            >
              {buttonText}
            </button>
          </div>
        </form>
        <p className="mt-2 text-center text-sm text-brand-gray">
          {footerText}
          <Link to={footerLink} className="font-medium text-brand-orange hover:text-orange-500">
            {` `}{footerLink === '/register' ? `S'inscrire` : `Se connecter`}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
