'use client';

import { useState } from 'react';
import DoctorProfileModal from './DoctorProfileModal';
import doctorsData from '@/data/doctors.json';

const SPECIALISTS_DATA = doctorsData;

export default function Specialists() {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Duplicated list for seamless infinite continuous marquee
  const marqueeList = [...SPECIALISTS_DATA, ...SPECIALISTS_DATA];

  return (
    <section id="specialists" className="w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden relative">
      
      {/* Header Container */}
      <div className="w-full max-w-[1500px] mx-auto px-5 sm:px-12 lg:px-20 mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        
        {/* Left: Title & Subtitle */}
        <div className="max-w-[650px]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-[12px] font-semibold tracking-wide uppercase mb-3.5">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
            <span>World-Class Clinical Team</span>
          </div>

          <h2 className="text-[36px] sm:text-[46px] lg:text-[54px] font-bold text-[#0c2752] leading-[1.08] tracking-[-0.035em]">
            Meet the minds <br />
            behind your smile
          </h2>

          <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.65] font-normal mt-4 max-w-[560px]">
            Our board-certified specialists bring precision, empathy, and artistry to every treatment — uniting years of academic excellence with a shared passion for personalized smile design.
          </p>
        </div>

        {/* Right: Actions & Live Availability */}
        <div className="flex flex-col items-start md:items-end gap-3">
          <div className="flex items-center gap-2 text-[13px] text-[#0c2752] font-medium bg-slate-50 px-4 py-2 rounded-xl border border-slate-200/70">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
            <span>Accepting Consultations Today</span>
          </div>

          <p className="text-[12.5px] text-slate-500">
            Click any specialist to view full credentials & bio
          </p>
        </div>

      </div>

      {/* Infinite Smooth Continuous Carousel Track */}
      <div 
        className="relative w-full overflow-hidden select-none py-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* Left & Right Elegant Edge Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none"></div>

        {/* Moving Flex Container */}
        <div 
          className="animate-infinite-scroll flex gap-6"
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {marqueeList.map((specialist, index) => (
            <div
              key={`${specialist.id}-${index}`}
              onClick={() => setSelectedDoctor(specialist)}
              className="w-[300px] sm:w-[320px] h-[470px] flex-shrink-0 bg-white rounded-[24px] p-3 border border-slate-200/80 shadow-[0_10px_30px_-10px_rgba(12,39,82,0.08)] hover:shadow-[0_20px_45px_-12px_rgba(2,132,199,0.22)] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              
              {/* Top Photo Frame */}
              <div className="relative w-full h-[270px] rounded-[18px] overflow-hidden bg-slate-100">
                
                {/* Specialty Tag Badge */}
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-[11px] font-bold text-[#0c2752] px-3 py-1 rounded-full shadow-xs border border-white/60 z-10">
                  {specialist.tag}
                </span>

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-[#0c2752]/85 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs z-10">
                  <span className="text-amber-400 text-[11px]">★</span>
                  <span>{specialist.rating}</span>
                </div>

                {/* Doctor Portrait Image */}
                <img
                  src={specialist.image}
                  alt={specialist.name}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle gradient overlay at bottom of photo */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
              </div>

              {/* Doctor Details Body */}
              <div className="px-2 pt-3 pb-1 flex flex-col justify-between flex-1">
                
                <div>
                  {/* Name */}
                  <h3 className="text-[17.5px] sm:text-[18.5px] font-bold text-[#0c2752] group-hover:text-sky-600 transition-colors leading-tight">
                    {specialist.name}
                  </h3>

                  {/* Role & Experience */}
                  <p className="text-[12px] font-semibold text-sky-600 mt-1">
                    {specialist.role} • {specialist.experience}
                  </p>

                  {/* Clinical Bio */}
                  <p className="text-[11.5px] text-[#64748b] leading-[1.5] mt-2 line-clamp-2">
                    {specialist.bio}
                  </p>
                </div>

                {/* Bottom Card Footer with Next Slot & Action */}
                <div className="flex items-center justify-between pt-3 mt-2 border-t border-slate-100">
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200/60">
                    {specialist.nextSlot}
                  </span>

                  <span className="inline-flex items-center gap-1 text-[12px] font-bold text-[#0c2752] group-hover:text-sky-600 transition-colors">
                    <span>View Profile</span>
                    <span className="text-[13px] group-hover:translate-x-0.5 transition-transform">↗</span>
                  </span>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Doctor Profile Modal Dialog */}
      {selectedDoctor && (
        <DoctorProfileModal
          doctor={selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
        />
      )}

    </section>
  );
}
