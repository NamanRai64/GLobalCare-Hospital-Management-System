import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ShoppingCart, Truck, Store, AlertCircle, CheckCircle2, X, ChevronRight, Info, Pill, Plus, Minus } from 'lucide-react';
import { medicines, categories } from '../data/medicines';

const Pharmacy = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [deliveryMode, setDeliveryMode] = useState('delivery'); // 'delivery' or 'pickup'
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [showPrescriptionAlert, setShowPrescriptionAlert] = useState(false);

    // Filtered medicines
    const filteredMedicines = useMemo(() => {
        return medicines.filter(med => {
            const matchesSearch = med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                med.brand.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = activeCategory === 'All' || med.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, activeCategory]);

    // Cart logic
    const addToCart = (medicine) => {
        if (medicine.prescriptionRequired) {
            setShowPrescriptionAlert(true);
            return;
        }

        const existingItem = cart.find(item => item.id === medicine.id);
        if (existingItem) {
            setCart(cart.map(item =>
                item.id === medicine.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { ...medicine, quantity: 1 }]);
        }
    };

    const updateQuantity = (id, delta) => {
        setCart(cart.map(item => {
            if (item.id === id) {
                const newQty = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQty };
            }
            return item;
        }));
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            {/* Prescription Warning Overlay */}
            <AnimatePresence>
                {showPrescriptionAlert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white dark:bg-slate-900 rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-200 dark:border-slate-800"
                        >
                            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <AlertCircle className="text-orange-600 dark:text-orange-400 w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-4">Prescription Required</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-center mb-8">
                                This medication requires a valid prescription or a recommendation from an Aurelius doctor. Please consult our tele-medicine department to proceed.
                            </p>
                            <div className="space-y-3">
                                <button
                                    onClick={() => setShowPrescriptionAlert(false)}
                                    className="w-full bg-aurelius-blue text-white py-4 rounded-xl font-bold hover:bg-blue-600 transition-all"
                                >
                                    Book Consult Now
                                </button>
                                <button
                                    onClick={() => setShowPrescriptionAlert(false)}
                                    className="w-full text-slate-500 font-semibold py-2 hover:text-slate-700 dark:hover:text-slate-300 transition-all"
                                >
                                    Cancel
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Sticky Cart Fab */}
            {cart.length > 0 && (
                <button
                    onClick={() => setShowCart(true)}
                    className="fixed bottom-8 right-8 z-50 bg-aurelius-orange text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all group"
                >
                    <div className="relative">
                        <ShoppingCart size={24} />
                        <span className="absolute -top-2 -right-2 bg-white text-aurelius-orange text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-aurelius-orange">
                            {cart.length}
                        </span>
                    </div>
                </button>
            )}

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 dark:opacity-10">
                    <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-orange-400 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-7xl mx-auto relative text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-sm font-bold mb-6 border border-blue-100 dark:border-blue-800"
                    >
                        <Pill size={16} />
                        Aurelius Digital Pharmacy
                    </motion.div>
                    <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                        Authentic Medicines,<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Delivered in 120 Mins.</span>
                    </h1>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto mt-12 bg-white dark:bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-4">
                        <div className="flex-1 flex items-center gap-3 px-4">
                            <Search className="text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search by medicine name, brand, or category..."
                                className="w-full bg-transparent outline-none text-slate-700 dark:text-slate-200 py-3"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <button className="bg-aurelius-blue text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-600 transition-all flex items-center gap-2">
                            Search
                        </button>
                    </div>

                    {/* Quick Stats */}
                    <div className="flex justify-center gap-12 mt-12">
                        <div className="text-center">
                            <div className="text-2xl font-black text-slate-900 dark:text-white">100%</div>
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Genuine</div>
                        </div>
                        <div className="w-px h-10 bg-slate-200 dark:bg-slate-800 self-center"></div>
                        <div className="text-center">
                            <div className="text-2xl font-black text-slate-900 dark:text-white">2 Hour</div>
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Express</div>
                        </div>
                        <div className="w-px h-10 bg-slate-200 dark:bg-slate-800 self-center"></div>
                        <div className="text-center">
                            <div className="text-2xl font-black text-slate-900 dark:text-white">5K+</div>
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Products</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Marketplace Main */}
            <section className="max-w-7xl mx-auto px-4 pb-32">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Filters */}
                    <aside className="lg:w-64 space-y-8">
                        <div>
                            <h4 className="text-slate-900 dark:text-white font-bold mb-4 flex items-center gap-2">
                                <Truck size={18} className="text-orange-500" />
                                Fulfillment
                            </h4>
                            <div className="grid grid-cols-2 gap-2 bg-slate-100 dark:bg-slate-900 p-1.5 rounded-xl border border-slate-200 dark:border-slate-800">
                                <button
                                    onClick={() => setDeliveryMode('delivery')}
                                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${deliveryMode === 'delivery' ? 'bg-white dark:bg-slate-800 text-aurelius-blue shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    Home Delivery
                                </button>
                                <button
                                    onClick={() => setDeliveryMode('pickup')}
                                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${deliveryMode === 'pickup' ? 'bg-white dark:bg-slate-800 text-aurelius-blue shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    Store Pickup
                                </button>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-slate-900 dark:text-white font-bold mb-4 flex items-center gap-2">
                                <Filter size={18} className="text-blue-500" />
                                Categories
                            </h4>
                            <div className="space-y-2">
                                <button
                                    onClick={() => setActiveCategory('All')}
                                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeCategory === 'All' ? 'bg-aurelius-blue text-white' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900'}`}
                                >
                                    All Medicines
                                </button>
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeCategory === cat ? 'bg-aurelius-blue text-white' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900'}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-950/20 p-6 rounded-3xl border border-orange-100 dark:border-orange-900/30">
                            <Info size={20} className="text-orange-500 mb-3" />
                            <h5 className="text-slate-900 dark:text-white font-bold mb-2">Prescription Policy</h5>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                Items marked with <span className="text-red-500 font-bold">Rx</span> require a valid medical recommendation. Upload yours at checkout.
                            </p>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                                {activeCategory === 'All' ? 'Available Medicines' : `${activeCategory} Medicines`}
                                <span className="ml-3 text-sm text-slate-500 font-normal">({filteredMedicines.length} items found)</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            {filteredMedicines.map(med => (
                                <motion.div
                                    key={med.id}
                                    layout
                                    className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all group"
                                >
                                    <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-slate-50 dark:bg-slate-950">
                                        <img src={med.image} alt={med.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        {med.prescriptionRequired && (
                                            <div className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                                                Rx REQUIRED
                                            </div>
                                        )}
                                    </div>
                                    <div className="mb-4">
                                        <div className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-1">{med.brand}</div>
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-1">{med.name}</h3>
                                        <div className="text-xs text-slate-500 mt-1">{med.type} • {med.category}</div>
                                    </div>
                                    <div className="flex items-center justify-between mt-auto">
                                        <div>
                                            <div className="text-2xl font-black text-slate-900 dark:text-white">₹{med.price}</div>
                                            <div className="text-[10px] text-slate-500 font-bold">INCL. ALL TAXES</div>
                                        </div>
                                        <button
                                            onClick={() => addToCart(med)}
                                            className="bg-slate-100 dark:bg-slate-800 hover:bg-aurelius-blue hover:text-white text-slate-900 dark:text-white px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2"
                                        >
                                            <Plus size={16} />
                                            Add
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Cart Drawer */}
            <AnimatePresence>
                {showCart && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowCart(false)}
                            className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 z-[101] h-screen w-full max-w-md bg-white dark:bg-slate-900 shadow-2xl flex flex-col"
                        >
                            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                    <ShoppingCart size={24} className="text-aurelius-orange" />
                                    Your Cart
                                </h2>
                                <button onClick={() => setShowCart(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                                    <X size={24} className="text-slate-400" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                                {cart.length === 0 ? (
                                    <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                                        <Pill size={64} className="mb-4 text-slate-300" />
                                        <p className="font-bold text-slate-500 uppercase tracking-widest text-sm">Your cart is empty</p>
                                    </div>
                                ) : (
                                    cart.map(item => (
                                        <div key={item.id} className="flex gap-4">
                                            <div className="w-20 h-20 bg-slate-50 dark:bg-slate-950 rounded-2xl overflow-hidden shrink-0">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between">
                                                    <div>
                                                        <h4 className="font-bold text-slate-900 dark:text-white line-clamp-1">{item.name}</h4>
                                                        <p className="text-xs text-slate-500">{item.brand}</p>
                                                    </div>
                                                    <button onClick={() => removeFromCart(item.id)} className="text-slate-400 hover:text-red-500">
                                                        <X size={16} />
                                                    </button>
                                                </div>
                                                <div className="flex items-center justify-between mt-3">
                                                    <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-2">
                                                        <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-aurelius-blue transition-colors">
                                                            <Minus size={14} />
                                                        </button>
                                                        <span className="w-8 text-center text-sm font-bold text-slate-900 dark:text-white">{item.quantity}</span>
                                                        <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-aurelius-blue transition-colors">
                                                            <Plus size={14} />
                                                        </button>
                                                    </div>
                                                    <div className="font-bold text-slate-900 dark:text-white">₹{item.price * item.quantity}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>

                            {cart.length > 0 && (
                                <div className="p-8 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20">
                                    <div className="space-y-3 mb-8">
                                        <div className="flex justify-between text-slate-500 text-sm">
                                            <span>Subtotal</span>
                                            <span>₹{cartTotal}</span>
                                        </div>
                                        <div className="flex justify-between text-slate-500 text-sm">
                                            <span>Delivery Fee</span>
                                            <span className="text-green-500 font-bold">{deliveryMode === 'delivery' ? '₹40' : 'FREE'}</span>
                                        </div>
                                        <div className="flex justify-between text-slate-900 dark:text-white text-xl font-black pt-3 border-t border-slate-200 dark:border-slate-800">
                                            <span>Total</span>
                                            <span>₹{cartTotal + (deliveryMode === 'delivery' ? 40 : 0)}</span>
                                        </div>
                                    </div>
                                    <button className="w-full bg-aurelius-orange text-white py-4 rounded-2xl font-black shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:-translate-y-1 transition-all">
                                        Checkout Now
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Pharmacy;
