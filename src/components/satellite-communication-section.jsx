'use client'
import { motion } from "framer-motion";
export function SatelliteCommunicationSection() {



  return (
    <section
      
      className="relative pt-20 px-4 overflow-hidden flex justify-center items-center "
    >
      <motion.div initial={{  opacity: 0 }}
      whileInView={{  opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }} className="relative w-full max-w-6xl  shadow-2xl overflow-hidden">
        <video
          className=" w-full h-full"
          src="Topic Hero-Final_compressed.mp4"
        ></video>
      </motion.div>
    </section>
  );
}