'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export const SERVICES_DEEP_DIVE = [
  {
    id: 'aesthetic',
    title: 'Aesthetic Dentistry',
    badge: 'Porcelain Artistry & Smile Design',
    tagline: 'Custom hand-layered porcelain veneers, composite artistry & smile contouring.',
    heroImage: '/assets/service-aesthetic.webp',
    quickMetrics: [
      { label: 'Visits Required', value: '2–3 Visits' },
      { label: 'Turnaround Time', value: '7–10 Days' },
      { label: 'Enamel Preservation', value: '0.3mm Micro-Prep' },
      { label: 'Primary Material', value: 'E.max & Feldspathic Ceramic' },
    ],
    whoShouldVisit: [
      {
        title: 'Chipped, Worn, or Fractured Teeth',
        desc: 'Restore broken incisal edges and structural symmetry with natural porcelain reinforcement.',
        icon: '💎',
      },
      {
        title: 'Severe Enamel Discoloration & Stains',
        desc: 'Permanent shade elevation for tetracycline stains or deep intrinsic yellowing resistant to bleaching.',
        icon: '✨',
      },
      {
        title: 'Unwanted Gaps, Spacing & Microdontia',
        desc: 'Close central or lateral diastemas while re-proportioned to match your facial midline.',
        icon: '📐',
      },
      {
        title: 'Asymmetrical or Uneven Smile Lines',
        desc: 'Harmonize tooth lengths and reverse age-related wear for a refreshed, youthful facial drape.',
        icon: '🪞',
      },
      {
        title: 'Aging Composite Resin Fillings',
        desc: 'Replace porous, discolored old bonding with non-staining, ultra-durable hand-layered ceramic.',
        icon: '🛡️',
      },
    ],
    whatWeCanPerform: [
      {
        phase: 'Phase 01',
        title: '3D Intraoral Scanning & Digital Facial Mapping',
        desc: 'We capture high-definition 3D photometric data of your teeth, lips, and facial expressions without messy impressions.',
        badge: 'Zero-Mess Digital Scan',
      },
      {
        phase: 'Phase 02',
        title: 'Physical Trial Smile (Try-In Mockup)',
        desc: 'Before any treatment starts, we place a reversible 3D mock-up in your mouth so you preview and approve your new smile in the mirror.',
        badge: '100% Predictable Preview',
      },
      {
        phase: 'Phase 03',
        title: 'Micro-Prep Enamel Preservation',
        desc: 'Using high-magnification surgical loupes, we perform ultra-conservative preparation (0.3mm–0.5mm), keeping over 95% of natural enamel intact.',
        badge: 'Conservative & Painless',
      },
      {
        phase: 'Phase 04',
        title: 'Master Ceramist Hand-Layering',
        desc: 'Each veneer is individually sculpted by our dedicated master ceramist, layering translucent opalescent enamels to replicate biological light refraction.',
        badge: 'Artisan Laboratory Craft',
      },
      {
        phase: 'Phase 05',
        title: 'T-Scan Computerized Occlusal Bonding',
        desc: 'Resin-bonded under rubber dam isolation, followed by digital force-balance calibration to eliminate destructive shear forces and ensure decades of wear.',
        badge: 'Digital Bite Harmonization',
      },
    ],
    video: {
      title: 'Microscopic Ceramic Artistry & Layering',
      src: '/assets/clinic-experience.mp4',
      poster: '/assets/video-shot-2.jpg',
      duration: '0:05',
      badge: 'In-House Ceramic Atelier',
      desc: 'Watch our master ceramists meticulously hand-layer micro-thin porcelain to mirror natural tooth translucency.',
    },
    warranty: {
      badge: '10-Year Porcelain Warranty',
      highlight: '10 Years Full Coverage',
      desc: 'Every custom porcelain veneer, ceramic crown, and overlay is backed by our comprehensive 10-year written warranty against structural failure.',
      points: [
        '100% complimentary repair or replacement in case of chipping, micro-cracks, or debonding.',
        'Complimentary annual ultrasonic cleaning, margin check, and protective bite calibration.',
        'No deductible, depreciation, or hidden replacement costs throughout the 10-year period.',
        'Satisfaction promise: try-in approval is required before final adhesive cementation.',
      ],
      certificate: 'Official Beverly Hills Aesthetic Guarantee Certificate provided upon completion.',
    },
  },
  {
    id: 'ortho',
    title: 'Orthodontics',
    badge: 'Clear Aligners & Bite Balance',
    tagline: 'Discreet orthodontic alignment tailored to straighten teeth seamlessly and achieve optimal bite harmony.',
    heroImage: '/assets/service-ortho.webp',
    quickMetrics: [
      { label: 'Treatment Window', value: '6–12 Months' },
      { label: 'Appliance Type', value: 'Custom Clear Aligners' },
      { label: 'Check-In Cadence', value: 'Bi-Weekly Remote / In-Studio' },
      { label: 'Retention Plan', value: 'Dual Vivera® Retainers' },
    ],
    whoShouldVisit: [
      {
        title: 'Crowded, Rotated, or Overlapping Teeth',
        desc: 'Alleviates tight contact points to make daily flossing effortless and prevent hidden plaque traps.',
        icon: '🦷',
      },
      {
        title: 'Diastemas & Spacing Discrepancies',
        desc: 'Gently closes spaces between front or side teeth while maintaining ideal arch width and facial support.',
        icon: '📏',
      },
      {
        title: 'Deep Overbite, Underbite, or Crossbite',
        desc: 'Realigns how your upper and lower teeth meet, reducing excessive wear, jaw fatigue, and TMJ clicking.',
        icon: '⚖️',
      },
      {
        title: 'Working Professionals Seeking Discretion',
        desc: 'Medical-grade, crystal-clear aligner trays that are virtually invisible in meetings, photos, and social events.',
        icon: '👔',
      },
      {
        title: 'Relapsed Childhood Orthodontics',
        desc: 'Accelerated minor orthodontic realignments for teeth that shifted after previous braces or lost retainers.',
        icon: '🔄',
      },
    ],
    whatWeCanPerform: [
      {
        phase: 'Phase 01',
        title: 'Digital Cephalometric & 3D Movement Staging',
        desc: 'We map every root vector and crown trajectory on screen, showing you a full video simulation of your smile progression.',
        badge: 'AI Predictive Simulation',
      },
      {
        phase: 'Phase 02',
        title: 'Precision Scalloped Aligner Fabrication',
        desc: 'Laser-trimmed clear aligners tailored to your exact gingival margin for superior comfort and zero soft-tissue irritation.',
        badge: 'Custom Comfort Trays',
      },
      {
        phase: 'Phase 03',
        title: 'Enamel-Safe Micro-Attachments',
        desc: 'Color-matched composite anchors placed on designated teeth to guide complex rotational and root-uprighting movements.',
        badge: 'Invisible Anchors',
      },
      {
        phase: 'Phase 04',
        title: 'Hybrid Monitoring & Progression Tracking',
        desc: 'Track aligner seating through our smartphone portal, reducing unnecessary clinic visits while keeping doctors in full control.',
        badge: 'Remote & In-Clinic Check',
      },
      {
        phase: 'Phase 05',
        title: 'Final Bite Settling & Retention Delivery',
        desc: 'Final occlusal balancing followed by delivery of custom retainers and night-time preservation protocols.',
        badge: 'Lifetime Arch Stability',
      },
    ],
    video: {
      title: '3D Anatomic Modeling & Tooth Kinematics',
      src: '/assets/tooth.mp4',
      poster: '/assets/tech-3d-imaging.webp',
      duration: '0:03',
      badge: 'Diagnostic Simulation',
      desc: 'Explore our high-resolution 3D kinematic engine calculating orthodontic tooth movement to the sub-millimeter.',
    },
    warranty: {
      badge: 'Lifetime Alignment Retention Guarantee',
      highlight: '3-Year Free Refinement',
      desc: 'We stand by your orthodontic results with guaranteed refinement backing and complete retention support.',
      points: [
        'Free aligner refinement trays if teeth shift within 3 years of completing your treatment.',
        'Includes 2 sets of high-durability custom clear retainers at zero additional cost.',
        'Comprehensive post-orthodontic bite evaluation and enamel polish included.',
        'Priority replacement of lost retainers with our saved 3D master digital models.',
      ],
      certificate: 'Guaranteed alignment passport backed by digital model archiving.',
    },
  },
  {
    id: 'implant',
    title: 'Implantology',
    badge: 'Permanent Tooth Replacement & Restoration',
    tagline: 'Permanent, natural-looking tooth replacements with 3D-guided surgical precision.',
    heroImage: '/assets/service-implant.webp',
    quickMetrics: [
      { label: 'Procedures', value: '1–3 Procedures' },
      { label: 'Integration Time', value: '8–12 Weeks' },
      { label: 'Surgical Guidance', value: '3D Computer-Navigated' },
      { label: 'Fixture Grade', value: 'Straumann® Roxolid® Grade-4' },
    ],
    whoShouldVisit: [
      {
        title: 'Single or Multiple Missing Teeth',
        desc: 'Permanent restoration without drilling or compromising adjacent healthy neighboring teeth.',
        icon: '🔩',
      },
      {
        title: 'Broken Roots & Failing Endodontic Teeth',
        desc: 'Immediate extraction and single-stage implant placement with temporary aesthetic provisional in one visit.',
        icon: '⚡',
      },
      {
        title: 'Unstable, Slipping Removable Dentures',
        desc: 'Convert loose plastic plates into rock-solid, implant-supported hybrid bridges that feel like natural teeth.',
        icon: '🔒',
      },
      {
        title: 'Jawbone Resorption & Facial Sagging',
        desc: 'Titanium fixtures mimic biological tooth roots, stimulating bone renewal and maintaining facial jaw structure.',
        icon: '🦴',
      },
      {
        title: 'Difficulty Chewing Apples, Steak, or Nuts',
        desc: 'Restore 100% natural bite strength so you can enjoy your favorite foods with zero hesitation.',
        icon: '🍎',
      },
    ],
    whatWeCanPerform: [
      {
        phase: 'Phase 01',
        title: 'CBCT 3D Bone Tomography & Nerve Mapping',
        desc: 'Ultra-low dose volumetric imaging provides sub-millimeter accuracy of bone density, sinus anatomy, and nerve paths.',
        badge: '360° Radiographic Planning',
      },
      {
        phase: 'Phase 02',
        title: 'CAD/CAM Computer-Guided Surgical Guide',
        desc: 'A custom 3D-printed guide locks onto your teeth, ensuring the implant fixture enters at the exact planned angulation and depth.',
        badge: 'Zero-Guesswork Navigation',
      },
      {
        phase: 'Phase 03',
        title: 'Atraumatic Biological Fixture Insertion',
        desc: 'Using medical-grade Swiss Straumann® Roxolid® titanium fixtures with SLActive® hydrophilic surfaces for rapid healing.',
        badge: 'Hydrophilic Osseointegration',
      },
      {
        phase: 'Phase 04',
        title: 'Custom Anatomical Emergence Abutment',
        desc: 'Custom-milled zirconia abutments contour the surrounding gum tissue, ensuring your implant tooth emerges naturally like biological teeth.',
        badge: 'Natural Gingival Contour',
      },
      {
        phase: 'Phase 05',
        title: 'Monolithic Zirconia / Porcelain Crown',
        desc: 'Screw-retained ceramic restoration with zero residual cement, meticulously color-matched to your neighboring teeth.',
        badge: 'Lifetime Restorative Crown',
      },
    ],
    video: {
      title: 'Cinematic Studio & 3D Consult',
      src: '/assets/clinic-experience.mp4',
      poster: '/assets/video-shot-1.jpg',
      duration: '0:05',
      badge: 'Beverly Hills Studio',
      desc: 'Take an intimate look inside our 3D digital diagnostic suite and precision ceramic artistry.',
    },
    warranty: {
      badge: 'Lifetime Implant Osseointegration Guarantee',
      highlight: 'Lifetime Biological Guarantee',
      desc: 'We provide an unconditional lifetime biological warranty on all Straumann® and Nobel Biocare® implant fixtures.',
      points: [
        '100% complimentary replacement fixture if non-integration ever occurs at any stage.',
        '5-Year comprehensive structural warranty on custom ceramic crowns and abutments.',
        'Free annual radiographic hygiene evaluation to safeguard peri-implant gum health.',
        'International genuine Swiss manufacturer passport provided with unique serial numbers.',
      ],
      certificate: 'Official Straumann® International Genuine Component Passport.',
    },
  },
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    badge: 'Enamel-Safe Brightness & Radiance',
    tagline: 'Professional medical-grade whitening systems that elevate your shade safely with zero enamel sensitivity.',
    heroImage: '/assets/service-whitening.webp',
    quickMetrics: [
      { label: 'Session Duration', value: '45 Minutes' },
      { label: 'Shade Elevation', value: 'Up to 8 Shades' },
      { label: 'Sensitivity Level', value: 'Zero (ACP Desensitizer)' },
      { label: 'Longevity', value: '18–24 Months' },
    ],
    whoShouldVisit: [
      {
        title: 'Coffee, Espresso, Wine & Tea Lovers',
        desc: 'Erase accumulated chromogenic tannins and deep surface stains without abrasive brushing damage.',
        icon: '☕',
      },
      {
        title: 'Upcoming Weddings, Galas & Photo Shoots',
        desc: 'Instant, photo-ready brilliance achieved in one single in-clinic appointment.',
        icon: '📸',
      },
      {
        title: 'Age-Related Enamel Dullness & Yellowing',
        desc: 'Safely oxygenate the internal dentin structure to bring back youthful, radiant light reflection.',
        icon: '🌟',
      },
      {
        title: 'Tobacco or Nicotine Discoloration',
        desc: 'Medical-grade peroxide breakdown that dissolves stubborn nicotine tars that home toothpastes cannot lift.',
        icon: '🌿',
      },
      {
        title: 'Patients Sensitive to Drugstore Strips',
        desc: 'Neutral-pH formulation with potassium nitrate and amorphous calcium phosphate prevents post-op zings.',
        icon: '🛡️',
      },
    ],
    whatWeCanPerform: [
      {
        phase: 'Phase 01',
        title: 'Digital Shade Spectrophotometry',
        desc: 'We measure your exact starting enamel shade and calibrate realistic aesthetic targets with the VITA master shade guide.',
        badge: 'Objective Shade Mapping',
      },
      {
        phase: 'Phase 02',
        title: 'Liquid Dam Gingival Shield Isolation',
        desc: 'Curable polymer resin is placed over gums and exposed root surfaces to ensure zero soft-tissue exposure or irritation.',
        badge: '100% Gum Protection',
      },
      {
        phase: 'Phase 03',
        title: 'Cold-Light LED Laser Photo-Activation',
        desc: 'Specific blue-spectrum light accelerates the release of oxygen free-radicals, breaking organic stain bonds deeply.',
        badge: 'Advanced Phototherapy',
      },
      {
        phase: 'Phase 04',
        title: 'Multi-Cycle 15-Minute Re-Applications',
        desc: 'Fresh clinical gel is applied in three controlled 15-minute bursts under specialist supervision for optimal shade gain.',
        badge: 'Controlled 45-Min Process',
      },
      {
        phase: 'Phase 05',
        title: 'Nano-Hydroxyapatite Remineralization',
        desc: 'Final application of biological calcium-phosphate crystals to seal enamel tubules and lock in brilliant translucency.',
        badge: 'Tubule Sealant & Gloss',
      },
    ],
    video: {
      title: 'Precision Microscopic Crafting',
      src: '/assets/clinic-experience.mp4',
      poster: '/assets/video-shot-2.jpg',
      duration: '0:05',
      badge: 'Digital Lab & In-House Ceramist',
      desc: 'Witness how microscopic preparation and hand-layered ceramics create natural lifelike translucency.',
    },
    warranty: {
      badge: 'Guaranteed Shade Elevation Promise',
      highlight: 'Minimum 4–8 Shades Whiter',
      desc: 'We guarantee a visibly brighter, cleaner smile backed by our scientific shade verification.',
      points: [
        'Guaranteed minimum 4 to 8 VITA shade improvement in a single clinical visit.',
        'Zero-sensitivity commitment: free desensitizing therapy in the rare event of discomfort.',
        'Complimentary take-home touch-up kit with custom thermoformed trays included.',
        'Discounted annual refresh sessions to keep your smile permanently camera-ready.',
      ],
      certificate: 'VITA Shade Verification Guarantee Certificate included.',
    },
  },
  {
    id: 'surgical',
    title: 'Surgical Dentistry',
    badge: 'Specialized Care & Gentle Recovery',
    tagline: 'Minimally invasive oral surgery, wisdom tooth preservation, and biological tissue regeneration.',
    heroImage: '/assets/service-surgical.webp',
    quickMetrics: [
      { label: 'Visit Type', value: 'Comfort Outpatient Visit' },
      { label: 'Anesthesia', value: 'Painless Gentle Numbing / Sedation' },
      { label: 'Regeneration Tech', value: 'Autologous PRF Fibrin' },
      { label: 'Recovery Horizon', value: '48–72 Hours' },
    ],
    whoShouldVisit: [
      {
        title: 'Impacted or Painful Wisdom Teeth',
        desc: 'Relieve jaw crowding, recurring pericoronitis, and prevent cyst formation with gentle removal.',
        icon: '⚠️',
      },
      {
        title: 'Inadequate Bone Foundation for Implants',
        desc: 'Sinus floor elevation and ridge bone augmentation using biological matrices to support lifelong dental implants.',
        icon: '🏗️',
      },
      {
        title: 'Receding Gum Lines & Exposed Roots',
        desc: 'Connective tissue microsurgery to cover exposed tooth necks, eliminate thermal pain, and restore gum symmetry.',
        icon: '🌿',
      },
      {
        title: 'Severely Fractured or Non-Restorable Teeth',
        desc: 'Atraumatic sectioning that extracts damaged roots while keeping 100% of surrounding alveolar bone intact.',
        icon: '🔬',
      },
      {
        title: 'Excessive Gummy Smile (Gingival Excess)',
        desc: 'Aesthetic crown lengthening to reveal your teeth’s true clinical crown and balance gum-to-tooth proportions.',
        icon: '✨',
      },
    ],
    whatWeCanPerform: [
      {
        phase: 'Phase 01',
        title: 'Volumetric Nerve & Bone Diagnostics',
        desc: '3D panoramic tomography visualizes exact distances to the mandibular canal and maxillary sinuses for total safety.',
        badge: 'Precise Anatomical Safety',
      },
      {
        phase: 'Phase 02',
        title: 'Piezosurgery Ultrasonic Bone Cutting',
        desc: 'Ultrasonic micro-vibrations cut hard bone while leaving delicate soft tissues, nerves, and blood vessels completely unharmed.',
        badge: 'Microsurgical Precision',
      },
      {
        phase: 'Phase 03',
        title: 'Autologous PRF (Platelet-Rich Fibrin)',
        desc: 'We spin a tiny sample of your blood to create concentrated growth factor membranes that accelerate healing by up to 50%.',
        badge: 'Biological Accelerated Healing',
      },
      {
        phase: 'Phase 04',
        title: 'Atraumatic Socket Preservation',
        desc: 'Immediate biocompatible mineral placement into empty sockets prevents post-extraction collapse and preserves facial contour.',
        badge: 'Socket Preservation Matrix',
      },
      {
        phase: 'Phase 05',
        title: 'Post-Operative Concierge Protocol',
        desc: 'Dissolvable microsutures, specialized anti-inflammatory regimen, and direct doctor messaging for comfortable recovery.',
        badge: '24/7 Clinical Support',
      },
    ],
    video: {
      title: 'Beverly Hills Clinical Suite & Diagnostics',
      src: '/assets/clinic-experience.mp4',
      poster: '/assets/video-shot-1.jpg',
      duration: '0:05',
      badge: 'Surgical Theater',
      desc: 'Tour our clean, private surgical suite outfitted with piezosurgery and regenerative biologic systems.',
    },
    warranty: {
      badge: 'Complete Healing & Recovery Warranty',
      highlight: 'Zero-Cost Post-Operative Care',
      desc: 'All surgical procedures include unlimited follow-up care and total biological healing support.',
      points: [
        '100% complimentary post-surgical follow-ups, suture management, and healing assessments.',
        'Emergency 24/7 clinical hotline with your treating oral surgeon.',
        'Guaranteed foundation preservation backing for all planned subsequent implant procedures.',
        'Comfort pledge: custom sedation and painless computer-assisted local anesthesia.',
      ],
      certificate: 'Comprehensive Post-Operative Safety & Care Warranty.',
    },
  },
];

