'use client';

import { useLayoutEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import servicesData from '@/data/services.json';
import './Services.css';

gsap.registerPlugin(Flip);

/* ── Map each service to a visual card config ── */
const CARD_THEMES = {
  aesthetic: { theme: 'sv-sky',    symbol: '✦', color: '#38bdf8' },
  ortho:     { theme: 'sv-teal',   symbol: '◈', color: '#14b8a6' },
  implant:   { theme: 'sv-indigo', symbol: '⌁', color: '#6366f1' },
  whitening: { theme: 'sv-amber',  symbol: '✧', color: '#f59e0b' },
  surgical:  { theme: 'sv-rose',   symbol: '◇', color: '#f43f5e' },
};

const cards = servicesData.map((s, i) => ({
  ...s,
  number: String(i + 1).padStart(2, '0'),
  theme: CARD_THEMES[s.id]?.theme || 'sv-sky',
  symbol: CARD_THEMES[s.id]?.symbol || '✦',
  glowColor: CARD_THEMES[s.id]?.color || '#38bdf8',
}));

export default function Services() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const isAnimating = useRef(false);

  const [active, setActive] = useState(null);
  const [current, setCurrent] = useState(0);

  /* ── GSAP entrance animations ── */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.sv-heading', {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: undefined,
      });

      gsap.from('.sv-card', {
        opacity: 0,
        y: 70,
        scale: 0.94,
        stagger: 0.12,
        duration: 1,
        delay: 0.25,
        ease: 'power4.out',
      });

      gsap.to('.sv-floating', {
        y: -12,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.sv-orbit', {
        rotation: 360,
        duration: 15,
        repeat: -1,
        ease: 'none',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ── Carousel navigation ── */
  const moveCarousel = useCallback(
    (direction) => {
      if (active !== null || isAnimating.current) return;
      isAnimating.current = true;

      const newIndex =
        direction === 'next'
          ? (current + 1) % cards.length
          : (current - 1 + cards.length) % cards.length;

      setCurrent(newIndex);

      const vw = window.innerWidth;
      const cardWidth = vw < 700 ? vw * 0.78 : vw < 1100 ? 360 : 410;

      gsap.to(trackRef.current, {
        x: direction === 'next' ? `-=${cardWidth + 24}` : `+=${cardWidth + 24}`,
        duration: 0.9,
        ease: 'power4.inOut',
        onComplete: () => {
          if (direction === 'next') {
            trackRef.current.appendChild(trackRef.current.firstElementChild);
          } else {
            trackRef.current.insertBefore(
              trackRef.current.lastElementChild,
              trackRef.current.firstElementChild
            );
          }
          gsap.set(trackRef.current, { x: 0 });
          isAnimating.current = false;
        },
      });
    },
    [active, current]
  );

  /* ── Flip-expand a card ── */
  const openCard = useCallback(
    (index) => {
      if (active !== null || isAnimating.current) return;
      const card = cardRefs.current[index];
      if (!card) return;

      isAnimating.current = true;
      const state = Flip.getState(card);
      setActive(index);

      requestAnimationFrame(() => {
        card.classList.add('sv-card-expanded');

        Flip.from(state, {
          duration: 0.85,
          ease: 'power4.inOut',
          absolute: true,
          nested: true,
          onEnter: (elements) =>
            gsap.fromTo(
              elements,
              { opacity: 0, scale: 0.96 },
              { opacity: 1, scale: 1, duration: 0.5, delay: 0.1 }
            ),
          onComplete: () => {
            isAnimating.current = false;
          },
        });

        const expandedContent = card.querySelector('.sv-expanded-content');
        if (expandedContent) {
          gsap.fromTo(
            expandedContent,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.65, delay: 0.35, ease: 'power3.out' }
          );
        }
      });
    },
    [active]
  );

  /* ── Flip-collapse a card ── */
  const closeCard = useCallback(() => {
    if (active === null || isAnimating.current) return;
    const card = cardRefs.current[active];
    if (!card) return;

    isAnimating.current = true;
    const state = Flip.getState(card);
    card.classList.remove('sv-card-expanded');

    Flip.from(state, {
      duration: 0.75,
      ease: 'power4.inOut',
      absolute: true,
      nested: true,
      onComplete: () => {
        setActive(null);
        isAnimating.current = false;
      },
    });
  }, [active]);

  return (
    <section ref={sectionRef} id="services" className="sv-section">
      <div className="sv-background-grid" />

      <div className="sv-container">
        {/* ── HEADER ── */}
        <div className="sv-header">
          <div className="sv-heading">
            <div className="sv-eyebrow">
              <span className="sv-dot" />
              OUR SERVICES
            </div>
            <h2>
              Expert
              <br />
              <span>Care</span>
            </h2>
          </div>

          <div className="sv-header-right">
            <p>
              A full spectrum of treatments — each tailored to elevate your
              health, confidence, and natural beauty.
            </p>

            <div className="sv-navigation">
              <button onClick={() => moveCarousel('prev')} aria-label="Previous">
                ←
              </button>

              <div className="sv-progress">
                {cards.map((_, index) => (
                  <span key={index} className={index === current ? 'active' : ''} />
                ))}
              </div>

              <button onClick={() => moveCarousel('next')} aria-label="Next">
                →
              </button>
            </div>
          </div>
        </div>

        {/* ── CAROUSEL ── */}
        <div className="sv-carousel-wrapper">
          <div ref={trackRef} className="sv-track">
            {cards.map((card, index) => (
              <article
                key={card.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`sv-card ${card.theme}`}
                onClick={() =>
                  active === index ? closeCard() : active === null ? openCard(index) : null
                }
              >
                {/* Corner brackets */}
                <span className="sv-corner sv-tl" />
                <span className="sv-corner sv-tr" />
                <span className="sv-corner sv-bl" />
                <span className="sv-corner sv-br" />

                {/* Top bar */}
                <div className="sv-card-top">
                  <span className="sv-number">{card.number}</span>
                  {card.badge && <span className="sv-badge">{card.badge}</span>}
                  <button
                    className="sv-expand"
                    onClick={(e) => {
                      e.stopPropagation();
                      active === index ? closeCard() : openCard(index);
                    }}
                  >
                    {active === index ? '−' : '+'}
                  </button>
                </div>

                {/* 3D Artwork */}
                <div className="sv-artwork">
                  <div className="sv-orbit">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="sv-floating">
                    <div className="sv-glass-panel">
                      <div className="sv-symbol">{card.symbol}</div>
                      <div className="sv-lines">
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                    <div className="sv-glass-panel sv-second">
                      <div className="sv-mini-square" />
                      <div className="sv-mini-lines">
                        <i />
                        <i />
                      </div>
                    </div>
                  </div>

                  <div className="sv-glow" />
                </div>

                {/* Collapsed title area */}
                <div className="sv-card-content">
                  <div className="sv-card-label">{card.category?.toUpperCase() || 'SERVICE'}</div>
                  <h3>{card.title}</h3>
                  <p>{card.headline}</p>
                  {card.duration && (
                    <div className="sv-duration-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {card.duration}
                    </div>
                  )}
                </div>

                {/* Expanded detail content */}
                <div className="sv-expanded-content">
                  <div className="sv-expanded-number">
                    {card.number} / {String(cards.length).padStart(2, '0')}
                  </div>
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>

                  {/* Feature list */}
                  {card.features && card.features.length > 0 && (
                    <div className="sv-features">
                      {card.features.map((feat, fi) => (
                        <div key={fi} className="sv-feature-item">
                          <span className="sv-feature-dot" />
                          {feat}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="sv-expanded-line" />

                  {card.rating && (
                    <div className="sv-rating">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      {card.rating}
                    </div>
                  )}

                  <button
                    className="sv-expanded-cta"
                    onClick={(e) => {
                      e.stopPropagation();
                      const el = document.getElementById('schedule');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    style={{ marginTop: '10px' }}
                  >
                    BOOK THIS SERVICE <b>↗</b>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="sv-bottom-cta">
          <a href="#schedule" className="sv-cta-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="3" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Schedule a visit
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
