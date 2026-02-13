'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '@/store';

export function BeeCatchingGame() {
  const {
    gameState,
    startGame,
    endGame,
    catchBee,
    updateBees,
    decrementTime,
    resetGame,
  } = useGameStore();

  // Update bee positions
  useEffect(() => {
    if (!gameState.isPlaying) return;

    const interval = setInterval(() => {
      updateBees();
    }, 50);

    return () => clearInterval(interval);
  }, [gameState.isPlaying, updateBees]);

  // Timer countdown
  useEffect(() => {
    if (!gameState.isPlaying) return;

    const timer = setInterval(() => {
      decrementTime();
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState.isPlaying, decrementTime]);

  const handleBeeClick = useCallback(
    (beeId: string) => {
      catchBee(beeId);
    },
    [catchBee]
  );

  return (
    <section className="relative py-24 bg-neutral-950 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-honey-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Mini Game
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-white mb-4">
            Catch the <span className="text-honey-primary">Bees!</span>
          </h2>
          <p className="text-neutral-silver">
            Test your reflexes! Tap on the bees to catch them before time runs out.
          </p>
        </motion.div>

        {/* Game container */}
        <div className="relative">
          {/* Game stats */}
          <AnimatePresence mode="wait">
            {gameState.isPlaying ? (
              <motion.div
                key="playing"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex justify-center gap-8 mb-8"
              >
                <div className="bg-neutral-charcoal/50 rounded-xl px-6 py-3">
                  <span className="text-neutral-gray text-sm block">Score</span>
                  <span className="text-3xl font-bold text-honey-primary">
                    {gameState.score}
                  </span>
                </div>
                <div className="bg-neutral-charcoal/50 rounded-xl px-6 py-3">
                  <span className="text-neutral-gray text-sm block">Time</span>
                  <span
                    className={`text-3xl font-bold ${
                      gameState.timeLeft <= 10
                        ? 'text-red-500'
                        : 'text-honey-light'
                    }`}
                  >
                    {gameState.timeLeft}s
                  </span>
                </div>
              </motion.div>
            ) : gameState.score > 0 ? (
              <motion.div
                key="ended"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="mb-8"
              >
                <h3 className="text-2xl font-bold text-neutral-white mb-2">
                  Game Over!
                </h3>
                <p className="text-honey-primary text-4xl font-bold">
                  Final Score: {gameState.score}
                </p>
              </motion.div>
            ) : null}
          </AnimatePresence>

          {/* Game area */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] bg-neutral-charcoal/30 rounded-3xl border border-neutral-charcoal overflow-hidden"
          >
            {/* Honeycomb background pattern */}
            <div className="absolute inset-0 opacity-10">
              <GameBackground />
            </div>

            {/* Bees */}
            <AnimatePresence>
              {gameState.isPlaying &&
                gameState.bees
                  .filter((bee) => !bee.caught)
                  .map((bee) => (
                    <motion.button
                      key={bee.id}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: bee.scale,
                        opacity: 1,
                        x: bee.x,
                        y: bee.y,
                        rotate: bee.rotation,
                      }}
                      exit={{
                        scale: 0,
                        opacity: 0,
                        transition: { duration: 0.2 },
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      onClick={() => handleBeeClick(bee.id)}
                      className="absolute w-16 h-16 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                      style={{ left: 0, top: 0 }}
                      whileHover={{ scale: bee.scale * 1.2 }}
                      whileTap={{ scale: bee.scale * 0.8 }}
                    >
                      <GameBee />
                    </motion.button>
                  ))}
            </AnimatePresence>

            {/* Start/Restart button (when not playing) */}
            {!gameState.isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={gameState.score > 0 ? resetGame : startGame}
                  className="px-8 py-4 bg-honey-primary text-neutral-black font-bold text-lg rounded-full shadow-lg shadow-honey-primary/30"
                  data-hover="true"
                >
                  {gameState.score > 0 ? 'Play Again' : 'Start Game'}
                </motion.button>
              </div>
            )}

            {/* Honeycomb target indicator */}
            <div className="absolute bottom-4 right-4 opacity-50">
              <HoneycombTarget />
            </div>
          </motion.div>

          {/* Instructions */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-neutral-gray text-sm"
          >
            {gameState.isPlaying
              ? 'Click or tap the bees to catch them!'
              : 'Catch as many bees as you can in 30 seconds'}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function GameBee() {
  return (
    <motion.svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-lg"
      animate={{
        y: [0, -3, 0, 3, 0],
      }}
      transition={{
        duration: 0.6,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {/* Wings with flutter */}
      <motion.ellipse
        cx="18"
        cy="24"
        rx="12"
        ry="8"
        fill="rgba(255, 215, 0, 0.7)"
        animate={{ scaleY: [1, 0.5, 1] }}
        transition={{ duration: 0.06, repeat: Infinity }}
      />
      <motion.ellipse
        cx="46"
        cy="24"
        rx="12"
        ry="8"
        fill="rgba(255, 215, 0, 0.7)"
        animate={{ scaleY: [1, 0.5, 1] }}
        transition={{ duration: 0.06, repeat: Infinity, delay: 0.03 }}
      />

      {/* Body */}
      <ellipse cx="32" cy="36" rx="14" ry="18" fill="#F4A623" />
      
      {/* Stripes */}
      <rect x="20" y="30" width="24" height="4" fill="#1A1A1A" rx="2" />
      <rect x="22" y="38" width="20" height="4" fill="#1A1A1A" rx="2" />
      <rect x="24" y="46" width="16" height="3" fill="#1A1A1A" rx="1.5" />

      {/* Head */}
      <circle cx="32" cy="20" r="10" fill="#F4A623" />
      
      {/* Eyes */}
      <circle cx="28" cy="18" r="3" fill="#1A1A1A" />
      <circle cx="36" cy="18" r="3" fill="#1A1A1A" />
      <circle cx="29" cy="17" r="1" fill="#FFFFFF" />
      <circle cx="37" cy="17" r="1" fill="#FFFFFF" />

      {/* Antennae */}
      <path
        d="M28 12 Q26 6 22 4"
        stroke="#1A1A1A"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M36 12 Q38 6 42 4"
        stroke="#1A1A1A"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="22" cy="4" r="2" fill="#F4A623" />
      <circle cx="42" cy="4" r="2" fill="#F4A623" />
    </motion.svg>
  );
}

function GameBackground() {
  return (
    <svg className="w-full h-full" viewBox="0 0 400 460">
      <defs>
        <pattern
          id="game-honeycomb"
          width="56"
          height="100"
          patternUnits="userSpaceOnUse"
          patternTransform="scale(1.2)"
        >
          <polygon
            points="28 0, 56 14, 56 43, 28 57, 0 43, 0 14"
            fill="none"
            stroke="#F4A623"
            strokeWidth="0.5"
          />
          <polygon
            points="28 57, 56 71, 56 100, 28 114, 0 100, 0 71"
            fill="none"
            stroke="#F4A623"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#game-honeycomb)" />
    </svg>
  );
}

function HoneycombTarget() {
  return (
    <motion.svg
      width="60"
      height="69"
      viewBox="0 0 100 115"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    >
      <polygon
        points="50 0, 100 28.75, 100 86.25, 50 115, 0 86.25, 0 28.75"
        fill="none"
        stroke="#F4A623"
        strokeWidth="2"
      />
      <polygon
        points="50 20, 80 38.75, 80 76.25, 50 95, 20 76.25, 20 38.75"
        fill="#F4A623"
        opacity="0.3"
      />
    </motion.svg>
  );
}
