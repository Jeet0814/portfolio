import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building, ChevronRight, Sparkles } from 'lucide-react';
import { experienceData } from '../data';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 border-b border-borderDark/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="space-y-2 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="text-accentCyan font-mono text-xs uppercase tracking-widest font-semibold">
            03. Industry History
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-textPrimary">
            Professional <span className="text-accentCyan">Experience</span>
          </h2>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-borderDark ml-3 sm:ml-6 space-y-10 pl-6 sm:pl-8">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.company}
              className="relative group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
            >
              {/* Animated Marker Dot */}
              <motion.div 
                className={`absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-bgDark border-2 ${
                  exp.isCurrent ? 'border-emerald-400 shadow-emerald-400/50' : 'border-accentCyan shadow-accentCyan/50'
                } shadow-sm`}
                whileHover={{ scale: 1.4 }}
                transition={{ duration: 0.2 }}
              />

              <motion.div 
                whileHover={{ x: 6, borderColor: exp.isCurrent ? 'rgba(52, 211, 153, 0.4)' : 'rgba(0, 240, 255, 0.4)' }}
                className={`bg-bgCard rounded-xl p-6 sm:p-7 border ${
                  exp.isCurrent ? 'border-emerald-500/40 bg-gradient-to-br from-bgCard via-bgCard to-emerald-950/20' : 'border-borderDark'
                } transition-all space-y-4 shadow-md`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-accentCyan/10 text-accentCyan border border-accentCyan/20 flex items-center gap-1.5 font-semibold">
                      <Briefcase className="w-3.5 h-3.5" />
                      {exp.role}
                    </span>
                    {exp.isCurrent && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        Current Role
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-textMuted">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-accentCyan" />
                      {exp.period}
                    </span>
                    <span className="hidden sm:flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-accentCyan" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <h3 className="text-xl font-display font-bold text-textPrimary flex items-center gap-2 group-hover:text-accentCyan transition-colors">
                    <Building className="w-5 h-5 text-accentIndigo shrink-0" />
                    {exp.company}
                  </h3>

                  {exp.logo && (
                    <div className="px-3 py-1.5 rounded-lg bg-white/95 border border-white/20 shadow-sm flex items-center justify-center">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} Logo`} 
                        className="h-7 w-auto object-contain"
                      />
                    </div>
                  )}
                </div>

                <p className="text-textMuted text-sm sm:text-base leading-relaxed">
                  {exp.description}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs font-mono text-accentCyan font-medium">
                  <span>Web Engineering Internship</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
