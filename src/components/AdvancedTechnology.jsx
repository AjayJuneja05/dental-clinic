'use client';

import { useState, useRef, useEffect } from 'react';

const TECH_FEATURES = [
  {
    id: 'ai',
    num: '1.',
    title: 'AI-Assisted Diagnostics',
    subtitle: 'Smart algorithms for faster, more accurate analysis and detection.',
    details: 'Neural network computer vision cross-analyzes digital radiographs in real-time, detecting micro-cavities, root infections, and bone loss at Stage 0 before symptoms appear.',
    badges: ['99.4% Detection Accuracy', 'Instant Margin Analysis', 'Automated Pathology Mapping'],
    image: '/assets/tech-ai-diagnostics.webp',
    imageAlt: 'AI neural network radiographic dental analysis detecting cavities and micro fractures',
    badgeTitle: 'AI Neural Diagnostics',
    badgeDesc: 'Sub-millimeter micro-cavity and root detection at Stage 0.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="4"></rect>
        <circle cx="8.5" cy="16" r="1.5" fill="currentColor"></circle>
        <circle cx="15.5" cy="16" r="1.5" fill="currentColor"></circle>
        <path d="M9 7l1-3h4l1 3"></path>
        <line x1="12" y1="4" x2="12" y2="11"></line>
      </svg>
    ),
  },
  {
    id: '3d-imaging',
    num: '2.',
    title: '3D Dental Imaging',
    subtitle: 'High-resolution 3D scans for detailed visualization and precise diagnosis.',
    details: 'Volumetric Cone-Beam CT technology generates a complete 360° digital model of your jawbone, nerve pathways, and tooth roots with up to 80% lower radiation than standard x-rays.',
    badges: ['360° Volumetric Model', '80% Lower Radiation', 'Sub-Millimeter Clarity'],
    image: '/assets/tech-3d-imaging.webp',
    imageAlt: '3D volumetric Cone-Beam CT dental scan showing teeth roots and jawbone',
    badgeTitle: '3D Volumetric CBCT Scan',
    badgeDesc: 'Complete 360° digital jawbone & nerve pathway model.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4"></path>
        <path d="M12 7l5 3-5 3-5-3 5-3z"></path>
        <path d="M7 10v4l5 3 5-3v-4"></path>
      </svg>
    ),
  },
  {
    id: 'equipment',
    num: '3.',
    title: 'Modern Dental Equipment',
    subtitle: 'State-of-the-art tools for safer, faster and more comfortable treatments.',
    details: 'Next-generation optical wands replace gooey impression trays entirely. Gentle piezo-ultrasonic scalers and soft-tissue precision lasers ensure maximum comfort with zero pain.',
    badges: ['Zero Impression Trays', 'Soft-Tissue Laser Precision', 'Gentle Ultrasonic Care'],
    image: '/assets/tech-modern-equipment.webp',
    imageAlt: 'Modern luxury dental operatory equipment with surgical lamp and ergonomic chair',
    badgeTitle: 'Next-Gen Operatory Tools',
    badgeDesc: 'Gentle piezo-ultrasonic scalers and precision soft-tissue laser.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 4.5l5 5L7 22H2v-5L14.5 4.5z"></path>
        <path d="M11.5 7.5l5 5"></path>
      </svg>
    ),
  },
  {
    id: 'planning',
    num: '4.',
    title: 'Precise Treatment Planning',
    subtitle: 'Digital planning for predictable outcomes and beautiful smiles.',
    details: 'Advanced Digital Smile Design software lets you preview your final veneers or aligner smile on screen before treatment begins, paired with 3D surgical guides for exact placement.',
    badges: ['3D Smile Simulation Preview', 'Computer-Guided Alignment', '50% Faster Healing'],
    image: '/assets/tech-treatment-planning.webp',
    imageAlt: 'Digital smile design software interface with 3D tooth alignment and golden ratio mapping',
    badgeTitle: 'Digital Smile Simulation',
    badgeDesc: 'Virtual smile design and computer-guided 3D treatment alignment.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.5 2 6 4.5 6 8c0 4 2 8 3 12 0.5 2 1.5 2 2 0l1-5 1 5c0.5 2 1.5 2 2 0 1-4 3-8 3-12 0-3.5-2.5-6-6-6z"></path>
        <path d="M9 9l2 2 4-4"></path>
      </svg>
    ),
  },
];

