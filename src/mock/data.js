import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Alejandro Valdivia| Full Stack Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: `Let's make something great`, // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm ",
  name: 'Alejandro',
  subtitle: 'a Full stack dev, polyglot globe trotter and Father.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile-square.jpg',
  paragraphOne: `Of course you've heard - "With great power comes great responsibility" - but have you ever thought that the other way round is also true? - "With great responsability comes great power" - A chance to make a difference. That is the possibility that's there for the taking!`,
  paragraphTwo:
    'I was born in Miami, grew up in South America and England and picked up a wonderful extended family in Italy. My passion for computing started when I was a teenager & then studied AI at university',
  paragraphThree:
    'When I’m not continuing my coding journey, I love doing woodwork with my wife, trekking & travelling, cooking italian & playing tabletop games with my friends.',
  resume: 'https://www.linkedin.com/in/alejandro-r-valdivia/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'catcalls-mockup.png',
    title: 'Catcalls of Amsterdam',
    info:
      'In over 150 cities worldwide, young girls are fighting street harassment by literally chalking catcalls on the sidewalk to raise awareness. Catcalls of Amsterdam is a web application to visualize, report and manage data on catcalling. Made for @CatcallsofAms, a local Instagram-based initiative part of a global "chalk back" movement.',
    info2:
      'Working in a team of 2, my job in this project consists in Adding features with React & Material UI, making website responsive, refactoring code and making it more maintainable and robust, managing deployment and implementing tests with Jest',
    url: 'https://catcallsofams.netlify.app/catcalls',
    repo: 'https://github.com/serendatapy/catcall', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'huntdora-mockup.png',
    title: 'Huntdora',
    info:
      'Job search bringing you down? Huntdora is a job searching app which focuses on uplifting the job seeker through design colours and user experience.',
    info2: `Solo Project built with ReactJS - Typescript - Material UI - Progressive web app ( PWA ) - Express.js - MongoDB - Auth0 JWT - Node.js`,
    url: 'https://huntdora.netlify.app/',
    repo: 'https://github.com/serendatapy/huntdora', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bid-local.jpg',
    title: 'Bid Local',
    info:
      'Time to declutter the house? Want to find a bargain which you can pick up locally? Register with Bid local, an app that allows you to put your second-hand items on auction, and find second hand items at bargain prices.',
    info2:
      'Collaborated in a Team of 5 to develop an MVP proof of concept, I designed & built the backend with Sequelize, GraphQL Apollo Server, PostgreSQL, WebSockets, Node.js',
    url: 'https://www.youtube.com/watch?v=LzgYNAu8jeA&feature=youtu.be',
    repo: 'https://github.com/Snugles/bid-local', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'unplugged-retreat-r.png',
    title: 'Unplugged Retreat',
    info:
      'Tired of working in the Office? Unplugged retreat gives an opportunity for teams to get away and recharge.',
    info2: 'Responsive Website made from Photoshop comp, using plain HTML and CSS Flexbox',
    url: 'https://serendatapy.github.io/unplugged-retreat/index.html',
    repo: 'https://github.com/serendatapy/unplugged-retreat', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'arvaldivia@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: 'https://twitter.com/serendatapy',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/alejandro-r-valdivia/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/serendatapy',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
