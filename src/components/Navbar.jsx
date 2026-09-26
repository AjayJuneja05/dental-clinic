'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === '/') return pathname === '/';
    return pathname?.startsWith(path);
  };

  return (
    <header className="w-full max-w-[1500px] mx-auto px-5 sm:px-12 lg:px-20 pt-5 sm:pt-7 pb-2 flex items-center justify-between md:justify-center relative z-50">
      {/* Mobile: Logo text */}
      <Link href="/" className="md:hidden text-[16px] font-bold text-[#0c2752] tracking-tight">
        Vsb Smiles
      </Link>

      <nav className="hidden md:flex items-center gap-9 lg:gap-12 text-[14px] font-semibold">
        <Link 
          href="/" 
          className={`transition-colors ${isActive('/') ? 'text-sky-600 font-bold' : 'text-[#0c2752] hover:text-sky-600'}`}
        >
          Home
        </Link>
        <Link 
          href="/services" 
          className={`transition-colors ${isActive('/services') ? 'text-sky-600 font-bold' : 'text-[#0c2752] hover:text-sky-600'}`}
        >
          Services
        </Link>
        <Link 
          href="/about" 
          className={`transition-colors ${isActive('/about') ? 'text-sky-600 font-bold' : 'text-[#0c2752] hover:text-sky-600'}`}
        >
          About Us
        </Link>
        <Link 
          href="/#specialists" 
          className="text-[#0c2752] hover:text-sky-600 transition-colors"
        >
          Specialists
        </Link>
        <Link 
          href="/#calculator" 
          className="text-[#0c2752] hover:text-sky-600 transition-colors"
        >
          Calculator
        </Link>
        <Link 
          href="/services#stories" 
          className="text-[#0c2752] hover:text-sky-600 transition-colors"
        >
          Real Stories
        </Link>
      </nav>
      
      <Link 
        href="/contact" 
        className={`absolute right-8 sm:right-12 lg:right-20 text-[14px] font-semibold transition-colors hidden md:block ${
          isActive('/contact') ? 'text-sky-600 font-bold' : 'text-[#0c2752] hover:text-sky-600'
        }`}
      >
        Contact
      </Link>
      
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-1.5 text-slate-700 hover:text-sky-600" 
        aria-label="Toggle Navigation"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 px-5 py-4 bg-white border-b border-slate-100 flex flex-col gap-3 text-sm font-medium shadow-md z-40 md:hidden">
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`py-2 border-b border-slate-50 transition-colors ${
              isActive('/') ? 'text-sky-600 font-semibold' : 'text-[#0c2752] hover:text-sky-600'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/services" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`py-2 border-b border-slate-50 transition-colors ${
              isActive('/services') ? 'text-sky-600 font-semibold' : 'text-[#0c2752] hover:text-sky-600'
            }`}
          >
            Services
          </Link>
          <Link 
            href="/about" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`py-2 border-b border-slate-50 transition-colors ${
              isActive('/about') ? 'text-sky-600 font-semibold' : 'text-[#0c2752] hover:text-sky-600'
            }`}
          >
            About Us
          </Link>
          <Link 
            href="/#specialists" 
            onClick={() => setMobileMenuOpen(false)} 
            className="py-2 text-[#0c2752] hover:text-sky-600 border-b border-slate-50"
          >
            Specialists
          </Link>
          <Link 
            href="/#calculator" 
            onClick={() => setMobileMenuOpen(false)} 
            className="py-2 text-[#0c2752] hover:text-sky-600 border-b border-slate-50"
          >
            Calculator
          </Link>
          <Link 
            href="/services#stories" 
            onClick={() => setMobileMenuOpen(false)} 
            className="py-2 text-[#0c2752] hover:text-sky-600 border-b border-slate-50"
          >
            Real Stories
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`py-2 transition-colors ${
              isActive('/contact') ? 'text-sky-600 font-semibold' : 'text-[#0c2752] hover:text-sky-600'
            }`}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
