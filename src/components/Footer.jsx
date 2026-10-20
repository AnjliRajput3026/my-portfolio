import React from 'react';
import { ArrowUp, Mail, MapPin, Globe } from 'lucide-react';

export default function Footer({ isDarkMode }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#070b12] text-slate-600 dark:text-slate-400 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
              AR
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white block text-sm">
                Anjli Rajput
              </span>
              <span className="text-xs text-slate-500">
                Frontend & WordPress Developer • Alwar, India
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold">
            <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Skills
            </a>
            <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Contact Details & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:anjlirajput2404@gmail.com"
              className="p-2 rounded-lg border border-slate-200 dark:border-white/10 hover:border-indigo-500 text-slate-700 dark:text-slate-300 transition-colors"
              title="Email Anjli"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 mt-8 border-t border-slate-100 dark:border-white/5 text-center text-xs text-slate-500 dark:text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} Anjli Rajput. All rights reserved.</span>
          <span>Crafted with React, Tailwind CSS & Vite</span>
        </div>
      </div>
    </footer>
  );
}
