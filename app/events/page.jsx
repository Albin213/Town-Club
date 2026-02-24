"use client";

import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

export default function Events() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-slate-950 text-white overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-600/20 blur-[140px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-2xl w-full text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-2xl"
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 text-3xl shadow-lg">
            <FaCalendarAlt />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
          No Events Yet
        </h1>

        {/* Message */}
        <p className="mt-6 text-gray-400 text-lg">
          There are currently no upcoming events.
        </p>

        <p className="mt-2 text-gray-500">
          Stay tuned! We will notify you as soon as new events are announced.
        </p>

        {/* Button */}
        <button className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 font-semibold hover:scale-105 transition">
          Stay Tuned
        </button>
      </motion.div>
    </section>
  );
}