
import React, { useEffect, useState } from 'react';

// Image URLs
const heroImages = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80'
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center w-full overflow-hidden">
      {/* Background Images with parallax effect */}
      <div className="absolute inset-0 -z-10">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
              currentImageIndex === index && !isTransitioning
                ? 'opacity-100'
                : 'opacity-0'
            }`}
            style={{ 
              backgroundImage: `url(${image})`,
              transform: isScrolled ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.5s ease-out'
            }}
          />
        ))}
      </div>

      {/* Geometric overlay elements */}
      <div className="absolute inset-0 -z-5">
        {/* Left side decorative element */}
        <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-wedding-charcoal/40 to-transparent"></div>
        
        {/* Right side decorative element */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-wedding-gold/30 to-transparent"></div>
        
        {/* Bottom overlay */}
        <div className="absolute left-0 right-0 bottom-0 h-1/3 bg-gradient-to-t from-wedding-charcoal/50 to-transparent"></div>
      </div>

      {/* Content container with unique layout */}
      <div className="container-custom relative h-full flex flex-col justify-center items-start text-white pt-20 z-10">
        <div className="max-w-2xl">
          <div
            className={`transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block px-6 py-2 mb-8 text-sm tracking-wider bg-wedding-gold/20 backdrop-blur-sm rounded-full border border-white/20">
              CREATING MAGICAL MOMENTS
            </span>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif mb-6 font-light leading-tight">
              Your <span className="font-display italic text-wedding-gold drop-shadow-md">Perfect</span> Day Awaits
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/80 max-w-xl">
              Discover extraordinary vendors who will transform your wedding dreams into unforgettable experiences
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="px-8 py-4 bg-wedding-gold text-white rounded-full hover:bg-wedding-gold/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Begin Planning
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full hover:bg-white/20 transition-all duration-300">
                Browse Gallery
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Artistic frame elements */}
      <div className="absolute top-12 left-12 w-40 h-40 border-t-2 border-l-2 border-wedding-gold/40 rounded-tl-3xl"></div>
      <div className="absolute bottom-12 right-12 w-40 h-40 border-b-2 border-r-2 border-wedding-gold/40 rounded-br-3xl"></div>

      {/* Scroll down indicator with unique design */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-full animate-ping bg-white/30 duration-1000"></div>
          <div className="relative h-12 w-12 rounded-full border-2 border-white/50 flex justify-center items-center">
            <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.29289 31.7071C7.68342 32.0976 8.31658 32.0976 8.70711 31.7071L15.0711 25.3431C15.4616 24.9526 15.4616 24.3195 15.0711 23.9289C14.6805 23.5384 14.0474 23.5384 13.6569 23.9289L8 29.5858L2.34315 23.9289C1.95262 23.5384 1.31946 23.5384 0.928932 23.9289C0.538408 24.3195 0.538408 24.9526 0.928932 25.3431L7.29289 31.7071ZM7 0V31H9V0H7Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
