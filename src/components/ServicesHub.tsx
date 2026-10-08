import React, { useState } from 'react';

interface ServicesHubProps {
  onNavigateSubpage: (slug: string) => void;
  onNavigateHome: () => void;
  onOpenAuditModal: () => void;
}

interface ServiceCatalogItem {
  slug: string;
  name: string;
  category: string;
  description: string;
  badge?: string;
}

const ALL_CATALOG_SERVICES: ServiceCatalogItem[] = [
  // 1. Core SEO Services
  { slug: 'technical-seo', name: 'Technical SEO', category: 'Core SEO', description: 'Crawl budget, Core Web Vitals, and indexation architecture.', badge: 'Core' },
  { slug: 'local-seo', name: 'Local SEO & Maps', category: 'Core SEO', description: 'Google Maps 3-Pack and geo-targeted service area rank.', badge: 'High Intent' },
  { slug: 'on-page-seo', name: 'On-Page SEO', category: 'Core SEO', description: 'Titles, headings, topic clusters, and semantic PageRank.', badge: 'Core' },
  { slug: 'seo-audit', name: 'Comprehensive SEO Audit', category: 'Core SEO', description: '120-point diagnostic checklist with priority fixes.', badge: '48h SLA' },
  { slug: 'keyword-research', name: 'Keyword Research', category: 'Core SEO', description: 'Commercial search terms and competitor gap mapping.' },
  { slug: 'content-seo', name: 'Content SEO', category: 'Core SEO', description: 'E-E-A-T high-authority editorial answering buyer queries.' },
  { slug: 'link-building', name: 'Link Building & Digital PR', category: 'Core SEO', description: 'Contextual white-hat backlinks from niche publications.' },
  { slug: 'international-seo', name: 'International SEO', category: 'Core SEO', description: 'Multilingual hreflang and cross-territory indexation.' },

  // 2. AI SEO & GEO
  { slug: 'geo', name: 'Generative Engine Optimization (GEO)', category: 'AI SEO', description: 'Direct citations in ChatGPT, Gemini, and Perplexity.', badge: 'New 2026' },
  { slug: 'aeo', name: 'Answer Engine Optimization (AEO)', category: 'AI SEO', description: 'Structured answers for voice and AI Overviews.', badge: 'New 2026' },
  { slug: 'ai-seo', name: 'AI Search Visibility', category: 'AI SEO', description: 'Knowledge graph entity synchronization across AI models.' },
  { slug: 'ai-seo-audit', name: 'AI SEO Audit', category: 'AI SEO', description: 'Benchmark how neural search models perceive your brand.' },
  { slug: 'ai-technical-seo', name: 'AI Technical SEO', category: 'AI SEO', description: 'GPTBot crawler directives and nested schema data.' },
  { slug: 'llm-search-optimization', name: 'LLM Search Optimization', category: 'AI SEO', description: 'Corpus co-citation engineering and entity shaping.' },

  // 3. Ecommerce SEO
  { slug: 'shopify-seo', name: 'Shopify SEO', category: 'Ecommerce SEO', description: 'Collection canonicals, liquid theme speed, and rich snippets.', badge: 'Shopify' },
  { slug: 'woocommerce-seo', name: 'WooCommerce SEO', category: 'Ecommerce SEO', description: 'Faceted filter optimization and database performance.' },
  { slug: 'amazon-seo', name: 'Amazon SEO', category: 'Ecommerce SEO', description: 'A10 algorithmic listing and backend keyword ranking.' },
  { slug: 'etsy-seo', name: 'Etsy SEO', category: 'Ecommerce SEO', description: '13-tag combinatorial matching and store authority.' },
  { slug: 'bigcommerce-seo', name: 'BigCommerce SEO', category: 'Ecommerce SEO', description: 'Enterprise catalog URLs and schema validation.' },

  // 4. Platform & CMS SEO
  { slug: 'wordpress-seo', name: 'WordPress SEO', category: 'CMS & Platforms', description: 'Clean architecture, plugin bloat removal, and fast speeds.' },
  { slug: 'wix-seo', name: 'Wix SEO', category: 'CMS & Platforms', description: 'Client-side rendering fixes and canonical management.' },
  { slug: 'squarespace-seo', name: 'Squarespace SEO', category: 'CMS & Platforms', description: 'Speed enhancements and collection metadata.' },
  { slug: 'magento-seo', name: 'Magento SEO', category: 'CMS & Platforms', description: 'Layered navigation governance and multi-store views.' },

  // 5. Paid Media (Google Ads & Meta Ads)
  { slug: 'google-ads', name: 'Google Ads Management', category: 'Paid Media', description: 'Search, Shopping, Performance Max, and YouTube Ads.', badge: '4.2x ROAS' },
  { slug: 'meta-ads', name: 'Meta Ads (Facebook & IG)', category: 'Paid Media', description: 'Advantage+ Shopping, Lead Forms, and UGC Video Ads.', badge: 'High Scale' },

  // 6. Niche Industries
  { slug: 'healthcare-growth', name: 'Healthcare & Clinic Practice', category: 'Industry Verticals', description: 'Dental, aesthetic, and medical clinics with YMYL compliance.', badge: 'Start Here' },
  { slug: 'ecommerce-growth', name: 'E-Commerce DTC Practice', category: 'Industry Verticals', description: 'Shopify, beauty, supplements, fashion, and home decor.', badge: 'Start Here' },
];

export const ServicesHub: React.FC<ServicesHubProps> = ({
  onNavigateSubpage,
  onNavigateHome,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Core SEO', 'AI SEO', 'Ecommerce SEO', 'CMS & Platforms', 'Paid Media', 'Industry Verticals'];

  const filtered = ALL_CATALOG_SERVICES.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      {/* Breadcrumbs */}
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
            <span className="text-[#13617e] font-semibold">All Services</span>
          </div>
          <span className="text-[11px] font-mono text-slate-500">
            {ALL_CATALOG_SERVICES.length} Dedicated Service Solutions
          </span>
        </div>
      </nav>

      {/* Hub Hero */}
      <section className="py-14 md:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-wider text-[#13617e] uppercase mb-2">
              Service Directory & Solutions Catalog
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight font-heading">
              Complete Service Architecture.
            </h1>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Every service line provided by Grozix includes detailed deliverables, 4-phase processes, KPIs, tooling, and FAQs.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5 p-1 bg-slate-50 rounded-xl border border-slate-200">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#13617e] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="w-full sm:w-72">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3.5 py-2 text-xs bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#13617e] focus:ring-1 focus:ring-[#13617e]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-slate-50 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.slug}
                onClick={() => onNavigateSubpage(item.slug)}
                className="group p-6 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-mono text-slate-400 font-medium">{item.category}</span>
                    {item.badge && (
                      <span className="text-[10px] uppercase font-bold text-[#13617e] bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h2 className="text-lg font-bold text-slate-950 group-hover:text-[#13617e] transition-colors font-heading">
                    {item.name}
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400">View Service</span>
                  <span className="text-xs font-semibold text-[#13617e] group-hover:translate-x-1 transition-transform">
                    View Detail →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-slate-500 text-sm">
              No services matched your search criteria.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
