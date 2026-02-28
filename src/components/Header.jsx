import React, { useState } from 'react';
import { Search, Phone, User, Menu, Moon, Sun, ChevronDown, Clock, Activity, ShieldCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { footerLinks } from '../data/footerLinks';

const MegaMenu = ({ isOpen, content, onClose }) => {
    if (!isOpen) return null;
    return (
        <div
            className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-2xl border-t border-slate-100 dark:border-slate-800 z-50 animate-in fade-in slide-in-from-top-2 duration-300"
            onMouseLeave={onClose}
        >
            <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-4 gap-10">
                {content.map((column, idx) => (
                    <div key={idx} className="space-y-4">
                        <h4 className="text-blue-900 dark:text-blue-400 font-bold text-sm uppercase tracking-widest border-b border-slate-100 dark:border-slate-800 pb-2">
                            {column.title}
                        </h4>
                        <ul className="space-y-2">
                            {column.links.map((link, lIdx) => (
                                <li key={lIdx} className="text-sm text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors cursor-pointer flex items-center gap-2">
                                    <span className="w-1 h-1 bg-slate-300 dark:bg-slate-700 rounded-full"></span>
                                    <Link to={link.path || "#"}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="bg-slate-50 dark:bg-slate-950 px-8 py-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <div className="flex gap-8">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Clock size={14} className="text-orange-500" />
                        <span>24/7 Emergency Care</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                        <ShieldCheck size={14} className="text-blue-500" />
                        <span>NABH Accredited</span>
                    </div>
                </div>
                <Link to="/treatments" className="text-xs font-bold text-orange-500 hover:text-orange-600 flex items-center gap-1">
                    View All Services <ChevronDown size={14} className="-rotate-90" />
                </Link>
            </div>
        </div>
    );
};

const Header = () => {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();
    const [activeMenu, setActiveMenu] = useState(null);

    const menuContent = {
        about: [
            { title: "The Aurelius Story", links: footerLinks.discoverAurelius.links.slice(0, 5) },
            { title: "Our Leadership", links: footerLinks.leadership.links },
            {
                title: "Awards & Governance",
                links: [
                    { name: "Awards & Accolades", path: "/awards" },
                    { name: "Achievements", path: "/achievements" },
                    { name: "Board Committees", path: "/governance" },
                    { name: "Policies", path: "/policies" }
                ]
            },
            {
                title: "Join Us",
                links: [
                    { name: "Careers", path: "/careers" },
                    { name: "Volunteering", path: "/contact" },
                    { name: "Partnerships", path: "/contact" },
                    { name: "Contact Us", path: "/contact" }
                ]
            }
        ],
        services: [
            { title: "Centres of Excellence", links: footerLinks.medicalServices.sections[1].links.slice(0, 6) },
            { title: "Specialities", links: footerLinks.medicalServices.sections[0].links.slice(0, 6) },
            { title: "Diagnostics", links: footerLinks.technologyAndTests.sections[1].links.slice(0, 6) },
            { title: "Technology", links: footerLinks.technologyAndTests.sections[0].links.slice(0, 6) }
        ],
        patientCare: [
            {
                title: "Health Library",
                links: [
                    { name: "Diseases & Conditions", path: "/health-library" },
                    { name: "Symptoms Guide", path: "/health-library" },
                    { name: "Health Technology", path: "/technology" },
                    { name: "Medicines", path: "/health-library" }
                ]
            },
            {
                title: "Checkups",
                links: [
                    { name: "Heart Checkup", path: "/treatments" },
                    { name: "Master Health Check", path: "/treatments" },
                    { name: "Senior Citizen", path: "/treatments" },
                    { name: "Women Health", path: "/treatments" }
                ]
            },
            {
                title: "International",
                links: [
                    { name: "Visa Assistance", path: "/contact" },
                    { name: "Travel Desk", path: "/contact" },
                    { name: "Accommodation", path: "/contact" },
                    { name: "Language Support", path: "/contact" }
                ]
            },
            {
                title: "Emergency",
                links: [
                    { name: "Ambulance Service", path: "/contact" },
                    { name: "1066 Response", path: "/contact" },
                    { name: "Emergency Dept", path: "/contact" },
                    { name: "Air Ambulance", path: "/contact" }
                ]
            }
        ]
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-white dark:bg-slate-900 shadow-md font-sans transition-colors duration-300">
            {/* Top Bar */}
            <div className="bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs py-2 hidden md:block transition-colors duration-300">
                <div className="max-w-7xl mx-auto flex justify-end items-center gap-6 px-4">
                    <span className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors font-medium">International Patients</span>
                    <span className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors font-medium">Contact Us</span>
                    <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold bg-red-50 dark:bg-red-900/20 px-3 py-1 rounded-full">
                        <Activity size={14} className="animate-pulse" />
                        <span>Emergency: 1860-500-1066</span>
                    </div>
                </div>
            </div>

            {/* Main Bar */}
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 cursor-pointer group">
                    <div className="flex flex-col leading-none">
                        <span className="text-2xl font-bold text-blue-900 dark:text-blue-100 tracking-tight group-hover:text-blue-700 transition-colors">AURELIUS</span>
                        <span className="text-sm font-semibold text-orange-500 tracking-widest uppercase">HOSPITALS</span>
                    </div>
                </Link>

                {/* Search */}
                <div className="hidden lg:flex items-center bg-slate-100 dark:bg-slate-800 rounded-full px-5 py-2.5 w-1/3 border border-slate-200 dark:border-slate-700 focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all">
                    <Search className="text-slate-400 w-5 h-5 mr-3" />
                    <input
                        type="text"
                        placeholder="Search Doctors, Specialities, Symptoms..."
                        className="bg-transparent outline-none w-full text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400"
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={toggleTheme}
                        className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:rotate-12"
                        title="Toggle Theme"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button
                        onClick={() => navigate('/login')}
                        className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                    >
                        <User size={18} />
                        Login / Register
                    </button>
                    <button
                        onClick={() => navigate('/appointment')}
                        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-orange-500/30 transform hover:-translate-y-1 active:scale-95 transition-all">
                        Book Appointment
                    </button>
                    <button className="md:hidden text-slate-700 dark:text-slate-300 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                        <Menu size={24} />
                    </button>
                </div>
            </div>

            {/* Navigation */}
            <nav className="border-t border-slate-100 dark:border-slate-800 hidden md:block bg-white dark:bg-slate-900 transition-colors duration-300 relative">
                <div className="max-w-7xl mx-auto px-4">
                    <ul className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-300">
                        <li
                            className="px-4 py-4 hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer flex items-center gap-1 group transition-colors"
                            onMouseEnter={() => setActiveMenu('about')}
                        >
                            About Us <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                        </li>
                        <li
                            className="px-4 py-4 hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer flex items-center gap-1 group transition-colors"
                            onMouseEnter={() => setActiveMenu('services')}
                        >
                            Medical Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                        </li>
                        <li
                            className="px-4 py-4 hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer flex items-center gap-1 group transition-colors"
                            onMouseEnter={() => setActiveMenu('patientCare')}
                        >
                            Patient Care <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                        </li>

                        <div className="w-px h-6 bg-slate-100 dark:bg-slate-800 mx-2"></div>

                        {[
                            { name: 'Doctors', path: '/doctors' },
                            { name: 'Hospitals', path: '/hospitals' },
                            { name: 'Pharmacy', path: '/pharmacy' },
                            { name: 'Treatments', path: '/treatments' },
                            { name: 'Technology', path: '/technology' },
                            { name: 'Health Library', path: '/health-library' }
                        ].map((item) => (
                            <li key={item.name} className="px-4 py-4 hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer group relative transition-colors" onMouseEnter={() => setActiveMenu(null)}>
                                <Link to={item.path}>
                                    {item.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mega Menus */}
                <MegaMenu
                    isOpen={activeMenu === 'about'}
                    content={menuContent.about}
                    onClose={() => setActiveMenu(null)}
                />
                <MegaMenu
                    isOpen={activeMenu === 'services'}
                    content={menuContent.services}
                    onClose={() => setActiveMenu(null)}
                />
                <MegaMenu
                    isOpen={activeMenu === 'patientCare'}
                    content={menuContent.patientCare}
                    onClose={() => setActiveMenu(null)}
                />
            </nav>
        </header>
    );
};

export default Header;
