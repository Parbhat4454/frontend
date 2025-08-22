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
  className="relative py-20 px-4 overflow-hidden flex justify-center items-center min-h-screen"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  <div className="relative w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden">
    <motion.video
      className="w-full h-full"
      src="Topic Hero-Final.mp4"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      controls
      loop
      muted
      autoplay
    ></motion.video>
  </div>
</motion.section>
  );
}