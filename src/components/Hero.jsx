import React, { useState, useEffect } from 'react';
import { Search, MapPin, ShieldCheck, Heart, ChevronRight, ChevronLeft, Zap, Sparkles, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    {
        title: "Bringing Excellence To Your Healthcare",
        subtitle: "Experience world-class medical care with cutting-edge technology and compassionate experts.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1920",
        badge: "No. 1 Healthcare Provider",
        color: "blue"
    },
    {
        title: "Pioneering The Future of Robotic Surgery",
        subtitle: "Unmatched precision with Da Vinci Xi robotic systems for faster recovery and better outcomes.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920",
        badge: "Advanced Technology",
        color: "orange"
    },
    {
        title: "Advanced Cardiac & Cancer Care",
        subtitle: "Dedicated centers of excellence staffed by world-renowned specialists and survivors.",
        image: "https://images.unsplash.com/photo-1579154235884-332cfa66bc8d?auto=format&fit=crop&q=80&w=1920",
        badge: "Clinical Excellence",
        color: "green"
    }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative w-full h-[600px] lg:h-[750px] bg-slate-900 transition-colors duration-300">
            {/* Slide Wrapper with overflow hidden */}
            <div className="absolute inset-0 overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0"
                    >
                        <img
                            src={slides[current].image}
                            alt={slides[current].title}
                            className="w-full h-full object-cover opacity-85 mix-blend-overlay"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/20 to-transparent"></div>

                        <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center relative z-10">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="space-y-6 max-w-3xl"
                            >
                                <div className={`inline-block px-4 py-1.5 rounded-full bg-slate-800/80 backdrop-blur-md border border-slate-700 text-white text-xs font-black uppercase tracking-widest`}>
                                    <span className="text-orange-500 mr-2">✦</span> {slides[current].badge}
                                </div>
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight drop-shadow-2xl">
                                    {slides[current].title}
                                </h1>
                                <p className="text-lg text-slate-100 max-w-lg leading-relaxed font-medium drop-shadow-lg">
                                    {slides[current].subtitle}
                                </p>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-orange-500/30 transition-all transform hover:-translate-y-1">
                                        Book Appointment
                                    </button>
                                    <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md px-8 py-4 rounded-2xl font-bold transition-all">
                                        Our Services
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="absolute bottom-16 left-4 lg:left-0 w-full px-4 lg:px-20 z-20 flex justify-between items-end">
                <div className="flex gap-4">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={`h-2 transition-all duration-500 rounded-full ${idx === current ? 'w-12 bg-white' : 'w-2 bg-white/30'}`}
                        />
                    ))}
                </div>

                <div className="flex gap-3">
                    <button onClick={prev} className="p-3 bg-white/10 backdrop-blur-md rounded-xl text-white hover:bg-white/20 border border-white/10 transition-all">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={next} className="p-3 bg-white/10 backdrop-blur-md rounded-xl text-white hover:bg-white/20 border border-white/10 transition-all">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            {/* Floating Search Bridge */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-5xl px-4 z-40 hidden lg:block">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700 flex items-center gap-4">
                    <div className="flex items-center px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl flex-1">
                        <MapPin className="text-orange-500 w-5 h-5 mr-3" />
                        <select className="bg-transparent outline-none w-full text-sm font-bold text-slate-700 dark:text-white">
                            <option>Find Hospital Near You</option>
                            <option>New Delhi</option>
                            <option>Mumbai</option>
                            <option>Chennai</option>
                        </select>
                    </div>
                    <div className="flex items-center px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl flex-[2]">
                        <Search className="text-blue-600 w-5 h-5 mr-3" />
                        <input
                            type="text"
                            placeholder="Search doctors, specialities, symptoms..."
                            className="bg-transparent outline-none w-full text-sm font-bold text-slate-700 dark:text-white"
                        />
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-black shadow-lg shadow-blue-500/30 transition-all">
                        Search Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
