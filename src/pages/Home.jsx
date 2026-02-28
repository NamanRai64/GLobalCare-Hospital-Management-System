import React from 'react';
import Hero from '../components/Hero';
import Specialties from '../components/Specialties';
import HealthChecks from '../components/HealthChecks';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';
import HospitalHighlights from '../components/HospitalHighlights';
import CommunityImpact from '../components/CommunityImpact';

const Home = () => {
    return (
        <div className="flex flex-col">
            <Hero />
            <HospitalHighlights />
            <Specialties />
            <CommunityImpact />
            <HealthChecks />
            <Services />
            <Testimonials />
        </div>
    );
};

export default Home;
