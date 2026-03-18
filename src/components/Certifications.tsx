"use client";

import { motion } from "framer-motion";
import { Award, Image as ImageIcon } from "lucide-react";

const certifications = [
  {
    title: "Gen AI Engineering Mastermind",
    issuer: "Outskill",
    description: "Mastered Generative AI concepts including LLMs, OpenAI API, prompt engineering, and building multi-agent AI systems and custom GPTs.",
    imageUrl: "/assets/cert-genai.png",
  },
  {
    title: "Machine Learning Concepts",
    issuer: "Udemy",
    description: "Comprehensive training in machine learning algorithms, data preprocessing, and model evaluation techniques.",
    imageUrl: "/assets/cert-ml.png",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    description: "Acquired foundational knowledge of AI concepts, use cases, and applications in enterprise environments.",
    imageUrl: "/assets/cert-ibm.png",
  },
  {
    title: "Natural Language Processing (NLP)",
    issuer: "Simplilearn",
    description: "Developed expertise in Natural Language Processing techniques, including text analysis, sentiment classification, and language modeling.",
    imageUrl: "/assets/cert-nlp.png",
  }
];

export default function Certifications() {
  return (
    <section className="relative z-20 w-full bg-[#121212] py-24 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center gap-4 text-center md:text-left"
        >
          <Award className="text-white/80 w-8 h-8 md:w-10 md:h-10" />
          <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
            Certifications
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Image Container */}
              <div className="relative h-56 sm:h-64 md:h-72 w-full bg-white/5 overflow-hidden flex items-center justify-center border-b border-white/10">
                {/* Fallback Icon when image is missing initially */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20 z-0">
                  <ImageIcon className="w-12 h-12 mb-3 group-hover:scale-110 group-hover:text-white/40 transition-all duration-500" />
                  <span className="text-xs uppercase tracking-widest font-mono group-hover:text-white/40 transition-colors duration-500">Upload Photo Here</span>
                  <span className="text-[10px] text-white/30 mt-2 font-mono">({cert.imageUrl})</span>
                </div>

                {/* Actual Image overlay - initially will fail to load or be blank if file doesn't exist */}
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  className="relative z-10 w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col relative z-20 bg-gradient-to-t from-black/40 to-transparent">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-white/60 text-xs font-mono tracking-widest uppercase bg-white/10 px-3 py-1.5 rounded-full border border-white/5">
                    {cert.issuer}
                  </span>
                </div>
                <h4 className="text-xl md:text-2xl font-medium text-white mb-3 tracking-wide group-hover:text-blue-200 transition-colors duration-300">
                  {cert.title}
                </h4>
                <p className="text-white/60 font-light leading-relaxed text-sm md:text-base">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
