"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Section 2: 30% to 50%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.4], [100, -100]);

  // Section 3: 60% to 80%
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.7], [100, -100]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center p-8 md:p-24 overflow-hidden">

        {/* Section 1: Center */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white">
            MVN SHARMA.
          </h1>
          <p className="text-xl md:text-2xl text-white/70 mt-4 tracking-wide font-light">
            AI ENGINEER.
          </p>
        </motion.div>

        {/* Section 2: Left Aligned */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-32"
        >
          <h2 className="text-3xl md:text-6xl font-medium tracking-tight text-white max-w-xl">
            I integrate AI into real world problems.
          </h2>
        </motion.div>

        {/* Section 3: Right Aligned */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-end justify-center p-8 md:p-32 text-right"
        >
          <h2 className="text-3xl md:text-6xl font-medium tracking-tight text-white max-w-xl">
            Bridging real life with AI.
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
