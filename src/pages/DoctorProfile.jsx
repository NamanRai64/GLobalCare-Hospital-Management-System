import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockDoctors } from '../data/doctors';
import { MapPin, Stethoscope, Star, GraduationCap, Languages, Clock, Calendar } from 'lucide-react';

const DoctorProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const doctor = mockDoctors.find(d => d.id === parseInt(id));

    if (!doctor) {
        return (
            <div className="min-h-screen flex items-center justify-center dark:bg-slate-900 dark:text-white transition-colors">
                <p className="text-xl text-slate-500 dark:text-slate-400">Doctor not found</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-6 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium flex items-center gap-2 transition-colors"
                >
                    &larr; Back to Doctors
                </button>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Profile Info */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Header Card */}
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row gap-8 transition-colors">
                            <div className="w-full md:w-56 h-56 flex-shrink-0 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-700">
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex-1">
                                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                                    <div>
                                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{doctor.name}</h1>
                                        <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">{doctor.specialization}</p>
                                    </div>
                                    <div className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        {doctor.availability}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                                        <Stethoscope size={18} className="text-slate-400 dark:text-slate-500" />
                                        <span>{doctor.experience} Exp</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                                        <MapPin size={18} className="text-slate-400 dark:text-slate-500" />
                                        <span>{doctor.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                                        <Star size={18} className="text-orange-400 fill-current" />
                                        <span>{doctor.rating} ({doctor.reviews} Reviews)</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                                        <Languages size={18} className="text-slate-400 dark:text-slate-500" />
                                        <span>{doctor.languages.join(", ")}</span>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        onClick={() => navigate('/appointment', { state: { doctorName: doctor.name, specialization: doctor.specialization } })}
                                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-orange-100 dark:shadow-none"
                                    >
                                        Book Appointment
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* About Section */}
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 transition-colors">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">About Doctor</h2>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                                {doctor.about}
                            </p>

                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                <GraduationCap size={20} className="text-blue-500 dark:text-blue-400" /> Education
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300">{doctor.education}</p>
                        </div>
                    </div>

                    {/* Booking Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 sticky top-24 transition-colors">
                            <div className="flex justify-between items-center mb-6 pb-6 border-b border-slate-100 dark:border-slate-700">
                                <span className="text-slate-600 dark:text-slate-300 font-medium">Consultation Fee</span>
                                <span className="text-2xl font-bold text-slate-900 dark:text-white">{doctor.fees}</span>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl flex items-start gap-3">
                                    <Clock className="text-blue-600 dark:text-blue-400 mt-1" size={20} />
                                    <div>
                                        <h4 className="font-bold text-blue-900 dark:text-blue-200 text-sm">Clinic Timings</h4>
                                        <p className="text-blue-700 dark:text-blue-300 text-sm">Mon - Sat: 10:00 AM - 07:00 PM</p>
                                    </div>
                                </div>
                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl flex items-start gap-3">
                                    <Calendar className="text-green-600 dark:text-green-400 mt-1" size={20} />
                                    <div>
                                        <h4 className="font-bold text-green-900 dark:text-green-200 text-sm">Next Available Slot</h4>
                                        <p className="text-green-700 dark:text-green-300 text-sm">Today, 04:30 PM</p>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => navigate('/appointment', { state: { doctorName: doctor.name, specialization: doctor.specialization } })}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-500/20 dark:shadow-none"
                            >
                                Book Visit Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorProfile;
