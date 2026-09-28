'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Specialists', href: '/#specialists' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState('');

  // Track hash changes safely on client side
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateFromHash = () => {
      setCurrentHash(window.location.hash || '');
    };

    updateFromHash();

    // IntersectionObserver to detect when scrolling through #specialists on homepage
    let observer;
    if (pathname === '/') {
      const specialistsEl = document.getElementById('specialists');
      if (specialistsEl) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setCurrentHash('#specialists');
              } else if (window.scrollY < (specialistsEl.offsetTop - 300)) {
                setCurrentHash('');
              }
            });
          },
          { threshold: 0.25 }
        );
        observer.observe(specialistsEl);
      }
    }

    window.addEventListener('hashchange', updateFromHash);
    window.addEventListener('popstate', updateFromHash);

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener('hashchange', updateFromHash);
      window.removeEventListener('popstate', updateFromHash);
    };
  }, [pathname]);

  const isActive = (href) => {
    if (!pathname) return href === '/';

    if (href === '/#specialists') {
      return pathname === '/' && currentHash === '#specialists';
    }
    if (href === '/') {
      return pathname === '/' && currentHash !== '#specialists';
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const handleNavClick = (href) => {
    if (href === '/#specialists') {
      setCurrentHash('#specialists');
    } else if (href === '/') {
      setCurrentHash('');
    }
  };

  return (
    <header className="w-full max-w-[1500px] mx-auto px-5 sm:px-12 lg:px-20 pt-5 sm:pt-7 pb-2 flex items-center justify-between md:justify-center relative z-50">
      {/* Mobile: Logo text */}
      <Link href="/" className="md:hidden text-[16px] font-bold text-[#0c2752] tracking-tight">
        Vsb Smiles
      </Link>

      {/* Desktop Navigation with Active Select State */}
      <nav suppressHydrationWarning className="hidden md:flex items-center gap-9 lg:gap-12 text-[14px]">
        {NAV_LINKS.map((link) => {
          const active = isActive(link.href);
          return (
            <Link
              suppressHydrationWarning
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`relative py-1.5 transition-colors duration-200 cursor-pointer ${
                active 
                  ? 'text-[#0066cc] font-bold' 
                  : 'text-[#0c2752] hover:text-[#0066cc] font-semibold'
              }`}
            >
              <span>{link.label}</span>
              {active && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0066cc] rounded-full animate-fadeIn"></span>
              )}
            </Link>
          );
        })}
      </nav>
      
      {/* Mobile Menu Toggle Button */}
      <button 
        type="button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-700 hover:text-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-200 rounded-lg transition-colors cursor-pointer" 
        aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-nav"
      >
        {mobileMenuOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Dropdown Menu with Backdrop & Active State */}
      {mobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 top-[60px] bg-slate-900/20 backdrop-blur-xs z-30 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div 
            id="mobile-nav"
            className="absolute top-full left-0 right-0 px-6 py-5 bg-white border-b border-slate-100 flex flex-col gap-1.5 text-[15px] shadow-xl z-40 md:hidden animate-fadeIn"
          >
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  suppressHydrationWarning
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    handleNavClick(link.href);
                    setMobileMenuOpen(false);
                  }}
                  className={`py-2.5 px-3.5 rounded-xl transition-all flex items-center justify-between ${
                    active
                      ? 'bg-sky-50 text-[#0066cc] font-bold'
                      : 'text-[#0c2752] hover:bg-slate-50 hover:text-[#0066cc] font-semibold'
                  }`}
                >
                  <span>{link.label}</span>
                  {active && (
                    <span className="w-2 h-2 rounded-full bg-[#0066cc]"></span>
                  )}
                </Link>
              );
            })}

            <div className="pt-2 mt-1 border-t border-slate-100">
              <a 
                href="/#schedule" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-full text-center text-white text-[14px] font-bold bg-[#0066cc] hover:bg-[#0052a3] flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Book Consultation</span>
                <span>➔</span>
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
