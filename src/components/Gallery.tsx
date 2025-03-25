
import React, { useState, useEffect, useRef } from 'react';

interface GalleryProps {
  title?: string;
  subtitle?: string;
}

const Gallery: React.FC<GalleryProps> = ({ 
  title = "Wedding Inspiration",
  subtitle = "Explore beautiful moments captured at weddings we've helped create"
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);
  
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      caption: "A beautiful ceremony at sunset"
    },
    {
      url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      caption: "Elegant table settings for the reception"
    },
    {
      url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      caption: "First dance as a married couple"
    },
    {
      url: "https://images.unsplash.com/photo-1513278974582-3e1b4a4fa5e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      caption: "Exquisite floral arrangements"
    }
  ];
  
  const resetTimeout = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  };
  
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 5000);
    
    return () => {
      resetTimeout();
    };
  }, [activeIndex, galleryImages.length]);
  
  return (
    <section className="section bg-wedding-cream">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4">{title}</h2>
          <p className="text-wedding-charcoal/70">{subtitle}</p>
        </div>
        
        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-medium">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img 
                src={image.url} 
                alt={image.caption} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white text-xl font-serif">{image.caption}</p>
              </div>
            </div>
          ))}
          
          {/* Navigation dots */}
          <div className="absolute bottom-6 right-6 z-20 flex space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-white w-6' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-4 mt-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer overflow-hidden rounded-md h-24 transition-all duration-300 ${
                index === activeIndex 
                  ? 'ring-2 ring-wedding-gold ring-offset-2' 
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <img 
                src={image.url} 
                alt={image.caption} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
