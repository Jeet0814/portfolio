import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutEducation } from './components/AboutEducation';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { CertificationsExtra } from './components/CertificationsExtra';
import { ContactFooter } from './components/ContactFooter';

export function App() {
  return (
    <div className="min-h-screen bg-bgDark text-textPrimary font-sans selection:bg-accentCyan selection:text-bgDark">
      <Navbar />
      <main id="main-content">
        <Hero />
        <AboutEducation />
        <Skills />
        <Experience />
        <Projects />
        <CertificationsExtra />
      </main>
      <ContactFooter />
    </div>
  );
}

export default App;