const BENEFIT_PILLARS = [
  {
    title: 'More Accurate',
    description: 'Precise diagnosis for better treatment.',
    icon: (
      <svg className="w-6 h-6 text-[#0066cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Time-Saving',
    description: 'Advanced technology for faster results.',
    icon: (
      <svg className="w-6 h-6 text-[#0066cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    )
  },
  {
    title: 'More Comfortable',
    description: 'Minimally invasive and patient-friendly.',
    icon: (
      <svg className="w-6 h-6 text-[#0066cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9"></circle>
        <path strokeLinecap="round" d="M8 14s1.5 2 4 2 4-2 4-2"></path>
        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3"></line>
        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3"></line>
      </svg>
    )
  },
  {
    title: 'Better Outcomes',
    description: 'Predictable, long-lasting and beautiful smiles.',
    icon: (
      <svg className="w-6 h-6 text-[#0066cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="6"></circle>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"></path>
      </svg>
    )
  }
];

export default function AdvancedTechnology() {
  const [expandedIndex, setExpandedIndex] = useState(0); // First item expanded by default
  const [selectedTech, setSelectedTech] = useState(0);
  const [cardsOffset, setCardsOffset] = useState(306);

  const gridContainerRef = useRef(null);
  const cardsContainerRef = useRef(null);

  const handleToggle = (index) => {
    setSelectedTech(index);
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    const updateOffset = () => {
      if (cardsContainerRef.current && gridContainerRef.current) {
        if (window.innerWidth >= 1024) {
          const cardsRect = cardsContainerRef.current.getBoundingClientRect();
          const gridRect = gridContainerRef.current.getBoundingClientRect();
          const offset = Math.round(cardsRect.top - gridRect.top);
          if (offset > 0) {
            setCardsOffset(offset);
          }
        } else {
          setCardsOffset(0);
        }
      }
    };
    updateOffset();
    window.addEventListener('resize', updateOffset);
    return () => window.removeEventListener('resize', updateOffset);
  }, []);

  const activeIndex = expandedIndex !== null ? expandedIndex : selectedTech;
  const currentTech = TECH_FEATURES[activeIndex] || TECH_FEATURES[0];

  return (
    <section id="technology" className="w-full py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-[#edf6ff] via-[#f6faff] to-[#e9f4ff] border-y border-sky-100/80 relative overflow-hidden select-none">
      
      {/* Background Soft Skyblue Ambient Glows */}
      <div className="absolute top-1/4 left-5 w-[450px] h-[450px] bg-sky-200/50 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-10 right-5 w-[450px] h-[450px] bg-blue-200/40 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="w-full max-w-[1500px] mx-auto px-5 sm:px-12 lg:px-20 relative z-10">
        
        {/* Top Grid: Section on LEFT side & Image on RIGHT side starting directly at the top of the first feature section */}
        <div ref={gridContainerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          
          {/* LEFT SIDE (Span 5, Order 1): Section Header, Subtitle & 4 Expandable Cards */}
          <div className="lg:col-span-5 order-1 flex flex-col justify-start">
            
            {/* Pill Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-200 text-[#0066cc] text-[12px] font-bold tracking-wide uppercase mb-5 self-start shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0066cc] animate-pulse"></span>
              <span>Advanced Technology</span>
            </div>

            {/* Headline */}
            <h2 className="text-[34px] sm:text-[44px] lg:text-[48px] font-bold text-[#07234b] leading-[1.1] tracking-[-0.035em]">
              Modern Technology for <br />
              Precise Dental Care
            </h2>

            {/* Blue Decorative Accent Line */}
            <div className="w-12 h-1 bg-[#0066cc] rounded-full my-5 shadow-xs"></div>

            {/* Subtitle Body */}
            <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.65] font-normal mb-8 max-w-[520px]">
              We combine advanced digital technology with experienced dental professionals to deliver accurate diagnoses, comfortable treatments and exceptional results for every patient.
            </p>

            {/* 4 Expandable Cards with Signature Blue Touch */}
            <div ref={cardsContainerRef} className="space-y-4">
              {TECH_FEATURES.map((item, idx) => {
                const isExpanded = expandedIndex === idx;
                const isSelected = activeIndex === idx;
                return (
                  <div
                    key={item.id}
                    onClick={() => handleToggle(idx)}
                    className={`rounded-[22px] border transition-all duration-300 overflow-hidden cursor-pointer ${
                      isExpanded
                        ? 'bg-white border-[#0066cc] shadow-[0_12px_32px_-8px_rgba(0,102,204,0.18)] ring-2 ring-sky-200 scale-[1.01]'
                        : isSelected
                        ? 'bg-white/95 border-sky-300 shadow-sm'
                        : 'bg-white/90 hover:bg-white border-sky-100 hover:border-sky-200 shadow-sm'
                    }`}
                  >
                    {/* Header Row */}
                    <div className="p-4 sm:p-4.5 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5 sm:gap-4 flex-1 min-w-0">
                        {/* Icon Container */}
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          isExpanded
                            ? 'bg-[#0066cc] text-white shadow-md shadow-blue-500/25'
                            : 'bg-sky-50 text-[#0066cc]'
                        }`}>
                          {item.icon}
                        </div>

                        {/* Title & Subtitle */}
                        <div className="flex-1 min-w-0">
                          <h4 className={`text-[15px] sm:text-[16px] font-bold leading-tight transition-colors ${
                            isExpanded ? 'text-[#0066cc]' : 'text-[#07234b]'
                          }`}>
                            {item.num} {item.title}
                          </h4>
                          <p className="text-[12px] sm:text-[12.5px] text-slate-500 leading-snug mt-1 line-clamp-2">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Animated Arrow Button */}
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isExpanded
                          ? 'bg-[#0066cc] text-white rotate-90 shadow-xs'
                          : 'bg-sky-50 text-slate-500 hover:bg-sky-100 hover:text-[#0066cc]'
                      }`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>

                    {/* Smooth Expandable Content Body */}
                    <div
                      className={`transition-all duration-300 ease-in-out px-4 sm:px-5 overflow-hidden ${
                        isExpanded ? 'max-h-60 pb-5 opacity-100' : 'max-h-0 pb-0 opacity-0'
                      }`}
                    >
                      <div className="pt-3 border-t border-sky-100">
                        <p className="text-[13px] sm:text-[13.5px] text-[#475569] leading-relaxed">
                          {item.details}
                        </p>

                        {/* Feature Micro-Badges */}
                        <div className="flex flex-wrap gap-2 mt-3.5">
                          {item.badges.map((badge, bIdx) => (
                            <span
                              key={bIdx}
                              className="px-2.5 py-1 rounded-lg bg-sky-50 text-[#0066cc] text-[11px] font-bold border border-sky-200/80"
                            >
                              ✓ {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* RIGHT SIDE (Span 7, Order 2): Visual Display starting at the top of the first feature section */}
          <div 
            className="lg:col-span-7 order-2 pt-0 lg:pt-[306px]"
            style={{
              paddingTop: cardsOffset ? `${cardsOffset}px` : undefined
            }}
          >
            <div className="sticky top-24 self-start relative z-20">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-[28px] sm:rounded-[36px] overflow-hidden bg-slate-950 border border-sky-200/80 shadow-[0_20px_50px_-15px_rgba(7,35,75,0.22)] group">
                
                {/* Stacked Technology Images with Smooth Crossfade Transition */}
                {TECH_FEATURES.map((item, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <img
                      key={item.id}
                      src={item.image}
                      alt={item.imageAlt}
                      className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out ${
                        isActive
                          ? 'opacity-100 scale-100 z-10 pointer-events-auto'
                          : 'opacity-0 scale-105 z-0 pointer-events-none'
                      }`}
                    />
                  );
                })}

                {/* Bottom Subtle Contrast Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none z-10"></div>

                {/* Top-Left Live Indicator Pill */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-[12px] font-semibold shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                  <span>Active: {currentTech.num} {currentTech.title}</span>
                </div>

                {/* Bottom Floating Glassmorphic Badge - Dynamically Updating */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-[22px] p-3.5 sm:p-4.5 border border-white/90 shadow-[0_12px_32px_-5px_rgba(7,35,75,0.2)] flex items-center gap-3.5 z-20 transition-all duration-300">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#0066cc] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-500/30">
                    {currentTech.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-[13.5px] sm:text-[15px] font-bold text-[#07234b] leading-tight truncate">
                        {currentTech.badgeTitle}
                      </h4>
                      <span className="px-2 py-0.5 rounded-full bg-sky-100 text-[#0066cc] text-[10px] font-bold uppercase tracking-wider hidden sm:inline-block">
                        Selected
                      </span>
                    </div>
                    <p className="text-[11.5px] sm:text-[12.5px] text-slate-600 mt-0.5 leading-snug line-clamp-2">
                      {currentTech.badgeDesc}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BENEFIT PILLARS (4-Column Grid) */}
        <div className="mt-14 sm:mt-16 pt-10 border-t border-sky-200/70 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {BENEFIT_PILLARS.map((pillar, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center text-center p-5 rounded-2xl bg-white/85 backdrop-blur-sm hover:bg-white border border-sky-100 hover:border-[#0066cc]/40 transition-all duration-300 hover:shadow-md group"
            >
              <div className="w-12 h-12 rounded-2xl bg-sky-50 group-hover:bg-sky-100/80 border border-sky-100 flex items-center justify-center mb-3.5 transition-colors shadow-xs">
                {pillar.icon}
              </div>
              <h4 className="text-[16px] font-bold text-[#07234b]">
                {pillar.title}
              </h4>
              <p className="text-[13px] text-[#475569] mt-1.5 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
