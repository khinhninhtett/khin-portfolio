
import { motion } from "framer-motion";

export default function Skill() {
  // Stagger wrapper configuration for the micro-grid lists
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  };

  const frontendSkills = [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "Bootstrap", level: "Intermediate" },
    { name: "Git", level: "Basic" },
    { name: "React", level: "Basic" }
  ];

  const backendSkills = [
    { name: "Python", level: "Intermediate" },
    { name: "MySQL", level: "Advanced" },
    { name: "PHP", level: "Intermediate" },
    { name: "Java", level: "Intermediate" }
  ];

  return (
    <section 
      id="skills" 
      className="relative min-h-screen w-full bg-[#090D1A] flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 overflow-hidden select-none py-24"
    >
      {/* Background radial soft light blur fields */}
      <div className="absolute top-[40%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-[radial-gradient(circle,rgba(244,63,94,0.05)_0%,transparent_70%)] filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.06)_0%,transparent_65%)] filter blur-[130px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl mx-auto z-10"
      >
        {/* Section Title Unit */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/4 border border-white/10 text-[10px] font-semibold tracking-[0.25em] uppercase text-rose-400 mb-3 backdrop-blur-xl">
            My Abilities
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-slate-100">
            Technical <span className="font-serif italic font-normal text-transparent bg-clip-text bg-linear-to-r from-rose-400 via-purple-400 to-cyan-400">Skills</span>
          </h2>
        </div>

        {/* Master Column Configuration Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* FRONTEND DEVELOPMENT CARD */}
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            className="bg-white/2 border border-white/6 backdrop-blur-2xl p-6 md:p-8 rounded-3xl shadow-[0_24px_48px_rgba(0,0,0,0.35)] relative group"
          >
            <div className="absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-rose-500/20 to-transparent" />
            <h3 className="text-base md:text-lg font-medium text-slate-100 tracking-wide mb-8 border-b border-white/6 pb-4 flex items-center justify-between">
              Frontend Development
              <span className="text-[10px] uppercase font-mono text-rose-400/60 bg-rose-400/5 px-2.5 py-1 rounded-md border border-rose-500/10">UI/UX Layer</span>
            </h3>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-y-6 gap-x-4"
            >
              {frontendSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants} 
                  className="flex items-start gap-3 group/item"
                >
                  <i className="fa-solid fa-circle-check text-rose-400 text-xs mt-1 shrink-0 transition-transform duration-300 group-hover/item:scale-110 shadow-[0_0_8px_rgba(244,63,94,0.3)]"></i>
                  <div>
                    <h4 className="text-sm font-medium text-slate-200 tracking-wide group-hover/item:text-white transition-colors duration-200">
                      {skill.name}
                    </h4>
                    <span className="text-[11px] font-light text-slate-400 tracking-wide block mt-0.5">
                      {skill.level}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* BACKEND DEVELOPMENT CARD */}
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            className="bg-white/2 border border-white/6 backdrop-blur-2xl p-6 md:p-8 rounded-3xl shadow-[0_24px_48px_rgba(0,0,0,0.35)] relative group"
          >
            <div className="absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-purple-500/20 to-transparent" />
            <h3 className="text-base md:text-lg font-medium text-slate-100 tracking-wide mb-8 border-b border-white/6 pb-4 flex items-center justify-between">
              Backend Development
              <span className="text-[10px] uppercase font-mono text-purple-400/60 bg-purple-400/5 px-2.5 py-1 rounded-md border border-purple-500/10">Server Layer</span>
            </h3>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-y-6 gap-x-4"
            >
              {backendSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants} 
                  className="flex items-start gap-3 group/item"
                >
                  <i className="fa-solid fa-circle-check text-purple-400 text-xs mt-1 shrink-0 transition-transform duration-300 group-hover/item:scale-110 shadow-[0_0_8px_rgba(168,85,247,0.3)]"></i>
                  <div>
                    <h4 className="text-sm font-medium text-slate-200 tracking-wide group-hover/item:text-white transition-colors duration-200">
                      {skill.name}
                    </h4>
                    <span className="text-[11px] font-light text-slate-400 tracking-wide block mt-0.5">
                      {skill.level}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}