import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const FinalMessageWishes = ({ messages }) => {
  const finalMessage = useRef(null);
  useEffect(() => {
    const finalText = finalMessage.current;
    if (finalText) {
      gsap.to(
        finalText,
        {
          y: "-82%",
          duration:8,
          fontSize:'25px',
          rotate:-5,
          display:'block',
          ease: 'power2.out',
          opacity:'100%',
          zIndex:110
        },
      );
    }
  }, []);
  return (
    <div
      ref={finalMessage}
      style={{ textShadow: "-3px 2px 4px rgba(0,0,0,0.4)" }}
      className="w-full h-full justify-center items-center text-center text-[0px] px-5 hidden opacity-0"
    >
      {messages}
    </div>
  );
};

export default FinalMessageWishes;
