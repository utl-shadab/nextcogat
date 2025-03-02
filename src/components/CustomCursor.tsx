"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section, .menussmall");
    const links = document.querySelectorAll("a, button");

    // Handle section hover
    sections.forEach((section) => {
      const handleMouseEnter = () => {
        gsap.to(cursorRef.current, { scale: 1.5, duration: 0.3, ease: "power3.out" });
      };

      const handleMouseLeave = () => {
        gsap.to(cursorRef.current, { scale: 1, duration: 0.3, ease: "power3.out" });
      };

      section.addEventListener("mouseenter", handleMouseEnter);
      section.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        section.removeEventListener("mouseenter", handleMouseEnter);
        section.removeEventListener("mouseleave", handleMouseLeave);
      };
    });

    // Handle link & button hover
    links.forEach((link) => {
      const handleMouseEnter = () => {
        gsap.to(cursorRef.current, { width: 10, height: 10, duration: 0.3, ease: "power3.out" });
      };

      const handleMouseLeave = () => {
        gsap.to(cursorRef.current, { width: 20, height: 20, duration: 0.3, ease: "power3.out" });
      };

      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        background: "white",
        height: "20px",
        width: "20px",
        borderRadius: "50%",
        transition: "transform 0.2s ease-out",
        zIndex: 1000,
        mixBlendMode: "difference",
      }}
    />
  );
};

export default CustomCursor;
