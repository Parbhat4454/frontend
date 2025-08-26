
'use client'
import { motion } from "framer-motion";


export function HowItWorksSection() {


  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  const titleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
  };



  return (
    <div
      className="relative pt-70 lg:pt-110 px-4"
    >


      <div className="bg-transparent max-w-7xl mx-auto  ">
        {/* Header */}
        <div className="text-center">
          <motion.div initial={{ y: 500, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }} className="flex justify-center" variants={logoVariants}>
            <img
              src="Logo PNG.png"
              alt="Topic Hero Logo"
              className=" w-[100px] h-[100px]  opacity-100"
            />
          </motion.div>
          <motion.div
            initial={{  opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-6 font-semibold text-[34px] leading-[46px] tracking-[3px] text-center normal-case small-caps"
            variants={titleVariants}
          >
            HOW IT WORKS
          </motion.div>
        </div>

      </div>
    </div>
  );
}