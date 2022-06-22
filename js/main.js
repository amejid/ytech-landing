const teamEl = document.querySelector('.team');
const servicesEl = document.querySelector('.services');
const viewMoreEl = document.querySelector('.view-more');
const btnMoreEl = document.querySelector('.btn-more');

const teamInfo = [
  {
    name: 'Sarah Sinclair',
    position: 'Android Developer',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate ex esse
    sapiente. Distinctio quae adipisci ipsum sed nihil iste tenetur, minus laboriosam,
    quos animi eligendi eos, dignissimos perferendis nesciunt?`,
    imageUrl: ['imgs/1.png', 'Photo of Sarah'],
  },
  {
    name: 'Naol Kidanu',
    position: 'Frontend Engineer',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate ex esse
    sapiente. Distinctio quae adipisci ipsum sed nihil iste tenetur, minus laboriosam,
    quos animi eligendi eos, dignissimos perferendis nesciunt?`,
    imageUrl: ['imgs/2.png', 'Photo of Naol'],
  },
  {
    name: 'Fozia Abako',
    position: 'UI Designer',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate ex esse
    sapiente. Distinctio quae adipisci ipsum sed nihil iste tenetur, minus laboriosam,
    quos animi eligendi eos, dignissimos perferendis nesciunt?`,
    imageUrl: ['imgs/3.png', 'Photo of Fozia'],
  },
  {
    name: 'Feben Negussie',
    position: 'Marketing',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate ex esse
    sapiente. Distinctio quae adipisci ipsum sed nihil iste tenetur, minus laboriosam,
    quos animi eligendi eos, dignissimos perferendis nesciunt?`,
    imageUrl: ['imgs/4.png', 'Photo of Feben'],
  },
  {
    name: 'Mohammed Hussen',
    position: 'Backend Engineer',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate ex esse
    sapiente. Distinctio quae adipisci ipsum sed nihil iste tenetur, minus laboriosam,
    quos animi eligendi eos, dignissimos perferendis nesciunt?`,
    imageUrl: ['imgs/5.png', 'Photo of Mohammed'],
  },
  {
    name: 'Abdu Nurye',
    position: 'Fullstack Engineer',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate ex esse
    sapiente. Distinctio quae adipisci ipsum sed nihil iste tenetur, minus laboriosam,
    quos animi eligendi eos, dignissimos perferendis nesciunt?`,
    imageUrl: ['imgs/6.png', 'Photo of Abdu'],
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

document.addEventListener('DOMContentLoaded', () => {
  teamInfo.forEach((member, index) => {
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
    if (index > 1) {
      memberEl.classList.add('hidden');
    }
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
});

let hiddenEl;
document.addEventListener('DOMContentLoaded', () => {
  hiddenEl = document.querySelectorAll('.hidden');
});

btnMoreEl.addEventListener('click', () => {
  hiddenEl.forEach((element) => {
    element.classList.remove('hidden');
  });

  viewMoreEl.style.display = 'none';
});
