'use client';

import { useState, useRef } from 'react';

const VIDEO_CHAPTERS = [
  {
    id: 'clinic-tour',
    title: 'Cinematic Studio & 3D Consult',
    duration: '0:05',
    src: '/assets/clinic-experience.mp4',
    poster: '/assets/video-shot-1.jpg',
    badge: 'Beverly Hills Studio',
    desc: 'Take an intimate look inside our 3D digital diagnostic suite and precision ceramic artistry.',
  },
  {
    id: 'procedure-preview',
    title: 'Precision Microscopic Crafting',
    duration: '0:05',
    src: '/assets/clinic-experience.mp4',
    poster: '/assets/video-shot-2.jpg',
    badge: 'Digital Lab & In-House Ceramist',
    desc: 'Witness how microscopic preparation and hand-layered ceramics create natural lifelike translucency.',
  },
  {
    id: 'tooth-demo',
    title: '3D Anatomic Modeling',
    duration: '0:03',
    src: '/assets/tooth.mp4',
    poster: '/assets/tech-3d-imaging.webp',
    badge: 'Diagnostic Simulation',
    desc: 'High-resolution photometric imaging to evaluate enamel depth, jaw kinetics, and bite balance.',
  },
];



const WARRANTY_PILLARS = [
  {
    title: '10-Year Porcelain Warranty',
    subtitle: 'Veneers, Crowns & Ceramic Overlays',
    badge: '100% Full Replacement',
    highlight: '10 Years',
    color: 'from-sky-500/10 to-blue-600/10',
    border: 'border-sky-200/80',
    iconColor: 'bg-[#0066cc] text-white',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    points: [
      'Covers structural chipping, accidental fractures, or micro-cracks',
      'Complimentary replacement or re-bonding by the original specialist',
      'Includes free annual bite calibration and protective polish',
      'No deductible or depreciation over the entire 10-year term',
    ],
  },
  {
    title: 'Lifetime Implant Guarantee',
    subtitle: 'Straumann® & Nobel Biocare® Implants',
    badge: 'Lifetime Osseointegration',
    highlight: 'Lifetime',
    color: 'from-teal-500/10 to-emerald-600/10',
    border: 'border-emerald-200/80',
    iconColor: 'bg-emerald-600 text-white',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    points: [
      'Full coverage on titanium and zirconia dental fixtures',
      'Guaranteed biological bone integration and replacement backing',
      'Free replacement fixtures in case of biological non-integration',
      'Backed by international Straumann® genuine component passports',
    ],
  },
  {
    title: 'Aesthetic Satisfaction Guarantee',
    subtitle: 'Try-In Simulation Before Final Bonding',
    badge: 'Zero Risk Approval',
    highlight: '100% Love It',
    color: 'from-amber-500/10 to-orange-600/10',
    border: 'border-amber-200/80',
    iconColor: 'bg-amber-600 text-white',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
    ),
    points: [
      'You test and approve tooth shape, shade, and bite in provisional form',
      'Unlimited aesthetic adjustments with our in-house ceramist',
      'We do not permanently bond until you are 100% in love with your smile',
      'Photometric studio lighting checks for natural daylight realism',
    ],
  },
  {
    title: 'Zero-Surprise Financial Clarity',
    subtitle: 'Transparent Pricing & 0% APR Financing',
    badge: 'No Hidden Fees',
    highlight: '0% APR',
    color: 'from-indigo-500/10 to-purple-600/10',
    border: 'border-indigo-200/80',
    iconColor: 'bg-indigo-600 text-white',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    points: [
      'Every quote is all-inclusive: diagnostics, surgery, labs & follow-ups',
      'Flexible 12 to 24-month interest-free financing via CareCredit® & LendingClub®',
      'Direct PPO insurance claim submission & optimization',
      'Guaranteed pricing locked in writing for 12 months from consultation',
    ],
  },
];

