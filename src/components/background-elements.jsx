import AnimatedSphere from "./ui/AnimatedSphere";

export function BackgroundElements() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Flowing wave elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2">
        <svg viewBox="0 0 1200 600" className="w-full h-full opacity-20" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#374151" />
              <stop offset="50%" stopColor="#6B7280" />
              <stop offset="100%" stopColor="#9CA3AF" />
            </linearGradient>
          </defs>
          <path
            d="M0,300 C300,200 600,400 900,250 C1050,150 1150,350 1200,300 L1200,600 L0,600 Z"
            fill="url(#waveGradient)"
            className="animate-pulse"
          />
        </svg>
      </div>

      {/* 3D Sphere on left */}
      {/* <div className="absolute left-8 top-1/2 -translate-y-1/2 w-32 h-32 opacity-30">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-600 to-gray-800 shadow-2xl animate-pulse"></div>
      </div> */}

      {/* <div className="absolute left-8 top-1/2 -translate-y-1/2 w-32 h-32 opacity-60">
        <img className="w-full h-full rounded-full bg-gradient-to-br from-gray-600 to-gray-800 shadow-2xl animate-pulse" src="/Glossy_Black_Sphere.png" alt="sphere" />
      </div> */}
      <AnimatedSphere/>

      {/* Particle effects */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/30" />

      {/* Green glow effect on right */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
    </div>
  )
}
