'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0c2752] text-white overflow-hidden border-t border-white/10">
      
      {/* Background Soft Glow Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="w-full max-w-[1500px] mx-auto px-5 sm:px-12 lg:px-20 pt-16 sm:pt-20 pb-12 relative z-10">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 pb-14 border-b border-white/10">
          
          {/* Column 1 (Span 4): Brand & Mission */}
          <div className="lg:col-span-4 space-y-5">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#0066cc] to-sky-400 flex items-center justify-center shadow-lg shadow-sky-500/30">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.5 2 6 4.5 6 8c0 4 2 8 3 12 0.5 2 1.5 2 2 0l1-5 1 5c0.5 2 1.5 2 2 0 1-4 3-8 3-12 0-3.5-2.5-6-6-6z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[20px] font-bold tracking-tight text-white leading-tight">
                  Celestia <span className="text-sky-400 font-semibold">Smiles</span>
                </span>
                <span className="text-[10px] tracking-[0.18em] uppercase text-sky-200/70 font-semibold">
                  Dental Architecture
                </span>
              </div>
            </Link>

            <p className="text-[13.5px] sm:text-[14px] text-white/75 leading-relaxed max-w-[340px]">
              Pioneering precision dentistry and bespoke smile design through computerized 3D diagnostics, minimally invasive artistry, and compassionate care.
            </p>

            {/* Direct Contact Pills */}
            <div className="space-y-2 pt-2">
              <a 
                href="tel:18005550199" 
                className="flex items-center gap-2.5 text-[13.5px] font-medium text-white/90 hover:text-sky-300 transition-colors"
              >
                <span className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-sky-300 text-xs">📞</span>
                <span>+1 (800) 555-0199</span>
              </a>

              <a 
                href="mailto:concierge@celestiasmiles.com" 
                className="flex items-center gap-2.5 text-[13.5px] font-medium text-white/90 hover:text-sky-300 transition-colors"
              >
                <span className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-sky-300 text-xs">✉️</span>
                <span>concierge@celestiasmiles.com</span>
              </a>
            </div>
          </div>

          {/* Column 2 (Span 3): Operating Days & Schedule */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-[16px] font-bold text-white tracking-tight flex items-center gap-2">
              <span>Operating Days</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </h3>

            <div className="space-y-3 text-[13px] sm:text-[13.5px]">
              {/* Monday - Friday */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                <div>
                  <span className="text-white/70 block text-[11px] uppercase tracking-wider font-semibold">Monday – Friday</span>
                  <span className="text-white font-bold">8:00 AM – 7:00 PM</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10.5px] font-semibold border border-emerald-500/30">
                  Open
                </span>
              </div>

              {/* Saturday */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                <div>
                  <span className="text-white/70 block text-[11px] uppercase tracking-wider font-semibold">Saturday</span>
                  <span className="text-white font-bold">9:00 AM – 5:00 PM</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 text-[10.5px] font-semibold border border-sky-500/30">
                  By Appt
                </span>
              </div>

              {/* Sunday */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                <div>
                  <span className="text-white/70 block text-[11px] uppercase tracking-wider font-semibold">Sunday</span>
                  <span className="text-white/60 font-medium">Emergency Care Only</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10.5px] font-semibold border border-amber-500/30">
                  On-Call
                </span>
              </div>
            </div>

            <p className="text-[11.5px] text-sky-300/80 font-medium pt-1">
              ⚡ 24/7 Dental Emergency Triage Line Active
            </p>
          </div>

          {/* Column 3 (Span 2): Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-[16px] font-bold text-white tracking-tight">
              Navigation
            </h3>

            <ul className="space-y-2.5 text-[13.5px]">
              <li>
                <Link href="/" className="text-white/75 hover:text-sky-300 transition-colors flex items-center gap-1.5 group">
                  <span className="text-sky-400 group-hover:translate-x-1 transition-transform text-xs">›</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/75 hover:text-sky-300 transition-colors flex items-center gap-1.5 group">
                  <span className="text-sky-400 group-hover:translate-x-1 transition-transform text-xs">›</span>
                  <span>Treatments</span>
                </Link>
              </li>
              <li>
                <Link href="/services#transformations" className="text-white/75 hover:text-sky-300 transition-colors flex items-center gap-1.5 group">
                  <span className="text-sky-400 group-hover:translate-x-1 transition-transform text-xs">›</span>
                  <span>Transformations</span>
                </Link>
              </li>
              <li>
                <a href="/#specialists" className="text-white/75 hover:text-sky-300 transition-colors flex items-center gap-1.5 group">
                  <span className="text-sky-400 group-hover:translate-x-1 transition-transform text-xs">›</span>
                  <span>Our Doctors</span>
                </a>
              </li>
              <li>
                <a href="/#technology" className="text-white/75 hover:text-sky-300 transition-colors flex items-center gap-1.5 group">
                  <span className="text-sky-400 group-hover:translate-x-1 transition-transform text-xs">›</span>
                  <span>3D Technology</span>
                </a>
              </li>
              <li>
                <a href="/#schedule" className="text-white/75 hover:text-sky-300 transition-colors flex items-center gap-1.5 group">
                  <span className="text-sky-400 group-hover:translate-x-1 transition-transform text-xs">›</span>
                  <span>Book Visit</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 (Span 3): Address & Studio Location */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-[16px] font-bold text-white tracking-tight">
              Studio Address
            </h3>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-lg mt-0.5 flex-shrink-0">📍</span>
                <div>
                  <h4 className="text-[14px] font-bold text-white leading-tight">
                    Beverly Hills Flagship
                  </h4>
                  <p className="text-[12.5px] text-white/75 leading-relaxed mt-1">
                    9454 Wilshire Blvd, Suite 800<br />
                    Beverly Hills, CA 90212
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 text-[11.5px] text-sky-200/80">
                <span>🚗 Complimentary Valet Parking on Wilshire & Rodeo</span>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=9454+Wilshire+Blvd+Beverly+Hills+CA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[12.5px] font-bold text-sky-300 hover:text-white transition-colors"
            >
              <span>Open in Google Maps</span>
              <span>➔</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-white/60">
          <p>© {new Date().getFullYear()} Celestia Smiles Dental Clinic. All Rights Reserved.</p>
          
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-white transition-colors cursor-pointer">HIPAA Compliance</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
