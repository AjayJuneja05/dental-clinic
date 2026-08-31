'use client';

import { useState, useRef, useCallback } from 'react';

const CASES_DATA = [
  {
    id: 'aesthetic',
    category: 'Aesthetic dentistry',
    cardImage: '/service-aesthetic.webp',
    headline: 'Christina’s smile, transformed',
    story: 'Christina felt self-conscious about the gaps and uneven shape of her teeth. She wanted a natural, brighter smile that still felt like her own – just more balanced, natural, and confidently beautiful.',
    whatWeDid: [
      'Smile design planning with digital preview',
      'Minimal tooth preparation to preserve enamel',
      'Placement of ultra-thin porcelain veneers',
    ],
    beforeImage: '/aesthetic-before.webp',
    afterImage: '/aesthetic-after.webp',
    patientImage: '/patient-christina.webp',
    patientName: 'Christina',
    caption: 'Christina’s smile, before and after – confident, complete, and truly hers.',
  },
  {
    id: 'ortho',
    category: 'Orthodontics',
    cardImage: '/service-ortho.webp',
    headline: 'Marcus’s smile, aligned',
    story: 'Marcus had crowded lower teeth and a deep overbite that affected his jaw comfort. With discreet custom clear aligners, he achieved a wide, balanced arch in under 9 months.',
    whatWeDid: [
      '3D intraoral digital scanning & AI movement simulation',
      'Custom sequential clear aligner therapy',
      'Retention protocol for lasting bite stability',
    ],
    beforeImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format&fit=crop&q=85',
    afterImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&auto=format&fit=crop&q=85',
    patientImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=85',
    patientName: 'Marcus',
    caption: 'Marcus’s smile, before and after – seamlessly aligned with zero lifestyle interruption.',
  },
  {
    id: 'implant',
    category: 'Implantology',
    cardImage: '/service-implant.webp',
    headline: 'Elena’s smile, restored',
    story: 'After a sports injury resulted in a missing front incisor, Elena sought a permanent solution that blended imperceptibly with her natural teeth and restored full bite strength.',
    whatWeDid: [
      'CBCT 3D guided titanium implant placement',
      'Custom zirconia abutment for natural gum emergence',
      'Individual layered ceramic crown color-matched to perfection',
    ],
    beforeImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format&fit=crop&q=85',
    afterImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&auto=format&fit=crop&q=85',
    patientImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=85',
    patientName: 'Elena',
    caption: 'Elena’s smile, restored with lifelong strength and undetectable aesthetics.',
  },
  {
    id: 'whitening',
    category: 'Whitening',
    cardImage: '/service-whitening.webp',
    headline: 'Julian’s smile, brightened',
    story: 'Years of coffee and tea consumption had left Julian’s teeth dulled. Our deep laser phototherapy lifted 7 shades in a single comfortable 45-minute clinical session.',
    whatWeDid: [
      'Enamel-safe pH-balanced mineral prep',
      'High-frequency laser light activation session',
      'Fluoride micro-seal treatment to ensure zero sensitivity',
    ],
    beforeImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format&fit=crop&q=85',
    afterImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&auto=format&fit=crop&q=85',
    patientImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=85',
    patientName: 'Julian',
    caption: 'Julian’s smile, radiant and luminous with zero sensitivity.',
  },
  {
    id: 'surgical',
    category: 'Surgical dentistry',
    cardImage: '/service-surgical.webp',
    headline: 'David’s oral health, renewed',
    story: 'David suffered from persistent discomfort due to impacted wisdom teeth and localized bone loss. Our surgical specialists provided painless extraction and guided bone regeneration.',
    whatWeDid: [
      '3D panoramic nerve mapping and virtual surgical guide',
      'Minimally invasive atraumatic tooth extraction',
      'Plasma-rich bone graft for accelerated cellular healing',
    ],
    beforeImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format&fit=crop&q=85',
    afterImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&auto=format&fit=crop&q=85',
    patientImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=85',
    patientName: 'David',
    caption: 'David’s recovery, fast and painless with complete oral tissue restoration.',
  },
];

