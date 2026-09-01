// Celestia Smiles - Complete Client Interactivity & Data Binding

const DOCTORS_DATA = [
  {
    id: "doc-1",
    name: "Dr. David Wilson, DDS",
    role: "Orthodontics & Facial Aesthetics",
    tag: "Orthodontist",
    experience: "14 Years+",
    languages: "English, Spanish",
    typesOf: "Clear Aligners, Bite Reconstruction",
    degrees: "Fellowship (Aesthetic Orthodontics), MS (Orthodontics), BDS (Harvard Dental)",
    specialties: ["Dentistry", "Invisalign", "Surgery", "Bite Correction", "Smile Design"],
    rating: "4.9",
    reviews: "520",
    nextSlot: "Today, 3:30 PM",
    bio: "Pioneering custom 3D clear aligners and comprehensive smile symmetry transformations.",
    image: "public/assets/doctors/david-wilson.webp",
    fallbackImage: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&auto=format&fit=crop&q=85",
    phone: "+1 (800) 555-0199",
    email: "david.wilson@celestiasmiles.com"
  },
  {
    id: "doc-2",
    name: "Dr. Emma Robinson, DMD",
    role: "Aesthetic & Cosmetic Dentistry",
    tag: "Esthetician",
    experience: "10 Years+",
    languages: "English, French",
    typesOf: "Porcelain Veneers, Smile Makeovers",
    degrees: "Fellowship (Cosmetic Dentistry), DMD (Columbia), AACD Certified",
    specialties: ["Aesthetic", "Veneers", "Whitening", "Bonding", "Restoration"],
    rating: "5.0",
    reviews: "680",
    nextSlot: "Today, 5:15 PM",
    bio: "Master in handcrafted porcelain veneers, composite bonding, and radiant smile architecture.",
    image: "public/assets/doctors/emma-robinson.webp",
    fallbackImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=85",
    phone: "+1 (800) 555-0199",
    email: "emma.robinson@celestiasmiles.com"
  },
  {
    id: "doc-3",
    name: "Dr. Arthur Sterling, MD, DDS",
    role: "Oral & Maxillofacial Surgery",
    tag: "Oral Surgeon",
    experience: "22 Years+",
    languages: "English, German",
    typesOf: "3D Guided Implants, Full Arch Surgery",
    degrees: "Fellowship (Dental Surgeon), MS (Medicine), FCPS, MBBS, BDS",
    specialties: ["Surgery", "Implantology", "Bone Graft", "Full Arch", "Sedation"],
    rating: "5.0",
    reviews: "920",
    nextSlot: "Tomorrow, 10:00 AM",
    bio: "Board-certified specialist in 3D-guided dental implants, bone grafting, and reconstructive surgery.",
    image: "public/assets/doctors/arthur-sterling.webp",
    fallbackImage: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=800&auto=format&fit=crop&q=85",
    phone: "+1 (800) 555-0199",
    email: "arthur.sterling@celestiasmiles.com"
  },
  {
    id: "doc-4",
    name: "Dr. Sophia Turner, DDS",
    role: "Microscopic Endodontics",
    tag: "Endodontist",
    experience: "12 Years+",
    languages: "English, Italian",
    typesOf: "Painless Root Canal, Micro-Surgery",
    degrees: "MS (Endodontics), BDS (King's College London), AAE Member",
    specialties: ["Endodontics", "Root Canal", "Microscopy", "Painless Care", "Emergency"],
    rating: "4.9",
    reviews: "410",
    nextSlot: "Tomorrow, 2:00 PM",
    bio: "Expert in painless root canal treatments utilizing precision high-magnification dental microscopy.",
    image: "public/assets/doctors/sophia-turner.webp",
    fallbackImage: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=800&auto=format&fit=crop&q=85",
    phone: "+1 (800) 555-0199",
    email: "sophia.turner@celestiasmiles.com"
  },
  {
    id: "doc-5",
    name: "Dr. Michael Chen, BDS, MS",
    role: "Periodontics & Guided Implants",
    tag: "Implantologist",
    experience: "15 Years+",
    languages: "English, Mandarin",
    typesOf: "Laser Gum Therapy, Dental Implants",
    degrees: "MS (Periodontology), BDS (UPenn), Diplomate ICOI",
    specialties: ["Periodontics", "Implantology", "Laser Therapy", "Gum Aesthetics"],
    rating: "4.9",
    reviews: "640",
    nextSlot: "Friday, 11:30 AM",
    bio: "Dedicated to full arch restorations, gum aesthetics, and laser-assisted periodontal treatments.",
    image: "public/assets/doctors/michael-chen.webp",
    fallbackImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&auto=format&fit=crop&q=85",
    phone: "+1 (800) 555-0199",
    email: "michael.chen@celestiasmiles.com"
  },
  {
    id: "doc-6",
    name: "Dr. Elena Petrova, DMD",
    role: "Preventive & Pediatric Dentistry",
    tag: "Pediatric Care",
    experience: "9 Years+",
    languages: "English, Russian",
    typesOf: "Preventive Therapy, Gentle Care",
    degrees: "DMD (Boston University), AAPD Specialist",
    specialties: ["Pediatric", "Preventive", "Hygiene", "Cavity Shield", "Fluoride"],
    rating: "4.9",
    reviews: "390",
    nextSlot: "Friday, 3:00 PM",
    bio: "Creating gentle, comfortable dental experiences with state-of-the-art preventive hygiene.",
    image: "public/assets/doctors/elena-petrova.webp",
    fallbackImage: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&auto=format&fit=crop&q=85",
    phone: "+1 (800) 555-0199",
    email: "elena.petrova@celestiasmiles.com"
  }
];

