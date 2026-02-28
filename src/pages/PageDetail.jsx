import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Plus, ArrowRight, CheckCircle2, Sparkles, Activity, Users, Microscope, Trophy, Award, Star } from 'lucide-react';
import { pageContent } from '../data/pageContent';

const PageTransition = ({ children }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
    >
        {children}
    </motion.div>
);

const Carousel = ({ items }) => {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % items.length);
    const prev = () => setCurrent((prev) => (prev - 1 + items.length) % items.length);

    return (
        <div className="relative glass-card rounded-[3.5rem] overflow-hidden p-10 md:p-16">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-500/20 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                        <img
                            src={items[current].image}
                            alt={items[current].title}
                            className="w-full h-[400px] object-cover"
                        />
                    </div>
                    <div className="space-y-8">
                        <div>
                            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Innovation Milestone</span>
                            <h4 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight uppercase tracking-tight">
                                {items[current].title}
                            </h4>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed">
                            {items[current].desc}
                        </p>
                        <button className="bg-slate-900 dark:bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-sm shadow-xl shadow-blue-500/20 hover:scale-105 transition-all">
                            READ FULL CASE STUDY
                        </button>
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-10 right-10 flex gap-4">
                <button
                    onClick={prev}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xl hover:bg-blue-600 hover:text-white transition-all transform active:scale-90"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={next}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xl hover:bg-blue-600 hover:text-white transition-all transform active:scale-90"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-14 left-16 flex gap-3">
                {items.map((_, idx) => (
                    <div
                        key={idx}
                        className={`h-2 rounded-full transition-all duration-500 ${idx === current ? 'w-12 bg-blue-600' : 'w-2 bg-slate-300 dark:bg-slate-700'}`}
                    />
                ))}
            </div>
        </div>
    );
};

const ContentSection = ({ section }) => {
    switch (section.type) {
        case 'text':
            return (
                <div className="prose prose-lg dark:prose-invert max-w-4xl">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                        {section.body}
                    </p>
                </div>
            );
        case 'tech-grid':
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {section.items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card group overflow-hidden rounded-[3rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
                        >
                            <div className="h-72 overflow-hidden relative">
                                <img
                                    src={item.image}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    alt={item.title}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl text-white">
                                        <Plus size={20} />
                                    </div>
                                </div>
                            </div>
                            <div className="p-10 space-y-6">
                                <h4 className="text-3xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                                    {item.title}
                                </h4>
                                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                    {item.desc}
                                </p>
                                <div className="flex flex-wrap gap-3 pt-2">
                                    {item.features.map((feat, fIdx) => (
                                        <span key={fIdx} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl text-[10px] font-black uppercase tracking-widest border border-slate-200/50 dark:border-slate-700/50">
                                            {feat}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            );
        case 'carousel':
            return <Carousel items={section.items} />;
        case 'stats':
            return (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {section.items.map((item, idx) => (
                        <div key={idx} className="glass-card p-8 rounded-[2rem] text-center">
                            <div className="text-4xl font-black text-blue-600 dark:text-blue-400 mb-2 tabular-nums">{item.value}</div>
                            <div className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">{item.label}</div>
                        </div>
                    ))}
                </div>
            );
        case 'list':
            return (
                <div className="glass-card p-10 rounded-[3rem] border border-blue-500/10">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tight">{section.heading}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {section.items.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 group">
                                <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <CheckCircle2 size={18} />
                                </div>
                                <span className="text-slate-600 dark:text-slate-300 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            );
        default:
            return null;
    }
};

const PageDetail = () => {
    const location = useLocation();
    const [page, setPage] = useState(null);
    const [loading, setLoading] = useState(true);

    const slug = location.pathname.substring(1).replace(/\/$/, ""); // Get path from URL, remove leading slash and trailing slash

    useEffect(() => {
        setLoading(true);
        const content = pageContent[slug];
        if (content) {
            setPage(content);
        } else {
            setPage(null);
        }
        setLoading(false);
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full"
                />
            </div>
        );
    }

    if (!page) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
                <div className="text-center space-y-6 p-8 glass-card rounded-[3rem]">
                    <h2 className="text-4xl font-black text-slate-900 dark:text-white">Page Not Found</h2>
                    <p className="text-slate-500 font-medium">We couldn't find the information you were looking for.</p>
                    <Link to="/" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all">
                        Return Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            {/* Page Hero */}
            <div className="relative h-[400px] md:h-[600px] overflow-hidden bg-slate-900">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={slug}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0"
                    >
                        <img
                            src={page.heroImage || "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1920"}
                            alt={page.title}
                            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    </motion.div>
                </AnimatePresence>

                <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center relative z-10 pt-20">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-lg shadow-blue-500/20">
                            Innovation & Excellence
                        </span>
                        <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-8 uppercase tracking-tighter">
                            {page.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 font-medium max-w-2xl leading-relaxed">
                            {page.subtitle}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content Sections */}
            <div className="max-w-7xl mx-auto px-4 py-24 -mt-20 relative z-20">
                <div className="space-y-32">
                    {page.content.map((section, idx) => (
                        <div key={idx}>
                            {section.heading && (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="mb-16"
                                >
                                    <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                                        {section.heading}
                                    </h3>
                                    <div className="w-24 h-2.5 bg-blue-600 rounded-full mt-6 shadow-lg shadow-blue-500/20"></div>
                                </motion.div>
                            )}
                            <ContentSection section={section} />
                        </div>
                    ))}

                    {/* Final CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white relative overflow-hidden group shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                            <div className="max-w-2xl">
                                <h3 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-none">Experience World-Class Healthcare</h3>
                                <p className="text-blue-100 text-lg md:text-xl font-medium opacity-90">Our global network of specialists and cutting-edge facilities are ready to provide you with the best medical care possible.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-6 shrink-0">
                                <Link to="/appointment" className="bg-white text-blue-600 px-10 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-all">
                                    Book Now
                                </Link>
                                <Link to="/contact" className="bg-blue-500/20 backdrop-blur-xl border border-white/20 px-10 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default PageDetail;
