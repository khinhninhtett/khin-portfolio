
import { motion } from "framer-motion";
import KhinHninHtet from '../../assets/img/profile.jpg';
import Resume from '../../assets/pdf/KhinHninHtet_Resume.pdf';

export default function About() {
  const cardTransition = { type: "spring", stiffness: 80, damping: 18, mass: 0.6 };

  return (
    <section 
      id="about" 
      className="relative min-h-screen w-full bg-[#090D1A] flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 overflow-hidden select-none py-24"
    >
      {/* Structural Subtle Glow Field background details */}
      <div className="absolute top-[30%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.08)_0%,transparent_70%)] filter blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-15%] w-[65vw] h-[65vw] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.06)_0%,transparent_65%)] filter blur-[140px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-7xl mx-auto z-10"
      >
        {/* Section Header Segment */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/4 border border-white/10 text-[10px] font-semibold tracking-[0.25em] uppercase text-rose-400 mb-3 backdrop-blur-xl">
            My Intro
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-slate-100">
            About <span className="font-serif italic font-normal text-transparent bg-clip-text bg-linear-to-r from-rose-400 via-purple-400 to-cyan-400">Me</span>
          </h2>
        </div>

        {/* Layout Grid Configuration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* PROFILE IMAGE PANEL (Spans 4 columns) */}
          <motion.div 
            whileHover={{ y: -6 }}
            transition={cardTransition}
            className="lg:col-span-4 justify-self-center lg:justify-self-start relative group rounded-4xl overflow-hidden p-3 bg-white/3 border border-white/10 backdrop-blur-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] max-w-sm w-full aspect-square"
          >
            <div className="w-full h-full rounded-3xl overflow-hidden relative bg-slate-900 border border-white/4">
              <img 
                src={KhinHninHtet} 
                alt="Khin Hnin Htet Profile" 
                className="w-full h-full object-cover grayscale opacity-80 brightness-90 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-[0.16,1,0.3,1]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-40" />
            </div>
          </motion.div>

          {/* DATA METRICS & BIO CONTENT (Spans 8 columns) */}
          <div className="lg:col-span-8 flex flex-col justify-between h-full space-y-8">
            
            {/* Bento Metric Boxes Subgrid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "Experience", value: "2 Years", icon: "fa-solid fa-award text-rose-400" },
                { title: "Completed", value: "7+ Projects", icon: "fa-solid fa-briefcase text-purple-400" },
                { title: "Support", value: "Online 24/7", icon: "fa-solid fa-headset text-cyan-400" }
              ].map((box, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  transition={cardTransition}
                  className="bg-white/2 border border-white/6 backdrop-blur-xl p-5 rounded-2xl flex flex-col items-center justify-center text-center shadow-[0_16px_32px_rgba(0,0,0,0.2)] group"
                >
                  <div className="h-10 w-10 rounded-xl bg-white/4 flex items-center justify-center border border-white/8 mb-3 shadow-sm transition-all duration-300 group-hover:scale-110">
                    <i className={`${box.icon} text-sm`}></i>
                  </div>
                  <h3 className="text-xs font-medium text-slate-200 tracking-wide mb-0.5">{box.title}</h3>
                  <span className="text-[11px] font-light text-slate-400">{box.value}</span>
                </motion.div>
              ))}
            </div>

            {/* Editorial Bio Paragraph Statement */}
            <div className="bg-white/1 border border-white/6 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-[0_24px_48px_rgba(0,0,0,0.3)]">
              <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed tracking-wide">
                I'm <span className="text-rose-400 font-medium">Khin Hnin Htet</span>, a 23-year-old Full Stack Developer and a final-year student at the University of Computer Studies, Mandalay. I design and develop complete web applications, handling both frontend and backend architectures with premium modern technologies.
              </p>
              <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed tracking-wide mt-4">
                My absolute focus lies in sculpting responsive, user-friendly interfaces balanced cleanly over efficient, highly secure server-side infrastructure layers. Through structural dedication, I continuously deliver sleek, high-end digital solutions.
              </p>
            </div>

            {/* Action Segment Interactive Element */}
            <div className="flex items-center pt-2">
              <a 
                href={Resume} 
                download="KhinHninHtet_Resume.pdf"
                className="group flex items-center gap-2.5 px-7 py-4 bg-linear-to-r from-rose-500 to-purple-600 text-white font-medium rounded-2xl text-xs uppercase tracking-wider transition-all duration-300 hover:opacity-95 hover:shadow-[0_12px_32px_rgba(244,63,94,0.2)] shadow-lg shrink-0"
              >
                Download Resume
                <i className="fa-solid fa-arrow-down text-xs transition-transform duration-300 group-hover:translate-y-0.5 text-white/60 group-hover:text-white"></i>
              </a>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}