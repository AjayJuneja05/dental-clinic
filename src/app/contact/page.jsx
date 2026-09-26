'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

const WORKING_HOURS = [
  { day: 'Monday',    time: '09:00 AM – 10:00 PM' },
  { day: 'Tuesday',   time: '09:00 AM – 10:00 PM' },
  { day: 'Wednesday', time: '09:00 AM – 10:00 PM' },
  { day: 'Thursday',  time: '09:00 AM – 10:00 PM' },
  { day: 'Friday',    time: '10:00 AM – 10:00 PM' },
  { day: 'Saturday',  time: '10:00 AM – 10:00 PM' },
  { day: 'Sunday',    time: 'Closed', closed: true },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative w-full overflow-hidden bg-[#0c2752] pt-14 sm:pt-20">
        {/* Background Clinic Photo with Navy Color Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/clinic-bg.webp" 
            alt="Modern dental clinic interior" 
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-[#0c2752]/85 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c2752] via-[#0c2752]/60 to-[#0c2752]/80"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1500px] mx-auto px-5 sm:px-12 lg:px-20 pt-16 pb-24 sm:pt-20 sm:pb-32">
          <div className="max-w-[680px]">
            <p className="text-[12px] font-bold text-sky-400 tracking-[0.25em] uppercase mb-5">
              Contact Us
            </p>
            <h1 className="text-[42px] sm:text-[56px] lg:text-[66px] font-bold text-white leading-[1.05] tracking-[-0.03em]">
              We'd love to<br />
              hear from <span className="italic text-sky-300">you.</span>
            </h1>
            <p className="mt-6 text-[14.5px] sm:text-[15.5px] text-white/70 leading-[1.75] max-w-[520px]">
              Whether you have a question about our treatments, need to schedule a visit, or simply want to learn more — our team is here to help.
            </p>
          </div>
        </div>

        {/* Bottom wave divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }} />
      </section>

      {/* ─── CONTACT DETAILS + FORM ─── */}
      <section className="w-full max-w-[1500px] mx-auto px-5 sm:px-12 lg:px-20 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* LEFT: Contact Info Cards */}
          <div className="space-y-6">
            <div>
              <p className="text-[12px] font-bold text-[#0066cc] tracking-[0.25em] uppercase mb-4">Get in Touch</p>
              <h2 className="text-[34px] sm:text-[42px] font-bold text-[#0c2752] leading-[1.1] tracking-[-0.025em]">
                Visit our clinic or reach out directly.
              </h2>
              <p className="mt-4 text-[14.5px] text-[#475569] leading-[1.75] max-w-[480px]">
                Our friendly front desk team is available to assist you with scheduling, insurance questions, and any concerns you may have.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Location */}
              <div className="bg-white rounded-[22px] p-6 border border-slate-200/90 shadow-[0_4px_24px_-8px_rgba(12,39,82,0.08)] hover:shadow-[0_8px_32px_-8px_rgba(0,102,204,0.15)] hover:border-sky-200 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0066cc] flex items-center justify-center mb-4 group-hover:bg-[#0066cc] group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <h3 className="text-[15px] font-bold text-[#07234b] mb-1">Our Location</h3>
                <p className="text-[13px] text-[#475569] leading-[1.65]">
                  9454 Wilshire Blvd, Suite 800<br />
                  Beverly Hills, CA 90212
                </p>
                <a 
                  href="https://maps.google.com/?q=9454+Wilshire+Blvd+Beverly+Hills+CA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-[12.5px] font-semibold text-[#0066cc] hover:text-[#0052a3] transition-colors"
                >
                  <span>Get Directions</span>
                  <span>→</span>
                </a>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-[22px] p-6 border border-slate-200/90 shadow-[0_4px_24px_-8px_rgba(12,39,82,0.08)] hover:shadow-[0_8px_32px_-8px_rgba(0,102,204,0.15)] hover:border-sky-200 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0066cc] flex items-center justify-center mb-4 group-hover:bg-[#0066cc] group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <h3 className="text-[15px] font-bold text-[#07234b] mb-1">Call Us</h3>
                <p className="text-[13px] text-[#475569] leading-[1.65]">
                  +1 (310) 859-2432<br />
                  +1 (800) 555-0199
                </p>
                <a 
                  href="tel:13108592432"
                  className="inline-flex items-center gap-1.5 mt-3 text-[12.5px] font-semibold text-[#0066cc] hover:text-[#0052a3] transition-colors"
                >
                  <span>Call Now</span>
                  <span>→</span>
                </a>
              </div>

              {/* Email */}
              <div className="bg-white rounded-[22px] p-6 border border-slate-200/90 shadow-[0_4px_24px_-8px_rgba(12,39,82,0.08)] hover:shadow-[0_8px_32px_-8px_rgba(0,102,204,0.15)] hover:border-sky-200 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0066cc] flex items-center justify-center mb-4 group-hover:bg-[#0066cc] group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h3 className="text-[15px] font-bold text-[#07234b] mb-1">Email Us</h3>
                <p className="text-[13px] text-[#475569] leading-[1.65]">
                  hello@vsbsmiles.com<br />
                  concierge@vsbsmiles.com
                </p>
                <a 
                  href="mailto:hello@vsbsmiles.com"
                  className="inline-flex items-center gap-1.5 mt-3 text-[12.5px] font-semibold text-[#0066cc] hover:text-[#0052a3] transition-colors"
                >
                  <span>Send Email</span>
                  <span>→</span>
                </a>
              </div>

              {/* Emergency */}
              <div className="bg-white rounded-[22px] p-6 border border-slate-200/90 shadow-[0_4px_24px_-8px_rgba(12,39,82,0.08)] hover:shadow-[0_8px_32px_-8px_rgba(0,102,204,0.15)] hover:border-sky-200 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0066cc] flex items-center justify-center mb-4 group-hover:bg-[#0066cc] group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-[15px] font-bold text-[#07234b] mb-1">Emergency</h3>
                <p className="text-[13px] text-[#475569] leading-[1.65]">
                  Dental emergencies?<br />
                  We offer same-day care.
                </p>
                <Link 
                  href="/#schedule"
                  className="inline-flex items-center gap-1.5 mt-3 text-[12.5px] font-semibold text-[#0066cc] hover:text-[#0052a3] transition-colors"
                >
                  <span>Book Urgent Visit</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div>
            <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-slate-200/90 shadow-[0_15px_40px_-15px_rgba(12,39,82,0.08)]">
              <h3 className="text-[20px] font-bold text-[#07234b] mb-1">Send Us a Message</h3>
              <p className="text-[13.5px] text-[#475569] mb-6">Fill in the form and we'll get back to you within 24 hours.</p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12.5px] font-semibold text-[#0c2752] mb-1.5">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Ajay Juneja"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[14px] text-[#07234b] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[12.5px] font-semibold text-[#0c2752] mb-1.5">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[14px] text-[#07234b] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-400 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12.5px] font-semibold text-[#0c2752] mb-1.5">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (310) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[14px] text-[#07234b] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[12.5px] font-semibold text-[#0c2752] mb-1.5">Subject</label>
                      <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[14px] text-[#07234b] focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-400 transition-all appearance-none"
                      >
                        <option value="">Select a topic</option>
                        <option value="general">General Inquiry</option>
                        <option value="appointment">Appointment Question</option>
                        <option value="insurance">Insurance & Billing</option>
                        <option value="treatment">Treatment Information</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12.5px] font-semibold text-[#0c2752] mb-1.5">Your Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[14px] text-[#07234b] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-400 transition-all resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#0066cc] hover:bg-[#0052a3] text-white text-[14.5px] font-bold transition-all shadow-lg shadow-sky-600/20 hover:shadow-sky-600/40 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    Send Message →
                  </button>

                  <p className="text-[12px] text-[#475569]/60 text-center mt-2">
                    We respect your privacy. Your information will never be shared.
                  </p>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <h3 className="text-[20px] font-bold text-[#07234b] mb-2">MESSAGE SENT</h3>
                  <p className="text-[14px] text-[#475569] leading-[1.7] max-w-[360px] mx-auto">
                    Thank you, {formData.name || 'there'}! We've received your message and will get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[13px] font-semibold text-[#07234b] transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLINIC IMAGE + MAP ─── */}
      <section className="relative w-full bg-[#f8fafc] border-y border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-100/60 rounded-full blur-[120px] pointer-events-none" />
        <div className="w-full max-w-[1500px] mx-auto px-5 sm:px-12 lg:px-20 py-20 sm:py-28 relative z-10">
          <div className="text-center max-w-[600px] mx-auto mb-14">
            <p className="text-[12px] font-bold text-[#0066cc] tracking-[0.25em] uppercase mb-4">Our Clinic</p>
            <h2 className="text-[34px] sm:text-[44px] font-bold text-[#0c2752] leading-[1.1] tracking-[-0.025em]">
              A modern sanctuary designed for your comfort.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Clinic Interior Image */}
            <div className="relative rounded-[28px] overflow-hidden aspect-[4/3] shadow-2xl shadow-sky-900/15 bg-slate-100 border border-slate-200/80 group">
              <img
                src="/assets/clinic-bg.webp"
                alt="Vsb Smiles — Modern Treatment Suite"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c2752]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur rounded-2xl px-5 py-3 shadow-lg">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                  <div>
                    <p className="text-[13px] font-semibold text-[#07234b]">Vsb Smiles Beverly Hills</p>
                    <p className="text-[11px] text-[#475569]">State-of-the-art treatment suites</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dental Equipment / Tech Image */}
            <div className="relative rounded-[28px] overflow-hidden aspect-[4/3] shadow-2xl shadow-sky-900/15 bg-slate-100 border border-slate-200/80 group">
              <img
                src="/assets/tech-modern-equipment.webp"
                alt="Advanced dental technology and precision instruments"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c2752]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur rounded-2xl px-5 py-3 shadow-lg">
                  <div className="w-3 h-3 rounded-full bg-sky-400 animate-pulse flex-shrink-0" />
                  <div>
                    <p className="text-[13px] font-semibold text-[#07234b]">Advanced Technology</p>
                    <p className="text-[11px] text-[#475569]">AI diagnostics & 3D imaging suites</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WORKING HOURS + MAP ─── */}
      <section className="relative w-full bg-[#0c2752] overflow-hidden">
        {/* Background Clinic Photo with Navy Color Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/clinic-bg.webp" 
            alt="Modern dental clinic interior" 
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-[#0c2752]/85 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c2752] via-[#0c2752]/60 to-[#0c2752]/80"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1500px] mx-auto px-5 sm:px-12 lg:px-20 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* Left: Hours */}
            <div>
              <p className="text-[12px] font-bold text-sky-400 tracking-[0.25em] uppercase mb-4">Working Hours</p>
              <h2 className="text-[34px] sm:text-[42px] font-bold text-white leading-[1.1] tracking-[-0.025em] mb-3">
                We're here when you need us.
              </h2>
              <p className="text-[14px] text-white/60 leading-[1.7] mb-8 max-w-[440px]">
                Walk-ins welcome during business hours. We recommend scheduling an appointment for the best experience.
              </p>

              <div className="space-y-0 rounded-[20px] overflow-hidden border border-white/10 shadow-lg">
                {WORKING_HOURS.map((row, i) => (
                  <div 
                    key={i} 
                    className={`flex items-center justify-between py-3.5 px-5 ${
                      i !== 6 ? 'border-b border-white/[0.06]' : ''
                    } ${row.closed ? 'bg-white/[0.02]' : 'bg-white/[0.05]'}`}
                  >
                    <span className="text-[13.5px] font-semibold text-white/85">{row.day}</span>
                    <span className={`text-[13.5px] font-medium ${row.closed ? 'text-red-400/80' : 'text-white/60'}`}>
                      {row.time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3 text-[12.5px] text-white/50">
                <svg className="w-4 h-4 text-sky-400/70 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                <span>Complimentary valet parking available at all visits</span>
              </div>
            </div>

            {/* Right: Google Map */}
            <div className="relative rounded-[24px] overflow-hidden border border-white/10 shadow-2xl min-h-[400px] lg:min-h-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.7578275681665!2d-118.4069811!3d34.0757271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc0516666711%3A0xc3b44b8214fb4f88!2s435%20N%20Bedford%20Dr%20%23210%2C%20Beverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1700000000000"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vsb Smiles Clinic Location"
              ></iframe>

              {/* Floating Location Badge */}
              <div className="absolute top-5 left-5 z-10">
                <div className="inline-flex items-center gap-2.5 bg-white/95 backdrop-blur rounded-full px-4 py-2 shadow-lg">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                  <span className="text-[12px] font-bold text-[#07234b]">Beverly Hills, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="w-full max-w-[1500px] mx-auto px-5 sm:px-12 lg:px-20 py-20 sm:py-24">
        <div className="bg-gradient-to-br from-[#0c2752] to-[#07234b] rounded-[32px] overflow-hidden relative">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/assets/clinic-bg.webp" 
              alt="" 
              className="w-full h-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c2752] via-[#0c2752]/80 to-[#0c2752]/60" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 px-8 sm:px-12 py-12 sm:py-14">
            <div className="max-w-[520px]">
              <p className="text-[12px] font-bold text-sky-400 tracking-[0.25em] uppercase mb-3">Ready to Get Started?</p>
              <h2 className="text-[30px] sm:text-[38px] font-bold text-white leading-[1.1] tracking-[-0.025em]">
                Your perfect smile is just one appointment away.
              </h2>
              <p className="mt-4 text-[14px] text-white/60 leading-[1.7]">
                Schedule a complimentary consultation and let our specialists craft a personalized treatment plan for you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
              <Link
                href="/#schedule"
                className="px-8 py-3.5 rounded-full bg-[#0066cc] hover:bg-[#0052a3] text-white text-[14.5px] font-bold transition-all shadow-lg shadow-sky-600/30 hover:scale-[1.02] active:scale-[0.99]"
              >
                Book Appointment →
              </Link>
              <a
                href="tel:13108592432"
                className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 hover:border-white/25 text-white text-[14.5px] font-bold transition-all"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
