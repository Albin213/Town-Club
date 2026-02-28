"use client";

import { motion } from "framer-motion";

const leaders = [
  {
    name: "JOBIMON JOSEPH",
    role: "Patron",
    image: "/leaders/jobimon.jpg",
  },
  {
    name: "TIBIN THAMPI",
    role: "President",
    image: "/leaders/tibin.jpg",
  },
  {
    name: "JERIN THOMAS",
    role: "Secretary",
    image: "/leaders/jerin.jpg",
  },
  {
    name: "JOSEPH THOMAS",
    role: "Joint Secretary",
    image: "/leaders/joseph.jpg",
  },
  {
    name: "ABIN JOSEPH",
    role: "Treasurer",
    image: "/leaders/abin.jpg",
  },
];

export default function About() {
  return (
    <section className="relative bg-slate-950 text-white py-32 px-6 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/20 blur-[140px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500 bg-clip-text text-transparent"
        >
          About Town Club Edathua
        </motion.h1>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-12 text-gray-300 text-lg leading-relaxed space-y-6"
        >
          <p>
            <span className="text-violet-400 font-semibold">
              Town Club Edathua
            </span>{" "}
            is a community-oriented sports club dedicated to promoting{" "}
            <span className="text-indigo-400 font-semibold">
              physical fitness
            </span>
            ,{" "}
            <span className="text-indigo-400 font-semibold">
              sportsmanship
            </span>
            , and{" "}
            <span className="text-indigo-400 font-semibold">
              social responsibility
            </span>{" "}
            among the people of Edathua.
          </p>

          <p>
            Founded with the aim of nurturing{" "}
            <span className="text-violet-400 font-semibold">
              young talent
            </span>{" "}
            and encouraging active participation in sports, the club serves as
            a hub for athletes and sports enthusiasts of all age groups.
          </p>

          <p>
            Along with organizing tournaments and training programs, the club
            actively engages in{" "}
            <span className="text-indigo-400 font-semibold">
              charitable
            </span>{" "}
            and{" "}
            <span className="text-indigo-400 font-semibold">
              social welfare activities
            </span>
            , contributing to the overall well-being of the community.
          </p>

          <p>
            Guided by the values of{" "}
            <span className="text-violet-400 font-semibold">
              discipline
            </span>
            ,{" "}
            <span className="text-violet-400 font-semibold">
              teamwork
            </span>
            , and{" "}
            <span className="text-violet-400 font-semibold">
              service
            </span>
            , the club strives to build strong individuals and a united society.
          </p>
        </motion.div>

        {/* ===== Leaders Section ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
            2026 – 2027 Leadership Team
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-16">

            {leaders.map((leader, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center shadow-2xl group"
              >
                <div className="relative mx-auto w-32 h-32 mb-6">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover rounded-full border-4 border-violet-500 group-hover:scale-105 transition"
                  />
                  <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-md -z-10"></div>
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {leader.name}
                </h3>

                <p className="text-violet-400 mt-2 font-medium">
                  {leader.role}
                </p>
              </motion.div>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
}