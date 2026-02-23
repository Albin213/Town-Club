// import Hero from "@/components/Hero";

// export default function Home() {
//   return (
//     <main>
//       <Hero />

//       <section className="py-20 px-6 text-center">
//         <h2 className="text-4xl font-bold text-violet-400">
//           Our Sports
//         </h2>

//         <div className="grid md:grid-cols-3 gap-10 mt-12">
//           <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition">
//             <img
//               src="https://images.unsplash.com/photo-1517649763962-0c623066013b"
//               className="rounded-lg"
//             />
//             <h3 className="mt-4 text-xl font-semibold">Football</h3>
//           </div>

//           <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition">
//             <img
//               src="https://images.unsplash.com/photo-1519861531473-9200262188bf"
//               className="rounded-lg"
//             />
//             <h3 className="mt-4 text-xl font-semibold">Cricket</h3>
//           </div>

//           <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition">
//             <img
//               src="https://images.unsplash.com/photo-1546519638-68e109498ffc"
//               className="rounded-lg"
//             />
//             <h3 className="mt-4 text-xl font-semibold">Volleyball</h3>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }







"use client"
import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import ParallaxCarousel from "@/components/ParallaxCarousel";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white overflow-hidden">
      <Hero />

      {/* ===== Teams Showcase Section ===== */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500 bg-clip-text text-transparent"
          >
            Our Teams
          </motion.h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            Dedicated athletes, unmatched passion, and a spirit of teamwork that defines Town Club Edathua.
          </p>

          {/* Team Cards */}
          <div className="grid md:grid-cols-3 gap-10 mt-16">

            {[
              {
                title: "Football Team",
                image:
                  "/img3.jpg",
              },
              {
                title: "Football Team",
                image:
                  "/img4.jpg",
              },
              {
                title: "Football Team",
                image:
                  "/img5.jpg",
              },
            ].map((team, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="group relative rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src={team.image}
                  className="h-[320px] w-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold">
                    {team.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Activities & Fun Section ===== */}
      <section className="py-24 px-6 bg-gradient-to-r from-indigo-900/40 to-violet-900/40">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
              More Than Just Sports
            </h2>

            <p className="mt-6 text-gray-300 text-lg">
              At Town Club Edathua, we celebrate teamwork, friendship, and community spirit. 
              From tournaments to fun events, every moment builds lasting memories.
            </p>

            <p className="mt-4 text-gray-400">
              Training sessions, celebrations, championships, and community activities —
              our club is where passion meets purpose.
            </p>

            <button className="mt-8 px-8 py-3 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full font-semibold hover:scale-105 transition">
              Explore Gallery
            </button>
          </div>

          {/* Right Image Collage */}
          <div className="grid grid-cols-2 gap-6">
            <img
              src="/img1.jpg"
              className="rounded-2xl h-48 w-full object-cover hover:scale-105 transition"
            />
            <img
              src="/imag2.jpg"
              className="rounded-2xl h-48 w-full object-cover hover:scale-105 transition"
            />
            <img
              src="/img6.jpg"
              className="rounded-2xl h-48 w-full object-cover hover:scale-105 transition"
            />
            <img
              src="/img7.jpg"
              className="rounded-2xl h-48 w-full object-cover hover:scale-105 transition"
            />
          </div>
        </div>
      </section>


        <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
            Built With Passion
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Town Club Edathua brings together dedication, discipline, and
            determination to create champions on and off the field.
          </p>
        </ScrollReveal>
      </section>

      {/* Parallax Section */}
      {/* <section className="px-6 pb-24 max-w-6xl mx-auto">
        <ParallaxImage
          src="/parallex.jpg"
          height="500px"
        />
      </section> */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
  <ParallaxCarousel />
</section>
   
    </main>
  );
}