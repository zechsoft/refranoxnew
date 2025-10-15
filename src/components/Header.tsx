import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Wrench, ChevronDown, Shield, Layers, Paintbrush, Flame, Building2, Settings, Hammer, Zap } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const servicesDropdownRef = useRef(null);
  const productsDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target)) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const services = [
    { 
      name: 'Industrial Insulation', 
      href: '/services#industrial-insulation', 
      icon: Shield,
      description: 'Comprehensive thermal protection solutions'
    },
    { 
      name: 'Refractory Works', 
      href: '/services#refractory-works', 
      icon: Flame,
      description: 'High-temperature industrial solutions'
    },
    { 
      name: 'Scaffolding', 
      href: '/services#scaffolding', 
      icon: Layers,
      description: 'Safe access solutions for construction'
    },
    { 
      name: 'Painting and Blasting', 
      href: '/services#painting-blasting', 
      icon: Paintbrush,
      description: 'Surface protection & coating services'
    },
    
    { 
      name: 'Passive Fire Proofing', 
      href: '/services#fire-proofing', 
      icon: Building2,
      description: 'Passive fire protection systems'
    },
    { 
      name: 'Mechanical Fabrication & Erection', 
      href: '/services#mechanical-fabrication', 
      icon: Settings,
      description: 'Precision engineering solutions'
    },
    { 
      name: 'Civil Works', 
      href: '/services#civil-works', 
      icon: Hammer,
      description: 'Foundation & infrastructure development'
    },
    { 
      name: 'Electrical Works', 
      href: '/services#electrical-works', 
      icon: Zap,
      description: 'Power & control systems installation'
    }
  ];

  const products = [
    { name: 'Phenolic Foam Insulation', id: 'phenolic-foam' },
    { name: 'Phenolic Foam Soffit Insulation', id: 'phenolic-soffit' },
    { name: 'Glass Fiber Resilient Blanket', id: 'glass-fiber-blanket' },
    { name: 'Phenolic Foam Pre-insulated Air Duct', id: 'phenolic-duct' },
    { name: 'High Density Thermal Support Inserts', id: 'thermal-support' },
    { name: 'Polyisocyanurate (PIR) Insulations', id: 'pir-insulation' },
    { name: 'Polyurethane (PUR) Insulations', id: 'pur-insulation' },
    { name: 'Roof, Wall, Soffit Insulation & EIFS, ETICS', id: 'roof-wall-soffit' },
    { name: 'Pre-insulated Pipe and Fittings', id: 'preinsulated-pipe' },
    { name: 'Polyolefin (XLPE) Insulation', id: 'polyolefin' },
    { name: 'Calcium Silicate Insulation', id: 'calcium-silicate' },
    { name: 'Perlite Insulation', id: 'perlite' },
    { name: 'Cellular Glass Insulation', id: 'cellular-glass' },
    { name: 'Rockwool Insulation', id: 'rockwool' },
    { name: 'Expanded Polystyrene Insulation', id: 'eps' },
    { name: 'Extruded Polystyrene Insulation', id: 'xps' },
    { name: 'Ceramic Blanket Insulation', id: 'ceramic-blanket' },
    { name: 'Cryo-Master Insulation', id: 'cryo-master' },
    { name: 'Insulated Panels', id: 'insulated-panels' },
    { name: 'Vapour Barrier Butyl Wrap', id: 'vapor-barrier' },
    { name: 'Jacketing & Cladding Accessories', id: 'jacketing-cladding' },
    { name: 'Adhesives and Insulation Accessories', id: 'adhesives-accessories' }
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services', hasDropdown: true, type: 'services' },
    { name: 'Products', href: '/products', hasDropdown: true, type: 'products' },
    { name: 'Industries', href: '/industries' },
    { name: 'Projects', href: '/projects' },
    { name: 'Clients', href: '/clients' },
    { name: 'QHSE', href: '/qhse' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleServiceClick = (serviceHref) => {
    window.location.href = serviceHref;
    setIsServicesOpen(false);
    setIsOpen(false);
  };

  const handleProductClick = (productId) => {
    window.location.href = '/products#' + productId;
    setIsProductsOpen(false);
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
      style={{
        transform: 'translateY(0)',
        animation: 'slideDown 0.5s ease-out'
      }}
    >
      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100px);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="/" className="flex items-center space-x-2">
            <Wrench className={`h-8 w-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
            <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              REFRANOX
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative" ref={item.type === 'services' ? servicesDropdownRef : item.type === 'products' ? productsDropdownRef : null}>
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => {
                      if (item.type === 'services') setIsServicesOpen(true);
                      if (item.type === 'products') setIsProductsOpen(true);
                    }}
                    onMouseLeave={() => {
                      if (item.type === 'services') setIsServicesOpen(false);
                      if (item.type === 'products') setIsProductsOpen(false);
                    }}
                  >
                    <button
                      className={`font-medium transition-colors duration-200 flex items-center ${
                        window.location.pathname === item.href
                          ? isScrolled
                            ? 'text-blue-600'
                            : 'text-orange-400'
                          : isScrolled
                          ? 'text-gray-700 hover:text-blue-600'
                          : 'text-white hover:text-orange-400'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>

                    {/* Services Dropdown */}
                    {item.type === 'services' && isServicesOpen && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 opacity-100 translate-y-0 transition-all duration-200"
                        style={{
                          animation: 'fadeIn 0.2s ease-out'
                        }}
                      >
                        <div className="px-4 py-2 text-sm text-gray-500 font-semibold border-b border-gray-100">
                          Our Services
                        </div>
                        {services.map((service) => {
                          const IconComponent = service.icon;
                          return (
                            <button
                              key={service.name}
                              onClick={() => handleServiceClick(service.href)}
                              className="w-full flex items-start px-4 py-3 hover:bg-gray-50 transition-colors duration-200 text-left"
                            >
                              <div className="bg-blue-50 p-2 rounded-lg mr-3 mt-0.5">
                                <IconComponent className="h-4 w-4 text-blue-600" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-900">{service.name}</div>
                                <div className="text-xs text-gray-500">{service.description}</div>
                              </div>
                            </button>
                          );
                        })}
                        <div className="border-t border-gray-100 mt-2 pt-2">
                          <button
                            onClick={() => handleServiceClick('/services')}
                            className="w-full text-left px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                          >
                            View All Services →
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Products Dropdown */}
                    {item.type === 'products' && isProductsOpen && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 max-h-96 overflow-y-auto opacity-100 translate-y-0 transition-all duration-200"
                        style={{
                          animation: 'fadeIn 0.2s ease-out'
                        }}
                      >
                        <div className="px-4 py-2 text-sm text-gray-500 font-semibold border-b border-gray-100">
                          Our Products
                        </div>
                        {products.map((product) => (
                          <button
                            key={product.id}
                            onClick={() => handleProductClick(product.id)}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            {product.name}
                          </button>
                        ))}
                        <div className="border-t border-gray-100 mt-2 pt-2">
                          <button
                            onClick={() => handleProductClick('')}
                            className="w-full text-left px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                          >
                            View All Products →
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={`font-medium transition-colors duration-200 ${
                      window.location.pathname === item.href
                        ? isScrolled
                          ? 'text-blue-600'
                          : 'text-orange-400'
                        : isScrolled
                        ? 'text-gray-700 hover:text-blue-600'
                        : 'text-white hover:text-orange-400'
                    }`}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Get Quote Button */}
          <a
            href="/contact"
            className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            Get Quote
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div 
          className="lg:hidden bg-white border-t shadow-lg"
          style={{
            animation: 'slideDown 0.3s ease-out'
          }}
        >
          <div className="px-4 py-2 space-y-1 max-h-96 overflow-y-auto">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => {
                        if (item.type === 'services') {
                          setMobileServicesOpen(!mobileServicesOpen);
                          setMobileProductsOpen(false);
                        }
                        if (item.type === 'products') {
                          setMobileProductsOpen(!mobileProductsOpen);
                          setMobileServicesOpen(false);
                        }
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 text-base font-medium rounded-md ${
                        window.location.pathname === item.href
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform ${
                        (item.type === 'services' && mobileServicesOpen) || (item.type === 'products' && mobileProductsOpen) 
                          ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {/* Mobile Services Dropdown */}
                    {item.type === 'services' && mobileServicesOpen && (
                      <div 
                        className="pl-4 mt-2 space-y-1"
                        style={{
                          animation: 'slideDown 0.2s ease-out'
                        }}
                      >
                        {services.map((service) => {
                          const IconComponent = service.icon;
                          return (
                            <button
                              key={service.name}
                              onClick={() => handleServiceClick(service.href)}
                              className="w-full flex items-center px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md text-left"
                            >
                              <IconComponent className="h-4 w-4 mr-2" />
                              {service.name}
                            </button>
                          );
                        })}
                        <button
                          onClick={() => handleServiceClick('/services')}
                          className="w-full text-left px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-md"
                        >
                          View All Services →
                        </button>
                      </div>
                    )}

                    {/* Mobile Products Dropdown */}
                    {item.type === 'products' && mobileProductsOpen && (
                      <div 
                        className="pl-4 mt-2 space-y-1 max-h-64 overflow-y-auto"
                        style={{
                          animation: 'slideDown 0.2s ease-out'
                        }}
                      >
                        {products.map((product) => (
                          <button
                            key={product.id}
                            onClick={() => handleProductClick(product.id)}
                            className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                          >
                            {product.name}
                          </button>
                        ))}
                        <button
                          onClick={() => handleProductClick('')}
                          className="w-full text-left px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-md"
                        >
                          View All Products →
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium rounded-md ${
                      window.location.pathname === item.href
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <a
              href="/contact"
              className="block px-3 py-2 text-base font-medium bg-orange-500 text-white rounded-md text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Get Quote
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;