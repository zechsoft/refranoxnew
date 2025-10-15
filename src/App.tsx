import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingContactWidgets from './components/FloatingContactWidgets';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/products';
import Industries from './pages/Industries';
import Projects from './pages/Projects';
import Clients from './pages/Clients';
import QHSE from './pages/QHSE';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/qhse" element={<QHSE />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        
        {/* Floating Contact Widgets - Available on all pages */}
        <FloatingContactWidgets />
      </div>
    </Router>
  );
}

export default App;