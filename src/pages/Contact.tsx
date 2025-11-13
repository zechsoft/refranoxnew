import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Building2,
  MessageSquare,
  CheckCircle,
  Globe
} from 'lucide-react';

const Contact = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    service: '',
    budget: ''
  });

  // Handle navigation from Get Quote button
  useEffect(() => {
    if (location.hash === '#contact-form') {
      setTimeout(() => {
        const formSection = document.getElementById('contact-form');
        if (formSection) {
          const headerOffset = 100;
          const elementPosition = formSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 300);
    }
  }, [location]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const contactReasons = [
    'Request a Quote',
    'Technical Consultation',
    'Project Inquiry',
    'Partnership Opportunities',
    'Career Inquiries',
    'General Information',
    'Complaint/Feedback',
    'Other'
  ];

  const services = [
    'Thermal Insulation',
    'Refractory Application',
    'Passive Fire Proofing',
    'Industrial Coating',
    'Scaffolding Services',
    'Specialized Civil Works',
    'Mechanical Erection',
    'Electrical Works',
    'Multiple Services',
    'Not Sure'
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Ready to discuss your industrial project needs? We're here to help with expert consultation and customized solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 bg-gray-50 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                title: 'Call Us',
                info: '+91-96772-08721',
                subinfo: 'Mon-Sat: 9:00 AM - 6:00 PM',
                color: 'text-blue-600',
                bgColor: 'bg-blue-50'
              },
              {
                icon: Mail,
                title: 'Email Us',
                info: 'info@ripl.co.in',
                subinfo: 'Response within 24 hours',
                color: 'text-green-600',
                bgColor: 'bg-green-50'
              },
              {
                icon: MessageSquare,
                title: 'Get Quote',
                info: 'Free Consultation',
                subinfo: 'Customized solutions',
                color: 'text-orange-600',
                bgColor: 'bg-orange-50'
              }
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`${contact.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <contact.icon className={`h-6 w-6 ${contact.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-gray-700 font-medium">{contact.info}</p>
                <p className="text-gray-500 text-sm">{contact.subinfo}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {formSubmitted && (
                <motion.div
                  className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-green-700">Thank you! Your message has been sent successfully.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <label className="block text-gray-700 font-medium mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Enter company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Subject/Inquiry Type *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select inquiry type</option>
                      {contactReasons.map(reason => (
                        <option key={reason} value={reason}>{reason}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Service Interested In</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select service</option>
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Project Budget (Optional)</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    <option value="<5L">Less than ₹5 Lakhs</option>
                    <option value="5L-25L">₹5 - ₹25 Lakhs</option>
                    <option value="25L-1Cr">₹25 Lakhs - ₹1 Crore</option>
                    <option value="1Cr-5Cr">₹1 - ₹5 Crores</option>
                    <option value=">5Cr">Above ₹5 Crores</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message/Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Please describe your project requirements, timeline, and any specific questions..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message <Send className="ml-2 h-5 w-5" />
                </motion.button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Find Us Here</h3>
                <div className="bg-gray-200 rounded-xl h-64 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3267!2d80.1589!3d13.1067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA2JzI0LjEiTiA4MMKwMDknMzIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="REFRANOX Location"
                  ></iframe>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Head Office - Chennai</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Building2 className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">REFRANOX Industrial Solutions</p>
                      <p className="text-gray-600">25/8A, Old Bank of Baroda Street</p>
                      <p className="text-gray-600">Ambattur OT, Chennai - 600053</p>
                      <p className="text-gray-600">Tamil Nadu, India</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">+91-96772-08721</span>
                  </div>

                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">info@ripl.co.in</span>
                  </div>

                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Mon-Sat: 9:00 AM - 6:00 PM</span>
                  </div>

                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">www.refranox.com</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h4 className="text-lg font-bold text-blue-900 mb-2">Business Hours</h4>
                <p className="text-blue-800 mb-2">We're available Monday through Saturday for all your industrial service needs.</p>
                <p className="text-blue-700 font-medium">For urgent inquiries, please call: +91-96772-08721</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common inquiries
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: "What is the typical response time for quotes?",
                a: "We provide initial quotes within 24-48 hours for standard projects. Complex projects may require 3-5 business days for detailed technical assessment and site evaluation."
              },
              {
                q: "Do you provide on-site consultation?",
                a: "Yes, we offer complimentary on-site consultations for project assessment, technical evaluation, and customized solution recommendations across Tamil Nadu and nearby regions."
              },
              {
                q: "What industries do you serve?",
                a: "We serve Power Generation, Oil & Gas, Petrochemicals, Steel & Cement, Fertilizer, Refineries, and various other process industries with specialized multi-disciplinary solutions."
              },
              {
                q: "Do you provide warranties for your work?",
                a: "Yes, we provide comprehensive warranties on materials and workmanship. Warranty periods vary based on the type of service, materials used, and operating conditions."
              },
              {
                q: "Can you handle turnkey projects?",
                a: "Absolutely. We offer complete turnkey and multi-disciplinary contract capabilities, managing projects from concept to completion with our integrated civil, mechanical, and electrical expertise."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;