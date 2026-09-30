'use client';

import { useState, useEffect } from 'react';
import doctorsData from '@/data/doctors.json';
import servicesData from '@/data/services.json';

// Available operating times based on working hours:
// Mon-Thu: 09:00 AM - 10:00 PM
// Fri-Sat: 10:00 AM - 10:00 PM
// Sunday: Closed
const getAvailableTimesForDateStr = (dateStr) => {
  if (!dateStr) return [];
  const parts = dateStr.split('-');
  if (parts.length !== 3) return [];
  const [y, m, d] = parts.map(Number);
  const dateObj = new Date(y, m - 1, d);
  const dayOfWeek = dateObj.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

  if (dayOfWeek === 0) {
    return []; // Sunday: Closed
  }

  let startH = 9;  // Mon-Thu: 9:00 AM
  const endH = 22; // 10:00 PM

  if (dayOfWeek === 5 || dayOfWeek === 6) {
    startH = 10; // Fri-Sat: 10:00 AM
  }

  const slots = [];
  for (let h = startH; h < endH; h++) {
    for (let min = 0; min < 60; min += 30) {
      const period = h >= 12 ? 'PM' : 'AM';
      const displayH = h % 12 === 0 ? 12 : h % 12;
      const displayMin = min === 0 ? '00' : '30';
      slots.push(`${displayH.toString().padStart(2, '0')}:${displayMin} ${period}`);
    }
  }
  return slots;
};

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export default function BookAppointment() {
  const today = new Date();
  const todayStr = today.toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceId: 'general',
    doctorId: 'any',
    date: todayStr,
    timeSlot: '10:30 AM',
    notes: '',
  });

  // State to highlight service select when autofilled
  const [highlightService, setHighlightService] = useState(false);

  // Modal open states
  const [showDateModal, setShowDateModal] = useState(false);
  const [showTimeModal, setShowTimeModal] = useState(false);

  // Autofill service from URL query params, hash params, sessionStorage, or custom event
  useEffect(() => {
    const matchService = (rawVal) => {
      if (!rawVal) return null;
      const clean = rawVal.toLowerCase().replace(/[-_]/g, ' ').trim();
      return servicesData.find(
        (s) =>
          s.id.toLowerCase() === rawVal.toLowerCase().trim() ||
          s.title.toLowerCase() === clean ||
          s.title.toLowerCase().includes(clean) ||
          clean.includes(s.title.toLowerCase()) ||
          clean.includes(s.id.toLowerCase())
      );
    };

    const matchDoctor = (rawVal) => {
      if (!rawVal) return null;
      const clean = rawVal.toLowerCase().trim();
      return doctorsData.find(
        (d) =>
          d.id.toLowerCase() === clean ||
          d.name.toLowerCase().includes(clean) ||
          d.tag.toLowerCase().includes(clean)
      );
    };

    const checkPrefill = () => {
      if (typeof window === 'undefined') return;

      let targetService = null;
      let targetDoctor = null;

      // 1. Check URL query params (?service=... or ?dept=...)
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('service')) targetService = urlParams.get('service');
      else if (urlParams.get('dept')) targetService = urlParams.get('dept');
      if (urlParams.get('doctor')) targetDoctor = urlParams.get('doctor');

      // 2. Check URL hash (e.g. /#schedule?service=... or /#schedule&service=...)
      if (!targetService && window.location.hash) {
        const hash = window.location.hash;
        const qIdx = hash.indexOf('?');
        const ampIdx = hash.indexOf('&');
        const splitIdx = qIdx !== -1 ? qIdx : ampIdx;
        if (splitIdx !== -1) {
          const hashParams = new URLSearchParams(hash.slice(splitIdx + 1));
          if (hashParams.get('service')) targetService = hashParams.get('service');
          else if (hashParams.get('dept')) targetService = hashParams.get('dept');
          if (hashParams.get('doctor')) targetDoctor = hashParams.get('doctor');
        }
      }

      // 3. Check sessionStorage
      try {
        const storedService = sessionStorage.getItem('selected_booking_service');
        if (storedService) {
          targetService = storedService;
          sessionStorage.removeItem('selected_booking_service');
        }
        const storedDoctor = sessionStorage.getItem('selected_booking_doctor');
        if (storedDoctor) {
          targetDoctor = storedDoctor;
          sessionStorage.removeItem('selected_booking_doctor');
        }
      } catch (e) {}

      const scrollToForm = () => {
        setTimeout(() => {
          const section = document.getElementById('schedule');
          if (section) {
            const headerEl = document.querySelector('header');
            const offset = headerEl ? headerEl.offsetHeight + 16 : 84;
            const targetY = section.offsetTop - offset;
            if (typeof window !== 'undefined') {
              if (Math.abs(window.scrollY - targetY) < 100) return;
              if (window.__lenis) {
                window.__lenis.resize();
                window.__lenis.scrollTo(targetY, { duration: 0.8 });
              } else {
                window.scrollTo({ top: targetY, behavior: 'smooth' });
              }
            }
          }
        }, 150);
      };

      // Apply matched service
      if (targetService) {
        const matched = matchService(targetService);
        if (matched) {
          setFormData((prev) => ({ ...prev, serviceId: matched.id }));
          setHighlightService(true);
          setTimeout(() => setHighlightService(false), 3000);
          scrollToForm();
        }
      }

      // Apply matched doctor
      if (targetDoctor) {
        const matchedDoc = matchDoctor(targetDoctor);
        if (matchedDoc) {
          setFormData((prev) => ({ ...prev, doctorId: matchedDoc.id }));
          scrollToForm();
        }
      }
    };

    checkPrefill();

    // Listen for custom events triggered by in-page buttons
    const handleCustomPrefill = (e) => {
      let shouldScroll = false;
      if (e.detail?.serviceId) {
        const matched = matchService(e.detail.serviceId);
        if (matched) {
          setFormData((prev) => ({ ...prev, serviceId: matched.id }));
          setHighlightService(true);
          setTimeout(() => setHighlightService(false), 3000);
          shouldScroll = true;
        }
      }
      if (e.detail?.doctorId) {
        const matchedDoc = matchDoctor(e.detail.doctorId);
        if (matchedDoc) {
          setFormData((prev) => ({ ...prev, doctorId: matchedDoc.id }));
          shouldScroll = true;
        }
      }
      if (shouldScroll) {
        setTimeout(() => {
          const section = document.getElementById('schedule');
          if (section) {
            const headerEl = document.querySelector('header');
            const offset = headerEl ? headerEl.offsetHeight + 16 : 84;
            if (typeof window !== 'undefined' && window.__lenis) {
              window.__lenis.scrollTo(section, { offset: -offset, duration: 0.8 });
            } else {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }, 100);
      }
    };

    window.addEventListener('autofill-booking-service', handleCustomPrefill);
    window.addEventListener('hashchange', checkPrefill);
    window.addEventListener('popstate', checkPrefill);

    return () => {
      window.removeEventListener('autofill-booking-service', handleCustomPrefill);
      window.removeEventListener('hashchange', checkPrefill);
      window.removeEventListener('popstate', checkPrefill);
    };
  }, []);

  // Calendar navigation view
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const availableSlots = getAvailableTimesForDateStr(formData.date);
  const isSundayClosed = formData.date ? new Date(formData.date.split('-')[0], Number(formData.date.split('-')[1]) - 1, formData.date.split('-')[2]).getDay() === 0 : false;

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSelectDate = (dateStr) => {
    const slots = getAvailableTimesForDateStr(dateStr);
    const parts = dateStr.split('-').map(Number);
    const isSun = new Date(parts[0], parts[1] - 1, parts[2]).getDay() === 0;

    let newTime = formData.timeSlot;
    if (isSun) {
      newTime = '';
    } else if (!slots.includes(formData.timeSlot)) {
      newTime = slots[0] || '10:00 AM';
    }

    setFormData({ ...formData, date: dateStr, timeSlot: newTime });
    setShowDateModal(false);
  };

  const handleSelectTime = (slot) => {
    setFormData({ ...formData, timeSlot: slot });
    setShowTimeModal(false);
  };

  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  const handleClearDate = () => {
    setFormData({ ...formData, date: '', timeSlot: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSundayClosed) {
      alert('The clinic is closed on Sundays. Please select a consultation date from Monday to Saturday.');
      return;
    }
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      serviceId: 'aesthetic',
      doctorId: 'any',
      date: todayStr,
      timeSlot: '10:30 AM',
      notes: '',
    });
  };

  return (
    <section id="schedule" className="w-full py-8 sm:py-10 lg:py-12 bg-[#f8faff] border-t border-slate-200/70 relative overflow-hidden">
      
      {/* Background Soft Ambient Light Blooms */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="w-full max-w-[1500px] mx-auto px-5 sm:px-12 lg:px-20 relative z-10">
        
        {/* Section Header (Left-aligned with page) */}
        <div className="w-full mb-10 sm:mb-12 text-left">
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-[#0066cc] text-[12px] font-bold tracking-[0.16em] uppercase mb-3.5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0066cc] animate-pulse"></span>
              <span>Online Booking & Priority Scheduling</span>
            </div>

            <h2 className="text-[36px] sm:text-[46px] lg:text-[52px] font-bold text-[#07234b] leading-[1.1] tracking-[-0.035em]">
              Book Your Private Smile Consultation
            </h2>

            <p className="text-[14px] sm:text-[15.5px] text-[#475569] leading-[1.65] font-normal mt-3.5 max-w-[620px]">
              Experience compassionate, board-certified care. Select your preferred specialist, treatment, and time for a personalized 3D diagnostic evaluation.
            </p>
          </div>
        </div>

        {/* Main 2-Column Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          
          {/* LEFT: Interactive Booking Form (Span 7) */}
          <div className="lg:col-span-7 bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 lg:p-9 border border-slate-200/90 shadow-[0_15px_40px_-15px_rgba(12,39,82,0.08)] flex flex-col justify-between h-full">
            
            {isSubmitted ? (
              <div className="py-12 px-4 text-center flex flex-col items-center justify-center animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 border border-emerald-200 flex items-center justify-center text-2xl mb-4 shadow-sm">
                  ✓
                </div>

                <span className="text-[11px] font-bold text-sky-600 uppercase tracking-widest block mb-1">
                  APPOINTMENT REQUEST SUBMITTED
                </span>
                
                <h3 className="text-[22px] sm:text-[26px] font-bold text-[#07234b] tracking-tight">
                  Thank you, {formData.fullName || 'Patient'}!
                </h3>

                <p className="text-[13.5px] text-[#475569] mt-2 max-w-[440px] leading-relaxed">
                  Your request for an appointment on <strong className="text-[#07234b]">{formData.date}</strong> at <strong className="text-[#07234b]">{formData.timeSlot}</strong> has been successfully submitted.
                  <br />
                  You will receive the appointment confirmation via SMS or email once it is confirmed.
                </p>

                <div className="mt-6 p-4 bg-sky-50/70 border border-sky-100 rounded-xl w-full max-w-[420px] text-left text-[12.5px] text-slate-700 space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Service:</span>
                    <span className="font-semibold text-[#07234b]">
                      {formData.serviceId === 'general' ? 'General Checkup' : (servicesData.find(s => s.id === formData.serviceId)?.title || 'Aesthetic Dentistry')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Specialist:</span>
                    <span className="font-semibold text-[#07234b]">
                      {formData.doctorId === 'any' ? 'First Available Specialist' : doctorsData.find(d => d.id === formData.doctorId)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Location:</span>
                    <span className="font-semibold text-[#07234b]">Vsb Smiles Beverly Hills</span>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="mt-6 px-7 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-[#07234b] text-[13px] font-bold transition-all cursor-pointer"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form suppressHydrationWarning onSubmit={handleSubmit} className="flex flex-col justify-between h-full">
                
                <div className="space-y-5 sm:space-y-6">
                  {/* 1. Contact Information Row */}
                  <div>
                    <label className="text-[11.5px] sm:text-[12px] font-bold text-[#07234b] uppercase tracking-wider block mb-2">
                      1. Patient Details
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                      <div>
                        <input
                          suppressHydrationWarning
                          type="text"
                          required
                          placeholder="Full Name *"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#07234b] text-[16px] sm:text-[13.5px] placeholder:text-slate-400 focus:bg-white focus:border-[#0066cc] focus:ring-2 focus:ring-sky-100 outline-none transition-all shadow-xs"
                        />
                      </div>
                      <div>
                        <input
                          suppressHydrationWarning
                          type="tel"
                          required
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#07234b] text-[16px] sm:text-[13.5px] placeholder:text-slate-400 focus:bg-white focus:border-[#0066cc] focus:ring-2 focus:ring-sky-100 outline-none transition-all shadow-xs"
                        />
                      </div>
                    </div>

                    <div className="mt-3">
                      <input
                        suppressHydrationWarning
                        type="email"
                        required
                        placeholder="Email Address (for confirmation) *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#07234b] text-[16px] sm:text-[13.5px] placeholder:text-slate-400 focus:bg-white focus:border-[#0066cc] focus:ring-2 focus:ring-sky-100 outline-none transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  {/* 2. Service & Specialist Row */}
                  <div>
                    <label className="text-[11.5px] sm:text-[12px] font-bold text-[#07234b] uppercase tracking-wider block mb-2">
                      2. Select Department & Doctor
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                      {/* Service Select */}
                      <div className="relative">
                        <select
                          suppressHydrationWarning
                          value={formData.serviceId}
                          onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                          className={`w-full px-4 py-3 sm:py-3.5 rounded-xl text-[#07234b] text-[16px] sm:text-[13.5px] outline-none transition-all duration-300 appearance-none cursor-pointer shadow-xs ${
                            highlightService
                              ? 'bg-sky-50 border-2 border-[#0066cc] ring-4 ring-sky-200/80 shadow-md font-semibold'
                              : 'bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0066cc] focus:ring-2 focus:ring-sky-100'
                          }`}
                        >
                          <option value="general">General Checkup</option>
                          {servicesData.map((s) => (
                            <option key={s.id} value={s.id}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
                          ▼
                        </div>
                      </div>

                      {/* Doctor Select */}
                      <div className="relative">
                        <select
                          suppressHydrationWarning
                          value={formData.doctorId}
                          onChange={(e) => setFormData({ ...formData, doctorId: e.target.value })}
                          className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#07234b] text-[16px] sm:text-[13.5px] focus:bg-white focus:border-[#0066cc] focus:ring-2 focus:ring-sky-100 outline-none transition-all appearance-none cursor-pointer shadow-xs"
                        >
                          <option value="any">Any Available Specialist</option>
                          {doctorsData.map((d) => (
                            <option key={d.id} value={d.id}>
                              {d.name} ({d.tag})
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
                          ▼
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3. Date & Time Selection (Custom Modals matching Image 1 & Image 2) */}
                  <div className="relative">
                    <label className="text-[11.5px] sm:text-[12px] font-bold text-[#07234b] uppercase tracking-wider block mb-2">
                      3. Preferred Date & Time
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                      
                      {/* DATE SELECTOR TRIGGER & MODAL */}
                      <div className="relative">
                        <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide block mb-1">
                          Consultation Date
                        </label>
                        <button
                          suppressHydrationWarning
                          type="button"
                          onClick={() => {
                            setShowDateModal(!showDateModal);
                            setShowTimeModal(false);
                          }}
                          className={`w-full px-4 py-3 sm:py-3.5 rounded-xl border text-[16px] sm:text-[13.5px] font-medium flex items-center justify-between transition-all cursor-pointer text-left shadow-xs ${
                            showDateModal
                              ? 'bg-white border-[#0066cc] ring-2 ring-sky-100 text-[#07234b]'
                              : 'bg-slate-50 border-slate-200 text-[#07234b] hover:bg-white hover:border-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate">
                            <svg className="w-3.5 h-3.5 text-[#0066cc] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                              <line x1="16" y1="2" x2="16" y2="6"></line>
                              <line x1="8" y1="2" x2="8" y2="6"></line>
                              <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            <span suppressHydrationWarning className="truncate">
                              {formData.date ? (
                                (() => {
                                  const parts = formData.date.split('-').map(Number);
                                  const d = new Date(parts[0], parts[1] - 1, parts[2]);
                                  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
                                })()
                              ) : (
                                'Select Date'
                              )}
                            </span>
                          </div>
                          <svg className={`w-3 h-3 text-slate-400 transition-transform ${showDateModal ? 'rotate-180 text-[#0066cc]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </button>

                        {/* DATE PICKER MODAL (Exact match to reference Image 1) */}
                        {showDateModal && (
                          <>
                            <div
                              className="fixed inset-0 z-40"
                              onClick={() => setShowDateModal(false)}
                            />
                            <div className="absolute left-0 top-full mt-2 z-50 w-full sm:w-[300px] bg-white rounded-2xl p-4 shadow-[0_20px_50px_rgba(12,39,82,0.18)] border border-slate-200/90 animate-fadeIn">
                              
                              {/* Calendar Header with circular arrows */}
                              <div className="flex items-center justify-between mb-3">
                                <button
                                  type="button"
                                  onClick={handlePrevMonth}
                                  className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all cursor-pointer active:scale-95"
                                  title="Previous Month"
                                >
                                  ‹
                                </button>

                                <h4 className="text-[14px] font-bold text-[#07234b]">
                                  {MONTH_NAMES[viewMonth]} {viewYear}
                                </h4>

                                <button
                                  type="button"
                                  onClick={handleNextMonth}
                                  className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all cursor-pointer active:scale-95"
                                  title="Next Month"
                                >
                                  ›
                                </button>
                              </div>

                              {/* Days of Week Header */}
                              <div className="grid grid-cols-7 gap-1 text-center mb-1.5">
                                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day, idx) => (
                                  <span
                                    key={day}
                                    className={`text-[10.5px] font-bold uppercase tracking-tight ${idx === 0 ? 'text-red-400' : 'text-slate-400'}`}
                                  >
                                    {day}
                                  </span>
                                ))}
                              </div>

                              {/* Days Grid */}
                              <div className="grid grid-cols-7 gap-1 text-center mb-3">
                                {(() => {
                                  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
                                  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay();
                                  const cells = [];

                                  for (let i = 0; i < firstDayOfWeek; i++) {
                                    cells.push(<div key={`empty-${i}`} className="w-7 h-7" />);
                                  }

                                  for (let day = 1; day <= daysInMonth; day++) {
                                    const dateStr = `${viewYear}-${String(viewMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                                    const cellDate = new Date(viewYear, viewMonth, day);
                                    const isPast = cellDate < new Date(today.getFullYear(), today.getMonth(), today.getDate());
                                    const isSelected = formData.date === dateStr;
                                    const isSunday = cellDate.getDay() === 0;

                                    cells.push(
                                      <button
                                        key={`day-${day}`}
                                        type="button"
                                        disabled={isPast}
                                        onClick={() => handleSelectDate(dateStr)}
                                        className={`w-7 h-7 sm:w-7.5 sm:h-7.5 mx-auto rounded-full text-[12px] font-semibold flex items-center justify-center transition-all cursor-pointer ${
                                          isSelected
                                            ? 'bg-[#0066cc] text-white font-bold shadow-md scale-105'
                                            : isPast
                                            ? 'text-slate-300 cursor-not-allowed pointer-events-none'
                                            : isSunday
                                            ? 'text-red-500 hover:bg-red-50'
                                            : 'text-slate-700 hover:bg-slate-100'
                                        }`}
                                      >
                                        {day}
                                      </button>
                                    );
                                  }

                                  return cells;
                                })()}
                              </div>

                              {/* Footer with Clear Button */}
                              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                                <span className="text-[10px] text-slate-400">
                                  {isSundayClosed ? '⚠️ Closed on Sundays' : 'Mon–Sat available'}
                                </span>
                                <button
                                  type="button"
                                  onClick={handleClearDate}
                                  className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold transition-all cursor-pointer"
                                >
                                  Clear
                                </button>
                              </div>

                            </div>
                          </>
                        )}
                      </div>

                      {/* TIME SELECTOR TRIGGER & MODAL */}
                      <div className="relative">
                        <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide block mb-1">
                          Available Time
                        </label>
                        <button
                          suppressHydrationWarning
                          type="button"
                          onClick={() => {
                            setShowTimeModal(!showTimeModal);
                            setShowDateModal(false);
                          }}
                          className={`w-full px-4 py-3 sm:py-3.5 rounded-xl border text-[16px] sm:text-[13.5px] font-medium flex items-center justify-between transition-all cursor-pointer text-left shadow-xs ${
                            showTimeModal
                              ? 'bg-white border-[#0066cc] ring-2 ring-sky-100 text-[#07234b]'
                              : 'bg-slate-50 border-slate-200 text-[#07234b] hover:bg-white hover:border-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate">
                            <svg className="w-4 h-4 text-[#0066cc] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span suppressHydrationWarning className="truncate">
                              {isSundayClosed ? (
                                <span className="text-red-500 font-semibold">Closed on Sunday</span>
                              ) : (
                                formData.timeSlot || 'Select Time'
                              )}
                            </span>
                          </div>
                          <svg className={`w-3.5 h-3.5 text-slate-400 transition-transform ${showTimeModal ? 'rotate-180 text-[#0066cc]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </button>

                        {/* TIME PICKER MODAL (Exact match to reference Image 2) */}
                        {showTimeModal && (
                          <>
                            <div
                              className="fixed inset-0 z-40"
                              onClick={() => setShowTimeModal(false)}
                            />
                            <div className="absolute right-0 sm:left-0 top-full mt-2 z-50 w-full sm:w-[250px] bg-white rounded-2xl p-3 shadow-[0_20px_50px_rgba(12,39,82,0.18)] border border-slate-200/90 animate-fadeIn">
                              
                              {/* Modal Header with Selected Time & Close X */}
                              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                                <span className="text-[14px] font-bold text-[#07234b]">
                                  {isSundayClosed ? 'Closed' : (formData.timeSlot || 'Select Time')}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => setShowTimeModal(false)}
                                  className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center text-xs transition-all cursor-pointer"
                                  title="Close"
                                >
                                  ✕
                                </button>
                              </div>

                              {/* Available Time Slots List for that specific day */}
                              <div data-lenis-prevent className="max-h-[200px] overflow-y-auto space-y-0.5 pr-1">
                                {isSundayClosed ? (
                                  <div className="py-5 px-2 text-center text-[12px] text-red-500 bg-red-50/70 rounded-xl font-medium leading-relaxed">
                                    Dental clinic is closed on Sundays.<br />
                                    <span className="text-slate-500 text-[11px] mt-1 block">Please select Monday to Saturday in the calendar.</span>
                                  </div>
                                ) : availableSlots.length === 0 ? (
                                  <div className="py-4 text-center text-[12px] text-slate-500">
                                    No available slots for this date.
                                  </div>
                                ) : (
                                  availableSlots.map((slot) => {
                                    const isSelected = formData.timeSlot === slot;
                                    return (
                                      <button
                                        key={slot}
                                        type="button"
                                        onClick={() => handleSelectTime(slot)}
                                        className={`w-full text-left py-1.5 px-2.5 rounded-lg text-[12.5px] transition-all cursor-pointer ${
                                          isSelected
                                            ? 'bg-slate-100 text-[#07234b] font-bold shadow-xs'
                                            : 'text-slate-600 hover:bg-slate-50 hover:text-[#07234b] font-medium'
                                        }`}
                                      >
                                        {slot}
                                      </button>
                                    );
                                  })
                                )}
                              </div>

                            </div>
                          </>
                        )}
                      </div>

                    </div>
                  </div>

                  {/* 4. Notes / Concerns */}
                  <div>
                    <label className="text-[11.5px] sm:text-[12px] font-bold text-[#07234b] uppercase tracking-wider block mb-2">
                      4. Specific Questions or Concerns (Optional)
                    </label>
                    <textarea
                      suppressHydrationWarning
                      rows={4}
                      placeholder="Tell us what you'd like to improve about your smile..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#07234b] text-[16px] sm:text-[13.5px] placeholder:text-slate-400 focus:bg-white focus:border-[#0066cc] focus:ring-2 focus:ring-sky-100 outline-none transition-all resize-none shadow-xs"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Action (Bottom-aligned cleanly) */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 sm:py-4 rounded-full bg-[#0066cc] hover:bg-[#0052a3] text-white text-[15px] sm:text-[16px] font-bold transition-all shadow-md shadow-sky-600/20 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Securing Your Reservation...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Appointment</span>
                        <span>➔</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 text-center mt-2.5">
                    🔒 No upfront payment required.
                  </p>
                </div>

              </form>
            )}

          </div>

          {/* RIGHT: Benefits, Reassurance & Working Hours (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full gap-4 sm:gap-4.5">
            
            {/* Card 2: Working Hours Card (65% proportion) */}
            <div className="hours-card-65 lg:flex-[65] lg:min-h-0 bg-[#07234b] text-white rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 shadow-xl border border-blue-900/40 flex flex-col justify-between">
              
              {/* Header */}
              <div>
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/15 flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round"></line>
                      <line x1="8" y1="2" x2="8" strokeWidth="2" strokeLinecap="round"></line>
                      <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[17px] sm:text-[19px] font-bold text-white tracking-tight leading-none">
                      Working Hours
                    </h3>
                  </div>
                </div>

                <p className="text-[12px] sm:text-[12.5px] text-white/80 leading-relaxed mb-3 sm:mb-3.5">
                  Take a look at the Dental Office hours to schedule your appointment.
                </p>
              </div>

              {/* Days List - Balanced 65% Height Distribution */}
              <div className="flex-1 flex flex-col justify-between gap-1.5 sm:gap-2 my-0.5">
                {[
                  { day: 'Monday', time: '09:00 AM - 10:00 PM' },
                  { day: 'Tuesday', time: '09:00 AM - 10:00 PM' },
                  { day: 'Wednesday', time: '09:00 AM - 10:00 PM' },
                  { day: 'Thursday', time: '09:00 AM - 10:00 PM' },
                  { day: 'Friday', time: '10:00 AM - 10:00 PM' },
                  { day: 'Saturday', time: '10:00 AM - 10:00 PM' },
                  { day: 'Sunday', time: 'Closed' },
                ].map((item) => (
                  <div 
                    key={item.day}
                    className="rounded-xl bg-white/[0.08] hover:bg-white/[0.14] transition-all px-3.5 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between border border-white/10"
                  >
                    <span className="text-[12.5px] sm:text-[13px] font-semibold text-white">
                      {item.day}
                    </span>
                    <span className={`text-[11.5px] sm:text-[12px] font-medium ${item.time === 'Closed' ? 'text-red-300 font-semibold' : 'text-white/90'}`}>
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Contact Information & Map - 35% proportion */}
            <div className="address-card-35 lg:flex-[35] lg:min-h-0 bg-white rounded-[22px] sm:rounded-[26px] p-3.5 sm:p-4.5 shadow-[0_12px_35px_-12px_rgba(12,39,82,0.08)] border border-slate-200/90 flex flex-col sm:flex-row items-stretch gap-3 sm:gap-3.5">
              
              {/* Left: Contact Details */}
              <div className="flex-1 flex flex-col justify-between py-1 px-1 sm:px-1.5 gap-2 sm:gap-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-9.5 sm:h-9.5 rounded-full bg-sky-50 flex items-center justify-center flex-shrink-0 text-[#0066cc]">
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[14px] sm:text-[15px] font-bold text-[#07234b] leading-tight">Our Location</h4>
                    <p className="text-[13px] sm:text-[14px] text-[#475569] font-medium leading-tight truncate mt-0.5">
                      435 N Bedford Dr, Beverly Hills <span className="text-[11px] text-slate-400 font-normal">(Demo Address)</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-9.5 sm:h-9.5 rounded-full bg-sky-50 flex items-center justify-center flex-shrink-0 text-[#0066cc]">
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[14px] sm:text-[15px] font-bold text-[#07234b] leading-tight">Phone</h4>
                    <p className="text-[13px] sm:text-[14px] text-[#475569] font-medium leading-tight truncate mt-0.5">
                      +1 (310) 859-2432
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-9.5 sm:h-9.5 rounded-full bg-sky-50 flex items-center justify-center flex-shrink-0 text-[#0066cc]">
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[14px] sm:text-[15px] font-bold text-[#07234b] leading-tight">Email Us</h4>
                    <p className="text-[13px] sm:text-[14px] text-[#475569] font-medium leading-tight truncate mt-0.5">
                      hello@vsbsmiles.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Map */}
              <div className="w-full sm:w-[145px] lg:w-[155px] h-[115px] sm:h-auto min-h-[110px] relative rounded-[16px] overflow-hidden bg-slate-100 border border-slate-100 flex-shrink-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.7578275681665!2d-118.4069811!3d34.0757271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc0516666711%3A0xc3b44b8214fb4f88!2s435%20N%20Bedford%20Dr%20%23210%2C%20Beverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1700000000000"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic Location"
                ></iframe>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
