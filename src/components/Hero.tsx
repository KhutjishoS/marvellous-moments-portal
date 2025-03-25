
import React, { useEffect, useState } from 'react';

// Image URLs - these would be replaced with your actual imported images
const heroImages = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80'
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = heroImages[currentImageIndex];
    imageLoader.onload = () => {
      setIsLoaded(true);
    };
  }, [currentImageIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        setIsTransitioning(false);
      }, 500); // Half the transition time for smooth crossfade
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images with fade transition */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            currentImageIndex === index && !isTransitioning
              ? 'opacity-100'
              : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

      {/* Content container */}
      <div className="container-custom relative h-full flex flex-col justify-center items-center text-center text-white pt-20">
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1 mb-6 text-xs uppercase tracking-widest bg-wedding-gold/20 backdrop-blur-sm rounded-full border border-white/20 animate-pulse-soft">
            Your Perfect Day Awaits
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 font-light leading-tight text-white">
            Discover <span className="text-wedding-gold">Extraordinary</span> Wedding Services
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl mb-10 text-white/90">
            Find the perfect vendors and venues to create the wedding of your dreams
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-wedding-gold text-white rounded-md hover:bg-wedding-gold/90 hover-lift">
              Find Vendors
            </button>
            <button className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-md hover:bg-white/20 hover-lift">
              Plan Your Wedding
            </button>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white text-sm mb-2 opacity-80">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
