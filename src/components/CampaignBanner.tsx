import React from 'react';

interface CampaignBannerProps {
  onFindYourVeridor: () => void;
}

export const CampaignBanner: React.FC<CampaignBannerProps> = ({
  onFindYourVeridor
}) => {
  return (
    <section className="relative w-full min-h-[75vh] flex items-center justify-center overflow-hidden bg-[#171819]">
      {/* Edge-to-Edge Cinematic Fashion Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/campaign_cinematic_editorial_1791560536458.jpg"
          alt="Veridor brand campaign"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-90 transition-transform duration-1000 ease-out hover:scale-102"
        />

        {/* Ambient Dark Scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171819] via-[#171819]/40 to-[#171819]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171819]/60 via-transparent to-[#171819]/60" />
      </div>

      {/* Campaign Overlay Text */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-[#F2EEE8] py-24">
        <span className="text-xs uppercase tracking-[0.3em] text-[#A88770] font-medium block mb-4">
          CAMPAIGN CHAPTER I
        </span>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light mb-6 tracking-tight leading-[1.08] [text-wrap:balance]">
          Wear it your way.
        </h2>

        <p className="text-base sm:text-xl text-[#F2EEE8]/85 font-light leading-relaxed max-w-lg mx-auto mb-10">
          A leather piece should become part of your story.
        </p>

        <div>
          <button
            onClick={onFindYourVeridor}
            className="btn-ivory-on-dark px-10 py-4 rounded-none text-xs tracking-[0.22em] uppercase font-semibold inline-block cursor-pointer"
          >
            Find Your Veridor
          </button>
        </div>
      </div>
    </section>
  );
};
