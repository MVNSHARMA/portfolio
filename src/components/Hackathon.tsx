"use client";

import { motion } from "framer-motion";
import { ExternalLink, Trophy, Calendar, MapPin, Image as ImageIcon } from "lucide-react";

export default function Hackathon() {
  return (
    <section className="relative z-20 w-full bg-[#121212] py-24 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center gap-4"
        >
          <Trophy className="text-white/80 w-8 h-8 md:w-10 md:h-10" />
          <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
            Hackathons & Events
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden p-8 md:p-12 hover:border-white/20 transition-colors"
        >
          {/* subtle background glow */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col xl:flex-row gap-12">

            {/* Left Column: Details */}
            <div className="flex-1 space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-4 text-white/50 text-sm font-mono tracking-widest uppercase">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> 2024</span>
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Mahindra University</span>
                </div>

                {/* Logo Placeholder */}
                <div className="mb-6 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex flex-col justify-center items-center overflow-hidden">
                    {<img src="/assets/mahindra_logo.png" alt="Mahindra Logo" className="w-full h-full object-cover" />}
                  </div>
                  <h4 className="text-3xl md:text-4xl font-medium text-white">
                    Mood-Based Web Experience
                  </h4>
                </div>

                <p className="text-white/70 font-light leading-relaxed text-lg mb-8 max-w-2xl">
                  Built a fully interactive, mood-responsive website during the 2024 hackathon at Mahindra University.
                  The platform dynamically adapted its interface, color scheme, and content recommendations based on the user's emotional state,
                  synthesizing real-time inputs into a tailored user experience.
                </p>

                <a
                  href="https://huggingface.co/spaces/MVNSHARMA/sugar-coated-mood-journal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-[#121212] font-medium hover:bg-white/90 hover:scale-105 transition-all w-max"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Image Grid Layout */}
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4 h-full min-h-[300px]">
                {/* Image Placeholder 1 (Large) */}
                <div className="col-span-2 md:col-span-1 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-white/30 hover:bg-white/10 transition-colors group overflow-hidden relative">
                  <ImageIcon className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium tracking-wide">Event Photo 1</span>
                  <img src="/assets/IMG_1244.JPG" alt="Event" className="absolute inset-0 w-full h-full object-cover" />
                </div>

                <div className="col-span-2 md:col-span-1 grid grid-rows-2 gap-4">
                  {/* Image Placeholder 2 (Small Top) */}
                  <div className="rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-white/30 hover:bg-white/10 transition-colors group overflow-hidden relative">
                    <ImageIcon className="w-6 h-6 mb-1 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium tracking-wide">Project Demo</span>
                    {<img src="/assets/mood_demo.png" alt="Demo" className="absolute inset-0 w-full h-full object-cover" />}
                  </div>

                  {/* Image Placeholder 3 (Small Bottom) */}
                  <div className="rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-white/30 hover:bg-white/10 transition-colors group overflow-hidden relative">
                    <ImageIcon className="w-6 h-6 mb-1 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium tracking-wide">Event Photo 2</span>
                    {<img src="/assets/hackathon_photo.jpg" alt="Team" className="absolute inset-0 w-full h-full object-cover" />}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
