
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Category {
  id: number;
  name: string;
  icon: string;
  description: string;
  path: string;
}

const ServiceCategories: React.FC = () => {
  const navigate = useNavigate();
  
  const categories: Category[] = [
    {
      id: 1,
      name: "Venues",
      icon: "🏛️",
      description: "Find the perfect location for your special day",
      path: "/venues"
    },
    {
      id: 2,
      name: "Photography",
      icon: "📸",
      description: "Capture every beautiful moment",
      path: "/photography"
    },
    {
      id: 3,
      name: "Catering",
      icon: "🍽️",
      description: "Delicious menus for your reception",
      path: "/catering"
    },
    {
      id: 4,
      name: "Flowers",
      icon: "💐",
      description: "Stunning floral arrangements",
      path: "/flowers"
    },
    {
      id: 5,
      name: "Entertainment",
      icon: "🎵",
      description: "DJs, bands, and performers",
      path: "/entertainment"
    },
    {
      id: 6,
      name: "Attire",
      icon: "👰",
      description: "Wedding dresses and suits",
      path: "/attire"
    }
  ];
  
  const handleCategoryClick = (path: string) => {
    navigate(path);
  };
  
  return (
    <section className="section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Wedding Services</h2>
          <p className="text-wedding-charcoal/70">
            From magnificent venues to talented photographers, explore our comprehensive range of wedding services designed to create a seamless and magical experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id}
              onClick={() => handleCategoryClick(category.path)}
              className="group relative flex flex-col p-8 bg-white rounded-lg shadow-soft hover-lift cursor-pointer overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute -right-6 -top-6 h-24 w-24 bg-wedding-cream rounded-full opacity-70 transition-transform duration-500 group-hover:scale-150"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-wedding-ivory text-xl mb-5">
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-medium mb-2">{category.name}</h3>
                <p className="text-wedding-charcoal/70 mb-4">{category.description}</p>
                
                <div className="mt-auto pt-4">
                  <span className="inline-flex items-center text-sm font-medium text-wedding-gold group-hover:underline">
                    Browse {category.name}
                    <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
