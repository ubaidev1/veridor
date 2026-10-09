import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'classic-biker',
    name: 'The Classic Biker',
    tagline: 'A confident silhouette with timeless attitude.',
    category: 'jackets',
    basePrice: 890,
    image: '/src/assets/images/product_classic_biker_1791560502586.jpg',
    description: 'A structured, asymmetric icon built for enduring wear. Cut from full-grain hides selected for substance and supple movement, featuring hand-burnished lapels, action-back pleats for unhindered mobility, and heavy antique brass hardware.',
    details: [
      'Full-grain vegetable-tanned steerhide',
      'Asymmetric front zip with double lapel snap closures',
      'Action-back shoulder gussets for comfortable reach',
      'Two zipped hand-warmer pockets & diagonal chest pocket',
      'Satin-lined sleeves and heavy cotton twill body lining'
    ],
    materials: 'Vegetable-tanned full-grain leather, Japanese antique brass zippers, Japanese twill lining.',
    availableColors: [
      { id: 'espresso', name: 'Dark Espresso', hex: '#49372E' },
      { id: 'tobacco', name: 'Muted Cognac', hex: '#A88770' },
      { id: 'burgundy', name: 'Dark Oxblood', hex: '#3B2328' }
    ],
    hardwareOptions: [
      { id: 'antique-brass', name: 'Aged Antique Brass' },
      { id: 'matte-charcoal', name: 'Matte Charcoal Oxide' }
    ]
  },
  {
    id: 'modern-racer',
    name: 'The Modern Racer',
    tagline: 'Clean lines. Understated character.',
    category: 'jackets',
    basePrice: 840,
    image: '/src/assets/images/product_modern_racer_1791560514132.jpg',
    description: 'Stripped of non-essentials to celebrate the natural grain of the hide. The Modern Racer features a refined mandarin snap collar, vertical seam construction, and balanced chest volume tailored for everyday urban movement.',
    details: [
      'Supple full-grain calfskin with natural waxy touch',
      'Band collar with dual brass closure snaps',
      'Two-way central zipper for tailored seated comfort',
      'Streamlined zipped hip pockets and dual interior welt pockets',
      'Zip-gusseted cuffs with leather wind guard'
    ],
    materials: 'Selected European calfskin, custom solid brass hardware, cupro body lining.',
    availableColors: [
      { id: 'tobacco', name: 'Muted Cognac', hex: '#A88770' },
      { id: 'espresso', name: 'Dark Espresso', hex: '#49372E' },
      { id: 'forest', name: 'Smoked Graphite', hex: '#292827' }
    ],
    hardwareOptions: [
      { id: 'antique-brass', name: 'Aged Antique Brass' },
      { id: 'brushed-silver', name: 'Brushed Muted Nickel' }
    ]
  },
  {
    id: 'everyday-jacket',
    name: 'The Everyday Leather Jacket',
    tagline: 'Effortless style, made personal.',
    category: 'jackets',
    basePrice: 860,
    image: '/src/assets/images/product_everyday_jacket_1791560525675.jpg',
    description: 'The definitive daily companion designed to develop rich character with every season. Relaxed through the shoulders with a gentle taper, crafted in an atmospheric deep oxblood tone that adapts effortlessly to day and evening.',
    details: [
      'Medium-weight drum-dyed full-grain leather',
      'Pointed spread collar with structured neck stand',
      'Clean horizontal chest welt zips and slant hand pockets',
      'Internal zip security pocket for phone and passport',
      'Hand-finished edge wax on all seams'
    ],
    materials: 'Drum-dyed full-grain hide, antique brass finishes, breathable cupro-cotton lining.',
    availableColors: [
      { id: 'burgundy', name: 'Dark Oxblood', hex: '#3B2328' },
      { id: 'espresso', name: 'Dark Espresso', hex: '#49372E' },
      { id: 'tobacco', name: 'Muted Cognac', hex: '#A88770' }
    ],
    hardwareOptions: [
      { id: 'antique-brass', name: 'Aged Antique Brass' },
      { id: 'matte-charcoal', name: 'Matte Charcoal Oxide' }
    ]
  },
  {
    id: 'veridor-wallet',
    name: 'The Atelier Bifold Wallet',
    tagline: 'Hand-burnished edges. Built to patina.',
    category: 'wallets',
    basePrice: 195,
    image: '/src/assets/images/product_veridor_wallet_1791560589994.jpg',
    description: 'An intimate study in proportion and edge finishing. Features 6 precision-cut card slots, dual hidden pockets, and a full-length cash compartment folded without unneeded bulk.',
    details: [
      'Full-grain vegetable-tanned saddle leather',
      'Beeswax-burnished and heat-creased perimeter',
      'Six card slots with eased thumb access',
      'Hand-stitched bar tacks at all tension points',
      'Folds slim to prevent pocket distortion'
    ],
    materials: 'Vegetable-tanned full-grain leather, bonded nylon thread, beeswax finish.',
    availableColors: [
      { id: 'espresso', name: 'Dark Espresso & Cognac', hex: '#49372E' },
      { id: 'tobacco', name: 'Muted Cognac', hex: '#A88770' },
      { id: 'burgundy', name: 'Dark Oxblood', hex: '#3B2328' }
    ],
    hardwareOptions: [
      { id: 'antique-brass', name: 'Aged Brass Snap (Optional)' }
    ]
  }
];
