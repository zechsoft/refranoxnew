import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const offices = [
    {
      name: 'Head Office - Mumbai',
      address: 'Plot No. 123, Industrial Area, Andheri (East), Mumbai - 400099, Maharashtra, India',
      phone: '+91-22-XXXX-XXXX',
      email: 'mumbai@refranox.com',
      timings: 'Mon-Fri: 9:00 AM - 6:00 PM',
      type: 'Primary'
    },
    {
      name: 'Northern Region - Delhi',
      address: 'Sector 15, Industrial Area, Gurgaon - 122015, Haryana, India',
      phone: '+91-124-XXXX-XXXX',
      email: 'delhi@refranox.com',
      timings: 'Mon-Fri: 9:00 AM - 6:00 PM',
      type: 'Regional'
    },
    {
      name: 'Southern Region - Chennai',
      address: 'Guindy Industrial Estate, Chennai - 600032, Tamil Nadu, India',
      phone: '+91-44-XXXX-XXXX',
      email: 'chennai@refranox.com',
      timings: 'Mon-Fri: 9:00 AM - 6:00 PM',
      type: 'Regional'
    },
    {
      name: 'Eastern Region - Kolkata',
      address: 'Salt Lake Electronics Complex, Kolkata - 700091, West Bengal, India',
      phone: '+91-33-XXXX-XXXX',
      email: 'kolkata@refranox.com',
      timings: 'Mon-Fri: 9:00 AM - 6:00 PM',
      type: 'Regional'
    },
    {
      name: 'Western Region - Pune',
      address: 'Pimpri-Chinchwad Industrial Area, Pune - 411019, Maharashtra, India',
      phone: '+91-20-XXXX-XXXX',
      email: 'pune@refranox.com',
      timings: 'Mon-Fri: 9:00 AM - 6:00 PM',
      type: 'Regional'
    },
    {
      name: 'Gujarat Operations - Vadodara',
      address: 'GIDC Industrial Estate, Vadodara - 390003, Gujarat, India',
      phone: '+91-265-XXXX-XXXX',
      email: 'vadodara@refranox.com',
      timings: 'Mon-Fri: 9:00 AM - 6:00 PM',
      type: 'Operational'
    }
  ];

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
    'Hot & Cold Insulation',
    'Refractory Lining & Castables',
    'Furnace & Boiler Insulation',
    'Acoustic & Duct Insulation',
    'Maintenance Services',
    'Consulting Services',
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
              Ready to discuss your industrial insulation needs? We're here to help with expert consultation and customized solutions.
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
                info: '+91-22-XXXX-XXXX',
                subinfo: '24/7 Emergency Support',
                color: 'text-blue-600',
                bgColor: 'bg-blue-50'
              },
              {
                icon: Mail,
                title: 'Email Us',
                info: 'info@refranox.com',
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
      <section className="py-20 bg-white">
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
                <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-2" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">Google Maps Integration</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Head Office</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Building2 className="h-5 w-5 text-orange-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">REFRANOX Pvt Ltd</p>
                      <p className="text-gray-600">Plot No. 123, Industrial Area</p>
                      <p className="text-gray-600">Andheri (East), Mumbai - 400099</p>
                      <p className="text-gray-600">Maharashtra, India</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-orange-500 mr-3" />
                    <span className="text-gray-700">+91-22-XXXX-XXXX</span>
                  </div>

                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-orange-500 mr-3" />
                    <span className="text-gray-700">info@refranox.com</span>
                  </div>

                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-orange-500 mr-3" />
                    <span className="text-gray-700">Mon-Fri: 9:00 AM - 6:00 PM</span>
                  </div>

                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-orange-500 mr-3" />
                    <span className="text-gray-700">www.refranox.com</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h4 className="text-lg font-bold text-blue-900 mb-2">Emergency Support</h4>
                <p className="text-blue-800 mb-2">24/7 emergency response available for critical shutdowns and urgent repairs.</p>
                <p className="text-blue-700 font-medium">Emergency Hotline: +91-XXXX-EMERGENCY</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
     

      {/* FAQ Section */}
      <section className="py-20 bg-white">
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
                a: "We provide initial quotes within 24-48 hours for standard projects. Complex projects may require 3-5 business days for detailed technical assessment."
              },
              {
                q: "Do you provide emergency services?",
                a: "Yes, we offer 24/7 emergency response for critical shutdowns, urgent repairs, and emergency insulation requirements across all our service locations."
              },
              {
                q: "What industries do you serve?",
                a: "We serve Power Generation, Oil & Gas, Petrochemicals, Steel & Cement, and various other process industries with specialized insulation solutions."
              },
              {
                q: "Do you provide warranties for your work?",
                a: "Yes, we provide comprehensive warranties on materials and workmanship. Warranty periods vary based on the type of service and operating conditions."
              },
              {
                q: "Can you handle large-scale projects?",
                a: "Absolutely. We have successfully completed projects worth ₹50+ crores and have the infrastructure, manpower, and expertise to handle projects of any scale."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6"
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