// "use client";
// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="h-screen flex items-center justify-center text-center bg-gradient-to-r from-indigo-700 to-violet-700">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h1 className="text-5xl md:text-7xl font-extrabold">
//           Town Club Edathua
//         </h1>
//         <p className="mt-6 text-lg md:text-xl max-w-xl mx-auto">
//           A Passion for Sports. A Legacy of Champions.
//         </p>

//         <button className="mt-8 bg-white text-violet-700 px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
//           Join Our Club
//         </button>
//       </motion.div>
//     </section>
//   );
// }










"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const finalText = "Town Club Edathua";

  // Simple scramble text effect
  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setText(
        finalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) return finalText[index];
            return String.fromCharCode(65 + Math.floor(Math.random() * 26));
          })
          .join("")
      );

      if (iteration >= finalText.length) clearInterval(interval);
      iteration += 1 / 2;
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1508098682722-e99c43a406b2')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-slate-900/80 to-violet-900/90"></div>

      {/* Floating Glow Circles */}
      <div className="absolute w-72 h-72 bg-violet-600/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-6 max-w-4xl"
      >
        <h1 className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
          {text}
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-gray-300">
          A Passion for Sports. A Legacy of Champions.
        </p>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Empowering athletes. Building champions. Creating a sporting culture
          that inspires excellence and unity in our community.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold shadow-lg hover:scale-105 transition">
            Join Our Club
          </button>

          <button className="px-8 py-3 rounded-full border border-white/30 backdrop-blur-md bg-white/10 text-white hover:bg-white/20 transition">
            View Teams
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-400">
              15+
            </h2>
            <p className="text-gray-400 mt-2">Tournaments Won</p>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-violet-400">
              250+
            </h2>
            <p className="text-gray-400 mt-2">Active Members</p>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-purple-400">
              10+
            </h2>
            <p className="text-gray-400 mt-2">Years of Excellence</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}