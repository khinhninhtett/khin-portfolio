
export default function Footer() {
  return (
    <footer className="w-full bg-[#070A14] border-t border-white/5 py-12 relative overflow-hidden select-none">
      {/* Tiny bottom glow accent track */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[150px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.03)_0%,transparent_70%)] filter blur-xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Brand/Title Header Element */}
        <div className="group flex items-center gap-2">
          <h1 className="text-sm font-medium tracking-wide text-slate-400 group-hover:text-slate-200 transition-colors duration-300">
            Khin Hnin Htet <span className="text-slate-600 font-light mx-1.5">|</span> <span className="font-serif italic font-normal text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-rose-400 opacity-90 group-hover:opacity-100 transition-opacity">Portfolio</span>
          </h1>
        </div>

        {/* Structural Copyright Text Meta Block */}
        <div className="text-center sm:text-right">
          <p className="text-[11px] font-light text-slate-500 tracking-wide leading-relaxed">
            &copy; {new Date().getFullYear()} <span className="text-slate-400 font-medium">Khin Hnin Htet</span>. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}