import React, { useState } from 'react';
import { X, Check, ShieldCheck, Sparkles } from 'lucide-react';
import { Product, CartItem } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
  onOpenCustomizer: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onOpenCustomizer
}) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState(
    product.availableColors[0]?.name || 'Deep Espresso'
  );
  const [selectedHardware, setSelectedHardware] = useState(
    product.hardwareOptions[0]?.name || 'Aged Antique Brass'
  );
  const [selectedSize, setSelectedSize] = useState('40');

  const handleAdd = () => {
    const item: CartItem = {
      id: `${product.id}-${Date.now()}`,
      productId: product.id,
      productName: product.name,
      image: product.image,
      price: product.basePrice,
      quantity: 1,
      color: selectedColor,
      hardware: selectedHardware,
      size: product.category === 'jackets' ? selectedSize : 'One Size',
      isCustomFit: false
    };

    onAddToCart(item);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#171819]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="relative w-full max-w-4xl bg-[#171819] text-[#F2EEE8] border border-[#D4C4B4]/25 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Top Bar */}
        <div className="p-4 sm:p-5 bg-[#292827] border-b border-[#D4C4B4]/15 flex items-center justify-between">
          <span className="text-[10px] font-mono tracking-widest text-[#A88770] uppercase">
            VERIDOR SPECIFICATION ARCHIVE
          </span>
          <button
            onClick={onClose}
            className="p-1 text-[#F2EEE8]/60 hover:text-[#F2EEE8] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Photo */}
          <div className="relative bg-[#1F2021] p-6 sm:p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#D4C4B4]/15">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#D4C4B4]/20 shadow-xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="p-6 sm:p-8 space-y-6 bg-[#171819]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#A88770] mb-1 font-semibold">
                {product.category === 'jackets' ? 'Leather Jacket' : 'Atelier Small Leather Good'}
              </p>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#F2EEE8]">
                {product.name}
              </h2>
              <p className="text-xl font-serif text-[#A88770] mt-1 font-normal">
                ${product.basePrice} USD
              </p>
            </div>

            <p className="text-sm text-[#F2EEE8]/80 font-light leading-relaxed">
              {product.description}
            </p>

            {/* Color Swatches */}
            <div>
              <label className="text-xs uppercase tracking-wider text-[#A88770] font-medium block mb-2">
                Available Leather Shades
              </label>
              <div className="flex flex-wrap gap-2.5">
                {product.availableColors.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedColor(c.name)}
                    className={`flex items-center gap-2 px-3 py-1.5 border text-xs cursor-pointer transition-all ${
                      selectedColor === c.name
                        ? 'bg-[#292827] border-[#A88770] text-[#F2EEE8]'
                        : 'bg-[#1F2021] border-[#D4C4B4]/20 text-[#F2EEE8]/70 hover:border-[#D4C4B4]/40'
                    }`}
                  >
                    <span
                      className="w-3 h-3 rounded-full border border-white/20"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sizing if Jacket */}
            {product.category === 'jackets' && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs uppercase tracking-wider text-[#A88770] font-medium">
                    Select Standard Size
                  </label>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenCustomizer(product);
                    }}
                    className="text-[11px] text-[#A88770] underline underline-offset-4 hover:text-[#F2EEE8] cursor-pointer"
                  >
                    Or enter custom measurements →
                  </button>
                </div>
                <div className="grid grid-cols-6 gap-1.5">
                  {['36', '38', '40', '42', '44', '46'].map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`py-2 text-center text-xs font-mono border cursor-pointer ${
                        selectedSize === sz
                          ? 'bg-[#292827] border-[#A88770] text-[#F2EEE8]'
                          : 'bg-[#1F2021] border-[#D4C4B4]/20 text-[#F2EEE8]/70'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Details list */}
            <div className="pt-4 border-t border-[#D4C4B4]/15 space-y-2">
              <p className="text-xs uppercase tracking-wider text-[#A88770] font-medium">
                Atelier Construction Notes
              </p>
              <ul className="text-xs text-[#F2EEE8]/75 space-y-1 font-light">
                {product.details.map((d, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#A88770] rounded-full shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="pt-4 space-y-3">
              <button
                onClick={handleAdd}
                className="btn-ivory-on-dark w-full py-3.5 text-xs tracking-[0.2em] uppercase font-semibold cursor-pointer"
              >
                Add to Shopping Bag (${product.basePrice})
              </button>

              {product.category === 'jackets' && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenCustomizer(product);
                  }}
                  className="w-full py-3 border border-[#D4C4B4]/30 text-xs tracking-wider uppercase text-[#F2EEE8]/80 hover:text-[#F2EEE8] hover:border-[#A88770] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#A88770]" />
                  <span>Customize Fit & Hardware</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
