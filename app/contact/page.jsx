"use client";

import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="relative py-32 px-6 bg-slate-950 text-white overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-600/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h1>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Have questions or want to join Town Club Edathua?
            We’d love to hear from you!
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 mt-16">

          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-violet-400">
                <FaPhone />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-lg font-semibold">+91 97475 45872</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-indigo-400">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-lg font-semibold">townclub@email.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-purple-400">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-lg font-semibold">Edathua, Kerala</p>
              </div>
            </div>

            {/* Social Icons */}
           
<div className="flex gap-4 mt-6">
  
  {/* WhatsApp */}
  <a
    href="https://wa.me/919544016366"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-green-500 transition cursor-pointer"
  >
    <FaWhatsapp className="text-lg" />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/edathuva_town_club?igsh=MTE4ZXhpeGZ1aGp2eg=="
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transition cursor-pointer"
  >
    <FaInstagram className="text-lg" />
  </a>

</div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
          >
            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 focus:outline-none focus:border-violet-500 transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 focus:outline-none focus:border-violet-500 transition"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 focus:outline-none focus:border-violet-500 transition"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 font-semibold hover:scale-105 transition"
              >
                Send Message
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}