export default function Transformations() {
  const [activeTab, setActiveTab] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // 0 to 100 percentage
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);

  const currentCase = CASES_DATA[activeTab];

  const handleMove = useCallback((clientX) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pos);
  }, []);

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handlePrev = () => {
    setActiveTab((prev) => (prev === 0 ? CASES_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveTab((prev) => (prev === CASES_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="transformations" className="w-full max-w-[1540px] mx-auto px-5 sm:px-10 lg:px-16 py-10 sm:py-14 lg:py-16 bg-white select-none">
      
      {/* Top Header Title & Supporting Copy */}
      <div className="text-center max-w-[820px] mx-auto mb-8 sm:mb-10">
        <h2 className="text-[36px] sm:text-[46px] lg:text-[52px] font-bold text-[#07234b] leading-[1.1] tracking-[-0.035em]">
          Medical Support for every Dental Problems.
        </h2>
        <p className="text-[14.5px] sm:text-[16px] text-[#475569] leading-[1.65] font-normal mt-3.5 max-w-[620px] mx-auto">
          Comprehensive diagnostic expertise and board-certified dental care tailored to your unique oral health needs — from precision aesthetic enhancements and clear alignment to advanced implant surgery.
        </p>
      </div>

      {/* Visual Service Card Options (Under the text options) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 mb-12 sm:mb-16 max-w-[1280px] mx-auto">
        {CASES_DATA.map((item, index) => {
          const isActive = activeTab === index;
          return (
            <div
              key={item.id}
              onClick={() => {
                setActiveTab(index);
                setSliderPos(50);
              }}
              className={`relative h-[115px] sm:h-[135px] rounded-[18px] sm:rounded-[22px] overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-end p-3.5 select-none ${
                isActive
                  ? 'ring-[3.5px] ring-[#0066cc] shadow-lg shadow-sky-600/20 -translate-y-1 scale-[1.02]'
                  : 'opacity-80 hover:opacity-100 hover:-translate-y-0.5 hover:shadow-md'
              }`}
            >
              {/* Background 3D Service Image */}
              <img
                src={item.cardImage}
                alt={item.category}
                loading="eager"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none transition-transform duration-500 hover:scale-105"
              />

              {/* Gradient Overlay for Crisp Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07234b]/95 via-[#07234b]/40 to-transparent pointer-events-none"></div>

              {/* Service Title */}
              <p className="relative z-10 text-white text-[13px] sm:text-[14px] font-bold text-center leading-tight drop-shadow">
                {item.category}
              </p>

              {/* Active Indicator Badge */}
              {isActive && (
                <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 rounded-full bg-sky-400 ring-2 ring-white"></span>
              )}
            </div>
          );
        })}
      </div>

      {/* Main 3-Column Content Layout (Dynamic per selected service) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center">
        
        {/* LEFT COLUMN (Span 4): Story & What We Did */}
        <div className="lg:col-span-4 flex flex-col justify-between pr-0 lg:pr-2">
          <div>
            <h3 className="text-[28px] sm:text-[34px] font-bold text-[#07234b] leading-[1.12] tracking-tight">
              {currentCase.headline}
            </h3>

            <p className="text-[13.5px] sm:text-[14px] text-[#475569] leading-[1.65] mt-4 font-normal">
              {currentCase.story}
            </p>

            {/* What we did */}
            <div className="mt-7">
              <h4 className="text-[16px] font-bold text-[#07234b] mb-3">
                What we did
              </h4>
              <ul className="space-y-2.5">
                {currentCase.whatWeDid.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[13px] sm:text-[13.5px] text-slate-600 leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc] mt-1.5 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* MIDDLE COLUMN (Span 5): Interactive Before / After Drag Slider */}
        <div className="lg:col-span-5">
          <div 
            ref={sliderRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onClick={(e) => handleMove(e.clientX)}
            className="relative w-full h-[320px] sm:h-[380px] rounded-[24px] overflow-hidden shadow-md cursor-ew-resize bg-slate-900 border border-slate-100"
          >
            {/* "Before" Image Layer (Base) */}
            <img 
              src={currentCase.beforeImage} 
              alt="Before treatment"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
            />
            <span className="absolute top-3.5 left-4 text-white/90 text-[11px] font-bold uppercase tracking-wider drop-shadow z-10">
              Before
            </span>

            {/* "After" Image Layer (Clipped by slider percentage) */}
            <div 
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
            >
              <img 
                src={currentCase.afterImage} 
                alt="After treatment" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <span className="absolute top-3.5 right-4 text-white/90 text-[11px] font-bold uppercase tracking-wider drop-shadow z-10">
              After
            </span>

            {/* Vertical Divider Line */}
            <div 
              className="absolute top-0 bottom-0 w-[2.5px] bg-[#0066cc] pointer-events-none shadow-md z-20"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Center Floating "Drag" Circular Button */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white/85 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-center text-[#07234b] text-[11px] font-bold tracking-tight select-none">
                Drag
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN (Span 3): Patient Portrait & Caption */}
        <div className="lg:col-span-3 flex flex-col justify-between h-full">
          <div>
            {/* Patient Portrait Photo */}
            <div className="w-full h-[220px] sm:h-[250px] rounded-[20px] overflow-hidden bg-sky-50 shadow-sm border border-slate-100">
              <img 
                src={currentCase.patientImage} 
                alt={currentCase.patientName} 
                className="w-full h-full object-cover object-center" 
              />
            </div>

            {/* Caption */}
            <p className="text-[12px] sm:text-[12.5px] text-[#475569] leading-relaxed mt-3.5 font-normal">
              {currentCase.caption}
            </p>
          </div>

          {/* Bottom Right Controls (Prev / Index / Next) */}
          <div className="flex items-center justify-end gap-3 mt-6 pt-2">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-full border border-slate-200 text-slate-400 hover:text-[#07234b] hover:border-slate-400 transition-colors flex items-center justify-center shadow-xs"
              aria-label="Previous Story"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <span className="text-[12.5px] font-semibold text-[#07234b]">
              {String(activeTab + 1).padStart(2, '0')}/{String(CASES_DATA.length).padStart(2, '0')}
            </span>

            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-full border border-sky-400 text-[#0066cc] hover:bg-sky-50 transition-colors flex items-center justify-center shadow-xs"
              aria-label="Next Story"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}
