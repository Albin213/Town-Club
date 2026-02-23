// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { FaBars } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="bg-slate-900/80 backdrop-blur-md fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-violet-400">
//           Town Club Edathua
//         </h1>

//         <div className="hidden md:flex space-x-8">
//           <Link href="/">Home</Link>
//           <Link href="/about">About</Link>
//           <Link href="/teams">Teams</Link>
//           <Link href="/gallery">Gallery</Link>
//           <Link href="/contact">Contact</Link>
//         </div>

//         <FaBars
//           className="md:hidden text-xl cursor-pointer"
//           onClick={() => setOpen(!open)}
//         />
//       </div>

//       {open && (
//         <motion.div
//           initial={{ height: 0 }}
//           animate={{ height: "auto" }}
//           className="md:hidden bg-slate-900 px-6 pb-4 space-y-3"
//         >
//           <Link href="/">Home</Link>
//           <Link href="/about">About</Link>
//           <Link href="/teams">Teams</Link>
//           <Link href="/gallery">Gallery</Link>
//           <Link href="/contact">Contact</Link>
//         </motion.div>
//       )}
//     </nav>
//   );
// }





"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Teams", path: "/teams" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 px-4 md:px-8 pt-4">
      <div
        className="
          max-w-7xl mx-auto
          backdrop-blur-xl
          bg-white/5
          border border-white/10
          shadow-2xl
          rounded-2xl
          px-6 py-4
          flex justify-between items-center
        "
      >
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500 bg-clip-text text-transparent tracking-wide">
          Town Club Edathua
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="relative text-gray-300 hover:text-white transition duration-300 group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-indigo-400 to-violet-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden text-white text-xl">
          {open ? (
            <FaTimes
              className="cursor-pointer"
              onClick={() => setOpen(false)}
            />
          ) : (
            <FaBars
              className="cursor-pointer"
              onClick={() => setOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="
              md:hidden
              mt-4
              mx-2
              backdrop-blur-xl
              bg-white/5
              border border-white/10
              rounded-2xl
              shadow-xl
              p-6
              space-y-6
              text-center
            "
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setOpen(false)}
                className="block text-gray-300 hover:text-white text-lg transition"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}