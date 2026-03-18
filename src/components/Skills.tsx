"use client";

import { motion, Variants } from "framer-motion";

const SKILLS = [
  "Python", "TensorFlow", "Keras",
  "React", "Next.js", "TypeScript",
  "Node.js", "Git", "SQL", "MongoDB",
  "Computer Vision", "Natural Language Processing", "Machine Learning"
];

export default function Skills() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section className="relative z-20 w-full bg-[#121212] py-24 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
            Technical Arsenal
          </h3>
          <p className="text-white/50 font-light text-lg">
            The tools and technologies I use to build solutions.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              className="px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-white/80 font-light hover:bg-white/[0.08] hover:text-white hover:border-white/30 transition-colors cursor-default shadow-[0_0_15px_rgba(255,255,255,0.0)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
