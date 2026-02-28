import React, { useState } from 'react';
import { MessageCircle, X, Send, User, Sparkles, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', text: 'Hello! I am your Aurelius AI assistant. How can I help you today?', time: '10:00 AM' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const newUserMessage = { role: 'user', text: input, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
        setMessages([...messages, newUserMessage]);
        setInput('');

        // Mock bot response
        setTimeout(() => {
            const botResponse = {
                role: 'bot',
                text: "I've noted your query. For specialized medical advice, I recommend booking an appointment with our senior consultants. Would you like me to show you available slots?",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, botResponse]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.9 }}
                        className="bg-white dark:bg-slate-900 w-[350px] md:w-[400px] h-[550px] rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col overflow-hidden mb-6"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-6 text-white flex justify-between items-center shadow-lg">
                            <div className="flex items-center gap-3">
                                <div className="bg-white/20 p-2 rounded-xl backdrop-blur-md">
                                    <Sparkles size={20} className="text-orange-400" />
                                </div>
                                <div>
                                    <h4 className="font-black text-sm tracking-tight text-white">AURELIUS ASSIST</h4>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                                        <span className="text-[10px] font-bold text-blue-200">ALWAYS ONLINE</span>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="bg-white/10 hover:bg-white/20 p-2 rounded-xl transition-all">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar bg-slate-50 dark:bg-slate-950">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-4 rounded-3xl text-sm font-medium shadow-sm ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-tl-none border border-slate-100 dark:border-slate-800'}`}>
                                        {msg.text}
                                        <div className={`mt-1 text-[9px] opacity-60 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                                            {msg.time}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} className="p-6 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex gap-3">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your health query..."
                                className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-2xl px-4 text-sm font-bold text-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-blue-500/20"
                            />
                            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-2xl shadow-lg transition-all active:scale-95">
                                <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-slate-900 dark:bg-blue-600 hover:scale-110 text-white p-4 rounded-3xl shadow-xl transition-all relative group"
            >
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-orange-500 text-[10px] font-bold items-center justify-center">1</span>
                    </span>
                )}

                {/* Tooltip */}
                {!isOpen && (
                    <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 px-4 py-2 rounded-xl text-xs font-black text-slate-900 dark:text-white shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100 dark:border-slate-800">
                        NEED HELP? CHAT NOW
                    </div>
                )}
            </button>
        </div>
    );
};

export default ChatAssistant;
