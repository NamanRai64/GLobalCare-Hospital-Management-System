import React from 'react';
import { Heart, Brain, Activity, Baby, Eye, Bone, Microscope, Stethoscope, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const specialties = [
    { icon: Heart, name: "Cardiology", desc: "Best-in-class heart care", color: "text-red-500 dark:text-red-400", bg: "bg-red-50 dark:bg-red-900/20" },
    { icon: Brain, name: "Neurology", desc: "Advanced brain & spine care", color: "text-purple-500 dark:text-purple-400", bg: "bg-purple-50 dark:bg-purple-900/20" },
    { icon: Activity, name: "Oncology", desc: "Comprehensive cancer treatment", color: "text-rose-500 dark:text-rose-400", bg: "bg-rose-50 dark:bg-rose-900/20" },
    { icon: Bone, name: "Orthopedics", desc: "Joint replacement & spine surgery", color: "text-amber-500 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-900/20" },
    { icon: Baby, name: "Pediatrics", desc: "Dedicated child care", color: "text-pink-500 dark:text-pink-400", bg: "bg-pink-50 dark:bg-pink-900/20" },
    { icon: Microscope, name: "Gastroenterology", desc: "Complete digestive care", color: "text-green-500 dark:text-green-400", bg: "bg-green-50 dark:bg-green-900/20" },
    { icon: Eye, name: "Ophthalmology", desc: "Clear vision & eye surgery", color: "text-blue-500 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20" },
    { icon: Stethoscope, name: "Nephrology", desc: "Kidney transplant & dialysis", color: "text-indigo-500 dark:text-indigo-400", bg: "bg-indigo-50 dark:bg-indigo-900/20" },
];

const Specialties = () => {
    return (
        <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-0 -left-64 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 -right-64 w-[600px] h-[600px] bg-indigo-400/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-8">
                    <div className="text-center md:text-left">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs mb-4 block"
                        >
                            Global Centres of Excellence
                        </motion.span>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
                            Specialized <span className="text-gradient">Care </span> <br />
                            For Every Need
                        </h2>
                    </div>
                    <button className="hidden md:flex items-center bg-slate-900 dark:bg-blue-600 text-white dark:text-white px-8 py-4 rounded-2xl font-black text-sm hover:scale-105 transition-all shadow-xl shadow-blue-500/20 group">
                        View All Specialties
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {specialties.map((spec, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 rounded-[2.5rem] group cursor-pointer relative transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 shine-effect"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${spec.bg} ${spec.color} flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-inner`}>
                                <spec.icon size={32} />
                            </div>

                            <h3 className="font-black text-slate-900 dark:text-white text-xl mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {spec.name}
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8">
                                {spec.desc}
                            </p>

                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-black text-slate-400 dark:text-slate-600 group-hover:text-blue-500 transition-colors uppercase tracking-widest">Learn More</span>
                                <div className="w-10 h-10 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:rotate-45">
                                    <ArrowRight size={18} />
                                </div>
                            </div>

                            {/* Decorative Corner Element */}
                            <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <button className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-sm shadow-xl shadow-blue-500/20 group">
                        View All Specialties <ArrowRight size={18} className="ml-2" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Specialties;
