
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User,
    Stethoscope,
    ShieldCheck,
    ArrowRight,
    Mail,
    Lock,
    Eye,
    EyeOff,
    Activity,
    ChevronLeft
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState('patient'); // 'patient', 'doctor', 'nurse', 'admin'
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
    });

    const roles = [
        { id: 'patient', label: 'Patient', icon: User, color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-900/20' },
        { id: 'doctor', label: 'Doctor', icon: Stethoscope, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
        { id: 'nurse', label: 'Nurse', icon: ShieldCheck, color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/20' },
        { id: 'admin', label: 'Admin', icon: Activity, color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-900/20' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate login logic based on role
        if (role === 'patient') {
            navigate('/dashboard');
        } else {
            navigate('/staff');
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side: Branding & Info */}
                <div className="hidden lg:block space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-blue-600 p-2 rounded-xl text-white shadow-lg shadow-blue-500/30">
                                <Activity size={32} />
                            </div>
                            <div>
                                <h1 className="text-3xl font-black tracking-tight text-blue-900 dark:text-white">AURELIUS</h1>
                                <p className="text-sm font-bold text-orange-500 uppercase tracking-widest">HOSPITALS</p>
                            </div>
                        </div>

                        <h2 className="text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6">
                            Empowering Healthcare through <span className="text-blue-600">Digital Innovation.</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                            Welcome to the unified Aurelius portal. Whether you're seeking care or providing it, our secure platform puts health at your fingertips.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: 'Secure Access', desc: 'Enterprise-grade security for your medical data.' },
                                { label: 'Cloud Records', desc: 'Sync across all Aurelius branches instantly.' }
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-3xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800">
                                    <h4 className="font-bold mb-2">{item.label}</h4>
                                    <p className="text-sm text-slate-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Login Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card p-8 md:p-12 rounded-[2.5rem] w-full max-w-lg mx-auto"
                >
                    <div className="text-center mb-10">
                        <h3 className="text-3xl font-black mb-2">{isLogin ? 'Welcome Back' : 'Join Aurelius'}</h3>
                        <p className="text-slate-500 font-medium">Please select your role to continue</p>
                    </div>

                    {/* Role Selection */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
                        {roles.map((r) => (
                            <button
                                key={r.id}
                                onClick={() => setRole(r.id)}
                                className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-all border-2 ${role === r.id
                                        ? `border-blue-500 ${r.bg} scale-105 shadow-lg shadow-blue-500/10`
                                        : 'border-transparent bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800'
                                    }`}
                            >
                                <div className={`mb-2 ${r.color}`}>
                                    <r.icon size={24} />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider">{r.label}</span>
                            </button>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <AnimatePresence mode="wait">
                            {!isLogin && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="space-y-2"
                                >
                                    <label className="text-sm font-bold ml-4">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 outline-none border-2 border-transparent focus:border-blue-500 transition-all"
                                            required
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="space-y-2">
                            <label className="text-sm font-bold ml-4">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                <input
                                    type="email"
                                    placeholder="name@example.com"
                                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 outline-none border-2 border-transparent focus:border-blue-500 transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center px-4">
                                <label className="text-sm font-bold">Password</label>
                                {isLogin && <button type="button" className="text-xs font-bold text-blue-600 hover:underline">Forgot?</button>}
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-12 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 outline-none border-2 border-transparent focus:border-blue-500 transition-all"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-2 group mt-8"
                        >
                            {isLogin ? 'Login Now' : 'Create Account'}
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-slate-500 font-medium">
                            {isLogin ? "Don't have an account?" : "Already have an account?"}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="ml-2 font-black text-blue-600 hover:underline"
                            >
                                {isLogin ? 'Sign Up' : 'Login'}
                            </button>
                        </p>
                    </div>

                    <Link to="/" className="flex items-center justify-center gap-2 mt-8 text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors group">
                        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;
