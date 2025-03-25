
import React, { useState } from 'react';
import { ArrowRight, Heart } from 'lucide-react';

interface Vendor {
  id: number;
  name: string;
  category: string;
  rating: number;
  image: string;
  featured: boolean;
}

const FeaturedVendors: React.FC = () => {
  const [hoveredVendor, setHoveredVendor] = useState<number | null>(null);
  
  // Sample vendor data (would typically come from an API)
  const vendors: Vendor[] = [
    {
      id: 1,
      name: "Elegant Gardens",
      category: "Venue",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      featured: true
    },
    {
      id: 2,
      name: "Lily Rose Photography",
      category: "Photography",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      featured: true
    },
    {
      id: 3,
      name: "Divine Catering",
      category: "Catering",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      featured: true
    },
    {
      id: 4,
      name: "Bloom & Bouquet",
      category: "Florist",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1457089328109-e5d9bd499191?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2013&q=80",
      featured: true
    }
  ];

  return (
    <section className="section bg-wedding-cream">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl">
            <span className="inline-block text-sm text-wedding-gold font-medium mb-2">Professional Services</span>
            <h2 className="mb-4">Featured Wedding Vendors</h2>
            <p className="text-wedding-charcoal/70">
              Discover our handpicked collection of premium wedding vendors, each offering exceptional services to make your special day truly unforgettable.
            </p>
          </div>
          <a 
            href="#" 
            className="group mt-4 md:mt-0 inline-flex items-center text-wedding-gold hover:text-wedding-gold/80 transition-all duration-300"
          >
            View all vendors
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vendors.map((vendor) => (
            <div 
              key={vendor.id}
              className="group relative bg-white rounded-lg shadow-soft overflow-hidden hover-lift"
              onMouseEnter={() => setHoveredVendor(vendor.id)}
              onMouseLeave={() => setHoveredVendor(null)}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={vendor.image} 
                  alt={vendor.name} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                {vendor.featured && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-wedding-gold/90 text-white text-xs rounded-full">
                    Featured
                  </span>
                )}
                <button className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-wedding-gold hover:bg-white transition-all duration-300">
                  <Heart className="h-4 w-4" />
                </button>
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium">{vendor.name}</h3>
                  <div className="flex items-center">
                    <span className="text-sm font-medium">{vendor.rating}</span>
                    <span className="ml-1 text-wedding-gold">★</span>
                  </div>
                </div>
                <p className="text-sm text-wedding-charcoal/70 mb-4">{vendor.category}</p>
                
                <div className={`transition-all duration-300 ${
                  hoveredVendor === vendor.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <a 
                    href="#" 
                    className="block w-full text-center py-2 border border-wedding-gold text-wedding-gold hover:bg-wedding-gold hover:text-white rounded transition-all duration-300"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVendors;
