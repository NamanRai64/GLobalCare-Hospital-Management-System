import React, { useState, useMemo } from 'react';
import { Search, FlaskConical, Clock, ChevronRight, Filter, AlertCircle, ShoppingCart, CheckCircle2, ShieldCheck, Truck, ClipboardCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { labTests } from '../data/labTests';

const LabTests = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', ...labTests.map(cat => cat.category)];

    const allTests = useMemo(() => labTests.flatMap(cat => cat.tests), []);
    const popularTests = useMemo(() => allTests.slice(0, 3), [allTests]);

    const filteredTests = useMemo(() => {
        let result = [];
        if (activeCategory === 'All') {
            result = allTests;
        } else {
            result = labTests.find(cat => cat.category === activeCategory)?.tests || [];
        }

        if (searchQuery.trim()) {
            result = result.filter(test =>
                test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                test.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        return result;
    }, [activeCategory, searchQuery, allTests]);

    return (
        <div className="bg-white dark:bg-slate-950 min-h-screen text-aurelius-dark dark:text-slate-100 transition-colors duration-500 font-sans">
            {/* Minimalist Professional Hero - Aurelius Brand Focus */}
            <section className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="inline-flex items-center gap-3 text-aurelius-blue font-bold text-xs uppercase tracking-[0.2em] mb-8">
                            <span className="w-12 h-[2px] bg-aurelius-orange"></span>
                            Aurelius Diagnostic Services
                        </div>
                        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 leading-[1.05] text-aurelius-dark dark:text-white">
                            Precision <span className="font-semibold italic text-aurelius-blue">Diagnostics</span> <br />
                            for Expert Care.
                        </h1>
                        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed mb-12 font-medium border-l-4 border-aurelius-orange pl-6">
                            Access a comprehensive range of laboratory services powered by robotic automation and verified by senior pathologists at Aurelius.
                        </p>
                        <div className="flex flex-wrap gap-12 border-t border-slate-200 dark:border-slate-800 pt-10">
                            <div>
                                <div className="text-3xl font-bold text-aurelius-blue">100%</div>
                                <div className="text-[11px] uppercase tracking-widest font-black text-slate-400 mt-1">NABL Accredited</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-aurelius-blue">24h</div>
                                <div className="text-[11px] uppercase tracking-widest font-black text-slate-400 mt-1">Standard TAT</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-aurelius-orange">Govt.</div>
                                <div className="text-[11px] uppercase tracking-widest font-black text-slate-400 mt-1">Approved Lab</div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block relative">
                        <div className="aspect-[5/4] rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] bg-slate-200">
                            <img
                                src="https://images.unsplash.com/photo-1579154235884-332cfa66bc8d?auto=format&fit=crop&q=80&w=1200"
                                alt="Modern Laboratory"
                                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 scale-105"
                            />
                        </div>
                        <div className="absolute -bottom-10 -left-10 bg-white dark:bg-slate-800 p-10 rounded-[2rem] shadow-2xl max-w-[280px] border border-slate-100 dark:border-slate-700">
                            <div className="w-14 h-14 bg-aurelius-blue/10 dark:bg-aurelius-blue/30 rounded-2xl flex items-center justify-center text-aurelius-blue mb-6">
                                <ShieldCheck size={32} />
                            </div>
                            <p className="text-sm font-bold text-aurelius-dark dark:text-white leading-relaxed">Advanced robotic systems delivering 99.9% clinical accuracy for critical diagnostics.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-24">
                {/* Search & Global Filter - Aurelius Themed */}
                <div className="mb-24">
                    <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-16">
                        <div className="max-w-2xl w-full">
                            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-slate-400 mb-6 font-sans">Refine your search</h2>
                            <div className="relative group">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-aurelius-blue transition-colors" size={24} />
                                <input
                                    type="text"
                                    placeholder="Search tests, symptoms, or health areas..."
                                    className="w-full pl-16 pr-6 py-6 bg-slate-50 dark:bg-slate-900 rounded-2xl outline-none border border-slate-100 dark:border-slate-800 focus:border-aurelius-blue/30 focus:ring-8 focus:ring-aurelius-blue/5 transition-all text-lg font-medium"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeCategory === cat
                                        ? 'bg-aurelius-blue text-white shadow-xl shadow-aurelius-blue/20'
                                        : 'bg-white dark:bg-slate-900 text-slate-500 border border-slate-100 dark:border-slate-800 hover:border-aurelius-blue/40'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Featured Profiles - Aurelius Blue & Orange Highlights */}
                    {!searchQuery && activeCategory === 'All' && (
                        <div className="mb-20">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-[1px] flex-1 bg-slate-100 dark:bg-slate-800"></div>
                                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-aurelius-orange">Elite Health Checks</span>
                                <div className="h-[1px] flex-1 bg-slate-100 dark:bg-slate-800"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {popularTests.map(test => (
                                    <div key={test.id} className="p-10 rounded-[2.5rem] border border-aurelius-blue/10 bg-gradient-to-br from-white to-aurelius-blue/5 dark:from-slate-900 dark:to-aurelius-blue/5 group hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center">
                                        <div className="w-16 h-16 bg-aurelius-orange rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-aurelius-orange/20 group-hover:scale-110 transition-transform">
                                            <CheckCircle2 size={32} />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 tracking-tight text-aurelius-dark dark:text-white">{test.name}</h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 font-medium leading-relaxed">{test.description}</p>
                                        <div className="mt-auto">
                                            <div className="text-3xl font-black text-aurelius-blue mb-6">{test.price}</div>
                                            <button
                                                onClick={() => navigate('/appointment', { state: { testName: test.name } })}
                                                className="px-10 py-4 rounded-xl bg-aurelius-dark dark:bg-white text-white dark:text-aurelius-dark font-black text-[10px] uppercase tracking-widest hover:bg-aurelius-blue transition-all"
                                            >
                                                Book at Aurelius
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Full Grid - Clean Typography */}
                    <div className="flex items-center gap-6 mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-aurelius-dark dark:text-white">Technical <span className="text-aurelius-blue italic">Catalogue</span></h2>
                        <div className="flex-1 h-px bg-slate-100 dark:bg-slate-800"></div>
                    </div>

                    {filteredTests.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {filteredTests.map((test) => (
                                <div key={test.id} className="p-10 rounded-3xl border border-slate-50 dark:border-slate-800/50 bg-white dark:bg-slate-900 hover:shadow-2xl hover:shadow-aurelius-blue/5 transition-all duration-300 flex flex-col h-full group">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-aurelius-orange transition-colors">
                                            <FlaskConical size={28} />
                                        </div>
                                        <div className="text-2xl font-black text-aurelius-blue dark:text-white tracking-tighter">{test.price}</div>
                                    </div>

                                    <h3 className="text-xl font-bold text-aurelius-dark dark:text-white mb-4 leading-tight group-hover:text-aurelius-blue transition-colors">{test.name}</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-10 line-clamp-3 leading-relaxed font-medium">
                                        {test.description}
                                    </p>

                                    <div className="mt-auto flex items-center justify-between pt-8 border-t border-slate-50 dark:border-slate-800">
                                        <div className="flex gap-4">
                                            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                                                <Clock size={16} /> {test.time}
                                            </div>
                                            <div className="flex items-center gap-2 text-xs font-bold text-aurelius-blue">
                                                <ShieldCheck size={16} /> Verified
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => navigate('/appointment', { state: { testName: test.name } })}
                                            className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-aurelius-orange group-hover:text-white transition-all shadow-sm"
                                        >
                                            <ChevronRight size={20} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-40 border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-[3rem]">
                            <Search size={48} className="mx-auto mb-6 text-slate-200" />
                            <h3 className="text-2xl font-bold mb-2">No matching diagnostic records</h3>
                            <p className="text-slate-400 max-w-sm mx-auto font-medium">Please refine your search parameters or select a broader category for catalog results.</p>
                        </div>
                    )}
                </div>

                {/* Integrated Home Service - Aurelius Dark Theme */}
                <div className="bg-aurelius-dark rounded-[3.5rem] p-16 lg:p-24 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                        <div className="text-center lg:text-left">
                            <span className="inline-block px-5 py-2 bg-aurelius-orange text-white rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-10 shadow-lg shadow-aurelius-orange/20">Elite Phlebotomy</span>
                            <h2 className="text-5xl lg:text-7xl font-light tracking-tight mb-10 leading-[1.1]">The Aurelius Lab <br /> <span className="font-bold italic text-aurelius-blue">at your Home.</span></h2>
                            <p className="text-lg text-blue-100/70 mb-12 max-w-xl leading-relaxed font-medium mx-auto lg:mx-0">Bypass laboratory queues with our professional home collection service, ensuring specimen integrity and rapid pathological reporting.</p>
                            <button className="px-12 py-6 bg-aurelius-blue text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-aurelius-orange transition-all shadow-2xl">
                                Request Home Sample
                            </button>
                        </div>
                        <div className="hidden lg:grid grid-cols-1 gap-12 border-l border-white/10 pl-20">
                            {[
                                { title: "Clinical Hygiene", desc: "Our specialists strictly adhere to WHO-standard sanitation protocols." },
                                { title: "Specimen Security", desc: "Immediate temperature-controlled logistics for sample integrity." },
                                { title: "Global Accreditation", desc: "All home-collected samples processed in CAP/NABL certified hubs." }
                            ].map((item, i) => (
                                <div key={i} className="group">
                                    <h4 className="text-xl font-bold mb-3 flex items-center gap-4 group-hover:text-aurelius-orange transition-colors">
                                        <span className="text-aurelius-blue font-black italic">0{i + 1}</span> {item.title}
                                    </h4>
                                    <p className="text-sm text-blue-100/60 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Ethical Accreditations - Clean Grayscale */}
                <div className="mt-32 py-16 border-t border-slate-100 dark:border-slate-800 flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-40 grayscale">
                    <span className="text-xl font-black tracking-tighter">NABL ISO-15189</span>
                    <span className="text-xl font-black tracking-tighter">CAP ACCREDITED</span>
                    <span className="text-xl font-black tracking-tighter italic text-aurelius-blue">AURELIUS INTEGRATED</span>
                    <span className="text-xl font-black tracking-tighter">WHO COMPLIANT</span>
                </div>

                {/* Final Professional Note */}
                <div className="mt-16 bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl text-center">
                    <div className="flex items-center justify-center gap-3 text-slate-400 mb-4">
                        <AlertCircle size={16} />
                        <span className="text-[11px] font-black uppercase tracking-widest underline decoration-aurelius-orange underline-offset-4">Medical Responsibility Statement</span>
                    </div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.1em] leading-relaxed max-w-4xl mx-auto">
                        Diagnostics results are precision-driven clinical data points. Always share your detailed pathological reports with a licensed physician or specialist for accurate clinical correlation with your medical history and physical condition.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LabTests;
