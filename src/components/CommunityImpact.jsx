import React from 'react';
import { Heart, Activity, Users, Calendar, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CommunityImpact = () => {
    const navigate = useNavigate();

    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>
                        <span className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2 block">Our Commitment</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                            Caring for the Community Beyond the Hospital
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed">
                            We believe healthcare is a right, not a privilege. Through our various outreach programs, we strive to make quality medical care accessible to everyone.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0 text-red-600 dark:text-red-400">
                                    <Heart size={24} fill="currentColor" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Blood Donation Drives</h3>
                                    <p className="text-slate-600 dark:text-slate-400">Regular camps organized to support patients in critical need. Join our donor network today.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-blue-400">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Free Health Checkups</h3>
                                    <p className="text-slate-600 dark:text-slate-400">Providing free screenings and consultations for underprivileged communities every month.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 text-green-600 dark:text-green-400">
                                    <Activity size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Charity Operations</h3>
                                    <p className="text-slate-600 dark:text-slate-400">Subsidized and free surgeries for those who cannot afford critical medical procedures.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 flex gap-4">
                            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg hover:shadow-orange-500/30 flex items-center gap-2">
                                Become a Donor <ArrowRight size={18} />
                            </button>
                            <button className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold py-3.5 px-8 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                                Volunteer With Us
                            </button>
                        </div>
                    </div>

                    {/* Right Image Grid */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=600&h=800"
                                alt="Blood Donation"
                                className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600&h=600"
                                alt="Community Health Camp"
                                className="rounded-2xl shadow-lg w-full h-64 object-cover"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=600&h=600"
                                alt="Charity Support"
                                className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8"
                            />
                            <div className="bg-blue-600 rounded-2xl shadow-lg p-6 flex flex-col justify-center items-center text-center text-white h-64">
                                <h3 className="text-4xl font-bold mb-2">120+</h3>
                                <p className="font-medium">Camps Organized This Year</p>
                            </div>
                        </div>

                        {/* Decorative blob */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-orange-100/50 dark:bg-orange-900/10 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommunityImpact;
