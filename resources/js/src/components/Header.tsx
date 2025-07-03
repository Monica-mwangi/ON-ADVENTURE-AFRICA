import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const [openThirdDropdown, setOpenThirdDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
        setOpenSubDropdown(null);
        setOpenThirdDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Destinations', path: '/destinations'},
    { name: 'Safaris', path: '/safaris'},
    { name: 'Coast', path: '/coast'},
    { name: 'Travel Guide', path: '/travelguide'}
  ];

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
    setOpenSubDropdown(null);
    setOpenThirdDropdown(null);
  };

  const toggleSubDropdown = (name: string) => {
    setOpenSubDropdown(openSubDropdown === name ? null : name);
    setOpenThirdDropdown(null);
  };

  const toggleThirdDropdown = (name: string) => {
    setOpenThirdDropdown(openThirdDropdown === name ? null : name);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md py-3" ref={dropdownRef}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/images/logo.png"
            alt="Nivishe Logo"
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                <Link
                  to={link.path}
                  className={`font-medium hover:text-brand transition-colors ${
                    isActive(link.path) ? 'text-brand' : 'text-gray-800'
                  }`}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </nav>
          <div className="flex gap-4">
            <button className="bg-brand text-white px-4 py-2 rounded-lg hover:bg-brand-dark transition">
              Book Now
            </button>
            <button className="text-gray-800 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 hover:text-brand transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`py-3 font-medium border-b border-gray-100 ${
                  isActive(link.path) ? 'text-brand' : 'text-gray-800'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <button 
                className="bg-brand text-white px-4 py-3 rounded-lg hover:bg-brand-dark transition"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </button>
              <button 
                className="text-gray-800 border border-gray-300 px-4 py-3 rounded-lg hover:bg-gray-50 transition"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;