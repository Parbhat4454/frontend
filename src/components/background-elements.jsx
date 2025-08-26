'use client'
import { useEffect, useState } from "react";

export function BackgroundElements() {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // This function will be called on every scroll event
    const handleScroll = () => {
      // Get the current scroll position
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty dependency array ensures the effect runs only once

  // Calculate the scale and position based on the scroll position
  const scale = Math.min(2, 1 + scrollPosition / 200); // Scales from 1 to 2
  const translateY = scrollPosition * 0.5; // Moves the element up by half the scroll distance
  const translateX = scrollPosition * 0.2; // Moves the element horizontally

  return (
    <div className="">
      <div style={{
        transform: `scale(${scale}) translateY(${translateY}px) translateX(${translateX}px)`,
      }}
        className="fixed scale-92 top-20 left-0 w-full h-screen bg-center bg-cover bg-no-repeat bg-[url('/transparent.png')] -z-10"></div>
      <div className="fixed top-0 left-0 w-full h-screen bg-center bg-cover bg-no-repeat bg-[url('/Abstract_Shiny_Background.png')] -z-10"></div>
    </div>
  )
}
