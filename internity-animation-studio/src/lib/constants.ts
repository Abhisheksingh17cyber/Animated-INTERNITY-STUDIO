export const SITE_CONFIG = {
  name: 'INTERNITY',
  tagline: 'Animation Studio',
  description: 'Premium animation studio crafting extraordinary digital experiences with the precision and beauty of nature.',
  url: 'https://internity.studio',
  email: 'hello@internity.studio',
  phone: '+1 (555) 123-4567',
  address: '123 Creative Avenue, Design District, NY 10001',
} as const;

export const COLORS = {
  honey: {
    light: '#FFD700',
    primary: '#F4A623',
    dark: '#D4800D',
    accent: '#FFF3D6',
  },
  neutral: {
    black: '#0A0A0A',
    charcoal: '#1A1A1A',
    gray: '#2A2A2A',
    silver: '#8A8A8A',
    light: '#E5E5E5',
    white: '#FAFAFA',
  },
} as const;

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Game', href: '#game' },
] as const;

export const PORTFOLIO_ITEMS = [
  {
    id: '1',
    title: 'Honey Flow',
    category: '2D Animation',
    description: 'A mesmerizing journey through liquid gold landscapes.',
    image: '/images/portfolio/honey-flow.jpg',
    color: '#FFD700',
  },
  {
    id: '2',
    title: 'Hive Mind',
    category: '3D Animation',
    description: 'Exploring the collective intelligence of nature.',
    image: '/images/portfolio/hive-mind.jpg',
    color: '#F4A623',
  },
  {
    id: '3',
    title: 'Nectar Dreams',
    category: 'Motion Design',
    description: 'Abstract motion design inspired by pollination.',
    image: '/images/portfolio/nectar-dreams.jpg',
    color: '#D4800D',
  },
  {
    id: '4',
    title: 'Swarm Logic',
    category: 'Visual Effects',
    description: 'VFX showcase of emergent swarm behavior patterns.',
    image: '/images/portfolio/swarm-logic.jpg',
    color: '#FFB347',
  },
  {
    id: '5',
    title: 'Golden Ratio',
    category: 'Web Animation',
    description: 'Interactive web experiences built on natural mathematics.',
    image: '/images/portfolio/golden-ratio.jpg',
    color: '#FFC107',
  },
] as const;

export const SERVICES = [
  {
    id: '1',
    title: '2D Animation',
    description: 'Hand-crafted frame-by-frame animations that bring stories to life with warmth and character.',
    icon: '🎬',
  },
  {
    id: '2',
    title: '3D Animation',
    description: 'Stunning three-dimensional worlds rendered with photorealistic detail and artistic vision.',
    icon: '🎨',
  },
  {
    id: '3',
    title: 'Motion Design',
    description: 'Dynamic motion graphics that transform complex ideas into engaging visual narratives.',
    icon: '✨',
  },
  {
    id: '4',
    title: 'Visual Effects',
    description: 'Seamless VFX integration that pushes the boundaries of what is visually possible.',
    icon: '🌟',
  },
  {
    id: '5',
    title: 'Web Animation',
    description: 'Interactive web experiences with buttery-smooth animations and micro-interactions.',
    icon: '🌐',
  },
  {
    id: '6',
    title: 'App Development',
    description: 'Mobile and desktop applications with fluid animations and intuitive interfaces.',
    icon: '📱',
  },
] as const;
