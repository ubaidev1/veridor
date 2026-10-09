import React, { useState, useEffect } from 'react';
import {
  Product,
  LeatherType,
  CustomLeatherColor,
  CustomHardwareOption,
  LiningOption,
  MeasurementField,
  CartItem
} from '../types';
import {
  LEATHER_OPTIONS,
  COLOR_OPTIONS,
  HARDWARE_OPTIONS,
  LINING_OPTIONS,
  MEASUREMENT_FIELDS
} from '../data/customization';
import {
  Check,
  Ruler,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  MessageSquare,
  Scissors,
  CheckCircle2
} from 'lucide-react';

interface CustomizationStudioProps {
  products: Product[];
  initialProduct?: Product | null;
  onAddToCart: (item: CartItem) => void;
  onOpenConsultation?: () => void;
  isModalMode?: boolean;
  onCloseModal?: () => void;
}

export const CustomizationStudio: React.FC<CustomizationStudioProps> = ({
  products,
  initialProduct,
  onAddToCart,
  onOpenConsultation,
  isModalMode = false,
  onCloseModal
}) => {
  // Only jackets are customizable
  const jacketProducts = products.filter((p) => p.category === 'jackets');

  // Selected Jacket
  const [selectedProduct, setSelectedProduct] = useState<Product>(
    initialProduct && initialProduct.category === 'jackets'
      ? initialProduct
      : jacketProducts[0] || products[0]
  );

  useEffect(() => {
    if (initialProduct && initialProduct.category === 'jackets') {
      setSelectedProduct(initialProduct);
    } else if (jacketProducts.length > 0 && (!selectedProduct || selectedProduct.category !== 'jackets')) {
      setSelectedProduct(jacketProducts[0]);
    }
  }, [initialProduct, products]);

  // Options
  const leatherList = LEATHER_OPTIONS;
  const colorList = COLOR_OPTIONS;
  const hardwareList = HARDWARE_OPTIONS;
  const liningList = LINING_OPTIONS;
  const measurementFieldsList = MEASUREMENT_FIELDS;

  // Selections
  const [selectedLeather, setSelectedLeather] = useState<LeatherType>(leatherList[0]);
  const [selectedColor, setSelectedColor] = useState<CustomLeatherColor>(colorList[0]);
  const [selectedHardware, setSelectedHardware] = useState<CustomHardwareOption>(hardwareList[0]);
  const [selectedLining, setSelectedLining] = useState<LiningOption>(liningList[0]);
  const [sizingType, setSizingType] = useState<'bespoke_custom' | 'standard'>('bespoke_custom');
  const [selectedSize, setSelectedSize] = useState<string>('40');

  // Measurements in inches
  const [customMeasurements, setCustomMeasurements] = useState<Record<string, number>>({
    chest: 42,
    shoulders: 18.5,
    sleeve: 25.5,
    length: 26,
    waist: 36,
    bicep: 14.5
  });

  const [activeMeasureKey, setActiveMeasureKey] = useState<string>('chest');

  // Monogramming
  const [enableMonogram, setEnableMonogram] = useState(false);
  const [monogramText, setMonogramText] = useState('VRD');

  // Active step (1 to 5)
  const [activeStep, setActiveStep] = useState<number>(1);
  const [addedNotice, setAddedNotice] = useState(false);

  if (!selectedProduct) return null;

  // Cost calculations in USD
  const basePrice = selectedProduct.basePrice;
  const leatherDelta = selectedLeather ? selectedLeather.priceDelta : 0;
  const hardwareDelta = selectedHardware ? selectedHardware.priceDelta : 0;
  const liningDelta = selectedLining ? selectedLining.priceDelta : 0;
  const customFitFee = sizingType === 'bespoke_custom' ? 95 : 0;
  const monogramFee = enableMonogram && monogramText.trim().length > 0 ? 45 : 0;

  const totalCalculatedPrice =
    basePrice + leatherDelta + hardwareDelta + liningDelta + customFitFee + monogramFee;

  const handleMeasurementChange = (key: string, val: number) => {
    setCustomMeasurements((prev) => ({ ...prev, [key]: val }));
    setActiveMeasureKey(key);
  };

  const handleAddToCart = () => {
    const newItem: CartItem = {
      id: `jacket-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      productId: selectedProduct.id,
      productName: `${selectedProduct.name} (Custom Atelier)`,
      image: selectedProduct.image,
      quantity: 1,
      price: totalCalculatedPrice,
      color: selectedColor.name,
      hardware: selectedHardware.name,
      size: sizingType === 'standard' ? `US ${selectedSize}` : 'Bespoke Measurements',
      isCustomFit: sizingType === 'bespoke_custom',
      leatherType: selectedLeather.name,
      lining: selectedLining.name,
      monogram: enableMonogram && monogramText.trim().length > 0 ? monogramText.trim().toUpperCase() : undefined,
      measurements: sizingType === 'bespoke_custom' ? customMeasurements : undefined
    };

    onAddToCart(newItem);
    setAddedNotice(true);
    setTimeout(() => {
      setAddedNotice(false);
      if (isModalMode && onCloseModal) {
        onCloseModal();
      }
    }, 1200);
  };

  const steps = [
    { id: 1, label: '1. Style' },
    { id: 2, label: '2. Leather' },
    { id: 3, label: '3. Color & Metal' },
    { id: 4, label: '4. Fit & Sizing' },
    { id: 5, label: '5. Monogram' }
  ];

  return (
    <section
      id="custom-fit"
      className={`w-full bg-pebble-leather film-grain text-[#F5EFEB] relative overflow-hidden ${
        isModalMode ? 'py-6' : 'py-24 sm:py-32 border-b border-[#C5A880]/20'
      }`}
    >
      {/* Cinematic subtle warm light falloff */}
      <div className="absolute top-10 right-1/4 w-[600px] h-[400px] bg-[#C5A880]/12 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[350px] bg-[#8C6D46]/18 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        {!isModalMode && (
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="flex items-center gap-2.5 text-xs tracking-[0.25em] uppercase text-[#C5A880] font-semibold mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C5A880] shadow-sm shadow-[#C5A880]/80" />
              <span className="text-metallic-brass font-bold">INTERACTIVE ATELIER STUDIO</span>
              <span aria-hidden="true" className="text-[#C5A880]/60">·</span>
              <span>Made-to-Order</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#F5EFEB] leading-[1.08] mb-4 [text-wrap:balance]">
              Design Your Custom Jacket
            </h2>

            <p className="text-base sm:text-lg text-[#D4C4B4] font-light leading-relaxed">
              Follow five deliberate steps below to shape your jacket around you: pick your silhouette, select your leather grade, choose finishes, enter your exact fit, and deboss your personal monogram.
            </p>
          </div>
        )}

        {/* Studio Workspace Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Live Jacket Preview & Transparent Price Breakdown (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="relative aspect-[4/3] bg-[#1F2021] border border-[#D4C4B4]/20 overflow-hidden shadow-2xl">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover object-center transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Ambient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#171819]/80 via-transparent to-transparent pointer-events-none" />

              {/* Live Preview Specification Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#171819]/95 backdrop-blur-md border border-[#D4C4B4]/25 p-4 text-xs shadow-xl">
                <div className="flex items-center justify-between text-[#F2EEE8] font-serif text-base mb-1">
                  <span>{selectedProduct.name}</span>
                  <span className="font-mono text-[10px] bg-[#292827] text-[#A88770] px-2.5 py-0.5 border border-[#D4C4B4]/20 tracking-wider">
                    {sizingType === 'bespoke_custom' ? 'CUSTOM FIT' : `SIZE US ${selectedSize}`}
                  </span>
                </div>
                <div className="text-[#D4C4B4]/80 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] pt-1">
                  <span className="flex items-center gap-1.5 font-medium text-[#F2EEE8]">
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-white/20 inline-block shrink-0"
                      style={{ backgroundColor: selectedColor.hex }}
                    />
                    <span>{selectedColor.name}</span>
                  </span>
                  <span>·</span>
                  <span>{selectedLeather.name.split(' ')[0]}</span>
                  <span>·</span>
                  <span>{selectedHardware.name}</span>
                  {enableMonogram && monogramText && (
                    <>
                      <span>·</span>
                      <span className="text-[#A88770] font-mono">[{monogramText}]</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Price & Summary Box */}
            <div className="bg-[#292827] border border-[#D4C4B4]/20 p-6 space-y-5 shadow-xl text-[#F2EEE8]">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#A88770] block font-medium">
                    Total Atelier Price
                  </span>
                  <span className="font-serif text-3xl sm:text-4xl font-normal text-[#F2EEE8] tracking-tight">
                    ${totalCalculatedPrice} <span className="text-sm font-sans font-light text-[#D4C4B4]/70">USD</span>
                  </span>
                </div>
                <div className="text-right text-xs">
                  <span className="text-[#D4C4B4]/70 block text-[11px]">Craft Bench Time:</span>
                  <span className="text-[#A88770] font-mono font-medium">12–14 days</span>
                </div>
              </div>

              {/* Transparent Cost Breakdown */}
              <div className="pt-3 border-t border-[#D4C4B4]/15 space-y-2 text-xs text-[#D4C4B4]/90">
                <div className="flex justify-between">
                  <span className="font-light">Base Silhouette ({selectedProduct.name})</span>
                  <span className="font-mono text-[#F2EEE8]">${selectedProduct.basePrice}</span>
                </div>

                {leatherDelta > 0 && (
                  <div className="flex justify-between text-[#A88770]">
                    <span className="font-light">Leather Selection ({selectedLeather.name})</span>
                    <span className="font-mono">+${leatherDelta}</span>
                  </div>
                )}

                {hardwareDelta > 0 && (
                  <div className="flex justify-between text-[#A88770]">
                    <span className="font-light">Hardware Detail ({selectedHardware.name})</span>
                    <span className="font-mono">+${hardwareDelta}</span>
                  </div>
                )}

                {liningDelta > 0 && (
                  <div className="flex justify-between text-[#A88770]">
                    <span className="font-light">Interior Lining ({selectedLining.name})</span>
                    <span className="font-mono">+${liningDelta}</span>
                  </div>
                )}

                {sizingType === 'bespoke_custom' && (
                  <div className="flex justify-between text-[#A88770]">
                    <span className="font-light">Bespoke Pattern Draughting</span>
                    <span className="font-mono">+${customFitFee}</span>
                  </div>
                )}

                {enableMonogram && monogramText.trim().length > 0 && (
                  <div className="flex justify-between text-[#A88770]">
                    <span className="font-light">Blind Deboss Monogram ("{monogramText.toUpperCase()}")</span>
                    <span className="font-mono">+${monogramFee}</span>
                  </div>
                )}
              </div>

              {/* Guarantee */}
              <div className="flex items-center gap-2 text-[11px] text-[#A88770] pt-1">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Complimentary insured courier delivery & 30-day fit guarantee.</span>
              </div>

              {/* Primary CTA Button */}
              <button
                onClick={handleAddToCart}
                disabled={addedNotice}
                className="btn-ivory-on-dark w-full py-4 text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg"
              >
                {addedNotice ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-[#171819]" />
                    <span>Commission Added to Bag</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-[#A88770]" />
                    <span>Add Custom Jacket to Bag</span>
                    <ArrowRight className="w-4 h-4 text-[#171819]" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: 5 Simple & Clear Steps Configurator (7 cols) */}
          <div className="lg:col-span-7 bg-[#292827] border border-[#D4C4B4]/20 p-6 sm:p-8 space-y-8 shadow-2xl">
            {/* Step Tabs */}
            <div className="flex items-center justify-between border-b border-[#D4C4B4]/20 pb-4 overflow-x-auto text-xs tracking-wider uppercase gap-2">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`pb-2 whitespace-nowrap px-3 transition-colors border-b-2 -mb-4 font-sans font-medium cursor-pointer ${
                    activeStep === step.id
                      ? 'border-[#A88770] text-[#F2EEE8] font-semibold'
                      : 'border-transparent text-[#D4C4B4]/60 hover:text-[#F2EEE8]'
                  }`}
                >
                  {step.label}
                </button>
              ))}
            </div>

            {/* STEP 1: Jacket Style */}
            {activeStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F2EEE8] mb-1">
                    Step 1: Choose Your Jacket Style
                  </h3>
                  <p className="text-xs text-[#D4C4B4]/80 font-light">
                    Select which silhouette you would like our atelier to build for you.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {jacketProducts.map((p) => {
                    const isSelected = selectedProduct.id === p.id;
                    return (
                      <div
                        key={p.id}
                        onClick={() => setSelectedProduct(p)}
                        className={`p-5 border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#A88770] bg-[#171819] shadow-lg ring-1 ring-[#A88770]'
                            : 'border-[#D4C4B4]/20 bg-[#1F2021] hover:border-[#A88770]/60'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-serif text-lg text-[#F2EEE8]">{p.name}</span>
                          {isSelected && <Check className="w-4 h-4 text-[#A88770]" />}
                        </div>
                        <p className="text-xs text-[#D4C4B4]/75 line-clamp-2 mb-3 leading-relaxed font-light">
                          {p.tagline}
                        </p>
                        <div className="flex items-center justify-between text-xs font-mono text-[#A88770] pt-2 border-t border-[#D4C4B4]/15">
                          <span className="uppercase text-[10px]">Base Price</span>
                          <span className="font-semibold">${p.basePrice} USD</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    onClick={() => setActiveStep(2)}
                    className="btn-ivory-on-dark px-7 py-3 text-xs uppercase tracking-wider font-semibold flex items-center gap-2 cursor-pointer"
                  >
                    <span>Next: Choose Leather</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Leather Type with Plain-English Explanations */}
            {activeStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F2EEE8] mb-1">
                    Step 2: Choose Your Leather
                  </h3>
                  <p className="text-xs text-[#D4C4B4]/80 font-light">
                    Every option is genuine full-grain leather. Choose how firm, soft, or textured you want your jacket to feel.
                  </p>
                </div>

                <div className="space-y-3">
                  {leatherList.map((leather) => {
                    const isSelected = selectedLeather.id === leather.id;
                    return (
                      <div
                        key={leather.id}
                        onClick={() => setSelectedLeather(leather)}
                        className={`p-4 border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer ${
                          isSelected
                            ? 'border-[#A88770] bg-[#171819] shadow-lg ring-1 ring-[#A88770]'
                            : 'border-[#D4C4B4]/20 bg-[#1F2021] hover:border-[#A88770]/60'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className="w-12 h-12 border border-white/20 shrink-0 mt-0.5 shadow-inner"
                            style={{ backgroundColor: leather.swatchColor }}
                          />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-serif text-base text-[#F2EEE8]">{leather.name}</span>
                              {isSelected && <Check className="w-4 h-4 text-[#A88770]" />}
                            </div>
                            <p className="text-xs text-[#D4C4B4]/85 font-light mt-1 leading-relaxed">
                              {leather.description}
                            </p>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="font-mono text-xs font-medium text-[#A88770]">
                            {leather.priceDelta > 0 ? `+$${leather.priceDelta}` : 'Included'}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => setActiveStep(1)}
                    className="btn-outline-on-dark px-6 py-3 text-xs uppercase tracking-wider font-semibold cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setActiveStep(3)}
                    className="btn-ivory-on-dark px-7 py-3 text-xs uppercase tracking-wider font-semibold flex items-center gap-2 cursor-pointer"
                  >
                    <span>Next: Color & Hardware</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Color, Hardware & Lining */}
            {activeStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F2EEE8] mb-1">
                    Step 3: Color, Hardware & Lining
                  </h3>
                  <p className="text-xs text-[#D4C4B4]/80 font-light">
                    Pick your leather color shade, metallic zipper finish, and interior lining.
                  </p>
                </div>

                {/* Leather Color */}
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#A88770] font-semibold block mb-3">
                    Selected Leather Color: <strong className="text-[#F2EEE8] font-normal">{selectedColor.name}</strong>
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {colorList.map((c) => {
                      const isSelected = selectedColor.id === c.id;
                      return (
                        <button
                          key={c.id}
                          onClick={() => setSelectedColor(c)}
                          className={`p-3 border flex flex-col items-center gap-2 transition-all cursor-pointer ${
                            isSelected
                              ? 'border-[#A88770] bg-[#171819] shadow-lg ring-1 ring-[#A88770]'
                              : 'border-[#D4C4B4]/20 bg-[#1F2021] hover:border-[#A88770]/60'
                          }`}
                        >
                          <div
                            className="w-8 h-8 rounded-full border border-white/20 shadow-inner"
                            style={{ backgroundColor: c.hex }}
                          />
                          <span className="text-[11px] text-[#F2EEE8] text-center leading-tight">
                            {c.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Hardware */}
                <div className="pt-4 border-t border-[#D4C4B4]/20">
                  <span className="text-xs uppercase tracking-wider text-[#A88770] font-semibold block mb-3">
                    Metal Zippers & Snaps Finish
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {hardwareList.map((h) => {
                      const isSelected = selectedHardware.id === h.id;
                      return (
                        <div
                          key={h.id}
                          onClick={() => setSelectedHardware(h)}
                          className={`p-3.5 border cursor-pointer transition-all ${
                            isSelected
                              ? 'border-[#A88770] bg-[#171819] shadow-lg ring-1 ring-[#A88770]'
                              : 'border-[#D4C4B4]/20 bg-[#1F2021] hover:border-[#A88770]/60'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-serif text-sm text-[#F2EEE8]">{h.name}</span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-[#A88770]" />}
                          </div>
                          <p className="text-[11px] text-[#D4C4B4]/80 mb-2 font-light leading-relaxed">
                            {h.description}
                          </p>
                          <span className="font-mono text-xs text-[#A88770]">
                            {h.priceDelta > 0 ? `+$${h.priceDelta}` : 'Included'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Lining */}
                <div className="pt-4 border-t border-[#D4C4B4]/20">
                  <span className="text-xs uppercase tracking-wider text-[#A88770] font-semibold block mb-3">
                    Interior Lining Fabric
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {liningList.map((l) => {
                      const isSelected = selectedLining.id === l.id;
                      return (
                        <div
                          key={l.id}
                          onClick={() => setSelectedLining(l)}
                          className={`p-3.5 border cursor-pointer transition-all ${
                            isSelected
                              ? 'border-[#A88770] bg-[#171819] shadow-lg ring-1 ring-[#A88770]'
                              : 'border-[#D4C4B4]/20 bg-[#1F2021] hover:border-[#A88770]/60'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-serif text-sm text-[#F2EEE8]">{l.name}</span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-[#A88770]" />}
                          </div>
                          <p className="text-[11px] text-[#D4C4B4]/80 mb-2 font-light leading-relaxed">
                            {l.description}
                          </p>
                          <span className="font-mono text-xs text-[#A88770]">
                            {l.priceDelta > 0 ? `+$${l.priceDelta}` : 'Included'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => setActiveStep(2)}
                    className="btn-outline-on-dark px-6 py-3 text-xs uppercase tracking-wider font-semibold cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setActiveStep(4)}
                    className="btn-ivory-on-dark px-7 py-3 text-xs uppercase tracking-wider font-semibold flex items-center gap-2 cursor-pointer"
                  >
                    <span>Next: Fit & Sizing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Fit & Measurements */}
            {activeStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F2EEE8] mb-1">
                    Step 4: Choose Your Fit
                  </h3>
                  <p className="text-xs text-[#D4C4B4]/80 font-light">
                    Choose bespoke custom tailoring (made to your exact body measurements) or pick a standard size.
                  </p>
                </div>

                {/* Sizing Mode Switcher */}
                <div className="grid grid-cols-2 gap-3 p-1.5 bg-[#1F2021] border border-[#D4C4B4]/20">
                  <button
                    onClick={() => setSizingType('bespoke_custom')}
                    className={`py-3 text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                      sizingType === 'bespoke_custom'
                        ? 'bg-[#171819] text-[#F2EEE8] border border-[#A88770]'
                        : 'text-[#D4C4B4]/70 hover:text-[#F2EEE8]'
                    }`}
                  >
                    Custom Fit (Tailored to You +$95)
                  </button>

                  <button
                    onClick={() => setSizingType('standard')}
                    className={`py-3 text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                      sizingType === 'standard'
                        ? 'bg-[#171819] text-[#F2EEE8] border border-[#A88770]'
                        : 'text-[#D4C4B4]/70 hover:text-[#F2EEE8]'
                    }`}
                  >
                    Standard Sizing (US 36–46)
                  </button>
                </div>

                {sizingType === 'bespoke_custom' ? (
                  <div className="space-y-6">
                    <div className="p-4 bg-[#1F2021] border border-[#A88770]/40 text-xs text-[#F2EEE8] flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Ruler className="w-4 h-4 shrink-0 text-[#A88770]" />
                        <span className="font-light">
                          All measurements are in <strong>inches</strong>. Our master tailor adds comfortable ease for natural body movement and layering.
                        </span>
                      </div>
                      <span className="font-mono uppercase text-[10px] bg-[#171819] text-[#A88770] px-2.5 py-1 border border-[#D4C4B4]/20">
                        {activeMeasureKey.toUpperCase()}
                      </span>
                    </div>

                    {/* Interactive Measurement Sliders with Easy Instructions */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {measurementFieldsList.map((f) => {
                        const isFieldActive = activeMeasureKey === f.fieldKey;

                        return (
                          <div
                            key={f.id}
                            onClick={() => setActiveMeasureKey(f.fieldKey)}
                            className={`p-4 border transition-all cursor-pointer ${
                              isFieldActive
                                ? 'border-[#A88770] bg-[#171819] shadow-md ring-1 ring-[#A88770]'
                                : 'border-[#D4C4B4]/20 bg-[#1F2021] hover:border-[#A88770]/60'
                            }`}
                          >
                            <div className="flex justify-between items-center text-xs mb-2">
                              <span className="font-serif text-sm text-[#F2EEE8]">{f.label}</span>
                              <span className="font-mono text-sm font-semibold text-[#A88770] bg-[#1F2021] px-2.5 py-0.5 border border-[#D4C4B4]/20">
                                {customMeasurements[f.fieldKey] || f.minVal}"
                              </span>
                            </div>
                            <input
                              type="range"
                              min={f.minVal}
                              max={f.maxVal}
                              step={0.5}
                              value={customMeasurements[f.fieldKey] || f.minVal}
                              onChange={(e) =>
                                handleMeasurementChange(f.fieldKey, parseFloat(e.target.value))
                              }
                              className="w-full accent-[#A88770] cursor-pointer"
                            />
                            <p className="text-[11px] text-[#D4C4B4]/80 mt-1.5 leading-snug font-light">
                              {f.instructions}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    {/* Assistance Note */}
                    <div className="p-3.5 bg-[#1F2021] border border-[#D4C4B4]/20 text-xs text-[#D4C4B4]/90 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-[#A88770] shrink-0" />
                        <span className="font-light">
                          Uncertain about your numbers? Book a virtual measurement consult with our atelier.
                        </span>
                      </div>
                      {onOpenConsultation && (
                        <button
                          onClick={onOpenConsultation}
                          className="text-[#A88770] underline underline-offset-4 text-xs shrink-0 cursor-pointer hover:text-[#F2EEE8]"
                        >
                          Book Consult
                        </button>
                      )}
                    </div>
                  </div>
                ) : (
                  /* Standard Size Mode */
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {['36', '38', '40', '42', '44', '46'].map((sz) => (
                        <button
                          key={sz}
                          onClick={() => setSelectedSize(sz)}
                          className={`py-3.5 border font-mono text-sm font-medium transition-all cursor-pointer ${
                            selectedSize === sz
                              ? 'border-[#A88770] bg-[#171819] text-[#F2EEE8] ring-1 ring-[#A88770]'
                              : 'border-[#D4C4B4]/20 bg-[#1F2021] text-[#D4C4B4]/70 hover:border-[#A88770]/60'
                          }`}
                        >
                          US {sz}
                        </button>
                      ))}
                    </div>

                    <div className="p-4 bg-[#1F2021] border border-[#D4C4B4]/20 text-xs">
                      <span className="font-serif text-[#A88770] block mb-2 text-sm font-medium">
                        Standard Sizing Guide for Size US {selectedSize}:
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-[#D4C4B4]/90">
                        <div>Chest: {selectedSize === '38' ? '38"' : selectedSize === '40' ? '40"' : selectedSize === '42' ? '42"' : selectedSize === '44' ? '44"' : selectedSize === '46' ? '46"' : '36"'}</div>
                        <div>Shoulders: {selectedSize === '38' ? '17.8"' : selectedSize === '40' ? '18.4"' : selectedSize === '42' ? '19.0"' : selectedSize === '44' ? '19.6"' : selectedSize === '46' ? '20.2"' : '17.2"'}</div>
                        <div>Sleeve: {selectedSize === '38' ? '25.0"' : selectedSize === '40' ? '25.5"' : selectedSize === '42' ? '26.0"' : selectedSize === '44' ? '26.5"' : selectedSize === '46' ? '27.0"' : '24.5"'}</div>
                        <div>Back Length: {selectedSize === '38' ? '25.5"' : selectedSize === '40' ? '26.0"' : selectedSize === '42' ? '26.5"' : selectedSize === '44' ? '27.0"' : selectedSize === '46' ? '27.5"' : '25.0"'}</div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => setActiveStep(3)}
                    className="btn-outline-on-dark px-6 py-3 text-xs uppercase tracking-wider font-semibold cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setActiveStep(5)}
                    className="btn-ivory-on-dark px-7 py-3 text-xs uppercase tracking-wider font-semibold flex items-center gap-2 cursor-pointer"
                  >
                    <span>Next: Add Monogram</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 5: Monogram (Clear & Optional) */}
            {activeStep === 5 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F2EEE8] mb-1">
                    Step 5: Add Your Monogram (Optional)
                  </h3>
                  <p className="text-xs text-[#D4C4B4]/80 font-light">
                    Have your personal initials debossed cleanly into the interior leather facing of your jacket.
                  </p>
                </div>

                <div className="bg-[#1F2021] border border-[#D4C4B4]/20 p-6 space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={enableMonogram}
                      onChange={(e) => setEnableMonogram(e.target.checked)}
                      className="w-4 h-4 accent-[#A88770] cursor-pointer"
                    />
                    <span className="text-sm font-serif text-[#F2EEE8]">
                      Add Blind Debossed Monogram (+$45 USD)
                    </span>
                  </label>

                  {enableMonogram && (
                    <div className="space-y-4 pt-4 border-t border-[#D4C4B4]/15">
                      <div>
                        <label className="text-xs uppercase tracking-wider text-[#A88770] font-medium block mb-1">
                          Your Initials (Up to 4 Letters)
                        </label>
                        <input
                          type="text"
                          maxLength={4}
                          value={monogramText}
                          onChange={(e) => setMonogramText(e.target.value.toUpperCase())}
                          placeholder="e.g. VRD"
                          className="w-full bg-[#171819] border border-[#D4C4B4]/30 px-4 py-3 font-serif text-xl text-[#F2EEE8] uppercase tracking-[0.25em] focus:outline-none focus:border-[#A88770]"
                        />
                      </div>

                      {/* Mockup Preview */}
                      <div className="p-6 bg-[#171819] border border-[#D4C4B4]/20 flex flex-col items-center justify-center">
                        <span className="text-[10px] uppercase tracking-widest text-[#A88770] font-medium mb-2">
                          Interior Leather Blind Deboss Preview
                        </span>
                        <div className="px-8 py-4 bg-[#292827] border border-[#A88770]/60 font-serif text-2xl tracking-[0.35em] text-[#F2EEE8] shadow-inner">
                          {monogramText.trim() || 'VERIDOR'}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => setActiveStep(4)}
                    className="btn-outline-on-dark px-6 py-3 text-xs uppercase tracking-wider font-semibold cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleAddToCart}
                    disabled={addedNotice}
                    className="btn-ivory-on-dark px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    {addedNotice ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-[#171819]" />
                        <span>Added to Shopping Bag</span>
                      </>
                    ) : (
                      <>
                        <span>Add Custom Jacket to Bag</span>
                        <ArrowRight className="w-4 h-4 text-[#171819]" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
