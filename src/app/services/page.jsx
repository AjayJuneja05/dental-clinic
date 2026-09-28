'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Transformations from '@/components/Transformations';
import ServiceDeepDive from '@/components/ServiceDeepDive';
import Footer from '@/components/Footer';
import Link from 'next/link';

const SERVICE_IDS = ['aesthetic', 'ortho', 'implant', 'whitening', 'surgical'];

export default function ServicesPage() {
  const [activeServiceId, setActiveServiceId] = useState('aesthetic');

  // Handle URL hash / search params on mount and change
  useEffect(() => {
    const handleUrlTarget = () => {
      if (typeof window === 'undefined') return;
      const searchParam = new URLSearchParams(window.location.search).get('service');
      const hashParam = window.location.hash ? window.location.hash.replace('#', '') : null;
      const target = (searchParam || hashParam || '').toLowerCase();
      if (target) {
        const found = SERVICE_IDS.find((id) => id === target || `dept-${id}` === target);
        if (found) {
          setActiveServiceId(found);
        }
      }
    };

    handleUrlTarget();
    window.addEventListener('hashchange', handleUrlTarget);
    window.addEventListener('popstate', handleUrlTarget);
    return () => {
      window.removeEventListener('hashchange', handleUrlTarget);
      window.removeEventListener('popstate', handleUrlTarget);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0c2752] flex flex-col">
      <Navbar />

      {/* Real Stories & Transformations Component (Top) */}
      <div id="stories" className="pt-8 pb-4">
        <Transformations 
          activeServiceId={activeServiceId}
          onServiceChange={setActiveServiceId}
        />
      </div>

      {/* Comprehensive Clinical Suite: Autoselected from top & styled same like above */}
      <ServiceDeepDive 
        activeServiceId={activeServiceId}
        onServiceChange={setActiveServiceId}
      />

      {/* Bottom CTA Banner */}
      <section className="w-full bg-[#07234b] text-white py-16 px-5 sm:px-12 text-center">
        <div className="max-w-[700px] mx-auto">
          <h3 className="text-[32px] sm:text-[42px] font-bold tracking-tight">
            Ready for your smile transformation?
          </h3>
          <p className="text-sky-200/80 text-[15px] mt-3 max-w-[520px] mx-auto">
            Book a private 1-on-1 consultation with our clinical specialists to receive your custom 3D digital smile preview.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link 
              href="/#schedule" 
              className="px-8 py-3.5 rounded-full bg-white text-[#07234b] hover:bg-sky-50 text-[14px] font-bold transition-all shadow-lg"
            >
              Schedule an Appointment
            </Link>
            <a 
              href="tel:13108592432" 
              className="px-8 py-3.5 rounded-full border border-white/30 hover:bg-white/10 text-white text-[14px] font-medium transition-colors"
            >
              Call: +1 (310) 859-2432
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
