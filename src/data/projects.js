// All portfolio content lives here. Edit this file, not the template.
const shots = import.meta.glob('@/assets/portfolio/*.png', { eager: true, import: 'default' })
const shot = (name) => Object.entries(shots).find(([p]) => p.endsWith('/' + name))?.[1] || ''

export const profile = {
  name: 'Ademide',
  initials: ' Ademide A.I',
  location: '',
  email: 'ademideadekanmi@gmail.com',
  whatsapp: 'https://wa.link/ukd9vb',
  linkedin: 'www.linkedin.com/in/ademide-adekanmi-1b8b70295',
  githubUrl: '', // leave empty: the GitHub link stays hidden until you fill this in
  about:
  'I’m a Computer Engineering student in Nigeria and a freelance frontend developer. I build clean, responsive Vue.js interfaces from Figma designs and take them all the way to a live URL, using AI tools to work faster and reviewing everything that ships.',
}

export const projects = [
  {
    published: true,
    title: 'Wrangle',
    kind: 'Help desk SaaS landing page',
    blurb: 'My Vue implementation of a community Figma design, built to stay fluid on any screen.',
    image: shot('wrangle.png'),
    live: 'https://ademidev.netlify.app/wranglepage',
    githubUrl: '',
    tags: ['Vue 3', 'Vue Router', 'CSS', 'Figma', 'GitHub', 'Netlify'],
    highlights: [
      'Fluid layout',
      'Responsive navigation',
      'Brand-purple hover states and a grayscale “trusted by” logo row',
    ],
    credit: {
      title: 'Wrangle',
      creator: 'Babu Kazi',
      creatorUrl: '',
      fileUrl:
        'https://www.figma.com/design/g2mDuqotF8QIzfPOgX2HeJ/Help-Desk-SaaS-Landing-Page-UI-Kit--Community-?node-id=4007-3&p=f&t=E9KWcKn2osTAPctE-0',
    },
  },
  {
    published: true,
    title: 'Pluck',
    kind: 'SaaS landing page',
    blurb: 'My Vue implementation of a community Figma landing page kit. Enhancing the navigation and interactiveness.',
    image: shot('pluck.png'),
    live: 'https://ademidev.netlify.app/pluckpage',
    githubUrl: '',
    tags: ['Vue 3', 'Vue Router', 'CSS', 'Figma', 'GitHub', 'Netlify'],
    highlights: [
      'Responsiveness',
      'Logo row interactivity',
      'A timed visual of the reviews'],
    credit: {
      title: 'Pluck',
      creator: 'Krisna Wiyana',
      creatorUrl: 'https://www.figma.com/files/team/1656982589762435161/resources/community/@krisnawiyana',
      fileUrl:
        'https://www.figma.com/design/0LdtwsK0FhrivBbHt11MAW/Pluck---Saas-Landing-Page-Kit-%7C-Beta-Version--Community-?node-id=0-1&p=f&t=ULXHQDic0HU5xpD3-0',
    },
  },
  // Template for a future project: copy it, fill it in, set published: true.
  {
    published: false,
    title: '[PROJECT NAME]',
    kind: '[WHAT IT IS]',
    blurb: '[ONE OR TWO SENTENCES]',
    image: shot('project-name.png'),
    live: '',
    githubUrl: '',
    tags: [],
    highlights: [],
    credit: null, // set to the same shape as above if the design isn't yours
  },
]

export const differences = [
  { t: 'Design-faithful', d: 'I rebuild Figma designs closely and keep them fluid across screen sizes.' },
  { t: 'Design to live URL', d: 'I take projects from Figma to GitHub to Netlify, including the deployment debugging.' },
  {
  t: 'AI-assisted, human-reviewed',
  d: 'I use AI tools to move faster on planning, debugging and first drafts. I review and test everything before it ships, and I can explain why each fix works.',
  },
  {
    t: 'Engineer’s mindset',
    d: 'Computer Engineering at FUTA plus networking exposure (CCNA in progress, internship experience with Cisco), so I understand how what I build gets delivered and secured.',
  },
]

export const steps = [
  { t: 'Figma', d: 'Break the design into sections, spacing and reusable pieces.' },
  { t: 'Vue', d: 'Build a fluid, responsive layout with clean components.' },
  { t: 'Netlify', d: 'Push to GitHub, auto-deploy, and fix routing or dependency issues.' },
]

export const services = [
  { t: 'Figma-to-Vue landing pages', d: 'A close, pixel-accurate build of your design with clean, reusable components.' },
  { t: 'Responsive, fluid layouts', d: 'Pages that hold up from small phones to wide desktop screens.' },
  { t: 'Netlify deployment', d: 'GitHub auto-deploy, so every update goes live when you push.' },
]

export const skills = [
  { group: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Vue Router', 'Bootstrap', 'JSON and fetch()'] },
  { group: 'Workflow', items: ['Figma', 'Git and GitHub', 'Netlify', 'npm', 'Vite', 'VS Code'] },
  { group: 'Networking', items: ['IP addressing and subnetting', 'Routers and switches', 'Basic troubleshooting', 'Cisco fundamentals'] },/*
  { group: 'Engineering foundation', items: ['C', 'MATLAB/Simulink', 'Proteus', 'Digital systems'] },*/
]

export const timeline = [
  { t: 'Computer Engineering (400 level)', w: 'Federal University of Technology Akure (FUTA)', d: '' },
  {
    t: 'SWEP II Intern',
    w: 'OURANOS Technologies Limited, Lagos, Oct to Dec 2025',
    d: 'Networking fundamentals, device connectivity, and exposure to enterprise networking and security tools.',
  },
  {
    t: 'IT Intern',
    w: 'Remedial Health, Lagos, May to Oct 2026',
    d: 'Worked on web development tasks using HTML, CSS, Bootstrap and JavaScript. Contributed to the development of the flows of pages of different sections of a newly built site.'
  },
  { t: 'Currently learning', d: 'Javascript, CCNA preparation (in progress).' },
]

// Add real testimonials here and the section appears. Empty means hidden.
export const testimonials = []
