export type LeatherColor = 'espresso' | 'tobacco' | 'burgundy' | 'forest';
export type HardwareFinish = 'antique-brass' | 'matte-charcoal' | 'brushed-silver';

export interface LeatherType {
  id: string;
  code: string;
  name: string;
  swatchColor: string;
  priceDelta: number;
  description?: string;
}

export interface CustomLeatherColor {
  id: string;
  code: string;
  name: string;
  hex: string;
}

export interface CustomHardwareOption {
  id: string;
  code: string;
  name: string;
  description: string;
  priceDelta: number;
}

export interface LiningOption {
  id: string;
  code: string;
  name: string;
  description: string;
  priceDelta: number;
}

export interface MeasurementField {
  id: string;
  fieldKey: string;
  label: string;
  category?: string;
  minVal: number;
  maxVal: number;
  instructions: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'jackets' | 'wallets';
  basePrice: number;
  image: string;
  description: string;
  details: string[];
  materials: string;
  availableColors: {
    id: LeatherColor;
    name: string;
    hex: string;
  }[];
  hardwareOptions: {
    id: HardwareFinish;
    name: string;
  }[];
}

export interface CartItem {
  id: string;
  productId: string;
  productName: string;
  image: string;
  price: number;
  quantity: number;
  color: string;
  hardware: string;
  size: string;
  leatherType?: string;
  lining?: string;
  monogram?: string;
  isCustomFit?: boolean;
  measurements?: {
    chest?: string | number;
    shoulder?: string | number;
    sleeve?: string | number;
    length?: string | number;
    waist?: string | number;
    bicep?: string | number;
    [key: string]: string | number | undefined;
  };
}
