import React from 'react';
import { motion } from 'framer-motion';
import Hero3D from './Hero3D';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section
            id="home"
            className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
        >
            {/* Hero background image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/gym_hero_bg.png')" }}
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 z-0 bg-black/65" />

            {/* 3D canvas on top of image */}
            <div className="absolute inset-0 z-[1] mix-blend-screen opacity-60">
                <Hero3D />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >

                    <h1
                        className="hero-title text-[clamp(2.5rem,10vw,7.5rem)] text-white uppercase leading-[0.9] mb-8 mt-24 sm:mt-16 tracking-tighter"
                    >
                        UNLEASH<br />
                        THE{' '}
                        <span
                            className="stroke-text inline-block"
                        >
                            WARRIOR
                        </span>
                    </h1>

                    <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto mb-8 sm:mb-12 leading-relaxed font-light">
                        Transform your body. Conquer your limits. Join the elite who train at A TO Z Fitness.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.04, backgroundColor: '#fff', color: '#000' }}
                            whileTap={{ scale: 0.96 }}
                            className="w-full sm:w-auto px-10 py-4 border-2 border-white text-white font-bold uppercase tracking-widest text-xs transition-all text-center font-heading"
                        >
                            Start Your Journey
                        </motion.a>
                        <motion.a
                            href="#services"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur text-white font-bold uppercase tracking-widest text-xs border border-white/20 hover:bg-white/20 transition-all text-center font-heading"
                        >
                            View Programs
                        </motion.a>
                    </div>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex justify-center gap-8 sm:gap-16 mt-12 sm:mt-20 border-t border-white/10 pt-8"
                >
                    {[
                        { value: '500+', label: 'Athletes' },
                        { value: '24/7', label: 'Access' },
                        { value: '15+', label: 'Trainers' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <span className="block text-2xl sm:text-4xl text-white font-display" style={{ letterSpacing: '0.05em' }}>{stat.value}</span>
                            <span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest font-medium section-label">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
            >
                <span className="text-gray-600 uppercase tracking-widest text-[9px] font-bold">Scroll</span>
                <ChevronDown className="text-gray-500 w-4 h-4" />
            </motion.div>
        </section>
    );
};

export default Hero;
