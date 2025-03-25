import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useShoppingCart } from '../contexts/ShoppingCartContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

// Sample florist packages
const floristPackages = [
  {
    id: 201,
    name: "Romantic Blush",
    description: "Soft pastel floral arrangements with roses, peonies, and delicate greenery",
    price: 5000,
    imageSrc: "https://images.unsplash.com/photo-1528755849095-ef1bcb43a06a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    features: ["Bridal bouquet", "Bridesmaids bouquets", "Ceremony arch", "Table centerpieces"]
  },
  {
    id: 202,
    name: "Wild Garden",
    description: "Natural, unstructured arrangements with seasonal wildflowers and textural elements",
    price: 4200,
    imageSrc: "https://images.unsplash.com/photo-1534183337069-e7dcc5a1a7e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    features: ["Bridal bouquet", "Boutonnières", "Altar decoration", "Reception flowers"]
  },
  {
    id: 203,
    name: "Classic White",
    description: "Elegant all-white arrangements with roses, lilies, and hydrangeas for a timeless look",
    price: 5500,
    imageSrc: "https://images.unsplash.com/photo-1523634700860-90d0ef74f137?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    features: ["Complete bridal party", "Church decorations", "Reception flowers", "Cake flowers"]
  },
  {
    id: 204,
    name: "Tropical Paradise",
    description: "Bold, exotic flowers and foliage creating a vibrant tropical atmosphere",
    price: 6000,
    imageSrc: "https://images.unsplash.com/photo-1533616688419-b7a585564566?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    features: ["Statement pieces", "Hanging installations", "Bold bouquets", "Accent greenery"]
  },
  {
    id: 205,
    name: "Rustic Charm",
    description: "Earthy arrangements with wheat, dried elements, and seasonal blooms for a country feel",
    price: 3800,
    imageSrc: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    features: ["Mason jar arrangements", "Wooden elements", "Wildflower bouquets", "Natural accents"]
  },
  {
    id: 206,
    name: "Minimalist Greens",
    description: "Modern arrangements focusing on sculptural greenery with minimal blooms",
    price: 3500,
    imageSrc: "https://images.unsplash.com/photo-1578450671530-5b6a7c9f32a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    features: ["Eucalyptus bouquets", "Olive branch accents", "Fern installations", "Contemporary designs"]
  }
];

const Florists = () => {
  const { addToCart } = useShoppingCart();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = (item: typeof floristPackages[0]) => {
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
                Floral Elegance
              </span>
              <h1 className="text-4xl md:text-5xl font-serif mb-4">Wedding Florists</h1>
              <p className="text-wedding-charcoal/70">
                Find talented florists who create stunning arrangements to enhance your wedding aesthetic
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {floristPackages.map((item) => (
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

export default Florists;
