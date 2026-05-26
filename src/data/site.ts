export const site = {
  name: 'Versatile SOC',
  legalName: 'Versatile SOC India Pvt Ltd',
  tagline: 'Silicon, Software & Systems — Engineered for What Comes Next',
  description:
    'Versatile SOC India Pvt Ltd is a semiconductor and embedded engineering services partner delivering VLSI, SoC, embedded software, AI/ML and cloud solutions to global product companies.',
  url: 'https://www.versatilesoc.com',
  // TODO[placeholder]: Confirm info@versatilesoc.com is the right inbound address (or change it).
  email: 'info@versatilesoc.com',
  address: {
    line1: 'Plot 118, Spaces & More Business Park, 4th Floor',
    line2: 'Diamond Hills, Lumbini Layout, Gachibowli',
    line3: 'Hyderabad, Telangana 500032, India',
  },
  // TODO[placeholder]: Replace these guessed social handles with the company's real URLs,
  // or delete the unused ones so they stop appearing in the footer.
  social: {
    linkedin: 'https://www.linkedin.com/company/versatilesoc',
    twitter: 'https://twitter.com/versatilesoc',
    youtube: 'https://www.youtube.com/@versatilesoc',
  },
};

export const nav = [
  { label: 'Home', href: '/' },
  {
    label: 'Company',
    href: '/about',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Quality & Compliance', href: '/about#quality' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'VLSI & Silicon Engineering', href: '/services/vlsi-silicon' },
      { label: 'Embedded Engineering', href: '/services/embedded' },
      { label: 'System Design', href: '/services/system-design' },
      { label: 'AI & ML Solutions', href: '/services/ai-ml' },
      { label: 'Application & Cloud', href: '/services/application-cloud' },
    ],
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Contact', href: '/contact' },
];
