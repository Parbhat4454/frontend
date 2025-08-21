export function SatelliteCommunicationSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main illustration container */}
        <div className="relative w-full h-96 md:h-[500px] bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 rounded-2xl overflow-hidden">
          {/* Stars background */}
          <div className="absolute inset-0">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 70}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          {/* Satellite */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              {/* Satellite body */}
              <div className="w-12 h-8 bg-gray-300 rounded-sm relative">
                {/* Solar panels */}
                <div className="absolute -left-6 top-1 w-5 h-6 bg-blue-400 opacity-80 rounded-sm"></div>
                <div className="absolute -right-6 top-1 w-5 h-6 bg-blue-400 opacity-80 rounded-sm"></div>
              </div>

              {/* Signal waves */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="absolute border-2 border-red-500 rounded-full animate-ping"
                    style={{
                      width: `${i * 20}px`,
                      height: `${i * 10}px`,
                      left: `${-i * 10}px`,
                      top: `${i * 5}px`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: "2s",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Communication towers */}
          <div className="absolute bottom-20 left-8 md:left-16">
            {[1, 2, 3].map((i) => (
              <div key={i} className="absolute" style={{ left: `${i * 15}px`, bottom: `${i * 10}px` }}>
                {/* Tower structure */}
                <div className="relative">
                  <div className="w-1 bg-gray-400" style={{ height: `${60 + i * 20}px` }} />
                  {/* Tower segments */}
                  {Array.from({ length: 3 }).map((_, j) => (
                    <div
                      key={j}
                      className="absolute w-4 h-px bg-gray-400"
                      style={{
                        top: `${j * 20 + 10}px`,
                        left: "-8px",
                        transform: "rotate(45deg)",
                      }}
                    />
                  ))}
                  {/* Red light */}
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                </div>
              </div>
            ))}
          </div>

          {/* Satellite dishes */}
          <div className="absolute bottom-20 right-8 md:right-16 flex space-x-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative">
                {/* Dish */}
                <div className="relative">
                  <div
                    className="bg-gray-300 rounded-full border-4 border-gray-400"
                    style={{
                      width: `${40 + i * 5}px`,
                      height: `${20 + i * 2}px`,
                      transform: "perspective(100px) rotateX(60deg)",
                    }}
                  />
                  {/* Support structure */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-400" />
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gray-400" />

                  {/* Red indicator light */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                </div>
              </div>
            ))}
          </div>

          {/* Earth surface */}
          <div className="absolute bottom-0 left-0 right-0 h-16">
            <div className="w-full h-full bg-gradient-to-r from-green-500 via-blue-500 to-green-500 rounded-b-2xl opacity-80" />
            {/* Surface texture */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-600 to-transparent opacity-50" />
          </div>

          {/* Additional atmospheric effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-20" />
        </div>
      </div>
    </section>
  )
}
