import { LeatherType, CustomLeatherColor, CustomHardwareOption, LiningOption, MeasurementField } from '../types';

export const LEATHER_OPTIONS: LeatherType[] = [
  {
    id: 'lth-1',
    code: 'full-grain-vegetable-tanned',
    name: 'Full-Grain Vegetable-Tanned Hide',
    swatchColor: '#49372E',
    priceDelta: 0,
    description: 'Tough, rugged, and durable. Develops a richer, glossy patina the more you wear it.'
  },
  {
    id: 'lth-2',
    code: 'italian-lamb-nappa',
    name: 'Italian Lamb Nappa',
    swatchColor: '#292827',
    priceDelta: 75,
    description: 'Ultra-soft and lightweight. Incredibly comfortable and flexible right from day one.'
  },
  {
    id: 'lth-3',
    code: 'pull-up-cowhide',
    name: 'Pull-Up Heritage Hide',
    swatchColor: '#A88770',
    priceDelta: 50,
    description: 'Supple vintage leather that lightens slightly when creased, creating an authentic weathered depth.'
  },
  {
    id: 'lth-4',
    code: 'roughout-suede',
    name: 'Roughout Plush Suede',
    swatchColor: '#D4C4B4',
    priceDelta: 40,
    description: 'Velvety, plush nap texture with a warm, relaxed drape and tactile feel.'
  }
];

export const COLOR_OPTIONS: CustomLeatherColor[] = [
  { id: 'clr-1', code: 'dark-espresso', name: 'Dark Espresso', hex: '#49372E' },
  { id: 'clr-2', code: 'obsidian-charcoal', name: 'Obsidian Charcoal', hex: '#171819' },
  { id: 'clr-3', code: 'muted-cognac', name: 'Muted Cognac', hex: '#A88770' },
  { id: 'clr-4', code: 'smoked-graphite', name: 'Smoked Graphite', hex: '#292827' },
  { id: 'clr-5', code: 'dark-oxblood', name: 'Dark Oxblood', hex: '#3B2328' }
];

export const HARDWARE_OPTIONS: CustomHardwareOption[] = [
  {
    id: 'hw-1',
    code: 'antique-brass',
    name: 'Aged Antique Brass',
    description: 'Solid hand-burnished Japanese brass pulls and snaps with warm vintage patina.',
    priceDelta: 0
  },
  {
    id: 'hw-2',
    code: 'matte-charcoal',
    name: 'Matte Charcoal Oxide',
    description: 'Stealth charcoal PVD coating with non-reflective, scratch-resistant modern finish.',
    priceDelta: 35
  },
  {
    id: 'hw-3',
    code: 'brushed-nickel',
    name: 'Brushed Muted Nickel',
    description: 'Understated cool-toned brushed alloy with lifelong corrosion resistance.',
    priceDelta: 25
  }
];

export const LINING_OPTIONS: LiningOption[] = [
  {
    id: 'lng-1',
    code: 'bemberg-cupro',
    name: 'Japanese Bemberg Cupro',
    description: 'Silky, breathable cellulosic weave engineered for frictionless arm glide.',
    priceDelta: 0
  },
  {
    id: 'lng-2',
    code: 'mulberry-silk',
    name: 'Mulberry Silk Twill',
    description: 'Ultra-luxurious, temperature-regulating natural silk lining with subtle lustre.',
    priceDelta: 60
  },
  {
    id: 'lng-3',
    code: 'cotton-twill',
    name: 'Heirloom Cotton Twill',
    description: 'Durable structured twill weave providing dependable everyday structure and warmth.',
    priceDelta: 20
  }
];

export const MEASUREMENT_FIELDS: MeasurementField[] = [
  {
    id: 'mf-chest',
    fieldKey: 'chest',
    label: 'Chest Circumference',
    category: 'jackets',
    minVal: 36,
    maxVal: 52,
    instructions: 'Measure around the fullest part of your chest, keeping tape level under armpits.'
  },
  {
    id: 'mf-shoulders',
    fieldKey: 'shoulders',
    label: 'Shoulder Width',
    category: 'jackets',
    minVal: 16,
    maxVal: 22,
    instructions: 'Measure straight across the back from the tip of one shoulder bone to the other.'
  },
  {
    id: 'mf-sleeve',
    fieldKey: 'sleeve',
    label: 'Sleeve Length',
    category: 'jackets',
    minVal: 23,
    maxVal: 29,
    instructions: 'From the edge of the shoulder bone down to the base of your thumb / wrist crease.'
  },
  {
    id: 'mf-length',
    fieldKey: 'length',
    label: 'Back Torso Length',
    category: 'jackets',
    minVal: 24,
    maxVal: 30,
    instructions: 'From the base of the back collar seam straight down to where you want the jacket hem.'
  },
  {
    id: 'mf-waist',
    fieldKey: 'waist',
    label: 'Waist / Midsection',
    category: 'jackets',
    minVal: 30,
    maxVal: 48,
    instructions: 'Measure around your natural waistline, maintaining a natural relaxed posture.'
  },
  {
    id: 'mf-bicep',
    fieldKey: 'bicep',
    label: 'Bicep Circumference',
    category: 'jackets',
    minVal: 12,
    maxVal: 19,
    instructions: 'Measure around the fullest part of your upper arm with elbow relaxed.'
  }
];
