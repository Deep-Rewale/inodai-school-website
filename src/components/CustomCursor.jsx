import gsap from "gsap";
import { useEffect, useRef } from "react";
import React from "react";
import CustomCur from "../assets/customCoursor/pencil.png";
import { useGSAP } from "@gsap/react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  useEffect(() => {
    const cursor = cursorRef.current;
    const moveCursor = (event) => {
      gsap.to(cursor, {
        x: event.clientX - 16,
        y: event.clientY - 16,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="customCursor h-8 w-8 fixed z-50 pointer-events-none hidden md:block"
    >
      <img src={CustomCur} alt="pencil" />
    </div>
  );
};

export default CustomCursor;
