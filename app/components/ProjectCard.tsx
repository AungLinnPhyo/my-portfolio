interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    // ✨ Modern Style: Backdrop blur, glowing hover effect
    <div className="group relative bg-slate-900/40 backdrop-blur-xl border border-slate-800/60 rounded-3xl p-7 hover:border-teal-500/40 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500 flex flex-col justify-between overflow-hidden">
      {/* Background Glow on Hover */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

      <div>
        <h3 className="text-2xl font-extrabold text-white group-hover:text-teal-300 transition duration-300 tracking-tight mb-2.5">
          {title}
        </h3>
        <p className="text-slate-400 text-[15px] leading-relaxed mb-5 font-mono">
          {description}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-2.5 mb-7">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-800/60 text-teal-300 border border-slate-700/50"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-5 text-[15px] font-bold">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              className="text-slate-400 hover:text-white transition flex items-center gap-2"
            >
              Code →
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              className="text-teal-400 hover:text-teal-300 transition flex items-center gap-2"
            >
              Live Demo 🔥
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
