"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="pt-32 px-6 max-w-5xl mx-auto">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold text-violet-400"
      >
        About Town Club Edathua
      </motion.h1>

      <p className="mt-6 text-gray-300">
        Town Club Edathua is a dynamic sports organization dedicated to
        nurturing talent and promoting sportsmanship in the community.
      </p>
    </div>
  );
}