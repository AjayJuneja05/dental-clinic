'use client';

import { useState, useRef, useCallback } from 'react';

const CASES_DATA = [
  {
    id: 'aesthetic',
    category: 'Aesthetic dentistry',
    cardImage: '/assets/service-aesthetic.webp',
    headline: 'Christina’s smile, transformed',
    story: 'Christina felt self-conscious about the gaps and uneven shape of her teeth. She wanted a natural, brighter smile that still felt like her own – just more balanced, natural, and confidently beautiful.',
    whatWeDid: [
      'Smile design planning with digital preview',
      'Minimal tooth preparation to preserve enamel',
      'Placement of ultra-thin porcelain veneers',
    ],
    beforeImage: '/assets/aesthetic-before.webp',
    afterImage: '/assets/aesthetic-after.webp',
    patientImage: '/assets/patient-christina.webp',
    patientName: 'Christina',
    caption: 'Christina’s smile, before and after – confident, complete, and truly hers.',
  },
  {
    id: 'ortho',
    category: 'Orthodontics',
    cardImage: '/assets/service-ortho.webp',
    headline: 'Marcus’s smile, aligned',
    story: 'Marcus had crowded lower teeth and a deep overbite that affected his jaw comfort. With discreet custom clear aligners, he achieved a wide, balanced arch in under 9 months.',
    whatWeDid: [
      '3D intraoral digital scanning & AI movement simulation',
      'Custom sequential clear aligner therapy',
      'Retention protocol for lasting bite stability',
    ],
    beforeImage: '/assets/ortho-before.webp',
    afterImage: '/assets/ortho-after.webp',
    patientImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=85',
    patientName: 'Marcus',
    caption: 'Marcus’s smile, before and after – seamlessly aligned with zero lifestyle interruption.',
  },
  {
    id: 'implant',
    category: 'Implantology',
    cardImage: '/assets/service-implant.webp',
    headline: 'Elena’s smile, restored',
    story: 'After a sports injury resulted in a missing front incisor, Elena sought a permanent solution that blended imperceptibly with her natural teeth and restored full bite strength.',
    whatWeDid: [
      'CBCT 3D guided titanium implant placement',
      'Custom zirconia abutment for natural gum emergence',
      'Individual layered ceramic crown color-matched to perfection',
    ],
    beforeImage: '/assets/implant-before.webp',
    afterImage: '/assets/implant-after.webp',
    patientImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=85',
    patientName: 'Elena',
    caption: 'Elena’s smile, restored with lifelong strength and undetectable aesthetics.',
  },
  {
    id: 'whitening',
    category: 'Whitening',
    cardImage: '/assets/service-whitening.webp',
    headline: 'Julian’s smile, brightened',
    story: 'Years of coffee and tea consumption had left Julian’s teeth dulled. Our deep laser phototherapy lifted 7 shades in a single comfortable 45-minute clinical session.',
    whatWeDid: [
      'Enamel-safe pH-balanced mineral prep',
      'High-frequency laser light activation session',
      'Fluoride micro-seal treatment to ensure zero sensitivity',
    ],
    beforeImage: '/assets/whitening-before.webp',
    afterImage: '/assets/whitening-after.webp',
    patientImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=85',
    patientName: 'Julian',
    caption: 'Julian’s smile, radiant and luminous with zero sensitivity.',
  },
  {
    id: 'surgical',
    category: 'Surgical dentistry',
    cardImage: '/assets/service-surgical.webp',
    headline: 'David’s oral health, renewed',
    story: 'David suffered from persistent discomfort due to impacted wisdom teeth and localized bone loss. Our surgical specialists provided painless extraction and guided bone regeneration.',
    whatWeDid: [
      '3D panoramic nerve mapping and virtual surgical guide',
      'Minimally invasive atraumatic tooth extraction',
      'Plasma-rich bone graft for accelerated cellular healing',
    ],
    beforeImage: '/assets/surgical-before.webp',
    afterImage: '/assets/surgical-after.webp',
    patientImage: '/assets/patient-david.webp',
    patientName: 'David',
    caption: 'David’s smile, pain-free and fully restored after gentle surgical care.',
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

  const handlePointerDown = (e) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    handleMove(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (_) {}
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

      {/* Horizontal Underlined Category Tabs matching reference */}
      <div className="w-full max-w-[880px] mx-auto border-b border-slate-200/90 mb-12 sm:mb-16">
        <div className="flex items-center justify-between sm:justify-center gap-6 sm:gap-12 overflow-x-auto no-scrollbar pb-0.5">
          {CASES_DATA.map((item, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(index);
                  setSliderPos(50);
                }}
                className={`relative pb-3 text-[14px] sm:text-[15px] font-semibold transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                  isActive ? 'text-[#0066cc]' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {item.category}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0066cc] rounded-full"></span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main 2-Column Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
        
        {/* LEFT COLUMN (Span 5): Enlarged Headline, Story, What We Did & Controls */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full pr-0 lg:pr-4">
          <div>
            <h3 className="text-[34px] sm:text-[42px] lg:text-[48px] xl:text-[52px] font-bold text-[#07234b] leading-[1.08] tracking-[-0.025em]">
              {currentCase.headline}
            </h3>

            <p className="text-[15px] sm:text-[16px] text-[#475569] leading-[1.75] mt-5 font-normal">
              {currentCase.story}
            </p>

            {/* What we did */}
            <div className="mt-8">
              <h4 className="text-[17px] sm:text-[18px] font-bold text-[#07234b] mb-4">
                What we did
              </h4>
              <ul className="space-y-3.5">
                {currentCase.whatWeDid.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[14.5px] sm:text-[15px] text-[#334155] leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-[#0066cc] mt-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Left Navigation Controls */}
          <div className="flex items-center gap-3 mt-10 pt-4 border-t border-slate-100">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-slate-200 text-slate-500 hover:text-[#07234b] hover:border-slate-400 hover:bg-slate-50 transition-all flex items-center justify-center shadow-xs cursor-pointer"
              aria-label="Previous Story"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <span className="text-[13.5px] font-bold text-[#07234b] px-2 tracking-wide">
              {String(activeTab + 1).padStart(2, '0')}/{String(CASES_DATA.length).padStart(2, '0')}
            </span>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-sky-400 bg-sky-50 text-[#0066cc] hover:bg-sky-100 transition-all flex items-center justify-center shadow-xs cursor-pointer"
              aria-label="Next Story"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN (Span 7): Large Interactive Before / After Drag Slider */}
        <div className="lg:col-span-7">
          <div 
            ref={sliderRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="relative w-full h-[360px] sm:h-[440px] lg:h-[480px] xl:h-[520px] rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-2xl shadow-slate-900/10 cursor-ew-resize bg-slate-900 border border-slate-100 touch-none select-none"
          >
            {/* "Before" Image Layer (Base) */}
            <img 
              src={currentCase.beforeImage} 
              alt="Before treatment" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
            />
            <span 
              className={`absolute top-4 left-5 text-white/90 text-[12px] font-bold uppercase tracking-wider drop-shadow z-10 pointer-events-none transition-all duration-300 ${
                sliderPos < 15 ? 'opacity-0 scale-90 -translate-x-2' : 'opacity-100 scale-100 translate-x-0'
              }`}
            >
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
            <span 
              className={`absolute top-4 right-5 text-white/90 text-[12px] font-bold uppercase tracking-wider drop-shadow z-10 pointer-events-none transition-all duration-300 ${
                sliderPos > 85 ? 'opacity-0 scale-90 translate-x-2' : 'opacity-100 scale-100 translate-x-0'
              }`}
            >
              After
            </span>

            {/* Vertical Divider Line */}
            <div 
              className="absolute top-0 bottom-0 w-[2.5px] bg-[#0066cc] pointer-events-none shadow-md z-20"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Center Floating "Drag" Circular Button */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white/85 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-center text-[#07234b] text-[11px] font-bold tracking-tight select-none pointer-events-none">
                Drag
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
