'use client'
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"

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
    <motion.div
      className=" mt-56 px-4 relative h-[85vh]"
      initial={{ y:300, opacity: 0 }}
      whileInView={{ y:0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Background Elements */}
      <div
        className="absolute inset-0 overflow-hidden"
        variants={backgroundVariants}
      >
        
      </div>

      <div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
      >
        {/* App Store Buttons */}
        <div
          className="scale-75 flex flex-col sm:flex-row gap-16 justify-center items-center mb-12"
          variants={itemVariants}
        >
          <Button
            variant="secondary"
            className="bg-white text-black rounded-xl px-6 py-2 h-auto flex items-center gap-3 min-w-[210px] shadow-lg transition-all duration-300"
          >
            <div className="scale-250 relative w-8 h-8 flex items-center justify-center">
              <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6809 0C18.7436 0 18.8062 0 18.8724 0C19.0261 1.97462 18.3014 3.45005 17.4206 4.51851C16.5564 5.57959 15.373 6.6087 13.459 6.45255C13.3313 4.50621 14.0572 3.14021 14.9368 2.07421C15.7525 1.08075 17.248 0.196724 18.6809 0Z" fill="black" />
                <path d="M24.4748 20.5527C24.4748 20.5724 24.4748 20.5896 24.4748 20.6081C23.9369 22.3024 23.1696 23.7544 22.2333 25.102C21.3785 26.3254 20.3311 27.9717 18.4608 27.9717C16.8446 27.9717 15.7712 26.891 14.1149 26.8614C12.3628 26.8319 11.3993 27.7651 9.79733 28C9.61408 28 9.43084 28 9.25114 28C8.07481 27.8229 7.12547 26.8541 6.43386 25.9811C4.39451 23.4016 2.81859 20.0695 2.52539 15.8055C2.52539 15.3875 2.52539 14.9707 2.52539 14.5527C2.64953 11.501 4.0753 9.01979 5.97043 7.81731C6.9706 7.17796 8.34554 6.63328 9.87654 6.87672C10.5327 6.98246 11.203 7.21607 11.7906 7.44722C12.3474 7.66977 13.0437 8.06444 13.7034 8.04354C14.1503 8.03002 14.5948 7.7878 15.0453 7.6169C16.3647 7.1214 17.658 6.55336 19.3628 6.82016C21.4116 7.1423 22.8658 8.08904 23.7643 9.54971C22.0311 10.6969 20.6609 12.4256 20.895 15.3777C21.1031 18.0593 22.6021 19.6281 24.4748 20.5527Z" fill="black" />
              </svg>

            </div>
            <div className="text-left">
              <div className="font-poppins font-semibold text-[14.12px] leading-[26.98px] tracking-normal text-center normal-case small-caps">Download on the</div>
              <div className="font-poppins font-semibold text-[24.11px] leading-[26.98px] tracking-normal text-center normal-case small-caps">App Store</div>
            </div>
          </Button>

          <Button
            variant="secondary"
            className="bg-white text-black rounded-xl px-6 py-3 h-auto flex items-center gap-3 min-w-[230px] shadow-lg transition-all duration-300"
          >
            {/* Google Play Logo using CSS */}
            <div className="scale-250 relative w-8 h-8 flex items-center justify-center">
              <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.6783 15.4007L23.9365 12.6619L19.082 17.5164L23.9362 22.3706L28.6944 19.6227C29.4364 19.1719 29.8792 18.3844 29.8792 17.5164C29.8792 16.6484 29.4361 15.8609 28.6783 15.4007Z" fill="#FFCE00" />
                <path d="M19.082 17.5164L5.85932 4.19859C5.39942 4.65849 5.12012 5.28254 5.12012 5.97239V29.0199C5.12012 29.7097 5.39942 30.3338 5.85932 30.794L19.082 17.5164Z" fill="url(#paint0_linear_325_513)" />
                <path d="M19.082 17.5164L23.9365 12.6619L23.9442 12.6542L17.4398 8.90925L8.86552 3.86995C8.09342 3.3936 7.15717 3.37715 6.36862 3.8206C6.18802 3.9354 6.02352 4.05055 5.85938 4.19825L19.082 17.5164Z" fill="#00F076" />
                <path d="M5.85938 30.7937C6.02353 30.9414 6.18802 31.0565 6.36862 31.1713C6.76273 31.3848 7.17362 31.5 7.58417 31.5C8.02762 31.5 8.45463 31.3688 8.84908 31.1388L17.4395 26.1236L23.9439 22.3786L23.9362 22.3709L19.082 17.5164L5.85938 30.7937Z" fill="#F63448" />
                <defs>
                  <linearGradient id="paint0_linear_325_513" x1="-0.789283" y1="24.1451" x2="12.5083" y2="10.8472" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00E2FF" />
                    <stop offset="1" stopColor="#00C5FF" />
                  </linearGradient>
                </defs>
              </svg>

              {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-green-500 to-yellow-500 rounded-sm transform rotate-45"></div>
                <div className="absolute inset-1 bg-white rounded-sm"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-red-500 via-yellow-500 to-green-500 rounded-sm"></div> */}
            </div>
            <div className="text-left">
              <div className="font-poppins font-semibold text-[12.12px] leading-[26.98px] tracking-normal  normal-case small-caps">GET IT ON</div>
              <div className="font-poppins font-semibold text-[23.11px] leading-[26.98px] tracking-normal text-center normal-case small-caps">Google Play</div>
            </div>
          </Button>
        </div>

        {/* Privacy Policy Button */}
        <div  className="mb-8 " variants={itemVariants}>
          <Button
            variant="outline"
            className="w-[225px] h-[48px]  opacity-100 rounded-[50px] px-[44px] gap-[10px] font-poppins font-semibold text-[16px] leading-[48px] tracking-normal text-center normal-case small-caps border-gray-600 text-white hover:bg-[#6e777133]"
          >
            <p className="">PRIVACY POLICY</p>

          </Button>
        </div>

        {/* Copyright */}
        <p className="font-medium text-base leading-6 tracking-normal text-center" variants={itemVariants}>
          Copyright © 2023 Topic Hero - All Rights Reserved.
        </p>
      </div>
    </motion.div >
  );
}