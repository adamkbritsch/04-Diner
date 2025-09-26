// inject current year in footer
const myrightNow = new Date();
document.querySelector('#year').textContent = myrightNow.getFullYear();

const nav = document.querySelector('#navWrapper nav');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#primaryNav');

if (nav && navToggle && navMenu) {
  const closeNav = () => {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  };

  const toggleNav = () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  };

  navToggle.addEventListener('click', toggleNav);

  navMenu.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      closeNav();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      closeNav();
      navToggle.focus();
    }
  });

  const breakpoint = window.matchMedia('(min-width: 35rem)');
  const syncWithBreakpoint = (evt) => {
    if (evt.matches) {
      closeNav();
    }
  };
  syncWithBreakpoint(breakpoint);
  if (typeof breakpoint.addEventListener === 'function') {
    breakpoint.addEventListener('change', syncWithBreakpoint);
  } else if (typeof breakpoint.addListener === 'function') {
    breakpoint.addListener(syncWithBreakpoint);
  }
}
