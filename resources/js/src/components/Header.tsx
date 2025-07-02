import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Safaris', href: '#safaris' },
    { name: 'Coast', href: '#coast' },
    { name: 'Travel Guide', href: '#guide' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top Mini Header */}
     <div
  className="w-full py-2 px-4 text-sm text-white"
  style={{ backgroundColor: '#9c9c9c' }}
>
  <div className="container-max flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
    <div className="flex-1 text-left">
      Call us: +254 712 345 678
    </div>
    <div className="flex-1 text-center">
      Email: info@onadventures.co.ke
    </div>
    <div className="flex-1 text-right flex justify-end space-x-3">
      <a href="#" className="hover:text-accent-500"><Facebook size={16} /></a>
      <a href="#" className="hover:text-accent-500"><Instagram size={16} /></a>
      <a href="#" className="hover:text-accent-500"><Twitter size={16} /></a>
    </div>
  </div>
</div>


      {/* Main Header */}
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <MapPin className={`h-8 w-8 ${isScrolled ? 'text-primary-600' : 'text-white'}`} />
            <span className={`text-xl font-bold ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              OnAdventures
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-300 hover:text-accent-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            <button className="btn-primary">
              Book Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 font-medium hover:text-accent-500 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="btn-primary w-full mt-4">
                Book Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
