'use client';

import { useState } from 'react';

const TECH_FEATURES = [
  {
    id: 1,
    num: '1.',
    title: 'AI-Assisted Diagnostics',
    description: 'Automated neural network scans detect micro-cavities, hairline fractures, and bone density changes before they become visible to the naked eye.',
  },
  {
    id: 2,
    num: '2.',
    title: '3D Dental Imaging',
    description: 'Sub-millimeter volumetric cone-beam scans produce complete 360° anatomical models with up to 80% lower radiation than traditional x-rays.',
  },
  {
    id: 3,
    num: '3.',
    title: 'Modern Dental Equipment',
    description: 'Next-generation optical intraoral wands, laser soft-tissue precision scalpels, and painless piezo-ultrasonic scalers for maximum patient comfort.',
  },
  {
    id: 4,
    num: '4.',
    title: 'Precise Treatment Planning',
    description: 'Computer-guided digital smile mockups and 3D surgical templates ensure millimeter-exact veneer placement and rapid painless recovery.',
  },
];

export default function AdvancedTechnology() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="technology" className="w-full py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden select-none">
      
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-50/60 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-50/60 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="w-full max-w-[1500px] mx-auto px-5 sm:px-12 lg:px-20 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* LEFT COLUMN (Span 6): Eyebrow, Heading, Description & 4 Interactive Tech Bars */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Eyebrow Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dff7ea] text-[#00875a] text-[12px] font-bold tracking-wide uppercase mb-4 self-start">
              <span className="w-2 h-2 rounded-full bg-[#00875a]"></span>
              <span>Advanced Technology</span>
            </div>

            {/* Headline */}
            <h2 className="text-[34px] sm:text-[44px] lg:text-[48px] font-bold text-[#07234b] leading-[1.12] tracking-[-0.035em]">
              Modern Technology for <br className="hidden sm:inline" />
              Precise Dental Care
            </h2>

            {/* Subtitle */}
            <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.65] font-normal mt-4 max-w-[540px]">
              We combine advanced digital technology with experienced dental professionals to deliver accurate diagnoses, comfortable treatments and exceptional results for every patient.
            </p>

            {/* 4 Feature Action Bars */}
            <div className="mt-8 sm:mt-10 space-y-3.5">
              {TECH_FEATURES.map((feature, idx) => {
                const isActive = activeFeature === idx;
                return (
                  <div
                    key={feature.id}
                    onClick={() => setActiveFeature(isActive ? -1 : idx)}
                    className={`rounded-[18px] sm:rounded-[20px] transition-all duration-300 border cursor-pointer overflow-hidden ${
                      isActive
                        ? 'bg-[#f4f7f6] border-emerald-200/90 shadow-sm'
                        : 'bg-[#f8f9fa] hover:bg-[#f1f3f5] border-slate-200/60'
                    }`}
                  >
                    <div className="p-4 sm:p-4.5 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="text-[15px] sm:text-[16px] font-bold text-[#07234b]">
                          {feature.num}
                        </span>
                        <span className="text-[15px] sm:text-[16px] font-bold text-[#07234b]">
                          {feature.title}
                        </span>
                      </div>

                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                        isActive ? 'rotate-45 text-[#00875a]' : 'text-slate-700'
                      }`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </div>
                    </div>

                    {/* Expandable Explanation */}
                    {isActive && (
                      <div className="px-4 pb-4 pt-1 text-[13.5px] text-[#475569] leading-relaxed border-t border-slate-200/50">
                        {feature.description}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* RIGHT COLUMN (Span 6): Visual Workstation Card & Floating Badge */}
          <div className="lg:col-span-6 relative">
            
            <div className="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden bg-slate-100 border border-slate-200/80 shadow-[0_20px_50px_-20px_rgba(7,35,75,0.15)] group">
              
              {/* Dental Technology Workstation Image */}
              <img
                src="/assets/tech-scanner.webp"
                alt="Modern dental technology workstation with 3D tooth scan and scanner wand"
                className="w-full h-auto object-cover object-center transform transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Floating Bottom-Right Glassmorphic Badge */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-[20px] p-3.5 sm:p-4 border border-white/80 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] flex items-center gap-3.5 max-w-[280px] sm:max-w-[320px]">
                <div className="w-11 h-11 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-xl flex-shrink-0">
                  🦷
                </div>
                <div>
                  <h4 className="text-[13.5px] sm:text-[14.5px] font-bold text-[#07234b] leading-tight">
                    Digital Smile Scanning
                  </h4>
                  <p className="text-[11px] sm:text-[12px] text-slate-500 mt-0.5 leading-snug">
                    Advanced Dentistry Better Results.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
