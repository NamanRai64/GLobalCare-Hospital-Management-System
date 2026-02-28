import React, { useRef } from 'react';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    { name: "John Smith", role: "Heart Patient", quote: "The care I received at Aurelius was nothing short of miraculous. From the diagnosis to the recovery, the team was with me every step of the way. I owe my life to them.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200" },
    { name: "Emily Davis", role: "Maternity Patient", quote: "Bringing my baby into the world was a beautiful experience thanks to the compassionate nurses and doctors. The facilities are top-notch and I felt so safe.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200" },
    { name: "Robert Chen", role: "Orthopedic Surgery", quote: "After years of knee pain, I finally decided to undergo surgery. Dr. Patel and his team were fantastic. I was walking within days! Highly recommend.", img: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80&w=200&h=200" },
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 relative">
                <div className="mb-16 text-center">
                    <span className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2 block">Patient Stories</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
                        Stories of Hope & Healing
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
                    {testimonials.map((testi, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="flex-1 bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl relative border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all"
                        >
                            <Quote className="absolute top-6 left-6 text-blue-200 dark:text-slate-700 w-12 h-12" />
                            <p className="text-slate-600 dark:text-slate-300 italic leading-relaxed mb-6 pt-8 relative z-10 text-lg">"{testi.quote}"</p>
                            <div className="flex items-center gap-4 mt-auto">
                                <img src={testi.img} alt={testi.name} className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-slate-700 shadow-md" />
                                <div>
                                    <div className="font-bold text-slate-900 dark:text-white">{testi.name}</div>
                                    <div className="text-xs text-orange-500 font-semibold uppercase">{testi.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 transition-colors inline-flex items-center gap-2 group">
                        Read More Stories <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
