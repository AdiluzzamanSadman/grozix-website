import React, { useState } from 'react';
import { getServiceSubpage, ServiceSubpageDetail } from '../data/subpagesData';

interface ServiceSubpageProps {
  slug: string;
  onNavigateHome: () => void;
  onNavigateSubpage: (slug: string) => void;
  onOpenAuditModal: (serviceName?: string) => void;
}

export const ServiceSubpage: React.FC<ServiceSubpageProps> = ({
  slug,
  onNavigateHome,
  onNavigateSubpage,
  onOpenAuditModal,
}) => {
  const data: ServiceSubpageDetail = getServiceSubpage(slug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Related sibling services for quick navigation
  const siblingSlugs = [
    { slug: 'technical-seo', label: 'Technical SEO' },
    { slug: 'local-seo', label: 'Local Maps SEO' },
    { slug: 'geo', label: 'Generative Engine (GEO)' },
    { slug: 'google-ads', label: 'Google Ads' },
    { slug: 'meta-ads', label: 'Meta Ads' },
    { slug: 'shopify-seo', label: 'Shopify SEO' },
  ].filter((item) => item.slug !== slug);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      {/* Breadcrumb Navigation Bar */}
      <nav aria-label="Breadcrumb" className="bg-slate-50 border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-600">
            <button
              onClick={onNavigateHome}
              className="hover:text-slate-950 transition-colors focus:outline-none cursor-pointer"
            >
              Home
            </button>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <button
              onClick={() => onNavigateSubpage('all-services')}
              className="hover:text-slate-950 transition-colors focus:outline-none cursor-pointer"
            >
              Services
            </button>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="text-[#13617e] font-semibold">{data.title}</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-slate-500">
            <span className="text-[11px] font-mono uppercase bg-teal-50 border border-teal-100 px-2 py-0.5 rounded text-[#13617e]">
              Specialized Practice
            </span>
          </div>
        </div>
      </nav>

      {/* Subpage Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-50/80">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#13617e]/8 blur-[100px] pointer-events-none rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl space-y-6">
            {/* Category Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#13617e] uppercase">
              <span>{data.category}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Grozix Dedicated Practice</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight [text-wrap:balance] font-heading">
              {data.headline}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
              {data.tagline}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenAuditModal(data.title)}
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#13617e] hover:bg-[#0e4f66] active:scale-[0.98] transition-all rounded-lg shadow-md shadow-[#13617e]/20 whitespace-nowrap cursor-pointer"
              >
                Request Free {data.title} Audit
              </button>
              <a
                href="#deliverables"
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-medium uppercase tracking-wider text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs transition-all rounded-lg whitespace-nowrap cursor-pointer"
              >
                Inspect Deliverables & Scope
              </a>
            </div>

            {/* KPI Stats Bar */}
            <div className="pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {data.kpiStats.map((stat, sIdx) => (
                <div key={sIdx}>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-mono tabular-nums tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Overview: Problem -> Solution -> Outcome */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-semibold tracking-wider text-[#13617e] uppercase mb-2">
              Strategic Diagnosis
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight font-heading">
              Why Most Brands Struggle With {data.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-rose-50/70 border border-rose-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-rose-800 font-heading">
                  The Core Bottleneck
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {data.overview.problem}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-teal-50 border border-teal-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#13617e]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#13617e] font-heading">
                  The Grozix Methodology
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {data.overview.solution}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 font-heading">
                  Target Business Outcome
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {data.overview.outcome}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Matrix */}
      <section id="deliverables" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold tracking-wider text-[#13617e] uppercase mb-2">
              Scope of Work
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight font-heading">
              Included Deliverables & Technical Assets
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Every deliverable is backed by senior engineering and measurable execution milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.deliverables.map((del, dIdx) => (
              <div
                key={dIdx}
                className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="font-mono text-[#13617e] font-bold">0{dIdx + 1}</span>
                    <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-[11px] font-mono">Verified SLA</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-950 mb-2 font-heading">{del.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {del.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Phase Implementation Process */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold tracking-wider text-[#13617e] uppercase mb-2">
              Execution Roadmap
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight font-heading">
              The 4-Phase Grozix Delivery Framework
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              How we take your {data.title} initiative from forensic audit to profitable scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.process.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-xl bg-slate-50 border border-slate-200 relative group"
              >
                <div className="text-xs font-mono font-bold text-[#13617e] uppercase tracking-wider mb-2">
                  Phase {step.step}
                </div>
                <h3 className="text-base font-bold text-slate-950 mb-2 font-heading">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases: Healthcare vs E-Commerce */}
      <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold tracking-wider text-[#13617e] uppercase mb-2">
              Vertical Customization
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight font-heading">
              Tailored Across Our Primary Verticals
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              How {data.title} adapts to strict healthcare compliance and fast-paced e-commerce retail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#13617e] bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                  Healthcare & Medical Clinics
                </span>
                <span className="text-xs font-mono text-slate-500">YMYL Standard</span>
              </div>
              <h3 className="text-lg font-bold text-slate-950 font-heading">Clinical Patient Inbound & Trust</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {data.industryUseCases.healthcare}
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-100">
                Covers: Dental studios, aesthetic clinics, dermatology, and diagnostic centers.
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#13617e] bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                  E-Commerce & DTC Brands
                </span>
                <span className="text-xs font-mono text-slate-500">High ROAS Standard</span>
              </div>
              <h3 className="text-lg font-bold text-slate-950 font-heading">Direct Catalog Revenue & Cart Volume</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {data.industryUseCases.ecommerce}
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-100">
                Covers: Shopify stores, beauty/skincare, supplements, apparel, and home decor.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Tooling Stack */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="text-xs font-semibold tracking-wider text-[#13617e] uppercase mb-1">
                Tooling & Telemetry
              </div>
              <h3 className="text-lg font-bold text-slate-950 font-heading">
                Enterprise Software Stack Deployed for {data.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.toolsUsed.map((tool, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1.5 text-xs font-mono bg-slate-50 border border-slate-200 text-slate-700 rounded-lg"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="text-xs font-semibold tracking-wider text-[#13617e] uppercase mb-2">
              Frequently Asked Questions
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-heading">
              Questions About {data.title}
            </h2>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  className="rounded-xl bg-white border border-slate-200 overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="text-sm font-semibold text-slate-900 font-heading">{faq.question}</span>
                    <span className="text-[#13617e] text-lg font-bold">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Subpage CTA Banner */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 [text-wrap:balance] font-heading">
            Ready to Accelerate Your Brand with Grozix {data.title}?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Get an exhaustive diagnostic review from our senior specialists. We inspect your current rankings, technical health, or ad account spend within 48 hours.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenAuditModal(data.title)}
              className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#13617e] hover:bg-[#0e4f66] rounded-lg shadow-md shadow-[#13617e]/20 transition-all cursor-pointer"
            >
              Request Free {data.title} Audit
            </button>
            <button
              onClick={onNavigateHome}
              className="px-6 py-3.5 text-xs font-medium uppercase tracking-wider text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors cursor-pointer"
            >
              Return to Agency Homepage
            </button>
          </div>
        </div>
      </section>

      {/* Sibling Subpages Quick Switcher */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-4 text-center">
            Explore Other Grozix Service Lines
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {siblingSlugs.map((s) => (
              <button
                key={s.slug}
                onClick={() => onNavigateSubpage(s.slug)}
                className="px-4 py-2 text-xs font-medium bg-white hover:bg-slate-100 text-slate-700 hover:text-[#13617e] border border-slate-200 rounded-lg transition-all shadow-xs cursor-pointer"
              >
                {s.label} →
              </button>
            ))}
            <button
              onClick={() => onNavigateSubpage('all-services')}
              className="px-4 py-2 text-xs font-semibold bg-teal-50 hover:bg-[#13617e] text-[#13617e] hover:text-white border border-teal-200 rounded-lg transition-all cursor-pointer"
            >
              View Full Catalog of 27 Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
