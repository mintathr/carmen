(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu ---
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    const setMenuIcon = (open) => {
      if (!menuIcon) return;
      menuIcon.innerHTML = open
        ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />'
        : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 8h16M4 16h16" />';
    };

    const openMenu = () => {
      if (!mobileMenu) return;
      mobileMenu.classList.remove('hidden');
      setTimeout(() => {
        mobileMenu.classList.add('opacity-100');
        document.body.style.overflow = 'hidden';
      }, 10);
      setMenuIcon(true);
    };

    const closeMenu = () => {
      if (!mobileMenu) return;
      mobileMenu.classList.remove('opacity-100');
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }, 300);
      setMenuIcon(false);
    };

    const toggleMenu = () => {
      if (!mobileMenu) return;
      if (mobileMenu.classList.contains('hidden')) openMenu();
      else closeMenu();
    };

    if (menuBtn) menuBtn.addEventListener('click', toggleMenu);
    if (mobileLinks && mobileLinks.length) {
      mobileLinks.forEach((link) => {
        link.addEventListener('click', () => {
          if (mobileMenu && !mobileMenu.classList.contains('hidden')) closeMenu();
        });
      });
    }

    // --- AOS init (safe) ---
    if (window.AOS && typeof AOS.init === 'function') {
      AOS.init({ duration: 1000, once: true, offset: 100 });
    }

    // --- Countdown ---
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const countdownContainer = document.querySelector('.grid-cols-4');
    const targetDate = new Date('May 15, 2026 19:00:00').getTime();
    let countdownInterval = null;

    function updateCountdown() {
      if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

      const now = Date.now();
      const distance = targetDate - now;

      if (distance < 0) {
        if (countdownInterval) clearInterval(countdownInterval);
        if (countdownContainer) {
          countdownContainer.innerHTML = "<p class='col-span-4 text-[#C5A059] font-serif italic text-xl'>Acara Sedang Berlangsung</p>";
        }
        daysEl.textContent = hoursEl.textContent = minutesEl.textContent = secondsEl.textContent = '00';
        return;
      }

      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      daysEl.textContent = String(d).padStart(2, '0');
      hoursEl.textContent = String(h).padStart(2, '0');
      minutesEl.textContent = String(m).padStart(2, '0');
      secondsEl.textContent = String(s).padStart(2, '0');
    }

    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);

    // --- Back to Top ---
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
      const toggleBackToTop = () => {
        if (window.scrollY > 500) {
          backToTopBtn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
          backToTopBtn.classList.add('opacity-100', 'translate-y-0');
        } else {
          backToTopBtn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
          backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
        }
      };

      window.addEventListener('scroll', toggleBackToTop);
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      toggleBackToTop();
    }

    // --- Lightbox ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.getElementById('close-lightbox');
    const galleryItems = document.querySelectorAll('.gallery-item, .grid img');

    galleryItems.forEach((item) => {
      item.addEventListener('click', () => {
        const src = item.getAttribute('src') || item.querySelector('img')?.src;
        const caption = item.getAttribute('data-caption') || item.alt || 'Malam Simfoni Surgawi';

        if (!lightbox || !lightboxImg) return;
        lightboxImg.src = src || '';
        if (lightboxCaption) lightboxCaption.innerText = caption;

        lightbox.classList.remove('opacity-0', 'pointer-events-none');
        document.body.style.overflow = 'hidden';
      });
    });

    function hideLightbox() {
      if (!lightbox) return;
      lightbox.classList.add('opacity-0', 'pointer-events-none');
      document.body.style.overflow = 'auto';
    }

    if (closeBtn) closeBtn.addEventListener('click', hideLightbox);
    if (lightbox) {
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) hideLightbox();
      });
    }
  });
})();
