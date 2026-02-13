export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  color: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BeePosition {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  caught: boolean;
}

export interface GameState {
  isPlaying: boolean;
  score: number;
  timeLeft: number;
  bees: BeePosition[];
}

export interface CursorPosition {
  x: number;
  y: number;
}

export interface MousePosition {
  x: number;
  y: number;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface AnimationConfig {
  duration: number;
  delay: number;
  ease: string;
}

export type TransitionState = 'idle' | 'entering' | 'exiting';
