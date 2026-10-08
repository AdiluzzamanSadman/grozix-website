import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Full-Funnel SEO & Paid Media',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email) {
      setSent(true);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-b border-slate-200 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-semibold tracking-wider text-[#13617e] uppercase">
              Direct Engagement
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight font-heading">
              Let's Engineer Your Next Growth Phase.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Whether you need to recover lost organic traffic, dominate local search, gain citations across AI platforms, or scale high-ROAS paid ads, our senior strategists are ready to review your accounts.
            </p>

            <div className="pt-4 space-y-4 border-t border-slate-200">
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <span className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-[#13617e] text-xs font-mono font-bold">
                  @
                </span>
                <span>hello@grozix.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <span className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-[#13617e] text-xs font-mono font-bold">
                  TEL
                </span>
                <span>+1 (800) 476-9490 (Priority Client Desk)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <span className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-[#13617e] text-xs font-mono font-bold">
                  SLA
                </span>
                <span>Direct strategy response within 24 business hours</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
              <span className="text-slate-900 font-semibold block mb-1">Our Agency Principle:</span>
              No account managers passing tickets. You work directly with senior practitioners who audit, write code, build campaigns, and monitor attribution daily.
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            {sent ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">Direct Brief Received</h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you, {formState.name}. One of our senior strategists will review your project and follow up with direct availability.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-lg cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-slate-950 mb-2 font-heading">Book a Strategy Discovery Call</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#13617e] focus:ring-1 focus:ring-[#13617e]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Work Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#13617e] focus:ring-1 focus:ring-[#13617e]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Company / Clinic / Store Name</label>
                    <input
                      type="text"
                      placeholder="Apex Dental Studio"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#13617e] focus:ring-1 focus:ring-[#13617e]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Primary Objective</label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-[#13617e] focus:ring-1 focus:ring-[#13617e]"
                    >
                      <option value="Full-Funnel SEO & Paid Media">Full-Funnel SEO & Paid Media</option>
                      <option value="AI SEO & Generative Engine Optimization">AI SEO & Generative Engine Optimization (GEO)</option>
                      <option value="Local SEO & Google Maps Dominance">Local SEO & Google Maps Dominance</option>
                      <option value="Google Ads Management & Scaling">Google Ads Management & Scaling</option>
                      <option value="Meta Ads (FB/IG) High-ROAS Scaling">Meta Ads (FB/IG) High-ROAS Scaling</option>
                      <option value="Account Audit & Leak Fixes">Account Audit & Leak Fixes</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Overview of Current Challenge</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your current channels, target ROI, or specific search keywords..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#13617e] focus:ring-1 focus:ring-[#13617e]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#13617e] hover:bg-[#0f4f66] rounded-lg transition-all shadow-md shadow-[#13617e]/20 cursor-pointer"
                  >
                    Schedule Direct Strategy Session
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
