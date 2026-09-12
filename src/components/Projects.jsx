import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Calendar, Layers, Sparkles, Filter } from 'lucide-react';
import { projectsData } from '../data';

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Full-Stack Web', 'Web App', 'Desktop App', 'AI / Hardware SSIP'];

  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 border-b border-borderDark/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header & Filter Controls */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="space-y-2">
            <div className="text-accentCyan font-mono text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> 04. Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-textPrimary">
              Featured <span className="text-accentCyan">Projects</span>
            </h2>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-bgCard p-1.5 rounded-xl border border-borderDark text-xs font-mono">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  selectedCategory === cat
                    ? 'bg-accentCyan text-bgDark font-bold shadow-md shadow-accentCyan/20'
                    : 'text-textMuted hover:text-textPrimary hover:bg-bgCardHover'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Animated Projects Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="bg-bgCard rounded-xl p-6 border border-borderDark flex flex-col justify-between group hover:border-accentCyan/50 hover:shadow-xl hover:shadow-accentCyan/10 transition-all duration-300 relative overflow-hidden"
              >
                {/* Top Glowing Accent Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accentCyan to-accentIndigo opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-4">
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-md bg-accentIndigo/10 text-accentIndigo border border-accentIndigo/20 flex items-center gap-1 font-semibold">
                      {project.date.includes("SSIP") ? <Sparkles className="w-3 h-3 text-accentCyan" /> : <Layers className="w-3 h-3" />}
                      {project.category}
                    </span>
                    <span className="text-textMuted flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {project.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-bold text-textPrimary group-hover:text-accentCyan transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-textMuted text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech tags & Links */}
                <div className="mt-6 pt-4 border-t border-borderDark/60 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-bgDark text-textMuted border border-borderDark group-hover:border-accentCyan/20 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-textMuted hover:text-accentCyan transition-colors focus-visible:ring-1 focus-visible:ring-accentCyan rounded"
                      aria-label={`View code repository for ${project.title}`}
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </a>
                    <ExternalLink className="w-4 h-4 text-textMuted group-hover:text-accentCyan transition-colors" />
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
