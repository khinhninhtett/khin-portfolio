import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showMessage, setShowMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowMessage(true);
        setFormData({ name: "", email: "", message: "" }); // Clear fields
        setTimeout(() => setShowMessage(false), 4000); // Hide toast after 4s
      } else {
        const errorData = await response.json();
        alert(`Submission Error: ${errorData.error || "Please try again later."}`);
      }
    } catch (err) {
      console.error("Form network delivery error:", err);
      alert("Network failure. Please try using the direct contact card options.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen w-full bg-[#090D1A] flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 overflow-hidden py-24 select-none">
      
      {/* SELF-CONTAINED PREMIUM TOAST NOTIFICATION MODULE */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.2 } }}
            className="fixed top-6 right-6 z-[99999] flex items-center gap-3.5 bg-slate-900/80 backdrop-blur-xl border border-emerald-500/30 px-5 py-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
          >
            {/* Pulsing Green Indicator Ring */}
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </div>
            
            <div className="flex flex-col gap-0.5">
              <h5 className="text-xs font-semibold text-slate-100 tracking-wide">Success</h5>
              <p className="text-[11px] text-slate-400 font-light">Message delivered successfully!</p>
            </div>

            {/* Manual Close Button */}
            <button 
              onClick={() => setShowMessage(false)}
              className="ml-4 text-slate-500 hover:text-slate-300 transition-colors text-xs p-1"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Structural Fluid Background Ambient Light Elements */}
      <div className="absolute top-[30%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(244,63,94,0.04)_0%,transparent_70%)] filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.04)_0%,transparent_70%)] filter blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-5xl mx-auto z-10">
        
        {/* Section Heading Titles */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/4 border border-white/10 text-[10px] font-semibold tracking-[0.25em] uppercase text-rose-400 mb-3 backdrop-blur-xl">
            Get in touch
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-slate-100">
            Contact <span className="font-serif italic font-normal text-transparent bg-clip-text bg-linear-to-r from-rose-400 via-purple-400 to-indigo-400">Me</span>
          </h2>
        </div>

        {/* Dual Layout Contact Grid Split */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          
          {/* LEFT COLUMN: INTERACTIVE CONNECT CARDS */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <h3 className="text-base font-medium tracking-wide text-slate-300 mb-2 border-b border-white/5 pb-3">
              Talk to me
            </h3>

            {/* Email Card */}
            <div className="bg-white/2 border border-white/6 backdrop-blur-2xl p-5 rounded-2xl flex flex-col group relative transition-all duration-300 hover:border-white/12 shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
              <i className="fa-solid fa-envelope text-rose-400 text-xl mb-3" />
              <h4 className="text-sm font-medium text-slate-200">Email</h4>
              <span className="text-xs text-slate-400 mt-1 mb-4 select-all font-mono">khinhninhtet447@gmail.com</span>
              <a href="mailto:khinhninhtet447@gmail.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-rose-400 group-hover:text-rose-300 transition-colors duration-200 w-fit">
                Write Me <i className="fa-solid fa-arrow-right text-[10px] transform group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-white/2 border border-white/6 backdrop-blur-2xl p-5 rounded-2xl flex flex-col group relative transition-all duration-300 hover:border-white/12 shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
              <i className="fa-solid fa-phone text-emerald-400 text-xl mb-3" />
              <h4 className="text-sm font-medium text-slate-200">Phone No.</h4>
              <span className="text-xs text-slate-400 mt-1 mb-4 select-all font-mono">+959 775 784 683</span>
              <a href="tel:+959775784683" className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 group-hover:text-emerald-300 transition-colors duration-200 w-fit">
                Call Me <i className="fa-solid fa-arrow-right text-[10px] transform group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Telegram Card */}
            <div className="bg-white/2 border border-white/6 backdrop-blur-2xl p-5 rounded-2xl flex flex-col group relative transition-all duration-300 hover:border-white/12 shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
              <i className="fa-brands fa-telegram text-cyan-400 text-xl mb-3" />
              <h4 className="text-sm font-medium text-slate-200">Telegram</h4>
              <span className="text-xs text-slate-400 mt-1 mb-4 font-mono">@KhinHnin21</span>
              <a href="https://t.me/KhinHnin21" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200 w-fit">
                Write Me <i className="fa-solid fa-arrow-right text-[10px] transform group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: FORM */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <h3 className="text-base font-medium tracking-wide text-slate-300 mb-2 border-b border-white/5 pb-3">
              Write Me your Message
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
              <div className="relative flex flex-col gap-2 p-3 bg-white/2 border border-white/6 rounded-xl focus-within:border-rose-500/40 transition-colors duration-200">
                <label className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter name"
                  className="bg-transparent border-none text-slate-200 text-sm outline-hidden w-full placeholder-slate-500 font-light mt-0.5"
                  required
                />
              </div>

              <div className="relative flex flex-col gap-2 p-3 bg-white/2 border border-white/6 rounded-xl focus-within:border-rose-500/40 transition-colors duration-200">
                <label className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Mail</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="bg-transparent border-none text-slate-200 text-sm outline-hidden w-full placeholder-slate-500 font-light mt-0.5"
                  required
                />
              </div>

              <div className="relative flex flex-col gap-2 p-3 bg-white/2 border border-white/6 rounded-xl focus-within:border-rose-500/40 transition-colors duration-200">
                <label className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Write your message"
                  className="bg-transparent border-none text-slate-200 text-sm outline-hidden w-full resize-none placeholder-slate-500 font-light mt-0.5 leading-relaxed"
                  required
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full md:w-fit px-8 py-3.5 bg-slate-100 hover:bg-white text-slate-900 rounded-xl font-medium text-xs tracking-wide transition-all duration-300 cursor-pointer shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>Sending Message...</>
                ) : (
                  <>Send Message <i className="fa-solid fa-paper-plane text-[10px]" /></>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}