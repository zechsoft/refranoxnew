import React, { useState, useEffect } from 'react';
import { Shield, Layers, Paintbrush, Flame, Building2, Settings, Hammer, Zap, CheckCircle, ArrowRight, Wrench, HardHat, Cog } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const location = useLocation();

  // Map of service IDs to array indices
  const serviceIdMap = {
    'industrial-insulation': 0,
    'thermal-insulation': 0,
    'refractory-works': 1,
    'fire-proofing': 2,
    'scaffolding': 3,
    'painting-blasting': 4,
    'industrial-coating': 4,
    'civil-works': 5,
    'mechanical-fabrication': 6,
    'electrical-works': 7
  };

  // Handle navigation from header dropdown
  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace('#', '');
      const serviceIndex = serviceIdMap[hash];
      
      if (serviceIndex !== undefined) {
        // Set the active service immediately
        setActiveService(serviceIndex);
        
        // Scroll to the service navigation section with better timing
        setTimeout(() => {
          const serviceNav = document.getElementById('service-navigation');
          if (serviceNav) {
            const headerOffset = 100; // Account for fixed header
            const elementPosition = serviceNav.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 300);
      }
    }
  }, [location]);

  const services = [
    {
      id: 'industrial-insulation',
      icon: Shield,
      title: 'Thermal Insulation',
      subtitle: 'Superior Energy Conservation',
      description: 'We specialize in the supply and application of hot, cold, and acoustic insulation systems for process pipelines, equipment, boilers, and ducting in power, petrochemical, and industrial plants. Our expertise covers mineral wool, rock wool, glass wool, ceramic fiber, nitrile rubber, and polyurethane systems.',
      image: 'assests/home/insulationservices4.png',
      features: [
        'Hot & Cold Pipeline Insulation',
        'Equipment & Boiler Insulation',
        'Process Ducting Insulation',
        'Mineral Wool & Rock Wool Systems',
        'Glass Wool & Ceramic Fiber',
        'Nitrile Rubber & Polyurethane Systems'
      ],
      benefits: [
        'Energy Conservation - Superior thermal efficiency',
        'Cost Optimization - Long-term performance savings',
        'Safety Compliance - Tailored to client specifications',
        'Design Excellence - Material selection & installation'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      gradientFrom: 'from-blue-600',
      gradientTo: 'to-blue-800'
    },
    {
      id: 'refractory-works',
      icon: Flame,
      title: 'Refractory Application Services',
      subtitle: 'High-Temperature Expertise',
      description: 'Our refractory division executes lining, gunning, casting, and ramming works for furnaces, kilns, boilers, reformers, and chimneys. We handle monolithic, brick, and castable systems using advanced mixing and installation techniques backed by trained applicators and precise quality control.',
      image: 'assests/services/refractory.png',
      features: [
        'Furnace & Kiln Refractory Lining',
        'Boiler & Reformer Applications',
        'Chimney Refractory Systems',
        'Gunning & Casting Services',
        'Ramming & Monolithic Works',
        'Brick & Castable Systems'
      ],
      benefits: [
        'Heat Resistance - Proven high-temperature durability',
        'Mechanical Strength - Advanced installation techniques',
        'Quality Control - Trained applicators & supervision',
        'Reliability - Long-lasting performance assurance'
      ],
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      gradientFrom: 'from-red-600',
      gradientTo: 'to-red-800'
    },
    {
      id: 'fire-proofing',
      icon: Building2,
      title: 'Passive Fire Proofing',
      subtitle: 'Certified Fire Protection',
      description: 'We offer comprehensive fireproofing solutions for structural steel, process units, and critical assets in oil & gas, refinery, and infrastructure sectors. Our services include intumescent and cementitious fireproofing systems, tested and approved under UL, ASTM, and BS standards.',
      image: 'assests/services/fireproofingnew.png',
      features: [
        'Structural Steel Fireproofing',
        'Process Unit Fire Protection',
        'Intumescent Coating Systems',
        'Cementitious Fireproofing',
        'Onshore & Offshore Applications',
        'Critical Asset Protection'
      ],
      benefits: [
        'Fire Integrity - UL, ASTM & BS certified systems',
        'Code Compliance - Meet international standards',
        'Aesthetic Finish - Professional application quality',
        'OEM Partnerships - Certified applicators & materials'
      ],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      gradientFrom: 'from-orange-600',
      gradientTo: 'to-orange-800'
    },
    {
      id: 'scaffolding',
      icon: Layers,
      title: 'Scaffolding Services',
      subtitle: 'Safe Access Solutions',
      description: 'We undertake design, erection, and dismantling of scaffolding systems for industrial, power, and infrastructure projects. Our scaffolding operations are fully compliant with international safety standards, ensuring safe access for construction, maintenance, and shutdown works.',
      image: 'assests/services/Scaffolding1.png',
      features: [
        'Design & Engineering Support',
        'Modular Scaffolding Systems',
        'Tubular Scaffolding Solutions',
        'System Scaffold Installations',
        'Construction & Maintenance Access',
        'Shutdown Project Support'
      ],
      benefits: [
        'Safety Standards - International compliance certified',
        'Third-Party Inspections - Regular quality audits',
        'Skilled Manpower - Trained scaffolding professionals',
        'Efficiency Focus - Stability & safe access guaranteed'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      gradientFrom: 'from-green-600',
      gradientTo: 'to-green-800'
    },
    {
      id: 'painting-blasting',
      icon: Paintbrush,
      title: 'Industrial Coating',
      subtitle: 'Surface Protection Systems',
      description: 'We provide surface preparation and protective coating systems for steel, piping, equipment, and tanks across industries. Our expertise includes abrasive blasting, epoxy and polyurethane coatings, anti-corrosive systems, and high-temperature coatings using products from leading manufacturers.',
      image: 'assests/services/Scaffolding.png',
      features: [
        'Abrasive Blasting Services',
        'Epoxy & Polyurethane Coatings',
        'Anti-Corrosive Systems',
        'High-Temperature Coatings',
        'Steel & Equipment Protection',
        'Tank Coating Applications'
      ],
      benefits: [
        'Maximum Protection - Superior durability in harsh environments',
        'Lifecycle Performance - Extended asset lifespan',
        'Quality Inspection - NACE/SSPC certified inspectors',
        'QA/QC Adherence - Strict quality control measures'
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      gradientFrom: 'from-purple-600',
      gradientTo: 'to-purple-800'
    },
    {
      id: 'civil-works',
      icon: Hammer,
      title: 'Specialized Civil Works',
      subtitle: 'Advanced Engineering Solutions',
      description: 'We execute a range of specialized civil engineering services including shotcreting, soil stabilization, soil nailing, and rock anchoring (both inclined and vertical). Our team delivers technically sound, site-specific solutions for retaining structures, slope protection, and foundation strengthening.',
      image: 'assests/services/civil.png',
      features: [
        'Shotcreting Applications',
        'Soil Stabilization Works',
        'Soil Nailing Systems',
        'Rock Anchoring (Inclined & Vertical)',
        'Retaining Structure Solutions',
        'Slope Protection & Foundation Strengthening'
      ],
      benefits: [
        'Technical Excellence - Site-specific engineered solutions',
        'Precision Equipment - Advanced civil engineering tools',
        'Qualified Engineers - Expert design & execution',
        'Long-Lasting Safety - Stringent supervision standards'
      ],
      color: 'text-gray-600',
      bgColor: 'bg-gray-50',
      gradientFrom: 'from-gray-600',
      gradientTo: 'to-gray-800'
    },
    {
      id: 'mechanical-fabrication',
      icon: Settings,
      title: 'Mechanical Erection',
      subtitle: 'Structural & Equipment Installation',
      description: 'Our mechanical division handles erection, alignment, and installation of steel structures, heavy equipment, and process piping for new build and brownfield projects. We are equipped for rigging, welding, hydrotesting, and commissioning support, adhering to stringent quality and safety norms.',
      image: 'assests/services/mechanical.png',
      features: [
        'Steel Structure Erection',
        'Heavy Equipment Installation',
        'Process Piping Systems',
        'Rigging & Lifting Operations',
        'Welding & Fabrication',
        'Hydrotesting & Commissioning'
      ],
      benefits: [
        'Accurate Execution - Precise alignment & fit-up',
        'Efficient Delivery - Meet critical project schedules',
        'Safety Compliance - Stringent quality & safety norms',
        'Full-Cycle Support - Fabrication to final installation'
      ],
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      gradientFrom: 'from-indigo-600',
      gradientTo: 'to-indigo-800'
    },
    {
      id: 'electrical-works',
      icon: Zap,
      title: 'Electrical Works',
      subtitle: 'Power & Instrumentation',
      description: 'We execute industrial and infrastructure electrical works covering LV/MV installations, cable laying, termination, earthing, lighting, and instrumentation cabling. Our services span new projects, maintenance, and shutdown activities, with a focus on reliability, safety, and system efficiency.',
      image: 'assests/services/electrical.png',
      features: [
        'LV/MV Power Installations',
        'Cable Laying & Termination',
        'Earthing & Grounding Systems',
        'Industrial Lighting Solutions',
        'Instrumentation Cabling',
        'Maintenance & Shutdown Support'
      ],
      benefits: [
        'Reliable Systems - Focus on operational efficiency',
        'Safety Compliance - Statutory regulation adherence',
        'Licensed Electricians - Qualified technical workforce',
        'End-to-End Solutions - Installation to maintenance'
      ],
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      gradientFrom: 'from-yellow-600',
      gradientTo: 'to-yellow-800'
    }
  ];

  const capabilities = [
    {
      icon: HardHat,
      title: 'Safety Excellence',
      description: 'Zero-incident safety culture with comprehensive training programs and strict adherence to international safety standards.',
      stats: 'HSE Certified'
    },
    {
      icon: Wrench,
      title: 'Technical Expertise',
      description: 'Skilled workforce with specialized certifications and extensive experience in complex industrial projects.',
      stats: 'Certified Professionals'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Robust QA/QC processes with rigorous quality control measures ensuring superior project outcomes.',
      stats: 'Quality Certified'
    },
    {
      icon: Cog,
      title: 'Advanced Equipment',
      description: 'State-of-the-art tools and equipment enabling efficient execution of specialized industrial services.',
      stats: 'Modern Technology'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Comprehensive industrial services delivering excellence across multiple disciplines
            </p>
          </div>
        </div>
      </section>

      {/* Service Navigation */}
      <section id="service-navigation" className="py-12 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <button
                  key={service.title}
                  onClick={() => setActiveService(index)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 text-left hover:scale-105 active:scale-95 ${
                    activeService === index
                      ? `border-orange-500 ${service.bgColor}`
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${
                    activeService === index ? service.bgColor : 'bg-gray-50'
                  }`}>
                    <IconComponent className={`h-6 w-6 ${
                      activeService === index ? service.color : 'text-gray-600'
                    }`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm lg:text-base">{service.title}</h3>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Service Details */}
      <section id="service-details" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            key={activeService}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center opacity-100 transform translate-y-0 transition-all duration-800"
          >
            <div>
              <div className="flex items-center mb-4">
                {React.createElement(services[activeService].icon, {
                  className: `h-12 w-12 ${services[activeService].color} mr-4`
                })}
                <div>
                  <h2 className="text-4xl font-bold text-gray-900">{services[activeService].title}</h2>
                  <p className="text-lg text-gray-600">{services[activeService].subtitle}</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                {services[activeService].description}
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Capabilities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {services[activeService].features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src={services[activeService].image}
                alt={services[activeService].title}
                className="rounded-xl shadow-xl w-full"
              />
            </div>
          </div>

          {/* Benefits Section */}
          <div
            key={`benefits-${activeService}`}
            className="mt-16 opacity-100 transform translate-y-0 transition-all duration-600"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services[activeService].benefits.map((benefit, index) => {
                const [title, description] = benefit.split(' - ');
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${services[activeService].gradientFrom} ${services[activeService].gradientTo} text-white p-6 rounded-xl`}
                  >
                    <h4 className="font-bold text-lg mb-2">{title}</h4>
                    <p className="text-gray-100">{description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Capabilities</h2>
            <p className="text-xl text-gray-600">
              Delivering excellence through expertise, safety, and advanced technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <div
                  key={capability.title}
                  className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{capability.title}</h3>
                  <p className="text-gray-600 mb-4">{capability.description}</p>
                  <div className="text-orange-600 font-bold text-lg">{capability.stats}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">
              Systematic approach ensuring quality delivery from consultation to completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: '01', title: 'Assessment', desc: 'Site evaluation and requirement analysis' },
              { step: '02', title: 'Planning', desc: 'Detailed engineering and project planning' },
              { step: '03', title: 'Preparation', desc: 'Resource mobilization and safety setup' },
              { step: '04', title: 'Execution', desc: 'Professional implementation with quality control' },
              { step: '05', title: 'Handover', desc: 'Testing, commissioning, and documentation' }
            ].map((phase, index) => (
              <div
                key={phase.step}
                className="text-center relative"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.desc}</p>
                {index < 4 && (
                  <ArrowRight className="h-6 w-6 text-orange-500 absolute top-8 -right-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Complete Industrial Solutions Provider</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-200">
              From thermal insulation to electrical works - we deliver comprehensive industrial services 
              with safety, quality, and efficiency at the forefront of everything we do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                Request Service Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/projects"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                View Our Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;