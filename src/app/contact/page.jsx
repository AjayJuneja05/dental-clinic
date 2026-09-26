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

const CLINIC_PHOTOS = [
  {
    id: 1,
    title: 'Vsb Smiles Beverly Hills Studio',
    tag: 'Clinic Exterior',
    description: 'Modern architectural flagship clinic with private patient parking and state-of-the-art dental suites.',
    image: '/assets/clinic-exterior.jpg',
  },
  {
    id: 2,
    title: 'Main Treatment Suite',
    tag: 'Treatment Room 01',
    description: 'Ergonomic luxury patient chair, surgical LED lighting, and real-time intraoral 4K monitors.',
    image: '/assets/clinic-bg.webp',
  },
  {
    id: 3,
    title: 'Digital Intraoral Scanning Studio',
    tag: 'Scanning Lab',
    description: 'Instant 3D digital impressions with zero discomfort or traditional goopy impression trays.',
    image: '/assets/tech-scanner-blue.webp',
  },
  {
    id: 4,
    title: 'Advanced Dental Lab & Sterilization',
    tag: 'Ceramics & Tech Lab',
    description: 'In-house CAD/CAM precision technology and hospital-grade sterilization protocols.',
    image: '/assets/tech-modern-equipment.webp',
  },
  {
    id: 5,
    title: '3D CBCT Diagnostic Imaging Room',
    tag: 'Radiology Suite',
    description: 'Ultra-low radiation 3D volumetric mapping for flawless implant and orthodontic planning.',
    image: '/assets/tech-3d-imaging.webp',
  },
];

export default function ContactPage() {
  // Defaults to 0 (the dummy clinic exterior photo)
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const handleNextPhoto = () => {
    setSelectedPhotoIndex((prev) => (prev + 1) % CLINIC_PHOTOS.length);
  };

  const currentPhoto = CLINIC_PHOTOS[selectedPhotoIndex];

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
              Whether you have a question about our treatments, need to schedule a visit, or simply want to explore our clinic — our team is here for you.
            </p>
          </div>
        </div>

        {/* Bottom wave divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }} />
      </section>

      {/* ─── CONTACT DETAILS + CLINIC PHOTO SHOWCASE (RANDOM) ─── */}
      <section className="w-full max-w-[1500px] mx-auto px-5 sm:px-12 lg:px-20 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT: Contact Info Cards */}
          <div className="space-y-6">
            <div>
              <p className="text-[12px] font-bold text-[#0066cc] tracking-[0.25em] uppercase mb-4">Get in Touch</p>
              <h2 className="text-[34px] sm:text-[42px] font-bold text-[#0c2752] leading-[1.1] tracking-[-0.025em]">
                Visit our clinic or reach out directly.
              </h2>
              <p className="mt-4 text-[14.5px] text-[#475569] leading-[1.75] max-w-[480px]">
                Our concierge front desk is available to assist you with scheduling, insurance queries, and private consultations.
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

          {/* RIGHT: In place of "Send Us Message" -> Clinic Photo Showcase with Randomizer */}
          <div className="flex flex-col">
            <div className="bg-white rounded-[28px] p-6 sm:p-7 border border-slate-200/90 shadow-[0_15px_40px_-15px_rgba(12,39,82,0.08)] flex flex-col justify-between">
              
              {/* Header with Title & Randomize Button */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <div>
                  <span className="text-[11px] font-bold text-[#0066cc] tracking-[0.2em] uppercase">
                    Clinic Gallery
                  </span>
                  <h3 className="text-[20px] font-bold text-[#07234b] leading-tight">
                    Inside Vsb Smiles
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={handleNextPhoto}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-50 hover:bg-sky-100 text-[#0066cc] border border-sky-200/60 text-[12.5px] font-semibold transition-all hover:scale-105 active:scale-95 shadow-xs group"
                  title="View next clinic photo"
                >
                  <span>Next View</span>
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </button>
              </div>

              {/* Featured Photo Box */}
              <div className="relative rounded-[22px] overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-200/80 shadow-md group">
                <img
                  key={currentPhoto.id}
                  src={currentPhoto.image}
                  alt={currentPhoto.title}
                  className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c2752]/90 via-[#0c2752]/25 to-transparent pointer-events-none" />

                {/* Floating Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md rounded-full px-3.5 py-1.5 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11.5px] font-bold text-[#07234b] tracking-wide">
                      {currentPhoto.tag}
                    </span>
                  </div>
                </div>

                {/* Photo counter */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-2.5 py-1 rounded-full bg-[#0c2752]/75 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white/90">
                    {selectedPhotoIndex + 1} / {CLINIC_PHOTOS.length}
                  </div>
                </div>

                {/* Bottom Details Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10 text-white">
                  <h4 className="text-[17px] sm:text-[18px] font-bold leading-snug drop-shadow-sm">
                    {currentPhoto.title}
                  </h4>
                  <p className="text-[12.5px] text-white/80 leading-relaxed mt-1 line-clamp-2">
                    {currentPhoto.description}
                  </p>
                </div>
              </div>

              {/* Thumbnail Selector Strip */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11.5px] font-semibold text-slate-500">
                    Explore Suites & Labs
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Click any view below
                  </span>
                </div>

                <div className="grid grid-cols-5 gap-2">
                  {CLINIC_PHOTOS.map((photo, idx) => (
                    <button
                      key={photo.id}
                      type="button"
                      onClick={() => setSelectedPhotoIndex(idx)}
                      className={`relative rounded-xl overflow-hidden aspect-[4/3] border transition-all ${
                        selectedPhotoIndex === idx
                          ? 'border-[#0066cc] ring-2 ring-[#0066cc]/40 scale-105 shadow-sm'
                          : 'border-slate-200 opacity-60 hover:opacity-100 hover:border-slate-300'
                      }`}
                      title={photo.title}
                    >
                      <img
                        src={photo.image}
                        alt={photo.tag}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Consultation Callout */}
              <div className="mt-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-sky-100 text-[#0066cc] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[12.5px] font-bold text-[#07234b]">Visit our clinic in person</p>
                    <p className="text-[11px] text-slate-500">Complimentary consultations available</p>
                  </div>
                </div>

                <Link
                  href="/#schedule"
                  className="px-3.5 py-1.5 rounded-full bg-[#0066cc] hover:bg-[#0052a3] text-white text-[12px] font-bold transition-all shadow-xs flex-shrink-0"
                >
                  Book Visit →
                </Link>
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