const CASES_DATA = [
  {
    id: 'aesthetic',
    category: 'Aesthetic dentistry',
    cardImage: 'public/assets/service-aesthetic.webp',
    headline: 'Christina’s smile, transformed',
    story: 'Christina felt self-conscious about the gaps and uneven shape of her teeth. She wanted a natural, brighter smile that still felt like her own – just more balanced, natural, and confidently beautiful.',
    whatWeDid: [
      'Smile design planning with digital preview',
      'Minimal tooth preparation to preserve enamel',
      'Placement of ultra-thin porcelain veneers',
    ],
    beforeImage: 'public/assets/aesthetic-before.webp',
    afterImage: 'public/assets/aesthetic-after.webp',
    patientImage: 'public/assets/patient-christina.webp',
    patientName: 'Christina',
    caption: 'Christina’s smile, before and after – confident, complete, and truly hers.',
    metrics: {
      time: { title: '1. Treatment Time', primary: '7–10 days', sub: 'Quick turnaround' },
      visits: { title: '2. Treatment Visits', primary: '2–3 visits', sub: 'Custom crafted porcelain' },
      result: { title: 'Clinical Result', primary: 'Natural & lasting', sub: 'Confident aesthetic smile' }
    }
  },
  {
    id: 'ortho',
    category: 'Orthodontics',
    cardImage: 'public/assets/service-ortho.webp',
    headline: 'Marcus’s smile, aligned',
    story: 'Marcus had crowded lower teeth and a deep overbite that affected his jaw comfort. With discreet custom clear aligners, he achieved a wide, balanced arch in under 9 months.',
    whatWeDid: [
      '3D intraoral digital scanning & AI movement simulation',
      'Custom sequential clear aligner therapy',
      'Retention protocol for lasting bite stability',
    ],
    beforeImage: 'public/assets/ortho-before.webp',
    afterImage: 'public/assets/ortho-after.webp',
    patientImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=85',
    patientName: 'Marcus',
    caption: 'Marcus’s smile, before and after – seamlessly aligned with zero lifestyle interruption.',
    metrics: {
      time: { title: '1. Treatment Time', primary: '6–9 months', sub: 'Predictable progression' },
      visits: { title: '2. Treatment Visits', primary: 'Bi-weekly checks', sub: 'Clear aligner trays' },
      result: { title: 'Clinical Result', primary: 'Perfect alignment', sub: 'Lifelong bite stability' }
    }
  },
  {
    id: 'implant',
    category: 'Implantology',
    cardImage: 'public/assets/service-implant.webp',
    headline: 'Elena’s smile, restored',
    story: 'After a sports injury resulted in a missing front incisor, Elena sought a permanent solution that blended imperceptibly with her natural teeth and restored full bite strength.',
    whatWeDid: [
      'CBCT 3D guided titanium implant placement',
      'Custom zirconia abutment for natural gum emergence',
      'Individual layered ceramic crown color-matched to perfection',
    ],
    beforeImage: 'public/assets/implant-before.webp',
    afterImage: 'public/assets/implant-after.webp',
    patientImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=85',
    patientName: 'Elena',
    caption: 'Elena’s smile, restored with lifelong strength and undetectable aesthetics.',
    metrics: {
      time: { title: '1. Treatment Time', primary: '2–3 months', sub: 'Full tissue integration' },
      visits: { title: '2. Treatment Visits', primary: '3 visits total', sub: 'Guided 3D implantology' },
      result: { title: 'Clinical Result', primary: '100% bite strength', sub: 'Permanent tooth restoration' }
    }
  },
  {
    id: 'whitening',
    category: 'Whitening',
    cardImage: 'public/assets/service-whitening.webp',
    headline: 'Julian’s smile, brightened',
    story: 'Years of coffee and tea consumption had left Julian’s teeth dulled. Our deep laser phototherapy lifted 7 shades in a single comfortable 45-minute clinical session.',
    whatWeDid: [
      'Enamel-safe pH-balanced mineral prep',
      'High-frequency laser light activation session',
      'Fluoride micro-seal treatment to ensure zero sensitivity',
    ],
    beforeImage: 'public/assets/whitening-before.webp',
    afterImage: 'public/assets/whitening-after.webp',
    patientImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=85',
    patientName: 'Julian',
    caption: 'Julian’s smile, radiant and luminous with zero sensitivity.',
    metrics: {
      time: { title: '1. Treatment Time', primary: '45 minutes', sub: 'Immediate results' },
      visits: { title: '2. Treatment Visits', primary: '1 single visit', sub: 'Laser photo-activation' },
      result: { title: 'Clinical Result', primary: '8 shades brighter', sub: 'Zero enamel sensitivity' }
    }
  },
  {
    id: 'surgical',
    category: 'Surgical dentistry',
    cardImage: 'public/assets/service-surgical.webp',
    headline: 'David’s oral health, renewed',
    story: 'David suffered from persistent discomfort due to impacted wisdom teeth and localized bone loss. Our surgical specialists provided painless extraction and guided bone regeneration.',
    whatWeDid: [
      '3D panoramic nerve mapping and virtual surgical guide',
      'Minimally invasive atraumatic tooth extraction',
      'Plasma-rich bone graft for accelerated cellular healing',
    ],
    beforeImage: 'public/assets/surgical-before.webp',
    afterImage: 'public/assets/surgical-after.webp',
    patientImage: 'public/assets/patient-david.webp',
    patientName: 'David',
    caption: 'David’s smile, pain-free and fully restored after gentle surgical care.',
    metrics: {
      time: { title: '1. Treatment Time', primary: '1–2 hours', sub: 'Outpatient procedure' },
      visits: { title: '2. Treatment Visits', primary: '1 surgical visit', sub: 'Follow-up check' },
      result: { title: 'Clinical Result', primary: 'Complete pain relief', sub: 'Fast gentle healing' }
    }
  },
];

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // 2. Services Accordion
  const accordionContainer = document.getElementById('servicesAccordion');
  const serviceCards = document.querySelectorAll('.service-card');

  function setActiveCard(cardToActivate) {
    serviceCards.forEach(card => {
      if (card === cardToActivate) {
        card.classList.add('is-active');
      } else {
        card.classList.remove('is-active');
      }
    });
  }

  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => setActiveCard(card));
    card.addEventListener('click', () => setActiveCard(card));
  });

  // 3. Specialists Infinite Marquee Renderer
  const marqueeTrack = document.getElementById('marqueeTrack');
  if (marqueeTrack) {
    // Render list twice to create infinite seamless loop
    const combinedDoctors = [...DOCTORS_DATA, ...DOCTORS_DATA];
    marqueeTrack.innerHTML = combinedDoctors.map(doc => `
      <div class="w-[280px] sm:w-[310px] flex-shrink-0 bg-[#0066cc] rounded-[24px] p-3 text-white flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 select-none">
        <div>
          <div class="w-full h-[220px] rounded-[18px] overflow-hidden bg-sky-900/40 relative mb-3">
            <span class="absolute top-2.5 left-2.5 bg-white/95 text-[#0066cc] text-[10.5px] font-bold px-2.5 py-1 rounded-full shadow-xs z-10">
              ${doc.tag}
            </span>
            <img 
              src="${doc.image}" 
              onerror="this.src='${doc.fallbackImage}'" 
              alt="${doc.name}" 
              class="w-full h-full object-cover object-top" 
            />
          </div>
          <div class="px-1">
            <h3 class="text-[17px] font-bold leading-tight">${doc.name}</h3>
            <p class="text-sky-100/90 text-[12px] mt-1.5 line-clamp-2 leading-snug">${doc.bio}</p>
          </div>
        </div>
        <div class="mt-4 pt-3 border-t border-white/15 flex items-center justify-between px-1">
          <span class="text-[11px] text-sky-100/80 font-medium">${doc.experience} Experience</span>
          <button 
            onclick="openDoctorProfileModal('${doc.id}')"
            class="text-[12px] font-bold text-white bg-white/20 hover:bg-white hover:text-[#0066cc] px-3 py-1 rounded-full transition-colors"
          >
            View Profile →
          </button>
        </div>
      </div>
    `).join('');
  }

  // 4. Transformations & Before/After Slider
  let currentCaseIndex = 0;
  let sliderPosition = 50; // percentage

  const tabsContainer = document.getElementById('transformationTabsContainer');
  const headlineEl = document.getElementById('caseHeadline');
  const storyEl = document.getElementById('caseStory');
  const whatWeDidEl = document.getElementById('caseWhatWeDid');
  const beforeImgEl = document.getElementById('sliderBeforeImg');
  const afterImgEl = document.getElementById('sliderAfterImg');
  const patientImgEl = document.getElementById('casePatientImg');
  const captionEl = document.getElementById('caseCaption');
  const counterEl = document.getElementById('caseCounter');
  const prevCaseBtn = document.getElementById('prevCaseBtn');
  const nextCaseBtn = document.getElementById('nextCaseBtn');

  const sliderEl = document.getElementById('interactiveSlider');
  const clippedWrapperEl = document.getElementById('sliderClippedWrapper');
  const dividerLineEl = document.getElementById('sliderDividerLine');

  function renderTabs() {
    if (!tabsContainer) return;
    tabsContainer.innerHTML = CASES_DATA.map((item, idx) => {
      const isActive = idx === currentCaseIndex;
      return `
        <button 
          onclick="setTransformationCase(${idx})"
          class="relative pb-3 text-[14px] sm:text-[15px] font-semibold transition-colors duration-200 whitespace-nowrap cursor-pointer ${
            isActive ? 'text-[#0066cc]' : 'text-slate-500 hover:text-slate-800'
          }"
        >
          ${item.category}
          ${isActive ? '<span class="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0066cc] rounded-full"></span>' : ''}
        </button>
      `;
    }).join('');
  }

  function updateTransformationView() {
    const current = CASES_DATA[currentCaseIndex];
    if (!current) return;

    if (headlineEl) headlineEl.textContent = current.headline;
    if (storyEl) storyEl.textContent = current.story;
    if (captionEl) captionEl.textContent = current.caption;
    if (counterEl) counterEl.textContent = `${String(currentCaseIndex + 1).padStart(2, '0')}/${String(CASES_DATA.length).padStart(2, '0')}`;
    
    if (beforeImgEl) beforeImgEl.src = current.beforeImage;
    if (afterImgEl) afterImgEl.src = current.afterImage;
    if (patientImgEl) patientImgEl.src = current.patientImage;

    if (whatWeDidEl) {
      whatWeDidEl.innerHTML = current.whatWeDid.map(item => `
        <li class="flex items-start gap-2.5 text-[13px] sm:text-[13.5px] text-slate-600 leading-snug">
          <span class="w-1.5 h-1.5 rounded-full bg-[#0066cc] mt-1.5 flex-shrink-0"></span>
          <span>${item}</span>
        </li>
      `).join('');
    }

    if (current.metrics) {
      const metricTimeTitle = document.getElementById('metricTimeTitle');
      const metricTimePrimary = document.getElementById('metricTimePrimary');
      const metricTimeSub = document.getElementById('metricTimeSub');
      if (metricTimeTitle) metricTimeTitle.textContent = current.metrics.time.title;
      if (metricTimePrimary) metricTimePrimary.textContent = current.metrics.time.primary;
      if (metricTimeSub) metricTimeSub.textContent = current.metrics.time.sub;

      const metricVisitsTitle = document.getElementById('metricVisitsTitle');
      const metricVisitsPrimary = document.getElementById('metricVisitsPrimary');
      const metricVisitsSub = document.getElementById('metricVisitsSub');
      if (metricVisitsTitle) metricVisitsTitle.textContent = current.metrics.visits.title;
      if (metricVisitsPrimary) metricVisitsPrimary.textContent = current.metrics.visits.primary;
      if (metricVisitsSub) metricVisitsSub.textContent = current.metrics.visits.sub;

      const metricResultTitle = document.getElementById('metricResultTitle');
      const metricResultPrimary = document.getElementById('metricResultPrimary');
      const metricResultSub = document.getElementById('metricResultSub');
      if (metricResultTitle) metricResultTitle.textContent = current.metrics.result.title;
      if (metricResultPrimary) metricResultPrimary.textContent = current.metrics.result.primary;
      if (metricResultSub) metricResultSub.textContent = current.metrics.result.sub;
    }

    renderTabs();
  }

  window.setTransformationCase = function(index) {
    currentCaseIndex = index;
    sliderPosition = 50;
    updateSlider(50);
    updateTransformationView();
  };

  if (prevCaseBtn) {
    prevCaseBtn.addEventListener('click', () => {
      currentCaseIndex = currentCaseIndex === 0 ? CASES_DATA.length - 1 : currentCaseIndex - 1;
      updateTransformationView();
    });
  }

  if (nextCaseBtn) {
    nextCaseBtn.addEventListener('click', () => {
      currentCaseIndex = currentCaseIndex === CASES_DATA.length - 1 ? 0 : currentCaseIndex + 1;
      updateTransformationView();
    });
  }

  const beforeTagEl = document.getElementById('sliderBeforeTag');
  const afterTagEl = document.getElementById('sliderAfterTag');

  // Pointer-Capture Drag Slider Implementation (100% Reliable in iframes and mobile)
  function updateSlider(percentage) {
    sliderPosition = Math.max(0, Math.min(100, percentage));
    if (clippedWrapperEl) {
      clippedWrapperEl.style.clipPath = `inset(0 0 0 ${sliderPosition}%)`;
    }
    if (dividerLineEl) {
      dividerLineEl.style.left = `${sliderPosition}%`;
    }
    if (beforeTagEl) {
      if (sliderPosition < 15) {
        beforeTagEl.style.opacity = '0';
        beforeTagEl.style.transform = 'scale(0.9) translateX(-8px)';
      } else {
        beforeTagEl.style.opacity = '1';
        beforeTagEl.style.transform = 'scale(1) translateX(0)';
      }
    }
    if (afterTagEl) {
      if (sliderPosition > 85) {
        afterTagEl.style.opacity = '0';
        afterTagEl.style.transform = 'scale(0.9) translateX(8px)';
      } else {
        afterTagEl.style.opacity = '1';
        afterTagEl.style.transform = 'scale(1) translateX(0)';
      }
    }
  }

  if (sliderEl) {
    let isDraggingSlider = false;

    function handleSliderMove(clientX) {
      const rect = sliderEl.getBoundingClientRect();
      const x = clientX - rect.left;
      const pct = (x / rect.width) * 100;
      updateSlider(pct);
    }

    sliderEl.addEventListener('pointerdown', (e) => {
      isDraggingSlider = true;
      sliderEl.setPointerCapture(e.pointerId);
      handleSliderMove(e.clientX);
    });

    sliderEl.addEventListener('pointermove', (e) => {
      if (!isDraggingSlider) return;
      handleSliderMove(e.clientX);
    });

    sliderEl.addEventListener('pointerup', (e) => {
      isDraggingSlider = false;
      try { sliderEl.releasePointerCapture(e.pointerId); } catch (_) {}
    });

    sliderEl.addEventListener('pointercancel', (e) => {
      isDraggingSlider = false;
    });

    sliderEl.addEventListener('click', (e) => {
      handleSliderMove(e.clientX);
    });
  }

  // Initial render
  updateTransformationView();
});

