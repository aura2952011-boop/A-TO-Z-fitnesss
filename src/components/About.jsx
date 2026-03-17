import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 sm:py-32 bg-white text-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-center">
                    
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <span className="section-label mb-4 block">Our Philosophy</span>
                        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-10 leading-[0.9] tracking-tighter uppercase font-display max-w-lg lg:max-w-xl">
                            EVOLVE BEYOND <br /> 
                            <span className="text-gray-400">THE MACHINE</span>
                        </h2>
                        
                        <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed font-body max-w-xl">
                            <p>
                                At A TO Z FITNESS, we believe that fitness is a journey of extreme discipline and modern science. 
                                Our monochrome-inspired sanctuary is designed to strip away distractions and focus on the raw 
                                power of human transformation.
                            </p>
                            <p className="font-medium text-black italic border-l-4 border-black pl-6 py-2">
                                "The only limit is the one you set for yourself. We're here to help you smash it."
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t border-gray-100">
                            <div>
                                <span className="block text-4xl sm:text-5xl font-black text-black leading-none font-display">500+</span>
                                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500 font-heading">Elite Athletes</span>
                            </div>
                            <div>
                                <span className="block text-4xl sm:text-5xl font-black text-black leading-none font-display">24/7</span>
                                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500 font-heading">Premium Access</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="relative order-1 lg:order-2"
                    >
                        <div className="relative z-10 aspect-[4/5] sm:aspect-square lg:aspect-[4/5] overflow-hidden">
                            <img 
                                src="/gym_about.png" 
                                alt="Athlete training" 
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-black/10 hidden sm:block" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-black/10 hidden sm:block" />
                        
                        {/* Floating Badge */}
                        <div className="absolute bottom-8 right-8 bg-black text-white p-6 sm:p-8 hidden sm:block shadow-2xl">
                            <span className="block text-3xl font-black font-display leading-none">EST. 2024</span>
                            <span className="text-[10px] uppercase tracking-widest font-heading">Elite Standards</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
