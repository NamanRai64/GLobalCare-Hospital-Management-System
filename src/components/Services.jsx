import React from 'react';
import { Calendar, Pill, Video, Activity, MapPin, TestTube, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        Icon: Calendar,
        title: "Book Appointment",
        description: "Find the best doctors near you",
        iconColor: "text-blue-500 dark:text-blue-400",
        bgColor: "bg-blue-50 dark:bg-blue-900/20",
        hoverBg: "group-hover:bg-blue-600 dark:group-hover:bg-blue-500"
    },
    {
        Icon: TestTube,
        title: "Lab Tests",
        description: "Sample collection at home",
        iconColor: "text-purple-500 dark:text-purple-400",
        bgColor: "bg-purple-50 dark:bg-purple-900/20",
        hoverBg: "group-hover:bg-purple-600 dark:group-hover:bg-purple-500"
    },
    {
        Icon: Pill,
        title: "Buy Medicine",
        description: "Genuine medicines at your doorstep",
        iconColor: "text-green-500 dark:text-green-400",
        bgColor: "bg-green-50 dark:bg-green-900/20",
        hoverBg: "group-hover:bg-green-600 dark:group-hover:bg-green-500"
    },
    {
        Icon: Video,
        title: "Consult Online",
        description: "Video consultation with top specialists",
        iconColor: "text-orange-500 dark:text-orange-400",
        bgColor: "bg-orange-50 dark:bg-orange-900/20",
        hoverBg: "group-hover:bg-orange-600 dark:group-hover:bg-orange-500"
    },
    {
        Icon: Activity,
        title: "Health Checks",
        description: "Preventive health packages",
        iconColor: "text-red-500 dark:text-red-400",
        bgColor: "bg-red-50 dark:bg-red-900/20",
        hoverBg: "group-hover:bg-red-600 dark:group-hover:bg-red-500"
    },
    {
        Icon: MapPin,
        title: "Find Hospital",
        description: "Locate nearest Aurelius Hospital",
        iconColor: "text-teal-500 dark:text-teal-400",
        bgColor: "bg-teal-50 dark:bg-teal-900/20",
        hoverBg: "group-hover:bg-teal-600 dark:group-hover:bg-teal-500"
    }
];

const Services = () => {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight"
                    >
                        Clinical <span className="text-gradient">Support</span> Services
                    </motion.h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                        Precision care powered by technology, designed to provide seamless healthcare solutions for you and your family.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            key={index}
                            className="glass-card p-10 rounded-[3rem] group hover:-translate-y-3 transition-all duration-500 cursor-pointer relative overflow-hidden"
                        >
                            {/* Decorative Background Icon */}
                            <div className="absolute -right-8 -bottom-8 opacity-[0.03] dark:opacity-[0.05] group-hover:scale-125 transition-transform duration-700">
                                <service.Icon size={180} />
                            </div>

                            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-500/20 ${service.bgColor} ${service.hoverBg}`}>
                                <service.Icon className={`w-10 h-10 transition-colors duration-500 ${service.iconColor} group-hover:text-white`} />
                            </div>

                            <h3 className="text-2xl font-black text-slate-800 dark:text-slate-100 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed mb-8">
                                {service.description}
                            </p>

                            <div className="flex items-center text-blue-600 dark:text-blue-400 font-black text-xs uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-all duration-300">
                                Explore Services <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
