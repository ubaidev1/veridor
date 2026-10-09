import React, { useState } from 'react';
import { X, Trash2, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'confirmed'>('cart');
  const [shippingAddress, setShippingAddress] = useState({
    name: 'Eleanor Vance',
    email: 'eleanor.vance@atelier.com',
    address: '742 Evergreen Terrace, Suite 4B',
    city: 'New York',
    postalCode: '10001',
    country: 'United States'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setCheckoutStep('confirmed');
    }, 900);
  };

  const handleReset = () => {
    onClearCart();
    setCheckoutStep('cart');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#171819]/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#171819] text-[#F2EEE8] border-l border-[#D4C4B4]/20 flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b border-[#D4C4B4]/15 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-serif text-[#F2EEE8]">
                {checkoutStep === 'cart'
                  ? 'Your Shopping Bag'
                  : checkoutStep === 'checkout'
                  ? 'Atelier Checkout'
                  : 'Order Reserved'}
              </h2>
              <p className="text-xs text-[#A88770] tracking-widest uppercase">
                Veridor Maison
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#F2EEE8]/60 hover:text-[#F2EEE8] transition-colors cursor-pointer"
              aria-label="Close bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {checkoutStep === 'confirmed' ? (
              <div className="py-10 text-center space-y-5">
                <div className="w-14 h-14 bg-[#292827] border border-[#A88770] text-[#A88770] mx-auto flex items-center justify-center">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif text-[#F2EEE8]">
                  Bespoke Commission Received
                </h3>
                <p className="text-sm text-[#F2EEE8]/80 font-light leading-relaxed max-w-xs mx-auto">
                  Thank you for entrusting your leather piece to Veridor. Our master
                  artisan has queued your specifications for bench cutting.
                </p>
                <div className="p-4 bg-[#292827] border border-[#D4C4B4]/20 text-xs font-mono text-[#A88770] text-left space-y-1">
                  <div>COMMISSION ID: #VRD-2026-9812</div>
                  <div>CLIENT: {shippingAddress.name}</div>
                  <div>DISPATCH: Insured White Glove Courier</div>
                </div>
                <button
                  onClick={handleReset}
                  className="btn-ivory-on-dark w-full py-3.5 text-xs uppercase tracking-widest font-semibold cursor-pointer"
                >
                  Return to Boutique
                </button>
              </div>
            ) : checkoutStep === 'checkout' ? (
              <form onSubmit={handleCompleteOrder} className="space-y-4">
                <p className="text-xs text-[#A88770] uppercase tracking-wider font-semibold">
                  Client & Shipping Details
                </p>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-[#F2EEE8]/70 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={shippingAddress.name}
                      onChange={(e) =>
                        setShippingAddress({ ...shippingAddress, name: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-[#292827] border border-[#D4C4B4]/30 text-[#F2EEE8] focus:outline-none focus:border-[#A88770]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#F2EEE8]/70 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={shippingAddress.email}
                      onChange={(e) =>
                        setShippingAddress({ ...shippingAddress, email: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-[#292827] border border-[#D4C4B4]/30 text-[#F2EEE8] focus:outline-none focus:border-[#A88770]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#F2EEE8]/70 mb-1">Delivery Address</label>
                    <input
                      type="text"
                      required
                      value={shippingAddress.address}
                      onChange={(e) =>
                        setShippingAddress({ ...shippingAddress, address: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-[#292827] border border-[#D4C4B4]/30 text-[#F2EEE8] focus:outline-none focus:border-[#A88770]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#F2EEE8]/70 mb-1">City</label>
                      <input
                        type="text"
                        required
                        value={shippingAddress.city}
                        onChange={(e) =>
                          setShippingAddress({ ...shippingAddress, city: e.target.value })
                        }
                        className="w-full px-3 py-2 bg-[#292827] border border-[#D4C4B4]/30 text-[#F2EEE8] focus:outline-none focus:border-[#A88770]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#F2EEE8]/70 mb-1">Postal Code</label>
                      <input
                        type="text"
                        required
                        value={shippingAddress.postalCode}
                        onChange={(e) =>
                          setShippingAddress({ ...shippingAddress, postalCode: e.target.value })
                        }
                        className="w-full px-3 py-2 bg-[#292827] border border-[#D4C4B4]/30 text-[#F2EEE8] focus:outline-none focus:border-[#A88770]"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#292827] border border-[#D4C4B4]/20 text-[11px] text-[#F2EEE8]/75 space-y-1">
                  <div className="flex justify-between font-mono">
                    <span>Order Subtotal:</span>
                    <span>${subtotal} USD</span>
                  </div>
                  <div className="flex justify-between font-mono text-[#A88770]">
                    <span>Atelier Insured Delivery:</span>
                    <span>COMPLIMENTARY</span>
                  </div>
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setCheckoutStep('cart')}
                    className="w-1/3 py-3 border border-[#D4C4B4]/30 text-xs uppercase tracking-wider text-[#F2EEE8]/80 hover:text-[#F2EEE8] cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-ivory-on-dark w-2/3 py-3 text-xs uppercase tracking-widest font-semibold cursor-pointer"
                  >
                    {isSubmitting ? 'Confirming...' : 'Place Commission'}
                  </button>
                </div>
              </form>
            ) : items.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <p className="text-lg font-serif text-[#F2EEE8]/70">
                  Your shopping bag is empty.
                </p>
                <p className="text-xs text-[#F2EEE8]/50 font-light max-w-xs mx-auto">
                  Explore our jackets and leather pieces to commission your custom
                  fit.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-[#292827] border border-[#D4C4B4]/20"
                  >
                    <img
                      src={item.image}
                      alt={item.productName}
                      className="w-20 h-24 object-cover border border-[#D4C4B4]/20 shrink-0"
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm font-serif font-medium text-[#F2EEE8]">
                            {item.productName}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-[#F2EEE8]/40 hover:text-[#E58B88] transition-colors cursor-pointer"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="text-[11px] text-[#F2EEE8]/70 space-y-0.5 mt-1 font-light">
                          {item.leatherType && <p>Leather: {item.leatherType}</p>}
                          <p>Shade: {item.color}</p>
                          <p>Hardware: {item.hardware}</p>
                          {item.lining && <p>Lining: {item.lining}</p>}
                          {item.monogram && (
                            <p>
                              Monogram:{' '}
                              <span className="text-[#A88770] font-mono font-medium">
                                [{item.monogram}]
                              </span>
                            </p>
                          )}
                          <p>
                            Fit:{' '}
                            <span className="text-[#A88770] font-medium">
                              {item.isCustomFit ? 'Custom Measurements' : item.size}
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-[#D4C4B4]/15 text-xs">
                        <div className="flex items-center border border-[#D4C4B4]/30">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="px-2 py-0.5 text-[#F2EEE8]/80 hover:bg-[#171819] cursor-pointer"
                          >
                            -
                          </button>
                          <span className="px-2 py-0.5 font-mono text-[11px]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="px-2 py-0.5 text-[#F2EEE8]/80 hover:bg-[#171819] cursor-pointer"
                          >
                            +
                          </button>
                        </div>

                        <span className="font-mono text-[#F2EEE8] font-medium">
                          ${item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Subtotal & Action */}
          {checkoutStep === 'cart' && items.length > 0 && (
            <div className="p-6 bg-[#292827] border-t border-[#D4C4B4]/15 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#F2EEE8]/70">Subtotal</span>
                <span className="text-lg font-serif font-medium text-[#F2EEE8]">
                  ${subtotal} USD
                </span>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-[#A88770]">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Complimentary insured shipping & fit guarantee included.</span>
              </div>

              <button
                onClick={() => setCheckoutStep('checkout')}
                className="btn-ivory-on-dark w-full py-4 text-xs tracking-[0.2em] uppercase font-semibold flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4 text-[#171819]" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
