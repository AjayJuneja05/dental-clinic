// Celestia Smiles - Client Interactivity

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // 2. Interactive Expanding Service Cards (Flex-based Accordion)
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

  function resetCards() {
    serviceCards.forEach(card => {
      card.classList.remove('is-active');
    });
  }

  // Desktop Hover events
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      setActiveCard(card);
    });

    // Touch / Click event (mobile, tablet & desktop click)
    card.addEventListener('click', (e) => {
      if (card.classList.contains('is-active')) {
        resetCards();
      } else {
        setActiveCard(card);
      }
    });
  });

  // When mouse leaves the entire accordion container, reset to equal default state
  if (accordionContainer) {
    accordionContainer.addEventListener('mouseleave', () => {
      resetCards();
    });
  }

  // Ensure default state on initial load
  resetCards();

  // 3. Specialists Carousel Navigation
  const specialistsTrack = document.getElementById('specialistsTrack');
  const prevSpecialistBtn = document.getElementById('prevSpecialist');
  const nextSpecialistBtn = document.getElementById('nextSpecialist');
  const specialistCounter = document.getElementById('specialistCounter');

  if (specialistsTrack && prevSpecialistBtn && nextSpecialistBtn && specialistCounter) {
    const totalCount = 17;
    let currentIndex = 1;

    function updateCounter() {
      const scrollLeft = specialistsTrack.scrollLeft;
      const cardWidth = specialistsTrack.querySelector('div')?.offsetWidth || 275;
      const gap = 20;
      const index = Math.min(totalCount, Math.max(1, Math.round(scrollLeft / (cardWidth + gap)) + 1));
      currentIndex = index;
      specialistCounter.textContent = `${String(currentIndex).padStart(2, '0')}/${totalCount}`;
    }

    nextSpecialistBtn.addEventListener('click', () => {
      const cardWidth = specialistsTrack.querySelector('div')?.offsetWidth || 275;
      const gap = 20;
      specialistsTrack.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
    });

    prevSpecialistBtn.addEventListener('click', () => {
      const cardWidth = specialistsTrack.querySelector('div')?.offsetWidth || 275;
      const gap = 20;
      specialistsTrack.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
    });

    specialistsTrack.addEventListener('scroll', () => {
      updateCounter();
    });
  }
});
