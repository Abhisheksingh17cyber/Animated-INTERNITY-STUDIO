'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '@/store';

export default function BeeCatchingGame() {
  const {
    isPlaying,
    score,
    timeLeft,
    bees,
    highScore,
    startGame,
    catchBee,
    tick,
  } = useGameStore();

  const gameTick = useCallback(() => {
    if (isPlaying) {
      tick();
    }
  }, [isPlaying, tick]);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(gameTick, 1000);
    return () => clearInterval(interval);
  }, [isPlaying, gameTick]);

  return (
    <section id="game" className="relative py-32 px-6 bg-neutral-charcoal">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Catch the <span className="text-honey-primary">Bees</span>
          </h2>
          <p className="text-neutral-silver max-w-xl mx-auto">
            Test your reflexes! Click on the bees before time runs out.
          </p>
        </motion.div>

        {/* Game Area */}
        <div className="relative w-full aspect-[16/9] max-h-[500px] bg-neutral-black rounded-2xl border border-honey-primary/20 overflow-hidden">
          {/* Honeycomb background pattern */}
          <div className="absolute inset-0 opacity-5">
            {Array.from({ length: 20 }, (_, i) => (
              <div
                key={i}
                className="absolute w-16 h-16"
                style={{
                  left: `${(i % 5) * 25}%`,
                  top: `${Math.floor(i / 5) * 25}%`,
                  clipPath:
                    'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  backgroundColor: '#F4A623',
                }}
              />
            ))}
          </div>

          {!isPlaying ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 10 }}
                className="text-6xl mb-6"
              >
                🐝
              </motion.div>
              {highScore > 0 && (
                <p className="text-honey-primary mb-4 text-lg">
                  High Score: {highScore}
                </p>
              )}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={startGame}
                className="px-8 py-4 bg-honey-primary text-neutral-black font-bold rounded-xl hover:bg-honey-light transition-colors text-lg"
              >
                Start Game
              </motion.button>
            </div>
          ) : (
            <>
              {/* HUD */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                <div className="bg-neutral-black/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-honey-primary/30">
                  <span className="text-honey-primary font-bold">
                    Score: {score}
                  </span>
                </div>
                <div
                  className={`bg-neutral-black/80 backdrop-blur-sm px-4 py-2 rounded-lg border ${
                    timeLeft <= 10
                      ? 'border-red-500 text-red-400'
                      : 'border-honey-primary/30 text-honey-primary'
                  }`}
                >
                  <span className="font-bold">Time: {timeLeft}s</span>
                </div>
              </div>

              {/* Bees */}
              <AnimatePresence>
                {bees
                  .filter((bee) => !bee.caught)
                  .map((bee) => (
                    <motion.button
                      key={bee.id}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0, rotate: 180 }}
                      whileHover={{ scale: 1.2 }}
                      onClick={() => catchBee(bee.id)}
                      className="absolute cursor-pointer"
                      style={{
                        left: `${bee.x}%`,
                        top: `${bee.y}%`,
                        fontSize: `${bee.size}px`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <motion.span
                        animate={{ y: [-3, 3, -3] }}
                        transition={{
                          duration: 0.5 + bee.speed * 0.2,
                          repeat: Infinity,
                        }}
                        className="block"
                      >
                        🐝
                      </motion.span>
                    </motion.button>
                  ))}
              </AnimatePresence>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
