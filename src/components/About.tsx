"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative z-20 w-full bg-[#121212] py-24 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
              About Me
            </h3>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent"></div>
          </div>

          <div className="text-white/70 text-lg md:text-xl font-light leading-relaxed space-y-6">
            <p>
              Hi, I'm MVN Sharma. I am an AI Engineer passionate about building intelligent systems and solving complex, real-world problems through artificial intelligence and machine learning.
            </p>
            <p>
              My journey in tech is driven by a curiosity to understand how data can be transformed into actionable insights. I specialize in developing scalable AI applications, training deep learning models, and bridging the gap between cutting-edge research and practical production environments.
            </p>
            <p>
              When I'm not writing code or training models, you can find me exploring the latest advancements in natural language processing and computer vision, always eager to push the boundaries of what's possible.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
