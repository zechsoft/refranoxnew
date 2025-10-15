import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Wrench className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">REFRANOX</span>
            </div>
            <p className="text-gray-300">
              Engineering Heat Protection That Lasts. Trusted Experts in Industrial Insulation & Refractory Works.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              <Facebook className="h-6 w-6 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-500">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/qhse" className="text-gray-300 hover:text-white transition-colors">Quality & Safety</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-500">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Hot & Cold Insulation</li>
              <li>Refractory Lining & Castables</li>
              <li>Furnace & Boiler Insulation</li>
              <li>Acoustic & Duct Insulation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-500">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">+91-9677208721</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">info@ripl.co.in</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                <span className="text-gray-300">25/8A, Old Bank of Baroda Street, Ambattur OT, Chennai - 600053</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 REFRANOX. All rights reserved. | Designed for Industrial Excellence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;