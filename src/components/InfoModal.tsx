import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Mail, MapPin, Phone } from 'lucide-react';

export type InfoTopic =
  | 'philosophy'
  | 'craftsmanship'
  | 'account'
  | 'contact'
  | 'faqs'
  | 'shipping'
  | 'returns'
  | 'privacy'
  | 'terms';

interface InfoModalProps {
  topic: InfoTopic | null;
  onClose: () => void;
  onOpenCustomizer?: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({
  topic,
  onClose,
  onOpenCustomizer
}) => {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    inquiry: 'bespoke',
    message: ''
  });

  if (!topic) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#171819]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="relative w-full max-w-3xl bg-[#171819] text-[#F2EEE8] border border-[#D4C4B4]/25 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Top Header */}
        <div className="p-4 sm:p-5 bg-[#292827] border-b border-[#D4C4B4]/15 flex items-center justify-between">
          <span className="text-[10px] font-mono tracking-widest text-[#A88770] uppercase">
            VERIDOR MAISON ARCHIVE
          </span>
          <button
            onClick={onClose}
            className="p-1 text-[#F2EEE8]/60 hover:text-[#F2EEE8] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-6">
          {/* Topic: Philosophy */}
          {topic === 'philosophy' && (
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#A88770] font-semibold">
                THE VERIDOR MANIFESTO
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#F2EEE8]">
                Beyond the Ordinary: Made for Your Way of Wearing It.
              </h2>
              <div className="space-y-4 text-sm text-[#F2EEE8]/80 font-light leading-relaxed">
                <p>
                  At Veridor, we believe true luxury does not reside in mass-produced
                  logos or inflated licensing markups. It begins with the tactile
                  honesty of natural hides, respectful tailoring, and a piece made to
                  reflect the person who inhabits it.
                </p>
                <p>
                  Most modern outerwear forces you to adapt your body to rigid factory
                  averages. Veridor reverses this paradigm. Every jacket is envisioned
                  around your posture, your preferences, and your choices—from the
                  undertone of the dye to the pitch of the sleeve.
                </p>
                <div className="p-5 bg-[#292827] border border-[#D4C4B4]/20 text-[#F2EEE8] my-4">
                  <p className="font-serif italic text-base mb-1">
                    "A leather piece should not remain frozen in time. It should absorb
                    your journeys, wear into your contour, and grow richer with every
                    season."
                  </p>
                  <p className="text-xs text-[#A88770] font-mono">
                    — VERIDOR ATELIER GUILD
                  </p>
                </div>
                <p>
                  We commit to honest pricing, unhurried hand construction, and full
                  respect for the materials we sculpt.
                </p>
              </div>
            </div>
          )}

          {/* Topic: Craftsmanship */}
          {topic === 'craftsmanship' && (
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#A88770] font-semibold">
                LEATHER & CRAFT SPECIMEN
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#F2EEE8]">
                Character Lives in the Details.
              </h2>
              <div className="space-y-5 text-sm text-[#F2EEE8]/80 font-light leading-relaxed">
                <div className="p-4 bg-[#292827] border border-[#D4C4B4]/20 space-y-2">
                  <h4 className="text-base font-serif text-[#A88770]">
                    01. Full-Grain Vegetable-Tanned Hides
                  </h4>
                  <p className="text-xs text-[#F2EEE8]/75">
                    We exclusively source full-grain leather that preserves the natural
                    surface matrix. Tanned with organic tree barks and plant extracts,
                    our leather breathes, drapes naturally, and develops a lustrous patina
                    rather than cracking.
                  </p>
                </div>
                <div className="p-4 bg-[#292827] border border-[#D4C4B4]/20 space-y-2">
                  <h4 className="text-base font-serif text-[#A88770]">
                    02. Hand-Burnished Edges & Heavy Saddle Stitches
                  </h4>
                  <p className="text-xs text-[#F2EEE8]/75">
                    Each edge is manually beveled, heat-creased, and smoothed with natural
                    beeswax. Stress points are reinforced with double-thread bar tacks to
                    endure decades of daily wear.
                  </p>
                </div>
                <div className="p-4 bg-[#292827] border border-[#D4C4B4]/20 space-y-2">
                  <h4 className="text-base font-serif text-[#A88770]">
                    03. Solid Antique Brass Hardware
                  </h4>
                  <p className="text-xs text-[#F2EEE8]/75">
                    We select heavy-gauge Japanese solid brass zippers and hand-aged
                    snaps that glide smoothly and never corrode under humidity or seasonal
                    shifts.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Topic: Account / Concierge */}
          {topic === 'account' && (
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#A88770] font-semibold">
                ATELIER CONCIERGE & CLIENT PORTAL
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#F2EEE8]">
                Welcome to Veridor Maison
              </h2>
              <p className="text-sm text-[#F2EEE8]/80 font-light">
                Sign into your private client book or request an individualized
                measurement consultation with our master tailor.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-[#292827] border border-[#D4C4B4]/25 space-y-3">
                  <h4 className="font-serif text-lg text-[#F2EEE8]">
                    Client Sign In
                  </h4>
                  <input
                    type="email"
                    placeholder="Registered client email"
                    defaultValue="client@veridor.com"
                    className="w-full px-3 py-2 bg-[#171819] border border-[#D4C4B4]/30 text-xs text-[#F2EEE8] focus:outline-none focus:border-[#A88770]"
                  />
                  <input
                    type="password"
                    placeholder="Passkey or Password"
                    defaultValue="••••••••••••"
                    className="w-full px-3 py-2 bg-[#171819] border border-[#D4C4B4]/30 text-xs text-[#F2EEE8] focus:outline-none focus:border-[#A88770]"
                  />
                  <button className="btn-ivory-on-dark w-full py-2.5 text-xs uppercase tracking-wider font-semibold cursor-pointer">
                    Access Archive
                  </button>
                </div>

                <div className="p-5 bg-[#292827] border border-[#D4C4B4]/25 space-y-3 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-lg text-[#A88770]">
                      Fit Concierge
                    </h4>
                    <p className="text-xs text-[#F2EEE8]/75 font-light leading-relaxed mt-2">
                      Unsure about your sizing or silhouette? Book a complimentary
                      one-on-one virtual fitting session with our tailoring team.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      if (onOpenCustomizer) onOpenCustomizer();
                    }}
                    className="w-full py-2.5 border border-[#D4C4B4]/35 text-xs uppercase tracking-wider text-[#F2EEE8] hover:border-[#A88770] hover:text-[#A88770] transition-colors cursor-pointer"
                  >
                    Launch Jacket Configurator
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Topic: Contact */}
          {topic === 'contact' && (
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#A88770] font-semibold">
                COMMUNICATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#F2EEE8]">
                Contact the Veridor Atelier
              </h2>

              {contactSubmitted ? (
                <div className="p-6 bg-[#292827] border border-[#A88770]/40 text-center space-y-3">
                  <CheckCircle className="w-8 h-8 text-[#A88770] mx-auto" />
                  <h4 className="text-xl font-serif text-[#F2EEE8]">
                    Inquiry Received
                  </h4>
                  <p className="text-xs text-[#F2EEE8]/75 font-light max-w-sm mx-auto">
                    A senior artisan from our concierge will review your note and respond
                    within 12 business hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setContactSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-[#F2EEE8]/70 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, name: e.target.value })
                        }
                        className="w-full px-3 py-2 bg-[#292827] border border-[#D4C4B4]/30 text-xs text-[#F2EEE8] focus:outline-none focus:border-[#A88770]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#F2EEE8]/70 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, email: e.target.value })
                        }
                        className="w-full px-3 py-2 bg-[#292827] border border-[#D4C4B4]/30 text-xs text-[#F2EEE8] focus:outline-none focus:border-[#A88770]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-[#F2EEE8]/70 mb-1">
                      Inquiry Focus
                    </label>
                    <select
                      value={contactForm.inquiry}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, inquiry: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-[#292827] border border-[#D4C4B4]/30 text-xs text-[#F2EEE8] focus:outline-none focus:border-[#A88770]"
                    >
                      <option value="bespoke">Bespoke Fit & Jacket Commission</option>
                      <option value="leather">Leather & Material Guidance</option>
                      <option value="orders">Existing Order Status</option>
                      <option value="press">Editorial & Press</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-[#F2EEE8]/70 mb-1">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, message: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-[#292827] border border-[#D4C4B4]/30 text-xs text-[#F2EEE8] focus:outline-none focus:border-[#A88770]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-ivory-on-dark w-full py-3 text-xs uppercase tracking-widest font-semibold cursor-pointer"
                  >
                    Send Atelier Dispatch
                  </button>
                </form>
              )}

              <div className="pt-4 border-t border-[#D4C4B4]/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#F2EEE8]/70">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#A88770]" />
                  <span>concierge@veridor.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#A88770]" />
                  <span>+1 (800) 492-LEATHER</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#A88770]" />
                  <span>New York · London Atelier</span>
                </div>
              </div>
            </div>
          )}

          {/* Topic: FAQs */}
          {topic === 'faqs' && (
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#A88770] font-semibold">
                CLIENT GUIDANCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#F2EEE8]">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4 text-xs leading-relaxed">
                <div className="p-4 bg-[#292827] border border-[#D4C4B4]/20 space-y-1.5">
                  <h4 className="font-serif text-sm text-[#A88770]">
                    How does the custom fit process work?
                  </h4>
                  <p className="text-[#F2EEE8]/75 font-light">
                    You can either select standard sizing (US 36 through 46) or submit your
                    chest, shoulder, and sleeve measurements. Our patternmakers draft an
                    individualized paper pattern prior to cutting hide.
                  </p>
                </div>

                <div className="p-4 bg-[#292827] border border-[#D4C4B4]/20 space-y-1.5">
                  <h4 className="font-serif text-sm text-[#A88770]">
                    What is the craft production lead time?
                  </h4>
                  <p className="text-[#F2EEE8]/75 font-light">
                    Because each jacket is hand-cut and bench-assembled rather than pulled
                    from a container warehouse, allow 12 to 14 business days for artisan
                    bench time plus 2 to 3 days for insured transit.
                  </p>
                </div>

                <div className="p-4 bg-[#292827] border border-[#D4C4B4]/20 space-y-1.5">
                  <h4 className="font-serif text-sm text-[#A88770]">
                    How should I care for my Veridor leather piece?
                  </h4>
                  <p className="text-[#F2EEE8]/75 font-light">
                    Every commission arrives with a complimentary tin of Veridor beeswax
                    and jojoba conditioning balm. Apply gently once every 6 months to nourish
                    the grain. Avoid synthetic aerosol sprays.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Topic: Shipping */}
          {topic === 'shipping' && (
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#A88770] font-semibold">
                LOGISTICS & WHITE-GLOVE TRANSIT
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#F2EEE8]">
                Shipping & Delivery
              </h2>
              <div className="space-y-4 text-sm text-[#F2EEE8]/80 font-light leading-relaxed">
                <p>
                  Every Veridor piece is packaged in a breathable heavy canvas garment bag
                  with a cedar hanger, encased in a reinforced archival box.
                </p>
                <div className="p-4 bg-[#292827] border border-[#D4C4B4]/20 space-y-2 text-xs">
                  <div className="flex justify-between font-mono text-[#A88770]">
                    <span>DOMESTIC COURIER (US & UK):</span>
                    <span>Complimentary (2-3 days insured)</span>
                  </div>
                  <div className="flex justify-between font-mono text-[#A88770]">
                    <span>INTERNATIONAL EXPRESS:</span>
                    <span>Complimentary over $500 (3-5 days insured)</span>
                  </div>
                  <div className="flex justify-between font-mono text-[#F2EEE8]/60">
                    <span>TRACKING & SIGNATURE:</span>
                    <span>Direct live signature required on handoff</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Topic: Returns */}
          {topic === 'returns' && (
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#A88770] font-semibold">
                THE VERIDOR PROMISE
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#F2EEE8]">
                Returns & Fit Guarantee
              </h2>
              <div className="space-y-4 text-sm text-[#F2EEE8]/80 font-light leading-relaxed">
                <p>
                  We stand completely behind every stitch. If a standard size does not drape
                  identically to your expectations, exchange it within 30 days at zero cost.
                </p>
                <p>
                  For bespoke made-to-measure jackets: if the silhouette needs micro-adjustments
                  (such as sleeve hem or waist intake), our atelier handles complimentary
                  tailoring adjustments within your first 30 days of ownership.
                </p>
              </div>
            </div>
          )}

          {/* Topic: Privacy & Terms */}
          {(topic === 'privacy' || topic === 'terms') && (
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#A88770] font-semibold">
                LEGAL & ETHICS
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#F2EEE8]">
                {topic === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h2>
              <div className="space-y-4 text-xs text-[#F2EEE8]/75 font-light leading-relaxed">
                <p>
                  Veridor treats your personal and sizing data with absolute confidentiality.
                  We never broker client measurements, contact lists, or purchase histories
                  to external commercial syndicates.
                </p>
                <p>
                  All transactions and communications are encrypted using high-grade
                  transport protocols. Custom commissions enter production upon artisan
                  bench queue confirmation.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
