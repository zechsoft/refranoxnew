import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Shield, 
  Flame, 
  Building2, 
  Volume2,
  ArrowRight,
  Thermometer,
  Droplets,
  Snowflake,
  Zap,
  Factory,
  Home,
  Layers,
  Settings,
  Eye,
  Download,
  Star,
  CheckCircle,
  AlertTriangle,
  Info,
  Wind,
  Wrench,
  Package,
  Search,
  Filter,
  Grid3X3,
  List,
  X,
  ChevronRight,
  TrendingUp,
  Award,
  Clock
} from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

   const products = [
    {
      id: 'phenolic-foam',
      name: 'Phenolic Foam Insulation',
      category: 'Foam Insulation',
      shortName: 'Phenolic Foam',
      description: 'Premium closed-cell phenolic foam insulation with exceptional fire resistance and thermal performance. Zero flame spread, ideal for critical safety applications.',
      image: 'assests/product/PHENOLIC FOAM INSULATION.jpg',
      icon: Flame,
      rating: 4.9,
      featured: true,
      badge: 'Best Seller',
      properties: {
        thermalConductivity: '0.018-0.025 W/mK',
        temperatureRange: '-180°C to +120°C',
        density: '35-200 kg/m³',
        fireRating: 'Class 0/A1',
        compressiveStrength: '150-400 kPa',
        waterAbsorption: '<2% by volume'
      },
      applications: [
        'HVAC ductwork insulation',
        'Industrial equipment insulation',
        'Cryogenic storage tanks',
        'Fire-resistant building insulation',
        'Marine and offshore applications',
        'Clean room environments'
      ],
      advantages: [
        'Excellent fire resistance (zero flame spread)',
        'Ultra-low thermal conductivity',
        'Lightweight and dimensionally stable',
        'Chemical and moisture resistant',
        'Zero ozone depletion potential',
        'Long service life (25+ years)'
      ],
      specifications: {
        sizes: 'Tubes: 6-160mm ID, Sheets: 1x2m',
        packaging: 'Plastic wrapped cartons',
        standards: 'EN 14304, ASTM C534',
        warranty: '10 years material warranty'
      },
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-50',
      textColor: 'text-cyan-600'
    },
    {
      id: 'calcium-silicate',
      name: 'Calcium Silicate Insulation',
      category: 'High Temperature',
      shortName: 'Calcium Silicate',
      description: 'Molded calcium silicate insulation boards and pipe covers providing exceptional high-temperature performance and structural strength.',
      image: '/assests/product/Calcium Silicate Insulation.jpg',
      icon: Thermometer,
      rating: 4.6,
      featured: false,
      badge: 'High Temp',
      properties: {
        thermalConductivity: '0.052-0.085 W/mK',
        temperatureRange: 'Up to 650°C',
        density: '200-350 kg/m³',
        fireRating: 'A1 Non-combustible',
        compressiveStrength: '0.4-1.0 MPa',
        asbestosFree: '100% asbestos-free'
      },
      applications: [
        'Steam and hot water piping',
        'Boiler and vessel insulation',
        'Industrial furnaces and ovens',
        'Power plant equipment',
        'Petrochemical processing units',
        'High-temperature ductwork'
      ],
      advantages: [
        'High compressive strength',
        'Excellent machinability',
        'Low shrinkage at temperature',
        'Corrosion resistant',
        'Asbestos-free formulation',
        'Easy cutting and fitting'
      ],
      specifications: {
        sizes: 'Boards: 1000x500mm, Pipes: 25-1200mm',
        packaging: 'Wooden crates or pallets',
        standards: 'ASTM C533, EN 12467',
        warranty: '15 years structural integrity'
      },
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600'
    },
    {
      id: 'perlite',
      name: 'Perlite Insulation',
      category: 'Mineral Insulation',
      shortName: 'Perlite',
      description: 'Lightweight expanded perlite-based insulation materials offering excellent thermal properties and fire resistance for specialized applications.',
      image: 'assests/product/Perlite Insulation.jpg',
      icon: Shield,
      rating: 4.4,
      featured: false,
      badge: 'Lightweight',
      properties: {
        thermalConductivity: '0.048-0.070 W/mK',
        temperatureRange: 'Up to 850°C',
        density: '90-400 kg/m³',
        fireRating: 'A1 Non-combustible',
        moistureAbsorption: 'Low absorption rate',
        phValue: 'pH 6.5-8.0 (neutral)'
      },
      applications: [
        'Cryogenic storage tanks',
        'High-temperature furnaces',
        'Masonry cavity fill',
        'Loose-fill insulation',
        'Refractory applications',
        'Horticultural growing media'
      ],
      advantages: [
        'Extremely lightweight',
        'Excellent fire resistance',
        'Chemically inert',
        'Pest and vermin resistant',
        'Long-term stability',
        'Environmentally friendly'
      ],
      specifications: {
        sizes: 'Loose fill, Boards: Custom sizes',
        packaging: 'Bags or bulk delivery',
        standards: 'ASTM C549, EN 13169',
        warranty: '25 years material stability'
      },
      color: 'from-stone-500 to-gray-500',
      bgColor: 'bg-stone-50',
      textColor: 'text-stone-600'
    },
    {
      id: 'cellular-glass',
      name: 'Cellular Glass Insulation',
      category: 'Glass Insulation',
      shortName: 'Cellular Glass',
      description: 'Rigid cellular glass insulation providing unmatched durability, chemical resistance, and thermal stability for the most demanding environments.',
      image: 'assests/product/Cellular-Glass-manufacturer.jpg',
      icon: Building2,
      rating: 4.9,
      featured: true,
      badge: 'Premium',
      properties: {
        thermalConductivity: '0.038-0.055 W/mK',
        temperatureRange: '-260°C to +430°C',
        density: '115-145 kg/m³',
        fireRating: 'A1 Non-combustible',
        compressiveStrength: '700-1600 kPa',
        waterAbsorption: '0% (impermeable)'
      },
      applications: [
        'Cryogenic storage systems',
        'Underground piping systems',
        'Chemical processing plants',
        'Roofing and foundation applications',
        'Industrial equipment insulation',
        'Marine and offshore structures'
      ],
      advantages: [
        'Completely impermeable to moisture',
        'Vermin and insect proof',
        'Chemically inert and stable',
        'Dimensionally stable',
        'Load bearing capability',
        'Permanent installation solution'
      ],
      specifications: {
        sizes: 'Blocks: 600x450mm, Thickness: 25-150mm',
        packaging: 'Wooden crates or steel pallets',
        standards: 'ASTM C552, EN 13167',
        warranty: 'Lifetime material warranty'
      },
      color: 'from-slate-500 to-gray-600',
      bgColor: 'bg-slate-50',
      textColor: 'text-slate-600'
    },
    {
      id: 'rockwool',
      name: 'Rockwool Insulation',
      category: 'Mineral Fiber',
      shortName: 'Rockwool',
      description: 'Premium stone wool insulation manufactured from volcanic rock, offering exceptional fire resistance, thermal performance, and acoustic control.',
      image: 'assests/product/Rockwool Insulation2.avif',
      icon: Flame,
      rating: 4.8,
      featured: false,
      badge: 'Fire Safe',
      properties: {
        thermalConductivity: '0.033-0.042 W/mK',
        temperatureRange: '-200°C to +750°C',
        density: '30-200 kg/m³',
        fireRating: 'A1 Non-combustible',
        meltingPoint: '>1000°C',
        waterRepellency: 'Hydrophobic treatment'
      },
      applications: [
        'High-temperature industrial processes',
        'Fire-rated wall and floor assemblies',
        'Acoustic ceiling and wall systems',
        'Marine bulkhead insulation',
        'Petrochemical and power facilities',
        'HVAC equipment insulation'
      ],
      advantages: [
        'Exceptional fire resistance',
        'Superior acoustic performance',
        'Chemically inert and stable',
        'Water repellent properties',
        'Breathable structure',
        'Sustainable and recyclable'
      ],
      specifications: {
        sizes: 'Boards/Batts: Various, Thickness: 25-200mm',
        packaging: 'Compressed polyethylene bags',
        standards: 'EN 13162, ASTM C612',
        warranty: 'Lifetime fire performance'
      },
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600'
    },
    {
      id: 'eps',
      name: 'Expanded Polystyrene (EPS) Insulation',
      category: 'Foam Insulation',
      shortName: 'EPS Insulation',
      description: 'Lightweight, cost-effective expanded polystyrene foam insulation with good thermal properties and versatility for building applications.',
      image: '/assests/product/Expanded Polystyrene (EPS) Insulation.jpg',
      icon: Layers,
      rating: 4.3,
      featured: false,
      badge: 'Economic',
      properties: {
        thermalConductivity: '0.031-0.038 W/mK',
        temperatureRange: '-180°C to +80°C',
        density: '10-30 kg/m³',
        fireRating: 'Class E (Flame retardant available)',
        compressiveStrength: '70-250 kPa',
        moistureResistance: 'Low water absorption'
      },
      applications: [
        'Building wall and roof insulation',
        'Under-slab and foundation insulation',
        'Packaging and protective applications',
        'Decorative architectural elements',
        'Void filling applications',
        'Lightweight construction blocks'
      ],
      advantages: [
        'Excellent thermal performance',
        'Lightweight and easy to handle',
        'Cost-effective solution',
        'Good dimensional stability',
        'Recyclable material',
        'Versatile application methods'
      ],
      specifications: {
        sizes: 'Boards: 1000x500mm, Thickness: 10-300mm',
        packaging: 'Plastic wrapped bundles',
        standards: 'EN 13163, ASTM C578',
        warranty: '25 years thermal performance'
      },
      color: 'from-gray-400 to-slate-500',
      bgColor: 'bg-gray-50',
      textColor: 'text-gray-600'
    },
    {
      id: 'xps',
      name: 'Extruded Polystyrene (XPS) Insulation',
      category: 'Foam Insulation',
      shortName: 'XPS Insulation',
      description: 'High-performance extruded polystyrene rigid foam insulation with closed-cell structure providing superior moisture resistance and compressive strength.',
      image: 'public/assests/product/Extruded Polystyrene (XPS) Insulation.jpg',
      icon: Shield,
      rating: 4.5,
      featured: false,
      badge: 'Moisture Resistant',
      properties: {
        thermalConductivity: '0.028-0.036 W/mK',
        temperatureRange: '-50°C to +75°C',
        density: '25-45 kg/m³',
        compressiveStrength: '150-700 kPa',
        waterAbsorption: '<0.7% by volume',
        cellStructure: 'Uniform closed-cell'
      },
      applications: [
        'Below-grade foundation insulation',
        'Inverted roof systems',
        'Under-slab applications',
        'Plaza deck and parking structures',
        'Cold storage facilities',
        'Perimeter and curtain wall insulation'
      ],
      advantages: [
        'Excellent moisture resistance',
        'High compressive strength',
        'Superior thermal performance',
        'Dimensional stability',
        'Easy installation',
        'Long-term durability'
      ],
      specifications: {
        sizes: 'Boards: 1250x600mm, Thickness: 20-200mm',
        packaging: 'Shrink-wrapped pallets',
        standards: 'EN 13164, ASTM C578',
        warranty: '20 years thermal performance'
      },
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-50',
      textColor: 'text-violet-600'
    },
    {
      id: 'ceramic-blanket',
      name: 'Ceramic Blanket Insulation',
      category: 'High Temperature',
      shortName: 'Ceramic Blanket',
      description: 'Refractory ceramic fiber blanket for extreme high-temperature applications, offering excellent thermal shock resistance and flexibility.',
      image: 'assests/product/Ceramic Blanket Insulation.jpg',
      icon: Flame,
      rating: 4.7,
      featured: false,
      badge: 'Ultra High Temp',
      properties: {
        thermalConductivity: '0.040-0.180 W/mK',
        temperatureRange: 'Up to 1260°C',
        density: '64-160 kg/m³',
        fireRating: 'Non-combustible',
        thermalShock: 'Excellent resistance',
        flexibility: 'Highly flexible and resilient'
      },
      applications: [
        'Furnace and kiln lining backup',
        'Boiler and heater insulation',
        'Expansion joint seals',
        'Refractory backup insulation',
        'High-temperature gaskets and seals',
        'Fire protection systems'
      ],
      advantages: [
        'Extreme temperature capability',
        'Excellent thermal shock resistance',
        'Low heat storage capacity',
        'Chemical stability at high temperatures',
        'Easy cutting and installation',
        'Superior insulating efficiency'
      ],
      specifications: {
        sizes: 'Blankets: 7300x610mm, Thickness: 6-50mm',
        packaging: 'Vacuum packed rolls',
        standards: 'ASTM C892, JIS A1430',
        warranty: '10 years high-temperature performance'
      },
      color: 'from-red-600 to-orange-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600'
    },
    {
      id: 'cryo-master',
      name: 'Cryo-Master Insulation',
      category: 'Cryogenic',
      shortName: 'Cryo-Master',
      description: 'Specialized multilayer insulation system designed for cryogenic applications, providing exceptional thermal performance at ultra-low temperatures.',
      image: 'assests/product/Cryo-Master (Aerogel) Insulation.jpg',
      icon: Snowflake,
      rating: 4.9,
      featured: true,
      badge: 'Ultra Low Temp',
      properties: {
        thermalConductivity: '0.001-0.005 W/mK',
        temperatureRange: '-270°C to +80°C',
        density: '0.1-0.5 kg/m³',
        vacuumRequirement: '10⁻⁴ to 10⁻⁶ Torr',
        layerCount: '10-80 layers per inch',
        reflectivity: '>97% infrared reflection'
      },
      applications: [
        'LNG storage tanks',
        'Liquid nitrogen vessels',
        'Liquid hydrogen systems',
        'Aerospace applications',
        'Superconducting magnets',
        'Research laboratory equipment'
      ],
      advantages: [
        'Ultra-low thermal conductivity',
        'Minimal heat leak at cryogenic temps',
        'Lightweight multilayer design',
        'High vacuum compatibility',
        'Custom engineered systems',
        'Proven space-grade technology'
      ],
      specifications: {
        sizes: 'Custom fabricated systems',
        packaging: 'Vacuum sealed containers',
        standards: 'NASA standards, ASME BPV',
        warranty: '15 years cryogenic performance'
      },
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'bg-cyan-50',
      textColor: 'text-cyan-600'
    },
    {
      id: 'insulated-panels',
      name: 'Insulated Panels',
      category: 'Panel Systems',
      shortName: 'Sandwich Panels',
      description: 'Composite insulated sandwich panels for building envelope applications, combining structural strength with superior thermal performance.',
      image: 'assests/product/INSULATED PANELS (SANDWICH PANELS) FOR CONSTRUCTION OF INDUSTRIAL STRUCTURES.jpg',
      icon: Building2,
      rating: 4.6,
      featured: false,
      badge: 'Structural',
      properties: {
        thermalConductivity: '0.020-0.035 W/mK',
        temperatureRange: '-40°C to +100°C',
        panelThickness: '50-300mm',
        coreOptions: 'PIR, PUR, Mineral Wool, EPS',
        facingMaterials: 'Steel, Aluminum, Fiber cement',
        fireRating: 'A2-s1,d0 to B-s1,d0'
      },
      applications: [
        'Industrial building walls and roofs',
        'Cold storage facilities',
        'Clean room construction',
        'Agricultural buildings',
        'Commercial warehouses',
        'Modular construction systems'
      ],
      advantages: [
        'Rapid installation system',
        'Excellent structural properties',
        'Superior thermal performance',
        'Weather-tight construction',
        'Architectural flexibility',
        'Cost-effective building solution'
      ],
      specifications: {
        sizes: 'Panels: Up to 12m length, Various widths',
        packaging: 'Protected transport frames',
        standards: 'EN 14509, ASTM E283',
        warranty: '20 years structural and thermal'
      },
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-600'
    },
    {
      id: 'vapor-barrier',
      name: 'Vapour Barrier Butyl Wrap',
      category: 'Barrier Systems',
      shortName: 'Vapor Barrier',
      description: 'High-performance vapor barrier systems with butyl adhesive backing, providing superior moisture protection for insulation systems.',
      image: '',
      icon: Droplets,
      rating: 4.5,
      featured: false,
      badge: 'Moisture Block',
      properties: {
        vaporPermeability: '<0.1 perm',
        temperatureRange: '-40°C to +90°C',
        thickness: '0.2-1.0mm',
        adhesiveType: 'Butyl rubber based',
        tensileStrength: '15-25 N/mm',
        elongation: '300-500%'
      },
      applications: [
        'Pipe insulation vapor barriers',
        'HVAC system moisture protection',
        'Building envelope sealing',
        'Refrigeration line protection',
        'Underground applications',
        'Marine environment protection'
      ],
      advantages: [
        'Superior vapor barrier properties',
        'Excellent adhesion and sealing',
        'Conformable to irregular surfaces',
        'UV resistant formulations',
        'Long-term durability',
        'Easy installation process'
      ],
      specifications: {
        sizes: 'Rolls: 1m width, 25m length',
        packaging: 'Protective film backing',
        standards: 'ASTM E96, EN 1931',
        warranty: '15 years vapor barrier performance'
      },
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      id: 'jacketing-cladding',
      name: 'Jacketing & Cladding Accessories',
      category: 'Accessories',
      shortName: 'Protective Cladding',
      description: 'Protective jacketing and cladding systems for insulation applications, including aluminum, stainless steel, and PVC covering solutions.',
      image: 'assests/product/Jacketing or Cladding Accessories.jpg',
      icon: Shield,
      rating: 4.4,
      featured: false,
      badge: 'Protection',
      properties: {
        materials: 'Aluminum, Stainless Steel, PVC',
        thickness: '0.4-1.5mm',
        temperatureRange: '-40°C to +200°C',
        corrosionResistance: 'Excellent (SS), Good (Al, PVC)',
        weatherResistance: 'UV stabilized options',
        finishOptions: 'Mill, Painted, Embossed'
      },
      applications: [
        'Industrial piping protection',
        'Equipment insulation covering',
        'Outdoor insulation systems',
        'Marine and offshore applications',
        'Architectural insulation finishing',
        'Weather protection systems'
      ],
      advantages: [
        'Durable weather protection',
        'Professional finished appearance',
        'Corrosion resistant options',
        'Easy maintenance access',
        'Custom fabrication available',
        'Complete accessory systems'
      ],
      specifications: {
        sizes: 'Sheets and coils, Custom fabrication',
        packaging: 'Protected shipping crates',
        standards: 'ASTM B209, EN 485',
        warranty: '10-25 years depending on material'
      },
      color: 'from-gray-500 to-slate-500',
      bgColor: 'bg-gray-50',
      textColor: 'text-gray-600'
    },
    {
      id: 'adhesives-accessories',
      name: 'Adhesives and Insulation Accessories',
      category: 'Accessories',
      shortName: 'Installation Aids',
      description: 'Comprehensive range of adhesives, sealants, fasteners, and installation accessories for professional insulation system installation.',
      image: 'assests/product/Insulation Adhesives & Accessories.jpg',
      icon: Wrench,
      rating: 4.3,
      featured: false,
      badge: 'Complete Kit',
      properties: {
        adhesiveTypes: 'Contact, Spray, Brush-on, Tape',
        temperatureRange: '-40°C to +150°C',
        bondStrength: '0.5-2.5 N/mm²',
        setTime: '5 minutes to 24 hours',
        chemicalResistance: 'Excellent to specific media',
        shelfLife: '12-24 months'
      },
      applications: [
        'Insulation system bonding',
        'Vapor barrier sealing',
        'Joint and seam sealing',
        'Mechanical fastening systems',
        'Repair and maintenance',
        'Weather sealing applications'
      ],
      advantages: [
        'Professional installation results',
        'Complete system compatibility',
        'Long-term adhesion performance',
        'Weather resistant formulations',
        'Easy application methods',
        'Technical support included'
      ],
      specifications: {
        sizes: 'Various containers and application methods',
        packaging: 'Moisture-resistant containers',
        standards: 'ASTM C916, EN 14496',
        warranty: '5-10 years adhesion performance'
      },
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    },
    {
      id: 'phenolic-boards',
      name: 'Phenolic Foam Boards',
      category: 'Foam Insulation',
      shortName: 'Phenolic Boards',
      description: 'Rigid phenolic foam boards with superior fire performance and thermal efficiency for demanding building and industrial applications.',
      image: 'assests/product/PHENOLIC FOAM INSULATION.jpg',
      icon: Shield,
      rating: 4.8,
      featured: false,
      badge: 'Fire Rated',
      properties: {
        thermalConductivity: '0.020-0.025 W/mK',
        temperatureRange: '-180°C to +120°C',
        density: '40-120 kg/m³',
        fireRating: 'Class A1 Non-combustible',
        compressiveStrength: '200-500 kPa',
        dimensionalStability: 'Excellent long-term stability'
      },
      applications: [
        'External wall insulation systems',
        'Roof insulation applications',
        'Cold storage insulation',
        'Fire-rated construction',
        'Industrial building envelopes',
        'Clean room applications'
      ],
      advantages: [
        'Superior fire safety performance',
        'Excellent thermal efficiency',
        'Lightweight construction',
        'Easy cutting and installation',
        'Chemical and moisture resistant',
        'Long-term dimensional stability'
      ],
      specifications: {
        sizes: 'Boards: 1200x600mm, Thickness: 20-200mm',
        packaging: 'Plastic wrapped pallets',
        standards: 'BS 476, ASTM E84, ISO 9001',
        warranty: '25 years limited warranty'
      },
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600'
    },
    {
      id: 'phenolic-soffit',
      name: 'Phenolic Foam Soffit Insulation',
      category: 'Building Systems',
      shortName: 'Soffit Insulation',
      description: 'Specialized phenolic foam panels for exterior soffit applications with integrated weather barrier and decorative finish options.',
      image: 'assest/sproduct/Phenolic Foam Soffit Insulation.jpg',
      icon: Building2,
      rating: 4.8,
      featured: false,
      badge: 'Premium',
      properties: {
        thermalConductivity: '0.020-0.025 W/mK',
        temperatureRange: '-40°C to +120°C',
        density: '40-80 kg/m³',
        fireRating: 'Class A1 Non-combustible',
        flexuralStrength: '200-300 kPa',
        uvResistance: 'UV stabilized surface'
      },
      applications: [
        'Building soffit insulation',
        'Exterior wall cladding systems',
        'Architectural facades',
        'Weather barrier applications',
        'Commercial building envelopes',
        'Residential exterior insulation'
      ],
      advantages: [
        'Integrated weather protection',
        'Decorative finish options available',
        'Superior dimensional stability',
        'UV resistant surface coating',
        'Easy installation system',
        'Maintenance-free operation'
      ],
      specifications: {
        sizes: 'Panels: 1200x2400mm, Thickness: 25-150mm',
        packaging: 'Weather-resistant wrapping',
        standards: 'EN 13165, ASTM C1029',
        warranty: '20 years performance guarantee'
      },
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      id: 'glass-fiber-blanket',
      name: 'Glass Fiber Resilient Blanket',
      category: 'Mineral Fiber',
      shortName: 'Glass Fiber Blanket',
      description: 'Premium glass wool blanket insulation with exceptional resilience, thermal performance, and acoustic properties for versatile applications.',
      image: 'assests/product/Glass Fiber Resilient Blanket.jpg',
      icon: Layers,
      rating: 4.7,
      featured: true,
      badge: 'Eco-Friendly',
      properties: {
        thermalConductivity: '0.032-0.040 W/mK',
        temperatureRange: '-40°C to +230°C',
        density: '12-96 kg/m³',
        fireRating: 'Non-combustible A1',
        acousticRating: 'NRC 0.85-0.95',
        resilience: '>95% thickness recovery'
      },
      applications: [
        'HVAC ductwork wrapping',
        'Industrial equipment insulation',
        'Pipe and vessel insulation',
        'Acoustic treatment systems',
        'Building envelope insulation',
        'Fire protection barriers'
      ],
      advantages: [
        'Excellent resilience and recovery',
        'Superior acoustic absorption',
        'Non-combustible safety',
        'Chemical inertness',
        'Easy handling and installation',
        'Sustainable manufacturing'
      ],
      specifications: {
        sizes: 'Rolls: 1200mm width, Length: 10-25m',
        packaging: 'Compressed plastic bags',
        standards: 'ASTM C665, EN 14303',
        warranty: '50 years limited warranty'
      },
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      id: 'phenolic-duct',
      name: 'Phenolic Foam Pre-insulated Air Duct',
      category: 'Ductwork Systems',
      shortName: 'Pre-insulated Duct',
      description: 'Factory pre-fabricated phenolic foam ductwork systems offering superior thermal performance and fire safety for HVAC applications.',
      image: 'assests/product/Phenolic Foam Pre-Insulated Air Duct Panel.jpg',
      icon: Wind,
      rating: 4.8,
      featured: true,
      badge: 'System Solution',
      properties: {
        thermalConductivity: '0.020 W/mK',
        temperatureRange: '-30°C to +120°C',
        density: '40-45 kg/m³',
        fireRating: 'Class A1 Non-combustible',
        airTightness: 'Class C (EN 12237)',
        leakageRate: '<0.027 m³/h.m²'
      },
      applications: [
        'Commercial HVAC systems',
        'Clean room applications',
        'Hospital ventilation systems',
        'Industrial air handling',
        'Data center cooling',
        'Food processing facilities'
      ],
      advantages: [
        'Factory pre-fabricated quality',
        'Reduced installation time by 60%',
        'Excellent air tightness',
        'Superior fire performance',
        'Lightweight system design',
        'Custom fabrication available'
      ],
      specifications: {
        sizes: 'Custom fabricated to requirements',
        packaging: 'Protected shipping crates',
        standards: 'EN 13180, SMACNA',
        warranty: '15 years system warranty'
      },
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      id: 'thermal-support',
      name: 'High Density Thermal Support Inserts',
      category: 'Support Systems',
      shortName: 'Thermal Supports',
      description: 'High-density insulation materials engineered to provide thermal support and minimize thermal bridging in critical load-bearing applications.',
      image: 'assests/product/High Density Pipe Support Inserts.jpg',
      icon: Settings,
      rating: 4.6,
      featured: false,
      badge: 'Structural',
      properties: {
        thermalConductivity: '0.025-0.035 W/mK',
        temperatureRange: '-180°C to +200°C',
        density: '150-400 kg/m³',
        compressiveStrength: '0.4-2.0 MPa',
        shearStrength: '0.2-0.8 MPa',
        loadCapacity: 'Up to 50 kN/m²'
      },
      applications: [
        'Cryogenic tank supports',
        'Structural thermal breaks',
        'High-load bearing applications',
        'Equipment mounting systems',
        'Pipeline support structures',
        'Bridge thermal isolation'
      ],
      advantages: [
        'High compressive and shear strength',
        'Low thermal conductivity',
        'Excellent dimensional stability',
        'Chemical and moisture resistance',
        'Custom shapes and sizes',
        'Long-term reliability'
      ],
      specifications: {
        sizes: 'Blocks: Custom dimensions available',
        packaging: 'Protective foam wrapping',
        standards: 'ASTM C578, EN 13164',
        warranty: '20 years structural performance'
      },
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    },
   {
      id: 'pir-insulation',
      name: 'Polyisocyanurate (PIR) Insulation',
      category: 'Foam Insulation',
      shortName: 'PIR Insulation',
      description: 'High-performance PIR foam boards with aluminum foil facing, delivering exceptional thermal efficiency and fire performance.',
      image: 'assests/product/Polyisocyanurate (PIR) Insulations.jpg',
      icon: Shield,
      rating: 4.9,
      featured: true,
      badge: 'High Performance',
      properties: {
        thermalConductivity: '0.020-0.028 W/mK',
        temperatureRange: '-50°C to +120°C',
        density: '30-200 kg/m³',
        fireRating: 'Class B-s1,d0',
        compressiveStrength: '120-400 kPa',
        facingOptions: 'Aluminum foil, Glass tissue'
      },
      applications: [
        'Roof and wall insulation',
        'Cold storage facilities',
        'Industrial building envelopes',
        'Sandwich panel cores',
        'District heating systems',
        'Commercial construction'
      ],
      advantages: [
        'Lowest thermal conductivity available',
        'Excellent long-term performance',
        'Superior fire characteristics',
        'Moisture resistant barriers',
        'Lightweight construction',
        'Cost-effective solution'
      ],
      specifications: {
        sizes: 'Boards: 1200x2400mm, Thickness: 20-200mm',
        packaging: 'Shrink-wrapped pallets',
        standards: 'EN 13165, ASTM C1289',
        warranty: '25 years thermal performance'
      },
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600'
    },
    {
      id: 'pur-insulation',
      name: 'Polyurethane (PUR) Insulation',
      category: 'Foam Insulation',
      shortName: 'PUR Insulation',
      description: 'Flexible and rigid polyurethane foam insulation offering excellent thermal properties, versatility, and ease of installation.',
      image: 'assests/product/Polyurethane (PUR Foam Blocks) Insulation.jpg',
      icon: Droplets,
      rating: 4.5,
      featured: false,
      badge: 'Versatile',
      properties: {
        thermalConductivity: '0.022-0.035 W/mK',
        temperatureRange: '-40°C to +110°C',
        density: '30-300 kg/m³',
        fireRating: 'Class E (Flexible), Class B (Rigid)',
        flexibility: 'Flexible to rigid options',
        adhesion: 'Excellent bonding properties'
      },
      applications: [
        'Flexible pipe insulation',
        'HVAC system insulation',
        'Spray foam applications',
        'Automotive insulation',
        'Refrigeration systems',
        'Building envelope sealing'
      ],
      advantages: [
        'Excellent thermal performance',
        'Superior adhesion properties',
        'Flexible installation options',
        'Good chemical resistance',
        'Seamless application capability',
        'Cost-effective solution'
      ],
      specifications: {
        sizes: 'Flexible: Tubes, Sheets | Rigid: Boards',
        packaging: 'Plastic bags or cartons',
        standards: 'EN 14308, ASTM C534',
        warranty: '15 years limited warranty'
      },
      color: 'from-teal-500 to-green-500',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600'
    },
    {
      id: 'roof-wall-soffit',
      name: 'Roof, Wall, Soffit Insulation & EIFS, ETICS',
      category: 'Building Systems',
      shortName: 'EIFS/ETICS System',
      description: 'Complete external thermal insulation composite systems (ETICS/EIFS) for building envelope applications with integrated finishing solutions.',
      image: 'assests/product/Roof, Wall, Soffit Insulation & EIFS System.jpg',
      icon: Home,
      rating: 4.7,
      featured: false,
      badge: 'Complete System',
      properties: {
        thermalConductivity: '0.032-0.042 W/mK',
        temperatureRange: '-40°C to +80°C',
        density: '15-200 kg/m³',
        fireRating: 'A1-A2 Non-combustible',
        thermalBridge: 'Eliminated with continuous insulation',
        finishOptions: 'Stucco, Brick, Stone textures'
      },
      applications: [
        'Building envelope renovation',
        'New construction facades',
        'Thermal bridge elimination',
        'Energy efficiency upgrades',
        'Architectural finishing systems',
        'Weather barrier integration'
      ],
      advantages: [
        'Complete system solution',
        'Eliminates thermal bridging',
        'Weather and moisture protection',
        'Architectural design flexibility',
        'Energy efficiency improvement',
        'Integrated installation process'
      ],
      specifications: {
        sizes: 'System components vary by application',
        packaging: 'Complete system kits',
        standards: 'EN 13499, ASTM C1397',
        warranty: '25 years system warranty'
      },
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-600'
    },
    {
      id: 'preinsulated-pipe',
      name: 'Pre-insulated Pipe and Fittings',
      category: 'Pipe Systems',
      shortName: 'Pre-insulated Pipes',
      description: 'Factory pre-insulated piping systems with protective outer casing for district heating, cooling, and process applications.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      icon: Factory,
      rating: 4.8,
      featured: false,
      badge: 'Factory Made',
      properties: {
        thermalConductivity: '0.025-0.030 W/mK',
        temperatureRange: '-10°C to +140°C',
        pipeDiameters: '20mm to 1200mm',
        insulationThickness: '30-200mm',
        casingMaterial: 'HDPE, Steel, PVC options',
        waterproofing: 'Fully waterproof system'
      },
      applications: [
        'District heating networks',
        'Chilled water systems',
        'Industrial process piping',
        'Underground utility lines',
        'Steam distribution systems',
        'Hot water supply networks'
      ],
      advantages: [
        'Factory quality control',
        'Reduced installation time',
        'Superior thermal performance',
        'Long-term durability',
        'Waterproof protection',
        'Complete fitting systems'
      ],
      specifications: {
        sizes: 'DN20 to DN1200, Custom lengths',
        packaging: 'Protected transport cradles',
        standards: 'EN 253, EN 448, DIN 4102',
        warranty: '30 years thermal performance'
      },
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      id: 'polyolefin',
      name: 'Polyolefin (XLPE) Insulation',
      category: 'Flexible Insulation',
      shortName: 'XLPE Insulation',
      description: 'Closed-cell cross-linked polyethylene foam insulation with excellent moisture resistance and flexibility for diverse piping applications.',
      image: 'assests/product/Perlite Insulation.jpg',
      icon: Droplets,
      rating: 4.6,
      featured: false,
      badge: 'Flexible',
      properties: {
        thermalConductivity: '0.036-0.040 W/mK',
        temperatureRange: '-40°C to +105°C',
        density: '32-45 kg/m³',
        waterVaporResistance: 'μ > 1000',
        flexibility: 'Excellent flexibility',
        cellStructure: 'Closed-cell foam'
      },
      applications: [
        'HVAC refrigeration lines',
        'Chilled water piping',
        'Plumbing systems',
        'Solar heating systems',
        'Air conditioning ducts',
        'Condensation prevention'
      ],
      advantages: [
        'Excellent moisture resistance',
        'Superior flexibility',
        'Easy installation',
        'Self-sealing properties',
        'UV resistant options',
        'Chemical resistance'
      ],
      specifications: {
        sizes: 'Tubes: 6-168mm ID, Sheets: 1x2m',
        packaging: 'Cartons or plastic bags',
        standards: 'ASTM C534, EN 14304',
        warranty: '15 years flexibility guarantee'
      },
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-50',
      textColor: 'text-cyan-600'
    }
  ];

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredProducts = products.filter(p => p.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/40">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900"></div>
          {/* Animated Shapes */}
          <motion.div 
            className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"
            animate={{ 
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-40 right-32 w-48 h-48 bg-cyan-500/20 rounded-full blur-2xl"
            animate={{ 
              x: [0, -40, 0],
              y: [0, 40, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-32 left-1/3 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl"
            animate={{ 
              x: [0, 60, 0],
              y: [0, -20, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            {/* Stats */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center space-x-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">{products.length}</div>
                  <div className="text-sm text-gray-300">Products</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">{categories.length - 1}</div>
                  <div className="text-sm text-gray-300">Categories</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">25+</div>
                  <div className="text-sm text-gray-300">Years</div>
                </div>
              </div>
            </motion.div>
            
            <h1 className="text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
              Our Products
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Premium insulation solutions engineered for excellence, 
              <span className="text-cyan-300 font-semibold"> built to last</span> in the most demanding applications
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 inline-flex items-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' })}
              >
                <Package className="mr-3 h-6 w-6" />
                Explore Products
              </motion.button>
              <motion.button
                className="border-2 border-white/50 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-blue-900 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 inline-flex items-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="mr-3 h-6 w-6" />
                Download Catalog
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-full mb-6">
              <Star className="h-5 w-5 text-orange-500 mr-2" />
              <span className="text-orange-700 font-semibold">Featured Products</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Most Popular Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our top-performing insulation products trusted by industry leaders worldwide
            </p>
          </motion.div>

         <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className={`px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${product.color} shadow-lg`}>
                    {product.badge}
                  </span>
                </div>
                
                {/* Image */}
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Rating */}
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/90 backdrop-blur-md px-3 py-2 rounded-full flex items-center shadow-lg">
                      <Star className="h-4 w-4 text-yellow-400 mr-1 fill-current" />
                      <span className="font-bold text-gray-900">{product.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center mb-4">
                    <product.icon className={`h-8 w-8 ${product.textColor} mr-3`} />
                    <span className={`text-sm font-semibold ${product.textColor} bg-gradient-to-r ${product.bgColor} px-3 py-1 rounded-full`}>
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {product.shortName}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed overflow-hidden" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical'
                  }}>
                    {product.description}
                  </p>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 flex-grow">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-xs text-gray-500 mb-1">Thermal Conductivity</div>
                      <div className="font-bold text-gray-900 text-sm">{product.properties.thermalConductivity}</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-xs text-gray-500 mb-1">Temperature Range</div>
                      <div className="font-bold text-gray-900 text-sm">{product.properties.temperatureRange}</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className={`w-full bg-gradient-to-r ${product.color} text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group mt-auto`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProduct(product)}
                  >
                    <Eye className="mr-2 h-5 w-5" />
                    View Details
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Products Section */}
      <section id="products-section" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Complete Product Range</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive insulation solutions for every industrial and commercial application
            </p>
          </motion.div>

          {/* Search and Filter Bar */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-12 border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products by name, category, or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-gray-50 transition-all"
                />
              </div>
              
              {/* View Mode Toggle */}
              <div className="flex items-center bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  <Grid3X3 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>

              {/* Filter Button */}
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-semibold"
              >
                <Filter className="mr-2 h-5 w-5" />
                Filter
              </button>
            </div>

            {/* Category Filter */}
            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 pt-6 border-t border-gray-200"
                >
                  <div className="flex flex-wrap gap-3">
                    {categories.map((category) => (
                      <motion.button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                          selectedCategory === category
                            ? 'bg-blue-600 text-white shadow-lg scale-105'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {category}
                      </motion.button>
                    ))}
                  </div>
                  
                  <div className="mt-4 text-center">
                    <span className="text-gray-600 bg-gray-50 px-4 py-2 rounded-full font-medium">
                      {filteredProducts.length} products found
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Products Grid/List */}
          <AnimatePresence mode="wait">
            {viewMode === 'grid' ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
              >
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    variants={itemVariants}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                    whileHover={{ y: -8, scale: 1.02 }}
                    layout
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      
                      {/* Badge */}
                      {product.featured && (
                        <div className="absolute top-3 left-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${product.color} shadow-lg`}>
                            {product.badge}
                          </span>
                        </div>
                      )}
                      
                      {/* Icon */}
                      <div className="absolute top-3 right-3">
                        <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg">
                          <product.icon className="h-5 w-5 text-gray-700" />
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="absolute bottom-3 right-3">
                        <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center shadow-lg">
                          <Star className="h-4 w-4 text-yellow-400 mr-1 fill-current" />
                          <span className="text-sm font-bold text-gray-900">{product.rating}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className={`text-xs font-semibold ${product.textColor} bg-gradient-to-r ${product.bgColor} px-3 py-1 rounded-full`}>
                          {product.category}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {product.description}
                      </p>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="bg-gray-50 p-2 rounded-lg">
                          <div className="text-xs text-gray-500 mb-1">Thermal</div>
                          <div className="font-semibold text-gray-900 text-xs">{product.properties.thermalConductivity}</div>
                        </div>
                        <div className="bg-gray-50 p-2 rounded-lg">
                          <div className="text-xs text-gray-500 mb-1">Temp Range</div>
                          <div className="font-semibold text-gray-900 text-xs">{product.properties.temperatureRange}</div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <motion.button
                          className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedProduct(product)}
                        >
                          <Eye className="mr-1 h-4 w-4" />
                          Details
                        </motion.button>
                        <motion.button
                          className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg text-sm font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors flex items-center justify-center"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Download className="mr-1 h-4 w-4" />
                          Spec
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex flex-col lg:flex-row">
                      {/* Image */}
                      <div className="lg:w-1/3 h-64 lg:h-auto relative overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        
                        {/* Badge */}
                        {product.featured && (
                          <div className="absolute top-4 left-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-bold text-white bg-gradient-to-r ${product.color} shadow-lg`}>
                              {product.badge}
                            </span>
                          </div>
                        )}
                        
                        {/* Rating */}
                        <div className="absolute bottom-4 right-4">
                          <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full flex items-center shadow-lg">
                            <Star className="h-4 w-4 text-yellow-400 mr-1 fill-current" />
                            <span className="font-bold text-gray-900">{product.rating}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:w-2/3 p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center mb-2">
                              <product.icon className={`h-6 w-6 ${product.textColor} mr-3`} />
                              <span className={`text-sm font-semibold ${product.textColor} bg-gradient-to-r ${product.bgColor} px-3 py-1 rounded-full`}>
                                {product.category}
                              </span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                              {product.name}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-6 line-clamp-2">
                          {product.description}
                        </p>

                        {/* Properties Grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-xs text-gray-500 mb-1">Thermal Conductivity</div>
                            <div className="font-bold text-gray-900 text-sm">{product.properties.thermalConductivity}</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-xs text-gray-500 mb-1">Temperature Range</div>
                            <div className="font-bold text-gray-900 text-sm">{product.properties.temperatureRange}</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-xs text-gray-500 mb-1">Fire Rating</div>
                            <div className="font-bold text-gray-900 text-sm">{product.properties.fireRating}</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-xs text-gray-500 mb-1">Density</div>
                            <div className="font-bold text-gray-900 text-sm">{product.properties.density}</div>
                          </div>
                        </div>

                        {/* Applications Preview */}
                        <div className="mb-6">
                          <div className="text-sm font-semibold text-gray-700 mb-2">Key Applications:</div>
                          <div className="flex flex-wrap gap-2">
                            {product.applications.slice(0, 3).map((app, appIndex) => (
                              <span key={appIndex} className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">
                                {app}
                              </span>
                            ))}
                            {product.applications.length > 3 && (
                              <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                                +{product.applications.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4">
                          <motion.button
                            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelectedProduct(product)}
                          >
                            <Eye className="mr-2 h-5 w-5" />
                            View Full Details
                          </motion.button>
                          <motion.button
                            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors flex items-center"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Download className="mr-2 h-5 w-5" />
                            Download Spec Sheet
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Products Found</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                We couldn't find any products matching your criteria. Try adjusting your search or filter settings.
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setSearchTerm('')}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                >
                  Clear Search
                </button>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <X className="h-5 w-5 text-gray-600" />
                </button>
                
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center mb-2">
                    <selectedProduct.icon className="h-8 w-8 mr-3" />
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                      {selectedProduct.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-2">{selectedProduct.name}</h2>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-2 fill-current" />
                    <span className="font-semibold">{selectedProduct.rating} Rating</span>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Description */}
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
                    <p className="text-gray-600 mb-6">{selectedProduct.description}</p>

                    {/* Properties */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Properties</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(selectedProduct.properties).map(([key, value]) => (
                        <div key={key} className="bg-gray-50 p-4 rounded-xl">
                          <div className="text-sm text-gray-500 mb-1 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                          <div className="font-bold text-gray-900">{value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Applications */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Applications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                      {selectedProduct.applications.map((app, index) => (
                        <div key={index} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          {app}
                        </div>
                      ))}
                    </div>

                    {/* Advantages */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Advantages</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedProduct.advantages.map((advantage, index) => (
                        <div key={index} className="flex items-center text-gray-600">
                          <Award className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0" />
                          {advantage}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div>
                    {/* Quick Stats */}
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 mb-6">
                      <h4 className="font-bold text-gray-900 mb-4">Quick Overview</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="text-sm text-gray-500">Category</div>
                          <div className="font-semibold">{selectedProduct.category}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Rating</div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 mr-1 fill-current" />
                            <span className="font-semibold">{selectedProduct.rating}/5.0</span>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Fire Rating</div>
                          <div className="font-semibold">{selectedProduct.properties.fireRating}</div>
                        </div>
                      </div>
                    </div>

                    {/* Specifications */}
                    <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                      <h4 className="font-bold text-gray-900 mb-4">Specifications</h4>
                      <div className="space-y-3">
                        {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                          <div key={key}>
                            <div className="text-sm text-gray-500 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                            <div className="font-medium text-gray-900 text-sm">{value}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-3">
                      <motion.button
                        className={`w-full bg-gradient-to-r ${selectedProduct.color} text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Download className="mr-2 h-5 w-5" />
                        Download Datasheet
                      </motion.button>
                      <motion.button
                        className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-bold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Request Quote
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-48 h-48 bg-cyan-500/20 rounded-full blur-2xl"
            animate={{ 
              x: [0, -80, 0],
              y: [0, 30, 0],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Get expert consultation and custom solutions for your insulation needs. 
              Our technical team is ready to help you choose the perfect products.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                className="bg-white text-blue-900 px-10 py-5 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Wrench className="mr-3 h-6 w-6" />
                Get Technical Support
              </motion.button>
              <motion.button
                className="border-2 border-white/50 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-blue-900 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 inline-flex items-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Package className="mr-3 h-6 w-6" />
                Request Samples
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;