/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PhilosophySection } from './components/PhilosophySection';
import { FeaturedCollection } from './components/FeaturedCollection';
import { LeatherExplorerSection } from './components/LeatherExplorerSection';
import { CustomizationStudio } from './components/CustomizationStudio';
import { CraftsmanshipSection } from './components/CraftsmanshipSection';
import { HonestPricingSection } from './components/HonestPricingSection';
import { CampaignBanner } from './components/CampaignBanner';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CustomizerModal } from './components/CustomizerModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SearchModal } from './components/SearchModal';
import { InfoModal, InfoTopic } from './components/InfoModal';
import { PRODUCTS } from './data/products';
import { Product, CartItem } from './types';

export default function App() {
  // Shopping Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'init-classic-biker',
      productId: 'classic-biker',
      productName: 'The Classic Biker',
      image: '/src/assets/images/product_classic_biker_1791560502586.jpg',
      price: 890,
      quantity: 1,
      color: 'Dark Espresso',
      hardware: 'Aged Antique Brass',
      size: '40',
      isCustomFit: false
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Customizer State
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [customizerProduct, setCustomizerProduct] = useState<Product | undefined>(undefined);

  // Product Detail Quick View State
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Search State
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Informative Modal State (Philosophy, Craft, Concierge, FAQs, etc.)
  const [infoTopic, setInfoTopic] = useState<InfoTopic | null>(null);

  // Navigation Helper
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Cart operations
  const handleAddToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (i) =>
          i.productId === item.productId &&
          i.color === item.color &&
          i.hardware === item.hardware &&
          i.size === item.size &&
          i.isCustomFit === item.isCustomFit
      );
      if (existing) {
        return prev.map((i) =>
          i.id === existing.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [item, ...prev];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0D0E0F] text-[#F5EFEB] selection:bg-[#C5A880]/40 selection:text-[#F5EFEB]">
      {/* Section A: Announcement Bar and Navigation */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAccount={() => setInfoTopic('account')}
        onNavigate={scrollToSection}
      />

      <main>
        {/* Section B: Cinematic Hero */}
        <Hero
          onExploreCollection={() => scrollToSection('collection')}
          onDiscoverVeridor={() => scrollToSection('philosophy')}
          onOpenCustomStudio={() => scrollToSection('custom-fit')}
          onCreateJacket={() => {
            setCustomizerProduct(undefined);
            setIsCustomizerOpen(true);
          }}
        />

        {/* Section C: Brand Philosophy */}
        <PhilosophySection
          onOpenPhilosophyModal={() => setInfoTopic('philosophy')}
        />

        {/* Section D: Featured Collection */}
        <FeaturedCollection
          products={PRODUCTS}
          onSelectProduct={(product) => setSelectedProduct(product)}
          onExploreAllStyles={() => scrollToSection('custom-fit')}
        />

        {/* Section E: Dedicated Leather Archives & Explorer */}
        <LeatherExplorerSection
          onConfigureWithLeather={() => scrollToSection('custom-fit')}
          onExploreCollection={() => scrollToSection('collection')}
        />

        {/* Section F: Interactive Customization Studio */}
        <CustomizationStudio
          products={PRODUCTS}
          initialProduct={customizerProduct}
          onAddToCart={handleAddToCart}
          onOpenConsultation={() => setInfoTopic('contact')}
        />

        {/* Section F: The Details Matter */}
        <CraftsmanshipSection
          onOpenCraftModal={() => setInfoTopic('craftsmanship')}
        />

        {/* Section G: Honest Pricing */}
        <HonestPricingSection />

        {/* Section H: Brand Campaign Image */}
        <CampaignBanner
          onFindYourVeridor={() => {
            setCustomizerProduct(undefined);
            setIsCustomizerOpen(true);
          }}
        />

        {/* Section I: Newsletter */}
        <NewsletterSection />
      </main>

      {/* Section J: Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenInfoModal={(topic) => setInfoTopic(topic)}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Jacket Customizer Modal */}
      <CustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        products={PRODUCTS}
        onAddToCart={handleAddToCart}
        initialProduct={customizerProduct}
      />

      {/* Product Detail Quick View Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onOpenCustomizer={(product) => {
          setCustomizerProduct(product);
          setIsCustomizerOpen(true);
        }}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(product) => setSelectedProduct(product)}
        onNavigateToSection={scrollToSection}
      />

      {/* Brand & Client Care Info Modal */}
      <InfoModal
        topic={infoTopic}
        onClose={() => setInfoTopic(null)}
        onOpenCustomizer={() => {
          setCustomizerProduct(undefined);
          setIsCustomizerOpen(true);
        }}
      />
    </div>
  );
}
