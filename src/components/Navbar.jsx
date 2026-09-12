import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, FileText, Download } from 'lucide-react';
import { personalInfo } from '../data';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-bgDark/80 backdrop-blur-xl border-b border-borderDark/60">
      <motion.div 
        className="h-[2.5px] bg-gradient-to-r from-accentCyan via-accentIndigo to-accentCyan origin-left"
        style={{ scaleX }}
      />

      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label="Main Navigation">
        <a 
          href="#hero" 
          className="flex items-center gap-2 text-xl font-display font-bold text-textPrimary hover:text-accentCyan transition-colors focus-visible:ring-2 focus-visible:ring-accentCyan rounded group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accentIndigo to-accentCyan flex items-center justify-center text-bgDark font-mono font-black text-sm shadow-md shadow-accentCyan/20 group-hover:scale-105 transition-transform">
            JB
          </div>
          <span className="tracking-tight">
            Jeetsingh<span className="text-accentCyan animate-pulse">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-5">
          <ul className="flex gap-5 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-textMuted hover:text-accentCyan transition-colors py-1 relative group focus-visible:ring-1 focus-visible:ring-accentCyan rounded"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accentCyan transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="h-4 w-px bg-borderDark" />

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-textMuted hover:text-accentCyan hover:bg-bgCard transition-all rounded-lg border border-transparent hover:border-borderDark"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-textMuted hover:text-accentCyan hover:bg-bgCard transition-all rounded-lg border border-transparent hover:border-borderDark"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            
            {/* Resume Download CTA */}
            <motion.a
              href={personalInfo.resumeUrl}
              download="Jeetsingh_Bhadauria_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-1 px-3 py-1.5 bg-gradient-to-r from-accentCyan to-accentIndigo text-bgDark text-xs font-mono font-bold rounded-lg shadow-md shadow-accentCyan/20 transition-all flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" /> Resume
            </motion.a>
          </div>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-textMuted hover:text-textPrimary focus-visible:ring-2 focus-visible:ring-accentCyan rounded-md"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-bgCard border-b border-borderDark px-4 py-4 space-y-3">
          <ul className="space-y-2 text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-textMuted hover:text-accentCyan transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-borderDark space-y-3">
            <a
              href={personalInfo.resumeUrl}
              download="Jeetsingh_Bhadauria_Resume.pdf"
              className="w-full py-2.5 bg-gradient-to-r from-accentCyan to-accentIndigo text-bgDark font-bold text-sm rounded-lg flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" /> Download Resume (PDF)
            </a>
            <div className="flex items-center justify-around text-sm pt-1">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-textMuted hover:text-accentCyan">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-textMuted hover:text-accentCyan">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
