import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Activity, Shield, ArrowRight } from 'lucide-react';

const programs = [
    {
        icon: Zap,
        title: "Extreme Power",
        desc: "High-intensity strength training designed for maximum muscle recruitment and explosive power output.",
        price: "$99/mo",
        accent: "white"
    },
    {
        icon: Target,
        title: "Precision Cut",
        desc: "Specialized metabolic conditioning and mobility sessions to carve a shredded, functional physique.",
        price: "$79/mo",
        accent: "gray-400"
    },
    {
        icon: Activity,
        title: "Neural Flow",
        desc: "Advanced mind-body recovery protocols and athletic flexibility for long-term joint health.",
        price: "$69/mo",
        accent: "gray-600"
    },
    {
        icon: Shield,
        title: "Titan Build",
        desc: "Calculated muscle hypertrophy and metabolic wellness strategies for sustainable growth.",
        price: "$129/mo",
        accent: "white"
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 sm:py-32 bg-black text-white overflow-hidden relative">
            {/* Background Text */}
            <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02] select-none">
                <span className="text-[20vw] font-black uppercase whitespace-nowrap leading-none font-display block -translate-x-1/4">
                    PROGRAMS PROGRAMS PROGRAMS
                </span>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 sm:mb-24 gap-8">
                    <div className="max-w-2xl">
                        <span className="section-label mb-4 block">What we offer</span>
                        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase leading-[0.9] tracking-tighter font-display">
                            ELITE <span className="text-gray-500">PROGRAMS</span>
                        </h2>
                    </div>
                    <motion.button 
                        whileHover={{ x: 10 }}
                        className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] border-b border-white/20 pb-2 hover:border-white transition-all font-heading"
                    >
                        See all classes <ArrowRight size={16} className="text-gray-500 group-hover:text-white transition-colors" />
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
                    {programs.map((program, i) => (
                        <motion.div
                            key={program.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                            className="p-10 bg-black flex flex-col items-start transition-all duration-500 group relative overflow-hidden"
                        >
                            {/* Hover accent line */}
                            <motion.div 
                                className="absolute top-0 left-0 w-full h-1 bg-white origin-left"
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                            />

                            <div className="w-12 h-12 mb-8 text-white group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                                <program.icon size={40} strokeWidth={1.5} />
                            </div>
                            
                            <h4 className="text-2xl sm:text-3xl font-black mb-4 uppercase tracking-tight font-display">{program.title}</h4>
                            <p className="text-gray-500 mb-10 leading-relaxed text-sm font-body h-[80px]">
                                {program.desc}
                            </p>
                            
                            <div className="mt-auto flex items-end justify-between w-full">
                                <span className="text-2xl font-black font-display tracking-tight leading-none">{program.price}</span>
                                <motion.div 
                                    whileHover={{ scale: 1.2 }}
                                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <ArrowRight size={14} />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
