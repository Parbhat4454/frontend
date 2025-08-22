"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"


  const getStepImage = (step) => {
    switch (step) {
      case "1":
        return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2035020-ciX3UHb4SqZXd4jGhpEdTcyNWbhEYu.png"
      case "2":
        return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2035025-aM8hiRZWXhzTGt0jstfbGt9iL5zw70.png"
      case "3":
        return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2035026-FDA4w7NJDasIfaygDRMQ4JfejrJYF7.png"
      case "4":
        return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2035027-e1zMg2cKbHqHA1s8whJj8bfQR0aTkh.png"
      default:
        return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2035020-ciX3UHb4SqZXd4jGhpEdTcyNWbhEYu.png"
    }
  }

export function StepSection({ stepNumber, title, description, titleColor, reverse = false }) {
  const { ref, isVisible } = useScrollAnimation(0.2)



  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden min-h-screen bg-black">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:grid-flow-col-dense" : ""}`}>
          <div className={`flex justify-center ${reverse ? "lg:col-start-2" : ""}`}>
            <div
              className={`relative transition-all duration-1200 delay-800 ${isVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-20 scale-95 opacity-0"}`}
            >
              <img
                src={getStepImage(stepNumber) || "/placeholder.svg"}
                alt={`Step ${stepNumber}: ${title}`}
                className="w-full h-auto max-w-md mx-auto transform hover:scale-105 hover:animate-phone-hover transition-all duration-500"
              />
            </div>
          </div>

          <div
            className={`space-y-6 ${reverse ? "lg:col-start-1" : ""} transition-all duration-1000 ${isVisible ? (reverse ? "translate-x-0" : "translate-x-0") + " opacity-100" : (reverse ? "translate-x-20" : "-translate-x-20") + " opacity-0"}`}
          >
            <div className="text-center lg:text-left">
              <div
                className={`text-sm text-gray-400 font-medium tracking-wider transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}`}
              >
                STEP {stepNumber} :
              </div>
              <h2
                className={`text-3xl md:text-4xl lg:text-5xl font-bold ${titleColor} leading-tight transition-all duration-1000 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                {title}
              </h2>
              <p
                className={`text-lg text-gray-300 leading-relaxed max-w-2xl transition-all duration-1000 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
