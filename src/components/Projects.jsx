import React, { useState } from 'react';
import { ExternalLink, Eye, Plane, HeartPulse, Layers, CheckCircle2, Globe, ArrowRight } from 'lucide-react';

const PROJECTS = [
  {
    id: 'jadoo-travel',
    title: 'Jadoo — Travel Website',
    subtitle: 'Responsive Modern Travel Booking Landing Page',
    date: 'Oct 2026',
    liveUrl: 'https://jadoo-travel-landing-page.vercel.app/',
    category: 'React & Frontend',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design', 'Vercel'],
    desc: 'Jadoo Travel is a responsive and visually appealing travel landing page built using HTML, CSS, JavaScript, and React. It features a modern UI, attractive visuals, smooth interactions, and a user-friendly design to enhance the travel planning experience.',
    highlights: [
      'Built with clean modular React components and responsive styling',
      'Curated destination cards, flight booking call-to-actions, and service categories',
      'Optimized layout across mobile, tablet, and desktop viewports',
      'Smooth micro-interactions and high-converting lead capture form',
    ],
    icon: Plane,
  },
  {
    id: 'glacier-marothia',
    title: 'Glacier Marothia — Healthcare Portal',
    subtitle: 'Executive Healthcare Administration & Operations Portal',
    date: '2025 – 2026',
    liveUrl: 'https://glacierm.netlify.app/',
    category: 'Healthcare & Web Design',
    tags: ['Hospital Operations', 'OPD Management', 'Netlify', 'UI/UX', 'Responsive Design'],
    desc: 'A sophisticated executive portfolio and operational management showcase for Senior Healthcare Executive Glacier Marothia (HCG & Narayana Hospitals). Focuses on 10+ years of outpatient excellence and compassionate patient coordination.',
    highlights: [
      'Comprehensive OPD excellence and patient pathway breakdown',
      'Multi-specialty coordination metrics across oncology, cardiology, ENT, and ophthalmology',
      'Responsive executive presentation with seamless navigation',
      'Deployed on Netlify Edge with clean typography and fast load speeds',
    ],
    icon: HeartPulse,
  },
  {
    id: 'wordpress-craftnex',
    title: 'Custom WordPress Themes & Plugin Suite',
    subtitle: 'Craftnex Technology Internship Deliverables',
    date: 'Dec 2025 – Jan 2026',
    liveUrl: 'https://github.com',
    category: 'WordPress & PHP',
    tags: ['WordPress', 'PHP', 'Custom Plugins', 'Hooks', 'HTML/CSS', 'Bootstrap'],
    desc: 'Engineered 2 custom WordPress themes from scratch with reusable component hierarchies, alongside a custom WordPress plugin integrating custom post types, admin submenus, and official WordPress action/filter hooks.',
    highlights: [
      'Clean UI templates and reusable component structures',
      'Custom plugin development with admin submenu integration',
      'Tailored functionality leveraging WordPress action and filter hooks',
      'Full cross-browser and mobile-first responsive validation',
    ],
    icon: Layers,
  }
];

export default function Projects({ isDarkMode }) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [showIframePreview, setShowIframePreview] = useState(false);

  const activeProject = PROJECTS[activeProjectIndex];

  return (
    <section id="projects" className="py-20 relative bg-slate-50/50 dark:bg-[#0a0f1a]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Portfolio Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Featured Projects & Production Deployments
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Real projects demonstrating frontend proficiency, responsive design, and custom theme/plugin development.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {PROJECTS.map((proj, idx) => {
            const Icon = proj.icon;
            const isActive = activeProjectIndex === idx;
            return (
              <button
                key={proj.id}
                onClick={() => {
                  setActiveProjectIndex(idx);
                  setShowIframePreview(false);
                }}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border ${
                  isActive
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                    : 'bg-white dark:bg-[#0e1422] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-indigo-400'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{proj.title.split('—')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Project Showcase Container */}
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0e1422] shadow-sm overflow-hidden">
            
            {/* Top Bar with Live URL */}
            <div className="px-6 py-3.5 bg-slate-100/70 dark:bg-slate-900/60 border-b border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700 inline-block" />
                <span className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700 inline-block" />
                <span className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700 inline-block" />
                <span className="ml-2 font-mono text-xs text-slate-600 dark:text-slate-400">
                  {activeProject.liveUrl}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {activeProject.liveUrl.startsWith('http') && (
                  <button
                    onClick={() => setShowIframePreview(!showIframePreview)}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-indigo-500 transition-colors flex items-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{showIframePreview ? 'Show Card Details' : 'Live Preview in Page'}</span>
                  </button>
                )}

                {activeProject.liveUrl.startsWith('http') && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>Open Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Content Display: Live Iframe or Clean Structured Card */}
            {showIframePreview && activeProject.liveUrl.startsWith('http') ? (
              <div className="w-full h-[480px] bg-slate-950 relative">
                <iframe
                  src={activeProject.liveUrl}
                  title={activeProject.title}
                  className="w-full h-full border-0"
                  sandbox="allow-scripts allow-same-origin allow-forms"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="p-8 sm:p-10 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-white/5">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      {activeProject.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                      {activeProject.title}
                    </h3>
                    <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                      {activeProject.subtitle}
                    </p>
                  </div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 self-start sm:self-center">
                    {activeProject.date}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeProject.desc}
                </p>

                {/* Highlights List */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Project Deliverables:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg text-xs font-medium border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {activeProject.liveUrl.startsWith('http') && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                    >
                      <span>Visit Deployment</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
