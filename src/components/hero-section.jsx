"use client"

import { Button } from "@/components/ui/button"
import { TopicHeroLogo } from "@/components/topic-hero-logo"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export const  HeroSection = ()=> {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-black"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-1/3 right-1/4 w-4 h-4 bg-red-400 rounded-full transition-all duration-1000 delay-700 ${isVisible ? "animate-pulse translate-y-0" : "-translate-y-10 opacity-0"}`}
        ></div>
        <div
          className={`absolute bottom-1/4 right-1/3 w-6 h-6 bg-lime-400 rounded-full transition-all duration-1000 delay-900 ${isVisible ? "animate-bounce translate-x-0" : "-translate-x-20 opacity-0"}`}
        ></div>
      </div>

      {/* Navigation */}
      <nav
        className={`absolute top-8 left-0 right-0 flex justify-between items-center px-6 md:px-12 z-10 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
      >
        <Button
          variant="outline"
          className="border-gray-600 text-white hover:bg-gray-800 rounded-full px-6 bg-transparent"
        >
          HOME
        </Button>
        <Button
          variant="outline"
          className="border-gray-600 text-white hover:bg-gray-800 rounded-full px-6 bg-transparent"
        >
          CONTACT US
        </Button>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div
          className={`mb-8 transition-all duration-1000 delay-200 ${isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
        >
          <TopicHeroLogo />
        </div>

        {/* Tagline */}
        <div
          className={`mb-6 transition-all duration-1000 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <span className="inline-flex items-center gap-2 text-sm md:text-base text-gray-300 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
            <span className="text-yellow-400">⚡</span>
            Introducing AI Automation
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
        >
          <span className="text-lime-400">SWIPE.</span> <span className="text-red-400">DEBATE.</span>{" "}
          <span className="text-emerald-400">DISCOVER.</span>
          <br />
          <span className="text-white text-3xl md:text-5xl lg:text-6xl">AI-POWERED TOPIC BATTLES.</span>
        </h1>

        {/* Description */}
        <p
          className={`text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
        >
          Pick your topics, spin into argument duels, and uncover fresh perspectives—AI delivers statements that spark
          real, smart discussions
        </p>
      </div>
    </section>
  )
}
