"use client"

import { TopicHeroLogo } from "@/components/topic-hero-logo"
import { motion } from "framer-motion"

export function HowItWorksSection() {
const containerVariants = {
hidden: { opacity: 0 },
visible: {
opacity: 1,
transition: {
delayChildren: 0.3,
staggerChildren: 0.2,
},
},
};

const logoVariants = {
hidden: { scale: 0.8, opacity: 0 },
visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

const titleVariants = {
hidden: { y: 20, opacity: 0 },
visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
};

const backgroundShapeVariants = {
hidden: { opacity: 0, scale: 0.5, y: 20 },
visible: { opacity: 0.4, scale: 1, y: 0, transition: { duration: 1, type: "spring", stiffness: 80 } },
};

const pulseVariant = {
hidden: { opacity: 0, scale: 0.8 },
visible: { opacity: 1, scale: 1, transition: { duration: 0.6, repeat: Infinity, repeatType: "reverse" } },
};

const bounceVariant = {
hidden: { opacity: 0, y: -10 },
visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring", damping: 10 } },
};

const gradientWaveVariants = {
hidden: { opacity: 0, y: 10 },
visible: { opacity: 0.2, y: 0, transition: { duration: 1.2, repeat: Infinity, repeatType: "mirror" } },
};

return (
<motion.section
className="py-20 px-4 relative"
variants={containerVariants}
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
>
<motion.div className="absolute inset-0 overflow-hidden">
<motion.div
className="absolute top-1/4 left-10 w-24 h-24 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-900 rounded-full shadow-2xl"
variants={backgroundShapeVariants}
>
<motion.div className="absolute top-2 left-2 w-4 h-4 bg-gradient-to-br from-white/30 to-transparent rounded-full" />
</motion.div>
<motion.div
className="absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-br from-gray-600 via-gray-500 to-gray-800 rounded-full shadow-2xl"
variants={backgroundShapeVariants}
transition={{ delay: 0.5 }}
>
<motion.div className="absolute top-3 left-3 w-6 h-6 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
</motion.div>
<motion.div
className="absolute top-1/3 right-1/4 w-3 h-3 bg-lime-400 rounded-full shadow-lg"
variants={pulseVariant}
transition={{ delay: 0.3 }}
/>
<motion.div
className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-red-400 rounded-full shadow-lg"
variants={bounceVariant}
transition={{ delay: 0.7 }}
/>
<motion.div
className="absolute top-2/3 left-1/5 w-4 h-4 bg-blue-400 rounded-full shadow-lg"
variants={pulseVariant}
transition={{ delay: 1.0 }}
/>
<motion.div className="absolute bottom-0 left-0 w-full h-32 opacity-20">
<motion.div
className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r from-transparent via-gray-600 to-transparent transform skew-y-1"
variants={gradientWaveVariants}
/>
<motion.div
className="absolute bottom-4 left-0 w-full h-8 bg-gradient-to-r from-transparent via-gray-500 to-transparent transform -skew-y-1"
variants={gradientWaveVariants}
transition={{ delay: 0.5 }}
/>
</motion.div>
</motion.div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Header */}
    <div className="text-center mb-16">
      <motion.div className="mb-6" variants={logoVariants}>
        <TopicHeroLogo />
      </motion.div>
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
        variants={titleVariants}
      >
        HOW IT WORKS
      </motion.h2>
    </div>

    {/* <div className="flex justify-center">
      <motion.div
        className="relative max-w-4xl"
        variants={imageVariants}
      >
        <img
          src="[https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2035020-ciX3UHb4SqZXd4jGhpEdTcyNWbhEYu.png](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2035020-ciX3UHb4SqZXd4jGhpEdTcyNWbhEYu.png)"
          alt="Topic Hero phone mockups showing different topic categories"
          className="w-full h-auto max-w-3xl mx-auto transform hover:scale-105 transition-all duration-500"
        />
      </motion.div>
    </div> */}
  </div>
</motion.section>
);
}