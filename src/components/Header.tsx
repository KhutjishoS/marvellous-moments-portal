
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart as CartIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../contexts/ShoppingCartContext';
import { Button } from './ui/button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, cartCount } = useShoppingCart();

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Venues', path: '/venues' },
    { name: 'Photographers', path: '/photographers' },
    { name: 'Catering', path: '/catering' },
    { name: 'Florists', path: '/florists' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-serif font-medium text-wedding-charcoal transition-all duration-300"
        >
          <span className="text-wedding-gold">Wedding</span>Portal
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-sm font-medium elegant-underline transition-all duration-300 hover:text-wedding-gold"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          {/* Shopping Cart Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleCart}
            className="relative text-wedding-charcoal hover:text-wedding-gold transition-colors duration-300"
            aria-label="Shopping Cart"
          >
            <CartIcon className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-wedding-gold text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount > 9 ? '9+' : cartCount}
              </span>
            )}
          </Button>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-wedding-charcoal hover:text-wedding-gold transition-colors duration-300"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden glassmorphism absolute top-full left-0 right-0 py-4 px-6 animate-fade-in">
          <ul className="flex flex-col space-y-4">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="block py-2 text-sm font-medium text-wedding-charcoal hover:text-wedding-gold transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
