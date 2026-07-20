"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const EXPERIENCES = [
  {
    id: 1,
    role: "AI/ML Intern",
    company: "iplairani.com",
    location: "Remote",
    period: "May 2026 – July 2026",
    description:
      "Worked on existing AI/ML and agentic AI systems, contributing to Python-based development involving LangChain and LLM API integrations. Operated independently in a remote setting, gaining hands-on exposure to agentic AI workflows within a live production codebase.",
    skills: ["Agentic AI", "Claude", "Prompt Engineering", "Model Tuning", "LangChain & LLMs"],
    badgeColor: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    glowColor: "bg-purple-500/10",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  },
  {
    id: 2,
    role: "Assistant HR",
    company: "Student Council",
    location: "KLH University",
    period: "2024 – 2025",
    description:
      "Served as Assistant HR in the KLH University Student Council, playing a key role in managing and coordinating college events. Responsibilities included resolving on-ground issues during events, coordinating effectively with students, faculty, higher officials, and external stakeholders to ensure smooth execution.",
    skills: [
      "Event Management",
      "Issue Resolution",
      "Student & Faculty Coordination",
      "External Stakeholder Liaison",
    ],
    badgeColor: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
    glowColor: "bg-yellow-500/10",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-20 w-full bg-[#121212] py-24 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center gap-4"
        >
          <Briefcase className="text-white/80 w-8 h-8 md:w-10 md:h-10" />
          <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
            Experience
          </h3>
        </motion.div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden p-8 md:p-12 hover:border-white/20 transition-colors"
            >
              {/* subtle background glow */}
              <div className={`absolute ${exp.glowColor} blur-3xl rounded-full w-96 h-96 -top-40 -right-40 pointer-events-none`} />

              <div className="relative z-10 flex flex-col xl:flex-row gap-12">
                {/* Left Column: Details */}
                <div className="flex-1 space-y-6">
                  <div>
                    <div className="flex items-center gap-4 mb-4 text-white/50 text-sm font-mono tracking-widest uppercase">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> {exp.period}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> {exp.location}
                      </span>
                    </div>

                    <span className={`inline-flex items-center px-4 py-1 rounded-full border text-sm font-medium mb-4 ${exp.badgeColor}`}>
                      {exp.role}
                    </span>

                    <h4 className="text-3xl md:text-4xl font-medium text-white mb-2">
                      {exp.company}
                    </h4>

                    <p className="text-white/70 font-light leading-relaxed text-lg max-w-2xl mt-4">
                      {exp.description}
                    </p>

                    {/* Skills / Responsibilities list */}
                    <div className="flex flex-wrap gap-3 mt-6">
                      {exp.skills.map((item, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Image */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 w-full max-h-[350px]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="w-full h-full object-cover relative z-0"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

