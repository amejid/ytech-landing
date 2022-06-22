const yearEl = document.querySelector('.year');
const headerEl = document.querySelector('.header');
const clientsEl = document.querySelector('.clients');
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

const clientsInfo = [
  {
    link: 'https://www.netflix.com',
    imgUrl: ['../imgs/netflix.svg', 'Netflix logo'],
  },
  {
    link: 'https://www.google.com',
    imgUrl: ['../imgs/google.svg', 'Google logo'],
  },
  {
    link: 'https://www.cocacola.com',
    imgUrl: ['../imgs/cocacola.svg', 'CocaCola logo'],
  },
  {
    link: 'https://www.microsoft.com',
    imgUrl: ['../imgs/microsoft.svg', 'Microsoft logo'],
  },
  {
    link: 'https://www.paypal.com',
    imgUrl: ['../imgs/paypal.svg', 'PayPal logo'],
  },
];

document.addEventListener('DOMContentLoaded', () => {
  clientsInfo.forEach((client) => {
    let builder = '';
    builder = `
          <a href="${client.link}">
            <img class="client-logo" src="${client.imgUrl[0]}" alt="${client.imgUrl[1]}"/>
          </a>`;

    const clientEl = document.createElement('li');
    clientEl.innerHTML = builder;
    clientEl.classList.add('client');
    clientsEl.appendChild(clientEl);
  });
});
