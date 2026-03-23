"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  const cards = [
    {
      title: "GitHub",
      handle: "MVNSHARMA",
      description: "Check out my projects, contributions, and open source work.",
      link: "https://github.com/MVNSHARMA",
      icon: Github,
      glow: "bg-purple-500/10",
      delay: 0.1,
    },
    {
      title: "LinkedIn",
      handle: "venkat-sharma",
      description: "Let's connect professionally. Always open to new opportunities.",
      link: "https://www.linkedin.com/in/venkat-sharma-b62880390/",
      icon: Linkedin,
      glow: "bg-blue-500/10",
      delay: 0.2,
    },
    {
      title: "Gmail",
      handle: "sharmavenky17@gmail.com",
      description: "Shoot me an email. I try to respond within 24 hours.",
      link: "mailto:sharmavenky17@gmail.com",
      icon: Mail,
      glow: "bg-red-500/10",
      delay: 0.3,
    },
  ];

  return (
    <section id="contact" className="relative z-20 w-full bg-[#121212] py-24 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="relative mb-16">
          <div className="absolute bg-blue-500/10 blur-3xl rounded-full w-96 h-96 -top-20 -left-20 pointer-events-none" />
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-medium tracking-tight text-white relative z-10"
          >
            Let's build something together.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white/60 font-light text-lg max-w-2xl mt-4 relative z-10"
          >
            Open to internships, collaborations, and interesting conversations. My inbox is always open.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {cards.map((card) => (
            <motion.a
              key={card.title}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              initial="rest"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                rest: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: card.delay } },
                hover: { scale: 1.05, transition: { duration: 0.3 } }
              }}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 hover:border-white/30 hover:bg-white/[0.05] transition-colors duration-300 overflow-hidden flex flex-col h-full"
            >
              <div className={`absolute -top-20 -right-20 w-40 h-40 ${card.glow} rounded-full blur-3xl pointer-events-none transition-opacity duration-300 opacity-50 group-hover:opacity-100`} />
              
              <card.icon className="w-10 h-10 text-white/80 mb-6 relative z-10" />
              
              <h3 className="text-xl font-medium text-white mb-1 relative z-10">
                {card.title}
              </h3>
              <p className="text-sm text-white/50 font-mono mb-4 relative z-10">
                {card.handle}
              </p>
              <p className="text-white/60 font-light mb-8 flex-grow relative z-10">
                {card.description}
              </p>

              <div className="mt-auto flex items-center text-sm font-medium text-white/70 group-hover:text-white transition-colors relative z-10">
                <span className="mr-2">Connect</span>
                <motion.div
                  variants={{
                    rest: { x: -10, opacity: 0 },
                    visible: { x: -10, opacity: 0 },
                    hover: { x: 0, opacity: 1, transition: { duration: 0.2, ease: "easeOut" } }
                  }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-white/5 mt-16 pt-8"
        >
          <p className="text-white/30 text-sm text-center">
            © 2025 Venkat Sharma. Designed & Built with passion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
