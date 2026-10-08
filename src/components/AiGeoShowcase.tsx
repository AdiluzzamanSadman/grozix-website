import React, { useState } from 'react';

interface AiGeoShowcaseProps {
  onOpenAuditModal: () => void;
}

export const AiGeoShowcase: React.FC<AiGeoShowcaseProps> = ({ onOpenAuditModal }) => {
  const [activeEngine, setActiveEngine] = useState<'chatgpt' | 'gemini' | 'perplexity'>('perplexity');

  const engineExamples = {
    perplexity: {
      engineName: 'Perplexity Search',
      prompt: 'Who are the top aesthetic clinics in London with board-certified dermatologists?',
      beforeCitation: 'Mentions generic Wikipedia summaries and directory listings with no direct clinic recommendations or pricing structure.',
      afterCitation: 'Cites Dr. Vance Skin Clinic [Source 1: Grozix-Optimized Entity], noting verified medical credentials, laser skin resurfacing specialties, and direct consultation booking link.',
      growthMetric: 'Featured as Primary Source in 94% of synthetic queries',
    },
    chatgpt: {
      engineName: 'ChatGPT Search & Canvas',
      prompt: 'What are the cleanest organic skincare brands formulated for sensitive eczema-prone skin?',
      beforeCitation: 'Hallucinates outdated 2021 brand lists or returns general tips on what eczema is without specific product citations.',
      afterCitation: 'Explicitly names Lumina Organics [Source 2], referencing clinical trial percentages, dermatological approvals, and exact Shopify product catalog links.',
      growthMetric: '4.7x Increase in LLM referral conversion rate',
    },
    gemini: {
      engineName: 'Google Gemini & SGE',
      prompt: 'Emergency root canal dental specialist near West End open on weekends?',
      beforeCitation: 'Shows scattered map markers without verifying current weekend hours or emergency dental sedation options.',
      afterCitation: 'Synthesizes Apex Dental West End with emergency triage phone, verified patient ratings, and Sunday morning booking slots.',
      growthMetric: '100% Google AI Overviews snippet coverage',
    },
  };

  const current = engineExamples[activeEngine];

  return (
    <section id="ai-geo" className="py-20 md:py-28 bg-white border-b border-slate-200 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-[#13617e] uppercase mb-3">
            The Next Frontier
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight [text-wrap:balance] font-heading">
            Generative Engine Optimization (GEO & AEO).
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            When prospective buyers ask ChatGPT, Gemini, or Perplexity for solutions, is your brand cited as the definitive authority, or are your competitors taking the credit?
          </p>
        </div>

        {/* 2-Column Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Visual Asset & Methodology */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white group">
              <img
                src="/src/assets/images/ai_search_geo_studio_1791369622939.jpg"
                alt="Grozix Generative Engine Optimization and AI citation intelligence"
                className="w-full h-auto object-cover aspect-[16/10] group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-xs font-mono text-cyan-300 mb-1">Entity Authority Architecture</div>
                <div className="text-sm font-semibold text-white">Machine-Readable Knowledge Graphs & JSON-LD</div>
              </div>
            </div>

            {/* 3 Pillars of Grozix AI SEO */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-sm font-bold text-slate-950 mb-1 font-heading">01. Crawler Protocol Access</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We configure precision crawler permissions for GPTBot, ClaudeBot, and PerplexityBot, ensuring deep indexing without draining server resources.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-sm font-bold text-slate-950 mb-1 font-heading">02. Entity & Citation Engineering</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  LLMs cite sources based on co-occurrence in trusted corpora. We engineer contextual PR, third-party review networks, and structured datasets.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-sm font-bold text-slate-950 mb-1 font-heading">03. Answer Engine Direct Extraction</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We structure your copy using direct declarative schemas and Q&A formats so voice assistants and Google AI Overviews extract your brand verbatim.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive GEO Simulator & Diagnostic */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <h3 className="text-lg font-bold text-slate-950 font-heading">Interactive GEO Citation Benchmark</h3>
                <p className="text-xs text-slate-500">Select an AI model to preview organic citation transformation</p>
              </div>

              {/* Engine Switcher */}
              <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200 shadow-xs">
                <button
                  onClick={() => setActiveEngine('perplexity')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    activeEngine === 'perplexity'
                      ? 'bg-[#13617e] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  Perplexity
                </button>
                <button
                  onClick={() => setActiveEngine('chatgpt')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    activeEngine === 'chatgpt'
                      ? 'bg-[#13617e] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  ChatGPT
                </button>
                <button
                  onClick={() => setActiveEngine('gemini')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    activeEngine === 'gemini'
                      ? 'bg-[#13617e] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  Gemini
                </button>
              </div>
            </div>

            {/* Prompt Display */}
            <div className="p-4 rounded-xl bg-white border border-slate-200">
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                Simulated User Query ({current.engineName})
              </div>
              <div className="text-sm font-medium text-slate-900 italic">
                "{current.prompt}"
              </div>
            </div>

            {/* Comparative Citation State */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  <span className="text-xs font-bold text-rose-800 uppercase tracking-wider">
                    Without GEO Strategy
                  </span>
                </div>
                <p className="text-xs text-rose-950 leading-relaxed">
                  {current.beforeCitation}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-teal-50 border border-teal-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#13617e] animate-pulse" />
                  <span className="text-xs font-bold text-[#13617e] uppercase tracking-wider">
                    With Grozix GEO Optimization
                  </span>
                </div>
                <p className="text-xs text-slate-800 leading-relaxed font-medium">
                  {current.afterCitation}
                </p>
              </div>
            </div>

            {/* Metric proof bar */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
              <div>
                <div className="text-xs text-slate-500">Verified Outcome Metric</div>
                <div className="text-sm font-bold text-[#13617e] font-mono">
                  {current.growthMetric}
                </div>
              </div>
              <button
                onClick={onOpenAuditModal}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#13617e] hover:bg-[#0f4f66] rounded-lg transition-all self-start sm:self-auto shadow-xs cursor-pointer"
              >
                Benchmark My Brand's AI Footprint
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
