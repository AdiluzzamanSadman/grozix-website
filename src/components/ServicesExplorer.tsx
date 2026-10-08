import React, { useState } from 'react';
import {
  SEO_SERVICES,
  AI_SEO_SERVICES,
  LOCAL_SEO_DEEP,
  ECOMMERCE_SEO_DEEP,
  PLATFORM_SEO,
  ServiceItem,
} from '../data/servicesData';

interface ServicesExplorerProps {
  onSelectService: (serviceTitle: string) => void;
  onNavigateSubpage?: (slug: string) => void;
}

type CategoryTab = 'all-seo' | 'ai-seo' | 'local-seo' | 'ecommerce-seo' | 'platform-seo';

export const ServicesExplorer: React.FC<ServicesExplorerProps> = ({
  onSelectService,
  onNavigateSubpage,
}) => {
  const [activeTab, setActiveTab] = useState<CategoryTab>('all-seo');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const getActiveData = (): { title: string; subtitle: string; items: ServiceItem[] } => {
    switch (activeTab) {
      case 'all-seo':
        return {
          title: '01. Core Search Engine Optimization',
          subtitle:
            'Holistic technical, on-page, and authority engineering designed to sustainably rank for competitive organic buyer keywords.',
          items: SEO_SERVICES,
        };
      case 'ai-seo':
        return {
          title: '02. AI SEO & Generative Engine Optimization (GEO)',
          subtitle:
            'Ensuring your brand is directly recommended and cited by ChatGPT, Gemini, Perplexity, and Google Search Generative answers.',
          items: AI_SEO_SERVICES,
        };
      case 'local-seo':
        return {
          title: '03. Local SEO & Google Maps Dominance',
          subtitle:
            'Engineered specifically for multi-location practices, clinics, and local providers who need to dominate the 3-Pack Map radius.',
          items: LOCAL_SEO_DEEP,
        };
      case 'ecommerce-seo':
        return {
          title: '04. Dedicated Ecommerce SEO',
          subtitle:
            'Overcoming platform crawl bottlenecks, indexing high-converting collections, and ranking individual product SKUs.',
          items: ECOMMERCE_SEO_DEEP,
        };
      case 'platform-seo':
        return {
          title: '05. Platform & CMS Specialization',
          subtitle:
            'Native architecture fixes tailored to the technical limits and quirks of major enterprise and boutique web platforms.',
          items: PLATFORM_SEO,
        };
    }
  };

  const current = getActiveData();

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-[#13617e] uppercase mb-3">
            Service Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight [text-wrap:balance] font-heading">
            Organic Discovery and Algorithmic Authority.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Search is no longer just ten blue links. We engineer your digital presence to win both traditional Google SERP real estate and next-generation generative AI synthesis.
          </p>
        </div>

        {/* Interactive Segmented Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-white border border-slate-200 rounded-xl mb-10 overflow-x-auto shadow-xs">
          <button
            onClick={() => setActiveTab('all-seo')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer ${
              activeTab === 'all-seo'
                ? 'bg-[#13617e] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Core SEO Services
          </button>
          <button
            onClick={() => setActiveTab('ai-seo')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-150 whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'ai-seo'
                ? 'bg-[#13617e] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <span>AI SEO (GEO & AEO)</span>
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          </button>
          <button
            onClick={() => setActiveTab('local-seo')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer ${
              activeTab === 'local-seo'
                ? 'bg-[#13617e] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Local & Maps SEO
          </button>
          <button
            onClick={() => setActiveTab('ecommerce-seo')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer ${
              activeTab === 'ecommerce-seo'
                ? 'bg-[#13617e] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Ecommerce SEO
          </button>
          <button
            onClick={() => setActiveTab('platform-seo')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer ${
              activeTab === 'platform-seo'
                ? 'bg-[#13617e] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            CMS & Platform SEO
          </button>
        </div>

        {/* Category Description Banner */}
        <div className="mb-8 flex flex-col md:flex-row md:items-baseline md:justify-between pb-6 border-b border-slate-200 gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-heading">
              {current.title}
            </h3>
            <p className="mt-1 text-sm text-slate-600 max-w-2xl">
              {current.subtitle}
            </p>
          </div>
          <div className="text-xs font-mono font-semibold text-[#13617e] bg-teal-50 px-2.5 py-1 rounded-md border border-teal-100 whitespace-nowrap">
            {current.items.length} Modules Available
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {current.items.map((service, index) => {
            const isExpanded = expandedId === service.id;
            return (
              <div
                key={service.id}
                className="group p-6 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Clean unboxed header metadata */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="font-mono text-slate-400 font-medium">
                      0{index + 1}.
                    </span>
                    {service.metricsPreview && (
                      <span className="text-[#13617e] bg-teal-50 border border-teal-100 px-2 py-0.5 rounded font-mono font-medium text-[11px]">
                        {service.metricsPreview}
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-bold text-slate-950 group-hover:text-[#13617e] transition-colors font-heading">
                    {service.title}
                  </h4>

                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables toggle */}
                  {service.deliverables && service.deliverables.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : service.id)}
                        className="text-xs font-semibold text-slate-500 hover:text-slate-900 flex items-center gap-1.5 focus:outline-none cursor-pointer"
                      >
                        <span>{isExpanded ? 'Hide Deliverables' : 'View Scope & Deliverables'}</span>
                        <svg
                          className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {isExpanded && (
                        <ul className="mt-3 space-y-1.5 text-xs text-slate-700 pl-3 border-l-2 border-[#13617e]">
                          {service.deliverables.map((del, dIdx) => (
                            <li key={dIdx} className="leading-snug">
                              {del}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  {onNavigateSubpage ? (
                    <button
                      onClick={() => onNavigateSubpage(service.id)}
                      className="text-xs text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1 focus:outline-none cursor-pointer"
                    >
                      <span>Service Details</span>
                      <span aria-hidden="true">↗</span>
                    </button>
                  ) : (
                    <span className="text-xs text-slate-400">Full Execution</span>
                  )}
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="text-xs font-semibold text-[#13617e] hover:text-[#0f4f66] flex items-center gap-1 focus:outline-none cursor-pointer"
                  >
                    <span>Request Audit</span>
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
