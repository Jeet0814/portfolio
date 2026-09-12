import React from 'react';
import { motion } from 'framer-motion';
import { Award, Sparkles, Cloud, Users, ShieldCheck, Trophy } from 'lucide-react';
import { certificationsData, extraCurricularData } from '../data';

export const CertificationsExtra = () => {
  return (
    <section id="certifications" className="py-20 border-b border-borderDark/50">
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
            05. Credentials & Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-textPrimary">
            Certifications & <span className="text-accentCyan">Activities</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Certifications Block */}
          <motion.div 
            className="lg:col-span-6 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2.5 text-accentCyan mb-2">
              <Award className="w-5 h-5" />
              <h3 className="text-xl font-display font-semibold text-textPrimary">Professional Certifications</h3>
            </div>

            <div className="space-y-4">
              {certificationsData.map((cert) => (
                <div 
                  key={cert.title}
                  className="bg-bgCard rounded-xl p-5 border border-borderDark hover:border-accentCyan/40 transition-all flex items-start gap-4"
                >
                  <div className="p-3 rounded-lg bg-accentCyan/10 text-accentCyan border border-accentCyan/20 shrink-0 mt-0.5">
                    {cert.icon === 'Sparkles' ? <Sparkles className="w-5 h-5" /> : <Cloud className="w-5 h-5" />}
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-accentIndigo bg-accentIndigo/10 border border-accentIndigo/20 px-2 py-0.5 rounded">
                      {cert.badge}
                    </span>
                    <h4 className="text-base font-display font-bold text-textPrimary pt-1">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-mono text-textMuted flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Issued by {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Extra-Curricular / Community Leadership Block */}
          <motion.div 
            className="lg:col-span-6 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2.5 text-accentCyan mb-2">
              <Trophy className="w-5 h-5" />
              <h3 className="text-xl font-display font-semibold text-textPrimary">Extra-Curricular & Community</h3>
            </div>

            <div className="space-y-4">
              {extraCurricularData.map((item) => (
                <div 
                  key={item.organization}
                  className="bg-bgCard rounded-xl p-5 border border-borderDark hover:border-accentCyan/40 transition-all space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-display font-bold text-textPrimary flex items-center gap-2">
                      <Users className="w-4 h-4 text-accentCyan shrink-0" />
                      {item.organization}
                    </h4>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-bgDark text-accentCyan border border-borderDark">
                      {item.role}
                    </span>
                  </div>
                  <p className="text-xs text-textMuted leading-relaxed pl-6">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

