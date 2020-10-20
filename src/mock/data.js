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
  subtitle: 'I create website for business. Innovation is my passion',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I graduated as a Bachelor of Commerce from Griffith University in Australia. Although I have experiences working as Accountant and Auditor, I've always found myself reading and learning about new technology in computer science. During the quarantine of Covid pandemic, I have took my first course in computer science , Havard CS50, on coursera and imediately got sucked into programming.",
  paragraphTwo:
    'I decided to take the web developing bootcamps at CoderSchool and made the career change as the more I learn, code, and debug , the more I see myself as a programmer. From zero code, I have made many projects that filled with codes and features. As my bootcamp end, I am advancing my web developing journey by actively looking for an opportunity to work as a Junior Frontend/ Full-stack Web Developer.',
  paragraphThree: 'JavaScript, NodeJs, ReactJs, MongoDb, ReactJs, C, Python.',
  resume: 'https://drive.google.com/file/d/1afdNIBBUfVGY2mLiVTayq6Z0bRRgkmfe/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Github Issues',
    info:
      'Web app retrieve Issues fron Github and allow user to highlight selection. The selection history is recorded whenever there is a select. Double select an item will toogle highlight.',
    info2: 'React, Redux-Thunk, Javascript',
    url: 'https://github-issue.netlify.app/',
    repo: 'https://github.com/lukehoang1905/Github-issue-QuadAi', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.jpg',
    title: 'Movie Ranking',
    info: 'A website for user to check new trailer, reviews and rating from the latest movies.',
    info2: 'The layout is similar to netflix official website',
    url: 'https://nchill.netlify.app/',
    repo: 'https://github.com/lukehoang1905/MovieR', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'E-learning Basketball',
    info:
      'The e-learning platform for basketball player. Courses for student to enroll in. Dashboard for Teacher to manage assigned classes. Admin dashboard for assignment, mannagement and other analytics reviews.',
    info2:
      'Second place project in the full-stack web development bootcamp at CoderSchool. React, Redux-Thunk, MongoDB, NodeJs, ExpressJs ',
    url: 'https://eball.netlify.app/',
    repo: 'https://github.com/Catalina-Final/TuanHoang-eLearning-FE', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Social Blogs',
    info:
      'A full-stack social blogging platform that allow user to write, read, edit and react on blogs from other users.',
    info2: 'React, Redux-Thunk, MongoDB, NodeJs, ExpressJs',
    url: 'https://blog-jeesun.netlify.app/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'lukehoang195@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/GrillardinT/',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/shokode',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/lukehoang195/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/lukehoang1905',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
