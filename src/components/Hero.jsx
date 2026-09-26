'use client';

export default function Hero() {
  return (
    <section className="relative w-full max-w-[1500px] mx-auto px-5 sm:px-12 lg:px-20 min-h-[calc(100vh-60px)] lg:h-[calc(100vh-60px)] flex flex-col lg:block overflow-visible">
      
      {/* ========== MOBILE LAYOUT (stacked, visible below lg) ========== */}
      <div className="flex flex-col items-center text-center gap-6 pt-8 pb-4 lg:hidden">
        
        {/* Mobile Heading */}
        <h1 className="hero-heading text-[32px] sm:text-[40px] font-bold italic text-[#0c2752] leading-[1.15] sm:leading-[1.18] tracking-[-0.03em]">
          <span className="block whitespace-nowrap">
            True{' '}
            <span className="relative inline-block text-[#0284c7]">
              smiles
              <svg 
                viewBox="0 0 160 30" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                aria-hidden="true" 
                className="absolute left-[48%] -translate-x-1/2 top-[95%] w-[75%] max-w-[100px] h-auto pointer-events-none select-none text-[#0284c7]"
              >
                <path 
                  d="M 6 6 C 36 21 56 25 80 25 C 104 25 124 21 154 6" 
                  stroke="currentColor" 
                  strokeWidth="5" 
                  strokeLinecap="round" 
                />
              </svg>
            </span>
          </span>
          <span className="block whitespace-nowrap">are curated</span>
          <span className="block whitespace-nowrap text-[#0c2752]">not</span>
          <span className="block whitespace-nowrap">merely corrected</span>
        </h1>

        <p className="text-[13px] sm:text-[14px] text-[#475569] font-normal leading-[1.7] max-w-[320px] mt-1">
          We're a premium orthodontic and aesthetic studio crafting confident smiles for those who settle for nothing ordinary.
        </p>

        {/* Mobile Tooth Image */}
        <div className="w-full flex justify-center py-2 select-none pointer-events-none">
          <img 
            src="/assets/transparent-tooth.webp" 
            alt="3D Luminous Crystal Tooth" 
            className="w-[280px] sm:w-[340px] h-auto object-contain tooth-float drop-shadow-[0_15px_35px_rgba(2,132,199,0.22)]" 
          />
        </div>

        {/* Mobile Right Heading + CTA */}
        <h2 className="text-[30px] sm:text-[36px] font-bold text-[#0c2752] leading-[1.06] tracking-[-0.03em]">
          Modern dentistry<br />
          personal touch
        </h2>

        <a href="#schedule" className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-white text-[14px] font-medium bg-gradient-to-r from-[#0c8fd1] via-[#0670a8] to-[#0a2754] shadow-lg shadow-sky-700/25 active:scale-95 transition-all duration-300 group">
          <svg className="w-[18px] h-[18px] text-sky-200" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="3"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
            <circle cx="8" cy="14" r="1" fill="currentColor"></circle>
            <circle cx="12" cy="14" r="1" fill="currentColor"></circle>
            <circle cx="16" cy="14" r="1" fill="currentColor"></circle>
            <circle cx="8" cy="18" r="1" fill="currentColor"></circle>
            <circle cx="12" cy="18" r="1" fill="currentColor"></circle>
          </svg>
          <span>Schedule a visit</span>
        </a>
      </div>

      {/* ========== DESKTOP LAYOUT (absolute positioned, visible at lg+) ========== */}
      <div className="hidden lg:block absolute inset-0 px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20">

        {/* LEFT COLUMN */}
        <div className="absolute left-6 sm:left-10 lg:left-12 xl:left-16 2xl:left-20 top-[6%] lg:top-[7%] xl:top-[8%] z-20 max-w-[440px] lg:max-w-[480px] xl:max-w-[540px] 2xl:max-w-[620px]">
          <h1 className="hero-heading text-[44px] lg:text-[52px] xl:text-[60px] 2xl:text-[68px] font-bold italic text-[#0c2752] leading-[1.12] xl:leading-[1.14] tracking-[-0.03em]">
            <span className="block whitespace-nowrap pb-1">
              True{' '}
              <span className="relative inline-block text-[#0284c7]">
                smiles
                <svg 
                  viewBox="0 0 160 30" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  aria-hidden="true" 
                  className="absolute left-[48%] -translate-x-1/2 top-[92%] w-[74%] max-w-[130px] h-auto pointer-events-none select-none text-[#0284c7]"
                >
                  <path 
                    d="M 6 6 C 36 21 56 25 80 25 C 104 25 124 21 154 6" 
                    stroke="currentColor" 
                    strokeWidth="5" 
                    strokeLinecap="round" 
                  />
                </svg>
              </span>
            </span>
            <span className="block whitespace-nowrap">are curated</span>
            <span className="block whitespace-nowrap text-[#0c2752]">not</span>
            <span className="block whitespace-nowrap">merely corrected</span>
          </h1>

          <p className="mt-5 xl:mt-6 text-[13.5px] lg:text-[14.5px] xl:text-[15.5px] text-[#475569] font-normal leading-[1.7] max-w-[280px] lg:max-w-[300px] xl:max-w-[340px]">
            We're a premium orthodontic and aesthetic studio crafting confident smiles for those who settle for nothing ordinary.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="absolute left-[65%] xl:left-[66%] 2xl:left-[67%] top-[18%] lg:top-[20%] xl:top-[22%] z-20 max-w-[380px] lg:max-w-[440px] xl:max-w-[500px] 2xl:max-w-[540px] text-left">
          <h2 className="text-[38px] lg:text-[44px] xl:text-[50px] 2xl:text-[56px] font-bold text-[#0c2752] leading-[1.06] tracking-[-0.03em]">
            Modern dentistry<br />
            personal touch
          </h2>

          <a href="#schedule" className="mt-6 xl:mt-8 inline-flex items-center gap-3 px-6 xl:px-7 py-3 xl:py-3.5 rounded-full text-white text-[13.5px] xl:text-[14.5px] font-medium bg-gradient-to-r from-[#0c8fd1] via-[#0670a8] to-[#0a2754] shadow-lg shadow-sky-700/25 hover:shadow-xl hover:shadow-sky-700/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group">
            <svg className="w-[18px] h-[18px] text-sky-200 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="3"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
              <circle cx="8" cy="14" r="1" fill="currentColor"></circle>
              <circle cx="12" cy="14" r="1" fill="currentColor"></circle>
              <circle cx="16" cy="14" r="1" fill="currentColor"></circle>
              <circle cx="8" cy="18" r="1" fill="currentColor"></circle>
              <circle cx="12" cy="18" r="1" fill="currentColor"></circle>
            </svg>
            <span>Schedule a visit</span>
          </a>
        </div>

        {/* CENTER: Crystal Tooth */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[0%] lg:top-[1%] bottom-0 z-10 flex items-center justify-center pointer-events-none select-none">
          <img 
            src="/assets/transparent-tooth.webp" 
            alt="3D Luminous Crystal Tooth" 
            className="w-[440px] lg:w-[500px] xl:w-[580px] 2xl:w-[620px] h-auto object-contain tooth-float drop-shadow-[0_25px_50px_rgba(2,132,199,0.22)]" 
          />
        </div>

      </div>

    </section>
  );
}
