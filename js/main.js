const teamEl = document.querySelector('.team');

const teamInfo = [
  {
    name: 'Sarah Sinclair',
    position: 'Android Developer',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate ex esse
    sapiente. Distinctio quae adipisci ipsum sed nihil iste tenetur, minus laboriosam,
    quos animi eligendi eos, dignissimos perferendis nesciunt?`,
    imageUrl: '../imgs/1.png',
  },
  {
    name: 'Naol Kidanu',
    position: 'Frontend Engineer',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate ex esse
    sapiente. Distinctio quae adipisci ipsum sed nihil iste tenetur, minus laboriosam,
    quos animi eligendi eos, dignissimos perferendis nesciunt?`,
    imageUrl: '../imgs/2.png',
  },
  {
    name: 'Fozia Abako',
    position: 'UI Designer',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate ex esse
    sapiente. Distinctio quae adipisci ipsum sed nihil iste tenetur, minus laboriosam,
    quos animi eligendi eos, dignissimos perferendis nesciunt?`,
    imageUrl: '../imgs/3.png',
  },
  {
    name: 'Feben Negussie',
    position: 'Marketing',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate ex esse
    sapiente. Distinctio quae adipisci ipsum sed nihil iste tenetur, minus laboriosam,
    quos animi eligendi eos, dignissimos perferendis nesciunt?`,
    imageUrl: '../imgs/4.png',
  },
  {
    name: 'Mohammed Hussen',
    position: 'Backend Engineer',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate ex esse
    sapiente. Distinctio quae adipisci ipsum sed nihil iste tenetur, minus laboriosam,
    quos animi eligendi eos, dignissimos perferendis nesciunt?`,
    imageUrl: '../imgs/5.png',
  },
  {
    name: 'Abdu Nurye',
    position: 'Fullstack Engineer',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate ex esse
    sapiente. Distinctio quae adipisci ipsum sed nihil iste tenetur, minus laboriosam,
    quos animi eligendi eos, dignissimos perferendis nesciunt?`,
    imageUrl: '../imgs/6.png',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  teamInfo.forEach((member) => {
    let builder = '';
    builder = `
      <div class="member-img-container">
        <img class="member-img" src="${member.imageUrl}" alt="" />
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
