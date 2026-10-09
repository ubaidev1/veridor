import React, { useState } from 'react';
import { ArrowRight, Compass, Sparkles, Shield, Flame } from 'lucide-react';

interface HeroProps {
  onExploreCollection: () => void;
  onDiscoverVeridor: () => void;
  onOpenCustomStudio?: () => void;
  onCreateJacket?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCollection,
  onDiscoverVeridor,
  onOpenCustomStudio,
  onCreateJacket
}) => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const hotspots = [
    {
      id: 1,
      x: '24%',
      y: '26%',
      title: 'Diamond-Quilted Shoulder Gusset',
      desc: 'Reinforced dual-needle accordion pleats built into the shoulder line for unrestricted arm reach on the road.'
    },
    {
      id: 2,
      x: '41%',
      y: '28%',
      title: 'Double-Snap Notched Lapel',
      desc: 'Firm-temper hide collar fitted with solid aged brass snaps that stay locked against high-speed wind buffeting.'
    },
    {
      id: 3,
      x: '55%',
      y: '42%',
      title: 'Heavy-Duty Brass Zippers',
      desc: 'Smooth, sturdy solid metal teeth with antique patina that will never jam, break, or corrode under stress.'
    },
    {
      id: 4,
      x: '42%',
      y: '54%',
      title: '100% Genuine Full-Grain Leather',
      desc: 'Uncorrected drum-dyed natural steerhide that softens and molds permanently to your body shape.'
    },
    {
      id: 5,
      x: '62%',
      y: '74%',
      title: 'Forged Brass Roller Buckle',
      desc: 'Heavy-gauge cast brass belt hardware anchored with bar-tack stitching to dial in your tailored waist fit.'
    }
  ];

  const handleCustomAction = () => {
    if (onOpenCustomStudio) {
      onOpenCustomStudio();
    } else if (onCreateJacket) {
      onCreateJacket();
    } else {
      document.getElementById('custom-fit')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden section-black-leather text-[#F5EFEB] border-b border-[#C5A880]/25 pt-28 sm:pt-32 lg:pt-36"
    >
      {/* Seductive, Intimidating Ambient Lighting (Warm Cognac, Molten Amber & Smoked Espresso) */}
      <div className="absolute top-10 left-1/5 w-[750px] h-[450px] bg-[#C5A880]/15 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[650px] h-[450px] bg-[#8C5635]/25 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-10 left-1/3 w-[500px] h-[300px] bg-[#421B21]/20 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Split Layout */}
      <div className="max-w-[1440px] mx-auto min-h-[calc(100vh-8.5rem)] flex flex-col lg:flex-row items-stretch relative z-10 px-6 sm:px-12 lg:px-16 pb-12 lg:pb-16 gap-10 lg:gap-14">
        
        {/* Left Column: Headline, Clear Copy & Leather Buttons */}
        <div className="flex-1 flex flex-col justify-center py-6 sm:py-10 lg:py-16 z-10">
          <div className="max-w-xl">
            {/* Eyebrow / Kicker */}
            <div className="flex items-center gap-3 text-xs tracking-[0.28em] uppercase text-[#C5A880] font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C5A880] shadow-md shadow-[#C5A880]/80 animate-pulse" />
              <span className="text-metallic-brass tracking-[0.3em]">VERIDOR</span>
              <span aria-hidden="true" className="text-[#C5A880]/60">·</span>
              <span className="text-[#E0C8A4] font-medium tracking-[0.25em]">LEATHER, REDEFINED.</span>
            </div>

            {/* Cinematic Serif Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#FAF6F0] font-normal leading-[1.08] tracking-tight mb-7 drop-shadow-2xl [text-wrap:balance]">
              Made for the way you wear it.
            </h1>

            {/* Evocative Description */}
            <p className="text-base sm:text-lg text-[#EDE5DA]/90 font-light leading-relaxed mb-10 max-w-lg">
              Statement-making jackets. Thoughtfully chosen materials. Timeless style that feels like your own.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <button
                onClick={onExploreCollection}
                className="btn-ivory-on-dark group px-8 py-4.5 rounded-none text-xs tracking-[0.22em] uppercase font-semibold flex items-center justify-center gap-3 cursor-pointer shadow-2xl whitespace-nowrap"
              >
                <span>Explore the Collection</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5 text-[#0D0E0F]" />
              </button>

              <button
                onClick={onDiscoverVeridor}
                className="btn-outline-on-dark px-8 py-4.5 rounded-none text-xs tracking-[0.18em] uppercase font-semibold flex items-center justify-center cursor-pointer whitespace-nowrap hover:border-[#C5A880]"
              >
                <span>Discover Veridor</span>
              </button>
            </div>

            {/* Quick Seductive Highlight Badges */}
            <div className="pt-8 border-t border-[#C5A880]/20 grid grid-cols-3 gap-4 text-left">
              <div>
                <span className="block font-serif text-lg sm:text-xl text-[#FAF6F0] font-normal">100%</span>
                <span className="text-[11px] uppercase tracking-wider text-[#C5A880] font-mono">Full-Grain Hides</span>
              </div>
              <div>
                <span className="block font-serif text-lg sm:text-xl text-[#FAF6F0] font-normal">Zero</span>
                <span className="text-[11px] uppercase tracking-wider text-[#C5A880] font-mono">Middleman Markup</span>
              </div>
              <div>
                <span className="block font-serif text-lg sm:text-xl text-[#FAF6F0] font-normal">Bespoke</span>
                <span className="text-[11px] uppercase tracking-wider text-[#C5A880] font-mono">Made-to-Measure</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Seductive, Intimidating Leather Jacket Campaign Photography with Interactive Inspection Pins */}
        <div className="flex-1 relative min-h-[460px] sm:min-h-[540px] lg:min-h-full bg-[#141518] overflow-hidden border border-[#C5A880]/30 shadow-2xl flex items-center justify-center group">
          {/* Seductive Leather Jacket Photography */}
          <img
            src="/src/assets/images/cinematic_leather_jacket_1791572849759.jpg"
            alt="Intimidating ultra-premium handcrafted black and dark espresso leather biker jacket on tailor atelier stand"
            className="w-full h-full object-cover object-center lg:absolute lg:inset-0 transition-transform duration-1000 group-hover:scale-102"
            referrerPolicy="no-referrer"
          />

          {/* Seductive Warm Cognac & Obsidian Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111215] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#111215]/80 lg:via-transparent lg:to-[#111215]/20 pointer-events-none" />

          {/* Warm Amber Rim Lighting Flare */}
          <div className="absolute top-1/4 right-0 w-48 h-48 bg-[#C5A880]/20 rounded-full blur-[80px] pointer-events-none" />

          {/* Interactive Inspection Hotspots */}
          {hotspots.map((spot) => (
            <div
              key={spot.id}
              style={{ top: spot.y, left: spot.x }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <button
                onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                aria-label={spot.title}
                className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#C5A880] text-[#0D0E0F] flex items-center justify-center shadow-2xl shadow-black border-2 border-[#FAF6F0] transition-transform hover:scale-125 focus:outline-none cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-[#0D0E0F]" />
                <span className="absolute inset-0 rounded-full bg-[#C5A880] animate-ping opacity-60 pointer-events-none" />
              </button>

              {/* Tooltip Card */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 bottom-10 w-64 sm:w-72 p-4 bg-[#141518]/95 backdrop-blur-md border border-[#C5A880] shadow-2xl rounded-none text-left transition-all duration-300 pointer-events-none z-30 ${
                  activeHotspot === spot.id
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 scale-95 translate-y-2'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-[#C5A880] uppercase font-semibold tracking-wider mb-1">
                  <span>Inspection Pin 0{spot.id}</span>
                  <span className="text-[9px] text-[#FAF6F0]/70">Atelier Detail</span>
                </div>
                <div className="font-serif text-sm font-normal text-[#FAF6F0] mb-1.5">
                  {spot.title}
                </div>
                <div className="text-[11px] text-[#D4C4B4] font-light leading-snug">
                  {spot.desc}
                </div>
              </div>
            </div>
          ))}

          {/* Seductive Floating Tag: Interactive Prompt */}
          <div className="absolute bottom-5 left-5 bg-[#0D0E0F]/90 backdrop-blur-md border border-[#C5A880]/30 px-3.5 py-2 text-xs text-[#FAF6F0] flex items-center gap-2 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
            <span className="font-mono text-[10px] sm:text-[11px] text-[#C5A880] uppercase tracking-wider">
              Touch pins to inspect handcrafted details
            </span>
          </div>

          {/* Featured Leather Mark */}
          <div className="absolute top-5 right-5 bg-[#0D0E0F]/90 backdrop-blur-md border border-[#C5A880]/30 px-3.5 py-2 text-left shadow-xl hidden sm:block">
            <p className="text-[9px] font-mono uppercase tracking-widest text-[#C5A880] font-semibold mb-0.5">
              Silhouette Highlight
            </p>
            <p className="font-serif text-xs text-[#FAF6F0]">
              The Sovereign Biker · 1.4mm Heavy Steerhide
            </p>
          </div>
        </div>
      </div>

      {/* Trust Strip: 4 Clear Atelier Pillars */}
      <div className="border-t border-[#C5A880]/20 bg-black/35 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-7 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-[#D4C4B4]">
          <div className="flex flex-col gap-1 border-l-2 border-[#C5A880] pl-4">
            <span className="font-serif text-[#FAF6F0] text-base font-normal">100% Genuine Leather</span>
            <span className="text-[#D4C4B4]/80 font-light">Uncorrected natural full-grain hides; never synthetic pleather.</span>
          </div>

          <div className="flex flex-col gap-1 border-l-2 border-[#C5A880] pl-4">
            <span className="font-serif text-[#FAF6F0] text-base font-normal">Tailored to Fit You</span>
            <span className="text-[#D4C4B4]/80 font-light">Crafted to your exact measurements for an individualized contour.</span>
          </div>

          <div className="flex flex-col gap-1 border-l-2 border-[#C5A880] pl-4">
            <span className="font-serif text-[#FAF6F0] text-base font-normal">Honest Workshop Pricing</span>
            <span className="text-[#D4C4B4]/80 font-light">Direct atelier pricing without luxury conglomerate markups.</span>
          </div>

          <div className="flex flex-col gap-1 border-l-2 border-[#C5A880] pl-4">
            <span className="font-serif text-[#FAF6F0] text-base font-normal">Insured White-Glove Shipping</span>
            <span className="text-[#D4C4B4]/80 font-light">Worldwide insured courier delivery with perfect-fit guarantee.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
