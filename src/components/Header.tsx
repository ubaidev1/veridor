import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenAccount,
  onNavigate
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Announcement Bar */}
      <div className="bg-[#0E0F10] text-[#F2EEE8] text-xs py-2 px-4 text-center tracking-widest uppercase border-b border-[#D4C4B4]/15 flex items-center justify-center font-medium">
        <span className="tracking-[0.2em]">Crafted around you. Made to be yours.</span>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-[#111213]/95 backdrop-blur-md border-b border-[#D4C4B4]/15 shadow-2xl py-3.5'
            : 'bg-gradient-to-b from-[#0E0F10]/95 via-[#0E0F10]/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="text-2xl sm:text-3xl font-serif tracking-[0.25em] text-[#F2EEE8] hover:text-[#A88770] transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#A88770]"
            aria-label="Veridor Home"
          >
            VERIDOR
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-xs tracking-[0.16em] uppercase font-medium text-[#F5EFEB]/80">
            <button
              onClick={() => handleLinkClick('collection')}
              className="hover:text-[#F5EFEB] hover:border-b hover:border-[#C5A880] pb-0.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Shop
            </button>
            <button
              onClick={() => handleLinkClick('leather-guide')}
              className="hover:text-[#F5EFEB] hover:border-b hover:border-[#C5A880] pb-0.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer text-[#C5A880]"
            >
              Explore Leathers
            </button>
            <button
              onClick={() => handleLinkClick('craftsmanship')}
              className="hover:text-[#F5EFEB] hover:border-b hover:border-[#C5A880] pb-0.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Atelier Craft
            </button>
            <button
              onClick={() => handleLinkClick('custom-fit')}
              className="hover:text-[#F5EFEB] hover:border-b hover:border-[#C5A880] pb-0.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Custom Fit Studio
            </button>
            <button
              onClick={() => handleLinkClick('philosophy')}
              className="hover:text-[#F5EFEB] hover:border-b hover:border-[#C5A880] pb-0.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Philosophy
            </button>
          </nav>

          {/* Zone 3: Understated Icons & Actions */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0">
            <button
              onClick={onOpenSearch}
              className="p-1.5 text-[#F2EEE8]/80 hover:text-[#A88770] transition-colors cursor-pointer"
              aria-label="Search collection"
              title="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenAccount}
              className="p-1.5 text-[#F2EEE8]/80 hover:text-[#A88770] transition-colors cursor-pointer"
              aria-label="Client Account and Concierge"
              title="Atelier Concierge"
            >
              <User className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenCart}
              className="relative p-1.5 text-[#F2EEE8]/80 hover:text-[#A88770] transition-colors cursor-pointer flex items-center"
              aria-label={`Shopping Bag (${cartCount} items)`}
              title="Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1.5 w-4 h-4 bg-[#A88770] text-[#171819] rounded-full text-[10px] font-bold flex items-center justify-center border border-[#F2EEE8]/60 tabular-nums">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-[#F2EEE8]/80 hover:text-[#A88770] transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#171819] border-b border-[#D4C4B4]/20 px-6 py-6 space-y-4 text-sm tracking-widest uppercase">
          <button
            onClick={() => handleLinkClick('collection')}
            className="block w-full text-left py-2 text-[#F5EFEB] hover:text-[#C5A880] transition-colors"
          >
            Shop Collection
          </button>
          <button
            onClick={() => handleLinkClick('leather-guide')}
            className="block w-full text-left py-2 text-[#C5A880] hover:text-[#F5EFEB] transition-colors"
          >
            Explore Leathers Guide
          </button>
          <button
            onClick={() => handleLinkClick('craftsmanship')}
            className="block w-full text-left py-2 text-[#F5EFEB] hover:text-[#C5A880] transition-colors"
          >
            Atelier Craft
          </button>
          <button
            onClick={() => handleLinkClick('custom-fit')}
            className="block w-full text-left py-2 text-[#F2EEE8] hover:text-[#A88770] transition-colors"
          >
            Your Custom Fit
          </button>
          <button
            onClick={() => handleLinkClick('philosophy')}
            className="block w-full text-left py-2 text-[#F2EEE8] hover:text-[#A88770] transition-colors"
          >
            Our Philosophy
          </button>
          <button
            onClick={() => handleLinkClick('pricing')}
            className="block w-full text-left py-2 text-[#F2EEE8] hover:text-[#A88770] transition-colors"
          >
            Honest Pricing
          </button>
        </div>
      )}
    </header>
  );
};
