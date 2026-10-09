import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface CraftsmanshipSectionProps {
  onOpenCraftModal: () => void;
}

export const CraftsmanshipSection: React.FC<CraftsmanshipSectionProps> = ({
  onOpenCraftModal
}) => {
  const points = [
    {
      title: 'Materials chosen with care',
      description: 'Hides selected for natural grain structure, supple resilience, and honest patina development.'
    },
    {
      title: 'Details worth looking closer at',
      description: 'Heavy gauge topstitching, hand-burnished raw edges, and robust antique metal closures.'
    },
    {
      title: 'Personal choices that make it yours',
      description: 'Custom hardware finishes, specialized lining selections, and personalized body proportions.'
    }
  ];

  return (
    <section
      id="craftsmanship"
      className="relative section-warm-light text-[#141518] py-24 sm:py-32 border-b border-[#D4C4B4]/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column 1: Editorial Text Layout */}
          <div className="lg:col-span-6 space-y-8 pr-0 lg:pr-6">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#8C5635] block mb-3">
                LOOK CLOSER · ATELIER Nº 02
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#141518] leading-[1.08] mb-5 [text-wrap:balance]">
                Character lives in the details.
              </h2>
              <p className="text-base sm:text-lg text-[#4A4642] font-light leading-relaxed">
                The feel of the leather. The precision of a seam. The weight of
                a zipper. The details shape the experience of every piece.
              </p>
            </div>

            {/* Three Concise Content Points */}
            <div className="space-y-4 pt-4 border-t border-[#D4C4B4]/40">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-white/95 border border-[#D4C4B4]/60 shadow-md">
                  <div className="w-5 h-5 rounded-none bg-[#141518] border border-[#8C5635] flex items-center justify-center shrink-0 mt-0.5 text-[#F5EFEB]">
                    <Check className="w-3 h-3 text-[#C5A880]" />
                  </div>
                  <div>
                    <h3 className="text-base font-serif text-[#141518] mb-1">
                      {pt.title}
                    </h3>
                    <p className="text-xs text-[#5A544E] font-light leading-relaxed">
                      {pt.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={onOpenCraftModal}
                className="btn-charcoal-on-light px-8 py-4 rounded-none text-xs tracking-[0.2em] uppercase font-semibold inline-flex items-center gap-2 cursor-pointer shadow-xl"
              >
                <span>Explore Leather & Craft</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F5EFEB]" />
              </button>
            </div>
          </div>

          {/* Column 2: Macro Hardware & Leather Photography */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden border border-[#D4C4B4]/60 shadow-2xl bg-[#E8E2D8]">
              <img
                src="/src/assets/images/macro_hardware_zipper_1791560604093.jpg"
                alt="Close-up macro of antique brass zipper hardware and heavy gauge saddle stitching on full-grain leather"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 bg-[#141518]/90 backdrop-blur-md border border-[#C5A880]/40 px-3.5 py-1.5 text-[11px] font-mono tracking-widest text-[#F5EFEB]">
                MACRO DETAIL · 1:1 SCALE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
