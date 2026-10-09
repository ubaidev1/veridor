import React from 'react';
import { X } from 'lucide-react';
import { Product, CartItem } from '../types';
import { CustomizationStudio } from './CustomizationStudio';

interface CustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onAddToCart: (item: CartItem) => void;
  initialProduct?: Product;
}

export const CustomizerModal: React.FC<CustomizerModalProps> = ({
  isOpen,
  onClose,
  products,
  onAddToCart,
  initialProduct
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#171819]/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-8">
      <div className="relative w-full max-w-6xl bg-[#171819] text-[#F2EEE8] border border-[#D4C4B4]/25 shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#292827] border-b border-[#D4C4B4]/15 flex items-center justify-between shrink-0">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-[#A88770] uppercase">
              VERIDOR ATELIER CONFIGURATOR
            </span>
            <h2 className="text-lg sm:text-xl font-serif text-[#F2EEE8]">
              Bespoke Jacket Customization Studio
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#F2EEE8]/60 hover:text-[#F2EEE8] transition-colors cursor-pointer"
            aria-label="Close customizer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto">
          <CustomizationStudio
            products={products}
            initialProduct={initialProduct}
            onAddToCart={onAddToCart}
            isModalMode={true}
            onCloseModal={onClose}
          />
        </div>
      </div>
    </div>
  );
};
