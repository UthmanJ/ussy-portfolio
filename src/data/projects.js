import { site } from './site'

const gh = (repo) => `https://github.com/UthmanJ/${repo}`

export const strip = [
  ['BeeWave Store', 'live e-commerce'],
  ['BeeWave App Suite', 'five Expo apps'],
  ['Phishing URL Scanner', 'live security tool'],
  ['Resource Locator', 'full-stack map app'],
  ['IoT Security Dashboard', 'live demo'],
  ['PoultryTrackPro', 'AI farm records'],
    ['ScamCheck', 'mobile security app'],
]

export const store = {
  id: '01',
  name: 'BeeWave Store',
  status: 'Live',
  kind: 'Web · Commerce',
  url: site.store,
  blurb: 'A live storefront for computer accessories, serving real customers since launch.',
  detail: 'I handle product data, media and hosting end to end, from the Firebase backend to Cloudinary image delivery.',
  tags: ['Firebase', 'Cloudinary', 'JavaScript'],
  links: [],
}

export const suite = {
  id: '02',
  name: 'BeeWave App Suite',
  status: 'Shipped',
  kind: 'Mobile · Backend',
  blurb: 'Five React Native apps sharing one Node.js backend, each with its own branding and shipped as an installable Android build.',
  detail: 'One Express and MongoDB Atlas API on Render serves every app, so a new app reuses the same auth and data layer instead of starting from scratch.',
  tags: ['React Native', 'Expo', 'Node.js', 'Express', 'MongoDB Atlas', 'EAS Build'],
  apps: [
    { name: 'Weather', color: '#0ea5e9' },
    { name: 'Daily Spark', color: '#f59e0b' },
    { name: 'Expense Tracker', color: '#10b981' },
    { name: 'PoultryTrackPro', color: '#ef4444' },
    { name: 'MarketNG', color: '#8b5cf6' },
  ],
  links: [
    { label: 'DailySpark build', url: 'https://expo.dev/accounts/codebeastai/projects/DailySparkV2/builds/e02c9b0f-64d4-4cd7-b1a3-dcde6848adb1' },
    { label: 'DailySpark code', url: gh('DailySparkV2-') },
    { label: 'MarketNG code', url: gh('MarketNG') },
    { label: 'Expense Tracker code', url: gh('ExpenseTrackerApp-') },
    { label: 'PoultryTrackPro code', url: gh('PoultryTrackProApp') },
  ],
}

export const more = [
  {
    kind: 'Security · Web',
    name: 'Phishing URL Scanner',
    desc: 'Scans a URL against 10 heuristics (look-alike brands, raw IPs, suspicious domains, shorteners, missing HTTPS) and returns a 0–100 risk score with every red flag explained. All analysis runs in the browser.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Security'],
    live: 'https://phishing-url-scanner.netlify.app',
    repo: gh('phishing-url-scanner'),
  },
    {
    kind: 'Full-stack · Community',
    name: 'Community Resource Locator',
    desc: 'A map-based app for finding and sharing local services such as clinics, ICT centres, libraries and schools, with category filters and a click-to-set-location submission form.',
    note: 'The free-tier backend may take up to a minute to wake up on first load.',
    tags: ['React', 'Leaflet', 'Node.js', 'Express', 'MongoDB'],
    live: 'https://community-resource-locator.netlify.app',
    repo: gh('community-resource-locator'),
  },
  {
    kind: 'Security · Full-stack',
    name: 'IoT Security Dashboard',
    desc: 'Simulates real-time monitoring of a fleet of connected devices, tracking security posture, firmware status and active alerts. Built to show full-stack engineering with security-relevant data modelling.',
    tags: ['Full-stack', 'IoT', 'Security'],
    live: 'https://iot-security-dashboard.netlify.app',
  },
  {
    kind: 'AI · Research',
    name: 'PoultryTrackPro',
    desc: 'AI-assisted farm record management that improved record-keeping accuracy by 25% for users with no data-management training. Findings on trust in AI outputs were presented at an international peer-reviewed conference.',
    tags: ['React', 'MongoDB', 'Applied AI'],
    repo: gh('PoultryTrackProApp'),
  },
  {
    kind: 'Full-stack · Team lead',
    name: 'Faculty Complaint System',
    desc: 'Led a team building complaint and maintenance management with photo-upload fault reporting and admin task assignment, cutting response time by 40%.',
    tags: ['Java', 'React', 'MySQL'],
  },
  {
    kind: 'Full-stack · SIWES',
    name: 'NITT Attendance System',
    desc: 'Coordinated the full lifecycle from requirements to deployment. Structured testing and query optimisation cut bug reports by 30% and improved database efficiency by 35%.',
    tags: ['SDLC', 'Testing', 'Databases'],
  },
    {
    kind: 'Security · Mobile',
    name: 'ScamCheck',
    desc: 'A phone app that scores suspicious links and messages from 0 to 100 and explains every warning sign, with local history and guides to common scams. Runs entirely on the device.',
    tags: ['React Native', 'Expo', 'Security'],
    repo: gh('scamcheck'),
  },
]