"use client";

import { motion } from "framer-motion";

const EDUCATION = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "KLH UNIVERSITY",
    year: "2023-2027",
    description: "Specialized in Artificial Intelligence and Machine Learning. Relevant coursework: Data Structures, Algorithms, Deep Learning, Natural Language Processing.",
  },
  {
    degree: "High School Equivalent",
    school: "Narayana Junior College",
    year: "2020-2023",
    description: "Graduated with honors.",
  }
];

export default function Education() {
  return (
    <section className="relative w-full bg-[#121212] py-24 px-8 md:px-24 border-t border-white/5 z-20 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
            Education
          </h3>
        </motion.div>

        <div className="relative border-l border-white/20 pl-8 md:pl-12 space-y-12">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-2 w-4 h-4 rounded-full bg-white/20 border-2 border-[#121212] shadow-[0_0_0_2px_rgba(255,255,255,0.2)]"></div>

              <div className="flex flex-col gap-2">
                <span className="text-white/50 font-mono text-sm tracking-widest uppercase">
                  {edu.year}
                </span>
                <h4 className="text-2xl md:text-3xl font-medium text-white">
                  {edu.degree}
                </h4>
                <div className="text-lg text-white/80 font-light mb-2">
                  {edu.school}
                </div>
                <p className="text-white/60 font-light leading-relaxed max-w-2xl">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
