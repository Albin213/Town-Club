"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxImage({ src, height = "500px" }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-80px", "80px"]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-3xl"
      style={{ height }}
    >
      <motion.img
        src={src}
        alt="parallax"
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    </div>
  );
}