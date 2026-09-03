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
    category: 'Aesthetic Dentistry',
    cardImage: 'public/assets/service-aesthetic.webp',
    headline: 'Aesthetic Dentistry',
    story: 'We enhance the natural beauty of your smile with personalized treatments designed to improve the shape, colour, proportion, and overall appearance of your teeth while keeping your results natural-looking.',
    whatWeDid: [
      'Digital smile design and treatment planning',
      'Minimal tooth preparation to preserve natural enamel',
      'Custom-designed porcelain veneers',
      'Smile proportions and tooth shape refined',
      'Final shade and appearance carefully matched',
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
    headline: 'Orthodontics',
    story: 'Orthodontics focuses on straightening teeth and correcting bite alignment for a healthier, more balanced, and confident smile. Treatment can be tailored using braces or clear aligners.',
    whatWeDid: [
      'Comprehensive orthodontic assessment',
      'Digital scans and treatment planning',
      'Teeth alignment and bite correction',
      'Custom braces or clear aligner treatment',
      'Regular progress checks and adjustments',
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
    headline: 'Implantology',
    story: 'Dental implants replace missing teeth with strong, natural-looking restorations designed to restore your smile, chewing function, and confidence.',
    whatWeDid: [
      'Detailed implant assessment and planning',
      'Digital imaging and implant positioning',
      'Dental implant placement',
      'Custom implant abutment and crown',
      'Bite, function, and final smile refinement',
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
    category: 'Teeth Whitening',
    cardImage: 'public/assets/service-whitening.webp',
    headline: 'Teeth Whitening',
    story: 'Professional teeth whitening safely reduces stains and discolouration, helping create a brighter, fresher-looking smile while maintaining a natural appearance.',
    whatWeDid: [
      'Professional assessment of tooth shade',
      'In-clinic whitening treatment',
      'Targeted stain and discolouration removal',
      'Enamel-safe whitening protocol',
      'Aftercare and maintenance guidance',
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
    category: 'Surgical Dentistry',
    cardImage: 'public/assets/service-surgical.webp',
    headline: 'Surgical Dentistry',
    story: 'Surgical dentistry provides precise treatment for complex dental problems that require surgical care, with a focus on comfort, safety, and long-term oral health.',
    whatWeDid: [
      'Comprehensive surgical assessment',
      'Digital imaging and treatment planning',
      'Tooth and wisdom-tooth removal when required',
      'Precise surgical procedures',
      'Post-treatment healing and follow-up care',
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

// 5. Book Appointment Form Handling with Custom Date & Time Modals
document.addEventListener('DOMContentLoaded', () => {
  const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getAvailableTimesForDateStr = (dateStr) => {
    if (!dateStr) return [];
    const parts = dateStr.split('-');
    if (parts.length !== 3) return [];
    const [y, m, d] = parts.map(Number);
    const dateObj = new Date(y, m - 1, d);
    const dayOfWeek = dateObj.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    if (dayOfWeek === 0) {
      return []; // Sunday: Closed
    }

    let startH = 9;  // Mon-Thu: 9:00 AM
    const endH = 22; // 10:00 PM

    if (dayOfWeek === 5 || dayOfWeek === 6) {
      startH = 10; // Fri-Sat: 10:00 AM
    }

    const slots = [];
    for (let h = startH; h < endH; h++) {
      for (let min = 0; min < 60; min += 30) {
        const period = h >= 12 ? 'PM' : 'AM';
        const displayH = h % 12 === 0 ? 12 : h % 12;
        const displayMin = min === 0 ? '00' : '30';
        slots.push(`${displayH.toString().padStart(2, '0')}:${displayMin} ${period}`);
      }
    }
    return slots;
  };

  const today = new Date();
  const todayStr = today.toISOString().split('T')[0];

  let selectedDate = todayStr;
  let selectedTime = '10:30 AM';
  let viewYear = today.getFullYear();
  let viewMonth = today.getMonth();

  // DOM Elements
  const dateTriggerBtn = document.getElementById('dateTriggerBtn');
  const dateModal = document.getElementById('dateModal');
  const dateChevron = document.getElementById('dateChevron');
  const selectedDateText = document.getElementById('selectedDateText');
  const calendarMonthYear = document.getElementById('calendarMonthYear');
  const calendarDaysGrid = document.getElementById('calendarDaysGrid');
  const prevMonthBtn = document.getElementById('prevMonthBtn');
  const nextMonthBtn = document.getElementById('nextMonthBtn');
  const clearDateBtn = document.getElementById('clearDateBtn');
  const calendarSundayNotice = document.getElementById('calendarSundayNotice');

  const timeTriggerBtn = document.getElementById('timeTriggerBtn');
  const timeModal = document.getElementById('timeModal');
  const timeChevron = document.getElementById('timeChevron');
  const selectedTimeText = document.getElementById('selectedTimeText');
  const timeModalHeaderTitle = document.getElementById('timeModalHeaderTitle');
  const timeSlotsList = document.getElementById('timeSlotsList');
  const closeTimeModalBtn = document.getElementById('closeTimeModalBtn');

  const bookDateHidden = document.getElementById('bookDate');
  const bookTimeHidden = document.getElementById('bookTime');

  const formatDisplayDate = (dateStr) => {
    if (!dateStr) return 'Select Date';
    const parts = dateStr.split('-').map(Number);
    const d = new Date(parts[0], parts[1] - 1, parts[2]);
    return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
  };

  const updateDisplayValues = () => {
    if (selectedDateText) selectedDateText.textContent = formatDisplayDate(selectedDate);
    if (bookDateHidden) bookDateHidden.value = selectedDate;

    const isSunday = selectedDate ? new Date(selectedDate.split('-')[0], Number(selectedDate.split('-')[1]) - 1, selectedDate.split('-')[2]).getDay() === 0 : false;

    if (isSunday) {
      if (selectedTimeText) selectedTimeText.innerHTML = '<span class="text-red-500 font-semibold">Closed on Sunday</span>';
      if (timeModalHeaderTitle) timeModalHeaderTitle.textContent = 'Closed';
      if (calendarSundayNotice) calendarSundayNotice.textContent = '⚠️ Closed on Sundays';
    } else {
      if (selectedTimeText) selectedTimeText.textContent = selectedTime || 'Select Time';
      if (timeModalHeaderTitle) timeModalHeaderTitle.textContent = selectedTime || 'Select Time';
      if (calendarSundayNotice) calendarSundayNotice.textContent = 'Mon–Sat available';
    }
    if (bookTimeHidden) bookTimeHidden.value = isSunday ? '' : selectedTime;
  };

  const renderCalendar = () => {
    if (!calendarMonthYear || !calendarDaysGrid) return;
    calendarMonthYear.textContent = `${MONTH_NAMES[viewMonth]} ${viewYear}`;

    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay();

    let gridHtml = '';

    for (let i = 0; i < firstDayOfWeek; i++) {
      gridHtml += '<div class="w-8 h-8"></div>';
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${viewYear}-${String(viewMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const cellDate = new Date(viewYear, viewMonth, day);
      const isPast = cellDate < new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const isSelected = selectedDate === dateStr;
      const isSunday = cellDate.getDay() === 0;

      let classNames = 'w-8 h-8 sm:w-8.5 sm:h-8.5 mx-auto rounded-full text-[13px] font-semibold flex items-center justify-center transition-all cursor-pointer';

      if (isSelected) {
        classNames += ' bg-[#0066cc] text-white font-bold shadow-md scale-105';
      } else if (isPast) {
        classNames += ' text-slate-300 cursor-not-allowed pointer-events-none';
      } else if (isSunday) {
        classNames += ' text-red-500 hover:bg-red-50';
      } else {
        classNames += ' text-slate-700 hover:bg-slate-100';
      }

      gridHtml += `<button type="button" data-cal-date="${dateStr}" class="${classNames}">${day}</button>`;
    }

    calendarDaysGrid.innerHTML = gridHtml;

    calendarDaysGrid.querySelectorAll('button[data-cal-date]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const dateVal = btn.getAttribute('data-cal-date');
        selectDate(dateVal);
      });
    });
  };

  const renderTimeSlots = () => {
    if (!timeSlotsList) return;
    const slots = getAvailableTimesForDateStr(selectedDate);
    const isSunday = selectedDate ? new Date(selectedDate.split('-')[0], Number(selectedDate.split('-')[1]) - 1, selectedDate.split('-')[2]).getDay() === 0 : false;

    if (isSunday) {
      timeSlotsList.innerHTML = `
        <div class="py-6 px-3 text-center text-[12.5px] text-red-500 bg-red-50/70 rounded-xl font-medium leading-relaxed">
          Dental clinic is closed on Sundays.<br />
          <span class="text-slate-500 text-[11.5px] mt-1 block">Please select Monday to Saturday in the calendar.</span>
        </div>
      `;
      return;
    }

    if (slots.length === 0) {
      timeSlotsList.innerHTML = '<div class="py-4 text-center text-[12.5px] text-slate-500">No available slots for this date.</div>';
      return;
    }

    timeSlotsList.innerHTML = slots.map(slot => {
      const isSelected = selectedTime === slot;
      const classNames = isSelected
        ? 'w-full text-left py-2 px-3 rounded-lg text-[13px] bg-slate-100 text-[#07234b] font-bold shadow-xs cursor-pointer'
        : 'w-full text-left py-2 px-3 rounded-lg text-[13px] text-slate-600 hover:bg-slate-50 hover:text-[#07234b] font-medium cursor-pointer';

      return `<button type="button" data-slot-val="${slot}" class="${classNames}">${slot}</button>`;
    }).join('');

    timeSlotsList.querySelectorAll('button[data-slot-val]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        selectTime(btn.getAttribute('data-slot-val'));
      });
    });
  };

  const selectDate = (dateStr) => {
    selectedDate = dateStr;
    const slots = getAvailableTimesForDateStr(dateStr);
    const parts = dateStr.split('-').map(Number);
    const isSun = new Date(parts[0], parts[1] - 1, parts[2]).getDay() === 0;

    if (isSun) {
      selectedTime = '';
    } else if (!slots.includes(selectedTime)) {
      selectedTime = slots[0] || '10:00 AM';
    }

    updateDisplayValues();
    renderCalendar();
    renderTimeSlots();
    closeDateModal();
  };

  const selectTime = (slot) => {
    selectedTime = slot;
    updateDisplayValues();
    renderTimeSlots();
    closeTimeModal();
  };

  const openDateModal = () => {
    closeTimeModal();
    if (dateModal) dateModal.classList.remove('hidden');
    if (dateChevron) dateChevron.classList.add('rotate-180', 'text-[#0066cc]');
    if (dateTriggerBtn) dateTriggerBtn.classList.add('bg-white', 'border-[#0066cc]', 'ring-2', 'ring-sky-100');
    renderCalendar();
  };

  const closeDateModal = () => {
    if (dateModal) dateModal.classList.add('hidden');
    if (dateChevron) dateChevron.classList.remove('rotate-180', 'text-[#0066cc]');
    if (dateTriggerBtn) dateTriggerBtn.classList.remove('bg-white', 'border-[#0066cc]', 'ring-2', 'ring-sky-100');
  };

  const openTimeModal = () => {
    closeDateModal();
    if (timeModal) timeModal.classList.remove('hidden');
    if (timeChevron) timeChevron.classList.add('rotate-180', 'text-[#0066cc]');
    if (timeTriggerBtn) timeTriggerBtn.classList.add('bg-white', 'border-[#0066cc]', 'ring-2', 'ring-sky-100');
    renderTimeSlots();
  };

  const closeTimeModal = () => {
    if (timeModal) timeModal.classList.add('hidden');
    if (timeChevron) timeChevron.classList.remove('rotate-180', 'text-[#0066cc]');
    if (timeTriggerBtn) timeTriggerBtn.classList.remove('bg-white', 'border-[#0066cc]', 'ring-2', 'ring-sky-100');
  };

  if (dateTriggerBtn) {
    dateTriggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (dateModal && !dateModal.classList.contains('hidden')) {
        closeDateModal();
      } else {
        openDateModal();
      }
    });
  }

  if (timeTriggerBtn) {
    timeTriggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (timeModal && !timeModal.classList.contains('hidden')) {
        closeTimeModal();
      } else {
        openTimeModal();
      }
    });
  }

  if (prevMonthBtn) {
    prevMonthBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (viewMonth === 0) {
        viewMonth = 11;
        viewYear -= 1;
      } else {
        viewMonth -= 1;
      }
      renderCalendar();
    });
  }

  if (nextMonthBtn) {
    nextMonthBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (viewMonth === 11) {
        viewMonth = 0;
        viewYear += 1;
      } else {
        viewMonth += 1;
      }
      renderCalendar();
    });
  }

  if (clearDateBtn) {
    clearDateBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      selectedDate = '';
      selectedTime = '';
      updateDisplayValues();
      renderCalendar();
      renderTimeSlots();
    });
  }

  if (closeTimeModalBtn) {
    closeTimeModalBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeTimeModal();
    });
  }

  // Click outside to close modals
  document.addEventListener('click', (e) => {
    if (dateModal && !dateModal.contains(e.target) && !dateTriggerBtn.contains(e.target)) {
      closeDateModal();
    }
    if (timeModal && !timeModal.contains(e.target) && !timeTriggerBtn.contains(e.target)) {
      closeTimeModal();
    }
  });

  // Initial renders
  updateDisplayValues();
  renderCalendar();
  renderTimeSlots();

  // Form submission
  const appointmentForm = document.getElementById('appointmentForm');
  const bookingSuccessBox = document.getElementById('bookingSuccessBox');
  const bookingSuccessName = document.getElementById('bookingSuccessName');
  const bookingResetBtn = document.getElementById('bookingResetBtn');
  const bookSubmitBtn = document.getElementById('bookSubmitBtn');

  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const isSunday = selectedDate ? new Date(selectedDate.split('-')[0], Number(selectedDate.split('-')[1]) - 1, selectedDate.split('-')[2]).getDay() === 0 : false;
      if (isSunday) {
        alert('The clinic is closed on Sundays. Please select a consultation date from Monday to Saturday.');
        return;
      }

      const patientName = document.getElementById('bookName')?.value || 'Patient';
      
      if (bookSubmitBtn) {
        bookSubmitBtn.disabled = true;
        bookSubmitBtn.innerHTML = `
          <span class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          <span>Securing Your Reservation...</span>
        `;
      }

      setTimeout(() => {
        if (bookingSuccessName) bookingSuccessName.textContent = `Thank you, ${patientName}!`;
        appointmentForm.classList.add('hidden');
        if (bookingSuccessBox) bookingSuccessBox.classList.remove('hidden');
      }, 600);
    });
  }

  if (bookingResetBtn) {
    bookingResetBtn.addEventListener('click', () => {
      if (appointmentForm) {
        appointmentForm.reset();
        appointmentForm.classList.remove('hidden');
      }
      selectedDate = todayStr;
      selectedTime = '10:30 AM';
      updateDisplayValues();
      renderCalendar();
      renderTimeSlots();

      if (bookSubmitBtn) {
        bookSubmitBtn.disabled = false;
        bookSubmitBtn.innerHTML = `
          <span>Confirm Appointment Request</span>
          <span>➔</span>
        `;
      }
      if (bookingSuccessBox) bookingSuccessBox.classList.add('hidden');
    });
  }

  // 6. Advanced Technology Cards Expand/Collapse Handling
  const techCards = document.querySelectorAll('.tech-card');
  techCards.forEach((card) => {
    card.addEventListener('click', () => {
      const isAlreadyActive = card.classList.contains('active');

      // Collapse all
      techCards.forEach((c) => {
        c.classList.remove('active', 'border-[#0066cc]', 'bg-[#f8faff]', 'shadow-[0_12px_32px_-8px_rgba(0,102,204,0.18)]', 'ring-2', 'ring-blue-100/80');
        c.classList.add('border-slate-200/90', 'bg-white');

        const title = c.querySelector('.tech-title');
        if (title) {
          title.classList.remove('text-[#0066cc]');
          title.classList.add('text-[#07234b]');
        }

        const iconBox = c.querySelector('.tech-icon-box');
        if (iconBox) {
          iconBox.classList.remove('bg-[#0066cc]', 'text-white', 'shadow-md', 'shadow-blue-500/25');
          iconBox.classList.add('bg-blue-50', 'text-[#0066cc]');
        }

        const arrowBtn = c.querySelector('.tech-arrow-btn');
        if (arrowBtn) {
          arrowBtn.classList.remove('bg-[#0066cc]', 'text-white', 'rotate-90');
          arrowBtn.classList.add('bg-slate-100', 'text-slate-500');
        }

        const body = c.querySelector('.tech-expand-body');
        if (body) {
          body.classList.remove('max-h-60', 'pb-5', 'opacity-100');
          body.classList.add('max-h-0', 'pb-0', 'opacity-0');
        }
      });

      // If clicked card was not active, expand it
      if (!isAlreadyActive) {
        card.classList.add('active', 'border-[#0066cc]', 'bg-[#f8faff]', 'shadow-[0_12px_32px_-8px_rgba(0,102,204,0.18)]', 'ring-2', 'ring-blue-100/80');
        card.classList.remove('border-slate-200/90', 'bg-white');

        const title = card.querySelector('.tech-title');
        if (title) {
          title.classList.add('text-[#0066cc]');
          title.classList.remove('text-[#07234b]');
        }

        const iconBox = card.querySelector('.tech-icon-box');
        if (iconBox) {
          iconBox.classList.add('bg-[#0066cc]', 'text-white', 'shadow-md', 'shadow-blue-500/25');
          iconBox.classList.remove('bg-blue-50', 'text-[#0066cc]');
        }

        const arrowBtn = card.querySelector('.tech-arrow-btn');
        if (arrowBtn) {
          arrowBtn.classList.add('bg-[#0066cc]', 'text-white', 'rotate-90');
          arrowBtn.classList.remove('bg-slate-100', 'text-slate-500');
        }

        const body = card.querySelector('.tech-expand-body');
        if (body) {
          body.classList.add('max-h-60', 'pb-5', 'opacity-100');
          body.classList.remove('max-h-0', 'pb-0', 'opacity-0');
        }
      }
    });
  });
});

const docModalBackdrop = document.getElementById('doctorModal');
if (docModalBackdrop) {
  docModalBackdrop.addEventListener('click', (e) => {
    if (e.target === docModalBackdrop) {
      closeDoctorModal();
    }
  });
}

// ---------------------------------------------------------------------------
// Global Smooth Scrolling via Lenis (Uniform Speed & Inertia Across All Sections)
// ---------------------------------------------------------------------------
if (typeof Lenis !== 'undefined') {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.95,
    touchMultiplier: 1.5,
  });

  function lenisRaf(time) {
    lenis.raf(time);
    requestAnimationFrame(lenisRaf);
  }
  requestAnimationFrame(lenisRaf);
  window.__lenis = lenis;

  document.querySelectorAll('a[href*="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href) return;
      const hashIndex = href.indexOf('#');
      if (hashIndex === -1) return;
      const hash = href.slice(hashIndex);
      if (hash === '#' || hash === '') return;

      const targetEl = document.querySelector(hash);
      if (targetEl) {
        e.preventDefault();
        lenis.scrollTo(targetEl, {
          offset: -40,
          duration: 1.2,
        });
      }
    });
  });
}
