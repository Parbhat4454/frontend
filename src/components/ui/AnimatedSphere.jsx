'use client'
import React, { useState, useEffect } from 'react';

const AnimatedSphere = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  const handleResize = () => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    handleResize(); 
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Use a non-linear function for irregular speed
  // The Math.sin() creates a smooth acceleration/deceleration effect
  const scrollFactor = Math.sin(scrollPosition * 0.005); 
  const totalMovement = 1000; // Total pixel movement before repeating the path

  // Use a modulo operator to create a looping triangular path
  const pathSegment = (scrollPosition / 1000) % 3;
  let translateX = 0;
  let translateY = 0;

  // Add a slight random offset for an "arbitrary" feel
  const arbitraryOffset = Math.random() * 20 - 10; 

  if (pathSegment < 1) {
    // Segment 1: Bottom-left to bottom-right
    translateX = pathSegment * windowDimensions.width * 0.8 + arbitraryOffset;
    translateY = 0 + arbitraryOffset;
  } else if (pathSegment < 2) {
    // Segment 2: Bottom-right to top-middle
    const segmentProgress = pathSegment - 1;
    translateX = windowDimensions.width * 0.8 - segmentProgress * (windowDimensions.width * 0.4) + arbitraryOffset;
    translateY = -segmentProgress * (windowDimensions.height * 0.6) + arbitraryOffset;
  } else {
    // Segment 3: Top-middle back to bottom-left
    const segmentProgress = pathSegment - 2;
    translateX = (windowDimensions.width * 0.4) - segmentProgress * (windowDimensions.width * 0.4) + arbitraryOffset;
    translateY = -(windowDimensions.height * 1) + segmentProgress * (windowDimensions.height * 1) + arbitraryOffset;
  }

  return (
    <div
      className="fixed left-0 top-0 w-64 h-64 opacity-60"
      style={{
        transform: `translate(${translateX}px, ${translateY}px)`,
      }}
    >
      <img
        className="w-full h-full rounded-full bg-gradient-to-br from-gray-600 to-gray-800 shadow-2xl"
        src="/Glossy_Black_Sphere.png"
        alt="sphere"
      />
    </div>
  );
};

export default AnimatedSphere;