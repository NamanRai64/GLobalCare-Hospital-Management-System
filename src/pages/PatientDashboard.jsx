import React from 'react';
import {
    Calendar,
    FileText,
    Bell,
    User,
    Activity,
    Clock,
    LogOut,
    Plus,
    CheckCircle2,
    ArrowRight,
    Search,
    Dna,
    ShieldCheck,
    Phone,
    Heart
} from 'lucide-react';
import { motion } from 'framer-motion';

const PatientDashboard = () => {
    const stats = [
        { label: "Blood Group", value: "B+", icon: <Heart className="text-red-500" /> },
        { label: "Avg Heart Rate", value: "72 bpm", icon: <Activity className="text-blue-500" /> },
        { label: "Insurance", value: "Active", icon: <ShieldCheck className="text-green-500" /> },
        { label: "BMI", value: "22.4", icon: <Activity className="text-purple-500" /> }
    ];

    const upcomingAppointments = [
        { doctor: "Dr. Arvind Kumar", specialization: "Cardiologist", date: "24 Feb, 2026", time: "10:30 AM", type: "Regular Checkup", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200" },
        { doctor: "Dr. Sarah D'Souza", specialization: "Dermatologist", date: "02 Mar, 2026", time: "04:15 PM", type: "Skin Consultation", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200" }
    ];

    const labReports = [
        { name: "Full Body Checkup", date: "15 Jan, 2026", status: "Ready", doctor: "Dr. Mehra" },
        { name: "Cardiac Profile", date: "10 Dec, 2025", status: "Ready", doctor: "Dr. Arvind" },
        { name: "Blood Sugar Test", date: "05 Dec, 2025", status: "Ready", doctor: "Dr. Mehra" }
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800 hidden lg:flex flex-col p-6 space-y-8 sticky top-0 h-screen">
                <div className="flex items-center gap-3 px-2">
                    <div className="bg-blue-600 p-2 rounded-xl text-white">
                        <Activity size={24} />
                    </div>
                    <span className="font-black text-xl tracking-tight dark:text-white">HEALTH POD</span>
                </div>

                <nav className="flex-1 space-y-1">
                    {[
                        { icon: <Activity size={20} />, label: "Dashboard", active: true },
                        { icon: <Calendar size={20} />, label: "Appointments" },
                        { icon: <FileText size={20} />, label: "Medical Files" },
                        { icon: <ShieldCheck size={20} />, label: "Insurance & Billing" },
                        { icon: <Phone size={20} />, label: "Emergency Contacts" },
                        { icon: <User size={20} />, label: "My Profile" }
                    ].map((item, idx) => (
                        <button key={idx} className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${item.active ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 shadow-sm shadow-blue-500/10' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'}`}>
                            {item.icon}
                            {item.label}
                        </button>
                    ))}
                </nav>

                <button className="flex items-center gap-4 px-4 py-3 rounded-2xl text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all mt-auto border border-transparent hover:border-red-100 dark:hover:border-red-900/30">
                    <LogOut size={20} />
                    Log Out
                </button>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-4 lg:p-10 max-w-7xl mx-auto space-y-10">
                {/* Header */}
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h1 className="text-3xl font-black text-slate-900 dark:text-white">Welcome, Naman!</h1>
                        <p className="text-slate-500 font-medium">Your health journey is looking great today.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative group">
                            <Bell className="text-slate-400 group-hover:text-blue-600 transition-colors cursor-pointer" />
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-xl shadow-blue-500/20 transition-all flex items-center gap-2">
                            <Plus size={18} /> New Appointment
                        </button>
                    </div>
                </header>

                {/* Quick Stats Grid */}
                <section className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
                            <div className="flex flex-col justify-between h-full relative z-10">
                                <span className="text-slate-400 text-xs font-black uppercase tracking-widest">{stat.label}</span>
                                <h2 className="text-3xl font-black text-slate-900 dark:text-white mt-2">{stat.value}</h2>
                                <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-green-500">
                                    <Activity size={12} /> +2% normal range
                                </div>
                            </div>
                            <div className="absolute top-4 right-4 opacity-10 group-hover:scale-125 transition-transform duration-500">
                                {React.cloneElement(stat.icon, { size: 48 })}
                            </div>
                        </div>
                    ))}
                </section>

                <div className="grid lg:grid-cols-3 gap-10">
                    {/* Appointments Column */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                                    <Calendar className="text-blue-600" size={20} />
                                    Upcoming Appointments
                                </h3>
                                <button className="text-sm font-bold text-blue-600 hover:underline">View All</button>
                            </div>
                            <div className="space-y-4">
                                {upcomingAppointments.map((app, idx) => (
                                    <div key={idx} className="bg-white dark:bg-slate-900 p-5 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 flex items-center gap-6 group hover:border-blue-500/40 transition-all">
                                        <div className="w-20 h-20 rounded-3xl overflow-hidden shadow-lg">
                                            <img src={app.image} className="w-full h-full object-cover" alt={app.doctor} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors uppercase tracking-tight">{app.doctor}</h4>
                                                    <p className="text-xs text-blue-600 font-bold mb-2">{app.specialization}</p>
                                                </div>
                                                <div className="text-right">
                                                    <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                                                        {app.type}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex gap-4 text-slate-500 text-[11px] font-bold">
                                                <span className="flex items-center gap-1"><Clock size={12} /> {app.time}</span>
                                                <span className="flex items-center gap-1"><Calendar size={12} /> {app.date}</span>
                                            </div>
                                        </div>
                                        <button className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl hover:bg-blue-600 hover:text-white transition-all text-slate-600 dark:text-slate-300">
                                            <ArrowRight size={20} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Health Vault / Report Cards */}
                        <div>
                            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                <FileText className="text-orange-500" size={20} />
                                Recent Health Vault Activity
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {labReports.map((report, idx) => (
                                    <div key={idx} className="bg-slate-900 p-6 rounded-[2rem] text-white relative group overflow-hidden">
                                        <div className="absolute top-0 right-0 p-4 opacity-40">
                                            <CheckCircle2 size={40} className="text-blue-500" />
                                        </div>
                                        <h5 className="font-bold text-sm mb-1">{report.name}</h5>
                                        <p className="text-[10px] text-slate-400 mb-4">{report.date} • {report.doctor}</p>
                                        <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-xl text-xs font-black shadow-lg shadow-blue-500/20 transition-all">
                                            DOWNLOAD PDF
                                        </button>
                                        <div className="absolute inset-0 bg-blue-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 h-0.5 bottom-0"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar - Analytics & Tips */}
                    <div className="space-y-8">
                        <div className="bg-gradient-to-br from-blue-700 to-indigo-900 p-8 rounded-[3rem] text-white relative overflow-hidden shadow-2xl shadow-blue-500/20">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-black mb-2">Aurelius 24|7</h3>
                                <p className="text-sm opacity-80 mb-6 leading-relaxed font-medium">Connect with top specialists in minutes via video consultation.</p>
                                <button className="bg-white text-blue-900 px-6 py-3 rounded-2xl text-xs font-black hover:bg-orange-500 hover:text-white transition-all">
                                    CONSULT NOW
                                </button>
                            </div>
                            <div className="absolute -bottom-10 -right-10 opacity-10">
                                <User size={200} />
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-100 dark:border-slate-800 space-y-6">
                            <h3 className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-xs">Health Insights</h3>
                            <div className="space-y-4">
                                {[
                                    { text: "Drink 2L more water today", progress: 60, icon: <Activity className="text-blue-500" /> },
                                    { text: "Sleep cycle optimization", progress: 40, icon: <Clock className="text-orange-500" /> },
                                    { text: "Maintain step target", progress: 85, icon: <Activity className="text-green-500" /> }
                                ].map((tip, idx) => (
                                    <div key={idx} className="space-y-2">
                                        <div className="flex justify-between items-center text-xs font-bold text-slate-600 dark:text-slate-400">
                                            <span className="flex items-center gap-2">{tip.icon} {tip.text}</span>
                                            <span>{tip.progress}%</span>
                                        </div>
                                        <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-600 transition-all duration-1000" style={{ width: `${tip.progress}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PatientDashboard;
