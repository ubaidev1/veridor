import React from 'react';

export const HonestPricingSection: React.FC = () => {
  const allocation = [
    {
      label: 'Material Integrity',
      detail: 'Dense, full-grain hides selected for texture and longevity, tanned for natural patina.'
    },
    {
      label: 'Atelier Bench Time',
      detail: 'Precision pattern cutting, panel matching, and hand-guided needlework.'
    },
    {
      label: 'Enduring Hardware',
      detail: 'Solid antiqued brass pulls, reinforced teeth, and heavyweight snaps.'
    },
    {
      label: 'Direct Delivery',
      detail: 'Shipped directly from craft bench to your door without distributor layers.'
    }
  ];

  return (
    <section
      id="pricing"
      className="relative section-brown-leather text-[#F5EFEB] py-24 sm:py-32 border-b border-[#C5A880]/25 overflow-hidden"
    >
      {/* Subtle radial ambient spotlight */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[400px] bg-[#C5A880]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Editorial Top Headline */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-metallic-brass block mb-3">
            CLEAR VALUE · ATELIER Nº 03
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F5EFEB] leading-[1.08] mb-6 [text-wrap:balance]">
            Less unnecessary markup. More thought in every detail.
          </h2>
          <p className="text-base sm:text-lg text-[#D4C4B4] font-light leading-relaxed">
            We believe choosing a leather piece should feel considered, not
            complicated. Our approach is to offer personal customization and
            thoughtful design with clear, honest pricing.
          </p>
        </div>

        {/* Visual Emphasis Banner */}
        <div className="bg-[#141517]/90 text-[#F5EFEB] p-8 sm:p-10 border border-[#C5A880]/30 mb-16 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#C5A880] mb-2 font-medium">
                The Veridor Standard
              </p>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#F5EFEB]">
                Your choices. Clear pricing. No unnecessary surprises.
              </h3>
            </div>
            <div className="shrink-0 text-xs text-[#D4C4B4] font-mono tracking-wider border-l border-[#C5A880]/50 pl-4 py-1">
              <span>ZERO SURCHARGE ON STANDARD SIZES</span>
              <br />
              <span className="text-[#C5A880] font-bold">CUSTOM FIT FROM +$95</span>
            </div>
          </div>
        </div>

        {/* Grounded 4-Column Transparency Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {allocation.map((col, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#141517]/90 border border-[#C5A880]/20 hover:border-[#C5A880]/60 transition-all shadow-xl backdrop-blur-sm"
            >
              <span className="text-xs font-mono text-[#C5A880] tracking-wider block mb-2 font-bold">
                0{idx + 1}
              </span>
              <h4 className="text-lg font-serif text-[#F5EFEB] mb-2 font-normal">
                {col.label}
              </h4>
              <p className="text-xs text-[#D4C4B4]/80 font-light leading-relaxed">
                {col.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
