export const SITE_CONFIG = {
  name: 'INTERNITY ANIMATION STUDIO',
  tagline: 'Where Creativity Takes Flight',
  description: 'Premium animation studio crafting immersive digital experiences',
  url: 'https://internity-animation-studio.vercel.app',
  author: 'Internity Studio',
} as const;

export const COLORS = {
  honey: {
    light: '#FFD700',
    primary: '#F4A623',
    dark: '#D4800D',
    amber: '#FFBF00',
  },
  comb: {
    light: '#FFF8E1',
    pattern: '#FFE082',
    dark: '#8D6E63',
  },
  neutral: {
    black: '#1A1A1A',
    charcoal: '#2D2D2D',
    gray: '#6B6B6B',
    silver: '#E0E0E0',
    white: '#FAFAFA',
  },
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.0,
    verySlow: 1.5,
  },
  easing: {
    smooth: [0.43, 0.13, 0.23, 0.96],
    bounce: [0.68, -0.55, 0.265, 1.55],
    sharp: [0.4, 0, 0.2, 1],
  },
} as const;

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
] as const;

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'Honeycomb Dreams',
    category: 'Motion Design',
    description: 'Fluid animations inspired by nature\'s perfect geometry',
    image: '/portfolio/honeycomb-dreams.jpg',
    color: '#F4A623',
  },
  {
    id: 2,
    title: 'Golden Flow',
    category: '3D Animation',
    description: 'Mesmerizing liquid gold simulations',
    image: '/portfolio/golden-flow.jpg',
    color: '#FFD700',
  },
  {
    id: 3,
    title: 'Hive Mind',
    category: 'Interactive',
    description: 'AI-driven swarm intelligence visualizations',
    image: '/portfolio/hive-mind.jpg',
    color: '#D4800D',
  },
  {
    id: 4,
    title: 'Sweet Symphony',
    category: 'Brand Identity',
    description: 'Organic brand animations with natural rhythms',
    image: '/portfolio/sweet-symphony.jpg',
    color: '#FFBF00',
  },
  {
    id: 5,
    title: 'Nectar Vision',
    category: 'Web Experience',
    description: 'Immersive website with scroll-driven storytelling',
    image: '/portfolio/nectar-vision.jpg',
    color: '#8D6E63',
  },
] as const;

export const SERVICES = [
  {
    id: 1,
    title: 'Motion Design',
    description: 'Captivating animations that bring your brand to life with fluid, purposeful motion.',
    icon: 'motion',
  },
  {
    id: 2,
    title: '3D Animation',
    description: 'Stunning three-dimensional worlds and characters that push creative boundaries.',
    icon: '3d',
  },
  {
    id: 3,
    title: 'Interactive Experiences',
    description: 'Engaging digital experiences that respond to user interaction in meaningful ways.',
    icon: 'interactive',
  },
  {
    id: 4,
    title: 'Brand Animation',
    description: 'Cohesive animated identity systems that elevate your brand presence.',
    icon: 'brand',
  },
  {
    id: 5,
    title: 'Web Experiences',
    description: 'Premium websites with scroll-based animations and immersive storytelling.',
    icon: 'web',
  },
  {
    id: 6,
    title: 'Visual Effects',
    description: 'Seamless VFX integration that enhances your visual narrative.',
    icon: 'vfx',
  },
] as const;
