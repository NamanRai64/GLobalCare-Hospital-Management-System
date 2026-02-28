import React, { useState } from 'react';
import { Search, ChevronRight, BookOpen, Activity, AlertCircle } from 'lucide-react';

const diseases = [
    {
        id: 1,
        name: "Coronary Artery Disease",
        category: "Cardiology",
        symptoms: ["Chest pain (Angina)", "Shortness of breath", "Fatigue", "Heart palpitations"],
        description: "Coronary artery disease (CAD) is the most common type of heart disease. It happens when the arteries that supply blood to heart muscle become hardened and narrowed.",
        treatment: "Lifestyle changes, medications, angioplasty, or bypass surgery.",
        prevention: "Quit smoking, eat healthy, exercise regularly, maintain a healthy weight."
    },
    {
        id: 2,
        name: "Type 2 Diabetes",
        category: "Endocrinology",
        symptoms: ["Increased thirst", "Frequent urination", "Increased hunger", "Fatigue", "Blurred vision"],
        description: "Type 2 diabetes is a chronic condition that affects the way the body processes blood sugar (glucose).",
        treatment: "Diet, exercise, medication, and insulin therapy.",
        prevention: "Healthy eating and regular physical activity."
    },
    {
        id: 3,
        name: "Hypertension (High Blood Pressure)",
        category: "Cardiology",
        symptoms: ["Headaches", "Shortness of breath", "Nosebleeds (rare)", "Often no symptoms"],
        description: "A condition in which the force of the blood against the artery walls is too high.",
        treatment: "Eating a healthier diet with less salt, exercising regularly, and taking medications.",
        prevention: "Limit alcohol, reduce stress, maintain healthy weight."
    },
    {
        id: 4,
        name: "Migraine",
        category: "Neurology",
        symptoms: ["Severe throbbing pain", "Sensitivity to light/sound", "Nausea", "Visual aura"],
        description: "A headache of varying intensity, often accompanied by nausea and sensitivity to light and sound.",
        treatment: "Pain relievers, preventive medications, and lifestyle adjustments.",
        prevention: "Avoid triggers, maintain regular sleep schedule, manage stress."
    },
    {
        id: 5,
        name: "Osteoarthritis",
        category: "Orthopedics",
        symptoms: ["Joint pain", "Stiffness", "Tenderness", "Loss of flexibility"],
        description: "The most common form of arthritis, affecting millions of people worldwide. It occurs when the protective cartilage that cushions the ends of your bones wears down over time.",
        treatment: "Medications, physical therapy, and sometimes surgery.",
        prevention: "Exercise, weight control, avoiding injury."
    },
    {
        id: 6,
        name: "Asthma",
        category: "Pulmonology",
        symptoms: ["Shortness of breath", "Chest tightness or pain", "Wheezing when exhaling", "Coughing attacks"],
        description: "A condition in which your airways narrow and swell and may produce extra mucus.",
        treatment: "Inhalers (bronchodilators), steroids, and anti-inflammatory drugs.",
        prevention: "Avoid triggers (pollen, dust, smoke), get vaccinated."
    }
];

const categories = ["All", "Cardiology", "Endocrinology", "Neurology", "Orthopedics", "Pulmonology"];

const HealthLibrary = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredDiseases = diseases.filter(disease => {
        const matchesSearch = disease.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "All" || disease.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
            {/* Hero Section */}
            <div className="bg-blue-900 text-white py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-4 block">Patient Education</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Health Library</h1>
                    <p className="text-blue-200 max-w-2xl mx-auto text-lg mb-8">
                        Comprehensive information about conditions, treatments, and procedures to help you make informed decisions about your health.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto relative">
                        <input
                            type="text"
                            placeholder="Search for conditions, symptoms..."
                            className="w-full pl-12 pr-4 py-4 rounded-full text-slate-800 dark:text-slate-200 dark:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-blue-500/30 shadow-lg border-0"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
                {/* Sidebar Categories */}
                <div className="w-full lg:w-64 flex-shrink-0">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 sticky top-24 transition-colors">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <BookOpen size={20} className="text-orange-500" />
                            Categories
                        </h3>
                        <div className="space-y-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === cat ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="flex-1">
                    <div className="mb-6 flex justify-between items-center">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                            {filteredDiseases.length} Conditions Found
                        </h2>
                    </div>

                    <div className="grid gap-6">
                        {filteredDiseases.map((disease) => (
                            <div key={disease.id} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all group">
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wide">
                                                {disease.category}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {disease.name}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                                            {disease.description}
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                                            <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl">
                                                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2 flex items-center gap-2">
                                                    <AlertCircle size={16} className="text-orange-500" /> Symptoms
                                                </h4>
                                                <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
                                                    {disease.symptoms.slice(0, 3).map((sym, i) => (
                                                        <li key={i}>{sym}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl">
                                                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2 flex items-center gap-2">
                                                    <Activity size={16} className="text-green-500" /> Treatment
                                                </h4>
                                                <p className="text-sm text-slate-600 dark:text-slate-300">
                                                    {disease.treatment}
                                                </p>
                                            </div>
                                        </div>

                                        <button className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1 group/btn">
                                            Read Full Article <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {filteredDiseases.length === 0 && (
                            <div className="text-center py-20 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Search size={32} className="text-slate-400 dark:text-slate-500" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">No conditions found</h3>
                                <p className="text-slate-500 dark:text-slate-400">Try adjusting your search or category filter</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthLibrary;
