import React, { useState } from 'react';
import { GrozixLogo } from './GrozixLogo';

interface AuditCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const AuditCalculatorModal: React.FC<AuditCalculatorModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [selectedChannels, setSelectedChannels] = useState<string[]>(
    initialService ? [initialService] : ['Core SEO Services', 'Google Ads']
  );
  const [industry, setIndustry] = useState<string>('Healthcare');
  const [websiteUrl, setWebsiteUrl] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [monthlySpend, setMonthlySpend] = useState<string>('$5,000 - $20,000 / mo');
  const [notes, setNotes] = useState<string>('');

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  if (!isOpen) return null;

  const toggleChannel = (channel: string) => {
    if (selectedChannels.includes(channel)) {
      if (selectedChannels.length > 1) {
        setSelectedChannels(selectedChannels.filter((c) => c !== channel));
      }
    } else {
      setSelectedChannels([...selectedChannels, channel]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!websiteUrl.trim()) {
      setErrorMsg('Please enter your website or brand URL.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid work email.');
      return;
    }
    if (!name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="audit-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden text-slate-900">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <GrozixLogo size="sm" showText={false} />
            <div>
              <h3 id="audit-modal-title" className="text-base font-bold text-slate-950 font-heading">
                Request Free Grozix Growth & Channel Audit
              </h3>
              <p className="text-xs text-slate-600">
                Customized roadmap delivered in 48 hours · Zero sales pressure
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-2 rounded-lg hover:bg-slate-200/60 transition-colors focus:outline-none cursor-pointer"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-[#13617e]">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-slate-950 font-heading">Audit Request Confirmed</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-slate-950 font-semibold">{name}</span>. Our senior growth strategists have queued <span className="text-[#13617e] font-semibold">{websiteUrl}</span> for an in-depth audit across {selectedChannels.join(', ')}.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left max-w-md mx-auto text-xs text-slate-600 space-y-2">
                <div className="font-semibold text-slate-900">What happens next:</div>
                <div>1. Technical crawl & AI citation benchmark initiated (24h).</div>
                <div>2. Competitor search & paid spend gap analysis prepared.</div>
                <div>3. Executive summary & priority fixes emailed to <span className="text-slate-900 font-medium">{email}</span>.</div>
              </div>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#13617e] hover:bg-[#0f4f66] rounded-lg transition-all cursor-pointer shadow-xs"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs">
                  {errorMsg}
                </div>
              )}

              {/* Channel Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2 font-mono">
                  Select Channels to Audit (Multi-Select)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    'Core SEO Services',
                    'AI SEO & GEO',
                    'Google Ads',
                    'Meta Ads',
                  ].map((ch) => {
                    const isSelected = selectedChannels.includes(ch);
                    return (
                      <button
                        type="button"
                        key={ch}
                        onClick={() => toggleChannel(ch)}
                        className={`px-3 py-2 text-xs font-medium rounded-lg border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#13617e] text-white border-[#13617e] shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:text-slate-950 hover:bg-slate-100'
                        }`}
                      >
                        {ch}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Form Fields: URL & Industry */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Website or Brand URL *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="https://yourbrand.com"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#13617e] focus:ring-1 focus:ring-[#13617e]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Industry Sector
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-[#13617e] focus:ring-1 focus:ring-[#13617e]"
                  >
                    <option value="Healthcare">Healthcare (Dental, Aesthetic, Clinics)</option>
                    <option value="Ecommerce">E-Commerce & DTC (Shopify, WooCommerce)</option>
                    <option value="Professional Services">Professional Services (Law, Accounting)</option>
                    <option value="Home Services">Home Services (HVAC, Solar, Trades)</option>
                    <option value="SaaS">SaaS & B2B Software</option>
                    <option value="Hospitality">Hospitality & Travel</option>
                    <option value="Education">Education & Coaching</option>
                    <option value="Other">Other Vertical</option>
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Dr. Sarah Collins / Alex Mercer"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#13617e] focus:ring-1 focus:ring-[#13617e]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@clinic.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#13617e] focus:ring-1 focus:ring-[#13617e]"
                  />
                </div>
              </div>

              {/* Monthly Ad Budget or Scale */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Current Monthly Marketing Spend / Target
                </label>
                <select
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-[#13617e] focus:ring-1 focus:ring-[#13617e]"
                >
                  <option value="Under $5,000 / mo">Under $5,000 / mo (Starting Out)</option>
                  <option value="$5,000 - $20,000 / mo">$5,000 - $20,000 / mo (Growth Stage)</option>
                  <option value="$20,000 - $75,000 / mo">$20,000 - $75,000 / mo (Scaling Fast)</option>
                  <option value="$75,000+ / mo">$75,000+ / mo (Enterprise & Multi-Location)</option>
                </select>
              </div>

              {/* Specific Challenges */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Specific Bottlenecks or Goals (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Lost Google Maps rank, need ChatGPT citations, or Meta ad CPA doubled recently..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#13617e] focus:ring-1 focus:ring-[#13617e]"
                />
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#13617e] hover:bg-[#0f4f66] active:scale-[0.99] transition-all rounded-lg shadow-md shadow-[#13617e]/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Generate Free Strategic Audit</span>
                  <span aria-hidden="true">→</span>
                </button>
                <p className="text-center text-[11px] text-slate-500 mt-2">
                  Strict confidentiality guaranteed. We never share domain diagnostics or contact info.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
