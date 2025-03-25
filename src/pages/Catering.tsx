
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShoppingCart from '../components/ShoppingCart';
import { useShoppingCart } from '../contexts/ShoppingCartContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

// Sample catering menu items
const cateringItems = [
  {
    id: 1,
    name: "Classic Elegance",
    description: "Three-course gourmet meal with a selection of canapés, main course options, and elegant desserts",
    price: 450,
    features: ["Welcome drinks", "3-course meal", "Coffee & tea", "Wedding cake service"]
  },
  {
    id: 2,
    name: "Rustic Harvest",
    description: "Farm-to-table feast with locally sourced ingredients, artisanal breads, and family-style serving",
    price: 350,
    features: ["Grazing tables", "Main feast", "Dessert station", "Late night snacks"]
  },
  {
    id: 3,
    name: "Global Fusion",
    description: "International cuisine stations offering a variety of cultural dishes, perfect for adventurous couples",
    price: 550,
    features: ["5 cuisine stations", "Interactive chef demos", "Custom cocktails", "Dessert selection"]
  },
  {
    id: 4,
    name: "Garden Party",
    description: "Light and refreshing menu perfect for outdoor celebrations with fresh seasonal fruits and vegetables",
    price: 380,
    features: ["Seasonal salads", "Grilled mains", "Fresh pastries", "Fruit displays"]
  },
  {
    id: 5,
    name: "Luxury Banquet",
    description: "Premium dining experience with upscale ingredients like lobster, wagyu beef, and champagne service",
    price: 750,
    features: ["Champagne tower", "Seafood display", "Premium cuts", "Patisserie selection"]
  },
  {
    id: 6,
    name: "Heritage Feast",
    description: "Traditional South African cuisine with a modern twist, featuring local favorites and spices",
    price: 420,
    features: ["Traditional breads", "Braai section", "Local wines", "Heritage desserts"]
  }
];

const Catering = () => {
  const { addToCart } = useShoppingCart();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = (item: typeof cateringItems[0]) => {
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
      <ShoppingCart />
      <main className="flex-grow pt-24">
        <section className="section bg-wedding-ivory">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-wedding-gold/10 text-wedding-gold font-medium text-sm mb-4">
                Delicious Experiences
              </span>
              <h1 className="text-4xl md:text-5xl font-serif mb-4">Wedding Catering</h1>
              <p className="text-wedding-charcoal/70">
                Explore exquisite menus and culinary experiences to delight your wedding guests
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cateringItems.map((item) => (
                <div 
                  key={item.id}
                  className="group rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-wedding-gold/10">
                    <div className="w-full h-full bg-gradient-to-br from-wedding-gold/20 to-wedding-cream flex items-center justify-center">
                      <span className="font-serif text-3xl text-wedding-gold">{item.name.charAt(0)}</span>
                    </div>
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
                      <span className="text-wedding-gold font-medium">From R{item.price} pp</span>
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

export default Catering;
