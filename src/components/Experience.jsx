import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building, ChevronRight } from 'lucide-react';
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
                className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-bgDark border-2 border-accentCyan shadow-sm shadow-accentCyan/50"
                whileHover={{ scale: 1.4 }}
                transition={{ duration: 0.2 }}
              />

              <motion.div 
                whileHover={{ x: 6, borderColor: 'rgba(0, 240, 255, 0.4)' }}
                className="bg-bgCard rounded-xl p-6 sm:p-7 border border-borderDark transition-all space-y-3 shadow-md"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-accentCyan/10 text-accentCyan border border-accentCyan/20 flex items-center gap-1.5 font-semibold">
                    <Briefcase className="w-3.5 h-3.5" />
                    {exp.role}
                  </span>
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

                <div>
                  <h3 className="text-xl font-display font-bold text-textPrimary flex items-center gap-2 group-hover:text-accentCyan transition-colors">
                    <Building className="w-5 h-5 text-accentIndigo shrink-0" />
                    {exp.company}
                  </h3>
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
