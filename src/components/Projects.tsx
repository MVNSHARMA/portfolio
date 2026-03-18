import { link } from "fs";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "AI CHEST XRAY ANALYSER",
    category: "AI/ML",
    description: "This project is an AI-powered Medical Assistant designed to classify chest X-ray images,",
    color: "from-blue-500/20 to-purple-500/20",
    link: "https://huggingface.co/spaces/MVNSHARMA/chest-xray",
  },
  {
    id: 2,
    title: "SUGAR COATED MOOD JOURNAL",
    category: "Web Page",
    description: "A web application designed to help users track their mood and journal their thoughts.",
    color: "from-emerald-500/20 to-teal-500/20",
    link: "https://huggingface.co/spaces/MVNSHARMA/sugar-coated-mood-journal",
  },
  {
    id: 3,
    title: "SMART STYLE",
    category: "AI/ML",
    description: "This project is an AI-powered Fashion Assistant designed to help users find the perfect outfit for any occasion.",
    color: "from-orange-500/20 to-red-500/20",
    link: "https://smart-style.vercel.app/",
  },
  {
    id: 4,
    title: "AI Chat Interface",
    category: "UX / UI",
    description: "Conversational interface with fluid framer-motion interactions and a sleek dark mode design.",
    color: "from-indigo-500/20 to-blue-500/20",
  }
];

export default function Projects() {
  return (
    <section className="relative z-20 w-full min-h-screen bg-[#121212] py-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
            Previous Projects
          </h3>
          <p className="text-white/60 text-lg max-w-2xl font-light">
            A showcase of recent projects build using AI and Machine Learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => {
            const cardContent = (
              <>
                {/* Subtle hover glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out`}
                />

                <div className="relative z-10 p-8 h-full flex flex-col justify-between min-h-[320px]">
                  <div>
                    <div className="text-white/50 text-sm font-mono tracking-widest uppercase mb-4">
                      {project.category}
                    </div>
                    <h4 className="text-2xl md:text-3xl font-medium text-white mb-4">
                      {project.title}
                    </h4>
                    <p className="text-white/70 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="group-hover:translate-x-2 transition-transform duration-300 self-end mt-8">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-md group-hover:bg-white/10 transition-colors">
                      <ArrowUpRight className="text-white w-5 h-5" />
                    </div>
                  </div>
                </div>
              </>
            );

            const cardClasses =
              "group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden cursor-pointer transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05]";

            return project.link ? (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClasses}
              >
                {cardContent}
              </a>
            ) : (
              <div key={project.id} className={cardClasses}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
