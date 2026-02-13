export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  color: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface BeePosition {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  scale: number;
  rotation: number;
  caught: boolean;
}

export interface GameState {
  score: number;
  bees: BeePosition[];
  isPlaying: boolean;
  timeLeft: number;
}

export interface CursorPosition {
  x: number;
  y: number;
  isHovering: boolean;
  isClicking: boolean;
}

export interface AdminStats {
  totalVisitors: number;
  pageViews: number;
  avgSessionTime: string;
  bounceRate: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
