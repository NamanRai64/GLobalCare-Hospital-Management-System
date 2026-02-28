import React, { useState } from 'react';
import { Filter, Star, MapPin, Stethoscope, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockDoctors } from '../data/doctors';

const specializations = [
    "Cardiologist", "Dermatologist", "Neurologist", "Orthopedist", "Pediatrician", "Gynecologist", "General Physician", "Oncologist", "Gastroenterologist", "Physiotherapist"
];

const Doctors = () => {
    const [selectedSpecialization, setSelectedSpecialization] = useState([]);
    const [priceRange, setPriceRange] = useState(2000);
    const [onlyAvailableToday, setOnlyAvailableToday] = useState(false);
    const navigate = useNavigate();

    const toggleSpecialization = (spec) => {
        setSelectedSpecialization(prev =>
            prev.includes(spec) ? prev.filter(s => s !== spec) : [...prev, spec]
        );
    };

    const filteredDoctors = mockDoctors.filter(doc => {
        const matchesSpec = selectedSpecialization.length === 0 || selectedSpecialization.includes(doc.specialization);
        const matchesPrice = parseInt(doc.fees.replace('₹', '')) <= priceRange;
        const matchesAvailability = !onlyAvailableToday || doc.availability === "Available Today";
        return matchesSpec && matchesPrice && matchesAvailability;
    });

    return (
        <div className="bg-slate-50 dark:bg-slate-900 min-h-screen py-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8">

                {/* Sidebar Filters */}
                <aside className="w-full lg:w-1/4 space-y-8">
                    <div className="glass-card p-8 rounded-[2.5rem] border-none shadow-2xl shadow-blue-500/5">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2 uppercase tracking-tight">
                                <Filter size={20} className="text-blue-600" /> Filters
                            </h3>
                            <button
                                onClick={() => { setSelectedSpecialization([]); setPriceRange(2000); setOnlyAvailableToday(false); }}
                                className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest hover:text-orange-500 transition-colors"
                            >
                                Reset
                            </button>
                        </div>

                        {/* Specialization Filter */}
                        <div className="mb-8">
                            <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-4 block">Medical Specialist</h4>
                            <div className="space-y-3 max-h-72 overflow-y-auto pr-2 custom-scrollbar">
                                {specializations.map((spec) => (
                                    <label key={spec} className="flex items-center gap-3 cursor-pointer group">
                                        <div className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${selectedSpecialization.includes(spec) ? 'bg-blue-600 border-blue-600' : 'border-slate-200 dark:border-slate-700 group-hover:border-blue-400'}`}>
                                            {selectedSpecialization.includes(spec) && <Check size={14} className="text-white" />}
                                        </div>
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            checked={selectedSpecialization.includes(spec)}
                                            onChange={() => toggleSpecialization(spec)}
                                        />
                                        <span className={`text-sm font-medium transition-colors ${selectedSpecialization.includes(spec) ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200'}`}>
                                            {spec}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Price Filter */}
                        <div className="mb-8">
                            <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-4 flex justify-between">
                                <span>Budget Range</span>
                                <span className="text-blue-600">₹{priceRange}</span>
                            </h4>
                            <input
                                type="range"
                                min="500"
                                max="2000"
                                step="100"
                                value={priceRange}
                                onChange={(e) => setPriceRange(Number(e.target.value))}
                                className="w-full h-1.5 bg-slate-100 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                        </div>

                        {/* Availability Filter */}
                        <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className={`w-10 h-5 rounded-full relative transition-colors ${onlyAvailableToday ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-700'}`}>
                                    <div className={`absolute top-1 w-3 h-3 rounded-full bg-white transition-all ${onlyAvailableToday ? 'left-6' : 'left-1'}`} />
                                </div>
                                <input
                                    type="checkbox"
                                    className="hidden"
                                    checked={onlyAvailableToday}
                                    onChange={() => setOnlyAvailableToday(!onlyAvailableToday)}
                                />
                                <span className="text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest">Available Today</span>
                            </label>
                        </div>
                    </div>
                </aside>

                {/* Doctor List */}
                <main className="flex-1">
                    <div className="flex justify-between items-center mb-8 bg-white dark:bg-slate-900/50 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800">
                        <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                            {filteredDoctors.length} <span className="text-blue-600">Specialists</span> Found
                        </h2>
                        <select className="bg-transparent border-none text-[10px] font-black uppercase tracking-widest text-slate-500 focus:ring-0 cursor-pointer">
                            <option>Relevance</option>
                            <option>Excellence</option>
                            <option>Efficiency</option>
                        </select>
                    </div>

                    <div className="space-y-6">
                        {filteredDoctors.map((doctor) => (
                            <div key={doctor.id} className="glass-card rounded-[3rem] p-8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 flex flex-col md:flex-row gap-10 border-none group">
                                {/* Image */}
                                <div className="w-full md:w-56 h-56 flex-shrink-0 rounded-[2rem] overflow-hidden relative shadow-xl">
                                    <img
                                        src={doctor.image}
                                        alt={doctor.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-2xl text-[9px] font-black text-white uppercase tracking-widest border border-white/20">
                                        {doctor.availability}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-6">
                                            <div>
                                                <h3
                                                    onClick={() => navigate(`/doctor/${doctor.id}`)}
                                                    className="text-3xl font-black text-slate-900 dark:text-white mb-2 hover:text-blue-600 cursor-pointer transition-colors uppercase tracking-tight"
                                                >
                                                    {doctor.name}
                                                </h3>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em]">{doctor.specialization}</span>
                                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                                                    <div className="flex items-center gap-1 text-orange-500">
                                                        <Star size={12} fill="currentColor" />
                                                        <span className="text-[10px] font-black">{doctor.rating}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">{doctor.fees}</div>
                                                <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Consult Fee</div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-6 mb-8">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                                                    <Stethoscope size={20} />
                                                </div>
                                                <div>
                                                    <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Experience</div>
                                                    <div className="text-sm font-bold text-slate-700 dark:text-slate-300">{doctor.experience}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-2xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600">
                                                    <MapPin size={20} />
                                                </div>
                                                <div>
                                                    <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Location</div>
                                                    <div className="text-sm font-bold text-slate-700 dark:text-slate-300">{doctor.location}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 pt-8 border-t border-slate-100 dark:border-slate-800">
                                        <button
                                            onClick={() => navigate(`/doctor/${doctor.id}`)}
                                            className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black text-xs uppercase tracking-[0.2em] py-4 rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                                        >
                                            View Profile
                                        </button>
                                        <button
                                            onClick={() => navigate('/appointment', { state: { doctorName: doctor.name, specialization: doctor.specialization } })}
                                            className="flex-1 bg-blue-600 text-white font-black text-xs uppercase tracking-[0.2em] py-4 rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
                                        >
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {filteredDoctors.length === 0 && (
                            <div className="text-center py-24 glass-card rounded-[3rem] border-none">
                                <Activity size={48} className="mx-auto text-slate-200 mb-6" />
                                <p className="text-xl font-black text-slate-400 uppercase tracking-widest">No matching specialists found</p>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Doctors;
