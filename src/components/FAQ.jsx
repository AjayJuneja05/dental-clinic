'use client';

import { useState } from 'react';

const FAQ_ITEMS = [
  {
    id: 1,
    question: 'How long do porcelain veneers last, and is the procedure painful?',
    answer: 'With proper daily oral hygiene and regular cleanings, our ultra-thin porcelain veneers last 15 to 20+ years. The procedure is virtually painless — our specialists utilize micro-conservative enamel preparation and advanced local numbing to ensure complete patient comfort throughout.',
    category: 'Aesthetic Dentistry',
  },
  {
    id: 2,
    question: 'What is the difference between clear aligners and traditional braces?',
    answer: 'Clear aligners are custom 3D-printed, transparent removable trays that straighten teeth without wires or brackets, allowing you to eat, brush, and floss normally. Traditional braces remain ideal for severe skeletal corrections. During your 3D digital scan, our orthodontist will advise the most efficient path for your bite.',
    category: 'Orthodontics',
  },
  {
    id: 3,
    question: 'How long does a dental implant procedure take from start to finish?',
    answer: 'The initial 3D-guided titanium implant placement takes approximately 1 to 2 hours under gentle local sedation. Following a 2 to 3-month natural osseointegration period (where the biocompatible fixture fuses securely with your jawbone), your permanent, color-matched ceramic crown is securely seated.',
    category: 'Implantology',
  },
  {
    id: 4,
    question: 'Is professional laser teeth whitening safe for sensitive enamel?',
    answer: 'Yes, 100%. Our clinic employs high-grade, pH-neutral whitening phototherapy coupled with an immediate fluoride micro-seal barrier. This dual-action protocol lifts deep stains by up to 8 shades while protecting enamel pores and preventing post-treatment sensitivity.',
    category: 'Teeth Whitening',
  },
  {
    id: 5,
    question: 'Do you offer flexible payment plans or accept dental insurance?',
    answer: 'We accept all major dental PPO insurance plans and provide direct insurance claims assistance. For aesthetic and elective procedures, we offer 0% APR monthly installment plans and financing through healthcare credit partners to ensure quality care remains accessible.',
    category: 'Billing & Insurance',
  },
  {
    id: 6,
    question: 'What should I expect during my first consultation visit?',
    answer: 'Your first visit is dedicated to precision diagnostics and personal comfort. It includes a comprehensive high-definition 3D intraoral scan (no goopy impressions), a digital smile simulation preview, gum health evaluation, and an unhurried 1-on-1 consultation with your chosen specialist.',
    category: 'First Visit',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // Default first item open

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-100 relative overflow-hidden select-none">
      
      {/* Background Soft Blobs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="w-full max-w-[1500px] mx-auto px-5 sm:px-12 lg:px-20 relative z-10">
        
        {/* Main 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          
          {/* LEFT COLUMN (Span 5): Heading, Subtitle & Support Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-[#0066cc] text-[12px] font-bold tracking-wide uppercase mb-4">
                <span className="w-2 h-2 rounded-full bg-[#0066cc]"></span>
                <span>Frequently Asked Questions</span>
              </div>

              <h2 className="text-[34px] sm:text-[44px] lg:text-[50px] font-bold text-[#07234b] leading-[1.08] tracking-[-0.035em]">
                Everything you need to know about your smile journey
              </h2>

              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.7] font-normal mt-5 max-w-[500px]">
                Have questions about treatment timelines, procedure comfort, or aftercare? Explore our clinical answers below or speak directly with our patient care team.
              </p>
            </div>

            {/* Support Callout Box */}
            <div className="mt-10 p-6 sm:p-7 rounded-[26px] bg-[#f8faff] border border-sky-100/90 shadow-sm">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#0066cc] text-white flex items-center justify-center text-lg shadow-sm">
                  💬
                </div>
                <div>
                  <h4 className="text-[15.5px] font-bold text-[#07234b]">
                    Have a specific question?
                  </h4>
                  <p className="text-[12.5px] text-slate-500">
                    Our dental coordinators are available 6 days a week
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-sky-100/70 flex flex-wrap items-center justify-between gap-3">
                <a
                  href="#schedule"
                  className="px-5 py-2.5 rounded-full bg-[#0066cc] hover:bg-[#0052a3] text-white text-[13px] font-bold transition-all shadow-xs"
                >
                  Book Free Consultation
                </a>
                <a
                  href="tel:18005550199"
                  className="text-[13px] font-bold text-[#07234b] hover:text-[#0066cc] transition-colors"
                >
                  Call +1 (800) 555-0199
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN (Span 7): Interactive Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.id}
                  className={`rounded-[22px] border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-[#f8faff] border-sky-200/90 shadow-md shadow-sky-900/5'
                      : 'bg-white border-slate-200/80 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  {/* Accordion Question Header Button */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5 pr-2">
                      <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-[12px] font-bold transition-colors flex-shrink-0 ${
                        isOpen ? 'bg-[#0066cc] text-white' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[15.5px] sm:text-[16.5px] font-bold text-[#07234b] leading-snug">
                        {item.question}
                      </span>
                    </div>

                    {/* Circular Animated Plus/Minus Toggle Icon */}
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#0066cc] text-white rotate-45'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                  </button>

                  {/* Accordion Answer Content */}
                  <div
                    className={`transition-all duration-300 ease-in-out px-5 sm:px-6 overflow-hidden ${
                      isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                    }`}
                  >
                    <div className="pt-2 border-t border-sky-100/70 text-[14px] sm:text-[14.5px] text-[#475569] leading-[1.7]">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
}
