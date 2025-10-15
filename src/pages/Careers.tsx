import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MapPin, 
  Clock, 
  Users, 
  TrendingUp, 
  Award, 
  BookOpen,
  DollarSign,
  Calendar,
  ChevronRight,
  Send,
  Bell,
  Mail
} from 'lucide-react';

const Careers = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [selectedPosition, setSelectedPosition] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'current' | 'future'>('current');

  const whyWorkWithUs = [
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear career progression paths with mentorship and leadership development programs',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: BookOpen,
      title: 'Learning & Development',
      description: 'Continuous skill enhancement through training, certifications, and workshops',
      color: 'text-green-600', 
      bgColor: 'bg-green-50'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative and inclusive work environment that values diversity and innovation',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Performance-based rewards, recognition programs, and competitive compensation',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const benefits = [
    'Competitive salary packages',
    'Health insurance coverage',
    'Performance-based bonuses',
    'Professional development allowance',
    'Flexible working arrangements',
    'Transportation allowance',
    'Annual leave and sick leave',
    'Retirement savings plan',
    'Employee assistance program',
    'Team building activities'
  ];

  // No current openings available
  const currentOpenings = [];

  // Future openings will be updated soon
  const futureOpenings = [];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    resume: null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const currentPositions = currentOpenings;
  const futurePositions = futureOpenings;
  const displayedPositions = activeTab === 'current' ? currentPositions : futurePositions;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="py-20 relative"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Build your career with India's leading industrial insulation company
            </p>
            <motion.button
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('openings-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Open Positions
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Why Work at REFRANOX */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work at REFRANOX</h2>
            <p className="text-xl text-gray-600">
              Join a company that values your growth, innovation, and contributions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyWorkWithUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`${item.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Employee Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Employee Benefits & Perks</h2>
              <p className="text-lg text-gray-600 mb-8">
                We believe in taking care of our employees with comprehensive benefits and a 
                supportive work environment that promotes work-life balance.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team working together"
                className="rounded-xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current & Future Openings */}
      <section id="openings-section" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
            <p className="text-xl text-gray-600 mb-8">
              Explore exciting career opportunities across different departments
            </p>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg p-1 shadow-lg">
                <button
                  onClick={() => {
                    setActiveTab('current');
                    setSelectedPosition(null);
                  }}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'current'
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Current Openings ({currentPositions.length})
                </button>
                <button
                  onClick={() => {
                    setActiveTab('future');
                    setSelectedPosition(null);
                  }}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'future'
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Future Openings ({futurePositions.length})
                </button>
              </div>
            </div>
          </motion.div>

          {/* No Current Openings Message */}
          {activeTab === 'current' && currentPositions.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-xl shadow-lg p-12 max-w-2xl mx-auto">
                <Bell className="h-16 w-16 text-gray-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No Current Openings</h3>
                <p className="text-gray-600 mb-6">
                  We don't have any open positions at the moment, but we're always looking for talented individuals to join our team.
                </p>
                <div className="space-y-3 text-sm text-gray-500">
                  <p>✓ Check back regularly for new opportunities</p>
                  <p>✓ View our future openings to see what's coming</p>
                  <p>✓ Send us your resume for future consideration</p>
                </div>
                <motion.button
                  onClick={() => setActiveTab('future')}
                  className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Future Openings
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* No Future Openings Message */}
          {activeTab === 'future' && futurePositions.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-xl shadow-lg p-12 max-w-2xl mx-auto">
                <Calendar className="h-16 w-16 text-blue-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Future Openings Coming Soon</h3>
                <p className="text-gray-600 mb-6">
                  We're planning exciting new positions for the coming months. Stay tuned for updates on upcoming opportunities.
                </p>
                <div className="space-y-3 text-sm text-gray-500 mb-6">
                  <p>🔄 Future openings will be updated soon</p>
                  <p>📧 Submit your profile to get notified first</p>
                  <p>🎯 We're always looking for exceptional talent</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-700 text-sm font-medium">
                    💡 Tip: Submit your resume below and we'll notify you as soon as relevant positions become available!
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Positions List */}
          {displayedPositions.length > 0 && (
            <div className="space-y-4">
              {displayedPositions.map((position, index) => (
                <motion.div
                  key={position.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                          {activeTab === 'future' && (
                            <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold">
                              Coming Soon
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-2">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1 text-orange-500" />
                            {position.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-orange-500" />
                            {position.type}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1 text-orange-500" />
                            {position.experience}
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1 text-orange-500" />
                            {position.salary}
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                            {position.department}
                          </span>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {activeTab === 'current' 
                              ? `Posted ${position.postedDate}` 
                              : `Expected ${position.expectedDate}`
                            }
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 md:mt-0 flex gap-2">
                        <motion.button
                          onClick={() => setSelectedPosition(selectedPosition === position.id ? null : position.id)}
                          className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View Details
                          <ChevronRight className={`h-4 w-4 ml-1 transition-transform duration-200 ${selectedPosition === position.id ? 'rotate-90' : ''}`} />
                        </motion.button>
                        <motion.button
                          className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                            activeTab === 'current'
                              ? 'bg-orange-500 hover:bg-orange-600 text-white'
                              : 'bg-blue-500 hover:bg-blue-600 text-white'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {activeTab === 'current' ? 'Apply Now' : 'Get Notified'}
                        </motion.button>
                      </div>
                    </div>
                    
                    <p className="text-gray-600">{position.description}</p>

                    {selectedPosition === position.id && (
                      <motion.div
                        className="mt-6 border-t pt-6"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-3">Requirements</h4>
                            <ul className="space-y-2">
                              {position.requirements.map((req, idx) => (
                                <li key={idx} className="flex items-start">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-700">{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-3">Key Responsibilities</h4>
                            <ul className="space-y-2">
                              {position.responsibilities.map((resp, idx) => (
                                <li key={idx} className="flex items-start">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-700">{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {activeTab === 'current' ? 'Apply Now' : 'Get Notified'}
            </h2>
            <p className="text-xl text-gray-600">
              {activeTab === 'current' 
                ? 'Ready to join our team? Send us your application'
                : 'Be the first to know when positions open up'
              }
            </p>
          </motion.div>

          <motion.form
            className="bg-gray-50 rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {activeTab === 'current' ? 'Position Applied For' : 'Position of Interest'} *
                </label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                >
                  <option value="">Select a position</option>
                  {displayedPositions.map(position => (
                    <option key={position.id} value={position.title}>
                      {position.title}
                    </option>
                  ))}
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">Total Experience</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="e.g., 3 years in industrial insulation"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">
                  {activeTab === 'current' ? 'Cover Letter / Message' : 'Why are you interested?'}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder={activeTab === 'current' 
                    ? "Tell us why you'd be a great fit for this role..."
                    : "Tell us about your career goals and interest in REFRANOX..."
                  }
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">Upload Resume *</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
                <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <motion.button
                type="submit"
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center ${
                  activeTab === 'current'
                    ? 'bg-orange-500 hover:bg-orange-600 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeTab === 'current' ? (
                  <>
                    Submit Application <Send className="ml-2 h-5 w-5" />
                  </>
                ) : (
                  <>
                    Get Notified <Bell className="ml-2 h-5 w-5" />
                  </>
                )}
              </motion.button>
            </div>

            {activeTab === 'future' && (
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500">
                  We'll notify you when this position becomes available and keep your profile for future opportunities.
                </p>
              </div>
            )}
          </motion.form>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Have Questions?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-200">
              Our HR team is here to help you with any questions about career opportunities at REFRANOX.
            </p>
            <div className="space-y-2 text-blue-200">
              <p className="flex items-center justify-center">
                <Mail className="h-5 w-5 mr-2" />
                careers@ripl.co.in
              </p>
              <p>📞 +91-9677208721 (HR Department)</p>
              <p>🕒 Monday to Friday, 9:00 AM - 6:00 PM</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;