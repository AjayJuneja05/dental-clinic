'use client';

import { useState, useRef, useCallback } from 'react';

const CASES_DATA = [
  {
    id: 'aesthetic',
    category: 'Aesthetic Dentistry',
    cardImage: '/assets/service-aesthetic.webp',
    headline: 'Aesthetic Dentistry',
    story: 'We enhance the natural beauty of your smile with personalized treatments designed to improve the shape, colour, proportion, and overall appearance of your teeth while keeping your results natural-looking.',
    whatWeDid: [
      'Digital smile design and treatment planning',
      'Minimal tooth preparation to preserve natural enamel',
      'Custom-designed porcelain veneers',
      'Smile proportions and tooth shape refined',
      'Final shade and appearance carefully matched',
    ],
    beforeImage: '/assets/aesthetic-before.webp',
    afterImage: '/assets/aesthetic-after.webp',
    patientImage: '/assets/patient-christina.webp',
    patientName: 'Christina',
    caption: 'Christina’s smile, before and after – confident, complete, and truly hers.',
    metrics: {
      time: { title: '1. Treatment Time', primary: '7–10 days', sub: 'Quick turnaround' },
      visits: { title: '2. Treatment Visits', primary: '2–3 visits', sub: 'Custom crafted porcelain' },
      result: { title: 'Clinical Result', primary: 'Natural & lasting', sub: 'Confident aesthetic smile' }
    }
  },
  {
    id: 'ortho',
    category: 'Orthodontics',
    cardImage: '/assets/service-ortho.webp',
    headline: 'Orthodontics',
    story: 'Orthodontics focuses on straightening teeth and correcting bite alignment for a healthier, more balanced, and confident smile. Treatment can be tailored using braces or clear aligners.',
    whatWeDid: [
      'Comprehensive orthodontic assessment',
      'Digital scans and treatment planning',
      'Teeth alignment and bite correction',
      'Custom braces or clear aligner treatment',
      'Regular progress checks and adjustments',
    ],
    beforeImage: '/assets/ortho-before.webp',
    afterImage: '/assets/ortho-after.webp',
    patientImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=85',
    patientName: 'Marcus',
    caption: 'Marcus’s smile, before and after – seamlessly aligned with zero lifestyle interruption.',
    metrics: {
      time: { title: '1. Treatment Time', primary: '6–9 months', sub: 'Predictable progression' },
      visits: { title: '2. Treatment Visits', primary: 'Bi-weekly checks', sub: 'Clear aligner trays' },
      result: { title: 'Clinical Result', primary: 'Perfect alignment', sub: 'Lifelong bite stability' }
    }
  },
  {
    id: 'implant',
    category: 'Implantology',
    cardImage: '/assets/service-implant.webp',
    headline: 'Implantology',
    story: 'Dental implants replace missing teeth with strong, natural-looking restorations designed to restore your smile, chewing function, and confidence.',
    whatWeDid: [
      'Detailed implant assessment and planning',
      'Digital imaging and implant positioning',
      'Dental implant placement',
      'Custom implant abutment and crown',
      'Bite, function, and final smile refinement',
    ],
    beforeImage: '/assets/implant-before.webp',
    afterImage: '/assets/implant-after.webp',
    patientImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=85',
    patientName: 'Elena',
    caption: 'Elena’s smile, restored with lifelong strength and undetectable aesthetics.',
    metrics: {
      time: { title: '1. Treatment Time', primary: '2–3 months', sub: 'Full tissue integration' },
      visits: { title: '2. Treatment Visits', primary: '3 visits total', sub: 'Guided 3D implantology' },
      result: { title: 'Clinical Result', primary: '100% bite strength', sub: 'Permanent tooth restoration' }
    }
  },
  {
    id: 'whitening',
    category: 'Teeth Whitening',
    cardImage: '/assets/service-whitening.webp',
    headline: 'Teeth Whitening',
    story: 'Professional teeth whitening safely reduces stains and discolouration, helping create a brighter, fresher-looking smile while maintaining a natural appearance.',
    whatWeDid: [
      'Professional assessment of tooth shade',
      'In-clinic whitening treatment',
      'Targeted stain and discolouration removal',
      'Enamel-safe whitening protocol',
      'Aftercare and maintenance guidance',
    ],
    beforeImage: '/assets/whitening-before.webp',
    afterImage: '/assets/whitening-after.webp',
    patientImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=85',
    patientName: 'Julian',
    caption: 'Julian’s smile, radiant and luminous with zero sensitivity.',
    metrics: {
      time: { title: '1. Treatment Time', primary: '45 minutes', sub: 'Immediate results' },
      visits: { title: '2. Treatment Visits', primary: '1 single visit', sub: 'Laser photo-activation' },
      result: { title: 'Clinical Result', primary: '8 shades brighter', sub: 'Zero enamel sensitivity' }
    }
  },
  {
    id: 'surgical',
    category: 'Surgical Dentistry',
    cardImage: '/assets/service-surgical.webp',
    headline: 'Surgical Dentistry',
    story: 'Surgical dentistry provides precise treatment for complex dental problems that require surgical care, with a focus on comfort, safety, and long-term oral health.',
    whatWeDid: [
      'Comprehensive surgical assessment',
      'Digital imaging and treatment planning',
      'Tooth and wisdom-tooth removal when required',
      'Precise surgical procedures',
      'Post-treatment healing and follow-up care',
    ],
    beforeImage: '/assets/surgical-before.webp',
    afterImage: '/assets/surgical-after.webp',
    patientImage: '/assets/patient-david.webp',
    patientName: 'David',
    caption: 'David’s smile, pain-free and fully restored after gentle surgical care.',
    metrics: {
      time: { title: '1. Treatment Time', primary: '1–2 hours', sub: 'Outpatient procedure' },
      visits: { title: '2. Treatment Visits', primary: '1 surgical visit', sub: 'Follow-up check' },
      result: { title: 'Clinical Result', primary: 'Complete pain relief', sub: 'Fast gentle healing' }
    }
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
      <div className="w-full max-w-[920px] mx-auto border-b border-slate-200/90 mb-10 sm:mb-14">
        <div className="flex items-center justify-between sm:justify-center gap-6 sm:gap-10 overflow-x-auto no-scrollbar pb-0.5">
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

      {/* 3-Column Layout: Left Text, Middle Before/After Slider, Right Vertical Info Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
        
        {/* LEFT COLUMN (Span 4): Headline, Story (What is This), What We Did & Controls */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full pr-0 lg:pr-2">
          <div>
            <h3 className="text-[28px] sm:text-[34px] xl:text-[38px] font-bold text-[#07234b] leading-[1.12] tracking-tight">
              {currentCase.headline}
            </h3>

            <p className="text-[13.5px] sm:text-[14px] text-[#475569] leading-[1.65] mt-4 font-normal">
              {currentCase.story}
            </p>

            {/* What we did */}
            <div className="mt-6">
              <h4 className="text-[15.5px] font-bold text-[#07234b] mb-3">
                What We Did
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

          {/* Bottom Left Navigation Controls */}
          <div className="flex items-center gap-3 mt-8 pt-4 border-t border-slate-100">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-full border border-slate-200 text-slate-400 hover:text-[#07234b] hover:border-slate-400 transition-colors flex items-center justify-center shadow-xs cursor-pointer"
              aria-label="Previous Story"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <span className="text-[12.5px] font-semibold text-[#07234b] px-1">
              {String(activeTab + 1).padStart(2, '0')}/{String(CASES_DATA.length).padStart(2, '0')}
            </span>

            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-full border border-sky-400 text-[#0066cc] hover:bg-sky-50 transition-colors flex items-center justify-center shadow-xs cursor-pointer"
              aria-label="Next Story"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* MIDDLE COLUMN (Span 5): Original Balanced Size Before / After Drag Slider */}
        <div className="lg:col-span-5">
          <div 
            ref={sliderRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="relative w-full h-[320px] sm:h-[380px] rounded-[24px] overflow-hidden shadow-md cursor-ew-resize bg-slate-900 border border-slate-100 touch-none select-none"
          >
            {/* "Before" Image Layer (Base) */}
            <img 
              src={currentCase.beforeImage} 
              alt="Before treatment" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
            />
            <span 
              className={`absolute top-3.5 left-4 text-white/90 text-[11px] font-bold uppercase tracking-wider drop-shadow z-10 pointer-events-none transition-all duration-300 ${
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
              className={`absolute top-3.5 right-4 text-white/90 text-[11px] font-bold uppercase tracking-wider drop-shadow z-10 pointer-events-none transition-all duration-300 ${
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

        {/* RIGHT COLUMN (Span 3): Vertical Line Info Card (1-Treatment Time, 2-Treatment Visits) */}
        <div className="lg:col-span-3 h-full flex flex-col justify-center">
          <div className="w-full bg-[#f8faff] border border-sky-100/90 rounded-[24px] p-6 sm:p-7 shadow-sm flex flex-col gap-5">
            
            {/* 1) Treatment Time */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-white shadow-xs border border-sky-100/80 flex items-center justify-center text-[#0066cc] flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider block">
                  {currentCase.metrics.time.title}
                </span>
                <p className="text-[17px] sm:text-[18px] font-bold text-[#07234b] leading-tight mt-0.5">
                  {currentCase.metrics.time.primary}
                </p>
                <span className="text-[12px] text-slate-500 mt-0.5 block">
                  {currentCase.metrics.time.sub}
                </span>
              </div>
            </div>

            {/* Vertical Line Separator */}
            <div className="w-full h-px bg-slate-200/80 my-1"></div>

            {/* 2) Treatment Visits */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-white shadow-xs border border-sky-100/80 flex items-center justify-center text-[#0066cc] flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.5 2 6 4.5 6 8c0 4 2 8 3 12 0.5 2 1.5 2 2 0l1-5 1 5c0.5 2 1.5 2 2 0 1-4 3-8 3-12 0-3.5-2.5-6-6-6z" />
                </svg>
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider block">
                  {currentCase.metrics.visits.title}
                </span>
                <p className="text-[17px] sm:text-[18px] font-bold text-[#07234b] leading-tight mt-0.5">
                  {currentCase.metrics.visits.primary}
                </p>
                <span className="text-[12px] text-slate-500 mt-0.5 block">
                  {currentCase.metrics.visits.sub}
                </span>
              </div>
            </div>

            {/* Vertical Line Separator */}
            <div className="w-full h-px bg-slate-200/80 my-1"></div>

            {/* 3) Result */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-white shadow-xs border border-sky-100/80 flex items-center justify-center text-[#0066cc] flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider block">
                  {currentCase.metrics.result.title}
                </span>
                <p className="text-[17px] sm:text-[18px] font-bold text-[#07234b] leading-tight mt-0.5">
                  {currentCase.metrics.result.primary}
                </p>
                <span className="text-[12px] text-slate-500 mt-0.5 block">
                  {currentCase.metrics.result.sub}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
