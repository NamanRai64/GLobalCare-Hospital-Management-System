import React from 'react';
import { Target, Award, Users, Globe, ArrowRight } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-white dark:bg-slate-900 min-h-screen transition-colors duration-300">
            {/* Hero Section */}
            <div className="relative bg-blue-900 text-white py-24 px-4 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4 block">Pioneering Healthcare</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        Healing Hands, Caring Hearts
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        For over 35 years, Aurelius Hospitals has been a beacon of hope, bringing world-class medical expertise and cutting-edge technology to India and beyond.
                    </p>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="max-w-7xl mx-auto px-4 py-20 pb-0 grid md:grid-cols-2 gap-12">
                <div className="bg-slate-50 dark:bg-slate-800 p-10 rounded-3xl border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Target size={120} className="text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Our Mission</h2>
                    <p className="text-slate-600 dark:text-slate-300 leading-loose text-lg">
                        "To bring healthcare of International standards within the reach of every individual. We are committed to the achievement and maintenance of excellence in education, research and healthcare for the benefit of humanity."
                    </p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-10 rounded-3xl border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Globe size={120} className="text-orange-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Our Vision</h2>
                    <p className="text-slate-600 dark:text-slate-300 leading-loose text-lg">
                        "To be a global trusted leader in healthcare, known for clinical excellence and distinctive patient care. We aspire to touch billions of lives with our healing hands."
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-slate-900 text-white py-20 mt-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="space-y-2">
                            <div className="text-5xl font-bold text-orange-500">73+</div>
                            <div className="text-sm font-medium tracking-wider text-slate-400 uppercase">Hospitals</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-5xl font-bold text-blue-500">10k+</div>
                            <div className="text-sm font-medium tracking-wider text-slate-400 uppercase">Beds</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-5xl font-bold text-green-500">11k+</div>
                            <div className="text-sm font-medium tracking-wider text-slate-400 uppercase">Doctors</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-5xl font-bold text-purple-500">190M</div>
                            <div className="text-sm font-medium tracking-wider text-slate-400 uppercase">Lives Touched</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Founder/Chairman Message */}
            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="flex flex-col md:flex-row items-center gap-12 bg-white dark:bg-slate-800 rounded-3xl overflow-hidden transition-colors">
                    <div className="w-full md:w-1/3">
                        <div className="aspect-[3/4] bg-slate-200 rounded-2xl relative overflow-hidden">
                            {/* Placeholder for Chairman Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold">
                                CHAIRMAN IMAGE
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-2/3 space-y-6 p-8 md:p-0">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-wide mb-2">
                            Founder's Message
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                            "Our mission is to bring healthcare of international standards within the reach of every individual."
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                            At Aurelius, we believe that healthcare is not just about treating diseases but about holistic well-being. We have pioneered many firsts in the Indian healthcare ecosystem and continue to push the boundaries of medical science to provide the best possible care to our patients.
                        </p>
                        <div>
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white">Dr. Prathap C. Reddy</h4>
                            <p className="text-slate-500 dark:text-slate-400 font-medium">Founder Chairman, Aurelius Hospitals Group</p>
                        </div>
                        {/* Signature placeholder */}
                        <div className="h-16 w-48 bg-slate-50 dark:bg-slate-700 border border-dashed border-slate-300 dark:border-slate-600 rounded flex items-center justify-center text-slate-400 text-xs italic">
                            Signature
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
