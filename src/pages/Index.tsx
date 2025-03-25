
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedVendors from '../components/FeaturedVendors';
import ServiceCategories from '../components/ServiceCategories';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <FeaturedVendors />
        <ServiceCategories />
        <Gallery />
        
        {/* Call to Action Section */}
        <section className="section bg-gradient-to-r from-wedding-gold/90 to-wedding-gold">
          <div className="container-custom text-center text-white">
            <h2 className="text-4xl font-serif mb-6">Start Planning Your Dream Wedding Today</h2>
            <p className="max-w-2xl mx-auto mb-10 text-white/90">
              Let us help you find the perfect vendors and venues to create the wedding of your dreams
            </p>
            <button className="px-8 py-3 bg-white text-wedding-gold font-medium rounded-md hover:bg-white/90 hover-lift">
              Get Started
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
