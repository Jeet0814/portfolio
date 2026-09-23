import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ArrowUpRight, CheckCircle2, FileCode, Download, Sparkles } from 'lucide-react';
import { personalInfo } from '../data';

export const Hero = () => {
  const [activeTab, setActiveTab] = useState('developer.ts');

  const tabContents = {
    'developer.ts': `const developer = {
  name: 'Jeetsingh Bhadauria',
  location: 'Navsari, Gujarat',
  currentRole: 'PHP Laravel Developer Intern @ Arth Technology',
  education: 'B.Tech CSE @ ITM SLS Baroda (CPI 9.03)',
  skills: ['PHP', 'Laravel', 'MySQL', 'React', 'Salesforce']
};`,
    'skills.json': `{
  "currentStack": ["PHP", "Laravel", "MySQL"],
  "core": ["Web Development", "Salesforce", "WordPress"],
  "soft": ["Communication", "Public Speaking", "Team Collaboration"]
}`,
    'contact.sh': `curl -X POST https://jeetsingh.dev/contact \\
  -d '{"email": "${personalInfo.email}"}' \\
  -d '{"phone": "${personalInfo.phone}"}'
# Status: 200 OK — Open for Opportunities!`
  };

  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const textToType = tabContents[activeTab];
    setDisplayedText('');
    const timer = setInterval(() => {
      if (index <= textToType.length) {
        setDisplayedText(textToType.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 15);
    return () => clearInterval(timer);
  }, [activeTab]);

  const metrics = [
    { label: "B.Tech CPI", value: "9.03", sub: "ITM SLS Baroda" },
    { label: "Diploma CGPA", value: "8.96", sub: "GTU Baroda" },
    { label: "Projects Built", value: "5+", sub: "Full-Stack & SSIP" },
    { label: "Internships", value: "3", sub: "Arth Tech, Ek Pehel, Techfusion" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="hero" className="relative py-16 sm:py-24 border-b border-borderDark/50 overflow-hidden bg-grid-pattern">
      <motion.div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accentCyan/10 blur-[130px] rounded-full pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="lg:col-span-7 space-y-6" variants={itemVariants}>
            <motion.div 
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium shadow-sm"
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              PHP Laravel Developer Intern @ Arth Technology
            </motion.div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-textPrimary tracking-tight">
                Hi, I'm <span className="animate-shimmer">{personalInfo.name}</span>
              </h1>
              <p className="text-lg sm:text-xl text-textMuted font-medium leading-relaxed max-w-2xl">
                {personalInfo.tagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-xs font-mono text-textMuted pt-1">
              <span className="flex items-center gap-1.5 bg-bgCard px-3 py-1.5 rounded-md border border-borderDark shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-accentCyan" />
                {personalInfo.location}
              </span>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="flex items-center gap-1.5 bg-bgCard px-3 py-1.5 rounded-md border border-borderDark hover:border-accentCyan text-textMuted hover:text-accentCyan transition-colors shadow-sm"
              >
                <Mail className="w-3.5 h-3.5 text-accentCyan" />
                {personalInfo.email}
              </a>
              <a 
                href={`tel:${personalInfo.phone}`} 
                className="flex items-center gap-1.5 bg-bgCard px-3 py-1.5 rounded-md border border-borderDark hover:border-accentCyan text-textMuted hover:text-accentCyan transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-accentCyan" />
                {personalInfo.phone}
              </a>
            </div>

            {/* CTA Group with Resume Download */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <motion.a
                href={personalInfo.resumeUrl}
                download="Jeetsingh_Bhadauria_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-accentCyan to-accentIndigo text-bgDark font-bold rounded-xl shadow-lg shadow-accentCyan/20 hover:shadow-accentCyan/35 transition-all flex items-center gap-2 text-sm focus-visible:ring-2 focus-visible:ring-accentCyan"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 bg-bgCard hover:bg-bgCardHover text-textPrimary border border-borderDark hover:border-accentCyan/50 font-semibold rounded-xl transition-all flex items-center gap-2 text-sm focus-visible:ring-2 focus-visible:ring-accentCyan"
              >
                View Projects
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 bg-bgCard hover:bg-bgCardHover text-textMuted hover:text-textPrimary border border-borderDark hover:border-accentCyan/50 font-semibold rounded-xl transition-all text-sm"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-5" variants={itemVariants}>
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-bgCard/90 backdrop-blur-md rounded-xl border border-borderDark shadow-2xl overflow-hidden font-mono text-xs hover:border-accentCyan/50 transition-colors"
            >
              <div className="bg-[#070a12] px-4 py-2 border-b border-borderDark flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-1">
                  {Object.keys(tabContents).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-2.5 py-1 rounded text-[11px] flex items-center gap-1 transition-all ${
                        activeTab === tab 
                          ? 'bg-bgCard text-accentCyan border border-borderDark font-semibold shadow-sm' 
                          : 'text-textMuted hover:text-textPrimary'
                      }`}
                    >
                      <FileCode className="w-3 h-3" />
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 sm:p-5 text-textPrimary/90 space-y-1 min-h-[220px] bg-[#050811] leading-relaxed overflow-x-auto">
                <pre className="text-accentCyan/90">
                  <code>{displayedText}</code>
                  <span className="inline-block w-2 h-4 bg-accentCyan ml-1 animate-pulse align-middle" />
                </pre>
              </div>

              <div className="px-4 py-2 bg-[#070a12] border-t border-borderDark/60 flex items-center justify-between text-[11px] text-textMuted">
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Active @ Arth Technology
                </span>
                <span className="text-accentIndigo">PHP / Laravel</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, duration: 0.5 } }
          }}
        >
          {metrics.map((m) => (
            <motion.div 
              key={m.label} 
              whileHover={{ scale: 1.04, borderColor: 'rgba(0, 240, 255, 0.4)' }}
              className="bg-bgCard/60 border border-borderDark rounded-xl p-4 text-center space-y-1 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-accentCyan">
                {m.value}
              </div>
              <div className="text-xs font-semibold text-textPrimary">{m.label}</div>
              <div className="text-[11px] font-mono text-textMuted">{m.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
