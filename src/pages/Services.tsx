import React, { useState } from 'react';
import { Shield, Layers, Paintbrush, Flame, Building2, Settings, Hammer, Zap, CheckCircle, ArrowRight, Wrench, HardHat, Cog, Link } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Shield,
      title: 'Industrial Insulation',
      subtitle: 'Comprehensive Thermal Protection',
      description: 'Advanced thermal insulation solutions for industrial equipment, pipelines, tanks, and HVAC systems. Our services ensure optimal energy efficiency, temperature control, and protection against harsh industrial environments.',
      image: 'assests/home/insulationservices4.png',
      features: [
        'Hot & Cold Pipeline Insulation',
        'Tank and Vessel Insulation',
        'HVAC Duct Insulation Systems',
        'Acoustic Insulation Solutions',
        'Refractory Insulation Applications',
        'Energy-Efficient Cladding Systems'
      ],
      benefits: [
        'Energy Efficiency - Reduce heat loss by up to 95%',
        'Cost Reduction - Lower operational and maintenance costs',
        'Asset Protection - Extend equipment lifespan',
        'Safety Enhancement - Improved working conditions'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      gradientFrom: 'from-blue-600',
      gradientTo: 'to-blue-800'
    },
    {
      icon: Flame,
      title: 'Refractory Application Works',
      subtitle: 'High-Temperature Solutions',
      description: 'Specialized refractory installation and maintenance services for furnaces, boilers, and high-temperature industrial equipment. Expert solutions for extreme heat applications.',
      image: 'assests/services/refractory.png',
      features: [
        'Furnace Refractory Lining',
        'Boiler Refractory Installation',
        'Castable Refractory Applications',
        'Refractory Brick Installation',
        'Gunning & Ramming Services',
        'Emergency Refractory Repairs'
      ],
      benefits: [
        'High Temperature Resistance - Withstand up to 1800°C',
        'Thermal Shock Protection - Handle rapid temperature changes',
        'Extended Service Life - Durable high-performance materials',
        'Energy Efficiency - Optimized heat retention'
      ],
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      gradientFrom: 'from-red-600',
      gradientTo: 'to-red-800'
    },
    {
      icon: Building2,
      title: 'Passive Fire Proofing Works',
      subtitle: 'Passive Fire Protection',
      description: 'Comprehensive fire protection services including structural fireproofing, intumescent coatings, and fire-resistant systems to ensure safety and regulatory compliance.',
      image: 'assests/services/fireproofingnew.png',
      features: [
        'Structural Steel Fireproofing',
        'Intumescent Coating Systems',
        'Fire-Resistant Board Installation',
        'Penetration Sealing Systems',
        'Fire Barrier Construction',
        'Passive Fire Protection Audits'
      ],
      benefits: [
        'Life Safety - Protect personnel and assets',
        'Regulatory Compliance - Meet fire safety codes',
        'Insurance Benefits - Reduce premium costs',
        'Asset Protection - Minimize fire damage'
      ],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      gradientFrom: 'from-orange-600',
      gradientTo: 'to-orange-800'
    },
    {
      icon: Layers,
      title: 'Scaffolding Works',
      subtitle: 'Safe Access Solutions',
      description: 'Professional scaffolding services providing safe, reliable access solutions for construction, maintenance, and industrial projects. We ensure compliance with safety standards and optimal working conditions.',
      image: 'assests/services/Scaffolding1.png',
      features: [
        'Tube & Coupler Scaffolding Systems',
        'System Scaffolding Solutions',
        'Mobile Access Towers',
        'Suspended Access Platforms',
        'Stairway Access Systems',
        'Specialized Industrial Scaffolding'
      ],
      benefits: [
        'Safety Compliance - Meet international safety standards',
        'Flexible Design - Adaptable to complex structures',
        'Quick Installation - Minimize project downtime',
        'Cost Effective - Optimized resource utilization'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      gradientFrom: 'from-green-600',
      gradientTo: 'to-green-800'
    },
    
    {
      icon: Paintbrush,
      title: 'Industrial Coating Applications',
      subtitle: 'Surface Protection & Coating',
      description: 'Complete surface preparation and protective coating services including abrasive blasting, industrial painting, and specialized coating applications for long-lasting asset protection.',
      image: 'assests/services/Scaffolding.png',
      features: [
        'Abrasive Blasting Services',
        'Industrial Protective Coatings',
        'Anti-Corrosion Painting Systems',
        'Fireproof Coating Applications',
        'Specialized Marine Coatings',
        'Surface Preparation & Treatment'
      ],
      benefits: [
        'Corrosion Protection - Extend asset life by decades',
        'Weather Resistance - Superior environmental protection',
        'Quality Assurance - Certified coating systems',
        'Aesthetic Enhancement - Professional finish quality'
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      gradientFrom: 'from-purple-600',
      gradientTo: 'to-purple-800'
    },
    
    
    {
      icon: Settings,
      title: 'Mechanical Fabrication & Erection',
      subtitle: 'Precision Engineering Solutions',
      description: 'Complete mechanical fabrication and erection services including custom equipment manufacturing, structural steel work, and precision installation services.',
      image: 'assests/services/mechanical.png',
      features: [
        'Custom Equipment Fabrication',
        'Structural Steel Erection',
        'Piping System Installation',
        'Pressure Vessel Fabrication',
        'Mechanical Equipment Installation',
        'Precision Machining Services'
      ],
      benefits: [
        'Quality Fabrication - Certified welding and machining',
        'Precision Installation - Exact dimensional requirements',
        'Project Integration - Seamless coordination',
        'Cost Optimization - Efficient manufacturing processes'
      ],
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      gradientFrom: 'from-indigo-600',
      gradientTo: 'to-indigo-800'
    },
    {
      icon: Hammer,
      title: 'Civil Works',
      subtitle: 'Foundation & Infrastructure',
      description: 'Comprehensive civil construction services including foundations, structural concrete work, and infrastructure development for industrial and commercial projects.',
      image: 'assests/services/civil.png',
      features: [
        'Foundation Construction',
        'Structural Concrete Works',
        'Site Preparation & Earthworks',
        'Underground Utilities Installation',
        'Road & Pavement Construction',
        'Drainage System Installation'
      ],
      benefits: [
        'Strong Foundations - Ensure structural integrity',
        'Quality Construction - Meet engineering specifications',
        'Timely Delivery - Efficient project execution',
        'Regulatory Compliance - Adhere to building codes'
      ],
      color: 'text-gray-600',
      bgColor: 'bg-gray-50',
      gradientFrom: 'from-gray-600',
      gradientTo: 'to-gray-800'
    },
    {
      icon: Zap,
      title: 'Electrical Works',
      subtitle: 'Power & Control Systems',
      description: 'Complete electrical installation and maintenance services including power distribution, control systems, lighting, and instrumentation for industrial facilities.',
      image: 'assests/services/electrical.png',
      features: [
        'Power Distribution Systems',
        'Motor Control Centers',
        'Industrial Lighting Systems',
        'Instrumentation & Controls',
        'Cable Tray & Conduit Installation',
        'Electrical Panel Fabrication'
      ],
      benefits: [
        'Reliable Power - Ensure continuous operations',
        'Safety Systems - Comprehensive protection',
        'Energy Efficiency - Optimized electrical systems',
        'Code Compliance - Meet electrical standards'
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
      stats: '2M+ Safe Work Hours'
    },
    {
      icon: Wrench,
      title: 'Technical Expertise',
      description: 'Skilled workforce with specialized certifications and extensive experience in complex industrial projects.',
      stats: '50+ Certified Technicians'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'ISO certified processes with rigorous quality control measures ensuring superior project outcomes.',
      stats: 'ISO 9001:2015 Certified'
    },
    {
      icon: Cog,
      title: 'Advanced Equipment',
      description: 'State-of-the-art tools and equipment enabling efficient execution of specialized industrial services.',
      stats: 'Latest Technology'
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
      <section className="py-12 bg-white shadow-sm">
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
      <section className="py-20 bg-gray-50">
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
              From insulation to electrical works - we deliver comprehensive industrial services 
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