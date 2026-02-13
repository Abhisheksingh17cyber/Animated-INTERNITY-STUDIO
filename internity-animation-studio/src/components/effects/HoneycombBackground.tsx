'use client';

export default function HoneycombBackground() {
  const hexSize = 60;
  const cols = 20;
  const rows = 15;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="honeycomb"
            x="0"
            y="0"
            width={hexSize * 1.75}
            height={hexSize * 2}
            patternUnits="userSpaceOnUse"
          >
            {Array.from({ length: cols * rows }, (_, i) => {
              const col = i % cols;
              const row = Math.floor(i / cols);
              const x = col * hexSize * 1.75 + (row % 2 === 0 ? 0 : hexSize * 0.875);
              const y = row * hexSize * 1.5;
              return (
                <polygon
                  key={i}
                  points={`${x + hexSize * 0.5},${y} ${x + hexSize},${y + hexSize * 0.25} ${x + hexSize},${y + hexSize * 0.75} ${x + hexSize * 0.5},${y + hexSize} ${x},${y + hexSize * 0.75} ${x},${y + hexSize * 0.25}`}
                  fill="none"
                  stroke="#F4A623"
                  strokeWidth="0.5"
                />
              );
            })}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#honeycomb)" />
      </svg>
    </div>
  );
}
