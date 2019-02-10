const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Minsu Park',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'Minsu Park',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Minsu Park',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Minsu Park',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Minsu Park',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
