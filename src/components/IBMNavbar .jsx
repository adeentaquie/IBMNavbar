import React, { useState } from 'react';
import { ChevronDown, Menu, X, Search, User, Globe } from 'lucide-react';

const IBMNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const mainNavItems = [
    {
      label: 'Products',
      items: ['AI & Analytics', 'Automation', 'Cloud Computing', 'Data & Analytics', 'IT Infrastructure', 'Security', 'Supply Chain']
    },
    {
      label: 'Solutions',
      items: ['By Industry', 'By Technology', 'By Business Function', 'Hybrid Cloud', 'AI Solutions']
    },
    {
      label: 'Consulting',
      items: ['Strategy & Design', 'Technology', 'Operations', 'Sustainability', 'Security Services']
    },
    {
      label: 'Learn',
      items: ['Documentation', 'Training', 'Community', 'Developer Center', 'Support']
    },
    {
      label: 'Partners',
      items: ['Find a Partner', 'Become a Partner', 'Partner Plus', 'Partner Ecosystem']
    }
  ];

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-200">
      {/* Top utility bar */}
      <div className="bg-black text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-8">
            <div className="flex items-center space-x-4">
              <span className="text-xs">IBM</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-xs hover:text-gray-300 transition-colors">
                <Globe className="w-3 h-3 inline mr-1" />
                United States
              </button>
              <button className="text-xs hover:text-gray-300 transition-colors">
                <User className="w-3 h-3 inline mr-1" />
                My IBM
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* IBM Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-blue-600 tracking-tight">
                IBM
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {mainNavItems.map((item, index) => (
              <div key={index} className="relative group">
                <button
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => toggleDropdown(index)}
                >
                  {item.label}
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                
                {/* Dropdown Menu */}
                {openDropdown === index && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg border border-gray-200 rounded-md z-50">
                    <div className="py-2">
                      {item.items.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {mainNavItems.map((item, index) => (
              <div key={index} className="border-b border-gray-100 pb-2">
                <button
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => toggleDropdown(`mobile-${index}`)}
                >
                  {item.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === `mobile-${index}` ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Mobile Dropdown */}
                {openDropdown === `mobile-${index}` && (
                  <div className="pl-4 space-y-1">
                    {item.items.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href="#"
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default IBMNavbar;