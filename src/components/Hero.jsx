import React from 'react';
import { ArrowRight, Mail, MapPin, Download, CheckCircle, ExternalLink, Code2, Globe } from 'lucide-react';

export default function Hero({ isDarkMode }) {
  return (
    <section id="hero" className="relative pt-32 pb-20 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Core Pitch */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status & Location Pill */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-xs font-medium text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Available for Roles
              </span>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                Alwar, Rajasthan, India
              </span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
                  Anjli Rajput
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                Frontend & WordPress Developer
              </p>
            </div>

            {/* Professional Summary */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Results-driven and dedicated professional with practical experience building custom WordPress themes & plugins, modern responsive web applications in React, and clean, accessible user interfaces.
            </p>

            {/* Direct Contact Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-slate-600 dark:text-slate-400">
              <a
                href="mailto:anjlirajput2404@gmail.com"
                className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-indigo-500" />
                <span>anjlirajput2404@gmail.com</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">•</span>
              <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                Alwar, India
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm transition-all flex items-center gap-2"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm border border-slate-300 dark:border-white/15 bg-white dark:bg-slate-900/60 text-slate-800 dark:text-slate-200 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all flex items-center gap-2"
              >
                <span>Contact Me</span>
              </a>
            </div>

          </div>

          {/* Right Column: Profile Overview Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md">
              <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0e1422] shadow-xl space-y-6">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-100 dark:border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg">
                      AR
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white">Anjli Rajput</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">SLT & Craftnex Tech Intern</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/40">
                    B.A. English
                  </span>
                </div>

                {/* Highlights list */}
                <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span>Created Figma UI designs & converted into responsive Bootstrap pages at SLT Pvt. Ltd.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span>Engineered offline-compatible web pages and multi-device layout optimizations</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span>Built 2 custom WordPress themes & custom plugins from scratch at Craftnex Technology</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span>Proficient in React, JavaScript, HTML5, CSS3, PHP, WordPress hooks, and Git</span>
                  </div>
                </div>

                {/* Featured Projects Mini Pills */}
                <div className="pt-4 border-t border-slate-100 dark:border-white/5 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Featured Deployments
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="https://jadoo-travel-landing-page.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/50 hover:border-indigo-500 transition-colors flex items-center justify-between group"
                    >
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Jadoo Travel</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                    </a>

                    <a
                      href="https://glacierm.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/50 hover:border-indigo-500 transition-colors flex items-center justify-between group"
                    >
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Glacier M.</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
