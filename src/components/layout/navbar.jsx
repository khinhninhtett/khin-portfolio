import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollHeader, setScrollHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Toggle glass header activation background styling state
      setScrollHeader(scrollY >= 50);

      // Dynamic Active Element Layout Matrix Highlight Logic
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 160; 
        const sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      // FIXED: Corrected Tailwind exclamation overrides (!fixed !top-0 !inset-x-0 !z-50)
      className={`!fixed !top-0 !inset-x-0 !z-50 w-full transition-all duration-500 px-4 md:px-8 lg:px-16 py-4 ${
        scrollHeader 
          ? "bg-[#090D1A]/40 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_16px_32px_rgba(0,0,0,0.4)]" 
          : "bg-transparent border-b border-transparent"
      }`} 
      id="header"
    >
      <nav className="max-w-7xl mx-auto w-full flex items-center justify-between h-14 select-none">
        
        {/* Brand Identity / Logo */}
        <a 
          href="#home" 
          className="text-sm font-medium tracking-wider text-slate-100 hover:text-rose-400 transition-colors duration-300 font-sans"
        >
          Khin Hnin Htet
        </a>

        {/* Floating Menu Pod Control Element */}
        <div className="rounded-full bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_8px_32px_rgba(0,0,0,0.2)]">
          <ul className="flex items-center gap-1.5">
            {[
              { id: "home", href: "#home", icon: "fa-solid fa-house" },
              { id: "about", href: "#about", icon: "fa-solid fa-user" },
              { id: "skills", href: "#skills", icon: "fa-solid fa-code" },
              { id: "work", href: "#work", icon: "fa-solid fa-briefcase" },
              { id: "contact", href: "#contact", icon: "fa-solid fa-comment-dots" },
            ].map((item) => (
              <li key={item.id} className="relative">
                <a 
                  href={item.href} 
                  className={`relative flex items-center justify-center w-10 h-10 rounded-full text-xs transition-all duration-300 group z-10 ${
                    activeSection === item.id 
                      ? "text-rose-400 font-semibold bg-white/[0.04] border border-white/[0.08] shadow-[0_4px_12px_rgba(0,0,0,0.2)]" 
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <i className={`${item.icon} text-sm transition-transform duration-300 group-hover:scale-110`}></i>
                  
                  {/* Subtle decorative active dot indicator */}
                  {activeSection === item.id && (
                    <span className="absolute bottom-1 w-1 h-1 rounded-full bg-rose-400 shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button Segment for Premium Design Symmetry */}
        <div className="hidden sm:flex items-center">
          <a 
            href="#contact" 
            className="text-[11px] uppercase tracking-widest text-slate-300 hover:text-white px-5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] transition-all duration-300 hover:bg-white/[0.06]"
          >
            Say Hello
          </a>
        </div>

      </nav>
    </header>
  );
}