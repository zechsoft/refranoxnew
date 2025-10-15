import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Shield, 
  Award, 
  Users, 
  TrendingUp, 
  Download, 
  CheckCircle,
  AlertTriangle,
  BookOpen,
  Target
} from 'lucide-react';

const QHSE = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });

  const safetyStats = [
    { number: '0', label: 'Accidents in 2023', color: 'text-green-500' },
    { number: '1M+', label: 'Safe Work Hours', color: 'text-blue-500' },
    { number: '100%', label: 'Safety Training Coverage', color: 'text-orange-500' },
    { number: '99.8%', label: 'Safety Compliance Score', color: 'text-purple-500' }
  ];

  const certifications = [
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management System',
      year: '2020',
      icon: Award,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'ISO 14001:2015',
      description: 'Environmental Management System',
      year: '2020',
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'ISO 45001:2018',
      description: 'Occupational Health & Safety',
      year: '2021',
      icon: Users,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      name: 'NSIC Certificate',
      description: 'National Small Industries Corporation',
      year: '2019',
      icon: Target,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      name: 'PED Certification',
      description: 'Pressure Equipment Directive',
      year: '2022',
      icon: AlertTriangle,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      name: 'ASME Certification',
      description: 'American Society of Mechanical Engineers',
      year: '2021',
      icon: TrendingUp,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50'
    }
  ];

  const safetyPillars = [
    {
      title: 'Safety Leadership',
      description: 'Management commitment and leadership at all levels to create a safety culture',
      icon: Users,
      points: [
        'Executive safety leadership program',
        'Safety performance accountability',
        'Regular management safety walks',
        'Open communication channels'
      ]
    },
    {
      title: 'Risk Management',
      description: 'Systematic identification, assessment, and control of workplace hazards',
      icon: Shield,
      points: [
        'Comprehensive risk assessment methodology',
        'Hazard identification and reporting systems',
        'Job safety analysis for all activities',
        'Incident investigation and learning'
      ]
    },
    {
      title: 'Training & Competency',
      description: 'Ensuring all personnel have the knowledge and skills for safe work',
      icon: BookOpen,
      points: [
        'Mandatory safety induction for all workers',
        'Trade-specific safety training programs',
        'Regular refresher and update sessions',
        'Competency assessment and certification'
      ]
    },
    {
      title: 'Continuous Improvement',
      description: 'Regular monitoring, review, and enhancement of safety performance',
      icon: TrendingUp,
      points: [
        'Safety performance monitoring and metrics',
        'Regular safety audits and inspections',
        'Benchmark against industry best practices',
        'Implementation of lessons learned'
      ]
    }
  ];

  const policies = [
    {
      name: 'Health & Safety Policy',
      description: 'Comprehensive workplace safety guidelines and procedures',
      pages: '24 pages',
      updated: 'Jan 2024'
    },
    {
      name: 'Environmental Policy',
      description: 'Environmental protection and sustainability guidelines',
      pages: '18 pages', 
      updated: 'Dec 2023'
    },
    {
      name: 'Quality Policy',
      description: 'Quality management and assurance procedures',
      pages: '32 pages',
      updated: 'Feb 2024'
    },
    {
      name: 'Emergency Response Plan',
      description: 'Emergency procedures and response protocols',
      pages: '28 pages',
      updated: 'Nov 2023'
    }
  ];

  const trainingPrograms = [
    'Basic Safety Induction',
    'Working at Height',
    'Confined Space Entry',
    'Hot Work Permit',
    'Chemical Safety',
    'Fire Safety & Emergency Response',
    'Personal Protective Equipment',
    'Incident Reporting & Investigation',
    'Environmental Awareness',
    'Quality Control Procedures'
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Quality, Health, Safety & Environment</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Safety First. Quality Always. Environment Protected. Excellence Delivered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Safety Statistics */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Safety Performance</h2>
            <p className="text-xl text-gray-300">Committed to zero harm and operational excellence</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {safetyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <p className="text-lg text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety-First Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Safety-First Approach</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  At REFRANOX, safety is not just a priority – it's a core value that guides every decision 
                  and action we take. Our comprehensive safety management system ensures that every worker 
                  returns home safely every day.
                </p>
                <p>
                  We maintain the highest safety standards through rigorous training, advanced safety 
                  equipment, regular safety audits, and a culture that empowers every team member to 
                  speak up about safety concerns.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <span>Zero tolerance for unsafe practices</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <span>Comprehensive safety training for all personnel</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <span>Regular safety audits and inspections</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <span>State-of-the-art safety equipment and PPE</span>
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
                src="https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Safety equipment and procedures"
                className="rounded-xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Four Pillars of Safety */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Four Pillars of Our Safety Framework</h2>
            <p className="text-xl text-gray-600">
              Comprehensive approach to workplace safety and risk management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {safetyPillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{pillar.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{pillar.description}</p>
                  
                  <ul className="space-y-2">
                    {pillar.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Standards</h2>
            <p className="text-xl text-gray-600">
              Committed to maintaining the highest international standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <motion.div
                  key={cert.name}
                  className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`${cert.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className={`h-8 w-8 ${cert.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                  <p className="text-gray-600 mb-3">{cert.description}</p>
                  <div className="text-sm text-gray-500">
                    Certified since: <span className="font-medium">{cert.year}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Training & Competency Programs</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Our comprehensive training programs ensure that every team member has the knowledge, 
                  skills, and competency required to perform their work safely and effectively.
                </p>
                <p>
                  We maintain detailed training records, conduct regular assessments, and provide 
                  ongoing development opportunities to keep our workforce at the forefront of 
                  industry best practices.
                </p>
                <div className="flex items-center">
                  <BookOpen className="h-6 w-6 text-orange-500 mr-3" />
                  <span className="font-semibold">40+ hours of mandatory training per employee annually</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Training Modules</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {trainingPrograms.map((program, index) => (
                  <motion.div
                    key={program}
                    className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-orange-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-gray-800 font-medium">{program}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Downloadable Policies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Policy Documents</h2>
            <p className="text-xl text-gray-600">
              Download our comprehensive policies and procedures
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {policies.map((policy, index) => (
              <motion.div
                key={policy.name}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Download className="h-6 w-6 text-blue-600" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{policy.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{policy.description}</p>
                
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>{policy.pages}</span>
                  <span>Updated: {policy.updated}</span>
                </div>
                
                <div className="mt-4 text-blue-600 font-medium group-hover:text-blue-800 transition-colors text-sm">
                  Download PDF →
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/256219/pexels-photo-256219.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Environmental protection"
                className="rounded-xl shadow-xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Environmental Responsibility</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  We are committed to protecting the environment and promoting sustainable practices 
                  in all our operations. Our environmental management system ensures minimal 
                  environmental impact while maximizing operational efficiency.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <span>Zero waste to landfill policy</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <span>Energy-efficient insulation materials</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <span>Sustainable sourcing practices</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <span>Carbon footprint reduction initiatives</span>
                  </div>
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-4xl font-bold mb-4">Safety. Quality. Environment. Excellence.</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-200">
              Partner with REFRANOX for projects that prioritize safety, deliver quality, 
              protect the environment, and achieve operational excellence.
            </p>
            <motion.button
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn About Our Standards
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QHSE;