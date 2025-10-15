import { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  Flame, 
  Building2, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Play,
  ChevronLeft,
  ChevronRight,
  Wrench,
  Paintbrush2,
  HardHat,
  Zap,
  Factory,
  Hammer,
  Cpu} from 'lucide-react';

const Home = () => {
  // Intersection Observer for animations
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = {
    hero: useRef(),
    about: useRef(),
    services: useRef(),
    products: useRef(),
    contact: useRef()
  };

  // Simple intersection observer implementation
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setVisibleSections(prev => new Set([...prev, key]));
              }
            });
          },
          { threshold: 0.1 }
        );
        observer.observe(ref.current);
        observers.push(observer);
      }
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);


  // Hero carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlides = [
    {
      image: 'https://imgs.search.brave.com/pGtc6nCVWSXoe7cSqjY1tY81lv8VUV5fukAeGPY36gE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE2/Nzc2MTE2NC9waG90/by9vaWwtcmVmaW5l/cnktcGxhbnQtY2hl/bWljYWwtZmFjdG9y/eS1vaWwtYW5kLWdh/cy1pbmR1c3RyaWFs/LXpvbmUtb2lsLXBp/cGVsaW5lLXdpdGgt/dmFsdmVzLWluLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1K/WTFQZ3U0a2N3cVpP/ZHhiQldiWTBjZWxP/UTNZU1Q1T3dZRVRa/LVQ1Q3N3PQ',
      title: 'Techincal Industrial services',
      subtitle: 'Advanced thermal solutions for modern industrial applications'
    },
    {
      image: 'https://imgs.search.brave.com/pGtc6nCVWSXoe7cSqjY1tY81lv8VUV5fukAeGPY36gE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE2/Nzc2MTE2NC9waG90/by9vaWwtcmVmaW5l/cnktcGxhbnQtY2hl/bWljYWwtZmFjdG9y/eS1vaWwtYW5kLWdh/cy1pbmR1c3RyaWFs/LXpvbmUtb2lsLXBp/cGVsaW5lLXdpdGgt/dmFsdmVzLWluLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1K/WTFQZ3U0a2N3cVpP/ZHhiQldiWTBjZWxP/UTNZU1Q1T3dZRVRa/LVQ1Q3N3PQ',
      title: 'Thermal Insulation ',
      subtitle: 'Delivering Excellence in Hot, Cold, Acoustic, HVAC, and Cryogenic Material & Application Solutions'
    },
    {
      image: 'https://imgs.search.brave.com/8uhUz_Wr-od8LoinZ-bQAXW4tklxgnWYxYmMpjNLdF0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzcwLzUzLzY0/LzM2MF9GXzI3MDUz/NjQxMV9peEtNWFo1/eWg2c1RwWnptakY3/aVlRMFNRaE9UVDNS/Mi5qcGc',
      title: 'Refractory Services-Materail & Application',
      subtitle: 'Precision engineering and installation services for industrial projects'
    },
    {
      image: 'https://imgs.search.brave.com/ZDpn_nwbK7Fux_SMTknNoTj4VB-5-78WRrZoG_4b0z0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/NzA2ODkzMzQ4OTYt/OGZhODI5MWRhYTI3/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjEuMCZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1USjhmR2x1/WkhWemRISnBZV3ds/TWpCd2JHRnVkSHhs/Ym53d2ZId3dmSHg4/TUE9PQ',
      title: 'Passive Fire Proofing',
      subtitle: 'For Intumescent & Cementitious Fire Proofing Solutions'
    },
    {
      image: 'https://imgs.search.brave.com/ZDpn_nwbK7Fux_SMTknNoTj4VB-5-78WRrZoG_4b0z0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/NzA2ODkzMzQ4OTYt/OGZhODI5MWRhYTI3/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjEuMCZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1USjhmR2x1/WkhWemRISnBZV3ds/TWpCd2JHRnVkSHhs/Ym53d2ZId3dmSHg4/TUE9PQ',
      title: 'Industrial Coatings & Scaffolding works',
      subtitle: 'For Intumescent & Cementitious Fire Proofing Solutions'
    },
    {
      image: 'https://imgs.search.brave.com/ZDpn_nwbK7Fux_SMTknNoTj4VB-5-78WRrZoG_4b0z0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/NzA2ODkzMzQ4OTYt/OGZhODI5MWRhYTI3/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjEuMCZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1USjhmR2x1/WkhWemRISnBZV3ds/TWpCd2JHRnVkSHhs/Ym53d2ZId3dmSHg4/TUE9PQ',
      title: 'Mechanical , Civil & Electrical works',
      subtitle: 'For Intumescent & Cementitious Fire Proofing Solutions'
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const services = [
    {
      icon: Shield,
      title: 'Industrial Insulation',
      description: 'Comprehensive thermal insulation solutions including hot and cold applications, energy-efficient systems for industrial facilities.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: HardHat,
      title: 'Scaffolding',
      description: 'Professional scaffolding systems and temporary access solutions ensuring safety and efficiency for all construction projects.',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Paintbrush2,
      title: 'Painting and Blasting',
      description: 'Industrial surface preparation, abrasive blasting, and protective coating applications for maximum durability.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Flame,
      title: 'Refractory Works',
      description: 'High-temperature resistant materials and refractory lining solutions for furnaces, boilers, and industrial heating systems.',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Shield,
      title: 'Fire Proofing',
      description: 'Advanced fire protection systems and flame-retardant coatings to safeguard industrial structures and equipment.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Wrench,
      title: 'Mechanical Fabrication & Erection',
      description: 'Precision mechanical fabrication, equipment installation, and structural erection services for industrial applications.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: Building2,
      title: 'Civil Works',
      description: 'Complete civil construction services including foundations, structures, and infrastructure development for industrial projects.',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50'
    },
    {
      icon: Zap,
      title: 'Electrical Works',
      description: 'Industrial electrical installations, power distribution systems, and electrical infrastructure for modern facilities.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];

  const products = [
    {
      name: 'Phenolic Foam Insulation',
      description: 'Superior fire-resistant insulation with excellent thermal properties and low smoke emission characteristics.',
      image: '/assests/home/Phenolic Foam Insulation.jpg'
    },
    {
      name: 'Polyisocyanurate (PIR) Insulation',
      description: 'High-performance rigid foam insulation offering exceptional thermal efficiency and structural strength.',
      image: 'assests/home/Polyisocyanurate (PIR) Insulation.jpg'
    },
    {
      name: 'Polyurethane (PUR) Insulation',
      description: 'Versatile foam insulation providing excellent thermal performance and moisture resistance.',
      image: 'assests/home/Polyurethane (PUR) Insulation.jpg'
    },
    {
      name: 'Polyolefin (XLPE) Insulation',
      description: 'Cross-linked polyethylene insulation ideal for low-temperature applications and chemical resistance.',
      image: 'assests/home/Polyolefin (XLPE) Insulation.jpg'
    },
    {
      name: 'Cellular Glass Insulation',
      description: 'Inorganic insulation material offering complete moisture barrier and dimensional stability.',
      image: 'assests/home/Cellular Glass Insulation.jpg'
    },
    {
      name: 'Calcium Silicate Insulation',
      description: 'High-temperature insulation boards perfect for industrial furnaces and high-heat applications.',
      image: 'assests/home/Calcium Silicate Insulation.jpg'
    },
    {
      name: 'Pre-insulated Duct Systems',
      description: 'Factory-manufactured PF/PIR pre-insulated ductwork for HVAC and industrial ventilation systems.',
      image: 'assests/home/Phenolic Foam (PF) OR Polyisocyanurate (PIR) Pre insulated Duct.jpg'
    },
    {
      name: 'EIFS System Solutions',
      description: 'External Insulation Finishing Systems providing thermal efficiency and aesthetic exterior solutions.',
      image: 'assests/home/Insultherm® Roof, Wall, Soffit Insulation and EIFS System.jpg'
    }
  ];

  // Why Choose Us section state and ref
  const whyUsRef = useRef(null);
  const [whyUsInView, setWhyUsInView] = useState(false);


  useEffect(() => {
    if (!whyUsRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setWhyUsInView(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(whyUsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section 
        ref={sectionRefs.hero}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Images */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div
            className={`transition-all duration-1000 ${visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {heroSlides[currentSlide].title}
            </h1>
          </div>
          
          <div
            className={`transition-all duration-1000 delay-200 ${visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {heroSlides[currentSlide].subtitle}
            </p>
          </div>
          
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
              Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
              Explore Services <Play className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-orange-500' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
    {/* About Section */}
<section ref={sectionRefs.about} className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className={`transition-all duration-1000 ${visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Image */}
        <div className="order-2 lg:order-1">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
              alt="RIPL Industrial Solutions Team"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-orange-500/20 rounded-xl"></div>
          </div>
        </div>
        
        {/* Right side - Content */}
        <div className="order-1 lg:order-2">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About <span className="text-orange-500">RIPL</span> Industrial Solutions
          </h2>
          
          {/* Brand Equation */}
          <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl border-l-4 border-orange-500">
            <h3 className="text-2xl font-bold text-center mb-2">
              <span className="text-blue-600">Refra</span> + <span className="text-orange-500">Nox</span> = 
              <span className="text-gray-700"> Strength + Innovation</span>
            </h3>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              RIPL Industrial Solutions is an emerging startup company dedicated to revolutionizing 
              the industrial services landscape. As a new entrant in the market, we bring fresh 
              perspectives, innovative approaches, and cutting-edge solutions to meet the evolving 
              needs of modern industries.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Though we are at the beginning of our journey with exciting projects on the horizon, 
              our team comprises seasoned professionals with extensive experience in industrial 
              insulation, mechanical works, and comprehensive industrial solutions. We are committed 
              to establishing ourselves as a trusted partner in the industrial sector.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
                Our Vision <Play className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Services Grid */}
      <section ref={sectionRefs.services} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive industrial solutions tailored to meet diverse project requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.title}
                  className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                    visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`${service.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section ref={sectionRefs.products} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('products') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Premium insulation materials and systems designed for optimal thermal performance and industrial durability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={product.name}
                className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                  visibleSections.has('products') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className={`text-center mt-12 transition-all duration-1000 delay-800 ${visibleSections.has('products') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center">
              View All Products <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      {/* Why Choose Us */}
<section className="py-20 relative overflow-hidden">
  {/* Background with Pattern */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50"></div>
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
    <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
  </div>
  
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16 transition-all duration-1000 opacity-100 translate-y-0">
      <h2 className="text-5xl font-bold mb-4">
        Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">REFRANOX</span>
      </h2>
      <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-6"></div>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Your emerging partner for innovative industrial solutions that combine strength with cutting-edge technology
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
        {/* Floating Icon */}
        <div className="absolute -top-6 left-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110">
            <Users className="h-8 w-8 text-white" />
          </div>
        </div>
        
        <div className="pt-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Expert Team</h3>
          <p className="text-gray-600 leading-relaxed">Experienced professionals bringing decades of industry expertise to innovative solutions that drive your success forward.</p>
          
          {/* Decorative Element */}
          <div className="mt-6 w-full h-1 bg-gradient-to-r from-blue-500/20 to-transparent rounded group-hover:from-blue-500/60 transition-all duration-300"></div>
        </div>
      </div>
      
      <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
        {/* Floating Icon */}
        <div className="absolute -top-6 left-8">
          <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-green-500/50 transition-all duration-300 group-hover:scale-110">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
        </div>
        
        <div className="pt-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">Quality Assurance</h3>
          <p className="text-gray-600 leading-relaxed">Unwavering commitment to delivering high-quality solutions that exceed industry standards and surpass client expectations.</p>
          
          {/* Decorative Element */}
          <div className="mt-6 w-full h-1 bg-gradient-to-r from-green-500/20 to-transparent rounded group-hover:from-green-500/60 transition-all duration-300"></div>
        </div>
      </div>
      
      <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
        {/* Floating Icon */}
        <div className="absolute -top-6 left-8">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300 group-hover:scale-110">
            <Shield className="h-8 w-8 text-white" />
          </div>
        </div>
        
        <div className="pt-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">Innovation Focus</h3>
          <p className="text-gray-600 leading-relaxed">Fresh approaches and modern techniques combined with proven methodologies for optimal project outcomes and lasting results.</p>
          
          {/* Decorative Element */}
          <div className="mt-6 w-full h-1 bg-gradient-to-r from-orange-500/20 to-transparent rounded group-hover:from-orange-500/60 transition-all duration-300"></div>
        </div>
      </div>
    </div>
    
    {/* Call to Action */}
    <div className="text-center mt-16">
      <button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center">
        Partner With Us <ArrowRight className="ml-3 h-5 w-5" />
      </button>
    </div>
  </div>
</section>

      {/* Contact CTA */}
    {/* Contact CTA */}
<section className="py-20 bg-blue-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div className="transition-all duration-1000 opacity-100 translate-y-0">
      <h2 className="text-4xl font-bold mb-4">Ready to Start Your Next Project?</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-200">
        Partner with RIPL Industrial Solutions for innovative, reliable, and efficient 
        industrial services. Let's build the future together.
      </p>
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center">
        Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
      </button>
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;