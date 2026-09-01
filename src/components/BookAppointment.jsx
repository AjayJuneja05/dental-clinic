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

// Helper to generate the next 6 days
const getUpcomingDays = () => {
  const days = [];
  const today = new Date();
  for (let i = 0; i < 6; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const dateStr = d.toISOString().split('T')[0];
    const dayName = i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : d.toLocaleDateString('en-US', { weekday: 'short' });
    const monthDay = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    days.push({ dateStr, dayName, monthDay });
  }
  return days;
};

export default function BookAppointment() {
  const upcomingDays = getUpcomingDays();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceId: 'aesthetic',
    doctorId: 'any',
    date: upcomingDays[0]?.dateStr || new Date().toISOString().split('T')[0],
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
      date: upcomingDays[0]?.dateStr || new Date().toISOString().split('T')[0],
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          
          {/* LEFT: Interactive Booking Form (Span 7) */}
          <div className="lg:col-span-7 bg-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-9 lg:p-10 border border-slate-200/90 shadow-[0_15px_40px_-15px_rgba(12,39,82,0.08)]">
            
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
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Contact Information Row */}
                <div>
                  <label className="text-[12px] font-bold text-[#07234b] uppercase tracking-wider block mb-2">
                    1. Patient Details
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Full Name *"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#07234b] text-[14px] placeholder:text-slate-400 focus:bg-white focus:border-[#0066cc] focus:ring-2 focus:ring-sky-100 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#07234b] text-[14px] placeholder:text-slate-400 focus:bg-white focus:border-[#0066cc] focus:ring-2 focus:ring-sky-100 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="mt-3">
                    <input
                      type="email"
                      required
                      placeholder="Email Address (for confirmation) *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#07234b] text-[14px] placeholder:text-slate-400 focus:bg-white focus:border-[#0066cc] focus:ring-2 focus:ring-sky-100 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* 2. Service & Specialist Row */}
                <div>
                  <label className="text-[12px] font-bold text-[#07234b] uppercase tracking-wider block mb-2">
                    2. Select Department & Doctor
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service Select */}
                    <div className="relative">
                      <select
                        value={formData.serviceId}
                        onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#07234b] text-[14px] focus:bg-white focus:border-[#0066cc] focus:ring-2 focus:ring-sky-100 outline-none transition-all appearance-none cursor-pointer"
                      >
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
                        value={formData.doctorId}
                        onChange={(e) => setFormData({ ...formData, doctorId: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#07234b] text-[14px] focus:bg-white focus:border-[#0066cc] focus:ring-2 focus:ring-sky-100 outline-none transition-all appearance-none cursor-pointer"
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

                {/* 3. Date & Time Selection */}
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <label className="text-[12px] font-bold text-[#07234b] uppercase tracking-wider">
                      3. Preferred Date & Time
                    </label>
                  </div>

                  {/* Interactive Date Pills */}
                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide block mb-2">
                      Choose Consultation Date
                    </span>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {upcomingDays.map((d) => {
                        const isSelected = formData.date === d.dateStr;
                        return (
                          <button
                            key={d.dateStr}
                            type="button"
                            onClick={() => setFormData({ ...formData, date: d.dateStr })}
                            className={`py-2.5 px-1 rounded-xl text-center flex flex-col items-center justify-center transition-all cursor-pointer border ${
                              isSelected
                                ? 'bg-[#07234b] text-white border-[#07234b] shadow-md ring-2 ring-sky-200 scale-[1.02]'
                                : 'bg-slate-50 hover:bg-slate-100 text-[#07234b] border-slate-200/80 hover:border-slate-300'
                            }`}
                          >
                            <span className={`text-[10px] uppercase font-bold tracking-tight ${isSelected ? 'text-sky-300' : 'text-slate-400'}`}>
                              {d.dayName}
                            </span>
                            <span className="text-[12.5px] font-bold mt-0.5">
                              {d.monthDay}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Or Custom Date Input */}
                  <div>
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#07234b] text-[13.5px] font-medium focus:bg-white focus:border-[#0066cc] focus:ring-2 focus:ring-sky-100 outline-none transition-all cursor-pointer"
                    />
                  </div>

                  {/* Interactive Time Slot Chips */}
                  <div className="pt-1">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide block mb-2">
                      Select Available Time Slot
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
                                ? 'bg-[#0066cc] text-white shadow-md ring-2 ring-sky-200 scale-[1.02]'
                                : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200/80'
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* 4. Notes / Concerns */}
                <div>
                  <label className="text-[12px] font-bold text-[#07234b] uppercase tracking-wider block mb-2">
                    4. Specific Questions or Concerns (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us what you'd like to improve about your smile..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#07234b] text-[14px] placeholder:text-slate-400 focus:bg-white focus:border-[#0066cc] focus:ring-2 focus:ring-sky-100 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-[#0066cc] hover:bg-[#0052a3] text-white text-[15px] font-bold transition-all shadow-lg shadow-sky-600/25 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
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

                  <p className="text-[11.5px] text-slate-400 text-center mt-3">
                    🔒 No upfront payment required • Free cancellation up to 24 hours prior
                  </p>
                </div>

              </form>
            )}

          </div>

          {/* RIGHT: Benefits, Reassurance & Clinic Info (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card 1: What to Expect */}
            <div className="bg-[#0c2752] text-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 shadow-xl border border-sky-900/40">
              <span className="text-[11.5px] font-bold text-sky-400 uppercase tracking-widest block mb-2">
                THE CELESTIA PROMISE
              </span>
              <h3 className="text-[22px] sm:text-[24px] font-bold tracking-tight text-white leading-tight">
                What’s Included in Your Initial Visit
              </h3>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-white/10 text-sky-300 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    01
                  </div>
                  <div>
                    <h4 className="text-[14.5px] font-bold text-white leading-snug">
                      High-Definition 3D Digital Scan
                    </h4>
                    <p className="text-[12.5px] text-white/70 mt-0.5 leading-relaxed">
                      Instant computerized mapping of your teeth with zero gooey impression trays.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-white/10 text-sky-300 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    02
                  </div>
                  <div>
                    <h4 className="text-[14.5px] font-bold text-white leading-snug">
                      1-on-1 Specialist Consultation
                    </h4>
                    <p className="text-[12.5px] text-white/70 mt-0.5 leading-relaxed">
                      Private conversation to discuss your aesthetic goals, lifestyle, and comfort.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-white/10 text-sky-300 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    03
                  </div>
                  <div>
                    <h4 className="text-[14.5px] font-bold text-white leading-snug">
                      Itemized Treatment Roadmap
                    </h4>
                    <p className="text-[12.5px] text-white/70 mt-0.5 leading-relaxed">
                      Transparent timeline, step-by-step preview, and zero unexpected costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Contact & Location Quick Info (Exact match to reference card) */}
            <div className="bg-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 border border-slate-100 shadow-[0_12px_35px_-12px_rgba(7,35,75,0.06)] divide-y divide-slate-100">
              
              {/* Clinic Location */}
              <div className="flex items-center gap-4 pb-5">
                <div className="w-12 h-12 rounded-full bg-[#f0f7ff] flex items-center justify-center flex-shrink-0 text-xl shadow-xs">
                  📍
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#8a9bb0] uppercase tracking-[0.06em] block">
                    CLINIC LOCATION
                  </span>
                  <p className="text-[15px] sm:text-[16px] font-bold text-[#07234b] mt-0.5 leading-snug">
                    9454 Wilshire Blvd, Beverly Hills, CA
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-center gap-4 py-5">
                <div className="w-12 h-12 rounded-full bg-[#f0f7ff] flex items-center justify-center flex-shrink-0 text-xl shadow-xs">
                  ⏰
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#8a9bb0] uppercase tracking-[0.06em] block">
                    OPERATING HOURS
                  </span>
                  <p className="text-[15px] sm:text-[16px] font-bold text-[#07234b] mt-0.5 leading-snug">
                    Mon – Sat: 8:00 AM – 7:00 PM
                  </p>
                </div>
              </div>

              {/* Immediate Telephone Booking */}
              <div className="flex items-center gap-4 pt-5">
                <div className="w-12 h-12 rounded-full bg-[#e6fbf2] flex items-center justify-center flex-shrink-0 text-xl shadow-xs">
                  📞
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#8a9bb0] uppercase tracking-[0.06em] block">
                    IMMEDIATE TELEPHONE BOOKING
                  </span>
                  <a 
                    href="tel:18005550199" 
                    className="text-[15px] sm:text-[16px] font-bold text-[#0066cc] hover:underline mt-0.5 block leading-snug"
                  >
                    +1 (800) 555-0199
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
