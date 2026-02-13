export default function HoneycombBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="honeycomb"
            x="0"
            y="0"
            width="105"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="30,0 60,15 60,45 30,60 0,45 0,15"
              fill="none"
              stroke="#F4A623"
              strokeWidth="0.5"
            />
            <polygon
              points="82.5,60 112.5,75 112.5,105 82.5,120 52.5,105 52.5,75"
              fill="none"
              stroke="#F4A623"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#honeycomb)" />
      </svg>
    </div>
  );
}
