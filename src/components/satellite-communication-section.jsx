"use client"

import { motion } from "framer-motion"

export function SatelliteCommunicationSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const satelliteVariants = {
    hidden: { y: -200, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } },
  };

  const signalVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: [0, 1, 0], // Animate opacity to create a pulse effect
      transition: { duration: 2, repeat: Infinity, ease: "linear" },
    },
  };

  const towerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, type: "spring", stiffness: 100 } },
  };

  const dishVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, type: "spring", stiffness: 100 } },
  };

  const starVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      className="relative py-20 px-4 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main illustration container */}
        <div className="relative w-full h-96 md:h-[500px] bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 rounded-2xl overflow-hidden">
          {/* Stars background */}
          <motion.div className="absolute inset-0">
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                variants={starVariants}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 70}%`,
                  transitionDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </motion.div>

          {/* Satellite */}
          <motion.div
            className="absolute top-8 left-1/2 transform -translate-x-1/2"
            variants={satelliteVariants}
          >
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
                  <motion.div
                    key={i}
                    className="absolute border-2 border-red-500 rounded-full"
                    variants={signalVariants}
                    transition={{ delay: i * 0.5 }}
                    style={{
                      width: `${i * 20}px`,
                      height: `${i * 10}px`,
                      left: `${-i * 10}px`,
                      top: `${i * 5}px`,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Communication towers */}
          <div className="absolute bottom-20 left-8 md:left-16 flex space-x-4">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="relative"
                variants={towerVariants}
                transition={{ delay: 0.5 + i * 0.2 }}
              >
                {/* Tower structure and lights */}
                <div className="relative">
                  <div className="w-1 bg-gray-400" style={{ height: `${60 + i * 20}px` }} />
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Satellite dishes */}
          <div className="absolute bottom-20 right-8 md:right-16 flex space-x-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="relative"
                variants={dishVariants}
                transition={{ delay: 0.8 + i * 0.2 }}
              >
                {/* Dish structure and lights */}
                <div className="relative">
                  <div
                    className="bg-gray-300 rounded-full border-4 border-gray-400"
                    style={{
                      width: `${40 + i * 5}px`,
                      height: `${20 + i * 2}px`,
                      transform: "perspective(100px) rotateX(60deg)",
                    }}
                  />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-400" />
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gray-400" />
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Earth surface */}
          <div className="absolute bottom-0 left-0 right-0 h-16">
            <div className="w-full h-full bg-gradient-to-r from-green-500 via-blue-500 to-green-500 rounded-b-2xl opacity-80" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}