const COMFORT_FEATURES = [
  {
    title: 'Computerized Wand® Anesthesia',
    desc: 'Microprocessor-controlled injection delivers anesthetic below the pain threshold with zero numbness in your lips or tongue.',
    tag: 'Pain-Free Technology',
  },
  {
    title: 'Twilight & Conscious Sedation',
    desc: 'Relax in peaceful tranquility with optional board-certified anesthesiologist supervision for extensive smile makeovers.',
    tag: 'Anxiety-Free',
  },
  {
    title: 'Biological & Biocompatible Materials',
    desc: '100% BPA-free, nickel-free, and mercury-free ceramics tested for optimal biocompatibility with your immune system.',
    tag: 'Holistic Safety',
  },
  {
    title: '24/7 Dedicated Clinician Hotline',
    desc: 'Direct mobile access to your treating specialist after any surgical procedure for prompt reassurances and recovery care.',
    tag: 'Direct Access',
  },
];

export default function PatientExperienceAndWarranty() {
  const [activeTab, setActiveTab] = useState('video'); // 'video' | 'warranty' | 'comfort'
  const [selectedChapter, setSelectedChapter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const currentChapter = VIDEO_CHAPTERS[selectedChapter];

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleToggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleSelectChapter = (idx) => {
    setSelectedChapter(idx);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section id="experience" className="w-full py-14 sm:py-18 lg:py-22 bg-white border-t border-slate-200/70 relative overflow-hidden">
      <div className="w-full max-w-[1500px] mx-auto px-5 sm:px-12 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
          
          {/* Left: Eyebrow + Heading + Subtitle */}
          <div className="max-w-[720px] text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200/60 text-[#0066cc] text-[11.5px] font-bold tracking-wide uppercase mb-3.5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0066cc] animate-pulse"></span>
              <span>The Vsb Smiles Standard • Clinical Excellence</span>
            </div>

            <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-bold text-[#07234b] leading-[1.12] tracking-[-0.035em]">
              Precision Artistry. <br className="hidden sm:inline" />
              Protected by a Lifetime of Trust.
            </h2>

            <p className="text-[14px] sm:text-[15.5px] text-[#475569] leading-relaxed font-normal mt-3.5 max-w-[640px]">
              Explore our state-of-the-art treatment suites, discover our 4-step patient journey, and review our comprehensive 10-year restorative warranties before you schedule.
            </p>
          </div>

          {/* Interactive Modern 3-Way Tab Switcher */}
          <div className="w-full sm:w-auto flex-shrink-0 self-start lg:self-end overflow-x-auto sm:overflow-x-visible no-scrollbar">
            <div className="inline-flex p-1.5 bg-slate-100/90 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-xs whitespace-nowrap">
              <button
                onClick={() => setActiveTab('video')}
                className={`px-3.5 sm:px-5 py-2 rounded-xl text-[12px] sm:text-[13px] font-bold transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
                  activeTab === 'video'
                    ? 'bg-white text-[#0066cc] shadow-md shadow-sky-900/5'
                    : 'text-slate-600 hover:text-[#07234b]'
                }`}
              >
                <span>🎥</span>
                <span>What We Do & Tour</span>
              </button>

              <button
                onClick={() => setActiveTab('warranty')}
                className={`px-3.5 sm:px-5 py-2 rounded-xl text-[12px] sm:text-[13px] font-bold transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
                  activeTab === 'warranty'
                    ? 'bg-white text-[#0066cc] shadow-md shadow-sky-900/5'
                    : 'text-slate-600 hover:text-[#07234b]'
                }`}
              >
                <span>🛡️</span>
                <span>Warranty & Guarantees</span>
              </button>

              <button
                onClick={() => setActiveTab('comfort')}
                className={`px-3.5 sm:px-5 py-2 rounded-xl text-[12px] sm:text-[13px] font-bold transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
                  activeTab === 'comfort'
                    ? 'bg-white text-[#0066cc] shadow-md shadow-sky-900/5'
                    : 'text-slate-600 hover:text-[#07234b]'
                }`}
              >
                <span>✨</span>
                <span>Comfort Standard</span>
              </button>
            </div>
          </div>

        </div>

        {/* TAB 1: WHAT WE DO & CINEMATIC VIDEO TOUR */}
        {activeTab === 'video' && (
          <div className="space-y-10 animate-fadeIn">
            
            {/* Main Video Presentation Card */}
            <div className="bg-white rounded-[26px] sm:rounded-[32px] p-4 sm:p-6 lg:p-7 border border-slate-200/90 shadow-[0_20px_50px_-20px_rgba(7,35,75,0.12)]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                
                {/* Left: Cinematic Video Player (Span 7) */}
                <div className="lg:col-span-7">
                  <div className="relative w-full aspect-video rounded-[20px] sm:rounded-[24px] overflow-hidden bg-slate-900 shadow-xl border border-slate-200/60 group">
                    <video
                      ref={videoRef}
                      src={currentChapter.src}
                      poster={currentChapter.poster}
                      preload="metadata"
                      autoPlay
                      muted={isMuted}
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />

                    {/* Top Overlay Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-20">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07234b]/80 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>{currentChapter.badge}</span>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-[10.5px] font-medium border border-white/10">
                        HD 1080p
                      </span>
                    </div>

                    {/* Custom Player Controls Bar */}
                    <div className="absolute bottom-3 left-3 right-3 p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-between text-white z-20 transition-opacity duration-300">
                      <div className="flex items-center gap-2.5">
                        <button
                          onClick={handleTogglePlay}
                          className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all cursor-pointer text-sm"
                          title={isPlaying ? 'Pause' : 'Play'}
                        >
                          {isPlaying ? '⏸' : '▶'}
                        </button>
                        <button
                          onClick={handleToggleMute}
                          className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all cursor-pointer text-sm"
                          title={isMuted ? 'Unmute' : 'Mute'}
                        >
                          {isMuted ? '🔇' : '🔊'}
                        </button>
                        <span className="text-[12px] font-semibold text-white/90 truncate max-w-[180px] sm:max-w-[260px]">
                          {currentChapter.title}
                        </span>
                      </div>

                      <span className="text-[11px] text-white/70 font-mono pr-2">
                        {currentChapter.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Chapter Switcher & Commentary (Span 5) */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
                  <div>
                    <span className="text-[11px] font-bold text-sky-600 tracking-wider uppercase block mb-1">
                      Featured Previews
                    </span>
                    <h3 className="text-[20px] sm:text-[22px] font-bold text-[#07234b] leading-tight">
                      Experience Clinical Precision
                    </h3>
                    <p className="text-[13px] text-[#475569] mt-1.5 leading-relaxed">
                      Select a showcase below to see our clinical protocols, 3D diagnostics, and aesthetic results in action.
                    </p>
                  </div>

                  {/* Chapter Select Cards */}
                  <div className="space-y-2.5">
                    {VIDEO_CHAPTERS.map((chapter, idx) => {
                      const isSelected = selectedChapter === idx;
                      return (
                        <div
                          key={chapter.id}
                          onClick={() => handleSelectChapter(idx)}
                          className={`p-3 sm:p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                            isSelected
                              ? 'bg-sky-50/80 border-[#0066cc] ring-1 ring-sky-200 shadow-xs'
                              : 'bg-slate-50/60 hover:bg-slate-100/70 border-slate-200/70'
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                              isSelected ? 'bg-[#0066cc] text-white' : 'bg-slate-200 text-slate-700'
                            }`}>
                              {idx + 1}
                            </div>
                            <div className="min-w-0">
                              <h4 className={`text-[13px] font-bold truncate ${isSelected ? 'text-[#0066cc]' : 'text-[#07234b]'}`}>
                                {chapter.title}
                              </h4>
                              <p className="text-[11.5px] text-slate-500 truncate">
                                {chapter.desc}
                              </p>
                            </div>
                          </div>
                          <span className={`text-[11px] font-mono px-2 py-0.5 rounded-md flex-shrink-0 ${
                            isSelected ? 'bg-sky-100 text-[#0066cc] font-bold' : 'text-slate-400'
                          }`}>
                            {chapter.duration}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Reassurance Callout */}
                  <div className="p-3 bg-emerald-50/70 border border-emerald-100 rounded-xl flex items-center gap-2.5 text-[12px] text-emerald-800">
                    <span className="text-base">✓</span>
                    <span>100% board-certified specialists with zero delegation to junior staff.</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* TAB 2: 10-YEAR & LIFETIME WARRANTY OPTIONS */}
        {activeTab === 'warranty' && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Top Warranty Header */}
            <div className="text-center max-w-[680px] mx-auto">
              <span className="text-[11.5px] font-bold text-sky-600 uppercase tracking-wider block mb-1">
                Written Guarantees & Protection
              </span>
              <h3 className="text-[22px] sm:text-[28px] font-bold text-[#07234b]">
                Comprehensive Warranties in Writing
              </h3>
              <p className="text-[13px] sm:text-[14px] text-slate-600 mt-1 leading-relaxed">
                We stand behind our clinical outcomes with written guarantees that provide complete security and total peace of mind for every procedure.
              </p>
            </div>

            {/* 4 Warranty Pillar Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {WARRANTY_PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className={`bg-white rounded-[24px] p-6 border ${pillar.border} shadow-[0_15px_40px_-15px_rgba(7,35,75,0.06)] hover:shadow-lg transition-all flex flex-col justify-between relative overflow-hidden`}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-11 h-11 rounded-2xl ${pillar.iconColor} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                          {pillar.icon}
                        </div>
                        <div>
                          <h4 className="text-[17px] font-bold text-[#07234b] leading-tight">
                            {pillar.title}
                          </h4>
                          <p className="text-[12px] text-slate-500 mt-0.5">
                            {pillar.subtitle}
                          </p>
                        </div>
                      </div>

                      <span className="px-2.5 py-1 rounded-full bg-slate-100 text-[#07234b] text-[10.5px] font-bold whitespace-nowrap">
                        {pillar.badge}
                      </span>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <ul className="space-y-2">
                        {pillar.points.map((pt, i) => (
                          <li key={i} className="text-[12.5px] text-slate-700 flex items-start gap-2">
                            <span className="text-emerald-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11.5px] text-slate-400">
                    <span>Certificate issued at treatment completion</span>
                    <span className="font-bold text-[#0066cc]">Guaranteed Coverage ➔</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Warranty Bottom Callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-sky-50 via-blue-50 to-indigo-50 border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0066cc] text-white flex items-center justify-center flex-shrink-0 font-bold">
                  🛡️
                </div>
                <div>
                  <h5 className="text-[14px] font-bold text-[#07234b]">
                    Questions regarding warranty terms or insurance coverage?
                  </h5>
                  <p className="text-[12px] text-slate-600">
                    Our treatment coordinator walks through every written warranty item during your initial 3D consultation.
                  </p>
                </div>
              </div>

              <a
                href="#schedule"
                className="px-5 py-2.5 rounded-full bg-[#0066cc] hover:bg-[#0052a3] text-white text-[12.5px] font-bold transition-all shadow-sm whitespace-nowrap"
              >
                Inquire With Consultation
              </a>
            </div>

          </div>
        )}

        {/* TAB 3: COMFORT STANDARD & PATIENT RIGHTS */}
        {activeTab === 'comfort' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="text-center max-w-[680px] mx-auto">
              <span className="text-[11.5px] font-bold text-sky-600 uppercase tracking-wider block mb-1">
                Zero-Discomfort Guarantee
              </span>
              <h3 className="text-[22px] sm:text-[28px] font-bold text-[#07234b]">
                Clinical Care Designed for Total Peace
              </h3>
              <p className="text-[13px] sm:text-[14px] text-slate-600 mt-1 leading-relaxed">
                Dental anxiety ends here. We combine soothing Beverly Hills clinical acoustics, microprocessor anesthesia, and biocompatible materials for seamless comfort.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {COMFORT_FEATURES.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 text-[10.5px] font-bold uppercase tracking-wider mb-2.5">
                      {item.tag}
                    </span>
                    <h4 className="text-[15px] font-bold text-[#07234b] leading-tight mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[12.5px] text-[#475569] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-emerald-600 flex items-center gap-1.5">
                    <span>✓</span>
                    <span>Standard at Vsb Smiles</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Comfort Highlights Bar */}
            <div className="bg-[#07234b] text-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
              <div>
                <h4 className="text-[16px] font-bold text-white tracking-tight">
                  Need gentle oral conscious sedation or twilight sleep?
                </h4>
                <p className="text-[12.5px] text-white/70 mt-0.5">
                  Let us know when you book below, and our care team will tailor your private room setup.
                </p>
              </div>
              <a
                href="#schedule"
                className="px-6 py-2.5 rounded-full bg-white hover:bg-slate-100 text-[#07234b] text-[13px] font-bold transition-all shadow-md whitespace-nowrap"
              >
                Schedule With Comfort Preferences
              </a>
            </div>
          </div>
        )}

      </div>

    </section>
  );
}
