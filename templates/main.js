// =================JS for Mobile Menu=========================
// const hamburger = document.querySelector('.hamburger');
// const navMenu = document.querySelector('.nav-menu');
// const menuX = document.querySelector('#menu-x');
// const navLink = document.querySelectorAll('.nav-link');

// hamburger.addEventListener('click', () => {
//   hamburger.classList.toggle('active');
//   navMenu.classList.toggle('active');
//   menuX.classList.toggle('active');
// });

// navLink.forEach((n) => n.addEventListener('click', () => {
//   hamburger.classList.remove('active');
//   navMenu.classList.remove('active');
// }));

const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
  menu.style.display = 'flex';
  closeBtn.style.display = 'inline-block';
  menuBtn.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  closeBtn.style.display = 'none';
  menuBtn.style.display = 'inline-block';
})



// =======change navbar color on scroll========


window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle
  ('window-scroll', window.scrollY > 0)
})
// ========================JS for manupulating the DOM Elements=======================

const featuredSpeakers = [
  {
    profilePhoto: 'templates/images/oprah-photo.jpg',
    title: 'Oprah Winfrey',
    description: 'American talk show host',
    bio: 'She is best known for being the host of her own, the Oprah Winfrey Show.',
  },

  {
    profilePhoto: 'templates/images/Les-Brown.jpg',
    title: 'Les Brown',
    description: 'American politician',
    bio: 'He is best known for his motivational speaking and his political career.',
  },

  {
    profilePhoto: 'templates/images/deepak-chopra.jpg',
    title: 'Deepak Chopra',
    description: 'Indian-American author',
    bio: 'His books and videos have made him one of the best-known figures in alternative medicine.',
  },

  {
    profilePhoto: 'templates/images/eric-thomas.jpg',
    title: 'Eric Thomas',
    description: 'Talent Advocate',
    bio: 'He is a motivational speaker, author, and minister known for speaking engagements',
  },

  {
    profilePhoto: 'templates/images/Paula-white.jpg',
    title: 'Paula White',
    description: 'televangelist and Talent Adventist',
    bio: 'White is a chair of the evangelical advisory board',
  },

  {
    profilePhoto: 'templates/images/robin-sharma.png',
    title: 'Robin Sharma',
    description: 'Canadian writer',
    bio: 'He worked as a litigation lawyer until age 25, when he published MegaLiving',
  },
];

const speakersContainer = document.querySelector('.speaker-proceedings');
featuredSpeakers.forEach((speaker) => {
  const speakerDetails = document.createElement('div');
  speakerDetails.classList.add('speakerDetails');
  speakerDetails.innerHTML = `
  <div id="speakers-presenting" class="speaker-presentation">
      <div class="speaker-bg-img">
          <img src="${speaker.profilePhoto}" alt="presentations">
      </div>
      <div class="speaker-content">
          <h4 class="program-titles">${speaker.title}</h4>
          <p class="description">${speaker.description}</p>
          <div class="speaker-line"></div>
          <p class="bio">${speaker.bio}</p>
      </div>
  </div>
  `;
  speakersContainer.appendChild(speakerDetails);
});