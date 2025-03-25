
import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alexandra & Michael",
      role: "Married June 2023",
      content: "Our wedding day was absolutely perfect thanks to the incredible vendors we found through this platform. From our photographer to our venue, everything exceeded our expectations!",
      image: "https://images.unsplash.com/photo-1523347349989-3b01414a0d53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      id: 2,
      name: "James & Rebecca",
      role: "Married October 2023",
      content: "The planning tools and vendor recommendations made our destination wedding a breeze to organize. We couldn't have done it without this amazing platform!",
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      id: 3,
      name: "Olivia & Daniel",
      role: "Married March 2024",
      content: "What sets this platform apart is the attention to detail. The curated vendors truly understand what makes a wedding special, and it shows in every aspect of our celebration.",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 500);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
        setIsAnimating(false);
      }, 500);
    }
  };

  return (
    <section className="section bg-wedding-ivory overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-wedding-rose/10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-wedding-gold/10 translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-wedding-rose/20 text-wedding-gold font-medium text-sm mb-4">
            Love Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Words from Happy Couples</h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Large quote icon */}
          <div className="absolute -top-10 -left-2 text-wedding-gold/20">
            <Quote size={80} />
          </div>
          
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg p-8 md:p-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card transition-all duration-500 ${
                  index === activeIndex 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 absolute top-0 left-0 right-0 bottom-0 ' + 
                      (index < activeIndex ? '-translate-x-full' : 'translate-x-full')
                }`}
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-wedding-cream flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-wedding-charcoal/80 italic text-lg md:text-xl mb-6">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <h4 className="text-xl font-serif text-wedding-gold">{testimonial.name}</h4>
                      <p className="text-wedding-charcoal/60">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Navigation controls */}
            <div className="flex justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="h-10 w-10 rounded-full border border-wedding-gold/30 flex items-center justify-center text-wedding-gold hover:bg-wedding-gold/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? 'w-8 bg-wedding-gold' 
                        : 'bg-wedding-gold/30 hover:bg-wedding-gold/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="h-10 w-10 rounded-full border border-wedding-gold/30 flex items-center justify-center text-wedding-gold hover:bg-wedding-gold/10 transition-colors"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
