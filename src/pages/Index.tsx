
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedVendors from '../components/FeaturedVendors';
import ServiceCategories from '../components/ServiceCategories';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';

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
        <div className="relative">
          {/* Decorative element */}
          <div className="absolute left-0 right-0 h-24 -top-12 bg-wedding-cream skew-y-1 transform -rotate-1 z-10"></div>
          <ServiceCategories />
        </div>
        <FeaturedVendors />
        <Testimonials />
        <Gallery />
        
        {/* Call to Action Section with curved background */}
        <section className="section relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-wedding-rose/80 via-wedding-rose to-wedding-gold/50 rounded-[30%_70%_70%_30%/30%_40%_60%_70%]"></div>
          <div className="container-custom text-center relative z-10">
            <h2 className="text-4xl font-serif mb-6 text-white">Begin Your Forever Journey Today</h2>
            <p className="max-w-2xl mx-auto mb-10 text-white/90">
              Let us transform your wedding dreams into unforgettable memories with our exclusive collection of services
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/venues" className="px-8 py-3 bg-white text-wedding-gold font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Find Your Vendors
              </Link>
              <Link to="/contact" className="px-8 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300">
                Contact Us Today
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
