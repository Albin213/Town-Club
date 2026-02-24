"use client";

import {
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative  overflow-hidden bg-slate-950 text-white">

      {/* 🔥 Strong Radial Glow Background */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-600/30 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Club Info */}
          <div>
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
              Town Club Edathua
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Building champions, inspiring passion, and strengthening
              community through sports excellence and teamwork.
            </p>

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
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-violet-400">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/events" className="hover:text-white transition">Events</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-violet-400">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-indigo-400" />
                Edathua, Kerala
              </p>
              <p className="flex items-center gap-3">
                <FaPhone className="text-indigo-400" />
                +91 97475 45872
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-indigo-400" />
                townclub@email.com
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Town Club Edathua. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}