'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SmoothScroll({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // Intercept in-page hash anchor clicks (#schedule, #specialists, etc.)
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href*="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      const hashIndex = href.indexOf('#');
      if (hashIndex === -1) return;

      const hash = href.slice(hashIndex);
      if (hash === '#' || hash === '') return;

      const isSamePage = href.startsWith('#') || (href.startsWith('/#') && pathname === '/');
      if (!isSamePage && !href.startsWith('#')) return;

      const targetEl = document.querySelector(hash);
      if (targetEl) {
        e.preventDefault();
        const headerEl = document.querySelector('header');
        const headerOffset = headerEl ? headerEl.offsetHeight + 16 : 84;
        const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });

        if (typeof window !== 'undefined' && window.history?.pushState) {
          window.history.pushState(null, '', hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [pathname]);

  // Handle route changes: scroll to top or scroll to target hash smoothly
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.location.hash) {
      const targetEl = document.querySelector(window.location.hash);
      if (targetEl) {
        setTimeout(() => {
          const headerEl = document.querySelector('header');
          const headerOffset = headerEl ? headerEl.offsetHeight + 16 : 84;
          const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
          });
        }, 100);
        return;
      }
    }

    // Default route change scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return <>{children}</>;
}
