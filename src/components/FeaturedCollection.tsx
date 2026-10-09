import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface FeaturedCollectionProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onExploreAllStyles: () => void;
}

export const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({
  products,
  onSelectProduct,
  onExploreAllStyles
}) => {
  const [activeTab, setActiveTab] = useState<'jackets' | 'wallets'>('jackets');

  const filteredProducts = products.filter((p) => p.category === activeTab);

  return (
    <section
      id="collection"
      className="relative section-warm-light text-[#141518] py-24 sm:py-32 border-b border-[#D4C4B4]/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#8C5635] block mb-3">
              THE VERIDOR COLLECTION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#141518] leading-tight mb-4 [text-wrap:balance]">
              Find your signature.
            </h2>
            <p className="text-base text-[#4A4642] font-light leading-relaxed">
              Distinctive leather essentials, ready to be made your own.
            </p>
          </div>

          {/* Interactive Category Segmented Selector */}
          <div className="inline-flex items-center p-1 bg-[#141518]/5 border border-[#141518]/15 self-start md:self-end">
            <button
              onClick={() => setActiveTab('jackets')}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'jackets'
                  ? 'bg-[#141518] text-[#F5EFEB] shadow-md'
                  : 'text-[#4A4642] hover:text-[#141518]'
              }`}
            >
              Leather Jackets
            </button>
            <button
              onClick={() => setActiveTab('wallets')}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'wallets'
                  ? 'bg-[#141518] text-[#F5EFEB] shadow-md'
                  : 'text-[#4A4642] hover:text-[#141518]'
              }`}
            >
              Atelier Wallets
            </button>
          </div>
        </div>

        {/* 3-Column Art-Directed Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-white border border-[#D4C4B4]/60 shadow-lg transition-all duration-300 hover:border-[#8C5635] hover:shadow-2xl overflow-hidden"
            >
              {/* Product Photography Container */}
              <div
                onClick={() => onSelectProduct(product)}
                className="relative aspect-[4/3] bg-[#E8E2D8] overflow-hidden cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Soft ambient gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50" />

                {/* Customization Affordance indicator */}
                <div className="absolute top-4 right-4 bg-[#141518]/90 backdrop-blur-sm border border-[#D4C4B4]/40 px-2.5 py-1 text-[11px] font-medium tracking-wider text-[#F5EFEB] flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="w-3 h-3 text-[#C5A880]" />
                  <span>Customizable</span>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-[#FDFBF7]">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#141518] mb-2 font-normal group-hover:text-[#8C5635] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-[#5A544E] font-light leading-relaxed mb-4">
                    {product.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D4C4B4]/40 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-[#8C5635] font-semibold">
                    Custom Made-to-Order
                  </span>

                  <button
                    onClick={() => onSelectProduct(product)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#141518] group-hover:text-[#8C5635] transition-colors cursor-pointer"
                  >
                    <span>Explore Style</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={onExploreAllStyles}
            className="btn-charcoal-on-light px-10 py-4 rounded-none text-xs tracking-[0.22em] uppercase font-semibold inline-block cursor-pointer shadow-xl"
          >
            Explore All Styles
          </button>
        </div>
      </div>
    </section>
  );
};
