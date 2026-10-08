import React, { useState } from 'react';
import { INDUSTRIES, IndustryItem } from '../data/servicesData';

interface IndustriesFocusProps {
  onOpenAuditModal: (industryName?: string) => void;
}

export const IndustriesFocus: React.FC<IndustriesFocusProps> = ({ onOpenAuditModal }) => {
  const [showAllIndustries, setShowAllIndustries] = useState(false);

  const primaryIndustries = INDUSTRIES.filter((i) => i.priority === 'primary');
  const secondaryIndustries = INDUSTRIES.filter((i) => i.priority === 'secondary');

  return (
    <section id="industries" className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-[#13617e] uppercase mb-3">
            Industry Specialization
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight [text-wrap:balance] font-heading">
            Laser-Focused on High-Stakes Verticals.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Generic marketing strategies fail in regulated and highly competitive spaces. We build specialized search and paid architectures tailored to healthcare compliance and e-commerce velocity.
          </p>
        </div>

        {/* Primary Priority Showcase (Start Here) */}
        <div className="space-y-12 mb-16">
          {primaryIndustries.map((ind: IndustryItem, idx: number) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={ind.id}
                className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden shadow-sm"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10 ${
                    isReversed ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Visual Column */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:col-start-8' : ''}`}>
                    <div className="relative rounded-xl overflow-hidden border border-slate-200 group bg-white shadow-sm">
                      {ind.image && (
                        <img
                          src={ind.image}
                          alt={`${ind.name} growth case study`}
                          className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="text-xs font-mono text-cyan-300 font-semibold mb-1">
                          Proven Track Record
                        </div>
                        <div className="text-sm font-bold text-white font-mono">
                          {ind.caseMetric}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 space-y-5 ${isReversed ? 'lg:col-start-1' : ''}`}>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#13617e] bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                        Primary Focus Sector
                      </span>
                      <span className="text-slate-300">·</span>
                      <span className="text-xs text-slate-500">Priority: Active Deployment</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading">
                      {ind.name} Growth Practice
                    </h3>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {ind.headlineSummary}
                    </p>

                    {/* Specifications Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="p-3.5 rounded-lg bg-white border border-slate-200">
                        <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                          Main SEO Focus
                        </div>
                        <div className="text-xs font-semibold text-slate-900">
                          {ind.seoFocus}
                        </div>
                      </div>

                      <div className="p-3.5 rounded-lg bg-white border border-slate-200">
                        <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                          Primary Paid Channels
                        </div>
                        <div className="text-xs font-semibold text-slate-900">
                          {ind.adsPlatform}
                        </div>
                      </div>
                    </div>

                    {/* Sector Sub-Niches */}
                    <div className="p-3.5 rounded-lg bg-white border border-slate-200">
                      <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                        Sub-Specialties Covered
                      </div>
                      <div className="text-xs text-slate-700">
                        {ind.examples}
                      </div>
                    </div>

                    {/* Compliance Alert */}
                    {ind.complianceNote && (
                      <div className="p-3.5 rounded-lg bg-teal-50 border border-teal-200/90 flex items-start gap-3">
                        <svg className="w-4 h-4 text-[#13617e] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          <strong className="text-[#13617e]">Compliance Standard: </strong>
                          {ind.complianceNote}
                        </p>
                      </div>
                    )}

                    <div className="pt-2">
                      <button
                        onClick={() => onOpenAuditModal(ind.name)}
                        className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#13617e] hover:bg-[#0f4f66] rounded-lg transition-all shadow-xs cursor-pointer"
                      >
                        Request {ind.name} Growth Roadmap
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expandable Expansion Industries */}
        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-slate-200 gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-950 font-heading">
                Additional Industry Capabilities & Expansion Pipeline
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Established frameworks ready for deployment across professional, technical, and local service verticals.
              </p>
            </div>
            <button
              onClick={() => setShowAllIndustries(!showAllIndustries)}
              className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors whitespace-nowrap self-start sm:self-auto cursor-pointer shadow-xs"
            >
              {showAllIndustries ? 'Collapse Expansion Sectors' : `Explore All ${secondaryIndustries.length} Additional Sectors`}
            </button>
          </div>

          {showAllIndustries && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
              {secondaryIndustries.map((sec) => (
                <div
                  key={sec.id}
                  className="p-5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="font-semibold text-slate-500">Sector</span>
                      <span className="text-[11px] font-mono text-[#13617e] bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                        {sec.adsPlatform}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-950 font-heading">{sec.name}</h4>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {sec.headlineSummary}
                    </p>

                    <div className="text-[11px] text-slate-500">
                      <span className="font-medium text-slate-700">Examples: </span>
                      {sec.examples}
                    </div>

                    <div className="text-[11px] text-[#13617e] font-mono font-medium">
                      SEO: {sec.seoFocus}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100">
                    <button
                      onClick={() => onOpenAuditModal(sec.name)}
                      className="text-xs font-semibold text-[#13617e] hover:text-[#0f4f66] flex items-center gap-1 cursor-pointer"
                    >
                      <span>Inquire for {sec.name}</span>
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
