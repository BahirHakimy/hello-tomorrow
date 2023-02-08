const hamburger = document.getElementById('hamburger-button');
const closeButton = document.getElementById('close-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileNavs = document.querySelectorAll('.mobile-menu-item');
const speakersList = document.getElementById('speakers-list');

const speakers = [
  {
    name: 'Irina Borodina',
    image: './assets/images/IrinaBorodina.jpg',
    title: 'Professor, Novo Nordisk Foundation Center for Biosustainability',
    description:
      'Research interests: Metabolic Engineering, Synthetic Biology, Industrial Biotechnology',
  },
  {
    name: 'Oliver Rolland',
    image: './assets/images/OliverRolland.jpg',
    title: 'Managing Director chez Toulouse White Biotechnology (TWB)',
    description:
      'He has recieved the Presidential Green Chemistry Award 2014 for “Farnesane: a Breakthrough Renewable Hydrocarbon for Use as Diesel and Jet Fuel”',
  },
  {
    name: 'Wayne Koff',
    image: './assets/images/WayneKoff.jpg',
    title:
      'CEO, Human Immunome Project, Harvard T.H. Chan School of Public Health',
    description:
      'Wayne Koff, PhD, is the founding president and CEO of the Human Immunome Project. Prior to joining the Project, Koff served as chief scientific officer and senior vice president of research and development at the International AIDS Vaccine Initiative (IAVI)”',
  },
  {
    name: 'Angeleki Rigos',
    image: './assets/images/AngelekiRigos.jpg',
    title: 'Executive Director of the Tata Center for Technology and Design',
    description:
      'Dr. Angeliki Diane Rigos is a scientist, educator, and consultant interested in working across disciplines to promote sustainable solutions to global problems.”',
  },
  {
    name: 'Ann Mettler',
    image: './assets/images/AnnMettler.jpg',
    title: 'Vice President, Europe at Breakthrough Energy',
    description:
      'Ann Mettler is the head of the European Political Strategy Centre (EPSC), the in-house think tank of the European Commission.',
  },
  {
    name: 'Greg De Temmerman',
    image: './assets/images/GregDeTemmerman.jpg',
    title:
      'Managing Director at Zenon Research. Associate Researcher at Mines Paris Tech/IHEIE',
    description:
      'Leading scientist with a demonstrated history of working in an international and challenging project environment. Author of more than 230 scientific articles',
  },
];

const showMobileMenu = () => {
  mobileMenu.style.left = '0';
};

const hideMobileMenu = () => {
  mobileMenu.style.left = '-100%';
};

hamburger.onclick = (ev) => {
  ev.preventDefault();
  showMobileMenu();
};

closeButton.onclick = (ev) => {
  ev.preventDefault();
  hideMobileMenu();
};

mobileNavs.forEach((menu) => {
  menu.onclick = () => {
    hideMobileMenu();
  };
});

if (speakersList) {
  speakersList.innerHTML = speakers
    .map(
      (speaker) => `<li class="flex justify-center items-center my-4">
  <div class="relative flex w-2/5">
    <img
      class="absolute top-0 left-0 w-20 h-20"
      src="./assets/backgrounds/speaker.jpg"
      alt="pattern"
    />
    <img
      class="w-4/5 h-4/5 z-10 ml-4 mt-4"
      src="${speaker.image}"
      alt="speaker"
    />
  </div>
  <div class="w-3/5">
    <h3 class="text-secondary text-2xl font-semibold">
      ${speaker.name}
    </h3>
    <p class="text-sm text-primary italic">
     ${speaker.title}
    </p>
    <div class="w-6 h-[2px] bg-light my-2"></div>
    <p class="text-sm font-semibold">
      ${speaker.description}
    </p>
  </div>
</li>`
    )
    .join('');
}
