import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle, Stethoscope } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Appointment = () => {
    const [submitted, setSubmitted] = useState(false);
    const location = useLocation();
    const { doctorName, specialization } = location.state || {};
    const [selectedSpecialization, setSelectedSpecialization] = useState(specialization || "");

    useEffect(() => {
        if (specialization) {
            setSelectedSpecialization(specialization);
        }
    }, [specialization]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        window.scrollTo(0, 0);
    };

    if (submitted) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center bg-slate-50 dark:bg-slate-900 px-4 transition-colors duration-300">
                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl text-center max-w-md w-full border border-slate-100 dark:border-slate-700 transition-colors">
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Appointment Requested!</h2>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                        Thank you for your request. Our team will contact you shortly to confirm your slot.
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl border border-slate-100 dark:border-slate-600 mb-6">
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Reference ID</p>
                        <p className="text-xl font-bold text-blue-600 dark:text-blue-400">AP-{Math.floor(100000 + Math.random() * 900000)}</p>
                    </div>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-orange-500/20 dark:shadow-none"
                    >
                        Book Another
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-slate-50 dark:bg-slate-900 min-h-screen py-12 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-700 transition-colors">
                    <div className="grid md:grid-cols-5">

                        {/* Left Side - Info */}
                        <div className="md:col-span-2 bg-slate-900 text-white p-8 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-blue-600/10 z-0"></div>
                            <div className="relative z-10">
                                <h2 className="text-2xl font-bold mb-6">Book Your Visit</h2>
                                <p className="text-slate-300 mb-8 text-sm leading-relaxed">
                                    Schedule your appointment online using this form. For urgent medical issues, please call our emergency line.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-slate-800 p-2 rounded-lg">
                                            <Phone size={20} className="text-orange-500" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Emergency</p>
                                            <p className="font-bold text-lg">1066</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-slate-800 p-2 rounded-lg">
                                            <Clock size={20} className="text-orange-500" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">OPD Hours</p>
                                            <p className="font-bold">Mon - Sat</p>
                                            <p className="text-sm text-slate-400">8:00 AM - 8:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative circles */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl opacity-20"></div>
                            <div className="absolute top-10 -left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="md:col-span-3 p-8 lg:p-10">
                            <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                                <Calendar className="text-blue-600 dark:text-blue-400" />
                                <span>Appointment Details</span>
                            </h1>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                {doctorName && (
                                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 p-4 rounded-xl flex items-center gap-3">
                                        <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded-full text-blue-600 dark:text-blue-300">
                                            <Stethoscope size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-blue-600 dark:text-blue-300 uppercase tracking-wide">Selected Doctor</p>
                                            <p className="font-bold text-slate-800 dark:text-white">{doctorName}</p>
                                            <p className="text-sm text-slate-500 dark:text-slate-300">{specialization}</p>
                                        </div>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">First Name</label>
                                        <div className="relative">
                                            <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
                                            <input type="text" required className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 dark:text-white outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500" placeholder="John" />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Last Name</label>
                                        <input type="text" required className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 dark:text-white outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Phone Number</label>
                                        <div className="relative">
                                            <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
                                            <input type="tel" required className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 dark:text-white outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500" placeholder="+91 98765 43210" />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
                                        <div className="relative">
                                            <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
                                            <input type="email" required className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 dark:text-white outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500" placeholder="john@example.com" />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Preferred Date</label>
                                        <input type="date" required className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 dark:text-white outline-none transition-all dark:[color-scheme:dark]" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Time Slot</label>
                                        <select className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 dark:text-white outline-none transition-all cursor-pointer">
                                            <option>Morning (9 AM - 12 PM)</option>
                                            <option>Afternoon (12 PM - 4 PM)</option>
                                            <option>Evening (4 PM - 8 PM)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Department / Speciality</label>
                                    <select
                                        required
                                        className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 dark:text-white outline-none transition-all cursor-pointer"
                                        value={selectedSpecialization}
                                        onChange={(e) => setSelectedSpecialization(e.target.value)}
                                        disabled={!!doctorName} // Disable if doctor is pre-selected
                                    >
                                        <option value="">Select Department</option>
                                        <option value="Cardiologist">Cardiology</option>
                                        <option value="Neurologist">Neurology</option>
                                        <option value="Orthopedist">Orthopedics</option>
                                        <option value="Pediatrician">Pediatrics</option>
                                        <option value="Gynecologist">Gynecology</option>
                                        <option value="General Physician">General Medicine</option>
                                        <option value="Dermatologist">Dermatology</option>
                                    </select>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Reason for Visit</label>
                                    <div className="relative">
                                        <FileText size={18} className="absolute left-3 top-3 text-slate-400 dark:text-slate-500" />
                                        <textarea rows="3" className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 dark:text-white outline-none transition-all resize-none placeholder:text-slate-400 dark:placeholder:text-slate-500" placeholder="Briefly describe your symptoms..."></textarea>
                                    </div>
                                </div>

                                <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-500/25 dark:shadow-none mt-2">
                                    Confirm Appointment
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;
