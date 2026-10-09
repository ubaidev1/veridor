import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
  onNavigateToSection
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase()) ||
      p.tagline.toLowerCase().includes(query.toLowerCase())
  );

  const craftTopics = [
    { name: 'Full-Grain Vegetable Tanning', section: 'craftsmanship' },
    { name: 'Bespoke Measurement & Silhouette', section: 'custom-fit' },
    { name: 'Antique Brass & Talon Hardware', section: 'craftsmanship' },
    { name: 'The Veridor Philosophy Manifesto', section: 'philosophy' },
    { name: 'Transparent Honest Pricing', section: 'pricing' }
  ].filter((t) => t.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#171819]/85 backdrop-blur-md flex items-start justify-center pt-20 px-4 sm:px-6">
      <div className="relative w-full max-w-2xl bg-[#171819] text-[#F2EEE8] border border-[#D4C4B4]/25 shadow-2xl overflow-hidden">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#D4C4B4]/20 flex items-center gap-3 bg-[#292827]">
          <Search className="w-5 h-5 text-[#A88770] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search jackets, wallets, craft materials, or fits..."
            className="w-full bg-transparent text-base text-[#F2EEE8] placeholder-[#F2EEE8]/40 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 text-[#F2EEE8]/60 hover:text-[#F2EEE8] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
          {/* Products */}
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[#A88770] uppercase block mb-3">
              Leather Goods ({filteredProducts.length})
            </span>
            <div className="space-y-3">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    onClose();
                    onSelectProduct(p);
                  }}
                  className="flex items-center justify-between p-3 bg-[#292827] border border-[#D4C4B4]/15 hover:border-[#A88770]/50 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-12 h-12 object-cover border border-[#D4C4B4]/20"
                    />
                    <div>
                      <h4 className="text-sm font-serif text-[#F2EEE8]">
                        {p.name}
                      </h4>
                      <p className="text-xs text-[#F2EEE8]/60 font-light">
                        {p.tagline}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#A88770]">
                    <span>${p.basePrice}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Craft Topics */}
          {craftTopics.length > 0 && (
            <div className="pt-4 border-t border-[#D4C4B4]/15">
              <span className="text-[11px] font-mono tracking-widest text-[#A88770] uppercase block mb-3">
                Craftsmanship & Editorial Guides
              </span>
              <div className="space-y-2">
                {craftTopics.map((topic, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      onClose();
                      onNavigateToSection(topic.section);
                    }}
                    className="w-full flex items-center justify-between p-2.5 text-left text-xs text-[#F2EEE8]/80 hover:text-[#A88770] hover:bg-[#292827] transition-colors cursor-pointer"
                  >
                    <span>{topic.name}</span>
                    <span className="text-[10px] font-mono text-[#A88770]/70 uppercase">
                      Explore →
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
