
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    Bed,
    Package,
    CreditCard,
    Stethoscope,
    Activity,
    Calendar,
    Clipboard,
    AlertCircle,
    CheckCircle2,
    Search,
    Plus,
    Truck
} from 'lucide-react';
import { employees, icuUnits, inventory, payrollData, appointments, patients, medicalRecords } from '../data/hmsData';
import {
    FlaskConical,
    MapPin,
    ChevronRight,
    Clock
} from 'lucide-react';

const EmployeeDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [userRole, setUserRole] = useState('Doctor'); // Using Doctor for the specific task requirement
    const currentUserId = 1001; // Simulated ID for Dr. John Doe

    // Role-specific data filtering
    const myAppointments = appointments.filter(app => app.doctor_id === currentUserId);
    const myRecords = medicalRecords.filter(rec => rec.doctor_id === currentUserId);

    // Get patient names for filtered records
    const getPatientName = (pId) => {
        const p = patients.find(p => p.patient_id === pId);
        return p ? `${p.first_name} ${p.last_name}` : 'Unknown Patient';
    };

    const stats = [
        { label: 'Total Staff', value: employees.length, icon: Users, color: 'text-blue-600', roles: ['Admin', 'Nurse'] },
        { label: 'Occupied Beds', value: '12/45', icon: Bed, color: 'text-orange-600', roles: ['Admin', 'Nurse', 'Doctor'] },
        { label: 'Low Stock Items', value: 3, icon: Package, color: 'text-red-600', roles: ['Admin', 'Nurse'] },
        { label: 'Pending Appts', value: userRole === 'Doctor' ? myAppointments.length : 8, icon: Calendar, color: 'text-green-600', roles: ['Admin', 'Nurse', 'Doctor'] },
        { label: 'My Patients', value: myRecords.length, icon: Stethoscope, color: 'text-purple-600', roles: ['Doctor'] },
    ];

    const filteredStats = stats.filter(s => s.roles.includes(userRole));

    const renderOverview = () => (
        <div className="space-y-6">
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${filteredStats.length} gap-4`}>
                {filteredStats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-card p-6 rounded-2xl flex items-center space-x-4"
                    >
                        <div className={`p-3 rounded-xl bg-slate-100 dark:bg-slate-800 ${stat.color}`}>
                            <stat.icon size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
                            <p className="text-2xl font-bold">{stat.value}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="glass-card p-6 rounded-2xl">
                    <h3 className="text-lg font-bold mb-4 flex items-center">
                        <Activity className="mr-2 text-blue-600" size={20} />
                        Recent Alerts
                    </h3>
                    <div className="space-y-4">
                        {[
                            { msg: 'Low stock: Surgical Gloves', time: '10m ago', type: 'warning' },
                            { msg: 'Emergency Admission: Bed CICU-04', time: '25m ago', type: 'error' },
                            { msg: 'System Backup Completed', time: '1h ago', type: 'success' },
                        ].map((alert, i) => (
                            <div key={i} className="flex items-start space-x-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                                {alert.type === 'warning' && <AlertCircle className="text-orange-500 shrink-0" size={18} />}
                                {alert.type === 'error' && <AlertCircle className="text-red-500 shrink-0" size={18} />}
                                {alert.type === 'success' && <CheckCircle2 className="text-green-500 shrink-0" size={18} />}
                                <div className="flex-1">
                                    <p className="text-sm font-medium">{alert.msg}</p>
                                    <p className="text-xs text-slate-500">{alert.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-card p-6 rounded-2xl">
                    <h3 className="text-lg font-bold mb-4 flex items-center">
                        <Users className="mr-2 text-purple-600" size={20} />
                        Staff on Duty
                    </h3>
                    <div className="space-y-3">
                        {employees.slice(0, 4).map((emp, i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300">
                                        {emp.first_name[0]}{emp.last_name[0]}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold">{emp.first_name} {emp.last_name}</p>
                                        <p className="text-xs text-slate-500">{emp.role} - {emp.specialization || emp.designation || 'General'}</p>
                                    </div>
                                </div>
                                <span className="px-2 py-1 text-[10px] font-bold uppercase rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                    On Duty
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const renderBedManagement = () => (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Bed Management</h2>
                <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors">
                    <Plus size={20} />
                    <span>Assign Bed</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {icuUnits.map((unit) => (
                    <div key={unit.icu_id} className="glass-card p-6 rounded-2xl">
                        <h3 className="text-xl font-bold mb-4 flex items-center justify-between">
                            {unit.unit_name}
                            <span className="text-sm font-normal text-slate-500">{unit.beds.filter(b => b.status === 'Available').length} available</span>
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                            {unit.beds.map((bed) => (
                                <div
                                    key={bed.bed_id}
                                    className={`p-4 rounded-xl border-2 transition-all ${bed.status === 'Occupied'
                                        ? 'border-red-100 bg-red-50 dark:bg-red-900/10 dark:border-red-900/30'
                                        : bed.status === 'Cleaning'
                                            ? 'border-orange-100 bg-orange-50 dark:bg-orange-900/10 dark:border-orange-900/30'
                                            : 'border-green-100 bg-green-50 dark:bg-green-900/10 dark:border-green-900/30'
                                        }`}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <p className="font-bold">{bed.bed_number}</p>
                                        <Bed size={16} className={bed.status === 'Occupied' ? 'text-red-500' : 'text-green-500'} />
                                    </div>
                                    <p className="text-xs font-semibold uppercase tracking-wider mb-1 opacity-70">{bed.status}</p>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
                                        {bed.patient || 'Empty'}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderInventory = () => (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Pharmacy & Inventory</h2>
                <div className="flex space-x-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search items..."
                            className="pl-10 pr-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-4 py-2 rounded-xl">
                        Add Stock
                    </button>
                </div>
            </div>

            <div className="glass-card rounded-2xl overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 dark:bg-slate-800/50">
                        <tr>
                            <th className="px-6 py-4 text-sm font-bold">Item Name</th>
                            <th className="px-6 py-4 text-sm font-bold">Category</th>
                            <th className="px-6 py-4 text-sm font-bold">Quantity</th>
                            <th className="px-6 py-4 text-sm font-bold">Status</th>
                            <th className="px-6 py-4 text-sm font-bold">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {inventory.map((item) => (
                            <tr key={item.item_id}>
                                <td className="px-6 py-4">
                                    <p className="font-bold">{item.item_name}</p>
                                    <p className="text-xs text-slate-500">ID: PK-{item.item_id}2024</p>
                                </td>
                                <td className="px-6 py-4 text-sm">{item.category}</td>
                                <td className="px-6 py-4 font-mono text-sm">{item.quantity}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${item.quantity <= item.min_threshold
                                        ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                        : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                        }`}>
                                        {item.quantity <= item.min_threshold ? 'Low Stock' : 'Optimal'}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="text-blue-600 hover:underline text-sm font-bold">View History</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen pt-24 pb-12 px-6 lg:px-12 bg-slate-50 dark:bg-slate-950">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 space-y-4 md:space-y-0 text-slate-800 dark:text-slate-100">
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-tight">Staff Portal</h1>
                        <p className="text-slate-500 dark:text-slate-400">Welcome back, Aurelius Healthcare Professional</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex bg-slate-200 dark:bg-slate-800 p-1 rounded-xl">
                            {['Doctor', 'Nurse', 'Admin'].map((role) => (
                                <button
                                    key={role}
                                    onClick={() => setUserRole(role)}
                                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${userRole === role
                                        ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600'
                                        : 'text-slate-500 hover:text-slate-700'
                                        }`}
                                >
                                    {role}
                                </button>
                            ))}
                        </div>
                        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                            AM
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Navigation */}
                    <aside className="lg:w-64 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
                        {[
                            { id: 'overview', label: 'Overview', icon: Clipboard, roles: ['Admin', 'Nurse', 'Doctor'] },
                            { id: 'beds', label: 'Bed Management', icon: Bed, roles: ['Admin', 'Nurse'] },
                            { id: 'inventory', label: 'Inventory & Pharmacy', icon: Package, roles: ['Admin', 'Nurse'] },
                            { id: 'staff', label: 'Staff Directory', icon: Users, roles: ['Admin'] },
                            { id: 'payroll', label: 'Finance & Payroll', icon: CreditCard, roles: ['Admin'] },
                            { id: 'clinical', label: userRole === 'Doctor' ? 'My Patients' : 'Clinical Records', icon: Stethoscope, roles: ['Admin', 'Nurse', 'Doctor'] },
                            { id: 'appointments', label: 'My Schedule', icon: Calendar, roles: ['Doctor'] },
                            { id: 'emergency', label: 'Emergency & Triage', icon: Activity, roles: ['Admin', 'Nurse', 'Doctor'] },
                        ].filter(item => item.roles.includes(userRole)).map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`flex items-center space-x-3 px-4 py-3 rounded-xl whitespace-nowrap lg:whitespace-normal transition-all ${activeTab === item.id
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                                    }`}
                            >
                                <item.icon size={20} />
                                <span className="font-bold text-sm">{item.label}</span>
                            </button>
                        ))}
                    </aside>

                    {/* Main Content Area */}
                    <main className="flex-1 min-w-0 text-slate-800 dark:text-slate-100">
                        {activeTab === 'overview' && renderOverview()}
                        {activeTab === 'beds' && renderBedManagement()}
                        {activeTab === 'inventory' && renderInventory()}
                        {activeTab === 'emergency' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold">Emergency & AI Triage</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="glass-card p-6 rounded-2xl bg-red-50/30 dark:bg-red-900/10">
                                        <h3 className="font-bold mb-4 flex items-center text-red-600"><AlertCircle size={18} className="mr-2" /> Active Cases</h3>
                                        <div className="text-3xl font-black">5</div>
                                        <p className="text-xs opacity-70">3 Priority Level 1</p>
                                    </div>
                                    <div className="glass-card p-6 rounded-2xl">
                                        <h3 className="font-bold mb-4 flex items-center text-blue-600"><Truck size={18} className="mr-2" /> Ambulances</h3>
                                        <div className="text-3xl font-black">8/12</div>
                                        <p className="text-xs opacity-70">4 in Transit</p>
                                    </div>
                                    <div className="glass-card p-6 rounded-2xl">
                                        <h3 className="font-bold mb-4 flex items-center text-purple-600"><Activity size={18} className="mr-2" /> AI Triage Score</h3>
                                        <div className="text-3xl font-black">0.89</div>
                                        <p className="text-xs opacity-70">Accuracy Rating</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'staff' && (
                            <div className="glass-card p-8 rounded-2xl text-center">
                                <Users className="mx-auto mb-4 text-slate-400" size={48} />
                                <h3 className="text-xl font-bold">Staff Directory</h3>
                                <p className="text-slate-500">Detailed employee management coming soon...</p>
                            </div>
                        )}
                        {activeTab === 'payroll' && (
                            <div className="glass-card p-8 rounded-2xl text-center">
                                <CreditCard className="mx-auto mb-4 text-slate-400" size={48} />
                                <h3 className="text-xl font-bold">Payroll Management</h3>
                                <p className="text-slate-500">Financial records and payroll processing modules coming soon...</p>
                            </div>
                        )}
                        {activeTab === 'appointments' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold">Today's Schedule</h2>
                                <div className="space-y-4">
                                    {myAppointments.map((app) => (
                                        <div key={app.appointment_id} className="glass-card p-6 rounded-2xl flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600">
                                                    <Clock size={24} />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-lg">{getPatientName(app.patient_id)}</p>
                                                    <p className="text-sm text-slate-500">{app.time} • {app.date}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${app.status === 'Ongoing' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                                                    }`}>
                                                    {app.status}
                                                </span>
                                                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                                                    <ChevronRight size={20} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {activeTab === 'clinical' && (
                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-2xl font-bold">{userRole === 'Doctor' ? 'My Assigned Patients' : 'Clinical Records'}</h2>
                                    <div className="flex space-x-2">
                                        <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded-full text-xs font-bold flex items-center">
                                            Active Cases: {myRecords.length}
                                        </span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-6">
                                    {(userRole === 'Doctor' ? myRecords : medicalRecords).map((record, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="glass-card p-0 rounded-2xl overflow-hidden border-l-4 border-l-blue-500"
                                        >
                                            <div className="p-6">
                                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                                                    <div>
                                                        <p className="text-xs font-bold text-slate-500">CASE #{record.record_id}</p>
                                                        <h4 className="font-black text-2xl">{getPatientName(record.patient_id)}</h4>
                                                        <p className="text-blue-600 font-bold flex items-center mt-1">
                                                            <Stethoscope size={16} className="mr-1" /> {record.diagnosis}
                                                        </p>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2">
                                                        {record.admitted ? (
                                                            <div className="flex items-center px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl">
                                                                <MapPin size={16} className="mr-2" />
                                                                <div>
                                                                    <p className="text-[10px] font-bold uppercase leading-none">Admitted At</p>
                                                                    <p className="text-xs font-bold">{record.location}</p>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <span className="px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-xl text-xs font-bold">Outpatient</span>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                                    {/* Lab Results Section */}
                                                    <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl">
                                                        <h5 className="font-bold text-sm mb-4 flex items-center text-slate-400 uppercase tracking-widest">
                                                            <FlaskConical size={16} className="mr-2" /> Latest lab Results
                                                        </h5>
                                                        <div className="space-y-3">
                                                            {record.lab_results.map((lab, j) => (
                                                                <div key={j} className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                                                                    <div>
                                                                        <p className="text-sm font-bold">{lab.test}</p>
                                                                        <p className="text-[10px] text-slate-500">{lab.date}</p>
                                                                    </div>
                                                                    <div className="text-right">
                                                                        <p className="font-mono font-bold text-blue-600">{lab.result}</p>
                                                                        <span className={`text-[10px] font-bold uppercase ${lab.status === 'Normal' ? 'text-green-500' : 'text-red-500'
                                                                            }`}>{lab.status}</span>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-col justify-between">
                                                        <div className="space-y-4">
                                                            <h5 className="font-bold text-sm text-slate-400 uppercase tracking-widest">Prescribed Actions</h5>
                                                            <ul className="space-y-2">
                                                                <li className="flex items-center text-sm font-medium">
                                                                    <CheckCircle2 size={16} className="mr-2 text-blue-600" /> Monitor BP every 4 hours
                                                                </li>
                                                                <li className="flex items-center text-sm font-medium">
                                                                    <CheckCircle2 size={16} className="mr-2 text-blue-600" /> Start intravenous antibiotics
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <button className="mt-6 w-full py-4 bg-blue-600 text-white rounded-xl font-black text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
                                                            UPDATE MEDICAL FILE
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                                {userRole !== 'Doctor' && (
                                    <button className="w-full py-4 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl text-slate-400 font-bold hover:border-blue-500 hover:text-blue-500 transition-all">
                                        + Add New Clinical Entry
                                    </button>
                                )}
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDashboard;
