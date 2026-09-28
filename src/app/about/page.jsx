'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

const TEAM_VALUES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>
    ),
    title: 'Patient-First Care',
    desc: 'Every decision we make starts and ends with your comfort, safety, and wellbeing at the forefront.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
      </svg>
    ),
    title: 'Clinical Excellence',
    desc: 'Our specialists bring decades of expertise, continuously advancing their knowledge through global training programs.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
      </svg>
    ),
    title: 'Trust & Transparency',
    desc: 'We believe in open communication — explaining every treatment, cost, and expectation with complete honesty.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
      </svg>
    ),
    title: 'Aesthetic Mastery',
    desc: 'We treat dentistry as an art form — blending science with beauty to craft results that feel naturally perfect.',
  },
];

const MILESTONES = [
  { year: '2009', title: 'Founded in Beverly Hills', desc: 'Vsb Smiles opened its doors with a singular mission: redefine the dental experience.' },
  { year: '2013', title: 'First Implant Centre', desc: 'Launched our dedicated implantology wing with state-of-the-art surgical suites.' },
  { year: '2018', title: 'AI Diagnostics Integrated', desc: 'Became one of the first clinics in California to deploy AI-assisted dental imaging.' },
  { year: '2022', title: '4,000 Smiles Milestone', desc: 'Celebrated transforming over 4,000 smiles and earning a 97% patient satisfaction rate.' },
  { year: '2025', title: 'Expansion & New Wing', desc: 'Unveiled our expanded clinic with 12 treatment suites and a dedicated smile studio.' },
];

function VideoCard({ number, label, bgImage }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative group rounded-[24px] overflow-hidden bg-[#07234b] border border-white/10 shadow-2xl shadow-sky-900/30 aspect-video">
      {/* Dental Video Poster / Background Image */}
      {bgImage ? (
        <>
          <img 
            src={bgImage} 
            alt={label} 
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-55"
          />
          <div className="absolute inset-0 bg-[#07234b]/65 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07234b] via-transparent to-[#07234b]/40" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c2752] via-[#0d3265] to-[#0a1e40]" />
      )}

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-500/15 rounded-full blur-[80px] pointer-events-none" />

      {/* Label pill */}
      <div className="absolute top-5 left-5 z-10">
        <span className="px-3 py-1 rounded-full bg-white/15 border border-white/20 backdrop-blur-md text-[11px] font-bold text-white uppercase tracking-widest shadow-sm">
          {label}
        </span>
      </div>

      {/* Video number */}
      <div className="absolute top-5 right-5 z-10">
        <span className="w-8 h-8 rounded-full bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center text-[13px] font-bold text-white/80">
          {number}
        </span>
      </div>

      {/* Center play button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <button
          onClick={() => setPlaying(true)}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 border border-white/30 backdrop-blur-md flex items-center justify-center
            hover:bg-white/30 hover:scale-110 hover:border-white/50 transition-all duration-300 group/btn shadow-xl shadow-black/40"
          aria-label="Play video"
        >
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8 text-white ml-1 group-hover/btn:scale-105 transition-transform"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
        <p className="mt-4 text-[13px] text-white/70 font-medium">Click to play video</p>
      </div>

      {/* Bottom info bar */}
      <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10">
        <p className="text-[13px] font-semibold text-white">Add your video here</p>
        <p className="text-[11.5px] text-white/60 mt-0.5">Replace this placeholder with your own video file</p>
      </div>
    </div>
  );
}

