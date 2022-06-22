const yearEl = document.querySelector('.year');
const headerEl = document.querySelector('.header');
const btnOpenEl = document.querySelector('.icon-open');
const btnCloseEl = document.querySelector('.icon-close');

yearEl.textContent = new Date().getFullYear();

btnOpenEl.addEventListener('click', () => {
  headerEl.classList.add('nav-open');
  document.body.style.overflow = 'hidden';
});

btnCloseEl.addEventListener('click', () => {
  headerEl.classList.remove('nav-open');
  document.body.style.overflow = 'scroll';
});
