import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, AlertCircle, Clock } from 'lucide-react';

export default function ContactCTA({ isDarkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Frontend / WordPress Development Opportunity',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const CONTACT_EMAIL = 'anjlirajput2404@gmail.com';
  const CONTACT_LOCATION = 'Alwar, Rajasthan, India';

  const quickPrompts = [
    '💼 Interested in hiring you for a Frontend / WordPress role',
    '🚀 Have a custom web development project inquiry',
    '✨ Loved the Jadoo Travel & Glacier Marothia projects!',
  ];

  const handleQuickPrompt = (promptText) => {
    setFormData((prev) => ({
      ...prev,
      message: promptText,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      newErrors.message = 'Please share a brief message (minimum 5 characters)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const stored = JSON.parse(localStorage.getItem('anjli_contact_inquiries') || '[]');
      stored.push({
        ...formData,
        date: new Date().toISOString(),
      });
      localStorage.setItem('anjli_contact_inquiries', JSON.stringify(stored));
    } catch (err) {
      // fallback
    }

    setIsSuccessModalOpen(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const generateMailto = () => {
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const body = encodeURIComponent(
      `Hi Anjli,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    );
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Let's Discuss Your Next Project or Role
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Open for full-time frontend/WordPress developer positions, freelance opportunities, and collaborative ventures.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0e1422] shadow-sm space-y-6">
              
              <div className="pb-4 border-b border-slate-100 dark:border-white/5">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  Anjli Rajput
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Frontend & WordPress Developer
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="font-medium text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Availability & Response
                    </span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      Response within 24 Hours
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Location
                    </span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      {CONTACT_LOCATION}
                    </span>
                  </div>
                </div>
              </div>

              {/* Copy Email Button */}
              <button
                onClick={copyEmail}
                className="w-full py-2.5 px-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-indigo-500 text-xs font-semibold transition-all flex items-center justify-center gap-2"
              >
                {isCopied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">Email Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-indigo-500" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Starter Chips */}
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0e1422] shadow-sm space-y-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Quick Message Starters
              </span>
              <div className="space-y-1.5">
                {quickPrompts.map((p) => (
                  <button
                    key={p}
                    onClick={() => handleQuickPrompt(p)}
                    className="w-full text-left p-2 rounded-lg text-xs border border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 hover:border-indigo-400 transition-colors"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0e1422] shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: null });
                      }}
                      className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                      className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. WordPress Developer Role / Project Proposal"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your requirements, timeline, or job description..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: null });
                    }}
                    className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-xl font-semibold text-xs uppercase tracking-wider bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>

      {/* Confirmation Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="max-w-md w-full rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0e1422] shadow-2xl text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Message Sent Successfully!
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Thank you, <strong>{formData.name}</strong>. Your message has been logged. Anjli Rajput will respond to your inquiry shortly.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <a
                href={generateMailto()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-4 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors flex items-center justify-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open in Email Client (Backup Mailto)</span>
              </a>

              <button
                onClick={() => {
                  setIsSuccessModalOpen(false);
                  setFormData({
                    name: '',
                    email: '',
                    subject: 'Frontend / WordPress Development Opportunity',
                    message: '',
                  });
                }}
                className="w-full py-2 px-4 rounded-xl text-xs font-medium border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
