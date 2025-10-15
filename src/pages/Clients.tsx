import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, Building2, Award } from 'lucide-react';

const Clients = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });

  const clients = [
    {
      name: 'NTPC Limited',
      logo: 'NTPC',
      sector: 'Power Generation',
      relationship: '15+ Years',
      projects: '25+',
      description: 'Long-term partnership for thermal insulation across multiple power plants'
    },
    {
      name: 'Reliance Industries',
      logo: 'RIL',
      sector: 'Oil & Gas',
      relationship: '12+ Years', 
      projects: '18+',
      description: 'Comprehensive refinery insulation and maintenance services'
    },
    {
      name: 'Oil & Natural Gas Corporation',
      logo: 'ONGC',
      sector: 'Oil & Gas',
      relationship: '20+ Years',
      projects: '30+',
      description: 'Specialized services for offshore and onshore facilities'
    },
    {
      name: 'Tata Steel Limited',
      logo: 'TATA',
      sector: 'Steel & Manufacturing',
      relationship: '18+ Years',
      projects: '22+',
      description: 'High-temperature refractory solutions for steel production'
    },
    {
      name: 'Indian Oil Corporation',
      logo: 'IOCL',
      sector: 'Oil & Gas',
      relationship: '16+ Years',
      projects: '20+',
      description: 'Refinery modernization and efficiency improvement projects'
    },
    {
      name: 'Larsen & Toubro',
      logo: 'L&T',
      sector: 'Engineering & Construction',
      relationship: '10+ Years',
      projects: '35+',
      description: 'Turnkey insulation solutions for diverse industrial projects'
    },
    {
      name: 'BHEL',
      logo: 'BHEL',
      sector: 'Heavy Engineering',
      relationship: '14+ Years',
      projects: '28+',
      description: 'Power plant equipment insulation and maintenance services'
    },
    {
      name: 'JSW Group',
      logo: 'JSW',
      sector: 'Steel & Energy',
      relationship: '8+ Years',
      projects: '15+',
      description: 'Integrated solutions for steel plants and power facilities'
    }
  ];

  const testimonials = [
    {
      quote: "REFRANOX has been our trusted partner for over 15 years. Their expertise in high-temperature insulation and commitment to safety standards makes them our preferred choice for all thermal power projects.",
      author: "Rajesh Mehta",
      position: "General Manager - Operations",
      company: "NTPC Limited",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      quote: "The quality of work and professional approach of REFRANOX team is exceptional. They have consistently delivered complex refinery insulation projects on time and within budget.",
      author: "Priya Sharma",
      position: "Project Director",
      company: "Reliance Industries",
      image: "https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      quote: "REFRANOX's expertise in cryogenic insulation for our LNG terminals has been invaluable. Their technical knowledge and execution capabilities are world-class.",
      author: "Amit Kumar",
      position: "Chief Engineer",
      company: "ONGC",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const stats = [
    { number: '100+', label: 'Satisfied Clients' },
    { number: '500+', label: 'Projects Delivered' },
    { number: '25+', label: 'Years Experience' },
    { number: '99%', label: 'Client Retention' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="py-20 relative"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/256219/pexels-photo-256219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Clients</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Trusted by industry leaders across diverse sectors for excellence in industrial insulation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Statistics */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
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

      {/* Major Clients Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Major Clients</h2>
            <p className="text-xl text-gray-600">
              Building lasting partnerships with industry leaders
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-4">
                  <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Building2 className="h-10 w-10 text-blue-600" />
                  </div>
                  <div className="bg-gray-100 px-4 py-2 rounded-lg mb-2">
                    <span className="font-bold text-lg text-gray-900">{client.logo}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">{client.name}</h3>
                  <p className="text-xs text-gray-600 mb-3">{client.sector}</p>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Partnership:</span>
                    <span className="font-medium text-blue-600">{client.relationship}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Projects:</span>
                    <span className="font-medium text-orange-600">{client.projects}</span>
                  </div>
                </div>
                
                <p className="text-xs text-gray-600 mt-3 border-t pt-3">
                  {client.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Hear from industry leaders about their experience working with REFRANOX
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start mb-4">
                  <Quote className="h-8 w-8 text-orange-500 mr-3 flex-shrink-0" />
                  <div className="flex text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Sectors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sectors We Serve</h2>
            <p className="text-xl text-gray-600">
              Diverse client portfolio across critical industrial sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Power Generation', count: '35+', icon: '⚡' },
              { name: 'Oil & Gas', count: '28+', icon: '🛢️' },
              { name: 'Petrochemical', count: '22+', icon: '🧪' },
              { name: 'Steel & Manufacturing', count: '18+', icon: '🏭' }
            ].map((sector, index) => (
              <motion.div
                key={sector.name}
                className="bg-white p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-3">{sector.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{sector.name}</h3>
                <div className="text-2xl font-bold text-orange-500">{sector.count}</div>
                <p className="text-sm text-gray-600">Clients</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Approach */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Partnership Approach</h2>
              <div className="space-y-4 text-lg">
                <p>
                  At REFRANOX, we believe in building long-term partnerships rather than just completing projects. 
                  Our client-centric approach focuses on understanding your unique challenges and delivering 
                  customized solutions that exceed expectations.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Award className="h-6 w-6 text-orange-500 mr-3" />
                    <span>Dedicated account management</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-6 w-6 text-orange-500 mr-3" />
                    <span>Continuous innovation and improvement</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-6 w-6 text-orange-500 mr-3" />
                    <span>24/7 technical support and maintenance</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-6 w-6 text-orange-500 mr-3" />
                    <span>Transparent communication and reporting</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-xl shadow-xl"
              />
            </motion.div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Family of Satisfied Clients</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the REFRANOX difference. Let us become your trusted partner for all industrial insulation needs.
            </p>
            <motion.button
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Become Our Partner
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Clients;