import React from 'react';
import { GraduationCap, Award, Compass, MessageSquare, CheckCircle2, BookOpen } from 'lucide-react';

export default function About({ isDarkMode }) {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            About Anjli Rajput
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Driven by Passion, Precision & Communication
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Blending frontend technologies with strong linguistic clarity to create meaningful digital solutions.
          </p>
        </div>

        {/* Career Objective Banner */}
        <div className="p-8 sm:p-10 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0e1422] shadow-sm mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              <Compass className="w-4 h-4" />
              <span>Career Objective</span>
            </div>
            <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
              "Results-driven and dedicated professional with work experience, seeking a challenging position in a reputable organization where I can utilize my skills, experience, and knowledge to contribute to organizational success while continuously enhancing my professional growth."
            </p>
          </div>
        </div>

        {/* Education & Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Education Card */}
          <div className="p-8 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0e1422] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Education
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Bachelor of Arts (B.A.), English
              </h3>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                B S R DEGREE COLLEGE
              </p>
              <span className="inline-block text-xs text-slate-500 dark:text-slate-400 pt-1">
                Graduated: 2021 – 2024
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Equipped with deep analytical proficiency, critical thinking, and fluent spoken English proficiency, enabling smooth cross-functional collaboration and clear documentation.
            </p>
          </div>

          {/* Key Soft Skills & Professional Attributes */}
          <div className="p-8 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0e1422] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Professional Strengths
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Core Professional Competencies
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Skills developed through academic diligence and project execution
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-medium text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Problem Solving</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Attention to Detail</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Effective Communication</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Time Management</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Adaptability</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Collaboration</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
