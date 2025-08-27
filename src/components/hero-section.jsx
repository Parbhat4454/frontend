

'use client'
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"
import '../app/globals.css'

const HeroSection = () => {
  return (
    <div >
      <div
        className=" mx-2 md:mx-0 relative flex  text-center  justify-between md:pt-[19px] md:pl-[80px] pt-10 "
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Button
            variant="outline"
            className="w-[139px] h-[48px] px-6 py-2 border-gray-600 text-white hover:bg-[#6e777133] rounded-full pr-[44px] pl-[44px] bg-transparent font-small leading-[48px] tracking-normal text-center normal-case small-caps"
          >
            HOME
          </Button>
        </motion.div>


        <img
          src="Logo PNG.png"
          alt="Topic Hero Logo"
          className="hidden md:block absolute top-[72px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[166px] h-[160px]"
        />

        <motion.div
          initial={{ x: -300, y: 300, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Button

            variant="outline"

            className=" w-[192px] md:mr-[81px] py-2    h-[48px]    border-gray-600 text-white hover:bg-[#6e777133] rounded-full px-6 bg-transparent    font-small leading-[48px] tracking-wider text-center normal-case small-caps"
          >
            CONTACT US
          </Button>
        </motion.div>

      </div>

      <div className="flex justify-center items-center">
        <img
          src="Logo PNG.png"
          alt="Topic Hero Logo"
          className="mt-5 sm:block md:hidden  block w-[166px] h-[160px]"
        />

      </div>


      {/* Main Content */}
      <div className=" relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div
          className="mb-8"
        >

        </div>

        {/* Tagline */}
        <div
          className="mt-[123px] mb-6"
        >
          <span className="inline-flex items-center gap-2 text-sm md:text-base text-gray-300  px-4 pt-2 rounded-full ">
            <span className="text-yellow-400 text-base leading-6 tracking-normal"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.50001 2.73333L2.83334 3.66666L3.76668 1.99999L2.83334 0.333328L4.50001 1.26666L6.16668 0.333328L5.23334 1.99999L6.16668 3.66666L4.50001 2.73333ZM12.5 9.26666L14.1667 8.33333L13.2333 10L14.1667 11.6667L12.5 10.7333L10.8333 11.6667L11.7667 10L10.8333 8.33333L12.5 9.26666ZM14.1667 0.333328L13.2333 1.99999L14.1667 3.66666L12.5 2.73333L10.8333 3.66666L11.7667 1.99999L10.8333 0.333328L12.5 1.26666L14.1667 0.333328ZM8.39334 7.51999L10.02 5.89333L8.60668 4.48L6.98001 6.10666L8.39334 7.51999ZM9.08001 3.85999L10.64 5.42C10.9 5.66666 10.9 6.1 10.64 6.35999L2.86001 14.14C2.60001 14.4 2.16668 14.4 1.92001 14.14L0.360009 12.58C0.100009 12.3333 0.100009 11.9 0.360009 11.64L8.14001 3.85999C8.40001 3.59999 8.83334 3.59999 9.08001 3.85999Z" fill="#A6CF08" />
            </svg>
            </span>
            Introducing AI Automation
          </span>
        </div>

        {/* Main Headline */}
        <motion.div
          initial={{ x: -100, y: -100, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="tracking-wide text-3xl md:text-4xl lg:text-2xl font-bold mb-3"
        >
          <span className="text-[#a6cf08] font-bold text-[34px] leading-[46px] tracking-widest text-center normal-case small-caps">SWIPE.</span> <span className="text-[#FF5654]  font-bold text-[34px] leading-[46px] tracking-widest text-center normal-case small-">DEBATE.</span>{" "}
          <span className="text-[#47CA8C]  font-bold text-[34px] leading-[46px] tracking-widest text-center normal-case small-">DISCOVER.</span>
          <br />
          <span className="text-white  font-bold text-[34px] leading-[46px] tracking-[3px] text-center normal-case small-">AI-POWERED TOPIC BATTLES.</span>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-montserrat mt-[4px] text-[19px] tracking-[2px] md:text-[15px] text-gray-300 max-w-3xl mx-auto font-thin custom-word-spacing"
        >
          Pick your topics, spin into argument duels, and uncover fresh perspectives—AI delivers statements that spark
          real, smart discussions
        </motion.div>
      </div>
    </div>
  )
}
export default HeroSection;
