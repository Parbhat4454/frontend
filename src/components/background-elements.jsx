'use client'
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








  return (
    <div className="">
      <div style={finalStyleSheet} className="fixed  top-20 left-0 w-full h-screen bg-center bg-cover bg-no-repeat bg-[url('/transparent.png')] -z-10"></div>
      <div style={finalStyleSphere} className="fixed top-0 left-0 w-[400px] h-[400px]  bg-cover  bg-[url('/sphere.png')] -z-9"></div>
      <div style={finalStyleStars} className="fixed top-0 left-0  w-full h-screen bg-cover  bg-[url('/Abstract_Shiny_Background.png')] -z-10"></div>
    </div>
  )
}
