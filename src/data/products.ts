import { Product } from '@/types/product';

export const sampleProducts: Product[] = [
  // Fixie Bikes
  {
    id: '1',
    name: 'FixGear Pro Single Speed',
    price: 2500000,
    originalPrice: 3000000,
    image: '/lovable-uploads/d9c27aec-1701-4386-ac52-cf6a4ba60834.png',
    category: 'fixie',
    brand: 'FixGear',
    description: 'Sepeda fixie premium dengan frame aluminium ringan dan desain minimalis yang cocok untuk urban cycling.',
    specifications: {
      'Frame': 'Aluminium 6061',
      'Fork': 'Carbon Steel',
      'Wheel Size': '700c',
      'Chain': 'KMC Z410',
      'Weight': '8.5 kg'
    },
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Urban Rider Classic',
    price: 1800000,
    image: '/lovable-uploads/d9c27aec-1701-4386-ac52-cf6a4ba60834.png',
    category: 'fixie',
    brand: 'FixGear',
    description: 'Sepeda fixie entry level dengan kualitas terbaik untuk pemula yang ingin merasakan pengalaman berkendara fixed gear.',
    specifications: {
      'Frame': 'Hi-Ten Steel',
      'Fork': 'Hi-Ten Steel',
      'Wheel Size': '700c',
      'Chain': 'Basic Chain',
      'Weight': '10 kg'
    },
    inStock: true
  },
  {
    id: '3',
    name: 'Street Master Elite',
    price: 3200000,
    image: '/lovable-uploads/d9c27aec-1701-4386-ac52-cf6a4ba60834.png',
    category: 'fixie',
    brand: 'FixGear',
    description: 'Sepeda fixie premium untuk pengendara profesional dengan komponen berkualitas tinggi.',
    specifications: {
      'Frame': 'Carbon Steel Chromoly',
      'Fork': 'Carbon Fiber',
      'Wheel Size': '700c',
      'Chain': 'KMC Z510HX',
      'Weight': '7.8 kg'
    },
    inStock: true,
    featured: true
  },

  // Velg / Wheels
  {
    id: '4',
    name: 'Deep Rim Wheelset 40mm',
    price: 450000,
    image: '/lovable-uploads/d9c27aec-1701-4386-ac52-cf6a4ba60834.png',
    category: 'velg',
    brand: 'FixGear',
    description: 'Velg deep rim 40mm untuk performa aerodinamis yang lebih baik.',
    specifications: {
      'Rim Depth': '40mm',
      'Material': 'Aluminium Alloy',
      'Spoke Count': '32H',
      'Hub': 'Sealed Bearing',
      'Weight': '1.8 kg/set'
    },
    inStock: true
  },
  {
    id: '5',
    name: 'Classic Track Wheelset',
    price: 320000,
    image: '/lovable-uploads/d9c27aec-1701-4386-ac52-cf6a4ba60834.png',
    category: 'velg',
    brand: 'FixGear',
    description: 'Velg track klasik dengan desain timeless untuk fixie.',
    specifications: {
      'Rim Depth': '25mm',
      'Material': 'Aluminium',
      'Spoke Count': '36H',
      'Hub': 'Loose Ball',
      'Weight': '2.1 kg/set'
    },
    inStock: true
  },

  // Ban / Tires
  {
    id: '6',
    name: 'Continental Gatorskin 700x25c',
    price: 180000,
    image: '/lovable-uploads/d9c27aec-1701-4386-ac52-cf6a4ba60834.png',
    category: 'ban',
    brand: 'Continental',
    description: 'Ban premium dengan perlindungan tusukan yang sangat baik.',
    specifications: {
      'Size': '700x25c',
      'TPI': '180',
      'Weight': '240g',
      'Protection': 'PolyX Breaker',
      'Compound': 'Pure Grip'
    },
    inStock: true
  },
  {
    id: '7',
    name: 'Michelin Pro4 Service Course',
    price: 220000,
    image: '/lovable-uploads/d9c27aec-1701-4386-ac52-cf6a4ba60834.png',
    category: 'ban',
    brand: 'Michelin',
    description: 'Ban balap dengan grip dan durabilitas superior.',
    specifications: {
      'Size': '700x23c',
      'TPI': '220',
      'Weight': '215g',
      'Technology': 'Bi-Compound',
      'Color': 'Black'
    },
    inStock: true
  },

  // Gear
  {
    id: '8',
    name: 'SRAM Omnium Crankset',
    price: 850000,
    image: '/lovable-uploads/d9c27aec-1701-4386-ac52-cf6a4ba60834.png',
    category: 'gear',
    brand: 'SRAM',
    description: 'Crankset track premium dari SRAM untuk performa maksimal.',
    specifications: {
      'Crank Length': '165mm, 170mm, 175mm',
      'BCD': '130mm',
      'Chainring': '48T',
      'Material': 'Forged Aluminum',
      'Bottom Bracket': 'GXP'
    },
    inStock: true,
    featured: true
  },

  // Frame
  {
    id: '9',
    name: 'Track Frame Chromoly',
    price: 1200000,
    image: '/lovable-uploads/d9c27aec-1701-4386-ac52-cf6a4ba60834.png',
    category: 'frame',
    brand: 'FixGear',
    description: 'Frame track chromoly steel dengan geometri agresif untuk performa optimal.',
    specifications: {
      'Material': 'Chromoly Steel',
      'Size': '52cm, 54cm, 56cm, 58cm',
      'Bottom Bracket': 'English Threaded',
      'Dropouts': 'Track Ends',
      'Weight': '2.1 kg'
    },
    inStock: true
  },

  // Saddle
  {
    id: '10',
    name: 'Brooks B17 Leather Saddle',
    price: 650000,
    image: '/lovable-uploads/d9c27aec-1701-4386-ac52-cf6a4ba60834.png',
    category: 'saddle',
    brand: 'Brooks',
    description: 'Sadel kulit premium handmade dari Brooks England.',
    specifications: {
      'Material': 'Vegetable Tanned Leather',
      'Rails': 'Steel',
      'Length': '275mm',
      'Width': '170mm',
      'Weight': '520g'
    },
    inStock: true
  },

  // Stang / Handlebar
  {
    id: '11',
    name: 'Track Drop Bar 31.8mm',
    price: 280000,
    image: '/lovable-uploads/d9c27aec-1701-4386-ac52-cf6a4ba60834.png',
    category: 'stang',
    brand: 'FixGear',
    description: 'Stang drop bar aluminum untuk posisi aerodinamis.',
    specifications: {
      'Clamp Diameter': '31.8mm',
      'Width': '420mm',
      'Drop': '140mm',
      'Reach': '75mm',
      'Material': 'Aluminum 6061'
    },
    inStock: true
  }
];