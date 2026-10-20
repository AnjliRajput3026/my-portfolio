import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Figma, Layout, Code2, WifiOff } from 'lucide-react';

const EXPERIENCES = [
  {
    role: 'Web Designer Intern',
    type: 'Internship',
    company: 'Success Ladder Technologies (SLT) Pvt. Ltd.',
    location: 'Alwar, Rajasthan, India',
    period: 'Feb 2026 – May 2026',
    description: 'Specialized in UI design translation, responsive front-end engineering, and offline web architecture.',
    responsibilities: [
      'Created intuitive and modern website UI designs using Figma.',
      'Converted Figma wireframes and prototypes into responsive web pages using HTML, CSS, JavaScript, and Bootstrap.',
      'Optimized layout structures for seamless viewing across desktop, tablet, and mobile devices.',
      'Developed offline-compatible web pages designed to run reliably without an internet connection.',
      'Iterated on website styling, layout responsiveness, and overall user interface enhancements.',
    ],
    tech: ['Figma', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Offline Web', 'Responsive UI']
  },
  {
    role: 'WordPress Development Intern',
    type: 'Internship',
    company: 'Craftnex Technology Private Limited',
    location: 'Virtual / Remote',
    period: 'Dec 2025 – Jan 2026',
    description: 'Engineered custom WordPress themes and plugins with reusable architecture and PHP hook customizations.',
    responsibilities: [
      'Built 2 custom WordPress themes from scratch with clean UI and modular, reusable components.',
      'Developed a custom WordPress plugin with dedicated custom pages and admin submenu integration.',
      'Designed complete page layouts and implemented pixel-perfect responsive design across all viewports.',
      'Customized advanced functionality leveraging HTML, CSS, JavaScript, PHP, and WordPress action/filter hooks.',
    ],
    tech: ['WordPress', 'PHP', 'WordPress Hooks', 'Theme Development', 'Plugin Development', 'Responsive Design']
  }
];

export default function Experience({ isDarkMode }) {
  return (
    <section id="experience" className="py-20 relative bg-slate-50/50 dark:bg-[#0a0f1a]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Work Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Practical Industry & Internship Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Hands-on professional experience spanning web design, Figma-to-code implementation, and WordPress engineering.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.role}
              className="p-8 sm:p-10 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0e1422] shadow-sm space-y-6"
            >
              {/* Top Meta */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-white/5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      {exp.type}
                    </span>
                    <span className="text-slate-300 dark:text-slate-700">•</span>
                    <span className="text-xs text-slate-500 font-medium">
                      {exp.location}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="text-base font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex items-center text-xs font-semibold text-slate-700 dark:text-slate-300 gap-1.5 self-start sm:self-center px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5">
                  <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3 pt-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Responsibilities & Contributions:
                </h4>

                <div className="space-y-2.5">
                  {exp.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Badges */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg text-xs font-medium border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
