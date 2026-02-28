import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import DoctorProfile from './pages/DoctorProfile';
import About from './pages/About';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import Treatments from './pages/Treatments';
import Hospitals from './pages/Hospitals';
import HealthLibrary from './pages/HealthLibrary';
import PageDetail from './pages/PageDetail';
import LabTests from './pages/LabTests';
import PatientDashboard from './pages/PatientDashboard';
import Pharmacy from './pages/Pharmacy';
import EmployeeDashboard from './pages/EmployeeDashboard';
import Login from './pages/Login';
import { ThemeProvider } from './context/ThemeContext';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

import { AnimatePresence, motion } from 'framer-motion';

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

function App() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans transition-colors duration-300">
        <ScrollToTop />
        <Header />
        <main>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/doctors" element={<PageTransition><Doctors /></PageTransition>} />
              <Route path="/doctor/:id" element={<PageTransition><DoctorProfile /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/hospitals" element={<PageTransition><Hospitals /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              <Route path="/appointment" element={<PageTransition><Appointment /></PageTransition>} />
              <Route path="/treatments" element={<PageTransition><Treatments /></PageTransition>} />
              <Route path="/health-library" element={<PageTransition><HealthLibrary /></PageTransition>} />
              <Route path="/lab-tests" element={<PageTransition><LabTests /></PageTransition>} />
              <Route path="/dashboard" element={<PageTransition><PatientDashboard /></PageTransition>} />
              <Route path="/pharmacy" element={<PageTransition><Pharmacy /></PageTransition>} />
              <Route path="/staff" element={<PageTransition><EmployeeDashboard /></PageTransition>} />
              <Route path="/login" element={<PageTransition><Login /></PageTransition>} />

              {/* Flexible Detail Pages (Catch-all) */}
              <Route path="*" element={<PageTransition><PageDetail /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <ChatAssistant />
      </div>
    </ThemeProvider>
  );
}

export default App;
