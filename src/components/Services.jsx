'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import servicesData from '@/data/services.json';

const SERVICES_DATA = servicesData;

export default function Services() {
  const [activeId, setActiveId] = useState(null);
  const router = useRouter();

  const handleCardClick = (id) => {
    // If the card is already active (expanded on hover or tap), clicking navigates to that service on the service page
    if (activeId === id) {
      router.push(`/services#${id}`);
    } else {
      setActiveId(id);
      // On desktop, clicking any service card navigates directly to the service page
      if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
        router.push(`/services#${id}`);
      }
    }
  };

  return (
    <section id="services" className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-white overflow-visible">
      
      {/* Section Header */}
      <div className="text-center max-w-[700px] mx-auto mb-12 sm:mb-14">
        <p className="text-[12px] sm:text-[13px] font-bold text-[#475569] tracking-[0.2em] uppercase mb-3">
          <Link href="/services" className="hover:text-sky-600 transition-colors">
            Services
          </Link>
        </p>
        <h2 className="text-[36px] sm:text-[46px] lg:text-[54px] font-bold text-[#0c2752] leading-[1.1] tracking-[-0.03em]">
          Expert care for every smile
        </h2>
        <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.65] mt-4 max-w-[540px] mx-auto">
          We offer a full spectrum of treatments – each tailored to elevate your health, confidence, and natural beauty.
        </p>
      </div>

      {/* Cards Container (Expanding 5-Card Accordion) */}
      <div className="w-full max-w-[1400px] mx-auto px-4">
        <div 
          className="flex gap-[18px] w-full h-[320px] items-stretch overflow-hidden select-none"
          onMouseLeave={() => setActiveId(null)}
        >
          {SERVICES_DATA.map((service) => {
            const isActive = activeId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveId(service.id)}
                onClick={() => handleCardClick(service.id)}
                className={`h-[320px] rounded-[16px] overflow-hidden relative cursor-pointer shadow-md transition-[flex] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] bg-gradient-to-b from-[#2b6aa9] to-[#1e5491] ${
                  isActive ? 'flex-[2.4]' : 'flex-1'
                }`}
                style={{
                  isolation: 'isolate',
                  WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                }}
              >
                <div className="flex w-full h-full relative">
                  
                  {/* Left Side: 45% on active / 100% on normal */}
                  <div className={`relative h-full flex-shrink-0 flex flex-col justify-end p-5 transition-[width] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isActive ? 'w-[45%]' : 'w-full'
                  }`}>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#123663]/90 via-transparent to-transparent pointer-events-none"></div>
                    <p className={`relative z-10 text-white font-bold leading-tight drop-shadow-md text-left transition-all duration-300 whitespace-nowrap overflow-hidden text-ellipsis ${
                      isActive ? 'text-[15px] sm:text-[16px]' : activeId !== null ? 'text-[14px] sm:text-[15px]' : 'text-[18px] sm:text-[19px]'
                    }`}>
                      {service.title}
                    </p>
                  </div>

                  {/* Right Side: 55% Full Half Card with removed min-w to eliminate text cutoff */}
                  <div className={`w-[55%] h-full flex-shrink-0 bg-white/12 backdrop-blur-md border-l border-white/20 p-4 sm:p-5 overflow-hidden transition-all duration-300 ease-out ${
                    isActive ? 'opacity-100 translate-x-0 pointer-events-auto delay-100' : 'opacity-0 translate-x-3 pointer-events-none'
                  }`}>
                    <div className="w-full h-full flex flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-white text-[16px] xl:text-[17px] font-bold leading-snug">
                          {service.headline}
                        </h4>
                        <Link 
                          href={`/services#${service.id}`} 
                          className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/35 flex items-center justify-center text-white text-[13px] transition-transform hover:scale-110 flex-shrink-0"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`View ${service.title} details`}
                        >
                          ↗
                        </Link>
                      </div>
                      <p className="text-white/85 text-[12px] xl:text-[12.5px] font-normal leading-[1.6]">
                        {service.description}
                      </p>
                      <div className="pt-2 border-t border-white/15 flex items-center justify-between">
                        <span className="text-[11.5px] font-semibold text-sky-200 hover:text-white flex items-center gap-1.5 transition-colors">
                          <span>View treatment details</span>
                          <span>→</span>
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA Button */}
      <div className="flex justify-center mt-8">
        <a href="#schedule" className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-white text-[14px] font-medium bg-gradient-to-r from-[#0c8fd1] via-[#0670a8] to-[#0a2754] shadow-lg shadow-sky-700/25 hover:shadow-xl hover:shadow-sky-700/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group">
          <svg className="w-[18px] h-[18px] text-sky-200 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="3"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
            <circle cx="8" cy="14" r="1" fill="currentColor"></circle>
            <circle cx="12" cy="14" r="1" fill="currentColor"></circle>
            <circle cx="16" cy="14" r="1" fill="currentColor"></circle>
          </svg>
          <span>Schedule a visit</span>
        </a>
      </div>

    </section>
  );
}
