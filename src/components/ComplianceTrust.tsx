import React from 'react';

export const ComplianceTrust: React.FC = () => {
  return (
    <section id="compliance" className="py-20 md:py-28 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-[#13617e] uppercase mb-3">
            Governance & Ad Safety
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight [text-wrap:balance] font-heading">
            Built For Strict YMYL & Medical Advertising Standards.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Healthcare, aesthetics, supplements, and professional legal practices face severe algorithmic scrutiny and account suspension risks. Grozix deploys white-hat compliance protocols that safeguard your brand.
          </p>
        </div>

        {/* 4 Pillars of Compliance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-[#13617e] font-mono font-bold text-sm">
              01
            </div>
            <h3 className="text-base font-bold text-slate-950 font-heading">Google YMYL & E-E-A-T Standards</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every medical and health-related page includes verified doctor authorship, academic source citations, and schema markup compliant with Google's Quality Rater Guidelines.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-[#13617e] font-mono font-bold text-sm">
              02
            </div>
            <h3 className="text-base font-bold text-slate-950 font-heading">Meta Medical Policy Compliance</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We eliminate prohibited personal health attributes, sensationalized "before/after" image violations, and ensure 100% ad approval longevity on Facebook & Instagram.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-[#13617e] font-mono font-bold text-sm">
              03
            </div>
            <h3 className="text-base font-bold text-slate-950 font-heading">HIPAA & Privacy-First Tracking</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Protected Health Information (PHI) is never sent to ad platforms. We implement privacy-first Conversions API (CAPI) and consent mode v2 for European and US healthcare clients.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-[#13617e] font-mono font-bold text-sm">
              04
            </div>
            <h3 className="text-base font-bold text-slate-950 font-heading">FTC & Supplement Claim Review</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              For e-commerce beauty, wellness, and supplements, we audit all copy for FTC compliance and substantiation claims to prevent merchant center suspensions.
            </p>
          </div>
        </div>

        {/* Advisory banner */}
        <div className="mt-8 p-4 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-xs sm:text-sm text-slate-800 font-medium">
              Zero client ad account bans or manual Google penalties across all managed client accounts.
            </span>
          </div>
          <div className="text-xs font-mono font-semibold text-[#13617e] whitespace-nowrap bg-teal-50 px-2.5 py-1 rounded border border-teal-100">
            Grozix Risk Mitigation Guarantee
          </div>
        </div>
      </div>
    </section>
  );
};