export default function ServiceDeepDive({ activeServiceId, onServiceChange }) {
  const [internalActiveId, setInternalActiveId] = useState('aesthetic');

  // Autoselected from top prop or internal state
  const currentActiveId = activeServiceId || internalActiveId;
  const activeService = SERVICES_DEEP_DIVE.find((s) => s.id === currentActiveId) || SERVICES_DEEP_DIVE[0];

  // Hash synchronization on mount and navigation if standalone
  useEffect(() => {
    if (activeServiceId) return;
    const handleHash = () => {
      if (typeof window !== 'undefined' && window.location.hash) {
        const raw = window.location.hash.replace('#', '').toLowerCase();
        const found = SERVICES_DEEP_DIVE.find((s) => s.id === raw || `dept-${s.id}` === raw);
        if (found) {
          if (onServiceChange) {
            onServiceChange(found.id);
          } else {
            setInternalActiveId(found.id);
          }
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [activeServiceId, onServiceChange]);

  const handleSelectService = (id) => {
    if (onServiceChange) {
      onServiceChange(id);
    } else {
      setInternalActiveId(id);
    }
    // Update hash without jumping
    if (typeof window !== 'undefined' && window.history?.pushState) {
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <section 
      id="service-deep-dive" 
      className="w-full max-w-[1500px] mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24 scroll-mt-24"
    >
      {/* SECTION HEADER */}
      <div className="text-center max-w-[800px] mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 mb-3.5">
          <span className="w-2 h-2 rounded-full bg-[#0066cc] animate-pulse"></span>
          <span className="text-[11.5px] font-bold text-[#0066cc] tracking-[0.16em] uppercase">
            Comprehensive Clinical Suite
          </span>
        </div>
        <h2 className="text-[32px] sm:text-[44px] lg:text-[48px] font-bold text-[#07234b] tracking-tight leading-[1.15]">
          Explore Your Tailored Dental Solution
        </h2>
        <p className="text-[14.5px] sm:text-[16px] text-[#475569] mt-3.5 leading-relaxed max-w-[650px] mx-auto">
          Choose a discipline below for an in-depth clinical guide: candidacy indications, our procedural roadmap, and post-treatment warranty protection.
        </p>
      </div>

      {/* HORIZONTAL UNDERLINED CATEGORY TABS (Same style like above) */}
      <div className="w-full max-w-[960px] mx-auto border-b border-slate-200/90 mb-10 sm:mb-14">
        <div className="flex items-center justify-between sm:justify-center gap-6 sm:gap-10 overflow-x-auto no-scrollbar pb-0.5">
          {SERVICES_DEEP_DIVE.map((item) => {
            const isActive = currentActiveId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelectService(item.id)}
                className={`relative pb-3 text-[14px] sm:text-[15px] font-semibold transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                  isActive ? 'text-[#0066cc]' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {item.title}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0066cc] rounded-full"></span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* MAIN CONTENT WRAPPER */}
      <div className="space-y-10 sm:space-y-14 transition-all duration-300">
        
        {/* HERO BANNER FOR THE SELECTED SERVICE */}
        <div className="bg-gradient-to-br from-[#07234b] via-[#092e63] to-[#0c3977] text-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 shadow-[0_25px_60px_-15px_rgba(7,35,75,0.25)] relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none -mr-40 -mt-40"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-sky-200 text-[11.5px] font-semibold mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  {activeService.badge}
                </div>
                <h3 className="text-[28px] sm:text-[38px] lg:text-[44px] font-bold text-white tracking-tight leading-tight">
                  {activeService.title}
                </h3>
                <p className="text-[14.5px] sm:text-[16px] text-white/85 mt-3 leading-relaxed max-w-[580px]">
                  {activeService.tagline}
                </p>
              </div>

              {/* 4 Quick Clinical Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 my-7 pt-6 border-t border-white/10">
                {activeService.quickMetrics.map((qm, i) => (
                  <div key={i} className="bg-white/[0.08] backdrop-blur-xs rounded-xl p-3 border border-white/10">
                    <span className="text-[11px] text-white/70 block uppercase tracking-wider">
                      {qm.label}
                    </span>
                    <span className="text-[13px] sm:text-[14px] font-bold text-white mt-1 block">
                      {qm.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Row */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href={`/#schedule?service=${activeService.id}`}
                  className="px-6 sm:px-8 py-3.5 rounded-full bg-white hover:bg-sky-50 text-[#07234b] text-[13.5px] sm:text-[14px] font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  Schedule {activeService.title}
                </Link>
                <a
                  href="tel:13108592432"
                  className="px-5 sm:px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-[13.5px] font-semibold transition-all border border-white/20"
                >
                  Call: +1 (310) 859-2432
                </a>
              </div>
            </div>

            {/* Right: Premium Image */}
            <div className="lg:col-span-5 relative">
              <div className="w-full h-[280px] sm:h-[340px] rounded-[24px] overflow-hidden relative shadow-2xl border border-white/20 bg-slate-800">
                <img
                  src={activeService.heroImage}
                  alt={activeService.title}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07234b]/80 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-[12px] bg-black/40 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                  <span className="font-semibold">{activeService.badge}</span>
                  <span className="text-sky-300 font-bold">In-Studio Precision</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2-COLUMN SECTION: WHO SHOULD VISIT US & WHAT WE CAN PERFORM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: WHO SHOULD VISIT US (Span 6) */}
          <div className="lg:col-span-6 bg-white rounded-[26px] sm:rounded-[32px] p-6 sm:p-8 lg:p-9 shadow-[0_12px_40px_-15px_rgba(12,39,82,0.06)] border border-slate-200/90 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#0066cc] flex items-center justify-center font-bold text-[14px]">
                  ✓
                </div>
                <span className="text-[11.5px] font-bold text-[#0066cc] tracking-[0.16em] uppercase">
                  Candidacy & Clinical Indications
                </span>
              </div>
              <h3 className="text-[22px] sm:text-[26px] font-bold text-[#07234b] tracking-tight">
                Who Should Visit Us for {activeService.title}?
              </h3>
              <p className="text-[13px] sm:text-[14px] text-[#64748b] mt-2 mb-6">
                You are an ideal candidate for this treatment if you present with any of the following clinical conditions:
              </p>

              <div className="space-y-3.5">
                {activeService.whoShouldVisit.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-[18px] bg-slate-50/80 hover:bg-sky-50/60 border border-slate-200/70 hover:border-sky-200 transition-all flex items-start gap-3.5"
                  >
                    <span className="text-[20px] flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div className="min-w-0">
                      <h4 className="text-[14px] sm:text-[14.5px] font-bold text-[#07234b] leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-[12.5px] text-[#475569] mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 pt-5 border-t border-slate-100 flex items-center justify-between text-[12.5px] text-[#475569]">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="text-emerald-500 font-bold">●</span> Complimentary 3D candidacy assessment included
              </span>
            </div>
          </div>

          {/* RIGHT: WHAT WE CAN PERFORM (Span 6) */}
          <div className="lg:col-span-6 bg-white rounded-[26px] sm:rounded-[32px] p-6 sm:p-8 lg:p-9 shadow-[0_12px_40px_-15px_rgba(12,39,82,0.06)] border border-slate-200/90 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#0066cc] flex items-center justify-center font-bold text-[14px]">
                  ⚙️
                </div>
                <span className="text-[11.5px] font-bold text-[#0066cc] tracking-[0.16em] uppercase">
                  Procedural Execution & Capabilities
                </span>
              </div>
              <h3 className="text-[22px] sm:text-[26px] font-bold text-[#07234b] tracking-tight">
                What We Can Perform
              </h3>
              <p className="text-[13px] sm:text-[14px] text-[#64748b] mt-2 mb-6">
                Our clinical sequence blends architectural planning with state-of-the-art bio-compatible execution:
              </p>

              <div className="space-y-3.5">
                {activeService.whatWeCanPerform.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-[18px] bg-slate-50/80 hover:bg-slate-100/70 border border-slate-200/70 transition-all flex items-start gap-3.5"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#07234b] text-white flex items-center justify-center font-bold text-[11.5px] flex-shrink-0 mt-0.5">
                      0{idx + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 flex-wrap mb-0.5">
                        <h4 className="text-[14px] sm:text-[14.5px] font-bold text-[#07234b] leading-tight">
                          {step.title}
                        </h4>
                        <span className="text-[10px] font-semibold text-[#0066cc] bg-sky-50 px-2 py-0.5 rounded-md border border-sky-100">
                          {step.badge}
                        </span>
                      </div>
                      <p className="text-[12.5px] text-[#475569] mt-1 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 pt-5 border-t border-slate-100 flex items-center justify-between text-[12.5px] text-[#475569]">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="text-sky-500 font-bold">●</span> Microscopic preparation & E.max ceramic certified
              </span>
            </div>
          </div>

        </div>



        {/* WARRANTY DETAILS AFTER THE TREATMENT */}
        <div className="bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 shadow-[0_15px_45px_-15px_rgba(12,39,82,0.07)] border border-slate-200/90 relative overflow-hidden">
          {/* Subtle gold accent top border line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-sky-500 to-[#07234b]"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Shield & Highlights (Span 5) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-[11.5px] font-bold mb-3.5">
                  <span>🛡️</span>
                  <span>Guaranteed Peace of Mind</span>
                </div>
                <h3 className="text-[26px] sm:text-[34px] font-bold text-[#07234b] tracking-tight leading-tight">
                  Warranty Details After Your {activeService.title}
                </h3>
                <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] mt-3 leading-relaxed">
                  {activeService.warranty.desc}
                </p>
              </div>

              {/* Big Highlight Box */}
              <div className="my-6 p-5 rounded-[22px] bg-gradient-to-br from-slate-50 to-sky-50/50 border border-slate-200/80">
                <span className="text-[11px] font-bold text-[#0066cc] uppercase tracking-wider block">
                  Official Protection Term
                </span>
                <span className="text-[24px] sm:text-[28px] font-extrabold text-[#07234b] block mt-0.5">
                  {activeService.warranty.highlight}
                </span>
                <span className="text-[12px] text-[#64748b] mt-1 block">
                  {activeService.warranty.certificate}
                </span>
              </div>
            </div>

            {/* Right: Inclusions Checklist (Span 7) */}
            <div className="lg:col-span-7 bg-slate-50/70 rounded-[24px] p-6 sm:p-8 border border-slate-200/80 space-y-3.5">
              <span className="text-[12px] font-bold text-[#07234b] uppercase tracking-wider block mb-2">
                What Is Included in Your Written Warranty
              </span>

              {activeService.warranty.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/60 shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-[12px] flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-[13px] sm:text-[13.5px] text-slate-800 leading-snug font-medium">
                    {point}
                  </span>
                </div>
              ))}

              <div className="pt-3 flex items-center justify-between text-[11.5px] text-[#64748b]">
                <span>🔒 All terms documented in your written patient treatment agreement</span>
                <Link 
                  href="/contact" 
                  className="font-bold text-[#0066cc] hover:underline"
                >
                  Inquire Terms →
                </Link>
              </div>
            </div>

          </div>
        </div>



      </div>
    </section>
  );
}