export default function AboutPage() {
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

        {/* Ambient blobs */}
        <div className="absolute top-0 right-[10%] w-[600px] h-[600px] bg-sky-600/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-[5%] w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none" />


        <div className="relative z-10 w-full max-w-[1500px] mx-auto px-5 sm:px-12 lg:px-20 pt-16 pb-24 sm:pt-20 sm:pb-32">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            {/* Left: Text */}
            <div className="max-w-[680px]">
              <p className="text-[12px] font-bold text-sky-400 tracking-[0.25em] uppercase mb-5">
                About Us
              </p>
              <h1 className="text-[42px] sm:text-[56px] lg:text-[66px] font-bold text-white leading-[1.05] tracking-[-0.03em]">
                Where science<br />
                meets the <span className="italic text-sky-300">art</span> of<br />
                a perfect smile.
              </h1>
              <p className="mt-6 text-[14.5px] sm:text-[15.5px] text-white/70 leading-[1.75] max-w-[520px]">
                At Vsb Smiles, we've built more than a dental clinic — we've created a sanctuary where world-class expertise, advanced technology, and genuine care come together to transform lives one smile at a time.
              </p>
              <Link
                href="/#schedule"
                className="inline-flex items-center gap-2.5 mt-8 px-7 py-3.5 rounded-full bg-[#0066cc] hover:bg-[#0052a3] text-white text-[14px] font-bold transition-all shadow-lg shadow-sky-600/30 hover:shadow-sky-600/50 hover:scale-[1.02] active:scale-[0.99]"
              >
                <span>Book a Consultation</span>
                <span>→</span>
              </Link>
            </div>

            {/* Right: 4 quick stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:w-[380px] flex-shrink-0">
              {[
                { num: '15+', label: 'Years of Excellence' },
                { num: '97%', label: 'Satisfaction Rate' },
                { num: '4,993+', label: 'Smiles Transformed' },
                { num: '17', label: 'Certified Experts' },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-5 py-5">
                  <p className="text-[34px] font-bold text-white leading-none tracking-tight">{s.num}</p>
                  <p className="text-[12.5px] text-white/60 font-medium mt-1.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* ─── OUR STORY ─── */}
      <section className="w-full max-w-[1500px] mx-auto px-5 sm:px-12 lg:px-20 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: story text */}
          <div>
            <p className="text-[12px] font-bold text-[#0066cc] tracking-[0.25em] uppercase mb-4">Our Story</p>
            <h2 className="text-[34px] sm:text-[44px] font-bold text-[#0c2752] leading-[1.1] tracking-[-0.025em]">
              Built on a belief that every patient deserves extraordinary care.
            </h2>
            <div className="space-y-4 mt-6 text-[14.5px] text-[#475569] leading-[1.75]">
              <p>
                Vsb Smiles was founded in 2009 in the heart of Beverly Hills with a bold vision: to reimagine what dental care could look like. Not just clinically excellent, but truly beautiful — in its design, its outcomes, and its patient experience.
              </p>
              <p>
                From a single-chair practice to a multi-suite clinic with specialists across every discipline, our growth has always been driven by one thing: the trust our patients place in us. We honour that trust by never compromising on the quality of care, the materials we use, or the time we invest in understanding each person who walks through our doors.
              </p>
              <p>
                Today, Vsb Smiles is home to 17 board-certified specialists who share a passion for craftsmanship and a commitment to changing lives — one radiant smile at a time.
              </p>
            </div>
          </div>

          {/* Right: Clinic image card */}
          <div className="relative">
            <div className="relative rounded-[28px] overflow-hidden aspect-[4/3] shadow-2xl shadow-sky-900/15 bg-slate-100 border border-slate-200/80">
              <img
                src="/assets/clinic-bg.webp"
                alt="Vsb Smiles Clinic Interior"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c2752]/50 to-transparent" />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur rounded-2xl px-5 py-3 shadow-lg">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                  <p className="text-[13px] font-semibold text-[#07234b]">Beverly Hills, California</p>
                </div>
              </div>
            </div>

            {/* Decorative card */}
            <div className="absolute -bottom-5 -right-5 w-36 h-36 rounded-2xl bg-[#0066cc] flex flex-col items-center justify-center shadow-xl shadow-sky-600/30 hidden lg:flex">
              <p className="text-[40px] font-bold text-white leading-none">15</p>
              <p className="text-[11px] text-sky-200 font-medium mt-1 text-center leading-tight">Years of<br />Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CORE VALUES ─── */}
      <section className="relative w-full bg-[#f8fafc] border-y border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-100/60 rounded-full blur-[120px] pointer-events-none" />
        <div className="w-full max-w-[1500px] mx-auto px-5 sm:px-12 lg:px-20 py-20 sm:py-28 relative z-10">
          <div className="text-center max-w-[600px] mx-auto mb-14">
            <p className="text-[12px] font-bold text-[#0066cc] tracking-[0.25em] uppercase mb-4">Our Values</p>
            <h2 className="text-[34px] sm:text-[44px] font-bold text-[#0c2752] leading-[1.1] tracking-[-0.025em]">
              The principles that guide everything we do.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {TEAM_VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-[22px] p-6 border border-slate-200/90 shadow-[0_4px_24px_-8px_rgba(12,39,82,0.08)] hover:shadow-[0_8px_32px_-8px_rgba(0,102,204,0.15)] hover:border-sky-200 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0066cc] flex items-center justify-center mb-5 group-hover:bg-[#0066cc] group-hover:text-white transition-all duration-300">
                  {v.icon}
                </div>
                <h3 className="text-[15px] font-bold text-[#07234b] mb-2">{v.title}</h3>
                <p className="text-[13px] text-[#475569] leading-[1.65]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VIDEO SECTION ─── */}
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

        {/* Ambient blobs */}
        <div className="absolute top-0 left-[20%] w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] bg-blue-400/8 rounded-full blur-[100px] pointer-events-none" />


        <div className="relative z-10 w-full max-w-[1500px] mx-auto px-5 sm:px-12 lg:px-20 py-20 sm:py-28">
          {/* Header */}
          <div className="text-center max-w-[620px] mx-auto mb-14">
            <p className="text-[12px] font-bold text-sky-400 tracking-[0.25em] uppercase mb-4">
              See Our Work
            </p>
            <h2 className="text-[34px] sm:text-[44px] font-bold text-white leading-[1.1] tracking-[-0.025em]">
              A closer look inside<br />
              <span className="italic text-sky-300">Vsb Smiles.</span>
            </h2>
            <p className="mt-4 text-[14px] text-white/60 leading-[1.7]">
              Watch how we blend artistry with advanced dentistry to deliver smiles that last a lifetime.
            </p>
          </div>

          {/* 2-Video Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div>
              <VideoCard 
                number="01" 
                label="Clinic Tour" 
                bgImage="/assets/clinic-bg.webp" 
              />
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[13.5px] font-semibold text-white">Inside Our Clinic</p>
                  <p className="text-[12px] text-white/45">Walk through our state-of-the-art facility</p>
                </div>
              </div>
            </div>

            <div>
              <VideoCard 
                number="02" 
                label="Patient Stories" 
                bgImage="/assets/tech-modern-equipment.webp" 
              />
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[13.5px] font-semibold text-white">Real Patient Journeys</p>
                  <p className="text-[12px] text-white/45">Hear from patients who transformed their smile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="w-full max-w-[1500px] mx-auto px-5 sm:px-12 lg:px-20 py-20 sm:py-28">
        <div className="text-center max-w-[600px] mx-auto mb-14">
          <p className="text-[12px] font-bold text-[#0066cc] tracking-[0.25em] uppercase mb-4">Our Journey</p>
          <h2 className="text-[34px] sm:text-[44px] font-bold text-[#0c2752] leading-[1.1] tracking-[-0.025em]">
            Milestones that shaped who we are.
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-sky-200 via-sky-300 to-transparent" />

          <div className="space-y-10 sm:space-y-0">
            {MILESTONES.map((m, i) => (
              <div
                key={m.year}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-0 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                } sm:mb-10`}
              >
                {/* Content card */}
                <div className={`w-full sm:w-[calc(50%-32px)] pl-10 sm:pl-0 ${i % 2 === 0 ? 'sm:pr-10 sm:text-right' : 'sm:pl-10'}`}>
                  <div className="bg-white rounded-[20px] p-5 border border-slate-200/90 shadow-[0_4px_24px_-8px_rgba(12,39,82,0.07)] hover:shadow-[0_8px_32px_-8px_rgba(0,102,204,0.12)] hover:border-sky-200 transition-all duration-300">
                    <span className="inline-block text-[11.5px] font-bold text-[#0066cc] tracking-widest uppercase mb-2">{m.year}</span>
                    <h3 className="text-[15px] font-bold text-[#07234b] mb-1.5">{m.title}</h3>
                    <p className="text-[13px] text-[#475569] leading-[1.65]">{m.desc}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-[10px] sm:left-1/2 sm:-translate-x-1/2 top-5 sm:top-1/2 sm:-translate-y-1/2 w-5 h-5 rounded-full bg-[#0066cc] border-[3px] border-white shadow-md shadow-sky-300/40 flex-shrink-0 z-10" />

                {/* Spacer on alternate side */}
                <div className="hidden sm:block sm:w-[calc(50%-32px)]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="relative w-full overflow-hidden bg-[#0c2752] border-t border-white/5">
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

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1500px] mx-auto px-5 sm:px-12 lg:px-20 py-16 sm:py-20 text-center">
          <p className="text-[12px] font-bold text-sky-400 tracking-[0.25em] uppercase mb-4">Ready to Begin?</p>
          <h2 className="text-[34px] sm:text-[46px] font-bold text-white leading-[1.1] tracking-[-0.025em] max-w-[600px] mx-auto">
            Your journey to a perfect smile starts here.
          </h2>
          <p className="mt-5 text-[14.5px] text-white/60 max-w-[480px] mx-auto leading-[1.7]">
            Book a complimentary consultation with one of our specialists and discover what's possible for your smile.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href="/#schedule"
              className="px-8 py-3.5 rounded-full bg-[#0066cc] hover:bg-[#0052a3] text-white text-[14.5px] font-bold transition-all shadow-lg shadow-sky-600/30 hover:scale-[1.02] active:scale-[0.99]"
            >
              Book Appointment →
            </Link>
            <Link
              href="/services"
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 hover:border-white/25 text-white text-[14.5px] font-bold transition-all"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
