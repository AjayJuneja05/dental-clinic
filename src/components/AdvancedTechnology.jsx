'use client';

import { useState } from 'react';

const TECH_FEATURES = [
  {
    id: 'ai',
    num: '1.',
    title: 'AI-Assisted Diagnostics',
    description: 'Smart algorithms for faster, more accurate analysis and detection.',
    icon: (
      <svg className="w-6 h-6 text-[#0066cc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="4"></rect>
        <circle cx="8.5" cy="16" r="1.5" fill="currentColor"></circle>
        <circle cx="15.5" cy="16" r="1.5" fill="currentColor"></circle>
        <path d="M9 7l1-3h4l1 3"></path>
        <line x1="12" y1="4" x2="12" y2="11"></line>
        <line x1="2" y1="16" x2="3" y2="16"></line>
        <line x1="21" y1="16" x2="22" y2="16"></line>
      </svg>
    ),
  },
  {
    id: '3d-imaging',
    num: '2.',
    title: '3D Dental Imaging',
    description: 'High-resolution 3D scans for detailed visualization and precise diagnosis.',
    icon: (
      <svg className="w-6 h-6 text-[#0066cc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
    description: 'State-of-the-art tools for safer, faster and more comfortable treatments.',
    icon: (
      <svg className="w-6 h-6 text-[#0066cc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 4.5l5 5L7 22H2v-5L14.5 4.5z"></path>
        <path d="M11.5 7.5l5 5"></path>
        <circle cx="18" cy="6" r="2" fill="currentColor" fillOpacity="0.2"></circle>
      </svg>
    ),
  },
  {
    id: 'planning',
    num: '4.',
    title: 'Precise Treatment Planning',
    description: 'Digital planning for predictable outcomes and beautiful smiles.',
    icon: (
      <svg className="w-6 h-6 text-[#0066cc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.5 2 6 4.5 6 8c0 4 2 8 3 12 0.5 2 1.5 2 2 0l1-5 1 5c0.5 2 1.5 2 2 0 1-4 3-8 3-12 0-3.5-2.5-6-6-6z"></path>
        <path d="M9 9l2 2 4-4" stroke="#0066cc" strokeWidth="2"></path>
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
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="technology" className="w-full py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden select-none">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-5 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-10 right-5 w-96 h-96 bg-sky-50/70 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="w-full max-w-[1500px] mx-auto px-5 sm:px-12 lg:px-20 relative z-10">
        
        {/* Top Grid: Left (Heading & 4 Action Cards) vs Right (Workstation Visual) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* LEFT COLUMN (Span 5): Eyebrow, Large Heading, Description & 4 Interactive Tech Cards */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Pill Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-100 text-[#0066cc] text-[12px] font-bold tracking-wide uppercase mb-5 self-start shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0066cc] animate-pulse"></span>
              <span>Advanced Technology</span>
            </div>

            {/* Headline */}
            <h2 className="text-[34px] sm:text-[44px] lg:text-[48px] font-bold text-[#0c2752] leading-[1.1] tracking-[-0.035em]">
              Modern Technology for <br />
              Precise Dental Care
            </h2>

            {/* Decorative Accent Line */}
            <div className="w-12 h-1 bg-[#0066cc] rounded-full my-5"></div>

            {/* Subtitle Body */}
            <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.65] font-normal mb-8 max-w-[520px]">
              We combine advanced digital technology with experienced dental professionals to deliver accurate diagnoses, comfortable treatments and exceptional results for every patient.
            </p>

            {/* 4 Feature Cards (Exact layout from user reference) */}
            <div className="space-y-3.5">
              {TECH_FEATURES.map((item, idx) => {
                const isSelected = activeTab === idx;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveTab(idx)}
                    className={`rounded-[20px] p-3.5 sm:p-4 border transition-all duration-300 flex items-center justify-between gap-4 cursor-pointer group ${
                      isSelected
                        ? 'bg-white border-[#0066cc]/40 shadow-[0_10px_25px_-5px_rgba(0,102,204,0.12)] ring-2 ring-blue-50 scale-[1.01]'
                        : 'bg-white hover:bg-slate-50/80 border-slate-200/80 hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    {/* Left Icon + Text Content */}
                    <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 ${
                        isSelected ? 'bg-blue-50 text-[#0066cc]' : 'bg-slate-50 text-[#0066cc]'
                      }`}>
                        {item.icon}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-[15px] sm:text-[15.5px] font-bold text-[#0c2752] leading-tight">
                          {item.num} {item.title}
                        </h4>
                        <p className="text-[12px] sm:text-[12.5px] text-slate-500 leading-snug mt-1 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Right Arrow Button */}
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isSelected
                        ? 'bg-blue-50 text-[#0066cc] translate-x-0.5'
                        : 'bg-slate-50 text-slate-400 group-hover:text-[#0066cc] group-hover:bg-blue-50 group-hover:translate-x-1'
                    }`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* RIGHT COLUMN (Span 7): High-Tech Workstation Card with Glowing 3D Tooth & Badge */}
          <div className="lg:col-span-7 relative">
            <div className="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden bg-slate-900 border border-slate-200/80 shadow-[0_20px_50px_-15px_rgba(12,39,82,0.15)] group">
              
              {/* Main Image */}
              <img
                src="/assets/tech-scanner-blue.webp"
                alt="Modern dental technology workstation with glowing 3D tooth wireframe model and intraoral scanner"
                className="w-full h-auto object-cover object-center transform transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Floating Bottom-Right Glassmorphic Badge */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-[22px] p-3.5 sm:p-4.5 border border-white/80 shadow-[0_12px_30px_-5px_rgba(0,0,0,0.12)] flex items-center gap-3.5 max-w-[290px] sm:max-w-[340px] animate-fadeIn">
                <div className="w-11 h-11 rounded-2xl bg-[#0066cc] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-500/30">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.5 2 6 4.5 6 8c0 4 2 8 3 12 0.5 2 1.5 2 2 0l1-5 1 5c0.5 2 1.5 2 2 0 1-4 3-8 3-12 0-3.5-2.5-6-6-6z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[13.5px] sm:text-[14.5px] font-bold text-[#0c2752] leading-tight">
                    Digital Smile Scanning
                  </h4>
                  <p className="text-[11px] sm:text-[11.5px] text-slate-500 mt-0.5 leading-snug">
                    Advanced technology for better accuracy and naturally beautiful results.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM BENEFIT PILLARS (4-Column Grid from reference) */}
        <div className="mt-14 sm:mt-16 pt-10 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {BENEFIT_PILLARS.map((pillar, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center text-center p-5 rounded-2xl bg-[#f8faff] hover:bg-white border border-slate-200/70 hover:border-blue-200/90 transition-all duration-300 hover:shadow-md group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-blue-50 border border-slate-200/80 group-hover:border-blue-200 flex items-center justify-center mb-3.5 transition-colors shadow-xs">
                {pillar.icon}
              </div>
              <h4 className="text-[16px] font-bold text-[#0c2752]">
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
