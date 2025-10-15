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
      subtitle: 'Thermal & Nuclear Power Plants',
      description: 'Comprehensive insulation solutions for power generation facilities including thermal power plants, nuclear facilities, and renewable energy installations.',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      services: [
        { icon: Shield, name: 'Boiler Insulation', desc: 'High-temperature insulation for power boilers' },
        { icon: Flame, name: 'Turbine Insulation', desc: 'Steam and gas turbine thermal protection' },
        { icon: Building2, name: 'Pipeline Insulation', desc: 'Steam and water pipeline insulation systems' },
        { icon: Volume2, name: 'Noise Control', desc: 'Acoustic solutions for power plant equipment' }
      ],
      challenges: [
        'Extreme temperature variations (up to 650°C)',
        'High-pressure steam systems',
        'Stringent safety and environmental regulations',
        'Minimal downtime requirements'
      ],
      solutions: [
        'Advanced refractory materials for extreme conditions',
        'Modular insulation systems for quick installation',
        'Compliance with power industry standards',
        'Emergency repair and maintenance services'
      ],
      projects: [
        'NTPC Thermal Power Plant - Boiler Insulation',
        'Reliance Power Plant - Turbine Insulation',
        'BHEL Project - Complete Insulation Package'
      ],
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      gradientFrom: 'from-yellow-500',
      gradientTo: 'to-orange-600'
    },
    {
      icon: Fuel,
      name: 'Oil & Gas / LNG',
      subtitle: 'Upstream, Midstream & Downstream',
      description: 'Specialized insulation services for oil refineries, gas processing plants, LNG terminals, and petrochemical complexes with focus on safety and efficiency.',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      services: [
        { icon: Shield, name: 'Pipeline Insulation', desc: 'Oil and gas pipeline thermal protection' },
        { icon: Flame, name: 'Vessel Insulation', desc: 'Storage tanks and pressure vessels' },
        { icon: Building2, name: 'Cryogenic Systems', desc: 'LNG and low-temperature applications' },
        { icon: Volume2, name: 'Fire Protection', desc: 'Fire-resistant insulation systems' }
      ],
      challenges: [
        'Hazardous and explosive environments',
        'Cryogenic temperatures (-162°C for LNG)',
        'Corrosive chemical exposure',
        'Strict safety and compliance requirements'
      ],
      solutions: [
        'Explosion-proof and fire-resistant materials',
        'Specialized cryogenic insulation systems',
        'Chemical-resistant barrier systems',
        'Comprehensive safety protocols and training'
      ],
      projects: [
        'ONGC Refinery - Complete Insulation Package',
        'Indian Oil LNG Terminal - Cryogenic Systems',
        'Reliance Petrochemicals - Heat Exchanger Insulation'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-cyan-600'
    },
    {
      icon: FlaskConical,
      name: 'Petrochemical',
      subtitle: 'Chemical Processing & Manufacturing',
      description: 'Advanced insulation solutions for petrochemical plants, chemical processing facilities, and manufacturing units handling complex chemical processes.',
      image: 'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      services: [
        { icon: Shield, name: 'Reactor Insulation', desc: 'Chemical reactor thermal management' },
        { icon: Flame, name: 'Heat Exchanger', desc: 'Process heat exchanger insulation' },
        { icon: Building2, name: 'Distillation Columns', desc: 'Column and tower insulation systems' },
        { icon: Volume2, name: 'Process Piping', desc: 'Chemical process pipeline insulation' }
      ],
      challenges: [
        'Complex chemical processes requiring precise temperature control',
        'Corrosive chemical environments',
        'High-pressure process conditions',
        'Contamination prevention requirements'
      ],
      solutions: [
        'Chemical-resistant insulation materials',
        'Precision temperature control systems',
        'Contamination-free installation processes',
        'Custom-engineered solutions for unique processes'
      ],
      projects: [
        'BASF Chemical Plant - Reactor Insulation',
        'Dow Chemicals - Process Unit Insulation',
        'Tata Chemicals - Complete Facility Package'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      gradientFrom: 'from-green-500',
      gradientTo: 'to-teal-600'
    },
    {
      icon: Wrench,
      name: 'Steel & Cement',
      subtitle: 'Heavy Industries & Manufacturing',
      description: 'Robust insulation solutions for steel plants, cement factories, and heavy manufacturing industries requiring high-temperature and wear-resistant systems.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      services: [
        { icon: Shield, name: 'Furnace Lining', desc: 'Blast furnace and steel furnace refractory' },
        { icon: Flame, name: 'Kiln Insulation', desc: 'Cement kiln and rotary kiln systems' },
        { icon: Building2, name: 'Duct Systems', desc: 'Hot gas duct and exhaust systems' },
        { icon: Volume2, name: 'Noise Control', desc: 'Industrial noise reduction solutions' }
      ],
      challenges: [
        'Extremely high operating temperatures (>1500°C)',
        'Severe mechanical wear and abrasion',
        'Heavy industrial environments',
        'Continuous operation requirements'
      ],
      solutions: [
        'Ultra-high temperature refractory materials',
        'Wear-resistant and abrasion-proof systems',
        'Heavy-duty industrial-grade insulation',
        'Minimal maintenance and long-life solutions'
      ],
      projects: [
        'Tata Steel - Blast Furnace Refractory',
        'JSW Steel - Rolling Mill Insulation',
        'UltraTech Cement - Kiln Insulation Package'
      ],
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      gradientFrom: 'from-red-500',
      gradientTo: 'to-orange-600'
    }
  ];

  const otherIndustries = [
    'Fertilizer Manufacturing',
    'Food Processing',
    'Pharmaceutical',
    'Textile Mills',
    'Paper & Pulp',
    'Glass Manufacturing'
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
              Delivering specialized insulation solutions across critical industrial sectors
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
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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