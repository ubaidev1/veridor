import React, { useState } from 'react';
import {
  Shield,
  Sparkles,
  Flame,
  Check,
  ArrowRight,
  Compass,
  Layers,
  Award,
  Sliders,
  ChevronRight,
  Info
} from 'lucide-react';

export interface LeatherProfile {
  id: string;
  name: string;
  subtitle: string;
  category: 'heavy' | 'daily' | 'heritage' | 'luxury';
  thickness: string;
  temper: string;
  breakIn: string;
  durability: number; // out of 10
  weatherResistance: number; // out of 10
  bestForUsage: string;
  recommendedProducts: string[];
  tagline: string;
  description: string;
  patinaBehavior: string;
  careAdvice: string;
  swatchHex: string;
  accentRgb: string;
  badge: string;
  idealForBiker: boolean;
  idealForDaily: boolean;
}

export const LEATHER_PROFILES: LeatherProfile[] = [
  {
    id: 'cowhide-classic',
    name: 'Full-Grain Classic Steerhide',
    subtitle: '1.4mm Heavyweight Drum-Dyed Cowhide',
    category: 'heavy',
    thickness: '1.4 – 1.6 mm',
    temper: 'Firm, heavy, structural armor',
    breakIn: '4 to 6 weeks of dedicated wear',
    durability: 10,
    weatherResistance: 9.5,
    bestForUsage: 'Highway motorcycle riding, heavy wind resistance, harsh climate utility, and lifetime heirloom longevity.',
    recommendedProducts: ['The Sovereign Biker', 'The Classic Asymmetrical Moto', 'The Heavyweight Aviator'],
    tagline: 'Built like an indestructible second skin that conquers asphalt and highway gale.',
    description: 'Our thickest uncorrected hide, sourced from mature North American steers. Hand drum-dyed to preserve natural battle marks, fat wrinkles, and deep pore structure. Initially unyielding, it absorbs your body warmth over several weeks and permanently contours to your exact shoulder arches and elbow bends.',
    patinaBehavior: 'Develops deep burnished honeycombs on the elbows and a rich satin luster over decades. Does not sag or thin out.',
    careAdvice: 'Condition every 6 months with beeswax/mink balm. Wipe mud or salt immediately with a damp cotton cloth.',
    swatchHex: '#221915',
    accentRgb: '197, 168, 128',
    badge: 'Heavy Biker & Highway Grade',
    idealForBiker: true,
    idealForDaily: false
  },
  {
    id: 'pullup-vintage',
    name: 'Waxed Heritage Pull-Up Leather',
    subtitle: '1.3mm Hot-Stuffed Vegetable/Chrome Tannage',
    category: 'heritage',
    thickness: '1.2 – 1.4 mm',
    temper: 'Supple, rich, warm and waxy to the touch',
    breakIn: '1 to 2 weeks',
    durability: 9,
    weatherResistance: 8.5,
    bestForUsage: 'All-season daily urban wear, vintage cafe racing, road trips, and leather purists who demand dynamic living color changes.',
    recommendedProducts: ['The Modern Cafe Racer', 'The Heritage Field Jacket', 'The Artisan Roadster'],
    tagline: 'Hot-stuffed with liquefied waxes and oils that breathe and self-heal with friction.',
    description: 'Impregnated through the core with natural oils and paraffin beeswax. When the leather is flexed, stressed, or stretched, the oils migrate across the grain, creating a breathtaking two-tone color burst known as "pull-up". Light scuffs can literally be erased simply by buffing them with warm thumb friction.',
    patinaBehavior: 'Accelerated, highly dramatic vintage evolution. High-friction areas lighten while recessed creases deepen into dark molasses tones.',
    careAdvice: 'Use neutral neatsfoot oil once a year. Avoid heavy detergents to preserve the internal wax saturation.',
    swatchHex: '#8C5635',
    accentRgb: '212, 155, 106',
    badge: 'Heritage & Living Patina',
    idealForBiker: true,
    idealForDaily: true
  },
  {
    id: 'nappa-lambskin',
    name: 'Italian Lambskin Nappa',
    subtitle: '0.8mm Ultra-Supple Semi-Aniline',
    category: 'luxury',
    thickness: '0.8 – 0.9 mm',
    temper: 'Buttery soft, fluid, featherlight drape',
    breakIn: 'Instant (Zero break-in required)',
    durability: 7.5,
    weatherResistance: 6.5,
    bestForUsage: 'Refined daily casual wear, luxury city commutes, dinner parties, spring/autumn layering, and effortless all-day mobility.',
    recommendedProducts: ['The Everyday Jacket', 'The Minimalist Bomber', 'The Tailored Moto'],
    tagline: 'Sensual, buttery softness that feels like a tailored second skin from minute one.',
    description: 'Tanned in the renowned mills of Tuscany from hand-selected young European lambskins. The delicate grain is dyed with translucent aniline pigments, offering an intoxicating silken hand feel and unmatched lightness. It provides zero boxiness or weight fatigue, moving effortlessly with every gesture.',
    patinaBehavior: 'Retains its velvety soft drape while taking on a delicate, subtle sheen at contact points. Elegant and discreet.',
    careAdvice: 'Treat with water-repellent spray prior to first wear. Store on a wide-shouldered wooden hanger to preserve drape.',
    swatchHex: '#141416',
    accentRgb: '229, 195, 140',
    badge: 'Daily Luxury & City Commute',
    idealForBiker: false,
    idealForDaily: true
  },
  {
    id: 'roughout-suede',
    name: 'Calfskin Roughout Reverse Hide',
    subtitle: '1.2mm Full-Thickness Reversed Calf',
    category: 'daily',
    thickness: '1.1 – 1.3 mm',
    temper: 'Velvety exterior with heavy core spine strength',
    breakIn: 'Under 10 days',
    durability: 8.5,
    weatherResistance: 7.0,
    bestForUsage: 'Statement casual wear, transitional spring/fall overshirts, tailored western profiles, and textured layering.',
    recommendedProducts: ['The Roughout Trucker', 'The Western Overshirt', 'The Suede Flight Jacket'],
    tagline: 'Indestructible full-grain strength hidden beneath a luxurious tactile velvet nap.',
    description: 'Unlike commercial split suede which shaves off the protective grain and weakens the skin, our Roughout is full-thickness calfskin turned inside-out. The velvety nap faces outward while the intact dense grain acts as an impenetrable backing against tears and structural sagging.',
    patinaBehavior: 'Matte texture softens further, burnishing subtly at the cuffs and collar into a deeply lived-in, storied aesthetic.',
    careAdvice: 'Brush regularly with a brass/crepe suede brush to revive the nap. Keep away from torrential rain.',
    swatchHex: '#A37953',
    accentRgb: '180, 130, 86',
    badge: 'Textured Statement & Transitional',
    idealForBiker: false,
    idealForDaily: true
  },
  {
    id: 'horsehide-vegtan',
    name: 'Front-Quarter Horsehide',
    subtitle: '1.5mm Traditional Bark Vegetable-Tanned',
    category: 'heavy',
    thickness: '1.3 – 1.5 mm',
    temper: 'Dense, rigid, sculpts like heavy armor',
    breakIn: '8 to 12 weeks of relentless wear',
    durability: 10,
    weatherResistance: 10,
    bestForUsage: 'Hardcore all-weather riders, vintage archive collectors, gale-force windproofing, and uncompromising heavy leather enthusiasts.',
    recommendedProducts: ['The 1930s D-Pocket Biker', 'The Armored Flight Aviator'],
    tagline: 'Legendary density with tight grain cells that roll into sculptural waves rather than fine wrinkles.',
    description: 'Sourced from heavy workhorse front-quarters and steeped in tree-bark vegetable tannins for over 60 days. Horsehide features an exceptionally dense cellular structure that repels water naturally and forms rolling, sculptural accordion waves along the sleeves that look like carved dark bronze.',
    patinaBehavior: 'Legendary "tea-core" aging: black surface dye gently wears away over decades under high abrasion to reveal warm brown undertones.',
    careAdvice: 'Wipe with damp sponge. Pure horsehide thrives on sweat, friction, and outdoor rain—wear it ruthlessly.',
    swatchHex: '#181210',
    accentRgb: '224, 200, 164',
    badge: 'Hardcore Collector & Weather Shield',
    idealForBiker: true,
    idealForDaily: false
  }
];

