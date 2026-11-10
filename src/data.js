// All the personal content of the site lives here, so it can be updated without touching layout code.

export const profile = {
  name: 'Sadisha Viraj',
  role: 'Full-Stack Developer',
  study: 'IT undergraduate · University of Moratuwa',
  tagline: 'From the Flutter or React screen to the API, the database and the cloud server behind it.',
  status: 'Open to internship opportunities',
  email: 'sadishaviraj@gmail.com',
  github: 'https://github.com/sadiya0001',
  linkedin: 'https://www.linkedin.com/in/k-k-s-viraj-43304a360',
  photo: 'img/profile.jpg',
}

export const about = [
  "I'm an Information Technology undergraduate at the University of Moratuwa who enjoys turning real problems into working software.",
  'Most of what I build is real-time: live maps, live market data, chat and push notifications. I like owning the whole path, from the Flutter or React screen to the API, the database and the cloud server that keeps it running.',
  'I care about doing things properly: automated tests, security rules, code reviews through pull requests, and CI/CD that checks every change.',
]

export const stats = [
  { value: '2', label: 'Full products shipped in 2026' },
  { value: '4', label: 'Apps in the DocRoad platform' },
  { value: '115', label: 'Automated tests in ProChart' },
  { value: '24/7', label: 'Cloud alert server on Azure' },
]

export const featured = [
  {
    id: 'docroad',
    name: 'DocRoad',
    kind: 'Roadside assistance platform',
    context: 'University of Moratuwa group project · 2026',
    accent: '#FF8C00',
    icon: 'img/docroad-icon.png',
    summary:
      'Connects stranded drivers in Sri Lanka with nearby verified mechanics in real time. Two Flutter mobile apps, a Node.js API and a React admin dashboard.',
    points: [
      'Smart matching ranks nearby mechanics by distance, availability, specialisation and rating',
      'Live location tracking on maps, with QR code arrival check',
      'Emergency SOS by SMS, in-app chat and push notifications',
      'AI-assisted diagnosis with Google Gemini; Sinhala and English UI',
      'Admin dashboard with a live map, reports and mechanic approval',
      'Locked-down Firestore security rules with automated tests',
    ],
    stack: ['Flutter', 'Node.js', 'Express', 'Socket.IO', 'Firebase', 'PostgreSQL', 'MongoDB', 'React', 'Docker'],
    links: [],
    note: 'Private university repository; demo available on request.',
  },
  {
    id: 'prochart',
    name: 'ProChart',
    kind: 'Real-time trading chart',
    context: 'Personal project · v0.1 released 2026',
    accent: '#26A69A',
    icon: 'img/prochart-logo.svg',
    image: 'img/prochart.jpg',
    summary:
      'A trading chart terminal for live Deriv markets. I rebuilt my old vanilla-JS chart from scratch in React 19 and TypeScript with a feature-based structure.',
    points: [
      'Live candles over WebSocket: 7 chart types, 8 timeframes from 1 second to 1 day',
      '16 indicators, including RSI with automatic divergence detection',
      'Drawing tools, watchlist, price alerts and a simulated order ticket',
      'Candle + Bollinger Band reversal alerts sent to Telegram 24/7 from a Node server on an Azure VM',
      '115 automated tests; GitHub Actions CI and automatic deploys to Azure Static Web Apps',
    ],
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand', 'Lightweight Charts', 'Vitest', 'Azure', 'GitHub Actions'],
    links: [{ label: 'Live demo', href: 'https://chart.prochart.me' }],
  },
]

export const projects = [
  {
    name: 'Trading Helper Bot',
    desc: 'Python bot that streams market data over WebSockets and sends RSI and Bollinger Band signals to Telegram.',
    stack: ['Python', 'WebSockets', 'Telegram API'],
    href: 'https://github.com/sadiya0001/Trading-Helper-Bot',
  },
  {
    name: 'ERP: Project Management Module',
    desc: 'Project and task management module of a group ERP system (IT2305, Enterprise System Development & Integration).',
    stack: ['Vue.js', 'Group project'],
    href: 'https://github.com/sadiya0001/ERP-Project-Management-Module',
  },
  {
    name: 'Event Management System',
    desc: 'Web application for organising, managing and tracking events.',
    stack: ['PHP', 'Web app'],
    href: 'https://github.com/sadiya0001/event-management-system',
  },
  {
    name: 'Student Management System',
    desc: 'Java console app to add, view and search student records, built with OOP principles.',
    stack: ['Java', 'OOP'],
    href: 'https://github.com/sadiya0001/student-managment-system',
  },
  {
    name: 'Basic Honeypot',
    desc: 'A simple honeypot set up to attract and log attacker activity.',
    stack: ['Cybersecurity'],
    href: 'https://github.com/sadiya0001/basic-honeypot-',
  },
]

export const skills = [
  { group: 'Languages', items: ['JavaScript', 'TypeScript', 'Dart', 'Java', 'Python', 'PHP', 'SQL'] },
  { group: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS', 'Zustand', 'Vue.js', 'HTML & CSS'] },
  { group: 'Mobile', items: ['Flutter', 'Riverpod', 'Firebase Auth', 'Push notifications (FCM)', 'Maps'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'Socket.IO', 'REST APIs', 'WebSockets', 'Spring Boot'] },
  { group: 'Data & cloud', items: ['Firestore', 'PostgreSQL', 'MongoDB', 'Microsoft Azure', 'Docker', 'Linux servers'] },
  { group: 'Practices', items: ['Git & pull requests', 'GitHub Actions CI/CD', 'Automated testing', 'Security rules', 'Postman'] },
]

export const education = [
  {
    title: 'Information Technology',
    place: 'University of Moratuwa',
    detail: 'Undergraduate. Group project: DocRoad, a real-time roadside assistance platform.',
  },
]
