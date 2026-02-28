import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { footerLinks } from '../data/footerLinks';

const FooterSection = ({ title, links, sections }) => (
    <div className="space-y-6">
        <h4 className="text-white font-bold text-lg border-b border-orange-500/50 pb-2 inline-block">
            {title}
        </h4>
        {links && (
            <ul className="space-y-2 text-sm text-slate-400">
                {links.map((link, idx) => (
                    <li key={idx} className="hover:text-orange-500 transition-colors cursor-pointer flex items-center gap-1">
                        <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                        <Link to={link.path || "#"}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        )}
        {sections && sections.map((sec, idx) => (
            <div key={idx} className="space-y-3">
                <h5 className="text-slate-300 font-semibold text-sm uppercase tracking-wider">{sec.name}</h5>
                <ul className="space-y-2 text-xs text-slate-500">
                    {sec.links.map((link, lIdx) => (
                        <li key={lIdx} className="hover:text-orange-400 transition-colors cursor-pointer flex items-center gap-1">
                            <span className="w-1 h-1 bg-slate-800 rounded-full"></span>
                            <Link to={link.path || "#"}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
);

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4">
                {/* Branding and Social */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20 border-b border-slate-900 pb-12">
                    <div className="max-w-md">
                        <div className="flex flex-col leading-none mb-6">
                            <span className="text-3xl font-bold text-white tracking-tight">AURELIUS</span>
                            <span className="text-sm font-semibold text-orange-500 tracking-widest uppercase">HOSPITALS</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-8 italic">
                            "Touching lives through clinical excellence and compassionate care. Pioneering healthcare innovation in India since 1983."
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                <div key={idx} className="bg-slate-900 p-2.5 rounded-xl hover:bg-orange-500 transition-all hover:-translate-y-1 cursor-pointer text-white border border-slate-800">
                                    <Icon size={20} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full lg:w-auto">
                        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 flex items-start gap-4">
                            <div className="bg-orange-500/10 p-3 rounded-xl text-orange-500">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-1">Emergency Help</h4>
                                <p className="text-2xl font-black text-orange-500 tracking-wider">1066</p>
                                <p className="text-xs text-slate-500 mt-1">24/7 Rapid Response</p>
                            </div>
                        </div>
                        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 flex items-start gap-4">
                            <div className="bg-blue-500/10 p-3 rounded-xl text-blue-500">
                                <ExternalLink size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-1">Book Appointment</h4>
                                <p className="text-xl font-bold text-blue-400">Online Portal</p>
                                <button className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-full mt-2 transition-colors">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <FooterSection {...footerLinks.discoverAurelius} />
                    <div className="space-y-12">
                        <FooterSection {...footerLinks.leadership} />
                        <FooterSection {...footerLinks.corporate} />
                    </div>
                    <FooterSection {...footerLinks.medicalServices} />
                    <div className="space-y-12">
                        <FooterSection {...footerLinks.findHospital} />
                        <FooterSection {...footerLinks.healthLibrary} />
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 pt-12 border-t border-slate-900">
                    <FooterSection {...footerLinks.governanceAndInvestors} />
                    <FooterSection {...footerLinks.technologyAndTests} />

                    {/* Contact Info Column */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold text-lg border-b border-orange-500/50 pb-2 inline-block">Contact Support</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex gap-3">
                                <MapPin size={18} className="text-orange-500 shrink-0" />
                                <span className="text-slate-400">Aurelius Hospitals Group, Road No 72, Jubilee Hills, Hyderabad - 500033</span>
                            </li>
                            <li className="flex gap-3">
                                <Mail size={18} className="text-orange-500 shrink-0" />
                                <span className="text-slate-400">info@aureliushospitals.com</span>
                            </li>
                            <li className="flex gap-3">
                                <Phone size={18} className="text-orange-500 shrink-0" />
                                <span className="text-slate-400">+91 40 2360 7777</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-900/30 p-8 rounded-3xl border border-slate-900 text-center">
                        <h4 className="text-white font-bold mb-4">Patient Portal</h4>
                        <p className="text-xs text-slate-500 mb-6 leading-relaxed">Access your medical records, test results and manage appointments securely.</p>
                        <button className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-xl text-sm font-bold border border-slate-700 transition-all">Login to Portal</button>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-600 font-medium">
                    <p>© {new Date().getFullYear()} Aurelius Hospitals Group. All Rights Reserved. Built with excellence.</p>
                    <div className="flex gap-8">
                        <span className="hover:text-slate-400 cursor-pointer transition-colors uppercase tracking-widest">Privacy Policy</span>
                        <span className="hover:text-slate-400 cursor-pointer transition-colors uppercase tracking-widest">Disclaimer</span>
                        <span className="hover:text-slate-400 cursor-pointer transition-colors uppercase tracking-widest">Sitemap</span>
                        <span className="hover:text-slate-400 cursor-pointer transition-colors uppercase tracking-widest">ESG Disclosures</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
