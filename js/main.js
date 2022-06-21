const teamEl = document.querySelector('.team');

const teamInfo = [
  {
    name: 'Yochai Benkler',
    position: 'Fullstack',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate ex esse
    sapiente. Distinctio quae adipisci ipsum sed nihil iste tenetur, minus laboriosam,
    quos animi eligendi eos, dignissimos perferendis nesciunt?`,
    imageUrl: '../imgs/1.png',
  },
  {
    name: 'Yochai Benkler',
    position: 'Fullstack Senior',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate ex esse
    sapiente. Distinctio quae adipisci ipsum sed nihil iste tenetur, minus laboriosam,
    quos animi eligendi eos, dignissimos perferendis nesciunt?`,
    imageUrl: '../imgs/1.png',
  },
  {
    name: 'Yochai Benkler',
    position: 'Fullstack',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate ex esse
    sapiente. Distinctio quae adipisci ipsum sed nihil iste tenetur, minus laboriosam,
    quos animi eligendi eos, dignissimos perferendis nesciunt?`,
    imageUrl: '../imgs/1.png',
  },
  {
    name: 'Yochai Benkler',
    position: 'Fullstack',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate ex esse
    sapiente. Distinctio quae adipisci ipsum sed nihil iste tenetur, minus laboriosam,
    quos animi eligendi eos, dignissimos perferendis nesciunt?`,
    imageUrl: '../imgs/1.png',
  },
  {
    name: 'Yochai Benkler',
    position: 'Fullstack',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate ex esse
    sapiente. Distinctio quae adipisci ipsum sed nihil iste tenetur, minus laboriosam,
    quos animi eligendi eos, dignissimos perferendis nesciunt?`,
    imageUrl: '../imgs/1.png',
  },
  {
    name: 'Yochai Benkler',
    position: 'Fullstack',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate ex esse
    sapiente. Distinctio quae adipisci ipsum sed nihil iste tenetur, minus laboriosam,
    quos animi eligendi eos, dignissimos perferendis nesciunt?`,
    imageUrl: '../imgs/1.png',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  teamInfo.forEach((member) => {
    let builder = '';
    builder = `
      <div class="member-img-container">
        <img class="member-img" src="imgs/1.png" alt="" />
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
});
