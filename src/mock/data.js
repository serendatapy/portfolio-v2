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
  subtitle: 'Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile-square.jpg',
  paragraphOne:
    'Seeing inefficiencies hurts me, and my mind can’t help but start working out how to optimize things. I started my web career as a WordPress developer and loving the never-ending challenges of the web, started moving into more challenging territory & getting into the nitty-gritty of coding.',
  paragraphTwo:
    'This requires all the things I love, optimizing, organizing, problem-solving, planning, having clear objectives and thinking out of the box.',

  paragraphThree:
    'When I’m not continuing my coding journey, I love doing woodwork, trekking & travelling, and playing tabletop games with my friends.',
  resume: 'https://www.visualcv.com/alejandro-r-valdivia/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'huntdora-mockup.png',
    title: 'Huntdora',
    info:
      'Searching for a job can be tough and demoralising. Huntdora is a job searching app which focuses on uplifting the job seeker through design and user experience, as well as through its utility.',
    info2: ` At the moment Huntdora has reached it's MVP stage and allows the user to search for real jobs, using a job API. The user can save the jobs they're interested in and apply to them.  `,
    url: 'https://huntdora.netlify.app/',
    repo: 'https://github.com/serendatapy/huntdora', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bid-local.jpg',
    title: 'Bid Local',
    info:
      'Time to declutter the house? Want to find a bargain which you can pick up locally? Register with Bid local, an app that allows you to put your second-hand items on auction, and find second hand at bargain prices.',
    info2:
      'Old-style live auctions and the highest bidder will pay you and pick the items up from your house!',
    url: 'https://github.com/Snugles/bid-local',
    repo: 'https://github.com/Snugles/bid-local', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'catcalls-mockup.png',
    title: 'Catcalls of Amsterdam',
    info:
      'An application to visualize, report and manage data on catcalling. Made for @CatcallsofAms',
    info2: '',
    url: 'https://github.com/serendatapy/catcall',
    repo: 'https://github.com/serendatapy/catcall', // if no repo, the button will not show up
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
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/serendatapy',
    },
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
