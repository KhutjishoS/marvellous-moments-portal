
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container-custom text-center">
          <span className="inline-block text-wedding-gold text-7xl font-serif mb-6">404</span>
          <h1 className="text-4xl font-serif mb-4">Page Not Found</h1>
          <p className="max-w-md mx-auto mb-8 text-wedding-charcoal/70">
            We couldn't find the page you were looking for. It might have been moved or doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-wedding-gold text-white rounded-md hover:bg-wedding-gold/90 hover-lift"
          >
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
