
import React, { useState } from 'react';
import { ArrowRight, Heart, Award, Star } from 'lucide-react';

interface Vendor {
  id: number;
  name: string;
  category: string;
  rating: number;
  image: string;
  featured: boolean;
  location: string;
  tags: string[];
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
      location: "Cape Town",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      featured: true,
      tags: ["Outdoor", "Garden", "Luxury"]
    },
    {
      id: 2,
      name: "Lily Rose Photography",
      category: "Photography",
      rating: 5.0,
      location: "Johannesburg",
      image: "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      featured: true,
      tags: ["Artistic", "Natural", "Editorial"]
    },
    {
      id: 3,
      name: "Divine Catering",
      category: "Catering",
      rating: 4.8,
      location: "Pretoria",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      featured: true,
      tags: ["Gourmet", "International", "Customizable"]
    },
    {
      id: 4,
      name: "Bloom & Bouquet",
      category: "Florist",
      rating: 4.7,
      location: "Durban",
      image: "https://images.unsplash.com/photo-1457089328109-e5d9bd499191?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2013&q=80",
      featured: true,
      tags: ["Sustainable", "Modern", "Seasonal"]
    }
  ];

  return (
    <section className="section py-24 relative overflow-hidden">
      {/* Unique background design */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-wedding-cream via-white to-white"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-wedding-cream -skew-y-3 transform -translate-y-20 z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="inline-block px-4 py-1 rounded-full bg-wedding-gold/10 text-wedding-gold font-medium text-sm mb-4">
              Exceptional Services
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Curated Wedding Artisans</h2>
            <p className="text-wedding-charcoal/70">
              Discover our exclusive collection of premium wedding professionals, each selected for their extraordinary talent and dedication
            </p>
          </div>
          <a 
            href="#" 
            className="group mt-6 md:mt-0 inline-flex items-center text-wedding-gold hover:text-wedding-gold/80 transition-all duration-300"
          >
            Explore all vendors
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {vendors.map((vendor) => (
            <div 
              key={vendor.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover-lift transition-all duration-500 bg-white"
              onMouseEnter={() => setHoveredVendor(vendor.id)}
              onMouseLeave={() => setHoveredVendor(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={vendor.image} 
                  alt={vendor.name} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {vendor.featured && (
                  <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 bg-wedding-gold/90 text-white text-xs rounded-full">
                    <Award className="w-3 h-3" />
                    <span>Featured</span>
                  </div>
                )}
                
                <button className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-wedding-rose hover:bg-white hover:text-wedding-rose transition-all duration-300">
                  <Heart className="h-4 w-4" />
                </button>
                
                {/* Location tag */}
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/40 backdrop-blur-sm text-white text-xs rounded-full flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  {vendor.location}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif">{vendor.name}</h3>
                  <div className="flex items-center bg-wedding-gold/10 px-2 py-1 rounded-full">
                    <Star className="h-3 w-3 text-wedding-gold mr-1 fill-wedding-gold" />
                    <span className="text-sm font-medium">{vendor.rating}</span>
                  </div>
                </div>
                
                <p className="text-sm text-wedding-charcoal/70 mb-4">{vendor.category}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {vendor.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs px-2 py-1 bg-wedding-cream rounded-full text-wedding-charcoal/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className={`transition-all duration-300 ${
                  hoveredVendor === vendor.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <a 
                    href="#" 
                    className="block w-full text-center py-2.5 bg-gradient-to-r from-wedding-gold to-wedding-gold/90 text-white rounded-full hover:shadow-md transition-all duration-300"
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
