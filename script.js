document.addEventListener('DOMContentLoaded', function () {
  const dropdownButtons = document.querySelectorAll('.nav-btn');
  const menuToggle = document.querySelector('.menu-toggle');
  const menuClose = document.querySelector('.menu-close');

  dropdownButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      const parent = btn.closest('.has-dropdown');
      const isOpen = parent.classList.contains('open');
      // close any open
      document.querySelectorAll('.has-dropdown.open').forEach(el => {
        if (el !== parent) el.classList.remove('open');
        const b = el.querySelector('.nav-btn'); if(b) b.setAttribute('aria-expanded','false');
      });
      if (!isOpen) {
        parent.classList.add('open');
        btn.setAttribute('aria-expanded','true');
      } else {
        parent.classList.remove('open');
        btn.setAttribute('aria-expanded','false');
      }
      e.stopPropagation();
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function () {
    document.querySelectorAll('.has-dropdown.open').forEach(el => {
      el.classList.remove('open');
      const b = el.querySelector('.nav-btn'); if(b) b.setAttribute('aria-expanded','false');
    });
  });

  // Mobile menu toggle
  if(menuToggle){
    menuToggle.addEventListener('click', function(e){
      const open = document.body.classList.toggle('nav-open');
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      e.stopPropagation();
    });
  }
  if(menuClose){
    menuClose.addEventListener('click', function(e){
      document.body.classList.remove('nav-open');
      const mt = document.querySelector('.menu-toggle'); if(mt) mt.setAttribute('aria-expanded','false');
      e.stopPropagation();
    });
  }

  // Close mobile menu when clicking a nav link
  document.querySelectorAll('.main-nav a, .main-nav .nav-btn').forEach(el => {
    el.addEventListener('click', function(){
      if(document.body.classList.contains('nav-open')){
        document.body.classList.remove('nav-open');
        const mt = document.querySelector('.menu-toggle'); if(mt) mt.setAttribute('aria-expanded','false');
      }
    });
  });

  // Close on Escape
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
      document.querySelectorAll('.has-dropdown.open').forEach(el => {
        el.classList.remove('open');
        const b = el.querySelector('.nav-btn'); if(b) b.setAttribute('aria-expanded','false');
      });
    }
  });
});
