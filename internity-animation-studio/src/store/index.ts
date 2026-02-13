import { create } from 'zustand';
import type { BeePosition, CursorPosition, TransitionState } from '@/types';
import { randomBetween } from '@/lib/utils';

interface AppState {
  cursorPosition: CursorPosition;
  isNavOpen: boolean;
  transitionState: TransitionState;
  scrollProgress: number;
  setCursorPosition: (pos: CursorPosition) => void;
  setNavOpen: (open: boolean) => void;
  setTransitionState: (state: TransitionState) => void;
  setScrollProgress: (progress: number) => void;
}

export const useAppStore = create<AppState>((set) => ({
  cursorPosition: { x: 0, y: 0 },
  isNavOpen: false,
  transitionState: 'idle',
  scrollProgress: 0,
  setCursorPosition: (pos) => set({ cursorPosition: pos }),
  setNavOpen: (open) => set({ isNavOpen: open }),
  setTransitionState: (state) => set({ transitionState: state }),
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
}));

interface GameStoreState {
  isPlaying: boolean;
  score: number;
  timeLeft: number;
  bees: BeePosition[];
  highScore: number;
  startGame: () => void;
  catchBee: (id: number) => void;
  tick: () => void;
  endGame: () => void;
}

function generateBees(count: number): BeePosition[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: randomBetween(10, 90),
    y: randomBetween(10, 90),
    size: randomBetween(30, 60),
    speed: randomBetween(1, 3),
    caught: false,
  }));
}

export const useGameStore = create<GameStoreState>((set, get) => ({
  isPlaying: false,
  score: 0,
  timeLeft: 30,
  bees: [],
  highScore: 0,
  startGame: () =>
    set({
      isPlaying: true,
      score: 0,
      timeLeft: 30,
      bees: generateBees(8),
    }),
  catchBee: (id) => {
    const { bees, score } = get();
    const newBees = bees.map((bee) =>
      bee.id === id ? { ...bee, caught: true } : bee
    );
    const allCaught = newBees.every((bee) => bee.caught);
    set({
      bees: allCaught ? generateBees(8) : newBees,
      score: score + 1,
    });
  },
  tick: () => {
    const { timeLeft } = get();
    if (timeLeft <= 0) {
      get().endGame();
      return;
    }
    const { bees } = get();
    const newBees = bees.map((bee) => ({
      ...bee,
      x: bee.caught ? bee.x : ((bee.x + randomBetween(-2, 2) + 100) % 100),
      y: bee.caught ? bee.y : ((bee.y + randomBetween(-2, 2) + 100) % 100),
    }));
    set({ timeLeft: timeLeft - 1, bees: newBees });
  },
  endGame: () => {
    const { score, highScore } = get();
    set({
      isPlaying: false,
      highScore: Math.max(score, highScore),
    });
  },
}));