// 5. Global Modal Handlers
window.openDoctorProfileModal = function(doctorId) {
  const doc = DOCTORS_DATA.find(d => d.id === doctorId);
  if (!doc) return;

  const modal = document.getElementById('doctorModal');
  if (!modal) return;

  document.getElementById('modalDocImg').src = doc.image;
  document.getElementById('modalDocImg').onerror = function() { this.src = doc.fallbackImage; };
  document.getElementById('modalDocName').textContent = doc.name;
  document.getElementById('modalDocRole').textContent = doc.role;
  document.getElementById('modalDocHeadline').textContent = `Credentials & Bio — ${doc.name}`;
  document.getElementById('modalDocBio').textContent = doc.bio;
  document.getElementById('modalDocExp').textContent = doc.experience;
  document.getElementById('modalDocLang').textContent = doc.languages;
  document.getElementById('modalDocDegrees').textContent = doc.degrees;
  document.getElementById('modalDocPhone').textContent = doc.phone;

  const pillsContainer = document.getElementById('modalDocPills');
  if (pillsContainer) {
    pillsContainer.innerHTML = doc.specialties.map(spec => `
      <span class="px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-[12px] font-semibold border border-sky-100">
        ${spec}
      </span>
    `).join('');
  }

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

window.closeDoctorModal = function() {
  const modal = document.getElementById('doctorModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeDoctorModal();
  }
});

const closeBtn = document.getElementById('closeDoctorModalBtn');
if (closeBtn) {
  closeBtn.addEventListener('click', closeDoctorModal);
}

const docModalBackdrop = document.getElementById('doctorModal');
if (docModalBackdrop) {
  docModalBackdrop.addEventListener('click', (e) => {
    if (e.target === docModalBackdrop) {
      closeDoctorModal();
    }
  });
}
