"use client"

import { Button } from "@/components/ui/button"
import { TopicHeroLogo } from "@/components/topic-hero-logo"
import { motion } from "framer-motion" // Import motion

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-black">
      {/* Background shapes using motion */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 right-1/4 w-4 h-4 bg-red-400 rounded-full"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          whileInView={{ scale: 1.2, transition: { repeat: Infinity, repeatType: "reverse", duration: 1.5 } }} // A pulse animation
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-lime-400 rounded-full"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          whileInView={{ y: [0, -10, 0], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } }} // A bounce animation
        />
      </div>

      {/* Navigation */}
      <motion.nav
        className="absolute top-8 left-0 right-0 flex justify-between items-center px-6 md:px-12 z-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
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
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <TopicHeroLogo />
        </motion.div>

        {/* Tagline */}
        <motion.div
          className="mb-6"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span className="inline-flex items-center gap-2 text-sm md:text-base text-gray-300 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
            <span className="text-yellow-400">⚡</span>
            Introducing AI Automation
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <span className="text-lime-400">SWIPE.</span> <span className="text-red-400">DEBATE.</span>{" "}
          <span className="text-emerald-400">DISCOVER.</span>
          <br />
          <span className="text-white text-3xl md:text-5xl lg:text-6xl">AI-POWERED TOPIC BATTLES.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Pick your topics, spin into argument duels, and uncover fresh perspectives—AI delivers statements that spark
          real, smart discussions
        </motion.p>
      </div>
    </section>
  )
}