import React from 'react';
import Header from './components/Header';
import ViceBackground from './components/ViceBackground';
import Hero from './components/Hero';
import ArenaPillars from './components/ArenaPillars';
import StatsGrid from './components/StatsGrid';
import PastChapters from './components/PastChapters';
import HallOfFame from './components/HallOfFame';
import Tracks from './components/Tracks';
import Prizes from './components/Prizes';
import Schedule from './components/Schedule';
import Mentors from './components/Mentors';
import Patrons from './components/Patrons';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import ContactFooter from './components/ContactFooter';
import './styles/theme.css';

export default function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Animated Vice City Synthwave Canvas Background */}
      <ViceBackground />

      {/* Glass Navigation Header */}
      <Header />

      {/* Main Content Sections - Seamless Free-Flowing Layout */}
      <main>
        <Hero />
        <ArenaPillars />
        <StatsGrid />
        <PastChapters />
        <HallOfFame />
        <Tracks />
        <Prizes />
        <Schedule />
        <Mentors />
        <Patrons />
        <Sponsors />
        <FAQ />
      </main>

      {/* Footer & Discord Section */}
      <ContactFooter />
    </div>
  );
}
