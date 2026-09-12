import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, MessageSquare, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import { skillsData } from '../data';

export const Skills = () => {
  const categories = [
    {
      title: "Technical & Core Development",
      icon: Code,
      accent: "from-cyan-500 to-blue-600",
      skills: skillsData.technical,
      badge: "Core Stack"
    },
    {
      title: "Professional & Execution",
      icon: Users,
      accent: "from-indigo-500 to-purple-600",
      skills: skillsData.professional,
      badge: "Management"
    },
    {
      title: "Soft Skills & Leadership",
      icon: MessageSquare,
      accent: "from-blue-500 to-teal-500",
      skills: skillsData.soft,
      badge: "Interpersonal"
    }
  ];

  return (
    <section id="skills" className="py-20 border-b border-borderDark/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <motion.div 
          className="space-y-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="text-accentCyan font-mono text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5" /> 02. Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-textPrimary">
            Technical & Interpersonal <span className="text-accentCyan">Skills</span>
          </h2>
        </motion.div>

        {/* Grouped Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <motion.div
                key={cat.title}
                className="bg-bgCard rounded-xl p-6 border border-borderDark hover:border-accentCyan/50 hover:shadow-lg hover:shadow-accentCyan/5 transition-all duration-300 flex flex-col justify-between group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4 }}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${cat.accent} text-bgDark font-bold shadow-md shadow-accentCyan/10 group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-display font-semibold text-textPrimary">
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {cat.skills.map((skill) => (
                      <li 
                        key={skill} 
                        className="flex items-center justify-between p-2 rounded-lg bg-bgDark/60 border border-borderDark/60 group-hover:border-borderHighlight transition-colors"
                      >
                        <span className="flex items-center gap-2 text-sm text-textMuted group-hover:text-textPrimary transition-colors">
                          <CheckCircle2 className="w-4 h-4 text-accentCyan shrink-0" />
                          <span>{skill}</span>
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-accentCyan/80 animate-pulse" />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-borderDark/60 flex items-center justify-between text-xs font-mono text-textMuted">
                  <span>{cat.badge}</span>
                  <span className="text-accentCyan font-medium">{cat.skills.length} Competencies</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
