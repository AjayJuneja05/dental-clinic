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
    setActiveId((prev) => (prev === id ? null : id));
  };

  const handleNavigate = (id) => {
    router.push(`/services#${id}`);
    if (typeof window !== 'undefined' && window.location.pathname === '/services') {
      window.location.hash = `#${id}`;
    }
  };

  return (
    <section id="services" className="w-full py-16 sm:py-20 lg:py-24 bg-white overflow-visible">
      <div className="w-full max-w-[1500px] mx-auto px-5 sm:px-12 lg:px-20">
        
        {/* Section Header (Left-aligned) */}
        <div className="w-full mb-10 sm:mb-12 text-left">
          <div className="max-w-[680px]">
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-[#0066cc] text-[12px] font-bold tracking-[0.16em] uppercase mb-3.5 shadow-xs hover:bg-sky-100 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[#0066cc] animate-pulse"></span>
              <span>Services</span>
            </Link>
            <h2 className="text-[36px] sm:text-[46px] lg:text-[52px] font-bold text-[#0c2752] leading-[1.1] tracking-[-0.035em]">
              Expert care for every smile
            </h2>
            <p className="text-[14px] sm:text-[15.5px] text-[#475569] leading-[1.65] font-normal mt-3.5 max-w-[620px]">
              We offer a full spectrum of treatments – each tailored to elevate your health, confidence, and natural beauty.
            </p>
          </div>
        </div>

        {/* Cards Container (Expanding 5-Card Accordion on Desktop, Smooth Touch-Scroll on Mobile/Tablet) */}
        <div className="w-full overflow-x-auto no-scrollbar pb-3">
        <div 
          className="flex gap-[14px] lg:gap-[18px] w-max lg:w-full h-[300px] lg:h-[320px] items-stretch select-none"
        >
          {SERVICES_DATA.map((service) => {
            const isActive = activeId === service.id;

            return (
              <div
                key={service.id}
                onClick={() => handleCardClick(service.id)}
                className={`h-[300px] lg:h-[320px] rounded-[16px] overflow-hidden relative cursor-pointer shadow-md transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] bg-gradient-to-b from-[#2b6aa9] to-[#1e5491] ${
                  isActive 
                    ? 'w-[360px] sm:w-[400px] lg:w-auto lg:flex-[2.4]' 
                    : 'w-[220px] sm:w-[240px] lg:w-auto lg:flex-1'
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
                    <p className="relative z-10 text-white text-[15px] sm:text-[16px] font-bold leading-tight drop-shadow-md text-left transition-transform duration-300">
                      {service.title}
                    </p>
                  </div>

                  {/* Right Side: 55% Full Half Card with min-w to prevent text shuffling */}
                  <div className={`w-[55%] min-w-[240px] h-full flex-shrink-0 bg-white/12 backdrop-blur-md border-l border-white/20 p-4 sm:p-5 overflow-hidden transition-all duration-300 ease-out ${
                    isActive ? 'opacity-100 translate-x-0 pointer-events-auto delay-100' : 'opacity-0 translate-x-3 pointer-events-none'
                  }`}>
                    <div className="w-full h-full flex flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-white text-[14px] xl:text-[15px] font-bold leading-snug">
                          {service.headline}
                        </h4>
                        <Link 
                          href={`/services#${service.id}`}
                          className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/35 flex items-center justify-center text-white text-[13px] transition-transform hover:scale-110 flex-shrink-0"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNavigate(service.id);
                          }}
                          aria-label={`View ${service.title} details`}
                        >
                          ↗
                        </Link>
                      </div>
                      <p className="text-white/85 text-[12px] xl:text-[12.5px] font-normal leading-[1.6]">
                        {service.description}
                      </p>
                      <div 
                        className="pt-2 border-t border-white/15 flex items-center justify-between cursor-pointer group/link"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavigate(service.id);
                        }}
                      >
                        <span className="text-[11.5px] font-semibold text-sky-200 group-hover/link:text-white flex items-center gap-1.5 transition-colors">
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

      </div>
    </section>
  );
}
