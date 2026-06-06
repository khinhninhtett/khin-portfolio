import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import Homephoto from '../../assets/img/khinhninhtetpro.png';

// Reusable premium tilt component for structural micro-depth 
function GlassBentoCard({ children, className, boxTransition, mouseX, mouseY }) {
  const cardRef = useRef(null);
  
  // Create interpolations for a subtle 3D tilt interaction
  const rotateX = useSpring(useMotionValue(0), { damping: 20, stiffness: 100 });
  const rotateY = useSpring(useMotionValue(0), { damping: 20, stiffness: 100 });

  function handleMouseMove(e) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to card center (-0.5 to 0.5)
    const mouseXPos = (e.clientX - rect.left) / width - 0.5;
    const mouseYPos = (e.clientY - rect.top) / height - 0.5;
    
    // Tilt angle restraint (Max 4 degrees for premium editorial restraint)
    rotateX.set(-mouseYPos * 4);
    rotateY.set(mouseXPos * 4);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ y: -6 }}
      transition={boxTransition}
      className={`relative rounded-4xl overflow-hidden group transition-shadow duration-500 ${className}`}
    >
      {/* High-intensity futuristic light refraction glare following the pointer */}
      <motion.div 
        className="absolute -inset-px rounded-4xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30"
        style={{
          background: useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.12) 0%, rgba(168, 85, 247, 0.08) 40%, transparent 80%)`
        }}
      />
      <div style={{ transform: "translateZ(10px)" }} className="h-full w-full flex flex-col justify-end">
        {children}
      </div>
    </motion.div>
  );
}

export default function Home() {
    const { scrollY } = useScroll();
    
    // Smooth modern layout transformations tied directly to scroll mechanics
    const bgParallaxY = useTransform(scrollY, [0, 800], ["0%", "25%"]);
    const canvasScrollTransform = useTransform(scrollY, [0, 800], [0, -45]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleGlobalMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const boxTransition = { type: "spring", stiffness: 80, damping: 18, mass: 0.6 };

    return (
        <section 
            id="home" 
            onMouseMove={handleGlobalMouseMove}
            className="relative min-h-screen w-full bg-[#090D1A] flex items-center justify-center px-4 md:px-8 lg:px-16 overflow-hidden select-none pt-28 lg:pt-32 pb-24"
        >
            
            {/* --- LUMINOUS DEEP NEON LIFT FIELDS --- */}
            <motion.div style={{ y: bgParallaxY }} className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-15%] left-[-10%] w-[75vw] h-[75vw] max-w-237.5 rounded-full bg-[radial-gradient(circle,rgba(244,63,94,0.15)_0%,transparent_65%)] filter blur-[140px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[70vw] h-[70vw] max-w-225 rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.14)_0%,transparent_70%)] filter blur-[150px]" />
                <div className="absolute top-[20%] right-[15%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.1)_0%,transparent_60%)] filter blur-[110px]" />
            </motion.div>

            {/* --- GLASS DIGITAL GRAIN MATRIX MESH --- */}
            <div className="absolute inset-0 z-1 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyIiBoZWlnaHQ9IjIiPgo8cmVjdCB3aWR0aD0iMiIgaGVpZHRoPSIyIiBmaWxsPSIjZmZmIj48L3JlY3Q+Cjwvc3ZnPg==')]" />

            {/* --- CORE MODERN BENTO CONFIGURATION --- */}
            <motion.div 
                style={{ y: canvasScrollTransform }}
                initial={{ opacity: 0, scale: 0.97, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-7xl mx-auto z-10 grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-max"
            >
                
                {/* PANEL 1: MAIN HERO CARD (Spans 8 Columns) */}
                <GlassBentoCard 
                    className="md:col-span-12 lg:col-span-8 bg-white/2 border border-white/8 backdrop-blur-2xl p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)]"
                    boxTransition={boxTransition} mouseX={mouseX} mouseY={mouseY}
                >
                    <div>
                        {/* Premium Glass Cyber Pill */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/4 border border-white/10 text-[10px] font-semibold tracking-[0.25em] uppercase text-rose-400 shadow-[0_4px_24px_rgba(244,63,94,0.05)] mb-12 w-max backdrop-blur-xl">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse shadow-[0_0_10px_rgba(244,63,94,0.8)]" />
                            Creating with Love & Logic
                        </div>

                        <h1 className="text-4xl sm:text-6xl lg:text-[4.6vw] font-light tracking-tight text-slate-100 leading-[1.05]">
                            Building digital <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-rose-400 via-purple-400 to-cyan-400 font-serif italic font-normal tracking-normal">
                                sweet harmonies
                            </span> <br />
                            with software layers.
                        </h1>
                    </div>

                    <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-white/6">
                        <p className="text-sm text-slate-400 max-w-md font-light leading-relaxed">
                            Hi, I am <span className="text-slate-200 font-medium">Khin Hnin Htet</span>. A fullstack developer nesting high-performance system architectures inside clean, dreamy interfaces.
                        </p>
                        <a 
                            href="#contact" 
                            className="group flex items-center gap-2.5 px-6 py-4 bg-linear-to-r from-rose-500 to-purple-600 text-white font-medium rounded-2xl text-xs uppercase tracking-wider transition-all duration-300 hover:opacity-90 hover:shadow-[0_12px_32px_rgba(244,63,94,0.25)] shrink-0 shadow-lg"
                        >
                            Start Project
                            <i className="fa-solid fa-heart text-xs transition-transform duration-300 group-hover:scale-125 text-white/50 group-hover:text-white"></i>
                        </a>
                    </div>
                </GlassBentoCard>

                {/* PANEL 2: MATTE PHOTO CONTAINER (Spans 4 Columns) */}
                <GlassBentoCard 
                    className="md:col-span-6 lg:col-span-4 h-110 lg:h-auto bg-white/3 border border-white/10 backdrop-blur-2xl p-3.5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] flex flex-col justify-end"
                    boxTransition={boxTransition} mouseX={mouseX} mouseY={mouseY}
                >
                    <div className="absolute inset-0 z-0 bg-slate-900 rounded-4xl overflow-hidden m-1 border border-white/4">
                        <img 
                            src={Homephoto} 
                            alt="Khin Hnin Htet Portrait" 
                            className="w-full h-full object-cover object-center opacity-85 brightness-95 scale-[1.01] group-hover:scale-[1.05] transition-all duration-1000 ease-[0.16,1,0.3,1]"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/40 to-transparent opacity-95" />
                    </div>

                    <div className="relative z-10 w-full p-5 rounded-[22px] bg-white/3 backdrop-blur-xl border border-white/8 flex flex-row-reverse gap-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)] mt-auto">
                        <div className="w-full flex justify-end">
                            <div className="h-9 w-9 rounded-full bg-white/4 text-slate-200 flex items-center justify-center border border-white/8 shadow-sm">
                                <i className="fa-solid fa-wand-magic-sparkles text-xs text-purple-400 animate-pulse"></i>
                            </div>
                        </div>

                        <div className="w-full text-left">
                            <span className="text-[9px] uppercase tracking-widest font-semibold text-rose-400 block mb-0.5">Identity Card</span>
                            <h3 className="text-sm font-medium text-slate-100 tracking-wide">Khin Hnin Htet</h3>
                        </div>
                    </div>
                </GlassBentoCard>

                {/* PANEL 3: STACK CAPABILITIES MATRIX (Spans 5 Columns) */}
                <GlassBentoCard 
                    className="md:col-span-6 lg:col-span-5 bg-white/1 border border-white/6 backdrop-blur-xl p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.4)]"
                    boxTransition={boxTransition} mouseX={mouseX} mouseY={mouseY}
                >
                    <div className="flex items-center justify-between mb-8">
                        <h4 className="text-xs uppercase font-semibold tracking-widest text-slate-400">Tech Frameworks</h4>
                        <div className="h-8 w-8 rounded-xl bg-white/3 border border-white/8 text-cyan-400 flex items-center justify-center shadow-sm text-xs">
                            <i className="fa-solid fa-cubes"></i>
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2.5">
                        {["React.js", "Python", "PHP", "Java", "Figma Art", "MySQL"].map((stack, idx) => (
                            <span key={idx} className="text-xs font-light px-4 py-3 rounded-2xl bg-white/3 border border-white/6 text-slate-300 shadow-sm backdrop-blur-sm hover:bg-white/6 hover:text-white transition-colors duration-300">
                                {stack}
                            </span>
                        ))}
                    </div>
                </GlassBentoCard>

                {/* PANEL 4: METRIC ANALYTIC HUD (Spans 3 Columns) */}
                <GlassBentoCard 
                    className="md:col-span-6 lg:col-span-3 bg-white/1 border border-white/6 backdrop-blur-xl p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.4)]"
                    boxTransition={boxTransition} mouseX={mouseX} mouseY={mouseY}
                >
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-400">Product Standard</span>
                    <div className="mt-8">
                        <div className="text-5xl font-light text-slate-100 tracking-tighter bg-clip-text bg-linear-to-r from-white via-slate-200 to-slate-400">100%</div>
                        <div className="text-[11px] text-slate-400 font-light mt-2 leading-relaxed">Fluid Adaptability Craft</div>
                    </div>
                </GlassBentoCard>

                {/* PANEL 5: HIGH-INTERACTION SOCIAL INTERFACE (Spans 4 Columns) */}
                <GlassBentoCard 
                    className="md:col-span-6 lg:col-span-4 bg-white/1 border border-white/6 backdrop-blur-xl p-6 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.4)]"
                    boxTransition={boxTransition} mouseX={mouseX} mouseY={mouseY}
                >
                    <div className="grid grid-cols-3 gap-3 w-full h-full items-center">
                        {[
                            { name: "Tiktok", icon: "fa-brands fa-tiktok", url: "https://www.tiktok.com/@user304747139" },
                            { name: "Insta", icon: "fa-brands fa-instagram", url: "https://www.instagram.com/your_priority_23" },
                            { name: "Fb", icon: "fa-brands fa-facebook-f", url: "https://www.facebook.com/share/19X6jQJYoQ/" }
                        ].map((social, idx) => (
                            <a 
                                key={idx}
                                href={social.url} 
                                target="_blank"
                                rel="noreferrer"
                                className="flex flex-col items-center justify-center gap-3 py-5 rounded-[22px] bg-white/2 border border-white/6 text-slate-400 hover:text-rose-400 hover:bg-white/6 hover:border-white/12 transition-all duration-300 group/item"
                            >
                                <i className={`${social.icon} text-lg transition-transform duration-300 group-hover/item:scale-110`}></i>
                                <span className="text-[9px] font-semibold tracking-wider uppercase">{social.name}</span>
                            </a>
                        ))}
                    </div>
                </GlassBentoCard>

            </motion.div>
        </section>
    );
}