interface LeatherExplorerSectionProps {
  onConfigureWithLeather?: (leatherCode: string) => void;
  onExploreCollection?: () => void;
}

export const LeatherExplorerSection: React.FC<LeatherExplorerSectionProps> = ({
  onConfigureWithLeather,
  onExploreCollection
}) => {
  const [selectedLeatherId, setSelectedLeatherId] = useState<string>('cowhide-classic');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'heavy' | 'daily' | 'heritage' | 'luxury'>('all');

  // Interactive Recommender Quiz state
  const [showRecommender, setShowRecommender] = useState<boolean>(false);
  const [quizRiding, setQuizRiding] = useState<'biker' | 'daily' | 'formal'>('biker');
  const [quizBreakIn, setQuizBreakIn] = useState<'rugged' | 'medium' | 'instant'>('rugged');
  const [quizWeight, setQuizWeight] = useState<'heavy' | 'medium' | 'light'>('heavy');

  const activeProfile = LEATHER_PROFILES.find((p) => p.id === selectedLeatherId) || LEATHER_PROFILES[0];

  const filteredProfiles = categoryFilter === 'all'
    ? LEATHER_PROFILES
    : LEATHER_PROFILES.filter((p) => p.category === categoryFilter);

  // Compute recommendation from quiz
  const getQuizRecommendation = (): LeatherProfile => {
    if (quizRiding === 'biker') {
      return quizBreakIn === 'rugged' ? LEATHER_PROFILES[0] : LEATHER_PROFILES[1];
    }
    if (quizRiding === 'formal' || quizBreakIn === 'instant' || quizWeight === 'light') {
      return LEATHER_PROFILES[2]; // Nappa
    }
    if (quizWeight === 'medium') {
      return LEATHER_PROFILES[1]; // Pull-up
    }
    return LEATHER_PROFILES[3]; // Roughout
  };

  const handleApplyRecommendation = (rec: LeatherProfile) => {
    setSelectedLeatherId(rec.id);
    setShowRecommender(false);
  };

  const handleCustomLaunch = (profileId: string) => {
    if (onConfigureWithLeather) {
      onConfigureWithLeather(profileId);
    } else {
      const studio = document.getElementById('custom-fit');
      if (studio) {
        studio.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="leather-guide" className="relative w-full section-charcoal-atelier text-[#F5EFEB] py-24 sm:py-32 border-b border-[#C5A880]/25 overflow-hidden">
      {/* Seductive Ambient Atelier Lighting */}
      <div className="absolute top-0 right-1/4 w-[650px] h-[350px] bg-[#C5A880]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[550px] h-[350px] bg-[#8C5635]/18 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-10 border-b border-[#C5A880]/20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#C5A880] font-semibold mb-3">
              <Flame className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="text-metallic-brass font-bold">THE HIDE ARCHIVES</span>
              <span aria-hidden="true" className="text-[#C5A880]/50">·</span>
              <span>ATELIER LEATHER GUIDE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5EFEB] font-normal leading-tight tracking-tight drop-shadow-lg">
              Understanding The Skin You Wear
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#D4C4B4]/90 font-light leading-relaxed max-w-xl">
              Every hide communicates a distinct temperament. From armor-grade full-grain steerhide engineered to shield against highway wind, to buttery featherweight Italian lambskin tailored for city evenings—explore which leather matches your life.
            </p>
          </div>

          {/* Quick Helper Button: Recommender Finder */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setShowRecommender(!showRecommender)}
              className={`px-5 py-3 text-xs uppercase tracking-[0.16em] font-medium flex items-center gap-2.5 transition-all cursor-pointer border ${
                showRecommender
                  ? 'bg-[#C5A880] text-[#0D0E0F] border-[#C5A880] shadow-lg shadow-[#C5A880]/20'
                  : 'bg-[#1C1D20]/80 text-[#F5EFEB] border-[#C5A880]/30 hover:border-[#C5A880] hover:bg-[#25272B]'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-current" />
              <span>{showRecommender ? 'Close Leather Matcher' : 'Which Leather Is For You?'}</span>
            </button>
          </div>
        </div>

        {/* Interactive Matcher Recommender Box (Collapsible) */}
        {showRecommender && (
          <div className="mb-14 p-6 sm:p-8 bg-[#18191D] border border-[#C5A880]/40 shadow-2xl relative animate-fadeIn">
            <div className="flex items-center justify-between pb-4 border-b border-[#C5A880]/20 mb-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A880] font-semibold">
                <Sliders className="w-4 h-4 text-[#C5A880]" />
                <span>Interactive Leather Matcher</span>
              </div>
              <span className="text-[11px] text-[#D4C4B4]/70">Answer 3 questions for a personalized recommendation</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Question 1: Use Case */}
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-wider text-[#F5EFEB] font-medium block">
                  1. How will you wear this jacket?
                </label>
                <div className="space-y-2">
                  <button
                    onClick={() => setQuizRiding('biker')}
                    className={`w-full p-3 text-left text-xs transition-all border cursor-pointer ${
                      quizRiding === 'biker'
                        ? 'bg-[#C5A880]/20 border-[#C5A880] text-[#F5EFEB]'
                        : 'bg-[#131416] border-[#D4C4B4]/15 text-[#D4C4B4] hover:border-[#C5A880]/40'
                    }`}
                  >
                    <div className="font-semibold text-sm mb-0.5">Motorcycle / Heavy Duty</div>
                    <div className="text-[11px] opacity-80">Highway wind resistance, maximum abrasion safety, all-weather durability.</div>
                  </button>
                  <button
                    onClick={() => setQuizRiding('daily')}
                    className={`w-full p-3 text-left text-xs transition-all border cursor-pointer ${
                      quizRiding === 'daily'
                        ? 'bg-[#C5A880]/20 border-[#C5A880] text-[#F5EFEB]'
                        : 'bg-[#131416] border-[#D4C4B4]/15 text-[#D4C4B4] hover:border-[#C5A880]/40'
                    }`}
                  >
                    <div className="font-semibold text-sm mb-0.5">Urban Everyday Commute</div>
                    <div className="text-[11px] opacity-80">Comfortable daily wear, city walks, autumn/winter layering.</div>
                  </button>
                  <button
                    onClick={() => setQuizRiding('formal')}
                    className={`w-full p-3 text-left text-xs transition-all border cursor-pointer ${
                      quizRiding === 'formal'
                        ? 'bg-[#C5A880]/20 border-[#C5A880] text-[#F5EFEB]'
                        : 'bg-[#131416] border-[#D4C4B4]/15 text-[#D4C4B4] hover:border-[#C5A880]/40'
                    }`}
                  >
                    <div className="font-semibold text-sm mb-0.5">Refined Style & Evening Out</div>
                    <div className="text-[11px] opacity-80">Lightweight, drape like tailoring, zero stiffness, elegant finish.</div>
                  </button>
                </div>
              </div>

              {/* Question 2: Break-in */}
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-wider text-[#F5EFEB] font-medium block">
                  2. Your stance on break-in time?
                </label>
                <div className="space-y-2">
                  <button
                    onClick={() => setQuizBreakIn('rugged')}
                    className={`w-full p-3 text-left text-xs transition-all border cursor-pointer ${
                      quizBreakIn === 'rugged'
                        ? 'bg-[#C5A880]/20 border-[#C5A880] text-[#F5EFEB]'
                        : 'bg-[#131416] border-[#D4C4B4]/15 text-[#D4C4B4] hover:border-[#C5A880]/40'
                    }`}
                  >
                    <div className="font-semibold text-sm mb-0.5">I love breaking in heavy leather</div>
                    <div className="text-[11px] opacity-80">Willing to wear for 4-6 weeks to earn a customized mold.</div>
                  </button>
                  <button
                    onClick={() => setQuizBreakIn('medium')}
                    className={`w-full p-3 text-left text-xs transition-all border cursor-pointer ${
                      quizBreakIn === 'medium'
                        ? 'bg-[#C5A880]/20 border-[#C5A880] text-[#F5EFEB]'
                        : 'bg-[#131416] border-[#D4C4B4]/15 text-[#D4C4B4] hover:border-[#C5A880]/40'
                    }`}
                  >
                    <div className="font-semibold text-sm mb-0.5">Moderate break-in (1-2 weeks)</div>
                    <div className="text-[11px] opacity-80">Pliable from week two with immediate natural comfort.</div>
                  </button>
                  <button
                    onClick={() => setQuizBreakIn('instant')}
                    className={`w-full p-3 text-left text-xs transition-all border cursor-pointer ${
                      quizBreakIn === 'instant'
                        ? 'bg-[#C5A880]/20 border-[#C5A880] text-[#F5EFEB]'
                        : 'bg-[#131416] border-[#D4C4B4]/15 text-[#D4C4B4] hover:border-[#C5A880]/40'
                    }`}
                  >
                    <div className="font-semibold text-sm mb-0.5">Zero break-in / Butter soft now</div>
                    <div className="text-[11px] opacity-80">Must be comfortable immediately out of the box.</div>
                  </button>
                </div>
              </div>

              {/* Question 3: Weight Preference */}
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-wider text-[#F5EFEB] font-medium block">
                  3. Leather weight preference?
                </label>
                <div className="space-y-2">
                  <button
                    onClick={() => setQuizWeight('heavy')}
                    className={`w-full p-3 text-left text-xs transition-all border cursor-pointer ${
                      quizWeight === 'heavy'
                        ? 'bg-[#C5A880]/20 border-[#C5A880] text-[#F5EFEB]'
                        : 'bg-[#131416] border-[#D4C4B4]/15 text-[#D4C4B4] hover:border-[#C5A880]/40'
                    }`}
                  >
                    <div className="font-semibold text-sm mb-0.5">Heavy Armor (1.4mm - 1.6mm)</div>
                    <div className="text-[11px] opacity-80">Substantial reassuring weight on shoulders.</div>
                  </button>
                  <button
                    onClick={() => setQuizWeight('medium')}
                    className={`w-full p-3 text-left text-xs transition-all border cursor-pointer ${
                      quizWeight === 'medium'
                        ? 'bg-[#C5A880]/20 border-[#C5A880] text-[#F5EFEB]'
                        : 'bg-[#131416] border-[#D4C4B4]/15 text-[#D4C4B4] hover:border-[#C5A880]/40'
                    }`}
                  >
                    <div className="font-semibold text-sm mb-0.5">Medium Versatile (1.2mm - 1.3mm)</div>
                    <div className="text-[11px] opacity-80">Balanced year-round versatility.</div>
                  </button>
                  <button
                    onClick={() => setQuizWeight('light')}
                    className={`w-full p-3 text-left text-xs transition-all border cursor-pointer ${
                      quizWeight === 'light'
                        ? 'bg-[#C5A880]/20 border-[#C5A880] text-[#F5EFEB]'
                        : 'bg-[#131416] border-[#D4C4B4]/15 text-[#D4C4B4] hover:border-[#C5A880]/40'
                    }`}
                  >
                    <div className="font-semibold text-sm mb-0.5">Featherlight Luxury (0.8mm)</div>
                    <div className="text-[11px] opacity-80">Drapes gracefully, no muscle strain.</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Quiz Match Result Banner */}
            {(() => {
              const rec = getQuizRecommendation();
              return (
                <div className="p-4 sm:p-5 bg-[#121316] border border-[#C5A880] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A880] font-semibold block mb-1">
                      Our Master Tailor Recommends
                    </span>
                    <h4 className="font-serif text-lg sm:text-xl text-[#F5EFEB]">
                      {rec.name} ({rec.thickness})
                    </h4>
                    <p className="text-xs text-[#D4C4B4] mt-0.5">{rec.tagline}</p>
                  </div>
                  <button
                    onClick={() => handleApplyRecommendation(rec)}
                    className="btn-ivory-on-dark px-6 py-3 text-xs uppercase tracking-wider font-semibold whitespace-nowrap cursor-pointer shrink-0"
                  >
                    View Recommended Hide
                  </button>
                </div>
              );
            })()}
          </div>
        )}

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10">
          <span className="text-xs font-mono uppercase text-[#C5A880] mr-2 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" /> Filter by Purpose:
          </span>
          {[
            { id: 'all', label: 'All 5 Atelier Hides' },
            { id: 'heavy', label: 'Biker & Heavy Armor' },
            { id: 'daily', label: 'Daily Urban Wear' },
            { id: 'heritage', label: 'Waxed Heritage & Patina' },
            { id: 'luxury', label: 'Ultra-Supple Luxury' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoryFilter(cat.id as any)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-all cursor-pointer border ${
                categoryFilter === cat.id
                  ? 'bg-[#C5A880] text-[#0D0E0F] border-[#C5A880] shadow-md shadow-[#C5A880]/20 font-semibold'
                  : 'bg-[#18191C] text-[#D4C4B4] border-[#C5A880]/20 hover:border-[#C5A880]/50 hover:text-[#F5EFEB]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Main Leather Showcase: Master Detail Card + Quick Selection Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column (5 Cols): Hide Navigation Cards */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-[11px] font-mono uppercase tracking-widest text-[#C5A880] mb-2 font-semibold">
              Select A Hide To Inspect Specifications
            </p>
            {filteredProfiles.map((profile) => {
              const isSelected = profile.id === selectedLeatherId;
              return (
                <div
                  key={profile.id}
                  onClick={() => setSelectedLeatherId(profile.id)}
                  className={`p-4 sm:p-5 transition-all duration-300 border cursor-pointer relative overflow-hidden group ${
                    isSelected
                      ? 'bg-[#1B1C20] border-[#C5A880] shadow-2xl shadow-black/80 ring-1 ring-[#C5A880]/40'
                      : 'bg-[#151619] border-[#C5A880]/15 hover:border-[#C5A880]/40 hover:bg-[#18191D]'
                  }`}
                >
                  {/* Active Indicator Bar */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#C5A880]" />
                  )}

                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-white/20 shrink-0 shadow-sm"
                          style={{ backgroundColor: profile.swatchHex }}
                        />
                        <h3 className={`font-serif text-lg sm:text-xl font-normal ${isSelected ? 'text-[#F5EFEB]' : 'text-[#D4C4B4] group-hover:text-[#F5EFEB]'}`}>
                          {profile.name}
                        </h3>
                      </div>
                      <p className="text-xs text-[#C5A880] font-light">
                        {profile.subtitle}
                      </p>
                    </div>

                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 bg-[#0D0E0F] border border-[#C5A880]/30 text-[#C5A880] font-medium shrink-0">
                      {profile.thickness}
                    </span>
                  </div>

                  <p className="mt-3 text-xs text-[#D4C4B4]/80 font-light line-clamp-2 leading-relaxed">
                    {profile.tagline}
                  </p>

                  <div className="mt-3 pt-3 border-t border-[#C5A880]/15 flex items-center justify-between text-[11px]">
                    <span className="text-[#C5A880] font-medium flex items-center gap-1.5">
                      <Shield className="w-3 h-3 text-[#C5A880]" />
                      {profile.badge}
                    </span>
                    <span className="text-[#F5EFEB]/60 group-hover:text-[#F5EFEB] flex items-center gap-1">
                      Inspect Hide <ChevronRight className="w-3 h-3 text-[#C5A880]" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column (7 Cols): Deep Spec Inspector for Selected Hide */}
          <div className="lg:col-span-7 bg-[#16171A] border border-[#C5A880]/30 p-6 sm:p-8 lg:p-10 shadow-2xl relative">
            {/* Ambient Accent Glow based on leather tone */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[110px] opacity-20 pointer-events-none"
              style={{ backgroundColor: `rgb(${activeProfile.accentRgb})` }}
            />

            {/* Profile Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span className="px-3 py-1 text-[11px] font-mono uppercase tracking-widest bg-[#C5A880]/15 border border-[#C5A880] text-[#C5A880] font-semibold">
                {activeProfile.badge}
              </span>
              <div className="flex items-center gap-2 text-xs text-[#D4C4B4]">
                <span className="font-mono text-[#C5A880]">Thickness:</span>
                <span className="font-semibold text-[#F5EFEB]">{activeProfile.thickness}</span>
              </div>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F5EFEB] mb-2 font-normal">
              {activeProfile.name}
            </h3>
            <p className="text-sm text-[#C5A880] font-light mb-6">
              {activeProfile.subtitle}
            </p>

            <p className="text-sm sm:text-base text-[#D4C4B4] font-light leading-relaxed mb-8 pb-6 border-b border-[#C5A880]/20">
              {activeProfile.description}
            </p>

            {/* Metric Ratings: Durability & Weather Resistance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-[#111214] border border-[#C5A880]/20">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="uppercase tracking-wider text-[#D4C4B4] font-medium">Abrasion & Durability</span>
                  <span className="font-mono text-[#C5A880] font-bold">{activeProfile.durability} / 10</span>
                </div>
                <div className="w-full bg-[#202124] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#C5A880] h-full transition-all duration-700"
                    style={{ width: `${activeProfile.durability * 10}%` }}
                  />
                </div>
                <span className="text-[10px] text-[#D4C4B4]/70 mt-1.5 block">
                  {activeProfile.durability >= 9.5 ? 'Indestructible highway armor' : activeProfile.durability >= 8.5 ? 'Heavy everyday durability' : 'Refined luxury drape'}
                </span>
              </div>

              <div className="p-4 bg-[#111214] border border-[#C5A880]/20">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="uppercase tracking-wider text-[#D4C4B4] font-medium">Weather / Gale Barrier</span>
                  <span className="font-mono text-[#C5A880] font-bold">{activeProfile.weatherResistance} / 10</span>
                </div>
                <div className="w-full bg-[#202124] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#C5A880] h-full transition-all duration-700"
                    style={{ width: `${activeProfile.weatherResistance * 10}%` }}
                  />
                </div>
                <span className="text-[10px] text-[#D4C4B4]/70 mt-1.5 block">
                  {activeProfile.weatherResistance >= 9 ? 'Impervious to wind chill' : activeProfile.weatherResistance >= 7.5 ? 'Water-shedding waxed hide' : 'Light shower protection'}
                </span>
              </div>
            </div>

            {/* Detailed Spec Sheet */}
            <div className="space-y-4 mb-8 text-xs">
              <div className="p-4 bg-[#121316] border-l-2 border-[#C5A880] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="font-mono uppercase text-[#C5A880] tracking-wider font-semibold">Recommended Usage:</span>
                <span className="text-[#F5EFEB] font-normal text-right">{activeProfile.bestForUsage}</span>
              </div>

              <div className="p-4 bg-[#121316] border-l-2 border-[#C5A880] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="font-mono uppercase text-[#C5A880] tracking-wider font-semibold">Break-In Duration:</span>
                <span className="text-[#F5EFEB] font-normal text-right">{activeProfile.breakIn}</span>
              </div>

              <div className="p-4 bg-[#121316] border-l-2 border-[#C5A880] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="font-mono uppercase text-[#C5A880] tracking-wider font-semibold">Living Patina Character:</span>
                <span className="text-[#F5EFEB] font-normal text-right">{activeProfile.patinaBehavior}</span>
              </div>

              <div className="p-4 bg-[#121316] border-l-2 border-[#C5A880] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="font-mono uppercase text-[#C5A880] tracking-wider font-semibold">Master Tailor Care:</span>
                <span className="text-[#F5EFEB] font-normal text-right">{activeProfile.careAdvice}</span>
              </div>
            </div>

            {/* Recommended Products for This Hide */}
            <div className="mb-8">
              <p className="text-[11px] font-mono uppercase tracking-widest text-[#C5A880] mb-2.5 font-semibold">
                Recommended Silhouettes For This Hide
              </p>
              <div className="flex flex-wrap gap-2">
                {activeProfile.recommendedProducts.map((prodName, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-[#1C1D21] border border-[#C5A880]/30 text-xs text-[#F5EFEB] font-medium"
                  >
                    ✓ {prodName}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Actions */}
            <div className="pt-6 border-t border-[#C5A880]/20 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => handleCustomLaunch(activeProfile.id)}
                className="btn-ivory-on-dark px-7 py-4 text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2.5 cursor-pointer shadow-xl"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#0D0E0F]" />
                <span>Configure Jacket in {activeProfile.name.split(' ')[0]}</span>
                <ArrowRight className="w-4 h-4 text-[#0D0E0F]" />
              </button>

              <button
                onClick={onExploreCollection}
                className="btn-outline-on-dark px-6 py-4 text-xs uppercase tracking-[0.16em] font-semibold flex items-center justify-center cursor-pointer"
              >
                <span>View Matching Silhouettes</span>
              </button>
            </div>
          </div>
        </div>

        {/* Master Comparison Matrix Table */}
        <div className="bg-[#151619] border border-[#C5A880]/20 p-6 sm:p-8">
          <div className="flex items-center gap-2.5 mb-6 text-xs font-mono uppercase tracking-wider text-[#C5A880] font-semibold">
            <Award className="w-4 h-4 text-[#C5A880]" />
            <span>Master Hide Comparison Matrix</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#C5A880]/30 text-[#C5A880] font-mono uppercase text-[11px]">
                  <th className="py-3 px-4">Leather Type</th>
                  <th className="py-3 px-4">Thickness</th>
                  <th className="py-3 px-4">Initial Feel</th>
                  <th className="py-3 px-4">Break-In</th>
                  <th className="py-3 px-4">Biker / Highway Rating</th>
                  <th className="py-3 px-4">Daily Comfort</th>
                  <th className="py-3 px-4 text-right">Recommended For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#C5A880]/15 text-[#D4C4B4]">
                {LEATHER_PROFILES.map((p) => (
                  <tr
                    key={p.id}
                    onClick={() => setSelectedLeatherId(p.id)}
                    className={`cursor-pointer transition-colors ${
                      selectedLeatherId === p.id ? 'bg-[#C5A880]/10 text-[#F5EFEB]' : 'hover:bg-[#1B1C20]'
                    }`}
                  >
                    <td className="py-3.5 px-4 font-serif text-sm font-normal text-[#F5EFEB] flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.swatchHex }} />
                      {p.name}
                    </td>
                    <td className="py-3.5 px-4 font-mono">{p.thickness}</td>
                    <td className="py-3.5 px-4">{p.temper.split(',')[0]}</td>
                    <td className="py-3.5 px-4">{p.breakIn}</td>
                    <td className="py-3.5 px-4 font-mono">
                      {p.idealForBiker ? (
                        <span className="text-[#C5A880] font-semibold">★★★★★ Certified</span>
                      ) : (
                        <span className="text-[#D4C4B4]/50">Casual only</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 font-mono">
                      {p.idealForDaily ? (
                        <span className="text-emerald-400">Excellent (Effortless)</span>
                      ) : (
                        <span className="text-amber-300">Demanding (Requires wear)</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-right font-medium text-[#F5EFEB]">
                      {p.category === 'heavy' ? 'Motorcycle & Harsh Climate' : p.category === 'luxury' ? 'Evening & Daily Drape' : p.category === 'heritage' ? 'Living Patina & Everyday' : 'Textured Statement'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
