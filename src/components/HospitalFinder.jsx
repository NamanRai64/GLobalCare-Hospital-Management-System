import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Loader2, ArrowRight } from 'lucide-react';

const hospitals = [
    { name: "Aurelius Indraprastha", city: "New Delhi", lat: 28.5398, lng: 77.2847 },
    { name: "Aurelius Navi Mumbai", city: "Mumbai", lat: 19.0175, lng: 73.0188 },
    { name: "Aurelius Jubilee Hills", city: "Hyderabad", lat: 17.4265, lng: 78.4121 },
    { name: "Aurelius Greams Road", city: "Chennai", lat: 13.0601, lng: 80.2529 },
    { name: "Aurelius Bannerghatta", city: "Bangalore", lat: 12.8959, lng: 77.5983 },
    { name: "Aurelius Gleneagles", city: "Kolkata", lat: 22.5697, lng: 88.4067 }
];

const HospitalFinder = () => {
    const [loading, setLoading] = useState(false);
    const [nearest, setNearest] = useState(null);
    const [error, setError] = useState(null);

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Radius of the earth in km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c;
        return d;
    };

    const findNearest = () => {
        setLoading(true);
        setError(null);

        if (!navigator.geolocation) {
            setError("Geolocation is not supported by your browser");
            setLoading(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLat = position.coords.latitude;
                const userLng = position.coords.longitude;

                let minDistance = Infinity;
                let nearestHospital = null;

                hospitals.forEach(h => {
                    const dist = calculateDistance(userLat, userLng, h.lat, h.lng);
                    if (dist < minDistance) {
                        minDistance = dist;
                        nearestHospital = { ...h, distance: dist.toFixed(1) };
                    }
                });

                setNearest(nearestHospital);
                setLoading(false);
            },
            () => {
                setError("Unable to retrieve your location");
                setLoading(false);
            }
        );
    };

    return (
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white">Emergency Locator</h3>
                    <p className="text-slate-500 text-sm font-medium">Find the closest Aurelius Hospital instantly</p>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-2xl text-blue-600 dark:text-blue-400">
                    <Navigation size={24} className={loading ? "animate-spin" : ""} />
                </div>
            </div>

            {!nearest && !error && (
                <button
                    onClick={findNearest}
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-2xl shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-3 active:scale-95"
                >
                    {loading ? <Loader2 className="animate-spin" /> : <MapPin size={20} />}
                    {loading ? "SEARCHING SATELLITES..." : "USE MY CURRENT LOCATION"}
                </button>
            )}

            {error && (
                <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 p-4 rounded-2xl text-red-600 dark:text-red-400 text-sm font-bold flex items-center gap-3">
                    <Activity size={18} />
                    {error}. Please select your city manually.
                </div>
            )}

            {nearest && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-slate-900 dark:bg-slate-950 p-6 rounded-[2rem] text-white border border-blue-500/30"
                >
                    <div className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-4">Closest facility found</div>
                    <div className="flex justify-between items-end">
                        <div>
                            <h4 className="text-3xl font-black mb-1">{nearest.name}</h4>
                            <p className="text-slate-400 font-bold mb-4">{nearest.city} • Approximately {nearest.distance} km away</p>
                            <div className="flex gap-3">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl text-xs font-black transition-all">
                                    GET DIRECTIONS
                                </button>
                                <button onClick={() => setNearest(null)} className="text-slate-400 hover:text-white text-xs font-bold transition-all">
                                    RESET
                                </button>
                            </div>
                        </div>
                        <div className="bg-white/5 p-4 rounded-3xl backdrop-blur-md">
                            <MapPin size={48} className="text-orange-500" />
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default HospitalFinder;
