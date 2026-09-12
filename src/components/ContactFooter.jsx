import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data';

export const ContactFooter = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative pt-20 pb-10 bg-[#070a12] border-t border-borderDark/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Contact Banner */}
        <motion.div 
          className="bg-gradient-to-r from-bgCard via-[#141d33] to-bgCard rounded-2xl p-8 sm:p-12 border border-borderDark text-center space-y-6 relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-accentCyan font-mono text-xs uppercase tracking-widest font-semibold">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-textPrimary">
              Let's Build Something <span className="text-accentCyan">Great Together</span>
            </h2>
            <p className="text-textMuted text-sm sm:text-base leading-relaxed">
              Seeking full-time roles and advanced internships. Whether you have a project idea, a position open, or just want to connect, my inbox is always open!
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-accentCyan to-accentIndigo text-bgDark font-bold rounded-xl shadow-lg shadow-accentCyan/25 transition-all flex items-center gap-2 text-sm focus-visible:ring-2 focus-visible:ring-accentCyan"
            >
              <Mail className="w-4 h-4" />
              Send Email
            </motion.a>

            <motion.button
              onClick={copyEmail}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-3 bg-bgDark hover:bg-bgCard text-textPrimary border border-borderDark hover:border-accentCyan/50 font-mono text-sm rounded-xl transition-all flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-accentCyan"
              aria-label="Copy email address"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-accentCyan" />}
              {copied ? "Copied to Clipboard!" : "Copy Email"}
            </motion.button>
          </div>
        </motion.div>

        {/* Contact Info Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 text-sm font-mono">
          <motion.div 
            whileHover={{ y: -3 }}
            className="flex items-center gap-3 p-4 rounded-xl bg-bgCard/60 border border-borderDark/60"
          >
            <MapPin className="w-5 h-5 text-accentCyan shrink-0" />
            <div>
              <span className="text-textMuted text-xs block">Location</span>
              <span className="text-textPrimary font-semibold">{personalInfo.location}</span>
            </div>
          </motion.div>

          <motion.a 
            href={`mailto:${personalInfo.email}`}
            whileHover={{ y: -3 }}
            className="flex items-center gap-3 p-4 rounded-xl bg-bgCard/60 border border-borderDark/60 hover:border-accentCyan/50 transition-colors"
          >
            <Mail className="w-5 h-5 text-accentCyan shrink-0" />
            <div className="overflow-hidden">
              <span className="text-textMuted text-xs block">Email</span>
              <span className="text-textPrimary font-semibold truncate block">{personalInfo.email}</span>
            </div>
          </motion.a>

          <motion.a 
            href={`tel:${personalInfo.phone}`}
            whileHover={{ y: -3 }}
            className="flex items-center gap-3 p-4 rounded-xl bg-bgCard/60 border border-borderDark/60 hover:border-accentCyan/50 transition-colors"
          >
            <Phone className="w-5 h-5 text-accentCyan shrink-0" />
            <div>
              <span className="text-textMuted text-xs block">Phone</span>
              <span className="text-textPrimary font-semibold">{personalInfo.phone}</span>
            </div>
          </motion.a>

          <div className="flex items-center justify-around p-4 rounded-xl bg-bgCard/60 border border-borderDark/60">
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ rotate: 12, scale: 1.15 }}
              className="flex items-center gap-1.5 text-textMuted hover:text-accentCyan transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </motion.a>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ rotate: -12, scale: 1.15 }}
              className="flex items-center gap-1.5 text-textMuted hover:text-accentCyan transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </motion.a>
          </div>
        </div>

        {/* Bottom bar & Back to Top */}
        <div className="pt-8 border-t border-borderDark/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-textMuted">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. Built with Vite, React, Tailwind & Framer Motion.
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 rounded-lg bg-bgCard hover:bg-bgCardHover text-textMuted hover:text-accentCyan border border-borderDark transition-colors flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-accentCyan"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>

      </div>
    </footer>
  );
};
