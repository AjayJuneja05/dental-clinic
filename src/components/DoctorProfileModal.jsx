'use client';

import { useEffect } from 'react';

export default function DoctorProfileModal({ doctor, onClose }) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!doctor) return null;

  // Split name into first and last for left side typography
  const nameParts = doctor.name.replace(/,.*$/, '').split(' ');
  const firstName = nameParts.slice(0, 2).join(' ');
  const lastName = nameParts.slice(2).join(' ') || nameParts[1] || '';

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#0c2752]/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      {/* Pure Clean White Modal Container */}
      <div 
        className="relative w-full max-w-[880px] bg-white rounded-[28px] sm:rounded-[36px] shadow-2xl overflow-hidden border border-slate-100 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 sm:top-5 right-4 sm:right-5 z-30 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-[#0c2752] flex items-center justify-center transition-colors shadow-xs"
          aria-label="Close Profile"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* 2-Column Pure White Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 items-stretch bg-white">
          
          {/* LEFT COLUMN: Pure White Photo Card & Doctor Name */}
          <div className="md:col-span-5 bg-white p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-100">
            
            {/* Clean Doctor Photo Frame (No Background Design) */}
            <div className="w-full h-[320px] sm:h-[360px] rounded-[20px] overflow-hidden bg-slate-50 border border-slate-100 shadow-xs">
              <img
                src={doctor.image}
                alt={doctor.name}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Doctor Name & Role Header */}
            <div className="mt-5 pt-4 border-t border-slate-100">
              <h2 className="text-[24px] sm:text-[26px] font-black text-[#0c2752] uppercase tracking-tight leading-tight">
                {firstName} <br />
                <span className="font-light tracking-wider text-slate-600">{lastName}</span>
              </h2>
              <p className="text-[13px] font-semibold text-sky-600 mt-1.5">
                {doctor.role}
              </p>
              <p className="text-[11.5px] text-slate-400 font-medium mt-0.5">
                Celestia Smiles Dental Studio
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: Pure White Profile Details, Specialties & Contact */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-white">
            
            <div>
              {/* Header: PROFILE */}
              <span className="text-[10.5px] font-bold text-slate-400 tracking-[0.2em] uppercase block mb-1">
                PROFILE
              </span>

              {/* Doctor Name in Medical Blue */}
              <h3 className="text-[22px] sm:text-[24px] font-bold text-[#0066cc] tracking-tight leading-snug">
                {doctor.name}
              </h3>
              <p className="text-[13px] font-semibold text-[#0c2752] mt-0.5">
                {doctor.title || doctor.role}
              </p>

              {/* Academic Degrees */}
              <p className="text-[12px] text-slate-500 font-medium mt-1.5 leading-[1.5]">
                {doctor.degrees || 'Fellowship (Dental Surgery), MS (Aesthetic Orthodontics), BDS'}
              </p>

              {/* Metadata Table (Experience, Languages, Type) */}
              <div className="mt-5 pt-4 border-t border-slate-100 space-y-2.5 text-[12.5px]">
                <div className="flex items-center">
                  <span className="w-28 font-bold text-[#0c2752] uppercase tracking-wider text-[10.5px]">Experience</span>
                  <span className="text-slate-700 font-semibold">{doctor.experience || '14 Years+'}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-28 font-bold text-[#0c2752] uppercase tracking-wider text-[10.5px]">Languages</span>
                  <span className="text-slate-700 font-medium">{doctor.languages || 'English, Spanish'}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-28 font-bold text-[#0c2752] uppercase tracking-wider text-[10.5px]">Types of</span>
                  <span className="text-slate-700 font-medium">{doctor.typesOf || 'Cosmetic & Surgical Dentistry'}</span>
                </div>
              </div>

              {/* Specialities Rounded Pill Badges */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <span className="text-[10.5px] font-bold text-[#0c2752] tracking-wider uppercase block mb-2">
                  Speciality
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {(doctor.specialties || ['Dentistry', 'Surgery', 'Implantology', 'Aesthetic']).map((spec, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 rounded-full text-[11px] font-semibold text-slate-700 border border-slate-200 bg-slate-50/60"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Contact & Clinic Ribbon Footer */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              
              {/* Brand Header */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded-md bg-[#0066cc] text-white font-bold flex items-center justify-center text-[11px]">
                  +
                </div>
                <span className="text-[15px] font-bold text-[#0c2752] tracking-tight">Celestia Smiles</span>
              </div>

              {/* Phone Banner Ribbon */}
              <div className="bg-[#0066cc] text-white px-4 py-2 rounded-xl flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-sky-100" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                  </svg>
                  <span className="text-[12.5px] font-bold tracking-wide">+1 (800) 555-0199</span>
                </div>
                <a
                  href="#schedule"
                  onClick={onClose}
                  className="bg-white text-[#0066cc] hover:bg-sky-50 text-[11px] font-bold px-3 py-1 rounded-lg transition-colors"
                >
                  Book Visit
                </a>
              </div>

              {/* Address / Web info */}
              <div className="mt-2.5 pl-2 border-l-2 border-[#0066cc] text-[11px] text-slate-500 leading-tight">
                <p>care@celestiasmiles.com • www.celestiasmiles.com</p>
                <p className="text-slate-400 mt-0.5">35 Luxury Plaza, Medical Arts Blvd, NY</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
