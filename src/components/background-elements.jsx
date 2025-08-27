'use client'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function BackgroundElements() {

  const [finalStyleSheet, setFinalStyleSheet] = useState({
    transform: 'scale(1.1) translateY(0px) translateX(0px)',
  });



  useEffect(() => {
    //first stage scale(01.1) translateY(0px) translateX(0px)
    // second stage scale(0.9) translateY(190px) translateX(84px)
    // third stage scale(0.8) translateY(196px) translateX(557px)
    // fourth stage scale(0.78) translateY(279px) translateX(207px)
    // fifth stage scale(0.78) translateY(359px) translateX(192px)
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Define the end of each stage in pixels
      const stage1End = viewportHeight;
      const stage2End = viewportHeight * 2;
      const stage3End = viewportHeight * 3;
      const stage4End = viewportHeight * 4;
      const stage5End = viewportHeight * 4;
      const stage6End = viewportHeight * 5;





      let newTransform; // Declare the variable here

      // --- STAGE 1: 0vh to 100vh ---
      if (scrollY <= stage1End) {
        // Normalize progress for Stage 1 (0 to 1)
        const progress = Math.min(1, scrollY / stage1End);

        // Interpolate between start and end values for each property
        const scaleValue = 1.1 + (1.3 - 1.1) * progress; // Example scale transition
        const translateY = 0 + (-54 - 0) * progress; // Example translateY transition
        const translateX = 0 + (518 - 0) * progress; // Example translateX transition

        newTransform = `scale(${scaleValue}) translateY(${translateY}px) translateX(${translateX}px)`;
      }

      // --- STAGE 2: 100vh to 200vh ---
      else if (scrollY > stage1End && scrollY <= stage2End) {
        // Normalize progress for Stage 2 (0 to 1)
        const progress = Math.min(1, (scrollY - stage1End) / (stage2End - stage1End));

        const scaleValue = 1.3 + (0.9 - 1.3) * progress; // Example scale transition
        const translateY = -54 + (190 + 54) * progress; // Example translateY transition
        const translateX = 518 + (84 - 518) * progress; // Example translateX transition

        newTransform = `scale(${scaleValue}) translateY(${translateY}px) translateX(${translateX}px)`;
      }// --- STAGE 3
      else if (scrollY > stage2End && scrollY <= stage3End) {
        // Normalize progress for Stage 2 (0 to 1)
        const progress = Math.min(1, (scrollY - stage2End) / (stage3End - stage2End));

        const scaleValue = 0.9 + (0.8 - 0.9) * progress; // Example scale transition
        const translateY = 190 + (196 - 190) * progress; // Example translateY transition
        const translateX = 84 + (557 - 84) * progress; // Example translateX transition

        newTransform = `scale(${scaleValue}) translateY(${translateY}px) translateX(${translateX}px)`;
      }
      // --- STAGE 4
      else if (scrollY > stage3End && scrollY <= stage4End) {
        // Normalize progress for Stage 2 (0 to 1)
        const progress = Math.min(1, (scrollY - stage3End) / (stage4End - stage3End));

        const scaleValue = 0.8 + (0.78 - 0.8) * progress; // Example scale transition
        const translateY = 196 + (279 - 196) * progress; // Example translateY transition
        const translateX = 557 + (207 - 557) * progress; // Example translateX transition

        newTransform = `scale(${scaleValue}) translateY(${translateY}px) translateX(${translateX}px)`;
      }
      // --- STAGE 5
      else if (scrollY > stage4End && scrollY <= stage5End) {
        // Normalize progress for Stage 2 (0 to 1)
        const progress = Math.min(1, (scrollY - stage4End) / (stage5End - stage4End));

        const scaleValue = 0.78 + (0.78 - 0.78) * progress; // Example scale transition
        const translateY = 279 + (359 - 279) * progress; // Example translateY transition
        const translateX = 207 + (192 - 207) * progress; // Example translateX transition

        newTransform = `scale(${scaleValue}) translateY(${translateY}px) translateX(${translateX}px)`;
      }

      // --- STAGE 5
      else if (scrollY > stage5End && scrollY <= stage6End) {
        // Normalize progress for Stage 2 (0 to 1)
        const progress = Math.min(1, (scrollY - stage5End) / (stage6End - stage5End));

        const scaleValue = 0.78 + (1.1 - 0.78) * progress; // Example scale transition
        const translateY = 359 + (0 - 359) * progress; // Example translateY transition
        const translateX = 192 + (0 - 192) * progress; // Example translateX transition

        newTransform = `scale(${scaleValue}) translateY(${translateY}px) translateX(${translateX}px)`;
      }


      // --- After STAGE 2: Lock into final state ---
      else {
        newTransform = 'scale(1.5) translateY(100px) translateX(160px)';
      }

      setFinalStyleSheet({ transform: newTransform });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);






  const [finalStyleSphere, setFinalStyleSphere] = useState({
    transform: 'scale(0.9) translateY(275px) translateX(-222px)',
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Define the end of each stage
      const stage1End = viewportHeight;
      const stage2End = viewportHeight * 2;
      const stage3End = viewportHeight * 3;
      const stage4End = viewportHeight * 4;
      const stage5End = viewportHeight * 5;
      const stage6End = viewportHeight * 6;

      let newTransform; // Declare the variable here

      // --- STAGE 1: 0vh to 100vh ---
      if (scrollY <= stage1End) {
        const progress = Math.min(1, scrollY / stage1End);
        const scaleValue = 0.9 + (0.54 - 0.9) * progress;
        const translateY = 275 + (1395.6667 - 275) * progress;
        const translateX = -222 + (924.654 - (-222)) * progress;
        newTransform = `scale(${scaleValue}) translateY(${translateY}px) translateX(${translateX}px)`;
      }

      // --- STAGE 2: 100vh to 200vh ---
      else if (scrollY > stage1End && scrollY <= stage2End) {
        const progress = Math.min(1, (scrollY - stage1End) / (stage2End - stage1End));
        const scaleValue = 0.54 + (0.62 - 0.54) * progress;
        const translateY = 1395.6667 + (13.6049 - 1395.6667) * progress;
        const translateX = 924.654 + (-290.457 - 924.654) * progress;
        newTransform = `scale(${scaleValue}) translateY(${translateY}px) translateX(${translateX}px)`;
      }

      // --- STAGE 3: 200vh to 300vh ---
      else if (scrollY > stage2End && scrollY <= stage3End) {
        const progress = Math.min(1, (scrollY - stage2End) / (stage3End - stage2End));
        const scaleValue = 0.62 + (0.865432 - 0.62) * progress;
        const translateY = 13.6049 + (726.074 - 13.6049) * progress;
        const translateX = -290.457 + (493.506 - (-290.457)) * progress;
        newTransform = `scale(${scaleValue}) translateY(${translateY}px) translateX(${translateX}px)`;
      }

      // --- STAGE 4: 300vh to 400vh ---
      else if (scrollY > stage3End && scrollY <= stage4End) {
        const progress = Math.min(1, (scrollY - stage3End) / (stage4End - stage3End));
        const scaleValue = 0.865432 + (0.698272 - 0.865432) * progress;
        const translateY = 726.074 + (349.173 - 726.074) * progress;
        const translateX = 493.506 + (887.753 - 493.506) * progress;
        newTransform = `scale(${scaleValue}) translateY(${translateY}px) translateX(${translateX}px)`;
      }

      // --- STAGE 5: 400vh to 500vh ---
      else if (scrollY > stage4End && scrollY <= stage5End) {
        const progress = Math.min(1, (scrollY - stage4End) / (stage5End - stage4End));
        const scaleValue = 0.698272 + (0.698272 - 0.698272) * progress; // This animation won't change the scale
        const translateY = 349.173 + (349.173 - 349.173) * progress; // This animation won't change translateY
        const translateX = 887.753 + (-300.753 - 887.753) * progress;
        newTransform = `scale(${scaleValue}) translateY(${translateY}px) translateX(${translateX}px)`;
      }

      // --- STAGE 6: 500vh to 600vh ---
      else if (scrollY > stage5End && scrollY <= stage6End) {
        const progress = Math.min(1, (scrollY - stage5End) / (stage6End - stage5End));
        const scaleValue = 0.698272 + (0.68716 - 0.698272) * progress;
        const translateY = 349.173 + (784.4043 - 349.173) * progress;
        const translateX = -300.753 + (407.7037 - (-300.753)) * progress;
        newTransform = `scale(${scaleValue}) translateY(${translateY}px) translateX(${translateX}px)`;
      }

      // --- Lock into final state after all stages ---
      else {
        // This will be the state after scrolling past stage 6
        newTransform = 'scale(0.68716) translateY(784.4043px) translateX(407.7037px)';
      }

      setFinalStyleSphere({ transform: newTransform });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




  const [finalStyleStars, setFinalStyleStars] = useState({
    transform: 'scale(1) translateY(0px) translateX(0px)',
  });

  useEffect(() => {
    // Stage 0: scale(1) translateY(0px) translateX(0px)
    // Stage 1: scale(1.2) translateY(200px) translateX(120px)
    // Stage 2: scale(1.09) translateY(110px) translateX(-60px)
    // Stage 3: scale(1.4) translateY(20px) translateX(0px) rotate(15deg)
    // Stage 4: scale(1.4) translateY(220px) translateX(180px) rotate(0deg)
    // Stage 5: scale(1) translateY(0px) translateX(0px)
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Define the end of each stage
      const stage1End = viewportHeight;
      const stage2End = viewportHeight * 2;
      const stage3End = viewportHeight * 3;
      const stage4End = viewportHeight * 4;
      const stage5End = viewportHeight * 5;

      let newTransform;

      // --- STAGE 0 to STAGE 1 (0vh to 100vh) ---
      if (scrollY <= stage1End) {
        const progress = Math.min(1, scrollY / stage1End);
        const scaleValue = 1 + (1.2 - 1) * progress;
        const translateY = 0 + (200 - 0) * progress;
        const translateX = 0 + (120 - 0) * progress;
        newTransform = `scale(${scaleValue}) translateY(${translateY}px) translateX(${translateX}px)`;
      }

      // --- STAGE 1 to STAGE 2 (100vh to 200vh) ---
      else if (scrollY > stage1End && scrollY <= stage2End) {
        const progress = Math.min(1, (scrollY - stage1End) / (stage2End - stage1End));
        const scaleValue = 1.2 + (1.09 - 1.2) * progress;
        const translateY = 200 + (110 - 200) * progress;
        const translateX = 120 + (-60 - 120) * progress;
        newTransform = `scale(${scaleValue}) translateY(${translateY}px) translateX(${translateX}px)`;
      }

      // --- STAGE 2 to STAGE 3 (200vh to 300vh) ---
      else if (scrollY > stage2End && scrollY <= stage3End) {
        const progress = Math.min(1, (scrollY - stage2End) / (stage3End - stage2End));
        const scaleValue = 1.09 + (1.4 - 1.09) * progress;
        const translateY = 110 + (20 - 110) * progress;
        const translateX = -60 + (0 - (-60)) * progress;
        const rotateValue = 0 + (15 - 0) * progress;
        newTransform = `scale(${scaleValue}) translateY(${translateY}px) translateX(${translateX}px) `;
      }

      // --- STAGE 3 to STAGE 4 (300vh to 400vh) ---
      else if (scrollY > stage3End && scrollY <= stage4End) {
        const progress = Math.min(1, (scrollY - stage3End) / (stage4End - stage3End));
        const scaleValue = 1.4 + (1.4 - 1.4) * progress; // scale remains constant
        const translateY = 20 + (220 - 20) * progress;
        const translateX = 0 + (180 - 0) * progress;
        const rotateValue = 15 + (0 - 15) * progress;
        newTransform = `scale(${scaleValue}) translateY(${translateY}px) translateX(${translateX}px) `;
      }

      // --- STAGE 4 to STAGE 5 (400vh to 500vh) ---
      else if (scrollY > stage4End && scrollY <= stage5End) {
        const progress = Math.min(1, (scrollY - stage4End) / (stage5End - stage4End));
        const scaleValue = 1.4 + (1 - 1.4) * progress;
        const translateY = 220 + (0 - 220) * progress;
        const translateX = 180 + (0 - 180) * progress;
        newTransform = `scale(${scaleValue}) translateY(${translateY}px) translateX(${translateX}px)`;
      }

      // --- After all stages: Lock into final state ---
      else {
        newTransform = 'scale(1) translateY(0px) translateX(0px)';
      }

      setFinalStyleStars({ transform: newTransform });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




  const [finalStyleLight, setFinalStyleLight] = useState({
    transform: 'scale(2) translateY(70px) translateX(690px)',
  });

  useEffect(() => {
    // Stage 0: scale(2) translateY(70px) translateX(690px)
    // Stage 1: scale(2) translateY(320px) translateX(-20px)
    // Stage 2: scale(2) translateY(230px) translateX(400px)
    // Stage 3: scale(2) translateY(70px) translateX(690px)
    // Stage 4: scale(2) translateY(320px) translateX(-20px)
    // Stage 5: scale(2) translateY(70px) translateX(590px)

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Define the end of each stage
      const stage1End = viewportHeight;
      const stage2End = viewportHeight * 2;
      const stage3End = viewportHeight * 3;
      const stage4End = viewportHeight * 4;
      const stage5End = viewportHeight * 5;

      let newTransform;

      // --- STAGE 0 to STAGE 1 (0vh to 100vh) ---
      if (scrollY <= stage1End) {
        const progress = Math.min(1, scrollY / stage1End);
        const scaleValue = 2; // Scale remains constant
        const translateY = 70 + (320 - 70) * progress;
        const translateX = 690 + (-20 - 690) * progress;
        newTransform = `scale(${scaleValue}) translateY(${translateY}px) translateX(${translateX}px)`;
      }

      // --- STAGE 1 to STAGE 2 (100vh to 200vh) ---
      else if (scrollY > stage1End && scrollY <= stage2End) {
        const progress = Math.min(1, (scrollY - stage1End) / (stage2End - stage1End));
        const scaleValue = 2; // Scale remains constant
        const translateY = 320 + (230 - 320) * progress;
        const translateX = -20 + (400 - (-20)) * progress;
        newTransform = `scale(${scaleValue}) translateY(${translateY}px) translateX(${translateX}px)`;
      }

      // --- STAGE 2 to STAGE 3 (200vh to 300vh) ---
      else if (scrollY > stage2End && scrollY <= stage3End) {
        const progress = Math.min(1, (scrollY - stage2End) / (stage3End - stage2End));
        const scaleValue = 2; // Scale remains constant
        const translateY = 230 + (270 - 230) * progress;
        const translateX = 400 + (690 - 400) * progress;
        newTransform = `scale(${scaleValue}) translateY(${translateY}px) translateX(${translateX}px)`;
      }

      // --- STAGE 3 to STAGE 4 (300vh to 400vh) ---
      else if (scrollY > stage3End && scrollY <= stage4End) {
        const progress = Math.min(1, (scrollY - stage3End) / (stage4End - stage3End));
        const scaleValue = 2; // Scale remains constant
        const translateY = 270 + (320 - 270) * progress;
        const translateX = 690 + (-20 - 690) * progress;
        newTransform = `scale(${scaleValue}) translateY(${translateY}px) translateX(${translateX}px)`;
      }

      // --- STAGE 4 to STAGE 5 (400vh to 500vh) ---
      else if (scrollY > stage4End && scrollY <= stage5End) {
        const progress = Math.min(1, (scrollY - stage4End) / (stage5End - stage4End));
        const scaleValue = 2; // Scale remains constant
        const translateY = 320 + (70 - 320) * progress;
        const translateX = -20 + (590 - (-20)) * progress;
        newTransform = `scale(${scaleValue}) translateY(${translateY}px) translateX(${translateX}px)`;
      }

      // --- After all stages: Lock into final state ---
      else {
        // The final state of the animation
        newTransform = 'scale(2) translateY(70px) translateX(590px)';
      }

      setFinalStyleLight({ transform: newTransform });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);





  return (
    <div className="">
      <div style={finalStyleSheet} className="fixed  top-20 left-0 w-full h-screen bg-center bg-cover bg-no-repeat bg-[url('/transparent.png')] -z-10"></div>
      <div style={finalStyleSphere} className="fixed top-0 left-0 w-[400px] h-[400px]  bg-cover  bg-[url('/sphere.png')] -z-9"></div>
      <div style={finalStyleStars} className="fixed top-0 left-0  w-full h-screen bg-cover  bg-[url('/Abstract_Shiny_Background.png')] -z-10"></div>

      <div
        style={finalStyleLight}
        className="
          -z-10 
          fixed
            w-20 h-20 rounded-full  
            bg-[#92c54e] 
            shadow-[
              0px_0px_100px_40px_rgba(255,255,0,0.2), /* Yellow glow with heavy blur and spread */
              0px_0px_150px_80px_rgba(0,0,0,0.8),    /* Darker layer, very large spread */
              0px_0px_200px_120px_rgba(255,255,255,0.2) /* Faint outer glow, largest spread */
            ]
          "
      >
      </div>

      <motion.div initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }} className="fixed top-[82%] left-[75%] md:top-[72%] md:left-[82%] w-full h-screen bg-cover ">
        <div className="flex justify-center items-center bg-transparent rounded-full border-1 border-gray-600 w-17 h-17 relative">
          <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_260_26)">
              <path d="M29.0657 8.11442H28.0662V5.93065C29.4431 5.4441 30.2694 4.03572 30.0223 2.59622C29.7752 1.15635 28.5272 0.104187 27.0664 0.104187C25.6057 0.104187 24.3577 1.15635 24.1106 2.59622C23.8634 4.03572 24.6897 5.4441 26.0666 5.93065V8.11442H14.0703V5.93065C15.4476 5.4441 16.2735 4.03572 16.0267 2.59622C15.7796 1.15635 14.5316 0.104187 13.0708 0.104187C11.6101 0.104187 10.3617 1.15635 10.115 2.59622C9.86785 4.03572 10.6938 5.4441 12.071 5.93065V8.11442H11.0712C8.31193 8.11735 6.0758 10.3535 6.07288 13.1128V30.1074C6.0758 32.8671 8.31193 35.1032 11.0712 35.1061H14.0703V39.1047C14.0707 39.4682 14.268 39.8028 14.5858 39.9789C14.9035 40.155 15.292 40.1448 15.5999 39.9522L23.3546 35.1061H29.0657C31.8253 35.1036 34.0618 32.8671 34.0644 30.1074V13.1128C34.0618 10.3535 31.8253 8.11699 29.0657 8.11442ZM15.0701 14.1126C16.7256 14.1144 18.0674 15.4562 18.0692 17.1117C18.0692 17.6637 17.6218 18.1111 17.0694 18.1111C16.5173 18.1111 16.0699 17.6637 16.0699 17.1117C16.0699 16.5596 15.6222 16.1118 15.0701 16.1118C14.518 16.1118 14.0703 16.5596 14.0703 17.1117C14.0703 17.6637 13.6229 18.1111 13.0708 18.1111C12.5188 18.1111 12.071 17.6637 12.071 17.1117C12.0729 15.4562 13.4146 14.1144 15.0701 14.1126ZM27.5134 26.5032C25.1869 27.6004 22.6407 28.1536 20.0685 28.1199C17.4963 28.1536 14.9504 27.6008 12.6235 26.5032C12.1296 26.2564 11.9297 25.6557 12.1765 25.1618C12.4236 24.6679 13.024 24.4677 13.5179 24.7148C17.2521 26.5812 22.886 26.5812 26.6194 24.7148C27.1133 24.4677 27.7137 24.6679 27.9608 25.1618C28.2076 25.6557 28.0073 26.2564 27.5134 26.5032ZM27.0664 18.1111C26.8014 18.1115 26.5469 18.006 26.3595 17.8186C26.1721 17.6312 26.0666 17.3767 26.0666 17.1117C26.0666 16.5596 25.6192 16.1118 25.0672 16.1118C24.5151 16.1118 24.0674 16.5596 24.0674 17.1117C24.0674 17.6637 23.62 18.1111 23.0675 18.1111C22.5155 18.1111 22.0681 17.6637 22.0681 17.1117C22.0681 15.4551 23.4106 14.1126 25.0672 14.1126C26.7234 14.1126 28.0662 15.4551 28.0662 17.1117C28.0662 17.3767 27.9612 17.6312 27.7734 17.8186C27.5859 18.006 27.3315 18.1115 27.0664 18.1111Z" fill="white" />
              <path d="M37.0635 16.1118H36.0637V26.1089H37.0635C38.719 26.107 40.0608 24.7653 40.0626 23.1098V19.1109C40.0608 17.4554 38.719 16.1136 37.0635 16.1118Z" fill="white" />
              <path d="M0.074707 19.1109V23.1098C0.0765375 24.7653 1.41829 26.107 3.07379 26.1089H4.0736V16.1118H3.07379C1.41829 16.1136 0.0765375 17.4554 0.074707 19.1109Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_260_26">
                <rect width="40" height="40" fill="white" transform="translate(0 0.109187)" />
              </clipPath>
            </defs>
          </svg>
          <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }} className="absolute top-0 right-0 transform translate-x-[23px] -translate-y-1/2">
            <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clip-rule="evenodd" d="M19.6078 1.98442C19.9439 1.34043 20.6161 0.927063 21.3554 0.927063C22.1746 0.927063 22.9097 1.43536 23.1996 2.20285L24.0691 4.5045C24.0691 4.50702 24.0691 4.50954 24.0733 4.51164C24.0733 4.51332 24.0776 4.51501 24.0776 4.51585L26.3796 5.38374C27.1484 5.67318 27.6567 6.40791 27.6567 7.22833C27.6567 7.92063 27.2954 8.5516 26.7199 8.90574C27.3248 10.3386 27.6567 11.8988 27.6567 13.5296C27.6567 20.4686 21.6495 26.1321 14.214 26.1321C11.9539 26.1321 9.81987 25.607 7.9505 24.6824C6.37938 25.4201 4.65287 25.8549 3.20778 26.1023C2.41382 26.238 1.61145 25.9036 1.14935 25.2437C0.68726 24.5837 0.645247 23.7162 1.04013 23.0202C1.67445 21.8893 2.08614 20.6126 2.35499 19.4654C1.34259 17.6947 0.771266 15.6741 0.771266 13.5296C0.771266 6.59064 6.77848 0.927063 14.214 0.927063C16.1338 0.927063 17.9569 1.30472 19.6078 1.98442ZM14.214 11.8493C15.1424 11.8493 15.8943 12.6021 15.8943 13.5296C15.8943 14.4571 15.1424 15.2099 14.214 15.2099C13.2856 15.2099 12.5336 14.4571 12.5336 13.5296C12.5336 12.6021 13.2856 11.8493 14.214 11.8493ZM7.9127 11.8493C8.84109 11.8493 9.59304 12.6021 9.59304 13.5296C9.59304 14.4571 8.84109 15.2099 7.9127 15.2099C6.98432 15.2099 6.23237 14.4571 6.23237 13.5296C6.23237 12.6021 6.98432 11.8493 7.9127 11.8493ZM21.0823 2.7956C21.1244 2.68218 21.2336 2.6074 21.3554 2.6074C21.4772 2.6074 21.5865 2.68218 21.6285 2.7956L22.4938 5.09767C22.582 5.32367 22.7123 5.52867 22.8845 5.69964C23.0568 5.87062 23.2584 6.00295 23.4852 6.08823L25.7873 6.95611C25.9007 6.99896 25.9763 7.10735 25.9763 7.22833C25.9763 7.34932 25.9007 7.4577 25.7873 7.50055L23.4852 8.36844C23.2584 8.45371 23.0568 8.58605 22.8845 8.75702C22.7123 8.928 22.582 9.13299 22.4938 9.359L21.6285 11.6611C21.5865 11.7745 21.4772 11.8493 21.3554 11.8493C21.2336 11.8493 21.1244 11.7745 21.0823 11.6611L20.217 9.359C20.1288 9.13299 19.9985 8.928 19.8263 8.75702C19.6541 8.58605 19.4525 8.45371 19.2256 8.36844L16.9235 7.50055C16.8101 7.4577 16.7345 7.34932 16.7345 7.22833C16.7345 7.10735 16.8101 6.99896 16.9235 6.95611L19.2256 6.08823C19.4525 6.00295 19.6541 5.87062 19.8263 5.69964C19.9985 5.52867 20.1288 5.32367 20.217 5.09767L21.0823 2.7956Z" fill="white" />
            </svg>
          </motion.div>
        </div>
      </motion.div>


    </div>
  )
}
