import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative bg-[#080808]">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-white z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      <Hero />
      <About />
      <Services />

      {/* Contact Section */}
      <section id="contact" className="py-24 sm:py-32 bg-white text-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <span className="section-label mb-6 block">Ready to start?</span>
            <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black uppercase leading-[0.85] mb-12 sm:mb-16 font-display tracking-tighter">
              JOIN THE <br className="hidden sm:block" /> <span className="text-gray-300 stroke-text" style={{ WebkitTextStroke: '2px black' }}>ELITE</span>
            </h2>
            
            <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-0 sm:gap-0 border-2 border-black overflow-hidden group shadow-2xl">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="flex-1 px-8 py-6 text-sm font-bold uppercase tracking-widest outline-none focus:bg-black focus:text-white transition-all bg-transparent placeholder:text-gray-400 font-heading"
              />
              <button className="px-12 py-6 bg-black text-white font-black uppercase tracking-widest text-sm hover:bg-gray-800 transition-all font-heading">
                Join Now
              </button>
            </div>
            
            <p className="mt-8 text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest font-heading font-medium">
              By joining you agree to our terms & privacy policy.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 sm:py-24 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16">
            
            {/* Branding */}
            <div className="lg:col-span-2">
              <span className="text-4xl font-black text-white uppercase tracking-tighter font-display">
                A TO Z <span className="text-gray-700">FITNESS</span>
              </span>
              <p className="mt-6 text-gray-500 text-sm max-w-sm leading-relaxed font-body">
                The ultimate sanctuary for physical and mental transformation. Our elite facilities and world-class training programs are designed to push you beyond your perceived limits.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8 font-heading">Sitemap</h4>
              <ul className="space-y-4 text-gray-500 text-xs font-semibold uppercase tracking-widest font-heading">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8 font-heading">Connect</h4>
              <div className="flex flex-col gap-4 text-gray-500 text-xs font-semibold uppercase tracking-widest font-heading">
                <a href="#" className="hover:text-white transition-colors border-b border-white/5 pb-2">Instagram</a>
                <a href="#" className="hover:text-white transition-colors border-b border-white/5 pb-2">Twitter</a>
                <a href="#" className="hover:text-white transition-colors border-b border-white/5 pb-2">Facebook</a>
              </div>
            </div>

          </div>

          <div className="mt-16 sm:mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-[10px] text-gray-600 uppercase font-bold tracking-[0.3em] font-heading">
              © 2024 A TO Z FITNESS. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-8 text-[10px] text-gray-600 uppercase font-bold tracking-[0.3em] font-heading">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
