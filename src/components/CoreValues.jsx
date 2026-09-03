'use client';

import React, { useLayoutEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import "./CoreValues.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(Flip);
}

const CARDS = [
  {
    id: "security",
    number: "01",
    title: "Security",
    theme: "cv-theme-green",
    short: "Security is the foundation behind every feature we build.",
    description:
      "From architecture to interface, every layer of Cypher is designed to reduce risk and eliminate unnecessary exposure. We use zero-knowledge encryption, local-only key generation, and end-to-end encrypted syncing so your data remains yours, always. Security is not added later; it defines how everything works.",
  },
  {
    id: "elegance",
    number: "02",
    title: "Elegance",
    theme: "cv-theme-purple",
    short: "We believe powerful security should feel simple and refined.",
    description:
      "We believe powerful technology should also feel effortless. Every interaction is carefully designed to be clear, beautiful and intuitive without compromising cryptographic strength, system integrity, or user confidence.",
  },
  {
    id: "transparency",
    number: "03",
    title: "Transparency",
    theme: "cv-theme-cyan",
    short: "Trust starts with being clear about how everything works.",
    description:
      "We are open about our security model, data practices, and product decisions. There are no hidden behaviors, dark patterns, or unclear trade-offs. By communicating honestly and documenting our approach, we allow users to understand, inspect, and verify.",
  },
  {
    id: "empowerment",
    number: "04",
    title: "Empowerment",
    theme: "cv-theme-yellow",
    short: "Users should always stay in control of their data.",
    description:
      "Users should always stay in control of their data. Adjust settings, manage keys, and choose your level of security, effortlessly. Technology should give people more control, more confidence and more possibilities.",
  },
  {
    id: "human-first",
    number: "05",
    title: "Human-First Design",
    theme: "cv-theme-orange",
    short: "Every design decision starts with real human needs.",
    description:
      "Every design decision starts with real human needs. We continuously explore new ideas, thoughtful interfaces, and reliable interactions to create digital experiences that feel ahead of their time.",
  },
];

