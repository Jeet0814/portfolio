import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, Building2, UserCheck } from 'lucide-react';
import { personalInfo } from '../data';

export const AboutEducation = () => {
  return (
    <section id="about" className="py-20 border-b border-borderDark/50">
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
            01. Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-textPrimary">
            About & <span className="text-accentCyan">Education</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* About Summary Box */}
          <motion.div 
            className="lg:col-span-6 bg-bgCard rounded-xl p-6 sm:p-8 border border-borderDark space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 text-accentCyan">
              <UserCheck className="w-6 h-6" />
              <h3 className="text-xl font-display font-semibold text-textPrimary">Profile Overview</h3>
            </div>
            
            <p className="text-textMuted leading-relaxed text-sm sm:text-base">
              I am a detail-oriented Computer Science & Engineering student currently based in <strong className="text-textPrimary">Navsari, Gujarat</strong>. 
              My technical journey is anchored in strong foundations across <strong className="text-textPrimary">Salesforce administration/development</strong> and <strong className="text-textPrimary">full-stack web development</strong>.
            </p>

            <p className="text-textMuted leading-relaxed text-sm sm:text-base">
              With a high academic standing (<strong className="text-accentCyan">9.03 CPI in B.Tech</strong> & <strong className="text-accentCyan">8.96 CGPA in Diploma</strong>), 
              I combine analytical rigor with practical execution across modern web technologies, database management, and cloud ecosystems. I am actively seeking full-time roles and advanced internships.
            </p>

            <div className="pt-2 border-t border-borderDark/60 grid grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <span className="text-textMuted block">Current Status:</span>
                <span className="text-textPrimary font-semibold">B.Tech 7th Sem CSE</span>
              </div>
              <div>
                <span className="text-textMuted block">Location:</span>
                <span className="text-textPrimary font-semibold">Navsari, Gujarat</span>
              </div>
            </div>
          </motion.div>

          {/* Education Timeline Cards */}
          <motion.div 
            className="lg:col-span-6 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 text-accentCyan mb-2">
              <GraduationCap className="w-6 h-6" />
              <h3 className="text-xl font-display font-semibold text-textPrimary">Academic History</h3>
            </div>

            {personalInfo.education.map((edu, idx) => (
              <div 
                key={idx}
                className="bg-bgCard p-5 sm:p-6 rounded-xl border border-borderDark hover:border-accentCyan/40 transition-all space-y-2 relative group"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-accentCyan/10 text-accentCyan border border-accentCyan/20">
                    {edu.score}
                  </span>
                  <span className="text-xs font-mono text-textMuted flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                </div>

                <h4 className="text-lg font-display font-bold text-textPrimary group-hover:text-accentCyan transition-colors">
                  {edu.degree}
                </h4>

                <p className="text-sm text-textMuted flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-accentIndigo shrink-0" />
                  {edu.institution}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

