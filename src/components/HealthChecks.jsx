import React from 'react';
import { Target, Award, Users, Globe, ArrowRight, ShieldCheck } from 'lucide-react';

const HealthChecks = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2 block">Preventive Healthcare</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        Health Check Packages
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
                        Early detection is the key to a healthy life. Choose from our wide range of health check packages tailored for you.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Essential Heart Check",
                            price: "₹2,500",
                            color: "text-red-600 dark:text-red-400",
                            bg: "bg-red-50 dark:bg-red-900/20",
                            hoverBg: "hover:bg-red-600 dark:hover:bg-red-500",
                            features: ["Lipid Profile", "ECG", "Chest X-Ray", "Consultation"]
                        },
                        {
                            title: "Master Health Checkup",
                            price: "₹4,999",
                            color: "text-blue-600 dark:text-blue-400",
                            bg: "bg-blue-50 dark:bg-blue-900/20",
                            hoverBg: "hover:bg-blue-600 dark:hover:bg-blue-500",
                            features: ["Over 60 Tests", "Full Body Scan", "Cardiac Screening", "Diet Consultation"]
                        },
                        {
                            title: "Executive Whole Body",
                            price: "₹8,999",
                            color: "text-purple-600 dark:text-purple-400",
                            bg: "bg-purple-50 dark:bg-purple-900/20",
                            hoverBg: "hover:bg-purple-600 dark:hover:bg-purple-500",
                            features: ["Detailed Blood Work", "Ultrasound", "CT Scan (Brain/Chest)", "Specialist Review"]
                        },
                    ].map((pkg, index) => (
                        <div key={index} className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl dark:shadow-none transition-all hover:-translate-y-2 border border-slate-100 dark:border-slate-700 flex flex-col relative overflow-hidden group">
                            <div className={`absolute top-0 right-0 w-32 h-32 ${pkg.bg} rounded-bl-full opacity-50 group-hover:scale-150 transition-transform duration-500 z-0`}></div>
                            <div className="relative z-10">
                                <h3 className={`text-2xl font-bold ${pkg.color} mb-2`}>{pkg.title}</h3>
                                <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6 flex items-baseline gap-1">
                                    {pkg.price} <span className="text-sm font-normal text-slate-500 dark:text-slate-400">/ person</span>
                                </div>
                                <ul className="space-y-4 mb-8 text-slate-600 dark:text-slate-300">
                                    {pkg.features.map((feat, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <ShieldCheck size={18} className="text-green-500 dark:text-green-400 flex-shrink-0" />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                    <li className="flex items-center gap-3 text-slate-400 dark:text-slate-500 italic">
                                        <ShieldCheck size={18} className="text-slate-300 dark:text-slate-600 flex-shrink-0" />
                                        <span>+ many more</span>
                                    </li>
                                </ul>
                                <button className={`w-full py-4 rounded-xl font-bold bg-slate-900 dark:bg-slate-700 text-white ${pkg.hoverBg} hover:text-white transition-colors duration-300 shadow-lg shadow-slate-200 dark:shadow-none mt-auto`}>
                                    Book This Package
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HealthChecks;
