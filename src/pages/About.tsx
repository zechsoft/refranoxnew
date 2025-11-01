import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Eye, Heart, Users, Award, MapPin } from 'lucide-react';

const About = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true });
  const [teamRef, teamInView] = useInView({ triggerOnce: true });

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To deliver world-class industrial insulation and refractory solutions that enhance operational efficiency, ensure safety, and contribute to sustainable industrial growth.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be the most trusted and innovative provider of thermal protection solutions across India and beyond, setting industry benchmarks for quality and reliability.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Heart,
      title: 'Core Values',
      description: 'Safety first, quality excellence, customer satisfaction, innovation, integrity, and environmental responsibility guide every decision we make.',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      position: 'Managing Director',
      experience: '25+ years',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Priya Sharma',
      position: 'Technical Director',
      experience: '20+ years',
      image: 'https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Amit Patel',
      position: 'Operations Head',
      experience: '18+ years',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Sunita Singh',
      position: 'Quality Manager',
      experience: '15+ years',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'ISO 14001:2015 Environmental Management',
    'ISO 45001:2018 Occupational Health & Safety',
    'NSIC Certificate',
    'PED Certification',
    'ASME Certification'
  ];

  const locations = [
    'Mumbai - Head Office',
    'Delhi - Northern Region',
    'Chennai - Southern Region',
    'Kolkata - Eastern Region',
    'Pune - Western Region',
    'Vadodara - Gujarat Operations'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
     <section
  ref={heroRef}
  className="py-20 relative"
  style={{
    backgroundImage: 'url(https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
  }}
>
  <div className="absolute inset-0 bg-black/60"></div>
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center text-white max-w-4xl mx-auto transition-all duration-1000 opacity-100 translate-y-0">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">About REFRANOX</h1>
      <p className="text-xl md:text-2xl text-gray-200 mb-4">
        Forward-Thinking Excellence in Industrial Solutions. Redefining Standards Through Innovation.
      </p>
      <div className="text-lg text-orange-300 font-semibold">
        Refra + Nox = Strength + Innovation
      </div>
    </div>
  </div>
</section>
      {/* Our Story */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="transition-all duration-1000 opacity-100 translate-x-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                REFRANOX Industrial Solutions is a forward-thinking startup committed to 
                redefining excellence in industrial services. Founded by industry veterans 
                with decades of proven expertise, we blend time-tested engineering rigor with 
                innovative, technology-driven solutions to deliver unmatched value.
              </p>
              <p>
                <span className="text-blue-600 font-semibold">Refra + Nox = Strength + Innovation</span> - 
                Our name reflects our core philosophy: combining the resilience of refractory-grade 
                durability with next-generation ingenuity to engineer solutions that last longer, 
                perform better, and cost less over time.
              </p>
              <p>
                Headquartered in Chennai, we are strategically positioned to serve major industrial 
                hubs across India. With a growing portfolio of landmark projects, we are building a 
                reputation for uncompromising safety, superior quality, and absolute reliability — one 
                successful execution at a time.
              </p>
              <p className="font-semibold text-gray-900">
                We don't just meet standards. We set them.
              </p>
            </div>
          </div>
                   
          <div className="grid grid-cols-2 gap-4 transition-all duration-1000 opacity-100 translate-x-0">
            <img
              src="https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Industrial petrochemical facility"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <img
              src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Industrial insulation materials"
              className="rounded-lg shadow-lg mt-8 hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </section>
      {/* Mission, Vision, Values */}
      <section ref={valuesRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600">
              Guided by our mission, vision, and core values
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className={`${value.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                    <IconComponent className={`h-8 w-8 ${value.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 text-lg">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      {/* <section ref={teamRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Experienced professionals driving innovation and excellence
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-orange-600 font-semibold mb-1">{member.position}</p>
                  <p className="text-gray-600">{member.experience}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Infrastructure & Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Infrastructure & Capabilities</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Our state-of-the-art facilities and advanced equipment enable us to handle projects 
                  of any scale and complexity. From small maintenance jobs to large industrial installations, 
                  we have the infrastructure to deliver excellence.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Award className="h-5 w-5 text-orange-500 mr-2" />
                    Modern fabrication workshops with precision equipment
                  </li>
                  <li className="flex items-center">
                    <Award className="h-5 w-5 text-orange-500 mr-2" />
                    Advanced material testing laboratories
                  </li>
                  <li className="flex items-center">
                    <Award className="h-5 w-5 text-orange-500 mr-2" />
                    Fleet of specialized transportation vehicles
                  </li>
                  <li className="flex items-center">
                    <Award className="h-5 w-5 text-orange-500 mr-2" />
                    Professional training centers for workforce development
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Manufacturing facility"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PAN-India Presence */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">PAN-India Presence</h2>
            <p className="text-xl text-gray-600">
              Strategic locations for comprehensive coverage and rapid response
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={location}
                className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="font-semibold text-gray-900">{location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Quality Standards</h2>
            <p className="text-xl text-gray-600">
              Committed to the highest standards of quality and compliance
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Award className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900">{cert}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;