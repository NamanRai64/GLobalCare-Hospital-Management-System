import React, { useState } from 'react';
import { ArrowRight, Activity, User, ChevronRight } from 'lucide-react';
import { specialtiesData } from '../data/specialties';
import { useNavigate } from 'react-router-dom';

const Treatments = () => {
    const [selectedSpecialty, setSelectedSpecialty] = useState("Cardiology");
    const specialty = specialtiesData[selectedSpecialty];
    const Icon = specialty.icon;
    const navigate = useNavigate();

    return (
        <div className="bg-slate-50 dark:bg-slate-900 min-h-screen py-12 transition-colors duration-300">

            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 text-center mb-12">
                <span className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2 block">Our Expertise</span>
                <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                    Centres of Excellence
                </h1>
                <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
                    World-class healthcare powered by advanced technology and expert specialists.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8">

                {/* Sidebar: Specialty List */}
                <div className="w-full lg:w-1/4">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden sticky top-24 transition-colors">
                        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                            <h3 className="font-bold text-slate-700 dark:text-slate-200">Departments</h3>
                        </div>
                        <div className="max-h-[70vh] overflow-y-auto custom-scrollbar">
                            {Object.keys(specialtiesData).map((key) => {
                                const item = specialtiesData[key];
                                const ItemIcon = item.icon;
                                const isSelected = selectedSpecialty === key;
                                return (
                                    <button
                                        key={key}
                                        onClick={() => setSelectedSpecialty(key)}
                                        className={`w-full flex items-center justify-between p-4 text-left transition-all border-l-4 border-b border-b-slate-50 dark:border-b-slate-700 ${isSelected ? 'bg-blue-50 dark:bg-blue-900/30 border-l-blue-600 text-blue-700 dark:text-blue-300' : 'border-l-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-300'}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <ItemIcon size={18} className={isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'} />
                                            <span className="font-semibold text-sm">{key}</span>
                                        </div>
                                        {isSelected && <ChevronRight size={16} className="text-blue-600 dark:text-blue-400" />}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Main Content: Details */}
                <div className="w-full lg:w-3/4">
                    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700 overflow-hidden transition-colors">

                        {/* Hero Banner with Image */}
                        <div className="relative h-64 md:h-80 w-full overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent z-10"></div>
                            <img
                                src={specialty.image}
                                alt={specialty.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold text-xs mb-3`}>
                                    <Icon size={14} />
                                    <span>{selectedSpecialty}</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{specialty.title}</h2>
                                <p className="text-slate-200 max-w-2xl text-lg leading-relaxed">{specialty.description}</p>
                            </div>
                        </div>

                        <div className="p-8 md:p-10">
                            {/* Treatments Grid */}
                            <div className="mb-12">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-700">
                                    <Activity className="text-blue-600 dark:text-blue-400" /> Key Treatments & Procedures
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {specialty.treatments.map((treatment, idx) => (
                                        <div key={idx} className="bg-slate-50 dark:bg-slate-700/50 p-5 rounded-xl border border-slate-100 dark:border-slate-600 hover:border-blue-200 dark:hover:border-blue-500/50 hover:bg-blue-50/30 dark:hover:bg-blue-900/20 transition-all group">
                                            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                                {treatment.name}
                                            </h4>
                                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed pl-3.5">
                                                {treatment.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Specialists Section */}
                            {specialty.doctors && (
                                <div className="mb-12">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-700">
                                        <User className="text-blue-600 dark:text-blue-400" /> Our Specialists
                                    </h3>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        {specialty.doctors.map((doctor, idx) => (
                                            <div key={idx} className="flex items-center gap-4 bg-white dark:bg-slate-700/50 border border-slate-100 dark:border-slate-600 p-4 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer group" onClick={() => navigate('/doctors')}>
                                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100 dark:border-slate-600 group-hover:border-blue-500 transition-colors">
                                                    <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <p className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{doctor.name}</p>
                                                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide font-semibold">Senior Consultant</p>
                                                    <button className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-1 flex items-center hover:underline">
                                                        View Profile <ArrowRight size={12} className="ml-1" />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* CTA */}
                            <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 rounded-2xl text-white flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-10 transform translate-x-1/3 -translate-y-1/3"></div>
                                <div className="relative z-10">
                                    <h4 className="text-2xl font-bold mb-2">Ready to prioritize your health?</h4>
                                    <p className="text-slate-300">Schedule a consultation with our {selectedSpecialty} experts today.</p>
                                </div>
                                <button
                                    onClick={() => navigate('/appointment', { state: { specialization: selectedSpecialty } })}
                                    className="relative z-10 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-blue-500/25 whitespace-nowrap flex items-center gap-2 group"
                                >
                                    Book Appointment <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Treatments;
