'use client';

import { useState } from 'react';
import doctorsData from '@/data/doctors.json';
import servicesData from '@/data/services.json';

const TIME_SLOTS = [
  '09:00 AM',
  '10:30 AM',
  '12:00 PM',
  '02:00 PM',
  '03:30 PM',
  '05:00 PM',
];

export default function BookAppointment() {
  const todayStr = new Date().toISOString().split('T')[0];

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

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean server confirmation
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

                {/* 3. Date & Time Selection */}
                <div>
                  <label className="text-[11.5px] font-bold text-[#07234b] uppercase tracking-wider block mb-1.5">
                    3. Preferred Date & Time
                  </label>

                  <div className="space-y-3">
                    {/* Simple Calendar Date Picker */}
                    <div>
                      <input
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#07234b] text-[13.5px] font-medium focus:bg-white focus:border-[#0066cc] focus:ring-2 focus:ring-sky-100 outline-none transition-all cursor-pointer shadow-2xs"
                      />
                    </div>

                    {/* Time Slot Chips */}
                    <div>
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide block mb-1.5">
                        Select Time Slot
                      </span>
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                        {TIME_SLOTS.map((slot) => {
                          const isSelected = formData.timeSlot === slot;
                          return (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setFormData({ ...formData, timeSlot: slot })}
                              className={`py-2 px-1 text-center rounded-xl text-[12px] font-semibold transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#0066cc] text-white shadow-sm ring-2 ring-sky-200 scale-[1.02]'
                                  : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200/80 hover:border-slate-300'
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
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
