import React from 'react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenInfoModal: (topic: 'contact' | 'faqs' | 'shipping' | 'returns' | 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenInfoModal
}) => {
  return (
    <footer className="bg-[#0E0F10] film-grain text-[#F2EEE8] pt-20 pb-12 border-t border-[#D4C4B4]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#D4C4B4]/15">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-serif tracking-[0.25em] text-[#F2EEE8]">
              VERIDOR
            </h3>
            <p className="text-sm text-[#A88770] tracking-widest uppercase font-light">
              Crafted around you. Made to be yours.
            </p>
            <p className="text-xs text-[#F2EEE8]/65 font-light leading-relaxed max-w-sm pt-2">
              An international luxury leather house pioneering customizable
              leather jackets and artisanal leather goods. Built to endure and
              acquire character through time.
            </p>
          </div>

          {/* Shop Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#A88770] font-semibold">
              Shop
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider text-[#F2EEE8]/75">
              <li>
                <button
                  onClick={() => onNavigate('collection')}
                  className="hover:text-[#A88770] transition-colors cursor-pointer"
                >
                  Leather Jackets
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collection')}
                  className="hover:text-[#A88770] transition-colors cursor-pointer"
                >
                  Atelier Wallets
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collection')}
                  className="hover:text-[#A88770] transition-colors cursor-pointer"
                >
                  Featured Collections
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('custom-fit')}
                  className="hover:text-[#A88770] transition-colors cursor-pointer"
                >
                  Made-to-Order Fit
                </button>
              </li>
            </ul>
          </div>

          {/* Discover Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#A88770] font-semibold">
              Discover
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider text-[#F2EEE8]/75">
              <li>
                <button
                  onClick={() => onNavigate('philosophy')}
                  className="hover:text-[#A88770] transition-colors cursor-pointer"
                >
                  Our Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('craftsmanship')}
                  className="hover:text-[#A88770] transition-colors cursor-pointer"
                >
                  Leather & Craft
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('custom-fit')}
                  className="hover:text-[#A88770] transition-colors cursor-pointer"
                >
                  Your Custom Fit
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="hover:text-[#A88770] transition-colors cursor-pointer"
                >
                  Honest Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#A88770] font-semibold">
              Customer Care
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider text-[#F2EEE8]/75">
              <li>
                <button
                  onClick={() => onOpenInfoModal('contact')}
                  className="hover:text-[#A88770] transition-colors cursor-pointer"
                >
                  Contact Atelier
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInfoModal('faqs')}
                  className="hover:text-[#A88770] transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInfoModal('shipping')}
                  className="hover:text-[#A88770] transition-colors cursor-pointer"
                >
                  Shipping & Delivery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInfoModal('returns')}
                  className="hover:text-[#A88770] transition-colors cursor-pointer"
                >
                  Returns & Fit Guarantee
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D4C4B4]/60 font-light">
          <p>© {new Date().getFullYear()} VERIDOR LUXURY LEATHER HOUSE. ALL RIGHTS RESERVED.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenInfoModal('privacy')}
              className="hover:text-[#F2EEE8] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenInfoModal('terms')}
              className="hover:text-[#F2EEE8] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
