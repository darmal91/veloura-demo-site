/**
 * Veloura Demo Site — Main JavaScript
 * Handles sticky header (transparent → solid on scroll) and smooth navigation.
 * No frameworks; vanilla JS only.
 */

(function () {
  'use strict';

  // ---------- Sticky header: add solid background when user scrolls ----------
  const header = document.getElementById('site-header');
  if (!header) return;

  const scrollThreshold = 80; // pixels scrolled before header becomes solid

  function updateHeaderScroll() {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('is-solid');
    } else {
      header.classList.remove('is-solid');
    }
  }

  // Run on load (in case page is opened already scrolled)
  updateHeaderScroll();

  // Run whenever the user scrolls (throttled for performance)
  let ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        updateHeaderScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  // ---------- Smooth scroll for in-page links ----------
  // (HTML has scroll-behavior: smooth; this ensures anchor links work well)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---------- Contact form: demo submit (no backend) ----------
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      contactForm.reset();
      alert("Thanks! We'll be in touch.");
    });
  }
})();
