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

    // Initialize Lenis with snappy, featherlight physics (super smooth, ZERO sluggish weight)
    const lenis = new Lenis({
      duration: 0.75, // Snappy & featherlight: completes in 750ms with instant 0ms reaction
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-style exponential decay curve
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05, // Crisp 1:1.05 travel per wheel tick
      touchMultiplier: 1.0,
      syncTouch: false, // 100% native 120Hz touch momentum on mobile/tablets
      autoRaf: true, // Native internal high-performance RAF loop managed directly by Lenis
      autoResize: true,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    // Smoothly intercept and animate all in-page anchor links (#schedule, #specialists, etc.)
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href*="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      const hashIndex = href.indexOf('#');
      if (hashIndex === -1) return;

      const rawHash = href.slice(hashIndex);
      if (rawHash === '#' || rawHash === '') return;

      // Extract the clean CSS selector ID (strip query params if any, e.g. #schedule?service=aesthetic)
      let cleanHash = rawHash;
      const qIdx = cleanHash.indexOf('?');
      if (qIdx !== -1) cleanHash = cleanHash.slice(0, qIdx);
      const ampIdx = cleanHash.indexOf('&');
      if (ampIdx !== -1) cleanHash = cleanHash.slice(0, ampIdx);

      const isSamePage = href.startsWith('#') || ((href.startsWith('/#') || href.startsWith('/?')) && pathname === '/');
      if (!isSamePage && !href.startsWith('#')) return;

      try {
        const targetEl = document.querySelector(cleanHash);
        if (targetEl) {
          e.preventDefault();
          const headerEl = document.querySelector('header');
          const headerOffset = headerEl ? headerEl.offsetHeight + 16 : 84;

          lenis.scrollTo(targetEl, {
            offset: -headerOffset,
            duration: 0.8,
          });

          if (typeof window !== 'undefined' && window.history?.pushState) {
            window.history.pushState(null, '', rawHash);
          }
        }
      } catch (err) {}
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  // Handle route changes: reset scroll or scroll to hash
  useEffect(() => {
    if (!lenisRef.current) return;

    if (typeof window !== 'undefined' && window.location.hash) {
      let cleanHash = window.location.hash;
      const qIdx = cleanHash.indexOf('?');
      if (qIdx !== -1) cleanHash = cleanHash.slice(0, qIdx);
      const ampIdx = cleanHash.indexOf('&');
      if (ampIdx !== -1) cleanHash = cleanHash.slice(0, ampIdx);

      try {
        const targetEl = document.querySelector(cleanHash);
        if (targetEl) {
          lenisRef.current.resize();
          const headerEl = document.querySelector('header');
          const headerOffset = headerEl ? headerEl.offsetHeight + 16 : 84;
          const targetY = targetEl.offsetTop - headerOffset;

          // If browser already jumped near the target, sync Lenis without bouncing
          if (Math.abs(window.scrollY - targetY) < 100) {
            lenisRef.current.scrollTo(targetY, { immediate: true });
            return;
          }

          setTimeout(() => {
            lenisRef.current?.resize();
            const currentTargetY = targetEl.offsetTop - headerOffset;
            lenisRef.current?.scrollTo(currentTargetY, {
              duration: 0.8,
            });
          }, 80);
          return;
        }
      } catch (err) {}
    }

    // Default route change scroll to top
    lenisRef.current.scrollTo(0, { immediate: true });
  }, [pathname]);

  return <>{children}</>;
}
