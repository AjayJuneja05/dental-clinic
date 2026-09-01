'use client';

import { useState } from 'react';
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
    serviceId: 'aesthetic',
    doctorId: 'any',
    date: todayStr,
    timeSlot: '10:30 AM',
    notes: '',
  });

  // Modal open states
  const [showDateModal, setShowDateModal] = useState(false);
  const [showTimeModal, setShowTimeModal] = useState(false);

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
    <section id="schedule" className="w-full py-16 sm:py-20 lg:py-24 bg-[#f8faff] border-t border-slate-200/70 relative overflow-hidden">
      
      {/* Background Soft Ambient Light Blooms */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="w-full max-w-[1500px] mx-auto px-5 sm:px-12 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-[760px] mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200/60 text-[#0066cc] text-[12px] font-bold tracking-wide uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#0066cc] animate-pulse"></span>
            <span>Online Booking & Priority Scheduling</span>
          </div>

          <h2 className="text-[34px] sm:text-[44px] lg:text-[52px] font-bold text-[#07234b] leading-[1.08] tracking-[-0.035em]">
            Book Your Private <br />
            Smile Consultation
          </h2>

          <p className="text-[14.5px] sm:text-[16px] text-[#475569] leading-[1.65] font-normal mt-4 max-w-[600px] mx-auto">
            Experience compassionate, board-certified care. Select your preferred specialist, treatment, and time for a personalized 3D diagnostic evaluation.
          </p>
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* LEFT: Interactive Booking Form (Span 7) */}
          <div className="lg:col-span-7 bg-white rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] p-6 sm:p-8 lg:p-9 border border-slate-200/90 shadow-[0_15px_40px_-15px_rgba(12,39,82,0.08)] flex flex-col justify-between">
            
            {isSubmitted ? (
              <div className="py-12 px-4 text-center flex flex-col items-center justify-center animate-fadeIn">
                <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-500 border border-emerald-200 flex items-center justify-center text-3xl mb-6 shadow-sm">
                  ✓
                </div>

                <span className="text-[12px] font-bold text-sky-600 uppercase tracking-widest block mb-1">
                  APPOINTMENT CONFIRMED
                </span>
                
                <h3 className="text-[26px] sm:text-[30px] font-bold text-[#07234b] tracking-tight">
                  Thank you, {formData.fullName || 'Patient'}!
                </h3>

                <p className="text-[14.5px] text-[#475569] mt-3 max-w-[460px] leading-relaxed">
                  We have reserved your consultation on <strong className="text-[#07234b]">{formData.date}</strong> at <strong className="text-[#07234b]">{formData.timeSlot}</strong>. A confirmation SMS & email have been sent to your phone.
                </p>

                <div className="mt-8 p-5 bg-sky-50/70 border border-sky-100 rounded-2xl w-full max-w-[440px] text-left text-[13px] text-slate-700 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Service:</span>
                    <span className="font-semibold text-[#07234b]">
                      {servicesData.find(s => s.id === formData.serviceId)?.title || 'Aesthetic Dentistry'}
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
                    <span className="font-semibold text-[#07234b]">Celestia Smiles Beverly Hills</span>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="mt-8 px-8 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-[#07234b] text-[13.5px] font-bold transition-all cursor-pointer"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* 1. Contact Information Row */}
                <div>
                  <label className="text-[11.5px] font-bold text-[#07234b] uppercase tracking-wider block mb-1.5">
                    1. Patient Details
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Full Name *"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#07234b] text-[13.5px] placeholder:text-slate-400 focus:bg-white focus:border-[#0066cc] focus:ring-2 focus:ring-sky-100 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#07234b] text-[13.5px] placeholder:text-slate-400 focus:bg-white focus:border-[#0066cc] focus:ring-2 focus:ring-sky-100 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="mt-2.5">
                    <input
                      type="email"
                      required
                      placeholder="Email Address (for confirmation) *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#07234b] text-[13.5px] placeholder:text-slate-400 focus:bg-white focus:border-[#0066cc] focus:ring-2 focus:ring-sky-100 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* 2. Service & Specialist Row */}
                <div>
                  <label className="text-[11.5px] font-bold text-[#07234b] uppercase tracking-wider block mb-1.5">
                    2. Select Department & Doctor
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Service Select */}
                    <div className="relative">
                      <select
                        value={formData.serviceId}
                        onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#07234b] text-[13.5px] focus:bg-white focus:border-[#0066cc] focus:ring-2 focus:ring-sky-100 outline-none transition-all appearance-none cursor-pointer"
                      >
                        {servicesData.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
                        ▼
                      </div>
                    </div>

                    {/* Doctor Select */}
                    <div className="relative">
                      <select
                        value={formData.doctorId}
                        onChange={(e) => setFormData({ ...formData, doctorId: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#07234b] text-[13.5px] focus:bg-white focus:border-[#0066cc] focus:ring-2 focus:ring-sky-100 outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="any">Any Available Specialist</option>
                        {doctorsData.map((d) => (
                          <option key={d.id} value={d.id}>
                            {d.name} ({d.tag})
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
                        ▼
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Date & Time Selection (Custom Modals matching Image 1 & Image 2) */}
                <div className="relative">
                  <label className="text-[11.5px] font-bold text-[#07234b] uppercase tracking-wider block mb-1.5">
                    3. Preferred Date & Time
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    
                    {/* DATE SELECTOR TRIGGER & MODAL */}
                    <div className="relative">
                      <label className="text-[10.5px] font-semibold text-slate-500 uppercase tracking-wide block mb-1">
                        Consultation Date
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          setShowDateModal(!showDateModal);
                          setShowTimeModal(false);
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-[13.5px] font-medium flex items-center justify-between transition-all cursor-pointer text-left ${
                          showDateModal
                            ? 'bg-white border-[#0066cc] ring-2 ring-sky-100 text-[#07234b]'
                            : 'bg-slate-50 border-slate-200 text-[#07234b] hover:bg-white hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          <svg className="w-4 h-4 text-[#0066cc] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                          </svg>
                          <span className="truncate">
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
                        <svg className={`w-3.5 h-3.5 text-slate-400 transition-transform ${showDateModal ? 'rotate-180 text-[#0066cc]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                          <div className="absolute left-0 top-full mt-2 z-50 w-full sm:w-[310px] bg-white rounded-2xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(12,39,82,0.18)] border border-slate-200/90 animate-fadeIn">
                            
                            {/* Calendar Header with circular arrows */}
                            <div className="flex items-center justify-between mb-4">
                              <button
                                type="button"
                                onClick={handlePrevMonth}
                                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all cursor-pointer active:scale-95"
                                title="Previous Month"
                              >
                                ‹
                              </button>

                              <h4 className="text-[15px] font-bold text-[#07234b]">
                                {MONTH_NAMES[viewMonth]} {viewYear}
                              </h4>

                              <button
                                type="button"
                                onClick={handleNextMonth}
                                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all cursor-pointer active:scale-95"
                                title="Next Month"
                              >
                                ›
                              </button>
                            </div>

                            {/* Days of Week Header */}
                            <div className="grid grid-cols-7 gap-1 text-center mb-2">
                              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day, idx) => (
                                <span
                                  key={day}
                                  className={`text-[11px] font-bold uppercase tracking-tight ${idx === 0 ? 'text-red-400' : 'text-slate-400'}`}
                                >
                                  {day}
                                </span>
                              ))}
                            </div>

                            {/* Days Grid */}
                            <div className="grid grid-cols-7 gap-1 text-center mb-4">
                              {(() => {
                                const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
                                const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay();
                                const cells = [];

                                for (let i = 0; i < firstDayOfWeek; i++) {
                                  cells.push(<div key={`empty-${i}`} className="w-8 h-8" />);
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
                                      className={`w-8 h-8 sm:w-8.5 sm:h-8.5 mx-auto rounded-full text-[13px] font-semibold flex items-center justify-center transition-all cursor-pointer ${
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
                              <span className="text-[10.5px] text-slate-400">
                                {isSundayClosed ? '⚠️ Closed on Sundays' : 'Mon–Sat available'}
                              </span>
                              <button
                                type="button"
                                onClick={handleClearDate}
                                className="px-4 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[12px] font-bold transition-all cursor-pointer"
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
                      <label className="text-[10.5px] font-semibold text-slate-500 uppercase tracking-wide block mb-1">
                        Available Time
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          setShowTimeModal(!showTimeModal);
                          setShowDateModal(false);
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-[13.5px] font-medium flex items-center justify-between transition-all cursor-pointer text-left ${
                          showTimeModal
                            ? 'bg-white border-[#0066cc] ring-2 ring-sky-100 text-[#07234b]'
                            : 'bg-slate-50 border-slate-200 text-[#07234b] hover:bg-white hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          <svg className="w-4 h-4 text-[#0066cc] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                          <span className="truncate">
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
                          <div className="absolute right-0 sm:left-0 top-full mt-2 z-50 w-full sm:w-[260px] bg-white rounded-2xl p-3.5 sm:p-4 shadow-[0_20px_50px_rgba(12,39,82,0.18)] border border-slate-200/90 animate-fadeIn">
                            
                            {/* Modal Header with Selected Time & Close X */}
                            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                              <span className="text-[15px] font-bold text-[#07234b]">
                                {isSundayClosed ? 'Closed' : (formData.timeSlot || 'Select Time')}
                              </span>
                              <button
                                type="button"
                                onClick={() => setShowTimeModal(false)}
                                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center text-xs transition-all cursor-pointer"
                                title="Close"
                              >
                                ✕
                              </button>
                            </div>

                            {/* Available Time Slots List for that specific day */}
                            <div className="max-h-[220px] overflow-y-auto space-y-0.5 pr-1">
                              {isSundayClosed ? (
                                <div className="py-6 px-3 text-center text-[12.5px] text-red-500 bg-red-50/70 rounded-xl font-medium leading-relaxed">
                                  Dental clinic is closed on Sundays.<br />
                                  <span className="text-slate-500 text-[11.5px] mt-1 block">Please select Monday to Saturday in the calendar.</span>
                                </div>
                              ) : availableSlots.length === 0 ? (
                                <div className="py-4 text-center text-[12.5px] text-slate-500">
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
                                      className={`w-full text-left py-2 px-3 rounded-lg text-[13px] transition-all cursor-pointer ${
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
                  <label className="text-[11.5px] font-bold text-[#07234b] uppercase tracking-wider block mb-1.5">
                    4. Specific Questions or Concerns (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us what you'd like to improve about your smile..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-[#07234b] text-[13px] placeholder:text-slate-400 focus:bg-white focus:border-[#0066cc] focus:ring-2 focus:ring-sky-100 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Action */}
                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full bg-[#0066cc] hover:bg-[#0052a3] text-white text-[14.5px] font-bold transition-all shadow-lg shadow-sky-600/25 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Securing Your Reservation...</span>
                      </>
                    ) : (
                      <>
                        <span>Confirm Appointment Request</span>
                        <span>➔</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 text-center mt-2.5">
                    🔒 No upfront payment required • Free cancellation up to 24 hours prior
                  </p>
                </div>

              </form>
            )}

          </div>

          {/* RIGHT: Benefits, Reassurance & Working Hours (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4 sm:gap-5 h-full">
            
            {/* Card 1: What to Expect (Sleek & Compact) */}
            <div className="bg-[#0c2752] text-white rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 shadow-xl border border-sky-900/40">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10.5px] font-bold text-sky-400 uppercase tracking-widest">
                  THE CELESTIA PROMISE
                </span>
                <span className="text-[11px] text-sky-300/80 font-medium">Initial Visit</span>
              </div>

              <h3 className="text-[18px] sm:text-[20px] font-bold tracking-tight text-white leading-tight mb-3.5">
                What’s Included in Your Initial Visit
              </h3>

              <div className="space-y-2.5">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/10 text-sky-300 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                    01
                  </div>
                  <div>
                    <h4 className="text-[13.5px] font-bold text-white leading-snug">
                      High-Definition 3D Digital Scan
                    </h4>
                    <p className="text-[12px] text-white/70 mt-0.5 leading-relaxed">
                      Instant computerized mapping of your teeth with zero gooey impression trays.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/10 text-sky-300 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                    02
                  </div>
                  <div>
                    <h4 className="text-[13.5px] font-bold text-white leading-snug">
                      1-on-1 Specialist Consultation
                    </h4>
                    <p className="text-[12px] text-white/70 mt-0.5 leading-relaxed">
                      Private conversation to discuss your aesthetic goals, lifestyle, and comfort.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/10 text-sky-300 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                    03
                  </div>
                  <div>
                    <h4 className="text-[13.5px] font-bold text-white leading-snug">
                      Itemized Treatment Roadmap
                    </h4>
                    <p className="text-[12px] text-white/70 mt-0.5 leading-relaxed">
                      Transparent timeline, step-by-step preview, and zero unexpected costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Working Hours Card (Decreased size & aligned with modal) */}
            <div className="bg-gradient-to-br from-[#0c6570] to-[#094e57] text-white rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 shadow-xl border border-white/10">
              
              {/* Header */}
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round"></line>
                    <line x1="8" y1="2" x2="8" strokeWidth="2" strokeLinecap="round"></line>
                    <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[18px] sm:text-[20px] font-bold text-white tracking-tight leading-none">
                    Working Hours
                  </h3>
                </div>
              </div>

              <p className="text-[12px] text-white/80 leading-relaxed mb-3">
                Take a look at the Dental Office hours to schedule your appointment.
              </p>

              {/* Days List - Compact Sleek Rows */}
              <div className="space-y-1.5">
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
                    className="rounded-lg sm:rounded-xl bg-white/[0.08] hover:bg-white/[0.12] transition-all px-3.5 py-1.5 sm:py-2 flex items-center justify-between border border-white/10"
                  >
                    <span className="text-[12.5px] sm:text-[13px] font-semibold text-white">
                      {item.day}
                    </span>
                    <span className={`text-[12px] sm:text-[12.5px] font-medium ${item.time === 'Closed' ? 'text-red-300 font-semibold' : 'text-white/90'}`}>
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                type="button"
                onClick={() => {
                  const nameInput = document.querySelector('input[placeholder*="Full Name"]');
                  if (nameInput) {
                    nameInput.focus();
                    nameInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
                className="w-full mt-3.5 py-2.5 sm:py-3 rounded-full bg-white hover:bg-slate-100 text-[#0c6570] font-bold text-[13.5px] sm:text-[14px] transition-all shadow-md text-center block cursor-pointer active:scale-[0.99]"
              >
                Make an Appointment
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
