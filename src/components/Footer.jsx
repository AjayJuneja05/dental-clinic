'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#07234b] text-white overflow-hidden">
      
      {/* Subtle Top Gradient Border */}
      <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>

      {/* Ambient Background Effects */}
      <div className="absolute top-20 right-[15%] w-[600px] h-[600px] bg-sky-600/8 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-20 left-[10%] w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-[1500px] mx-auto px-5 sm:px-12 lg:px-20 relative z-10">
        
        {/* ─── TOP BRAND BAR ─── */}
        <div className="py-10 sm:py-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 border-b border-white/[0.07]">
          {/* Logo & Tagline */}
          <Link href="/" className="group flex items-center gap-3.5">
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 via-blue-500 to-[#0066cc] flex items-center justify-center shadow-lg shadow-sky-500/25 group-hover:shadow-sky-500/40 transition-shadow">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.5 2 6 4.5 6 8c0 4 2 8 3 12 0.5 2 1.5 2 2 0l1-5 1 5c0.5 2 1.5 2 2 0 1-4 3-8 3-12 0-3.5-2.5-6-6-6z" />
                </svg>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#07234b]"></div>
            </div>
            <div>
              <h2 className="text-[22px] font-bold tracking-tight leading-tight">
                Celestia <span className="bg-gradient-to-r from-sky-300 to-sky-400 bg-clip-text text-transparent">Smiles</span>
              </h2>
              <span className="text-[10.5px] tracking-[0.2em] uppercase text-white/50 font-medium">
                Premium Dental Studio
              </span>
            </div>
          </Link>

          {/* Quick Contact Chips */}
          <div className="flex flex-wrap items-center gap-3">
            <a href="tel:18005550199" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.1] hover:border-white/[0.15] text-[13px] font-medium text-white/90 transition-all group">
              <span className="w-5 h-5 rounded-full bg-sky-500/20 flex items-center justify-center">
                <svg className="w-3 h-3 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </span>
              <span className="group-hover:text-sky-300 transition-colors">+1 (800) 555-0199</span>
            </a>
            <a href="mailto:concierge@celestiasmiles.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.1] hover:border-white/[0.15] text-[13px] font-medium text-white/90 transition-all group">
              <span className="w-5 h-5 rounded-full bg-sky-500/20 flex items-center justify-center">
                <svg className="w-3 h-3 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </span>
              <span className="group-hover:text-sky-300 transition-colors">concierge@celestiasmiles.com</span>
            </a>
          </div>
        </div>

        {/* ─── MAIN 4-COLUMN GRID ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-10 py-14 sm:py-16">
          
          {/* Column 1: About */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="text-[13px] font-bold text-white/40 tracking-[0.15em] uppercase">
              About Us
            </h3>
            <p className="text-[13.5px] text-white/65 leading-[1.75] max-w-[320px]">
              Pioneering precision dentistry and bespoke smile design through computerized 3D diagnostics, minimally invasive artistry, and compassionate patient care since 2009.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              {[
                <svg key="ig" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
                <svg key="fb" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
                <svg key="li" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
              ].map((icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] hover:bg-sky-500/20 hover:border-sky-500/30 flex items-center justify-center text-white/50 hover:text-sky-400 transition-all">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2 space-y-5">
            <h3 className="text-[13px] font-bold text-white/40 tracking-[0.15em] uppercase">
              Navigation
            </h3>

            <ul className="space-y-3 text-[13.5px]">
              {[
                { label: 'Home', href: '/' },
                { label: 'Treatments', href: '/services' },
                { label: 'Transformations', href: '/services#transformations' },
                { label: 'Our Doctors', href: '/#specialists' },
                { label: '3D Technology', href: '/#technology' },
                { label: 'Book Visit', href: '/#schedule' },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-sky-500/60 group-hover:bg-sky-400 transition-colors"></span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Operating Hours */}
          <div className="lg:col-span-4 space-y-5">
            <h3 className="text-[13px] font-bold text-white/40 tracking-[0.15em] uppercase flex items-center gap-2.5">
              <span>Operating Hours</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            </h3>

            <div className="space-y-2">
              {/* Mon-Fri */}
              <div className="flex items-center justify-between py-3 px-4 rounded-[14px] bg-white/[0.04] border border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <div>
                    <span className="text-[12.5px] font-semibold text-white/90 block">Monday – Friday</span>
                    <span className="text-[11.5px] text-white/50">Regular Hours</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[13px] font-bold text-white block">8:00 – 7:00 PM</span>
                  <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">Open</span>
                </div>
              </div>

              {/* Saturday */}
              <div className="flex items-center justify-between py-3 px-4 rounded-[14px] bg-white/[0.04] border border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/15 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <span className="text-[12.5px] font-semibold text-white/90 block">Saturday</span>
                    <span className="text-[11.5px] text-white/50">By Appointment</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[13px] font-bold text-white block">9:00 – 5:00 PM</span>
                  <span className="text-[10px] font-semibold text-sky-400 uppercase tracking-wider">By Appt</span>
                </div>
              </div>

              {/* Sunday */}
              <div className="flex items-center justify-between py-3 px-4 rounded-[14px] bg-white/[0.04] border border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                  </div>
                  <div>
                    <span className="text-[12.5px] font-semibold text-white/90 block">Sunday</span>
                    <span className="text-[11.5px] text-white/50">Emergency Only</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[13px] font-bold text-white/60 block">On-Call</span>
                  <span className="text-[10px] font-semibold text-amber-400 uppercase tracking-wider">24/7 Line</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Address */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="text-[13px] font-bold text-white/40 tracking-[0.15em] uppercase">
              Visit Us
            </h3>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.08] space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-white leading-snug">
                    Beverly Hills Flagship
                  </h4>
                  <p className="text-[12.5px] text-white/60 leading-relaxed mt-1.5">
                    9454 Wilshire Blvd, Suite 800<br />
                    Beverly Hills, CA 90212
                  </p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"></div>

              <div className="flex items-center gap-2.5 text-[11.5px] text-white/50">
                <svg className="w-3.5 h-3.5 text-sky-400/70" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                <span>Complimentary valet parking available</span>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=9454+Wilshire+Blvd+Beverly+Hills+CA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-sky-400 hover:text-sky-300 transition-colors group"
            >
              <span>Get Directions</span>
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>

        </div>

        {/* ─── BOTTOM BAR ─── */}
        <div className="py-7 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/40">
            © {new Date().getFullYear()} Celestia Smiles Dental Clinic. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-1">
            {['Privacy Policy', 'Terms of Service', 'HIPAA'].map((item, i) => (
              <span key={i} className="flex items-center">
                <a href="#" className="text-[11.5px] text-white/40 hover:text-white/70 transition-colors px-2 py-1">
                  {item}
                </a>
                {i < 2 && <span className="text-white/20">·</span>}
              </span>
            ))}
          </div>
        </div>

      </div>

    </footer>
  );
}
