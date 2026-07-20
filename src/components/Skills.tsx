"use client";

import { motion } from "framer-motion";
import { Cpu, Bot, Code2, Wrench } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "ML & Deep Learning",
    icon: Cpu,
    skills: ["Python", "TensorFlow", "CNN", "OpenCV", "NLP", "Sentiment Analysis"],
    note: "Applied in Chest X-Ray Analyser, Legal Document Summarizer, and IMDb Comment Summarizer",
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "hover:border-blue-500/30",
  },
  {
    title: "LLM APIs & Agentic Systems",
    icon: Bot,
    skills: ["OpenAI API (GPT-4)", "Google Gemini API", "Anthropic Claude API", "LangChain", "Hugging Face"],
    note: "Prompt engineering, structured output, function/tool calling, RAG pipeline design, multi-turn memory",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "hover:border-purple-500/30",
  },
  {
    title: "Also Familiar With",
    icon: Code2,
    skills: ["PyTorch", "Scikit-learn", "NumPy", "Pandas"],
    note: "Core data science, numerical computing, and machine learning libraries",
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "hover:border-emerald-500/30",
  },
  {
    title: "Dev & Deployment",
    icon: Wrench,
    skills: [
      "React", "Node.js", "TypeScript", "Express",
      "PostgreSQL", "Redis", "Docker", "Firebase",
      "Vercel", "AWS", "GCP", "Git/GitHub"
    ],
    note: "Full-stack development, database management, containerization, and cloud deployment",
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "hover:border-amber-500/30",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-20 w-full bg-[#121212] py-24 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
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
          <p className="text-white/50 font-light text-lg max-w-2xl mx-auto">
            The tools, frameworks, and AI architecture patterns I leverage to build production-grade solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 overflow-hidden transition-all duration-500 ${category.borderColor} flex flex-col justify-between`}
              >
                {/* Subtle background glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
                />

                <div className="relative z-10 space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-2xl font-medium text-white tracking-wide">
                      {category.title}
                    </h4>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80 text-sm font-light hover:border-white/20 hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Context / Application note */}
                  <div className="pt-2 border-t border-white/5">
                    <p className="text-white/40 text-xs leading-relaxed font-mono">
                      <span className="text-white/60 font-semibold">Focus & Applied in: </span>
                      {category.note}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

