
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Venues = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <section className="section bg-wedding-ivory">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-wedding-gold/10 text-wedding-gold font-medium text-sm mb-4">
                Dream Locations
              </span>
              <h1 className="text-4xl md:text-5xl font-serif mb-4">Wedding Venues</h1>
              <p className="text-wedding-charcoal/70">
                Discover breathtaking venues for your special day, from elegant ballrooms to enchanting garden settings
              </p>
            </div>
            
            {/* Placeholder content - will be populated with real venue data */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div 
                  key={index}
                  className="group rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-wedding-gold/10">
                    <div className="w-full h-full bg-gradient-to-br from-wedding-gold/20 to-wedding-rose/20 flex items-center justify-center text-wedding-gold/40 text-5xl">
                      {index}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif mb-2">Sample Venue {index}</h3>
                    <p className="text-wedding-charcoal/70 text-sm mb-4">
                      Beautiful venue location with elegant decor and spacious halls for your perfect wedding day
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-wedding-gold font-medium">From R15,000</span>
                      <button className="px-4 py-2 text-sm text-wedding-gold border border-wedding-gold/30 rounded-full hover:bg-wedding-gold hover:text-white transition-colors duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Venues;
