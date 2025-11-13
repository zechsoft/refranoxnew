import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Zap, 
  Fuel, 
  FlaskConical, 
  Wrench, 
  Factory,
  Shield,
  Flame,
  Building2,
  Volume2,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Industries = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [heroRef, heroInView] = useInView({ triggerOnce: true });

  const industries = [
    {
      icon: Zap,
      name: 'Power Generation',
      subtitle: 'Thermal, Nuclear & Renewable Plants',
      description: 'We provide specialized services for boilers, turbines, heat exchangers, and balance-of-plant systems in thermal and nuclear power stations. Our insulation, refractory, and coating solutions enhance efficiency, safety, and reliability, while our civil and mechanical teams support structural, piping, and electrical works in both conventional and renewable energy plants.',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      services: [
        { icon: Shield, name: 'Boiler & Turbine Systems', desc: 'Specialized insulation and refractory solutions' },
        { icon: Flame, name: 'Heat Exchangers', desc: 'Thermal protection and efficiency enhancement' },
        { icon: Building2, name: 'Balance-of-Plant', desc: 'Civil, mechanical & electrical works' },
        { icon: Volume2, name: 'Renewable Energy', desc: 'Support for solar, wind & hybrid plants' }
      ],
      challenges: [
        'High-temperature boiler and turbine systems',
        'Stringent efficiency and safety requirements',
        'Complex balance-of-plant infrastructure',
        'Integration with renewable energy systems'
      ],
      solutions: [
        'Advanced insulation & refractory applications',
        'Coating solutions for enhanced reliability',
        'Comprehensive civil & mechanical support',
        'Electrical works for conventional & renewable plants'
      ],
      projects: [
        'NTPC Thermal Power Station - Complete Package',
        'Nuclear Power Plant - Specialized Insulation',
        'Renewable Energy Project - MEP Works'
      ],
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      gradientFrom: 'from-yellow-500',
      gradientTo: 'to-orange-600'
    },
    {
      icon: Fuel,
      name: 'Oil & Gas',
      subtitle: 'Upstream, Midstream & Downstream',
      description: 'We support oil and gas facilities with turnkey insulation, fireproofing, coating, and mechanical erection services that meet stringent international standards. From refineries and petrochemical complexes to offshore platforms and terminals, we ensure asset integrity, corrosion protection, and operational safety across every stage of the value chain.',
      image: 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      services: [
        { icon: Shield, name: 'Refineries & Terminals', desc: 'Complete insulation & fireproofing solutions' },
        { icon: Flame, name: 'Offshore Platforms', desc: 'Marine-grade coating and protection systems' },
        { icon: Building2, name: 'Asset Integrity', desc: 'Corrosion protection & maintenance services' },
        { icon: Volume2, name: 'Mechanical Erection', desc: 'Piping, structural & equipment installation' }
      ],
      challenges: [
        'Hazardous and corrosive environments',
        'Stringent international safety standards',
        'Complex offshore and onshore operations',
        'Asset integrity and lifecycle management'
      ],
      solutions: [
        'Turnkey insulation & fireproofing services',
        'International standard compliant coating systems',
        'Comprehensive mechanical erection capabilities',
        'QA/QC and HSE protocol implementation'
      ],
      projects: [
        'ONGC Refinery - Complete Insulation Package',
        'Offshore Platform - Fireproofing & Coating',
        'Petrochemical Complex - Turnkey Services'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-cyan-600'
    },
    {
      icon: FlaskConical,
      name: 'Petrochemical & Chemical',
      subtitle: 'Process & Manufacturing Plants',
      description: 'Our team delivers comprehensive thermal, refractory, and protective coating systems for reactors, reformers, columns, and storage facilities. We provide process-critical civil, mechanical, and electrical works that support safe, efficient, and compliant operations in continuous process environments.',
      image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      services: [
        { icon: Shield, name: 'Reactors & Reformers', desc: 'High-temperature thermal solutions' },
        { icon: Flame, name: 'Columns & Vessels', desc: 'Specialized insulation & coating systems' },
        { icon: Building2, name: 'Storage Facilities', desc: 'Tank and vessel protection systems' },
        { icon: Volume2, name: 'Process-Critical Works', desc: 'Civil, mechanical & electrical services' }
      ],
      challenges: [
        'Continuous process environments',
        'Chemical exposure and corrosion risks',
        'High-temperature reactor systems',
        'Safety and compliance requirements'
      ],
      solutions: [
        'Comprehensive thermal & refractory systems',
        'Chemical-resistant protective coatings',
        'Process-critical infrastructure support',
        'Integrated civil, mechanical & electrical works'
      ],
      projects: [
        'Chemical Plant - Reactor Insulation Package',
        'Petrochemical Complex - Coating Systems',
        'Process Unit - Complete MEP Works'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      gradientFrom: 'from-green-500',
      gradientTo: 'to-teal-600'
    },
    {
      icon: Wrench,
      name: 'Steel & Metallurgical',
      subtitle: 'Metal Processing Industries',
      description: 'We execute refractory linings, insulation, and coating applications for furnaces, ladles, kilns, and structural systems used in steelmaking and metal processing. With mechanical and civil expertise, we undertake erection, maintenance, and shutdown works that improve equipment life, plant uptime, and production efficiency.',
      image: 'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      services: [
        { icon: Shield, name: 'Furnace & Ladle Lining', desc: 'High-temperature refractory systems' },
        { icon: Flame, name: 'Kiln Applications', desc: 'Specialized insulation & coating works' },
        { icon: Building2, name: 'Structural Systems', desc: 'Mechanical erection & civil works' },
        { icon: Volume2, name: 'Shutdown Services', desc: 'Maintenance and turnaround support' }
      ],
      challenges: [
        'Extreme high-temperature operations (>1500°C)',
        'Severe mechanical wear and abrasion',
        'Continuous production requirements',
        'Complex shutdown and maintenance schedules'
      ],
      solutions: [
        'Ultra-high temperature refractory linings',
        'Durable insulation and coating systems',
        'Expert mechanical and civil support',
        'Efficient shutdown and maintenance execution'
      ],
      projects: [
        'Tata Steel - Blast Furnace Refractory',
        'JSW Steel - Complete Insulation Package',
        'Steel Plant - Shutdown & Maintenance Services'
      ],
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      gradientFrom: 'from-red-500',
      gradientTo: 'to-orange-600'
    },
    {
      icon: Factory,
      name: 'Cement & Lime',
      subtitle: 'Manufacturing Units',
      description: 'Our services cover high-temperature refractory linings, insulation, and structural maintenance for kilns, preheaters, coolers, and ducts. We also execute shotcreting, anchoring, and coating works to improve thermal performance and plant reliability under demanding operating conditions.',
      image: 'https://images.pexels.com/photos/586019/pexels-photo-586019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      services: [
        { icon: Shield, name: 'Kiln Refractory', desc: 'High-temperature lining systems' },
        { icon: Flame, name: 'Preheaters & Coolers', desc: 'Thermal insulation solutions' },
        { icon: Building2, name: 'Shotcreting & Anchoring', desc: 'Structural maintenance works' },
        { icon: Volume2, name: 'Duct Systems', desc: 'Coating and protection applications' }
      ],
      challenges: [
        'High-temperature continuous operations',
        'Thermal cycling and material degradation',
        'Dust and abrasive environments',
        'Structural integrity maintenance'
      ],
      solutions: [
        'Advanced refractory lining systems',
        'Specialized insulation for extreme conditions',
        'Shotcreting and anchoring expertise',
        'Comprehensive coating and maintenance works'
      ],
      projects: [
        'UltraTech Cement - Kiln Refractory Package',
        'Cement Plant - Complete Insulation Works',
        'Lime Manufacturing - Structural Maintenance'
      ],
      color: 'text-gray-600',
      bgColor: 'bg-gray-50',
      gradientFrom: 'from-gray-500',
      gradientTo: 'to-gray-700'
    },
    {
      icon: FlaskConical,
      name: 'Fertilizer & Process',
      subtitle: 'Chemical Process Industries',
      description: 'We offer corrosion-resistant coating systems, insulation, and fireproofing for ammonia, urea, and process units in fertilizer and chemical industries. Our integrated civil and mechanical works ensure safe construction, modification, and maintenance of critical process infrastructure.',
      image: 'https://images.pexels.com/photos/534163/pexels-photo-534163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      services: [
        { icon: Shield, name: 'Ammonia & Urea Units', desc: 'Specialized insulation & fireproofing' },
        { icon: Flame, name: 'Corrosion Protection', desc: 'Chemical-resistant coating systems' },
        { icon: Building2, name: 'Process Infrastructure', desc: 'Civil & mechanical works' },
        { icon: Volume2, name: 'Plant Modifications', desc: 'Construction & maintenance support' }
      ],
      challenges: [
        'Corrosive chemical environments',
        'High-pressure process systems',
        'Safety and environmental regulations',
        'Complex process integration requirements'
      ],
      solutions: [
        'Corrosion-resistant coating and insulation',
        'Comprehensive fireproofing solutions',
        'Integrated civil and mechanical capabilities',
        'Safe construction and modification services'
      ],
      projects: [
        'Fertilizer Plant - Complete Coating Package',
        'Urea Unit - Insulation & Fireproofing',
        'Process Industry - Civil & Mechanical Works'
      ],
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      gradientFrom: 'from-emerald-500',
      gradientTo: 'to-green-600'
    },
    {
      icon: Fuel,
      name: 'Refineries & LNG',
      subtitle: 'Terminals & Processing Facilities',
      description: 'We are experienced in cryogenic insulation, passive fireproofing, and coating systems for LNG terminals, refinery process units, and storage tanks. Our capabilities include mechanical erection, scaffolding, and electrical works, executed under stringent QA/QC and HSE requirements for brownfield and greenfield projects.',
      image: 'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      services: [
        { icon: Shield, name: 'Cryogenic Insulation', desc: 'LNG terminal specialized systems' },
        { icon: Flame, name: 'Passive Fireproofing', desc: 'Process unit fire protection' },
        { icon: Building2, name: 'Storage Tanks', desc: 'Tank coating and insulation works' },
        { icon: Volume2, name: 'MEP Services', desc: 'Mechanical, electrical & scaffolding' }
      ],
      challenges: [
        'Cryogenic temperature requirements (-162°C)',
        'Stringent QA/QC and HSE protocols',
        'Complex brownfield and greenfield projects',
        'Multi-disciplinary integration needs'
      ],
      solutions: [
        'Specialized cryogenic insulation systems',
        'Comprehensive passive fireproofing',
        'Expert mechanical erection and scaffolding',
        'Integrated electrical works and QA/QC compliance'
      ],
      projects: [
        'LNG Terminal - Cryogenic Insulation Package',
        'Refinery - Complete Fireproofing Works',
        'Storage Facility - Coating & MEP Services'
      ],
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      gradientFrom: 'from-cyan-500',
      gradientTo: 'to-blue-600'
    },
    {
      icon: Building2,
      name: 'Infrastructure & Buildings',
      subtitle: 'Commercial & Industrial Projects',
      description: 'Our civil and MEP teams deliver comprehensive construction, finishing, and protection systems for commercial, industrial, and institutional infrastructure. We specialize in fireproofing, coating, and electrical installations, ensuring safety, sustainability, and aesthetic excellence in modern infrastructure development.',
      image: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      services: [
        { icon: Shield, name: 'Construction & Finishing', desc: 'Complete civil and MEP works' },
        { icon: Flame, name: 'Fireproofing Systems', desc: 'Building fire protection solutions' },
        { icon: Building2, name: 'Coating Applications', desc: 'Protective and aesthetic coatings' },
        { icon: Volume2, name: 'Electrical Installations', desc: 'Power and control systems' }
      ],
      challenges: [
        'Complex multi-disciplinary coordination',
        'Safety and sustainability requirements',
        'Aesthetic and functional integration',
        'Modern building code compliance'
      ],
      solutions: [
        'Comprehensive civil and MEP capabilities',
        'Advanced fireproofing and coating systems',
        'Professional electrical installation services',
        'Safety, sustainability & aesthetic excellence'
      ],
      projects: [
        'Commercial Complex - Complete MEP Package',
        'Industrial Building - Fireproofing Works',
        'Institutional Project - Civil & Electrical Services'
      ],
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      gradientFrom: 'from-indigo-500',
      gradientTo: 'to-purple-600'
    }
  ];

  const otherIndustries = [
    'Pharmaceutical',
    'Food Processing',
    'Ports & Marine',
    'Water Treatment',
    'Desalination Plants',
    'Data Centers',
    'Industrial Warehouses',
    'Offshore Facilities'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="py-20 relative"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-162539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Multi-disciplinary engineering, construction, and maintenance solutions across critical industrial sectors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Navigation */}
      <section className="py-12 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.button
                  key={industry.name}
                  onClick={() => setActiveIndustry(index)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                    activeIndustry === index
                      ? `border-orange-500 ${industry.bgColor}`
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${
                    activeIndustry === index ? industry.bgColor : 'bg-gray-50'
                  }`}>
                    <IconComponent className={`h-6 w-6 ${
                      activeIndustry === index ? industry.color : 'text-gray-600'
                    }`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm lg:text-base">{industry.name}</h3>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Industry Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={activeIndustry}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Industry Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="flex items-center mb-4">
                  {React.createElement(industries[activeIndustry].icon, {
                    className: `h-12 w-12 ${industries[activeIndustry].color} mr-4`
                  })}
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900">{industries[activeIndustry].name}</h2>
                    <p className="text-lg text-gray-600">{industries[activeIndustry].subtitle}</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600">
                  {industries[activeIndustry].description}
                </p>
              </div>
              
              <div>
                <img
                  src={industries[activeIndustry].image}
                  alt={industries[activeIndustry].name}
                  className="rounded-xl shadow-xl w-full"
                />
              </div>
            </div>

            {/* Services for Industry */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Services for {industries[activeIndustry].name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {industries[activeIndustry].services.map((service, index) => {
                  const ServiceIcon = service.icon;
                  return (
                    <motion.div
                      key={service.name}
                      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${industries[activeIndustry].bgColor}`}>
                        <ServiceIcon className={`h-6 w-6 ${industries[activeIndustry].color}`} />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{service.name}</h4>
                      <p className="text-gray-600 text-sm">{service.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                className="bg-white p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Industry Challenges</h4>
                <ul className="space-y-3">
                  {industries[activeIndustry].challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Our Solutions</h4>
                <ul className="space-y-3">
                  {industries[activeIndustry].solutions.map((solution, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{solution}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Featured Projects */}
            <motion.div
              className={`bg-gradient-to-r ${industries[activeIndustry].gradientFrom} ${industries[activeIndustry].gradientTo} text-white p-8 rounded-xl`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h4 className="text-2xl font-bold mb-6">Featured Projects</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {industries[activeIndustry].projects.map((project, index) => (
                  <div key={index} className="bg-white/10 p-4 rounded-lg">
                    <h5 className="font-semibold mb-1">{project.split(' - ')[0]}</h5>
                    <p className="text-sm opacity-90">{project.split(' - ')[1]}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Other Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Other Industries We Serve</h2>
            <p className="text-xl text-gray-600">
              Expanding our expertise across diverse industrial sectors
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {otherIndustries.map((industry, index) => (
              <motion.div
                key={industry}
                className="bg-gray-50 p-4 rounded-lg text-center hover:bg-blue-50 hover:border-blue-200 border-2 border-transparent transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Factory className="h-8 w-8 text-gray-600 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-800">{industry}</span>
              </motion.div>
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
            <h2 className="text-4xl font-bold mb-4">Your Industry, Our Expertise</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-200">
              Don't see your industry listed? We have experience across many sectors. 
              Contact us to discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                Discuss Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/projects"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Industries;