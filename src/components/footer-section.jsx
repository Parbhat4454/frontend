"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function FooterSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the animation of child elements
        delayChildren: 0.3, // Add an initial delay to the children
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  const backgroundVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeInOut" } },
  };

  return (
    <motion.footer
      className="py-20 px-4 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Animate once when 20% of the element is visible
    >
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        variants={backgroundVariants}
      >
        <div className="absolute bottom-0 left-0 w-full h-64">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gray-800/30 to-transparent rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-l from-gray-700/20 to-transparent transform skew-y-3"></div>
        </div>
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
      >
        {/* App Store Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          variants={itemVariants}
        >
          <Button
            variant="secondary"
            className="bg-white text-black rounded-xl px-6 py-3 h-auto flex items-center gap-3 min-w-[200px] shadow-lg transition-all duration-300"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              {/* Apple Logo using CSS */}
              <div className="relative">
                <div className="w-6 h-7 bg-black rounded-t-full rounded-bl-full transform rotate-12 relative">
                  <div className="absolute -top-1 right-1 w-2 h-2 bg-black rounded-full transform -rotate-45"></div>
                  <div className="absolute top-1 right-0 w-1 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-600">Download on the</div>
              <div className="text-lg font-semibold">App Store</div>
            </div>
          </Button>

          <Button
            variant="secondary"
            className="bg-white text-black rounded-xl px-6 py-3 h-auto flex items-center gap-3 min-w-[200px] shadow-lg transition-all duration-300"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              {/* Google Play Logo using CSS */}
              <div className="relative w-6 h-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-green-500 to-yellow-500 rounded-sm transform rotate-45"></div>
                <div className="absolute inset-1 bg-white rounded-sm"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-red-500 via-yellow-500 to-green-500 rounded-sm"></div>
              </div>
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-600">GET IT ON</div>
              <div className="text-lg font-semibold">Google Play</div>
            </div>
          </Button>
        </motion.div>

        {/* Privacy Policy Button */}
        <motion.div className="mb-8" variants={itemVariants}>
          <Button
            variant="outline"
            className="border-gray-600 text-white hover:bg-gray-800 rounded-full px-8 py-2 bg-transparent"
          >
            PRIVACY POLICY
          </Button>
        </motion.div>

        {/* Copyright */}
        <motion.p className="text-gray-400 text-sm" variants={itemVariants}>
          Copyright © 2023 Topic Hero - All Rights Reserved.
        </motion.p>
      </motion.div>
    </motion.footer>
  );
}