import React, { useState } from 'react';
import { MapPin, Phone, ArrowRight, Zap, Shield, Activity, Cpu } from 'lucide-react';
import HospitalFinder from '../components/HospitalFinder';

const locations = [
    {
        city: "New Delhi",
        name: "Aurelius Hospitals, Indraprastha",
        address: "Sarita Vihar, Delhi Mathura Road, New Delhi - 110076",
        phone: "+91 11 2692 5858",
        image: "https://images.unsplash.com/photo-1587351021759-3e566b9af955?auto=format&fit=crop&q=80&w=500",
        beds: "710 Beds",
        accreditation: "JCI Accredited"
    },
    {
        city: "Mumbai",
        name: "Aurelius Hospitals, Navi Mumbai",
        address: "Plot # 13, Parsik Hill Road, Off Uran Road, CBD Belapur, Navi Mumbai - 400614",
        phone: "+91 22 3350 3350",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=500",
        beds: "500 Beds",
        accreditation: "NABH Accredited"
    },
    {
        city: "Hyderabad",
        name: "Aurelius Health City, Jubilee Hills",
        address: "Road No 72, Opp. Bharatiya Vidya Bhavan School, Film Nagar, Hyderabad - 500033",
        phone: "+91 40 2360 7777",
        image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=500",
        beds: "550 Beds",
        accreditation: "JCI & NABH Accredited"
    },
    {
        city: "Chennai",
        name: "Aurelius Main Hospital, Greams Road",
        address: "21, Greams Lane, Off Greams Road, Chennai - 600006",
        phone: "+91 44 2829 0200",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=500",
        beds: "600 Beds",
        accreditation: "ISO Certified"
    },
    {
        city: "Bangalore",
        name: "Aurelius Hospitals, Bannerghatta Road",
        address: "154/11, Bannerghatta Road, Opp. IIM, Bangalore - 560076",
        phone: "+91 80 2630 4050",
        image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=500",
        beds: "400 Beds",
        accreditation: "JCI Accredited"
    },
    {
        city: "Kolkata",
        name: "Aurelius Gleneagles Hospitals",
        address: "58, Canal Circular Road, Kolkata - 700054",
        phone: "+91 33 2320 3040",
        image: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?auto=format&fit=crop&q=80&w=500",
        beds: "500 Beds",
        accreditation: "JCI Accredited"
    }
];

const technologies = [
    {
        title: "Robotic Surgery",
        desc: "Da Vinci Xi Robotic System for precise, minimally invasive surgeries with faster recovery times.",
        icon: <Cpu className="w-8 h-8 text-blue-500" />
    },
    {
        title: "Proton Beam Therapy",
        desc: "South Asia's first Proton Therapy Centre for advanced cancer treatment targeting tumors with sub-millimeter precision.",
        icon: <Zap className="w-8 h-8 text-orange-500" />
    },
    {
        title: "CyberKnife",
        desc: "Non-invasive robotic radiosurgery system for treating tumors anywhere in the body.",
        icon: <Activity className="w-8 h-8 text-green-500" />
    },
    {
        title: "TrueBeam STx",
        desc: "Advanced radiosurgery system treating cancer with speed and accuracy, protecting healthy tissues.",
        icon: <Shield className="w-8 h-8 text-purple-500" />
    }
];

const Hospitals = () => {
    return (
        <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
            {/* Hero Section */}
            <div className="bg-blue-900 py-20 px-4 relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-10"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center text-white">
                    <span className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-4 block">World-Class Infrastructure</span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Hospitals Network</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Spanning across major cities, our network ensures that international standard healthcare is accessible to everyone.
                    </p>
                </div>
            </div>

            {/* Locator Section */}
            <div className="relative -mt-16 px-4 mb-28 z-20">
                <HospitalFinder />
            </div>

            {/* Locations Grid */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight">Locate a Centre</h2>
                        <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {locations.map((loc, index) => (
                        <div key={index} className="glass-card rounded-[2.5rem] overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group border-none">
                            <div className="h-56 overflow-hidden relative">
                                <img src={loc.image} alt={loc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-2xl text-[10px] font-black text-white uppercase tracking-widest border border-white/20">
                                    {loc.city}
                                </div>
                            </div>
                            <div className="p-10">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{loc.name}</h3>
                                <div className="flex items-start gap-3 text-slate-500 dark:text-slate-400 text-sm mb-6 h-12">
                                    <MapPin size={18} className="mt-0.5 text-orange-500 shrink-0" />
                                    <span className="line-clamp-2 font-medium leading-relaxed">{loc.address}</span>
                                </div>
                                <div className="flex items-center gap-3 mb-8">
                                    <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-xl uppercase tracking-widest border border-blue-100 dark:border-blue-800/50">{loc.beds}</span>
                                    <span className="text-[10px] font-black text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-3 py-1.5 rounded-xl uppercase tracking-widest border border-green-100 dark:border-green-800/50">{loc.accreditation}</span>
                                </div>
                                <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-slate-900 dark:text-white font-black text-xs uppercase tracking-widest">
                                        <Phone size={16} className="text-blue-600" />
                                        <span>{loc.phone}</span>
                                    </div>
                                    <button className="bg-slate-900 dark:bg-white/10 text-white p-3 rounded-2xl hover:bg-blue-600 dark:hover:bg-blue-600 transition-all">
                                        <ArrowRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Technology Section */}
            <div className="bg-slate-900 text-white py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="md:w-1/2">
                            <span className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-4 block">Future of Medicine</span>
                            <h2 className="text-4xl font-bold mb-6 leading-tight">
                                Pioneering Advanced Medical Technology
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                We are committed to bringing the latest medical advancements to our patients. From robotic surgeries to precise radiation therapies, our technology ensures better outcomes and faster recovery.
                            </p>
                            <button className="bg-white dark:bg-slate-800 text-blue-900 dark:text-blue-100 px-8 py-3 rounded-xl font-bold hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                Explore Our Technology
                            </button>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {technologies.map((tech, index) => (
                                <div key={index} className="bg-slate-800 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-colors group">
                                    <div className="bg-slate-900 dark:bg-slate-900/80 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        {tech.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {tech.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hospitals;
