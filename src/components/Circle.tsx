"use client";
import React, { useEffect, useRef, useState } from "react";
import Confetti from "react-dom-confetti";

const config = {
  angle: 252,
  spread: 360,
  startVelocity: 28,
  elementCount: 10,
  dragFriction: 0.23,
  duration: 10000,
  stagger: 0,
  width: "8px",
  height: "8px",
  perspective: "1000px",
  colors: ["#FF806E", "#5EB1AB", "#8D83FF", "#FFDE8A"],
};

const Circle = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  const [hoverEffect, setHoverEffect] = useState(false);
  const [clickEffect, setClickEffect] = useState<boolean | "transition">(false);

  useEffect(() => {
    const handleMouseEnter = () => {
      setHoverEffect(true);
    };

    const handleMouseLeave = () => {
      setTimeout(() => {
        setHoverEffect(false);
      }, 500);
    };

    const circleElement = circleRef.current;

    if (circleElement) {
      circleElement.addEventListener("mouseenter", handleMouseEnter);
      circleElement.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (circleElement) {
        circleElement.removeEventListener("mouseenter", handleMouseEnter);
        circleElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    let time: NodeJS.Timeout;
    if (clickEffect) {
      time = setTimeout(() => setClickEffect("transition"), 2000);
    }

    return () => clearTimeout(time);
  }, [clickEffect]);

  const className = `${
    clickEffect === true
      ? "active-click-effect"
      : clickEffect === "transition"
      ? "active-click-effect transform-effect"
      : hoverEffect
      ? "active-circle"
      : ""
  } circle`;

  return (
    <>
      <div ref={circleRef} className={className} onClick={() => setClickEffect(true)}>
        <div className="little-circle"></div>
      </div>
      <Confetti active={clickEffect === true} config={config} />
    </>
  );
};

export default Circle;
