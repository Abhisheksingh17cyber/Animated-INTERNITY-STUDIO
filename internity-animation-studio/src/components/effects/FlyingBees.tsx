'use client';

export default function FlyingBees() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      <style jsx>{`
        .bee {
          position: absolute;
          will-change: transform;
          font-size: 14px;
          opacity: 0.4;
        }
        .bee-1 {
          left: 10%; top: 20%;
          animation: fly1 25s linear infinite;
        }
        .bee-2 {
          left: 70%; top: 60%;
          animation: fly2 30s linear infinite 3s;
        }
        .bee-3 {
          left: 40%; top: 80%;
          animation: fly3 22s linear infinite 7s;
        }
        @keyframes fly1 {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(80px, -50px) rotate(5deg); }
          50% { transform: translate(-30px, 30px) rotate(-3deg); }
          75% { transform: translate(60px, -70px) rotate(4deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes fly2 {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-60px, 40px) rotate(-4deg); }
          50% { transform: translate(50px, -60px) rotate(3deg); }
          75% { transform: translate(-40px, 20px) rotate(-2deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes fly3 {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(70px, 30px) rotate(3deg); }
          50% { transform: translate(-50px, -40px) rotate(-5deg); }
          75% { transform: translate(30px, 50px) rotate(2deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
      `}</style>
      <span className="bee bee-1">🐝</span>
      <span className="bee bee-2">🐝</span>
      <span className="bee bee-3">🐝</span>
    </div>
  );
}
