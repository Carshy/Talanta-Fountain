// =================JS for Mobile Menu=========================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const menuX = document.querySelector('#menu-x');
const navLink = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  menuX.classList.toggle('active');
});

navLink.forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// ========================JS for manupulating the DOM Elements=======================

const featuredSpeakers = [
  {
    profilePhoto: 'templates/images/oprah-photo.jpg',
    title: 'Oprah Winfrey',
    description: 'Oprah Winfrey is an American talk show host, and billionaire philanthropist.',
    bio: 'She is best known for being the host of her own, the Oprah Winfrey Show.',
  },

  {
    profilePhoto: 'templates/images/Les-Brown.jpg',
    title: 'Les Brown',
    description: 'Les Brown is an American politician, motivational speaker, and a member of the Ohio HR.',
    bio: 'He is best known for his motivational speaking and his political career.',
  },

  {
    profilePhoto: 'templates/images/deepak-chopra.jpg',
    title: 'Deepak Chopra',
    description: 'Deepak Chopra is an Indian-American author and alternative medicine advocate',
    bio: 'His books and videos have made him one of the best-known figures in alternative medicine.',
  },

  {
    profilePhoto: 'templates/images/eric-thomas.jpg',
    title: 'Eric Thomas',
    description: 'Eric Thomas is the CEO of his consulting firm, and has worked with Fortune 500 companies',
    bio: 'He is a motivational speaker, author, and minister known for speaking engagements',
  },

  {
    profilePhoto: 'templates/images/Paula-white.jpg',
    title: 'Paula White',
    description: 'Paula is an American televangelist and a proponent of prosperity theology.',
    bio: 'White is a chair of the evangelical advisory board',
  },

  {
    profilePhoto: 'templates/images/robin-sharma.png',
    title: 'Robin Sharma',
    description: 'Robin Sharma is a Canadian writer and is best know for his writing prowess',
    bio: 'He worked as a litigation lawyer until age 25, when he published MegaLiving',
  },
];

const speakersContainer = document.querySelector('.speaker-proceedings');
featuredSpeakers.forEach((speaker) => {
  const speakerDetails = document.createElement('div');
  speakerDetails.classList.add('speakerDetails');
  speakerDetails.innerHTML = `
  <div id="speakers-presenting" class="speaker-Presentation">
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