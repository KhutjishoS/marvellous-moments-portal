
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-wedding-charcoal text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-serif mb-6">WeddingPortal</h3>
            <p className="text-white/70 mb-6">
              Your ultimate destination for finding exceptional wedding services. We connect couples with the finest vendors to create unforgettable wedding experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-wedding-gold transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-wedding-gold transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-wedding-gold transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Venues', 'Vendors', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-wedding-gold transition-colors duration-300 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-medium mb-6">Our Services</h3>
            <ul className="space-y-3">
              {['Wedding Venues', 'Photography', 'Catering', 'Flowers & Decor', 'Entertainment', 'Wedding Planning'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-wedding-gold transition-colors duration-300 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-medium mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-wedding-gold mr-3 mt-0.5" />
                <span className="text-white/70">
                  123 Wedding Street<br />
                  Johannesburg, South Africa
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-wedding-gold mr-3" />
                <a href="tel:+27123456789" className="text-white/70 hover:text-wedding-gold">
                  +27 12 345 6789
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-wedding-gold mr-3" />
                <a href="mailto:info@weddingportal.com" className="text-white/70 hover:text-wedding-gold">
                  info@weddingportal.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-white/10 my-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} WeddingPortal. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/50 text-sm hover:text-wedding-gold">
              Terms of Service
            </a>
            <a href="#" className="text-white/50 text-sm hover:text-wedding-gold">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 text-sm hover:text-wedding-gold">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
