import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, User, CheckCircle, Filter } from 'lucide-react';

const Projects = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Power Generation', 'Oil & Gas', 'Petrochemical', 'Steel & Cement'];

  const projects = [
    {
      id: 1,
      title: 'NTPC Thermal Power Plant Insulation',
      category: 'Power Generation',
      client: 'NTPC Limited',
      location: 'Korba, Chhattisgarh',
      duration: '8 months',
      scope: 'Complete boiler and turbine insulation package',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenges: [
        'High-temperature environment (650°C)',
        'Minimal shutdown windows',
        'Strict safety protocols'
      ],
      solutions: [
        'Advanced refractory materials',
        'Modular installation system',
        '24/7 project management'
      ],
      results: [
        '15% improvement in thermal efficiency',
        'Zero safety incidents',
        'Project completed ahead of schedule'
      ],
      value: '₹25 Crores'
    },
    {
      id: 2,
      title: 'Reliance Refinery Heat Exchanger Insulation',
      category: 'Oil & Gas',
      client: 'Reliance Industries',
      location: 'Jamnagar, Gujarat',
      duration: '6 months',
      scope: 'Heat exchanger and pipeline insulation',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenges: [
        'Hazardous chemical environment',
        'Complex piping layout',
        'Continuous plant operations'
      ],
      solutions: [
        'Chemical-resistant materials',
        'Precision-fit modular systems',
        'Night shift operations'
      ],
      results: [
        '20% reduction in heat loss',
        'Improved process efficiency',
        'Enhanced safety standards'
      ],
      value: '₹18 Crores'
    },
    {
      id: 3,
      title: 'ONGC LNG Terminal Cryogenic Systems',
      category: 'Oil & Gas',
      client: 'Oil and Natural Gas Corporation',
      location: 'Dahej, Gujarat',
      duration: '10 months',
      scope: 'LNG storage tank and pipeline insulation',
      image: 'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenges: [
        'Cryogenic temperatures (-162°C)',
        'Specialized materials required',
        'Precision installation needs'
      ],
      solutions: [
        'Multi-layer insulation system',
        'Vapor barrier technology',
        'Specialized installation team'
      ],
      results: [
        '99.5% thermal efficiency achieved',
        'Zero boil-off gas losses',
        'International quality standards'
      ],
      value: '₹35 Crores'
    },
    {
      id: 4,
      title: 'Tata Steel Blast Furnace Refractory',
      category: 'Steel & Cement',
      client: 'Tata Steel Limited',
      location: 'Jamshedpur, Jharkhand',
      duration: '12 months',
      scope: 'Complete blast furnace refractory lining',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenges: [
        'Extreme temperatures (1500°C+)',
        'Heavy mechanical stress',
        'Corrosive slag environment'
      ],
      solutions: [
        'Ultra-high temperature refractories',
        'Advanced gunning techniques',
        'Continuous monitoring systems'
      ],
      results: [
        'Extended furnace campaign life',
        'Reduced maintenance downtime',
        'Improved steel quality'
      ],
      value: '₹42 Crores'
    },
    {
      id: 5,
      title: 'BASF Chemical Plant Process Unit Insulation',
      category: 'Petrochemical',
      client: 'BASF India Limited',
      location: 'Mangalore, Karnataka',
      duration: '7 months',
      scope: 'Reactor and distillation column insulation',
      image: 'https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-162539.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenges: [
        'Chemical compatibility requirements',
        'Precise temperature control',
        'Contamination prevention'
      ],
      solutions: [
        'Inert insulation materials',
        'Controlled atmosphere installation',
        'Quality assurance protocols'
      ],
      results: [
        'Optimal process temperature control',
        'Zero contamination incidents',
        'Enhanced product quality'
      ],
      value: '₹22 Crores'
    },
    {
      id: 6,
      title: 'JSW Energy Power Plant Modernization',
      category: 'Power Generation',
      client: 'JSW Energy Limited',
      location: 'Ratnagiri, Maharashtra',
      duration: '9 months',
      scope: 'Turbine and auxiliary equipment insulation',
      image: 'https://images.pexels.com/photos/256219/pexels-photo-256219.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenges: [
        'Plant modernization during operation',
        'Integration with existing systems',
        'Performance improvement targets'
      ],
      solutions: [
        'Phased installation approach',
        'Custom-designed interfaces',
        'Performance optimization techniques'
      ],
      results: [
        '18% increase in plant efficiency',
        'Reduced carbon emissions',
        'Improved operational reliability'
      ],
      value: '₹28 Crores'
    }
  ];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="py-20 relative"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Showcasing excellence in industrial insulation across diverse sectors and challenging environments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center mr-4 mb-4">
              <Filter className="h-5 w-5 text-gray-600 mr-2" />
              <span className="text-gray-700 font-medium">Filter by Industry:</span>
            </div>
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 mb-4 ${
                  selectedFilter === filter
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {project.value}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.scope}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="h-4 w-4 mr-2 text-orange-500" />
                      {project.client}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 md:col-span-2">
                      <Calendar className="h-4 w-4 mr-2 text-orange-500" />
                      Duration: {project.duration}
                    </div>
                  </div>

                  {/* Expandable Details */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Challenges</h4>
                      <ul className="space-y-1">
                        {project.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <div className="w-2 h-2 bg-red-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Our Solutions</h4>
                      <ul className="space-y-1">
                        {project.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Results Achieved</h4>
                      <ul className="space-y-1">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Project Excellence by Numbers</h2>
            <p className="text-xl text-blue-200">
              Delivering consistent results across all project scales and complexities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '₹2000+', label: 'Crores Project Value' },
              { number: '100%', label: 'Safety Record' },
              { number: '98%', label: 'On-Time Delivery' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-orange-500 mb-2">{stat.number}</div>
                <p className="text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our satisfied clients and experience the REFRANOX difference in project execution and quality delivery.
            </p>
            <motion.button
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discuss Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;