export default function CoreValues() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);

  const [active, setActive] = useState(null);
  const [current, setCurrent] = useState(0);

  /* GSAP Entrance & Ambient Animations */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cv-heading", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".cv-card", {
        opacity: 0,
        y: 60,
        scale: 0.96,
        stagger: 0.1,
        duration: 0.9,
        delay: 0.2,
        ease: "power4.out",
      });

      // Subtle 3D floating animation on the isometric wrappers
      gsap.to(".cv-iso-wrapper", {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* Carousel Navigation */
  const moveCarousel = useCallback(
    (direction) => {
      if (active !== null) return;

      const newIndex =
        direction === "next"
          ? (current + 1) % CARDS.length
          : (current - 1 + CARDS.length) % CARDS.length;

      setCurrent(newIndex);

      const cardWidth =
        window.innerWidth < 700
          ? window.innerWidth * 0.82
          : window.innerWidth < 1100
          ? 350
          : 390;
      const gap = 24;

      gsap.to(trackRef.current, {
        x: -newIndex * (cardWidth + gap),
        duration: 0.8,
        ease: "power4.inOut",
      });
    },
    [active, current]
  );

  /* GSAP Flip Open */
  const openCard = useCallback(
    (index) => {
      if (active !== null) return;
      const card = cardRefs.current[index];
      if (!card) return;

      // Capture all cards in the track so adjacent cards smoothly glide to make space
      const state = Flip.getState(cardRefs.current);

      setActive(index);
      card.classList.add("cv-card-expanded");

      Flip.from(state, {
        duration: 0.85,
        ease: "power4.inOut",
        absolute: false,
        nested: true,
      });

      const expandedBody = card.querySelector(".cv-expanded-body");
      if (expandedBody) {
        gsap.fromTo(
          expandedBody,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.55, delay: 0.3, ease: "power3.out" }
        );
      }
    },
    [active]
  );

  /* GSAP Flip Close */
  const closeCard = useCallback(() => {
    if (active === null) return;
    const card = cardRefs.current[active];
    if (!card) return;

    const state = Flip.getState(cardRefs.current);
    card.classList.remove("cv-card-expanded");

    Flip.from(state, {
      duration: 0.75,
      ease: "power4.inOut",
      absolute: false,
      nested: true,
      onComplete: () => {
        setActive(null);
      },
    });
  }, [active]);

  /* Render 3D Isometric Art for each card matching reference video */
  const renderCardArt = (cardId) => {
    switch (cardId) {
      case "security":
        return (
          <div className="cv-card-stack">
            {/* Third tertiary layer */}
            <div className="cv-iso-card card-tertiary">
              <div className="cv-iso-card-header">
                <span className="cv-iso-title">Two-Factor</span>
                <span className="cv-iso-badge">Auth</span>
              </div>
              <p className="cv-iso-subtext">Keep 2FA keys hardware secured.</p>
            </div>

            {/* Second layer */}
            <div className="cv-iso-card card-secondary">
              <div className="cv-iso-card-header">
                <span className="cv-iso-title">Encrypted</span>
                <span className="cv-iso-badge">Vault</span>
              </div>
              <p className="cv-iso-subtext">Secure store for sensitive files & financial data.</p>
            </div>

            {/* Primary front card */}
            <div className="cv-iso-card card-primary">
              <div className="cv-iso-card-header">
                <span className="cv-iso-title">Crypto Key Card</span>
                <span className="cv-iso-badge">On</span>
              </div>
              <p className="cv-iso-subtext">
                Your private keys, generated and stored in a zero exposure environment.
              </p>
              <div className="cv-iso-wallet">
                <span>Primary Wallet</span>
                <b>•••••A9F3 Private Key</b>
              </div>
              <div className="cv-iso-status">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>Wallet Status: Locked & Verified</span>
              </div>
            </div>
          </div>
        );

      case "elegance":
        return (
          <div className="cv-card-stack">
            <div className="cv-alert-card" style={{ transform: "translateZ(10px) translateY(-12px) translateX(-12px)", opacity: 0.5 }}>
              <div className="cv-iso-card-header">
                <span className="cv-iso-title">Passkey Sync</span>
              </div>
            </div>
            <div className="cv-alert-card">
              <div className="cv-iso-card-header">
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ fontSize: "12px" }}>⚠️</span>
                  <span className="cv-iso-title">Improve Password Strength</span>
                </div>
                <span className="cv-alert-badge">High Priority</span>
              </div>
              <p className="cv-iso-subtext" style={{ color: "#e2e8f0" }}>
                3 weak passwords detected
              </p>
              <div className="cv-button-stack">
                <button type="button" className="cv-iso-btn-primary">
                  <span>Fix Now</span>
                  <span>→</span>
                </button>
                <div className="cv-iso-btn-secondary">Remind me later</div>
              </div>
            </div>
          </div>
        );

      case "transparency":
        return (
          <div className="cv-glass-stack">
            <div className="cv-glass-layer layer-bottom" />
            <div className="cv-glass-layer layer-mid" />
            <div className="cv-glass-layer layer-top">
              <span className="cv-asterisk-icon">✱</span>
            </div>
          </div>
        );

      case "empowerment":
        return (
          <div className="cv-card-stack">
            <div className="cv-control-card">
              <div className="cv-iso-card-header">
                <span className="cv-iso-title" style={{ fontSize: "11px" }}>
                  Users should always stay in control of their data.
                </span>
              </div>
              <p className="cv-iso-subtext">
                Adjust settings, manage keys, and choose your level of security, effortlessly.
              </p>
              <div className="cv-control-rows">
                <div className="cv-control-row">
                  <span>⚙ Settings</span>
                  <span>›</span>
                </div>
                <div className="cv-control-row">
                  <span>🔑 Manage keys</span>
                  <span>›</span>
                </div>
                <div className="cv-control-row">
                  <span>🛡 Security Level</span>
                  <span style={{ color: "#facc15" }}>Strict</span>
                </div>
                <div className="cv-control-row" style={{ borderColor: "rgba(239, 68, 68, 0.3)" }}>
                  <span style={{ color: "#fca5a5" }}>🚨 Emergency Mode</span>
                  <span style={{ color: "#94a3b8" }}>Standby</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "human-first":
      default:
        return (
          <div className="cv-card-stack">
            <div className="cv-matrix-card">
              <div className="cv-iso-card-header">
                <span className="cv-iso-title">Human-Centered Layer</span>
                <span className="cv-iso-badge" style={{ color: "#fb923c", borderColor: "rgba(251, 146, 60, 0.4)", background: "rgba(251, 146, 60, 0.15)" }}>
                  Verified
                </span>
              </div>
              <div className="cv-code-box">
                <span className="cv-code-stream">01101001</span>
                <span className="cv-code-asterisk">✱</span>
                <span className="cv-code-stream">01101110</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "8px", color: "#94a3b8" }}>
                <span>GET /auth/secure</span>
                <span>Encrypted Session</span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section ref={sectionRef} id="core-values" className="cv-section">
      <div className="cv-background-grid" />

      <div className="cv-container">
        {/* HEADER */}
        <div className="cv-header">
          <div className="cv-heading">
            <h2>CORE VALUES</h2>
            <p>
              Thoughtful features that protect your data, simplify decisions, and keep you
              confidently in control.
            </p>
          </div>

          <div className="cv-navigation">
            <button
              type="button"
              className="cv-nav-btn"
              onClick={() => moveCarousel("prev")}
              aria-label="Previous card"
            >
              ←
            </button>

            <div className="cv-progress-track">
              {CARDS.map((_, index) => (
                <div
                  key={index}
                  className={`cv-progress-bar ${index === current ? "active" : ""}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="cv-nav-btn"
              onClick={() => moveCarousel("next")}
              aria-label="Next card"
            >
              →
            </button>
          </div>
        </div>

        {/* CAROUSEL TRACK */}
        <div className="cv-carousel-wrapper">
          <div ref={trackRef} className="cv-track">
            {CARDS.map((card, index) => {
              const isExpanded = active === index;

              return (
                <article
                  key={card.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`cv-card ${card.theme}`}
                  onClick={() => {
                    if (isExpanded) {
                      closeCard();
                    } else if (active === null) {
                      openCard(index);
                    }
                  }}
                >
                  {/* 4 Corner Brackets */}
                  <span className="cv-corner top-left" />
                  <span className="cv-corner top-right" />
                  <span className="cv-corner bottom-left" />
                  <span className="cv-corner bottom-right" />

                  {/* Ambient Glow */}
                  <div className="cv-theme-glow" />

                  {/* 3D Isometric Artwork */}
                  <div className="cv-artwork-area">
                    <div className="cv-iso-wrapper">{renderCardArt(card.id)}</div>
                  </div>

                  {/* Card Content & Expand Button */}
                  <div className="cv-card-bottom">
                    <div className="cv-card-meta">
                      <h3 className="cv-card-title">{card.title}</h3>
                      <p className="cv-card-short">{card.short}</p>
                      <p className="cv-expanded-body">{card.description}</p>
                    </div>

                    <button
                      type="button"
                      className="cv-expand-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        isExpanded ? closeCard() : openCard(index);
                      }}
                      aria-label={isExpanded ? "Collapse card" : "Expand card"}
                    >
                      {isExpanded ? "−" : "+"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
