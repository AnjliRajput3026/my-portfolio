import React from 'react';
import { Code2, Layout, Database, Wrench, MessageSquare, CheckCircle } from 'lucide-react';

const SKILL_SECTIONS = [
  {
    title: 'Frontend Development',
    icon: Code2,
    skills: [
      { name: 'HTML5', level: 'Expert', desc: 'Semantic markup, accessibility, modern standards' },
      { name: 'CSS3', level: 'Advanced', desc: 'Flexbox, Grid, Custom Properties, Media Queries' },
      { name: 'JavaScript', level: 'Proficient', desc: 'ES6+, DOM manipulation, async/await, APIs' },
      { name: 'React', level: 'Proficient', desc: 'Component architecture, Hooks, State management' },
      { name: 'Bootstrap', level: 'Advanced', desc: 'Rapid prototyping, grid systems, utilities' },
      { name: 'Responsive Design', level: 'Expert', desc: 'Mobile-first fluid layouts, cross-browser compatibility' },
    ]
  },
  {
    title: 'WordPress & Backend',
    icon: Layout,
    skills: [
      { name: 'WordPress', level: 'Advanced', desc: 'Theme architecture, custom templates, site building' },
      { name: 'PHP', level: 'Proficient', desc: 'Template tags, custom functions, backend logic' },
      { name: 'WordPress Hooks', level: 'Proficient', desc: 'Action and filter hooks for custom plugin extension' },
      { name: 'Custom Plugin Development', level: 'Proficient', desc: 'Custom post types, admin submenus, settings' },
    ]
  },
  {
    title: 'Design & Developer Tools',
    icon: Wrench,
    skills: [
      { name: 'Figma', level: 'Proficient', desc: 'UI/UX design, wireframing, component inspection' },
      { name: 'Git', level: 'Proficient', desc: 'Version control, branching, clean commits' },
      { name: 'GitHub', level: 'Proficient', desc: 'Repository management, collaboration, open-source' },
      { name: 'VS Code', level: 'Expert', desc: 'Extensions, debugging, modern development workflow' },
    ]
  },
  {
    title: 'Professional Competencies',
    icon: MessageSquare,
    skills: [
      { name: 'English Proficiency (Spoken)', level: 'Fluent', desc: 'B.A. English graduate with strong verbal expression' },
      { name: 'Effective Communication', level: 'Expert', desc: 'Clear documentation, stakeholder updates, teamwork' },
      { name: 'Problem Solving', level: 'Advanced', desc: 'Debugging layout issues, logic resolution' },
      { name: 'Attention to Detail', level: 'High', desc: 'Pixel-perfect UI fidelity, clean indentation' },
      { name: 'Time Management', level: 'High', desc: 'Meeting project deadlines, sprint organization' },
      { name: 'Adaptability & Collaboration', level: 'High', desc: 'Thriving in virtual teams and agile cycles' },
    ]
  }
];

export default function Skills({ isDarkMode }) {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Skills & Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Technical Stack & Toolset
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Curated skills verified through academic coursework, internships, and production projects.
          </p>
        </div>

        {/* 4 Clean Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_SECTIONS.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.title}
                className="p-8 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0e1422] shadow-sm space-y-6"
              >
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-white/5">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                      {section.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {section.skills.length} core competencies
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {section.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-bold text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 border border-slate-200 dark:border-white/5">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
