import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PhilosophySectionProps {
  onOpenPhilosophyModal: () => void;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({
  onOpenPhilosophyModal
}) => {
  return (
    <section
      id="philosophy"
      className="relative section-brown-leather text-[#F5EFEB] py-24 sm:py-32 border-b border-[#C5A880]/25 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Subtle decorative top hairline rule */}
        <div className="w-20 h-[2px] bg-gradient-to-r from-[#C5A880] to-transparent mb-12 sm:mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column 1: Editorial Typography */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 pr-0 lg:pr-8">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-metallic-brass block">
              BEYOND THE ORDINARY · ATELIER Nº 01
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F5EFEB] leading-[1.08] [text-wrap:balance]">
              Made for your way of wearing it.
            </h2>

            <p className="text-base sm:text-lg text-[#D4C4B4] font-light leading-relaxed">
              Your jacket should feel like your own from the very beginning.
              Choose the look, explore the materials, and find the fit that
              feels right to you. Veridor brings personal expression and
              thoughtful craftsmanship into one considered experience.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenPhilosophyModal}
                className="group inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.22em] uppercase text-[#F5EFEB] hover:text-[#C5A880] transition-colors border-b border-[#C5A880]/60 pb-1.5 cursor-pointer"
              >
                <span>Discover Our Philosophy</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5 text-[#C5A880]" />
              </button>
            </div>
          </div>

          {/* Column 2: Macro Craftsmanship Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] overflow-hidden shadow-2xl border border-[#C5A880]/30 bg-[#0D0E0F]">
              <img
                src="/src/assets/images/luxury_leather_atelier_dark_interior_1791571501237.jpg"
                alt="Master leather artisan tailoring full-grain hides in the Veridor atelier"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E0F]/70 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Subtle editorial photo caption */}
            <div className="mt-3 flex items-center justify-between text-xs tracking-wider text-[#C5A880]/90 font-mono">
              <span>ATELIER SPECIMEN NO. 01</span>
              <span>BENCH TAILORING & ROLLED HIDES</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
