import React from 'react';
import heroAgencyImg from '../assets/images/hero_agency_workspace_1791369610998.jpg';

interface HeroProps {
  onOpenAuditModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAuditModal }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-50/80">
      {/* Subtle ambient light glow behind hero */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#13617e]/8 blur-[100px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Clean unboxed kicker metadata */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#13617e] uppercase">
              <span>Performance SEO</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Generative AI (GEO)</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Google & Meta Ads</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.08] [text-wrap:balance] font-heading">
              Search and Paid Media Engineered for the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13617e] via-teal-700 to-[#13617e]">
                AI Era.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed [text-wrap:pretty]">
              Grozix builds predictable customer acquisition engines. We position your brand at the top of Google Search and Google Maps, optimize your entities for ChatGPT and Gemini citations, and scale high-return Google and Meta ad campaigns.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenAuditModal}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#13617e] hover:bg-[#0e4f66] active:scale-[0.98] transition-all rounded-lg shadow-md shadow-[#13617e]/20 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 cursor-pointer"
              >
                Request Free Channel Audit
              </button>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs transition-all rounded-lg whitespace-nowrap cursor-pointer"
              >
                Explore Capabilities & Rates
              </a>
            </div>

            {/* Quantitative Proof Metrics */}
            <div className="pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-mono tabular-nums tracking-tight">
                  $48M+
                </div>
                <div className="text-xs text-slate-500 mt-1">Client Revenue Generated</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-mono tabular-nums tracking-tight">
                  4.2x
                </div>
                <div className="text-xs text-slate-500 mt-1">Average Blended ROAS</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-mono tabular-nums tracking-tight">
                  100%
                </div>
                <div className="text-xs text-slate-500 mt-1">YMYL & Ad Policy Pass</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-mono tabular-nums tracking-tight">
                  380+
                </div>
                <div className="text-xs text-slate-500 mt-1">Page #1 & LLM Citations</div>
              </div>
            </div>
          </div>

          {/* Right Column: Marquee Image Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xl bg-white group">
              <img
                src={heroAgencyImg}
                alt="Grozix performance marketing analytics operations headquarters"
                className="w-full h-auto object-cover aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Verified Performance Metric Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 border border-slate-200/90 shadow-lg backdrop-blur-md">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span className="font-medium text-slate-700">Active Campaign Telemetry</span>
                  <span className="text-emerald-600 font-mono font-semibold">Live Data Sync</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <div className="text-base font-semibold text-slate-900 font-heading">Healthcare & E-Commerce</div>
                  <div className="text-xs font-mono text-[#13617e] font-bold">+284% Organic Inbound</div>
                </div>
              </div>
            </div>

            {/* Subtle decorative backing highlight */}
            <div className="absolute -inset-1 -z-10 bg-gradient-to-r from-teal-500/15 to-cyan-500/10 rounded-2xl blur-xl opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
};
