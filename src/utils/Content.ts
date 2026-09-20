export type Project = {
  name: string;
  tagline: string;
  description: string;
  link: string;
  year: string;
  img: string;
  alt: string;
  tags: string[];
  note?: string;
};

export const projects: Project[] = [
  {
    name: 'MicroCrop',
    tagline: 'Parametric crop insurance',
    description:
      'Parametric crop insurance for smallholder farmers in Africa. Weather data from WeatherXM triggers the payouts automatically, and they settle straight to M-Pesa.',
    link: 'https://www.microcrop.app/',
    year: '2025',
    img: '/assets/images/microcrop.png',
    alt: 'MicroCrop parametric crop insurance dashboard',
    tags: ['React', 'Solidity', 'Node.js', 'TypeScript', 'WeatherXM'],
  },
  {
    name: 'Strimz',
    tagline: 'Token streaming payroll',
    description:
      'A token streaming platform for salaries, subscriptions and utility payments. Employers upload a CSV of their team, set a streaming interval, and the payments run on schedule.',
    link: 'https://www.strimz.xyz/',
    year: '2024',
    img: '/assets/images/strimz.png',
    alt: 'Strimz token streaming payment platform',
    tags: ['Next.js', 'Solidity', 'Tailwind CSS', 'TypeScript'],
  },
  {
    name: 'builderUptime',
    tagline: 'Farcaster-native time tracking',
    description:
      'Performance tracking and time management for builders, built natively for Farcaster. Smart accounts handle the wallet side, so logging a session takes one tap.',
    link: 'https://projectone.app/',
    year: '2024',
    img: '/assets/images/uptime.png',
    alt: 'builderUptime performance tracking interface',
    tags: ['Next.js', 'Smart Accounts', 'PostgreSQL', 'GraphQL'],
  },
  {
    name: 'AntiKorrupt',
    tagline: 'Gamified anti-corruption learning',
    description:
      'An AI tutor trained on UN anti-corruption material, wrapped in a game. Students work through real-world scenarios to see how corruption actually plays out.',
    link: 'https://px7id-byaaa-aaaak-albiq-cai.icp0.io/',
    year: '2024',
    img: '/assets/images/antikorrupt.png',
    alt: 'AntiKorrupt AI education platform',
    tags: ['Svelte', 'Motoko', 'Tailwind CSS'],
  },
  {
    name: 'P2P Farmers',
    tagline: 'Farm-to-consumer marketplace',
    description:
      'A marketplace that connects farmers straight to buyers, with rewards on both sides for sustainable practice.',
    link: 'https://pm4fe-4iaaa-aaaak-ao7bq-cai.icp0.io/',
    year: '2023',
    img: '/assets/images/p2pfarmers.png',
    alt: 'P2P Farmers blockchain marketplace',
    tags: ['React', 'Motoko', 'Tailwind CSS'],
    note: '3rd place, ICP Mega Hackathon',
  },
];

export type Tech = { name: string; logo: string; note: string };

export const techStack: Tech[] = [
  {
    name: 'Solidity',
    logo: '/assets/images/solidity.png',
    note: 'EVM contracts',
  },
  { name: 'Rust', logo: '/assets/images/rust.png', note: 'Systems & Solana' },
  { name: 'C++', logo: '/assets/images/cpp.svg', note: 'Systems work' },
  {
    name: 'Motoko',
    logo: '/assets/images/moto.png',
    note: 'Internet Computer',
  },
  { name: 'Cairo', logo: '/assets/images/cairo.svg', note: 'Starknet' },
  {
    name: 'TypeScript',
    logo: '/assets/images/tss.png',
    note: 'Typed frontends',
  },
  {
    name: 'JavaScript',
    logo: '/assets/images/js.png',
    note: 'The everyday one',
  },
  {
    name: 'Foundry',
    logo: '/assets/images/foundry.png',
    note: 'Contract testing',
  },
  { name: 'Hardhat', logo: '/assets/images/hash2.png', note: 'EVM tooling' },
];

/* Counted from what is actually on this site. Update alongside the content. */
export const stats = [
  { value: 5, suffix: '', label: 'Products shipped' },
  { value: 9, suffix: '', label: 'Technical articles' },
  { value: 7, suffix: '', label: 'Languages in rotation' },
  { value: 10, suffix: '+', label: 'Hackathons' },
];

export const roles = [
  'full-stack blockchain developer',
  'Web3 market entry strategist',
  'BD and partnerships',
  'technical writer',
];

/* --- "Cool stuff" gallery -------------------------------------------------
 * Add more photos to `public/assets/images/` and append entries here.
 * `caption` is the headline under the photo, `meta` the small line beneath it.
 * ------------------------------------------------------------------------ */
export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  meta: string;
};

export const galleryItems: GalleryItem[] = [
  {
    src: '/assets/images/stellar.jpeg',
    alt: 'Mary Gathoni speaking into a microphone beside a Stellar Impact Studio banner',
    caption: 'Technical mentor at Stellar Impact Studio',
    meta: 'Give Kenya, 2026',
  },
  {
    src: '/assets/images/dubai.jpg',
    alt: 'Mary Gathoni pitching MicroCrop on stage with a co-founder',
    caption: 'Pitching MicroCrop at Demo Day Dubai',
    meta: 'Founders Forge, 2025',
  },
  {
    src: '/assets/images/unodc.jpeg',
    alt: 'Two developers pair programming on a laptop during a hackathon',
    caption: 'Hacking (and winning) Coding4Integrity 2.0',
    meta: 'UNODC hackathon, 2024',
  },
  {
    src: '/assets/images/btc+.jpeg',
    alt: 'Builders on stage at the bitcoin++ open source edition in Nairobi',
    caption: 'Won the open source track',
    meta: 'bitcoin++ Nairobi, 2026',
  },
];

/* --- Current roles --------------------------------------------------------
 * The growth and market-entry side of the work, alongside the engineering.
 * ------------------------------------------------------------------------ */
export type Role = {
  title: string;
  org: string;
  href?: string;
  blurb: string;
};

export const currentRoles: Role[] = [
  {
    title: 'Founder',
    org: 'KoruFlux',
    href: 'https://koruflux.com/',
    blurb:
      'A consultancy that helps Web3 and fintech companies enter African markets, including the regulatory side of Kenya’s VASP framework.',
  },
  {
    title: 'BD & Partnerships',
    org: 'MicroCrop',
    href: 'https://www.microcrop.app/',
    blurb:
      'Blockchain crop insurance for smallholder farmers. I work on the partnerships that grow it across Kenya and beyond.',
  },
  {
    title: 'Marketing Lead',
    org: 'jua.exchange',
    href: 'https://www.jua.exchange/',
    blurb: 'An African prediction market.',
  },
];
