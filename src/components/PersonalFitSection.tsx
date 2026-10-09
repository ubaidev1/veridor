import React from 'react';
import { Scissors, Palette, Ruler } from 'lucide-react';

interface PersonalFitSectionProps {
  onCreateJacket: () => void;
}

export const PersonalFitSection: React.FC<PersonalFitSectionProps> = ({
  onCreateJacket
}) => {
  const steps = [
    {
      step: '01',
      title: 'Choose Your Style',
      description: 'Begin with a silhouette that feels like you.',
      icon: Scissors
    },
    {
      step: '02',
      title: 'Make It Yours',
      description: 'Explore available materials, colors, and design options.',
      icon: Palette
    },
    {
      step: '03',
      title: 'Find Your Fit',
      description: 'Choose a standard size or enter custom measurements when available.',
      icon: Ruler
    }
  ];

  return (
    <section
      id="custom-fit"
      className="relative bg-[#292827] text-[#F2EEE8] py-24 sm:py-32 overflow-hidden border-b border-[#D4C4B4]/15 grain-charcoal"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(168,135,112,0.06)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column 1: Editorial Photography of Fit & Silhouette */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[3/4] overflow-hidden border border-[#D4C4B4]/25 shadow-2xl bg-[#171819]">
              <img
                src="/src/assets/images/fit_silhouette_tailoring_1791560617807.jpg"
                alt="Veridor custom jacket fit and shoulder contour tailoring"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171819]/70 via-transparent to-transparent pointer-events-none" />

              {/* Inset Label */}
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#171819]/90 backdrop-blur-sm border border-[#D4C4B4]/20">
                <p className="text-xs uppercase tracking-widest text-[#A88770] font-medium mb-1">
                  Atelier Silhouette Note
                </p>
                <p className="text-xs text-[#F2EEE8]/80 font-light">
                  Tailored drape, balanced shoulder drop, and custom sleeve pitch.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Content & Three Refined Steps */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8 lg:pl-6">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#A88770] block mb-3">
                YOUR STYLE. YOUR FIT.
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#F2EEE8] leading-[1.1] mb-5 [text-wrap:balance]">
                Not just chosen. Made personal.
              </h2>
              <p className="text-base sm:text-lg text-[#F2EEE8]/85 font-light leading-relaxed max-w-xl">
                Start with a design you love, then make it yours. Explore
                available leather options, choose your preferred color, and
                select a standard size or provide your measurements where
                supported.
              </p>
            </div>

            {/* Three Steps */}
            <div className="space-y-6 pt-4 border-t border-[#D4C4B4]/15">
              {steps.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.step}
                    className="flex items-start gap-5 p-4 bg-[#171819]/70 border border-[#D4C4B4]/15 hover:border-[#A88770]/40 transition-colors"
                  >
                    <div className="w-10 h-10 shrink-0 bg-[#49372E] border border-[#D4C4B4]/30 flex items-center justify-center text-[#F2EEE8]">
                      <IconComponent className="w-4 h-4 text-[#A88770]" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-[#A88770] tracking-wider">
                          {item.step}
                        </span>
                        <h3 className="text-base font-serif text-[#F2EEE8] tracking-wide">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-[#F2EEE8]/75 font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={onCreateJacket}
                className="btn-ivory-on-dark px-8 py-3.5 rounded-none text-xs tracking-[0.2em] uppercase font-semibold cursor-pointer"
              >
                Create Your Jacket
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
