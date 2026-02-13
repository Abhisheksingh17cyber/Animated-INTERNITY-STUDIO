import { create } from 'zustand';
import type { BeePosition, CursorPosition, GameState } from '@/types';
import { randomBetween } from '@/lib/utils';

interface AppStore {
  // Cursor state
  cursor: CursorPosition;
  setCursor: (cursor: Partial<CursorPosition>) => void;

  // Navigation state
  isNavOpen: boolean;
  setNavOpen: (isOpen: boolean) => void;
  
  // Page transition state
  isTransitioning: boolean;
  setTransitioning: (isTransitioning: boolean) => void;
  
  // Scroll state
  scrollProgress: number;
  setScrollProgress: (progress: number) => void;
  
  // Theme
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  
  // Loading state
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
}

interface GameStore {
  gameState: GameState;
  startGame: () => void;
  endGame: () => void;
  catchBee: (beeId: string) => void;
  updateBees: () => void;
  decrementTime: () => void;
  resetGame: () => void;
}

export const useAppStore = create<AppStore>((set) => ({
  cursor: { x: 0, y: 0, isHovering: false, isClicking: false },
  setCursor: (cursor) =>
    set((state) => ({ cursor: { ...state.cursor, ...cursor } })),

  isNavOpen: false,
  setNavOpen: (isNavOpen) => set({ isNavOpen }),

  isTransitioning: false,
  setTransitioning: (isTransitioning) => set({ isTransitioning }),

  scrollProgress: 0,
  setScrollProgress: (scrollProgress) => set({ scrollProgress }),

  isDarkMode: true,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),

  isLoading: true,
  setLoading: (isLoading) => set({ isLoading }),
}));

const createInitialBees = (count: number): BeePosition[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `bee-${i}`,
    x: randomBetween(100, typeof window !== 'undefined' ? window.innerWidth - 100 : 1000),
    y: randomBetween(100, typeof window !== 'undefined' ? window.innerHeight - 100 : 600),
    vx: randomBetween(-2, 2),
    vy: randomBetween(-2, 2),
    scale: randomBetween(0.5, 1),
    rotation: randomBetween(0, 360),
    caught: false,
  }));
};

export const useGameStore = create<GameStore>((set, get) => ({
  gameState: {
    score: 0,
    bees: [],
    isPlaying: false,
    timeLeft: 30,
  },

  startGame: () => {
    set({
      gameState: {
        score: 0,
        bees: createInitialBees(10),
        isPlaying: true,
        timeLeft: 30,
      },
    });
  },

  endGame: () => {
    set((state) => ({
      gameState: { ...state.gameState, isPlaying: false },
    }));
  },

  catchBee: (beeId: string) => {
    set((state) => ({
      gameState: {
        ...state.gameState,
        score: state.gameState.score + 10,
        bees: state.gameState.bees.map((bee) =>
          bee.id === beeId ? { ...bee, caught: true } : bee
        ),
      },
    }));
    
    // Add a new bee after catching one
    setTimeout(() => {
      const { gameState } = get();
      if (gameState.isPlaying) {
        const newBee: BeePosition = {
          id: `bee-${Date.now()}`,
          x: randomBetween(100, window.innerWidth - 100),
          y: randomBetween(100, window.innerHeight - 100),
          vx: randomBetween(-3, 3),
          vy: randomBetween(-3, 3),
          scale: randomBetween(0.5, 1),
          rotation: randomBetween(0, 360),
          caught: false,
        };
        set((state) => ({
          gameState: {
            ...state.gameState,
            bees: [...state.gameState.bees.filter((b) => !b.caught), newBee],
          },
        }));
      }
    }, 500);
  },

  updateBees: () => {
    set((state) => ({
      gameState: {
        ...state.gameState,
        bees: state.gameState.bees.map((bee) => {
          if (bee.caught) return bee;
          
          let newX = bee.x + bee.vx;
          let newY = bee.y + bee.vy;
          let newVx = bee.vx;
          let newVy = bee.vy;

          // Bounce off edges
          if (newX < 50 || newX > window.innerWidth - 50) {
            newVx = -newVx;
            newX = Math.max(50, Math.min(newX, window.innerWidth - 50));
          }
          if (newY < 50 || newY > window.innerHeight - 50) {
            newVy = -newVy;
            newY = Math.max(50, Math.min(newY, window.innerHeight - 50));
          }

          // Add some randomness
          if (Math.random() < 0.02) {
            newVx += randomBetween(-0.5, 0.5);
            newVy += randomBetween(-0.5, 0.5);
          }

          return {
            ...bee,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
            rotation: bee.rotation + 2,
          };
        }),
      },
    }));
  },

  decrementTime: () => {
    set((state) => {
      const newTime = state.gameState.timeLeft - 1;
      if (newTime <= 0) {
        return {
          gameState: { ...state.gameState, timeLeft: 0, isPlaying: false },
        };
      }
      return {
        gameState: { ...state.gameState, timeLeft: newTime },
      };
    });
  },

  resetGame: () => {
    set({
      gameState: {
        score: 0,
        bees: [],
        isPlaying: false,
        timeLeft: 30,
      },
    });
  },
}));
