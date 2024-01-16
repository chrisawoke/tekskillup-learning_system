"use client";

import React, { useState, useEffect, useRef } from "react";

const NumberAnimate = ({ number, title, symbol }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    // Clear any existing interval when the component is unmounted or when the target number is reached
    if (currentNumber >= number) {
      return;
    }
  
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && currentNumber < number) {
        // Calculate the difference between the target number and current number
        const difference = number - currentNumber;
        // Calculate the step based on the remaining difference 
        const step = Math.max(1, Math.floor(difference / 25));
        
        // Increment the currentNumber by the calculated step
        setCurrentNumber((prevNumber) => Math.min(prevNumber + step, number));
      }
    }, { threshold: 0.5 }); 
      
    observer.observe(counterRef.current);
  
    // Cleanup: clear the interval when the component is unmounted or when the target number is reached
    return () => observer.disconnect();
  }, [currentNumber, number]);

  return (
    <div ref={counterRef} className="text-center text-white flex flex-col">
      <span className="font-bold md:text-4xl sm:text-3xl text-2xl leading-5 animate-fade-in">
      {currentNumber.toLocaleString()}{symbol}
      </span>
      <span className="lg:text-base md:text-[.78rem] sm:text-[0.9rem] text-[0.825rem]">
        {title}
      </span>
    </div>
  );
};

export default NumberAnimate;
