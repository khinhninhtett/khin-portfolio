import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Asset Imports
import Condo from '../../assets/img/work/condo.png';
import Monachies from '../../assets/img/work/monichies.png';
import RemoteCode from '../../assets/img/work/remoteCode.png';
import BookShop from '../../assets/img/work/bookshop.jpg';
import Portfolio from '../../assets/img/work/portfolio.png';
import KidGarden from '../../assets/img/work/KidGarden.png';
import POS from '../../assets/img/work/pos.jpg';

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { label: "All", value: "all" },
    { label: "Web", value: "web" },
    { label: "RMI", value: "rmi" },
    { label: "Design", value: "design" }
  ];

  const projects = [
    { img: Condo, title: "Condo Market Place Website", category: "web" },
    { img: Monachies, title: "Monarchy Today", category: "web" },
    { img: RemoteCode, title: "Remote Code Executor", category: "rmi" },
    { img: POS, title: "Point of Sale System", category: "web" },
    { img: BookShop, title: "Book Shop", category: "web" },
    { img: Portfolio, title: "My Portfolio", category: "web" },
    { img: KidGarden, title: "Kid's Garden", category: "design" }
  ];

  // Filter items matching state cleanly in React memory
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section 
      id="work" 
      className="relative min-h-screen w-full bg-[#090D1A] flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 overflow-hidden py-24 select-none"
    >
      {/* Background radial ambient lights */}
      <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.04)_0%,transparent_70%)] filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-15%] w-[55vw] h-[55vw] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.05)_0%,transparent_70%)] filter blur-[130px] pointer-events-none" />

      <div className="relative w-full max-w-6xl mx-auto z-10">
        
        {/* Section Heading Header Block */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/4 border border-white/10 text-[10px] font-semibold tracking-[0.25em] uppercase text-cyan-400 mb-3 backdrop-blur-xl">
            My Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-slate-100">
            Recent <span className="font-serif italic font-normal text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-emerald-400 to-indigo-400">Works</span>
          </h2>
        </div>

        {/* Dynamic Navigation Filter Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16 max-w-md mx-auto p-1.5 bg-white/2 border border-white/6 rounded-full backdrop-blur-2xl shadow-2xl">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`relative px-5 py-2 text-xs font-medium tracking-wide rounded-full transition-colors duration-300 cursor-pointer outline-hidden select-none ${
                activeFilter === filter.value 
                  ? "text-slate-900 font-semibold" 
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {/* Sliding glass pill backdrop track */}
              {activeFilter === filter.value && (
                <motion.div 
                  layoutId="activePill"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  className="absolute inset-0 bg-linear-to-r from-cyan-400 to-emerald-400 rounded-full z-0 shadow-[0_4px_20px_rgba(34,211,238,0.3)]"
                />
              )}
              <span className="relative z-10">{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Project Display Grid Container */}
        {/* Note: "overflow-hidden" on individual elements keeps content inside borders during fluid transformations */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full items-start"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ type: "spring", stiffness: 400, damping: 38 }}
                className="bg-white/2 border border-white/6 rounded-2xl p-4 flex flex-col group hover:border-white/12 transition-all duration-300 relative shadow-[0_24px_48px_rgba(0,0,0,0.25)] overflow-hidden"
              >
                {/* Subtle top edge glow layer on hover */}
                <div className="absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Image Window Wrap */}
                <div className="w-full aspect-5/3 rounded-xl overflow-hidden mb-4 relative bg-slate-950/40 border border-white/4">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.92] group-hover:brightness-100" 
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-300" />
                </div>

                {/* Card Meta Content Block */}
                <div className="mt-1 px-1 flex items-center justify-between gap-4 w-full">
                  <h3 className="text-sm font-medium text-slate-200 tracking-wide group-hover:text-white transition-colors duration-200 line-clamp-1">
                    {project.title}
                  </h3>
                  
                  {/* Arrow interaction link anchor icon */}
                  <div className="h-7 w-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/5 transition-all duration-300 shrink-0 transform group-hover:translate-x-0.5">
                    <i className="fa-solid fa-arrow-up-right text-[10px]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}