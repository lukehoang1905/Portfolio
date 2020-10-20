import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Luke Hoang',
  subtitle: "I'm a Full-stack Web Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Github Issues',
    info:
      'Web app retrieve Issues fron Github and allow user to highlight selection. The selection history is recorded whenever there is a select. Double select an item will toogle highlight.',
    info2: '',
    url: 'https://github-issue.netlify.app/',
    repo: 'https://github.com/lukehoang1905/Github-issue-QuadAi', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'E-learning Basketball',
    info: '2nd place project in the full-stack web development bootcamp at CoderSchool. ',
    info2:
      'An e-learning platform for basketball player. Courses for student to enroll in. Dashboard for Teacher to manage assigned classes. Admin dashboard for assignment, mannagement and other analytics reviews.',
    url: 'https://eball.netlify.app/',
    repo: 'https://github.com/Catalina-Final/TuanHoang-eLearning-FE', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Social Blogs',
    info:
      'A full-stack social blogging platform that allow user to write, read, edit and react on blogs from other users.',
    info2: '',
    url: 'https://blog-jeesun.netlify.app/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.jpg',
    title: 'Movie Ranking',
    info: 'A website for user to check new trailer, reviews and rating from the latest movies.',
    info2: 'The layout is similar to netflix official website',
    url: 'https://blog-jeesun.netlify.app/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
