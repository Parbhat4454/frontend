import { TopicHeroLogo } from "@/components/topic-hero-logo"

export function HowItWorksSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-900 rounded-full opacity-40 animate-float shadow-2xl">
          <div className="absolute top-2 left-2 w-4 h-4 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
        </div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-br from-gray-600 via-gray-500 to-gray-800 rounded-full opacity-30 animate-float delay-1000 shadow-2xl">
          <div className="absolute top-3 left-3 w-6 h-6 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-lime-400 rounded-full animate-pulse delay-300 shadow-lg"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-red-400 rounded-full animate-bounce delay-700 shadow-lg"></div>
        <div className="absolute top-2/3 left-1/5 w-4 h-4 bg-blue-400 rounded-full animate-pulse delay-1000 shadow-lg"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-20">
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r from-transparent via-gray-600 to-transparent transform skew-y-1 animate-pulse"></div>
          <div className="absolute bottom-4 left-0 w-full h-8 bg-gradient-to-r from-transparent via-gray-500 to-transparent transform -skew-y-1 animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="mb-6 animate-fade-in">
            <TopicHeroLogo />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-fade-in-up delay-300">
            HOW IT WORKS
          </h2>
        </div>

        {/* <div className="flex justify-center animate-fade-in-up delay-500">
          <div className="relative max-w-4xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2035020-ciX3UHb4SqZXd4jGhpEdTcyNWbhEYu.png"
              alt="Topic Hero phone mockups showing different topic categories"
              className="w-full h-auto max-w-3xl mx-auto transform hover:scale-105 transition-all duration-500"
            />
          </div>
        </div> */}
      </div>
    </section>
  )
}
