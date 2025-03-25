import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useShoppingCart } from '../contexts/ShoppingCartContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

// Sample photographer packages
const photographerPackages = [
  {
    id: 101,
    name: "Classic Wedding",
    description: "A comprehensive photography package capturing the entire day from preparation to reception",
    price: 8000,
    imageSrc: "https://images.unsplash.com/photo-1537907510278-f825868890ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    features: ["8 hours coverage", "2 photographers", "Online gallery", "Engagement session"]
  },
  {
    id: 102,
    name: "Premium Coverage",
    description: "Extensive documentation of your wedding with multiple angles and artistic compositions",
    price: 12000,
    imageSrc: "https://images.unsplash.com/photo-1545232979-8bf2968ba623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    features: ["10 hours coverage", "3 photographers", "Premium album", "Drone footage"]
  },
  {
    id: 103,
    name: "Candid Moments",
    description: "Focus on spontaneous, authentic moments with a documentary-style approach",
    price: 6500,
    imageSrc: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    features: ["6 hours coverage", "1 photographer", "Digital delivery", "Black & white edits"]
  },
  {
    id: 104,
    name: "Fine Art Package",
    description: "Artistic approach with carefully composed shots and editorial-style portraits",
    price: 15000,
    imageSrc: "https://images.unsplash.com/photo-1533038590840-1f704a975800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    features: ["Full day coverage", "2 photographers", "Luxury album", "Fine art prints"]
  },
  {
    id: 105,
    name: "Destination Wedding",
    description: "Complete coverage of your destination wedding including travel photography",
    price: 20000,
    imageSrc: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    features: ["3 days coverage", "2 photographers", "Travel included", "Location scouting"]
  },
  {
    id: 106,
    name: "Elopement Special",
    description: "Intimate coverage for small weddings and elopements with a personal touch",
    price: 4500,
    imageSrc: "https://images.unsplash.com/photo-1606216840941-138ed25c9caf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    features: ["4 hours coverage", "1 photographer", "Quick delivery", "Location advice"]
  }
];

const Photographers = () => {
  const { addToCart } = useShoppingCart();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = (item: typeof photographerPackages[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price
    });
    
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <section className="section bg-wedding-ivory">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-wedding-gold/10 text-wedding-gold font-medium text-sm mb-4">
                Capture Memories
              </span>
              <h1 className="text-4xl md:text-5xl font-serif mb-4">Wedding Photographers</h1>
              <p className="text-wedding-charcoal/70">
                Find talented photographers who will beautifully document every precious moment of your special day
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {photographerPackages.map((item) => (
                <div 
                  key={item.id}
                  className="group rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.imageSrc} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif mb-2">{item.name}</h3>
                    <p className="text-wedding-charcoal/70 text-sm mb-4">
                      {item.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Includes:</h4>
                      <ul className="text-xs text-wedding-charcoal/70 space-y-1">
                        {item.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-wedding-gold inline-block"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-wedding-gold font-medium">R{item.price.toLocaleString()}</span>
                      <Button 
                        onClick={() => handleAddToCart(item)}
                        className="px-4 py-2 text-sm text-white bg-wedding-gold border border-wedding-gold rounded-full hover:bg-wedding-gold/90 transition-colors duration-300"
                      >
                        Add to Cart
                      </Button>
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

export default Photographers;
