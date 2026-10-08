import React, { useState } from 'react';
import {
  GOOGLE_ADS_SERVICES,
  GOOGLE_ADS_CAMPAIGNS,
  META_ADS_SERVICES,
  META_ADS_CAMPAIGNS,
} from '../data/servicesData';

interface PaidMediaSectionProps {
  onOpenAuditModal: (serviceName?: string) => void;
}

export const PaidMediaSection: React.FC<PaidMediaSectionProps> = ({ onOpenAuditModal }) => {
  const [platform, setPlatform] = useState<'google' | 'meta'>('google');

  const services = platform === 'google' ? GOOGLE_ADS_SERVICES : META_ADS_SERVICES;
  const campaigns = platform === 'google' ? GOOGLE_ADS_CAMPAIGNS : META_ADS_CAMPAIGNS;

  return (
    <section id="paid-media" className="py-20 md:py-28 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-wider text-[#13617e] uppercase mb-3">
              Paid Acquisition Engineering
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight [text-wrap:balance] font-heading">
              Google Ads & Meta Ads Scaled with Quantitative Discipline.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              We eliminate wasted ad spend, engineer high-converting creative and search funnels, and scale profitable spend without suffering diminishing returns.
            </p>
          </div>

          {/* Platform Segmented Switcher */}
          <div className="flex items-center gap-1.5 p-1.5 bg-white border border-slate-200 rounded-xl self-start md:self-auto shrink-0 shadow-xs">
            <button
              onClick={() => setPlatform('google')}
              className={`flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 cursor-pointer ${
                platform === 'google'
                  ? 'bg-[#13617e] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              <span>Google Ads Network</span>
            </button>
            <button
              onClick={() => setPlatform('meta')}
              className={`flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 cursor-pointer ${
                platform === 'meta'
                  ? 'bg-[#13617e] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              <span>Meta Ads (FB & IG)</span>
            </button>
          </div>
        </div>

        {/* 3 Core Services Lifecycle Cards */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
            <h3 className="text-xl font-bold text-slate-950 font-heading">
              {platform === 'google' ? 'Google Ads Delivery Protocol' : 'Meta Ads Growth Protocol'}
            </h3>
            <span className="text-xs font-mono font-medium text-[#13617e] bg-teal-50 px-2.5 py-1 rounded border border-teal-100">
              Audit → Management → Scaled Acquisition
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((item, idx) => (
              <div
                key={item.id}
                className="p-6 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="font-mono text-slate-400 font-medium">Phase 0{idx + 1}</span>
                    <span className="font-mono text-[#13617e] bg-teal-50 border border-teal-100 px-2 py-0.5 rounded font-semibold">{item.metricsPreview}</span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-950 font-heading">{item.title}</h4>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  {item.deliverables && (
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Included in Scope:
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {item.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <span className="text-[#13617e] mt-0.5 font-bold">•</span>
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Guaranteed SLA</span>
                  <button
                    onClick={() => onOpenAuditModal(`${platform === 'google' ? 'Google Ads' : 'Meta Ads'} - ${item.title}`)}
                    className="text-xs font-semibold text-[#13617e] hover:text-[#0f4f66] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Get Started</span>
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Campaign Types Grid */}
        <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-slate-200 mb-6 gap-2">
            <div>
              <h3 className="text-lg font-bold text-slate-950 font-heading">
                Supported {platform === 'google' ? 'Google Ads' : 'Meta'} Campaign Types
              </h3>
              <p className="text-xs text-slate-500">
                Full-funnel deployment matching prospective buyer intent across every channel
              </p>
            </div>
            <div className="text-xs font-mono font-medium text-[#13617e] bg-teal-50 px-2.5 py-1 rounded border border-teal-100">
              {campaigns.length} Campaign Formats Managed
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {campaigns.map((camp, cIdx) => (
              <div
                key={cIdx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors"
              >
                <div className="text-sm font-semibold text-slate-900 mb-1.5 flex items-center gap-2 font-heading">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#13617e]" />
                  <span>{camp.name}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {camp.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
