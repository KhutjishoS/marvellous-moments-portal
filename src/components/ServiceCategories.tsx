
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Category {
  id: number;
  name: string;
  icon: string;
  description: string;
  path: string;
  color: string;
}

const ServiceCategories: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  
  const categories: Category[] = [
    {
      id: 1,
      name: "Venues",
      icon: "🏛️",
      description: "Discover breathtaking spaces for your special celebration",
      path: "/venues",
      color: "bg-gradient-to-br from-wedding-gold/10 to-wedding-gold/20"
    },
    {
      id: 2,
      name: "Photography",
      icon: "📸",
      description: "Capture timeless moments with expert photographers",
      path: "/photography",
      color: "bg-gradient-to-br from-wedding-rose/10 to-wedding-rose/20"
    },
    {
      id: 3,
      name: "Catering",
      icon: "🍽️",
      description: "Exquisite culinary experiences for your wedding feast",
      path: "/catering",
      color: "bg-gradient-to-br from-wedding-cream to-wedding-gold/10"
    },
    {
      id: 4,
      name: "Flowers",
      icon: "💐",
      description: "Elegant floral designs to enhance your celebration",
      path: "/flowers",
      color: "bg-gradient-to-br from-[#E8F4EA] to-[#C9E4D6]"
    },
    {
      id: 5,
      name: "Entertainment",
      icon: "🎵",
      description: "Create the perfect atmosphere with amazing performers",
      path: "/entertainment",
      color: "bg-gradient-to-br from-[#E4E1F5] to-[#D2CDEC]"
    },
    {
      id: 6,
      name: "Attire",
      icon: "👰",
      description: "Find your dream wedding dress and perfect suit",
      path: "/attire",
      color: "bg-gradient-to-br from-wedding-ivory to-wedding-cream"
    }
  ];
  
  const handleCategoryClick = (path: string) => {
    navigate(path);
  };
  
  return (
    <section className="section pt-24 bg-wedding-cream relative">
      {/* Decorative background elements */}
      <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-wedding-gold/5 -translate-y-1/2"></div>
      <div className="absolute left-0 bottom-0 w-80 h-80 rounded-full bg-wedding-rose/5 translate-y-1/4"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-wedding-gold/10 text-wedding-gold font-medium text-sm mb-4">
            Curated Services
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Discover Wedding Essentials</h2>
          <p className="text-wedding-charcoal/70">
            Browse our handpicked collection of premium wedding services, each carefully selected to help create your perfect day
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              onClick={() => handleCategoryClick(category.path)}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              className={`group relative p-8 rounded-2xl transition-all duration-500 ${category.color} hover-lift transform hover:scale-[1.02] cursor-pointer overflow-hidden`}
            >
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 transition-transform duration-500 group-hover:scale-125"></div>
                <div className="absolute left-10 bottom-10 h-16 w-16 rounded-full bg-white/30 transition-all duration-700 group-hover:scale-150"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white text-2xl mb-6 shadow-md">
                  {category.icon}
                </div>
                
                <h3 className="text-2xl font-serif mb-2">{category.name}</h3>
                <p className="text-wedding-charcoal/70 mb-6">{category.description}</p>
                
                <div className={`transition-all duration-300 ${
                  hoveredCategory === category.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <span className="inline-flex items-center text-sm font-medium text-wedding-gold">
                    Explore {category.name}
                    <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
