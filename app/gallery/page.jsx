"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/img8.jpg",
    "/img9.jpg",
    "/img10.jpg",
    "/img11.jpg",
    "img12.jpg",
    "/img7.jpg",
    "/img6.jpg",
    "/img5.jpg",
    "/img4.jpg",
    "/img3.jpg",
    "/imag2.jpg",
    "/img1.jpg",
  ];

  return (
    <section className="relative py-32 px-6 bg-slate-950 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl text-center font-bold bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500 bg-clip-text text-transparent"
        >
          Our Gallery
        </motion.h1>

        {/* Image Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">

          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative group overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                className="w-full h-[280px] object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-4">
                <p className="text-white font-semibold">View Image</p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}