"use client"

import { motion } from "framer-motion"

export function StepSection({ stepNumber, title, description, titleColor, reverse = false }) {
  const getStepImage = (step) => {
    switch (step) {
      case "1":
        return "Frame 35020.png"
      case "2":
        return "Frame 35025.png"
      case "3":
        return "Frame 35026.png"
      case "4":
        return "Frame 35027.png"
      default:
        return "Frame 35020.png"
    }
  }

  // Animation variants
  const imageVariants = {
    hidden: { y: 80, scale: 0.95, opacity: 0 },
    visible: { y: 0, scale: 1, opacity: 1, transition: { duration: 1.2, delay: 0.8 } },
  }

  const textVariants = {
    hidden: { x: reverse ? 80 : -80, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, type: "spring", stiffness: 80 } },
  }

  const stepVariants = {
    hidden: { y: -5, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.2 } },
  }

  const titleVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.4 } },
  }

  const descriptionVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.6 } },
  }

  return (
    <motion.section
      className="py-20 px-4 relative overflow-hidden  bg-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:grid-flow-col-dense" : ""}`}>
          <div className={`flex justify-center ${reverse ? "lg:col-start-2" : ""}`}>
            <motion.div variants={imageVariants}>
              <img
                src={getStepImage(stepNumber) || "/placeholder.svg"}
                alt={`Step ${stepNumber}: ${title}`}
                className="w-full h-auto max-w-md mx-auto transform hover:scale-105 hover:animate-phone-hover transition-all duration-500"
              />
            </motion.div>
          </div>

          <motion.div
            className={`space-y-6 ${reverse ? "lg:col-start-1" : ""}`}
            variants={textVariants}
          >
            <div className="text-center lg:text-left">
              <motion.div
                className="text-sm text-gray-400 font-medium tracking-wider"
                variants={stepVariants}
              >
                STEP {stepNumber} :
              </motion.div>
              <motion.h2
                className={`text-3xl md:text-4xl lg:text-5xl font-bold ${titleColor} leading-tight`}
                variants={titleVariants}
              >
                {title}
              </motion.h2>
              <motion.p
                className="text-lg text-gray-300 leading-relaxed max-w-2xl"
                variants={descriptionVariants}
              >
                {description}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}