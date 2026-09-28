'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    // Check if user prefers reduced motion (accessibility best practice)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    // Initialize Lenis with optimized 60/120fps linear interpolation (no conflicting duration)
    const lenis = new Lenis({
      lerp: 0.1,               // 10% interpolation per frame: instant response, zero drag lag
      wheelMultiplier: 1.0,    // 1:1 natural response on Windows mousewheel and trackpads
      touchMultiplier: 1.0,    // Native touch feel on mobile
      smoothWheel: true,       // Inertial momentum for wheel/trackpad
      syncTouch: false,        // Preserves 120Hz native touch momentum on iOS/Android
      autoResize: true,        // Automatically tracks DOM resizes
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    let animationFrameId;

    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    // Smoothly intercept and animate all in-page anchor links (#schedule, #specialists, etc.)
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href*="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Extract the hash
      const hashIndex = href.indexOf('#');
      if (hashIndex === -1) return;

      const hash = href.slice(hashIndex);
      if (hash === '#' || hash === '') return;

      // Check if it's an internal link on the current page
      const isSamePage = href.startsWith('#') || href.startsWith('/#') && pathname === '/';
      if (!isSamePage && !href.startsWith('#')) return;

      const targetEl = document.querySelector(hash);
      if (targetEl) {
        e.preventDefault();
        const headerEl = document.querySelector('header');
        const headerOffset = headerEl ? -headerEl.offsetHeight - 16 : -84;

        lenis.scrollTo(targetEl, {
          offset: headerOffset,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        // Update URL hash without causing an instant browser jump
        if (typeof window !== 'undefined' && window.history?.pushState) {
          window.history.pushState(null, '', hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick, { passive: false });

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  // Handle route changes: scroll to top or scroll to target hash smoothly
  useEffect(() => {
    if (!lenisRef.current) return;

    if (typeof window !== 'undefined' && window.location.hash) {
      const targetEl = document.querySelector(window.location.hash);
      if (targetEl) {
        setTimeout(() => {
          const headerEl = document.querySelector('header');
          const headerOffset = headerEl ? -headerEl.offsetHeight - 16 : -84;
          lenisRef.current?.scrollTo(targetEl, {
            offset: headerOffset,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }, 120);
        return;
      }
    }

    // Scroll immediately to top on route change without hash
    lenisRef.current.scrollTo(0, { immediate: true });
  }, [pathname]);

  return <>{children}</>;
}
