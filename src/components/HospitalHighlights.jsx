import React from 'react';
import { Trophy, Microscope, Activity, Users, Star, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Counter = ({ value, label, icon: Icon, color, bg }) => {
    const [count, setCount] = React.useState(0);
    const target = parseInt(value.replace(/\D/g, ''));
    const suffix = value.replace(/[0-9]/g, '');

    React.useEffect(() => {
        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [target]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center p-10 glass-card rounded-[3rem] transition-all hover:shadow-2xl hover:shadow-blue-500/10 group"
        >
            <div className={`w-20 h-20 mx-auto ${bg} ${color} rounded-3xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-12`}>
                <Icon size={40} />
            </div>
            <h3 className="text-5xl font-black text-slate-900 dark:text-white mb-2 tabular-nums">
                {count}{suffix}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-[10px]">{label}</p>
        </motion.div>
    );
};

const HospitalHighlights = () => {
    return (
        <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-[0.4em] text-xs mb-4 block"
                    >
                        Foundation of Trust
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8">
                        Excellence in <span className="text-gradient">Healthcare</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                        Redefining the standards of medical care through a relentless pursuit of innovation and a deep-rooted culture of compassion.
                    </p>
                </div>

                {/* Achievements Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                    <Counter value="50k+" label="Happy Patients" icon={Users} color="text-blue-600" bg="bg-blue-100/50 dark:bg-blue-900/20" />
                    <Counter value="10k+" label="Successful Surgeries" icon={Activity} color="text-green-600" bg="bg-green-100/50 dark:bg-green-900/20" />
                    <Counter value="15+" label="Years of Service" icon={Trophy} color="text-yellow-600" bg="bg-yellow-100/50 dark:bg-yellow-900/20" />
                    <Counter value="25+" label="Global Awards" icon={Award} color="text-purple-600" bg="bg-purple-100/50 dark:bg-purple-900/20" />
                </div>

                {/* Advanced Technology Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        { icon: Microscope, title: "Robotic Surgery", desc: "State-of-the-art robotic systems allowing for minimally invasive procedures with sub-millimeter precision.", bg: "bg-indigo-50 dark:bg-indigo-900/20", color: "text-indigo-600" },
                        { icon: Activity, title: "Advanced Imaging", desc: "Latest high-resolution MRI and PET-CT scanners for early-stage detection and accurate treatment planning.", bg: "bg-cyan-50 dark:bg-cyan-900/20", color: "text-cyan-600" },
                        { icon: Star, title: "AI-Powered Care", desc: "Proprietary AI algorithms predicting health risks and assisting in creating personalized clinical pathways.", bg: "bg-rose-50 dark:bg-rose-900/20", color: "text-rose-600" }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card p-10 rounded-[3rem] group hover:-translate-y-3 transition-all duration-500 border border-slate-100 dark:border-slate-800"
                        >
                            <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-8 shadow-inner transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                {item.desc}
                            </p>

                            <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Innovation Leader</span>
                                <div className="w-8 h-8 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1">
                                    <ArrowRight size={14} className="text-blue-600" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HospitalHighlights;
