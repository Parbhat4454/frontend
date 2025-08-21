import { TopicHeroLogo } from "@/components/topic-hero-logo"

export function HowItWorksSection() {
  return (
    <section className="py-20 px-4 relative bg-black">
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

        <div className="flex justify-center animate-fade-in-up delay-500">
          <div className="relative max-w-4xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2035020-ciX3UHb4SqZXd4jGhpEdTcyNWbhEYu.png"
              alt="Topic Hero phone mockups showing different topic categories"
              className="w-full h-auto max-w-3xl mx-auto transform hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
