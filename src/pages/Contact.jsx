import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
            {/* Header */}
            <div className="bg-blue-900 dark:bg-slate-950 text-white py-20 px-4 text-center transition-colors">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-blue-200 dark:text-slate-400 max-w-2xl mx-auto">
                    We are here to help. Get in touch with us for appointments, inquiries, or emergency services.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 -mt-10 mb-20 relative z-10">
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 text-center hover:transform hover:-translate-y-1 transition-all">
                        <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Phone size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Call Us</h3>
                        <p className="text-slate-500 dark:text-slate-400 mb-4">24/7 Emergency & Support</p>
                        <p className="text-lg font-bold text-blue-900 dark:text-blue-300">+91 40 2360 7777</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">1066 (Emergency)</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 text-center hover:transform hover:-translate-y-1 transition-all">
                        <div className="w-16 h-16 bg-orange-50 dark:bg-orange-900/30 text-orange-500 dark:text-orange-400 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Mail size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Email Us</h3>
                        <p className="text-slate-500 dark:text-slate-400 mb-4">Write to us for any queries</p>
                        <p className="text-lg font-bold text-blue-900 dark:text-blue-300">info@aureliushospitals.com</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">feedback@aureliushospitals.com</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 text-center hover:transform hover:-translate-y-1 transition-all">
                        <div className="w-16 h-16 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                            <MapPin size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Visit Us</h3>
                        <p className="text-slate-500 dark:text-slate-400 mb-4">Aurelius Hospitals Jubilee Hills</p>
                        <p className="text-sm text-slate-600 dark:text-slate-300">Road No 72, Opp. Bharatiya Vidya Bhavan School, Film Nagar, Hyderabad, Telangana 500033</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 pb-20 grid lg:grid-cols-2 gap-12">
                {/* Map Placeholder */}
                <div className="bg-slate-200 dark:bg-slate-700 rounded-2xl h-[500px] w-full relative overflow-hidden group">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-500 font-bold text-xl pointer-events-none z-10">
                        Map View (Generic Placeholder)
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.867272213759!2d78.40935391536763!3d17.41818788806087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96b42b0833a5%3A0x6f91364d9406560!2sAurelius%20Hospitals%20Jubilee%20Hills!5e0!3m2!1sen!2sin!4v1645524675402!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Map"
                        className="opacity-50 group-hover:opacity-100 transition-opacity duration-500 custom-map-filter"
                    ></iframe>
                </div>

                {/* Enquiry Form */}
                <div>
                    <div className="mb-8">
                        <span className="text-orange-500 font-bold uppercase tracking-wider text-sm">Get in touch</span>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">Send us a Message</h2>
                        <p className="text-slate-600 dark:text-slate-300 mt-4">
                            Have a question about our services or need help? Fill out the form below and we’ll get back to you as soon as possible.
                        </p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                                <input type="text" className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 dark:text-white outline-none transition-all placeholder:text-slate-400" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Your Email</label>
                                <input type="email" className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 dark:text-white outline-none transition-all placeholder:text-slate-400" placeholder="john@example.com" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                            <select className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 dark:text-white outline-none transition-all cursor-pointer">
                                <option>General Inquiry</option>
                                <option>Appointment Issue</option>
                                <option>Billing Question</option>
                                <option>Feedback</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Message</label>
                            <textarea rows="5" className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 dark:text-white outline-none transition-all resize-none placeholder:text-slate-400" placeholder="How can we help you?"></textarea>
                        </div>

                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-blue-500/30 dark:shadow-none">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
