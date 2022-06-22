const teamEl = document.querySelector('.team');
const servicesEl = document.querySelector('.services');
const clientsEl = document.querySelector('.clients');
const yearEl = document.querySelector('.year');
const headerEl = document.querySelector('.header');
const btnOpenEl = document.querySelector('.icon-open');
const btnCloseEl = document.querySelector('.icon-close');

yearEl.textContent = new Date().getFullYear();

const teamInfo = [
  {
    name: 'Sarah Sinclair',
    position: 'Android Developer',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate ex esse
    sapiente. Distinctio quae adipisci ipsum sed nihil iste tenetur, minus laboriosam,
    quos animi eligendi eos, dignissimos perferendis nesciunt?`,
    imageUrl: ['../imgs/1.png', 'Photo of Sarah'],
  },
  {
    name: 'Naol Kidanu',
    position: 'Frontend Engineer',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate ex esse
    sapiente. Distinctio quae adipisci ipsum sed nihil iste tenetur, minus laboriosam,
    quos animi eligendi eos, dignissimos perferendis nesciunt?`,
    imageUrl: ['../imgs/2.png', 'Photo of Naol'],
  },
  {
    name: 'Fozia Abako',
    position: 'UI Designer',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate ex esse
    sapiente. Distinctio quae adipisci ipsum sed nihil iste tenetur, minus laboriosam,
    quos animi eligendi eos, dignissimos perferendis nesciunt?`,
    imageUrl: ['../imgs/3.png', 'Photo of Fozia'],
  },
  {
    name: 'Feben Negussie',
    position: 'Marketing',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate ex esse
    sapiente. Distinctio quae adipisci ipsum sed nihil iste tenetur, minus laboriosam,
    quos animi eligendi eos, dignissimos perferendis nesciunt?`,
    imageUrl: ['../imgs/4.png', 'Photo of Feben'],
  },
  {
    name: 'Mohammed Hussen',
    position: 'Backend Engineer',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate ex esse
    sapiente. Distinctio quae adipisci ipsum sed nihil iste tenetur, minus laboriosam,
    quos animi eligendi eos, dignissimos perferendis nesciunt?`,
    imageUrl: ['../imgs/5.png', 'Photo of Mohammed'],
  },
  {
    name: 'Abdu Nurye',
    position: 'Fullstack Engineer',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate ex esse
    sapiente. Distinctio quae adipisci ipsum sed nihil iste tenetur, minus laboriosam,
    quos animi eligendi eos, dignissimos perferendis nesciunt?`,
    imageUrl: ['../imgs/6.png', 'Photo of Abdu'],
  },
];

const servicesInfo = [
  {
    name: 'Mobile Apps',
    description: `Listen to the speakers from various countries about the messages of sharing and
    opening`,
    iconClasses: 'fa-solid fa-mobile fa-4x',
  },
  {
    name: 'Tech Support',
    description: `Listen to the speakers from various countries about the messages of sharing and
    opening`,
    iconClasses: 'fa-solid fa-headset fa-4x',
  },
  {
    name: 'UI Design',
    description: `Listen to the speakers from various countries about the messages of sharing and
    opening`,
    iconClasses: 'fa-solid fa-circle-notch fa-4x',
  },
  {
    name: 'E-Commerce',
    description: `Listen to the speakers from various countries about the messages of sharing and
    opening`,
    iconClasses: 'fa-solid fa-cart-shopping fa-4x',
  },
  {
    name: 'Websites',
    description: 'We are the leading website design and development company in Ethiopia',
    iconClasses: 'fa-solid fa-code fa-4x',
  },
];

const clientsInfo = [
  {
    link: 'https://www.netflix.com',
    imgUrl: ['imgs/netflix.svg', 'Netflix logo'],
  },
  {
    link: 'https://www.google.com',
    imgUrl: ['imgs/google.svg', 'Google logo'],
  },
  {
    link: 'https://www.cocacola.com',
    imgUrl: ['imgs/cocacola.svg', 'CocaCola logo'],
  },
  {
    link: 'https://www.microsoft.com',
    imgUrl: ['imgs/microsoft.svg', 'Microsoft logo'],
  },
  {
    link: 'https://www.paypal.com',
    imgUrl: ['imgs/paypal.svg', 'PayPal logo'],
  },
];

document.addEventListener('DOMContentLoaded', () => {
  teamInfo.forEach((member) => {
    let builder = '';
    builder = `
      <div class="member-img-container">
        <img class="member-img" src="${member.imageUrl[0]}" alt="${member.imageUrl[1]}" />
      </div>
      <div class="member-content">
        <h4 class="member-name">${member.name}</h4>
        <p class="member-job"><em>${member.position}</em></p>
        <div class="indicator"></div>
        <p class="member-desc">${member.description}</p>
      </div>`;

    const memberEl = document.createElement('div');
    memberEl.innerHTML = builder;
    memberEl.classList.add('member');
    teamEl.appendChild(memberEl);
  });

  servicesInfo.forEach((service) => {
    let builder = '';
    builder = `
      <i class="${service.iconClasses}"></i>
      <h3 class="service-title">${service.name}</h3>
      <p class="service-desc">${service.description}</p>`;

    const serviceEl = document.createElement('div');
    serviceEl.innerHTML = builder;
    serviceEl.classList.add('service');
    servicesEl.appendChild(serviceEl);
  });

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

btnOpenEl.addEventListener('click', () => {
  headerEl.classList.add('nav-open');
  document.body.style.overflow = 'hidden';
});

btnCloseEl.addEventListener('click', () => {
  headerEl.classList.remove('nav-open');
  document.body.style.overflow = 'scroll';
});
