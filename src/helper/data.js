import deepview from '@/assets/deepview.svg';
import split from '@/assets/logo.jpg';
import accounting from '@/assets/account.svg';
import boardash from '@/assets/board.svg';
import sky from '@/assets/sky.svg';
import demz from '@/assets/demz.svg';

let items = [
  {
    img: deepview,
    name: 'Deepview',
    link: 'https://deepview.com',
    summary:
      'A privacy-focused platform to monitor and archive business communications.DeepView delivers a unified platform for managing risk on digital platforms. One interactive secure portal allowing our ‘Buddies’ to enable employees to engage their networks securely and compliantly. Their internal soultions consists of Chart Guard, Image Guard, Corp Guard and Training Guard',
    tag: '#deepview',
    role: 'Full-Stack Engineer',
    stack: ['#vue', '#sails', '#node']
  },
  {
    img: 'https://www.bloverse.com/assets/brand/logo-primary.svg',
    name: 'Bloverse',
    link: 'https://bloverse.com/',
    role: 'Front-End Engineer',
    summary: `A content creation platform fostering a global community of engaged and insightful individuals. Together with our global community we are revolutionising the creation and consumption of content.`,
    stack: ['#vue', '#jquery']
  },
  {
    img: 'https://www.freyda.io/assets/svg/freyda-logo-header.svg',
    name: 'Freyda',
    link: 'https://Freyda.io/',
    role: 'Front-End Engineer',
    stack: ['#vue', '#chartJs'],
    summary: `Freyda is a content management solution powered by AI.
Eradicating manual data entry for financial services. Worked on the main website and internal solution dashboard`
  },
  {
    img: demz,
    name: 'Demz Analytics',
    link: 'https://demz-web.herokuapp.com/',
    role: 'Front-End Engineer',
    summary: `Tech incubator that seeks ideas,
fine tune them into a workable concept and
then delivers a viable product. The company focuses on Machine learning,Data Science, and is working on breaking the boundaries of fake news and also helping journalist and content creators echo their contents using said methods. Worked on the company website and their internal solution "Bloverse"`,
    stack: ['#vue']
  },

  {
    img: 'https://dlink-dash.netlify.com/img/logo.60dfd334.svg',
    name: 'Express Links',
    link: 'https://dlink-dash.netlify.com/',
    github: 'https://github.com/filigreti/dashboard-chart',
    role: 'Freelance',
    stack: ['#vue'],
    summary: `A mockup implementation`
  },
  {
    img: split,
    name: 'SplitsBill',
    link: 'http://splits-bill.herokuapp.com/access/login',
    github: 'https://github.com/filigreti/split-bills',
    role: 'Freelancer',
    stack: ['#vue'],
    summary: `Websites that allows you split bills accross multiple people when purchasing in general`
  },
  {
    img: sky,
    name: 'SkyMedia',
    link: 'https://mediasky.herokuapp.com',
    github: 'https://github.com/filigreti/skyMedia',
    role: 'Freelancer',
    stack: ['#vue'],
    summary: `A mockup implementation`
  },

  {
    img: accounting,
    name: 'Free Accounting',
    link: 'https://free-akounting.netlify.com/#/',
    github: 'https://github.com/filigreti/accountting-dashboard',
    role: 'Freelancer',
    stack: ['#vue'],
    summary: `A mockup implementation`
  },
  {
    img: boardash,
    name: 'Boardash',
    link: 'https://boardash.herokuapp.com/',
    github: 'https://github.com/filigreti/boardash',
    role: 'Freelancer',
    stack: ['#vue'],
    summary: `A mockup implementation`
  }
];

export default items;
