"use client";
import React, { useEffect, useRef, useState } from "react";

const Circle = () => {
  const circleRef = useRef(null);
  const [hoverEffect, setHoverEffect] = useState(false);
  const [clickEffect, setClickEffect] = useState(false);

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
    let time;
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
    <div ref={circleRef} className={className} onClick={() => setClickEffect(true)}>
      <div className="little-circle"></div>
    </div>
  );
};

export default Circle;
