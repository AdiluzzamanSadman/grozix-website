export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceSubpageDetail {
  slug: string;
  category: string;
  categorySlug: string;
  title: string;
  headline: string;
  tagline: string;
  kpiStats: { value: string; label: string }[];
  overview: {
    problem: string;
    solution: string;
    outcome: string;
  };
  deliverables: { title: string; detail: string }[];
  process: ProcessStep[];
  toolsUsed: string[];
  industryUseCases: {
    healthcare: string;
    ecommerce: string;
  };
  faqs: FaqItem[];
}

export const SUBPAGES_DATA: Record<string, ServiceSubpageDetail> = {
  'technical-seo': {
    slug: 'technical-seo',
    category: 'SEO Services',
    categorySlug: 'seo',
    title: 'Technical SEO',
    headline: 'Technical SEO & Crawl Budget Engineering',
    tagline: 'Fix speed, crawlability, indexing barriers, and complex site architecture so Google and AI search systems index your high-value pages effortlessly.',
    kpiStats: [
      { value: '< 0.8s', label: 'Average Core Web Vitals LCP' },
      { value: '100%', label: 'Clean Canonical Indexation' },
      { value: '+140%', label: 'Crawl Budget Efficiency' },
      { value: '0', label: 'Critical Render-Blocking Errors' },
    ],
    overview: {
      problem: 'Slow server response times, convoluted JavaScript rendering, bloated plugins, duplicate URL query parameters, and broken internal redirects drain crawl budget and prevent Google from indexing key pages.',
      solution: 'Grozix executes a surgical 120-point technical remediation covering Core Web Vitals, server caching, canonicalization, log file analysis, and XML sitemap prioritization.',
      outcome: 'A lightweight, lightning-fast technical foundation that search bots can crawl and index without hesitation.',
    },
    deliverables: [
      { title: 'Core Web Vitals Optimization', detail: 'Minimizing LCP, INP, and CLS scores into green Google thresholds through script deferral and image modernizing.' },
      { title: 'Crawl Budget & Server Log Analysis', detail: 'Identifying bot crawl traps, infinite redirect loops, and server 5xx error spikes from real server log dumps.' },
      { title: 'JavaScript Rendering & DOM Hydration', detail: 'Ensuring client-side dynamic frameworks (React, Next, Vue) correctly deliver rendered HTML to search crawlers.' },
      { title: 'Robots.txt & Sitemap Directive Architecture', detail: 'Streamlined XML sitemaps with priority weighting and precise exclusion of duplicate or low-value paths.' },
      { title: 'Pagination & Facet Navigation Management', detail: 'Resolving infinite filter permutations in e-commerce stores with canonical tags and noindex rules.' },
      { title: 'Structured Data & Schema.org Implementation', detail: 'Validating rich snippet schemas for Organization, WebSite, Breadcrumbs, and FAQs.' },
    ],
    process: [
      { step: '01', title: 'Deep Technical Crawl Diagnostic', description: 'Executing multi-bot crawls simulating Googlebot Desktop and Smartphone to log every error, redirect chain, and unindexed asset.' },
      { step: '02', title: 'Priority Matrix & Developer Tickets', description: 'Transforming technical findings into actionable pull requests and developer tickets ranked by revenue impact.' },
      { step: '03', title: 'Code & Server-Level Implementation', description: 'Deploying fixes directly to your CMS, CDN edge workers (Cloudflare), or staging environment with validation.' },
      { step: '04', title: 'Continuous Crawl Health Monitoring', description: 'Automated 24/7 monitors alerting on unexpected index drops, robots.txt misconfigurations, or Core Web Vital regressions.' },
    ],
    toolsUsed: ['Screaming Frog SEO Spider', 'Google Search Console', 'Sitebulb', 'Cloudflare Edge Workers', 'Chrome DevTools', 'Postman'],
    industryUseCases: {
      healthcare: 'Ensuring multi-location clinic booking portals load instantly on mobile devices with verified doctor Schema and zero redirect hops.',
      ecommerce: 'Fixing thousands of faceted filter URLs on Shopify or Magento so Google indexes parent collection pages rather than duplicate filtered parameters.',
    },
    faqs: [
      { question: 'How quickly do technical SEO fixes show results in Google?', answer: 'Google typically recrawls high-priority pages within 7 to 14 days of submitting updated sitemaps. Significant rank and traffic improvements usually compound over 4 to 8 weeks as PageRank redistributes efficiently.' },
      { question: 'Can you work directly with our engineering team or CMS developers?', answer: 'Yes. We deliver developer-ready GitHub tickets, pull requests, or exact Liquid/PHP code snippets with clear acceptance criteria.' },
      { question: 'Do technical fixes risk breaking our live website design?', answer: 'No. All technical adjustments are thoroughly regression-tested in staging environments or preview branches before pushing live.' },
    ],
  },

  'local-seo': {
    slug: 'local-seo',
    category: 'SEO Services',
    categorySlug: 'seo',
    title: 'Local SEO',
    headline: 'Local SEO & Google Maps Pack Domination',
    tagline: 'Get found in high-intent local searches and dominate the coveted Google Maps 3-Pack across all target neighborhoods and service areas.',
    kpiStats: [
      { value: '#1 - #3', label: 'Average Google Map Pack Position' },
      { value: '+210%', label: 'Direct Phone Inquiries & Directions' },
      { value: '100%', label: 'NAP Uniformity Across Aggregators' },
      { value: '4.9★', label: 'Client Reputation Benchmark' },
    ],
    overview: {
      problem: 'Local competitors outrank you on Google Maps simply because your Google Business Profile is incomplete, citations are inconsistent, or local landing pages lack neighborhood relevance.',
      solution: 'Grozix engineers complete local prominence: optimizing Google Business Profiles, synchronizing citations across 60+ Tier-1 directories, generating authentic review momentum, and building hyper-local service area pages.',
      outcome: 'Consistent placement in the top 3 spots of Google Maps when local buyers search near your physical locations.',
    },
    deliverables: [
      { title: 'Google Business Profile (GBP) Optimization', detail: 'Precise primary category selection, secondary services cataloging, geotagged imagery, and active weekly update posts.' },
      { title: 'Local Map Pack Geo-Grid Optimization', detail: 'Expanding the geographic radius around your location where you rank in the top 3 on Google Maps.' },
      { title: 'Tier-1 Local Citation Aggregation', detail: 'Enforcing uniform Name, Address, and Phone (NAP) details across Apple Maps, Yelp, Bing, YellowPages, and industry directories.' },
      { title: 'Hyper-Local Service Area Pages', detail: 'Building unique, neighborhood-specific landing pages with embedded maps, driving directions, and local case studies.' },
      { title: 'Review Velocity & Sentiment Engine', detail: 'Automated review generation workflows following Google compliance rules to build steady 5-star customer feedback.' },
      { title: 'Local Schema Markup', detail: 'LocalBusiness, GeoCoordinates, and OpeningHoursSpecification JSON-LD structured data.' },
    ],
    process: [
      { step: '01', title: 'Local Proximity & Map Audit', description: 'Running multi-coordinate grid rank tracking to visualize exactly where your business drops off across town.' },
      { step: '02', title: 'GBP Architecture & Verification', description: 'Locking in primary service categories, description keywords, products catalog, and attributes.' },
      { step: '03', title: 'Citation Synchronization', description: 'Claiming, updating, and deduplicating listings across all major mapping providers and local databases.' },
      { step: '04', title: 'Local Authority Expansion', description: 'Publishing neighborhood landing pages and acquiring local community and chamber of commerce backlinks.' },
    ],
    toolsUsed: ['Google Business Profile Manager', 'BrightLocal', 'Whitespark', 'Local Falcon (Geo-Grid)', 'PlePer'],
    industryUseCases: {
      healthcare: 'Helping dental, cosmetic, and general health practices capture patients within a 15-mile radius searching for immediate appointments.',
      ecommerce: 'Enabling retail storefronts and brand showrooms to guide local foot traffic and drive in-store pickup conversions.',
    },
    faqs: [
      { question: 'What is the Google Maps 3-Pack and why does it matter?', answer: 'The 3-Pack is the boxed section featuring three local businesses with map pins that appears above regular organic search results for local queries. It captures over 44% of total local search clicks.' },
      { question: 'Can you help if we operate in multiple cities or locations?', answer: 'Yes. We manage multi-location GBP setups with dedicated location silos, unique landing pages, and central review management.' },
      { question: 'How do you handle negative reviews?', answer: 'We set up rapid response notifications, report false or spam reviews violating Google guidelines, and build steady positive review velocity to dilute anomalies.' },
    ],
  },

  'geo': {
    slug: 'geo',
    category: 'AI SEO',
    categorySlug: 'ai-seo',
    title: 'Generative Engine Optimization (GEO)',
    headline: 'Generative Engine Optimization (GEO) for ChatGPT & Gemini',
    tagline: 'Position your brand as the cited, recommended authority inside ChatGPT, Perplexity, Google Gemini, and Claude AI responses.',
    kpiStats: [
      { value: 'Top 1-3', label: 'Citation Position in AI Engines' },
      { value: '94%', label: 'Entity Accuracy in Synthetic Answers' },
      { value: '+310%', label: 'Direct Referral Traffic from LLMs' },
      { value: '100%', label: 'GPTBot & Perplexity Crawler Access' },
    ],
    overview: {
      problem: 'Millions of prospective customers now ask AI assistants for recommendations instead of scrolling Google. If your brand lacks structured entity presence, LLMs either omit you or recommend your competitors.',
      solution: 'Grozix builds a machine-readable entity architecture: feeding LLM search crawlers verified facts, structured citations, authoritative third-party source nodes, and direct answer formats.',
      outcome: 'Your brand is cited by name as the premier recommendation when users ask AI tools for services in your niche.',
    },
    deliverables: [
      { title: 'AI Entity Knowledge Graph Integration', detail: 'Establishing disambiguated Wikidata, schema, and brand entities recognized by modern neural models.' },
      { title: 'LLM Citation Source Authority Audit', detail: 'Identifying the exact source websites ChatGPT, Perplexity, and Gemini query when researching your sector.' },
      { title: 'Contextual Snippet Engineering', detail: 'Drafting concise, fact-dense declarations designed for high probability extraction during RAG (Retrieval-Augmented Generation).' },
      { title: 'Synthetic Query Benchmark Testing', detail: 'Running thousands of simulated prompt variations to track how frequently your brand is named versus rivals.' },
      { title: 'AI Crawler Directive Management', detail: 'Configuring robots.txt rules for GPTBot, ClaudeBot, PerplexityBot, and Google-Extended to maximize indexing.' },
      { title: 'Co-Citation Authority Placement', detail: 'Securing contextual placements on high-weight reference publications that LLMs prioritize in their training data.' },
    ],
    process: [
      { step: '01', title: 'LLM Brand Perception Benchmark', description: 'Testing hundreds of niche queries in ChatGPT, Gemini, and Perplexity to catalog existing citations and hallucinations.' },
      { step: '02', title: 'Knowledge Graph & Entity Schema', description: 'Building linked open data profiles and deep nested JSON-LD so models understand your exact specialties.' },
      { step: '03', title: 'RAG-Optimized Content Engineering', description: 'Structuring web pages with unambiguous factual summaries, authoritative data points, and clear author credentials.' },
      { step: '04', title: 'Multi-Model Monitoring & Defense', description: 'Continuous weekly tracking of AI citation rates, correcting brand misinformation, and protecting entity authority.' },
    ],
    toolsUsed: ['Perplexity Pro Research', 'OpenAI API Evaluation Suite', 'Google Gemini Developer API', 'Schema App', 'Diffbot Knowledge Graph'],
    industryUseCases: {
      healthcare: 'Ensuring ChatGPT and Gemini recommend your clinic when users ask for top-rated specialists, citing medical credentials and verified safety standards.',
      ecommerce: 'Securing product recommendations in LLM gift guides, ingredient safety comparisons, and "best product" prompt answers.',
    },
    faqs: [
      { question: 'What is the difference between traditional SEO and GEO?', answer: 'Traditional SEO optimizes for keyword rank positions in a search engine result page. GEO optimizes for entity authority and citation inclusion inside generative AI summaries where the AI synthesizes an answer.' },
      { question: 'Do people actually buy products through AI search engines?', answer: 'Yes. Conversions from Perplexity and ChatGPT referrals currently show 3x higher intent than standard social clicks, because users query AI models with deep, ready-to-buy decision questions.' },
      { question: 'Can an AI engine hallucinate negative claims about our brand?', answer: 'Yes. Part of our GEO service is hallucination auditing and entity correction, feeding clean public reference data to override false training weights.' },
    ],
  },

  'google-ads': {
    slug: 'google-ads',
    category: 'Paid Media',
    categorySlug: 'paid-media',
    title: 'Google Ads',
    headline: 'High-Intent Google Ads Management & Scaling',
    tagline: 'Capture ready-to-buy customers at the precise moment of intent with Search, Shopping, Performance Max, and YouTube ad campaigns built for high ROAS.',
    kpiStats: [
      { value: '4.2x', label: 'Average Client Blended ROAS' },
      { value: '-32%', label: 'Reduction in Wasted Search Spend' },
      { value: '$12M+', label: 'Annual Google Ad Spend Managed' },
      { value: '100%', label: 'First-Party Conversion Tracking' },
    ],
    overview: {
      problem: 'Most Google Ads accounts hemorrhage budget on broad match keywords, low-intent search terms, poor Smart Bidding signals, and untracked offline conversions.',
      solution: 'Grozix rebuilds accounts around exact buyer intent: negative keyword scrubbers, high-converting copy, clean asset groups in Performance Max, and server-side conversion value rules.',
      outcome: 'Predictable, profitable customer acquisition that scales predictably alongside your business capacity.',
    },
    deliverables: [
      { title: 'Full Google Ads Account Audit', detail: 'Uncovering wasted search terms, fragmented campaign structures, duplicate keywords, and broken conversion tags.' },
      { title: 'Intent-Driven Search Campaigns', detail: 'Targeting high-commercial search phrases with responsive search ads (RSAs) tailored to user pain points.' },
      { title: 'Performance Max (PMax) Architecture', detail: 'Segmenting asset groups by product margins, audience signals, and negative keyword exclusions.' },
      { title: 'Google Shopping & Feed Optimization', detail: 'Optimizing product titles, Google product categories, custom labels, and sale price annotations.' },
      { title: 'Conversion Value Rules & Enhanced Conversions', detail: 'Passing first-party hashed customer data to Google to train Smart Bidding on high-ticket buyers.' },
      { title: 'Remarketing & Demand Gen Campaigns', detail: 'Re-engaging visitors with tailored video and visual placements across YouTube, Gmail, and Discover.' },
    ],
    process: [
      { step: '01', title: 'Diagnostic Account Forensics', description: 'Auditing historical spend data, quality scores, and search terms to eliminate immediate budget leaks.' },
      { step: '02', title: 'Campaign Restructure & Tracking Validation', description: 'Re-architecting single-intent campaign groups and deploying Google Tag Manager Enhanced Conversions.' },
      { step: '03', title: 'Ad Copy & Creative Asset Launch', description: 'Testing high-impact ad copy, sitelink extensions, callouts, and structured snippets.' },
      { step: '04', title: 'Algorithmic Scaling & Bid Governance', description: 'Transitioning to Target ROAS and Target CPA bidding with disciplined weekly budget scaling.' },
    ],
    toolsUsed: ['Google Ads Editor', 'Google Tag Manager', 'Google Analytics 4', 'Optmyzr', 'Looker Studio Reporting'],
    industryUseCases: {
      healthcare: 'Driving high-value patient appointments for elective treatments while staying 100% compliant with Google Personalized Healthcare Advertising rules.',
      ecommerce: 'Scaling Shopping and PMax campaigns by targeting top-selling SKU clusters with aggressive ROAS bid guardrails.',
    },
    faqs: [
      { question: 'What is your minimum monthly ad budget for Google Ads?', answer: 'We typically manage ad spends starting from $2,500/month up to $250,000+/month. For accounts spending under $2,500/month, we recommend our one-time comprehensive Audit & Optimization.' },
      { question: 'Do we own our Google Ads account and historical data?', answer: 'Yes, 100%. You retain full administrative ownership of your account. We never hold your ad data hostage.' },
      { question: 'How do you prevent Google from spending budget on irrelevant search terms?', answer: 'We maintain extensive master negative keyword libraries and perform weekly search term scrubbing to prune unqualified traffic.' },
    ],
  },

  'meta-ads': {
    slug: 'meta-ads',
    category: 'Paid Media',
    categorySlug: 'paid-media',
    title: 'Meta Ads',
    headline: 'High-Converting Meta Ads (Facebook & Instagram)',
    tagline: 'Stop the scroll and convert cold audiences into loyal customers with Advantage+ Shopping, high-performing creative hooks, and automated lead funnels.',
    kpiStats: [
      { value: '3.8x', label: 'Average E-commerce Return on Ad Spend' },
      { value: '$18', label: 'Target Healthcare Patient Lead CPA' },
      { value: '100%', label: 'Conversions API (CAPI) Data Match Rate' },
      { value: '14 Days', label: 'Continuous Creative Testing Cadence' },
    ],
    overview: {
      problem: 'Ad fatigue, signal loss from iOS privacy updates, generic stock creatives, and fragile lead forms lead to high CPAs and stagnant conversion numbers.',
      solution: 'Grozix deploys a proven creative testing matrix: scroll-stopping hooks, high-converting UGC briefs, Meta Conversions API server-side tracking, and broad-targeting Advantage+ scale.',
      outcome: 'A continuous pipeline of high-converting customers arriving daily from Instagram, Facebook, and WhatsApp.',
    },
    deliverables: [
      { title: 'Conversions API (CAPI) Gateway Setup', detail: 'Bypassing ad-blockers and iOS privacy restrictions with robust server-to-server event tracking.' },
      { title: 'Advantage+ Shopping & Catalog Campaigns', detail: 'Dynamic machine-learning delivery showing personalized product recommendations to in-market buyers.' },
      { title: 'High-Performance Creative Strategy', detail: 'Direct-response UGC frameworks, comparison carousels, aesthetic static banners, and 9:16 vertical video.' },
      { title: 'Interactive On-Platform Lead Forms', detail: 'Instant lead ads with qualifying conditional logic and automated CRM synchronization within 60 seconds.' },
      { title: 'Click-to-WhatsApp & Messenger Funnels', detail: 'High-touch conversational sales flows connecting interested prospects directly to your sales team.' },
      { title: 'Creative Testing Sandboxes', detail: 'Scientific isolation testing for hooks, problem statements, and offers before scaling into main budgets.' },
    ],
    process: [
      { step: '01', title: 'Pixel & CAPI Health Check', description: 'Auditing event match quality scores and setting up deduplicated browser + server event tracking.' },
      { step: '02', title: 'Creative Briefing & Asset Production', description: 'Designing direct-response visual assets, video scripts, and copy angles targeting distinct customer avatars.' },
      { step: '03', title: 'Sandbox Creative Testing', description: 'Testing creative variants at controlled spend to identify breakout winning hooks and thumbnails.' },
      { step: '04', title: 'Horizontal & Vertical Scaling', description: 'Consolidating winning creatives into Advantage+ scaling budgets with strict ROAS and CPA boundaries.' },
    ],
    toolsUsed: ['Meta Ads Manager', 'Meta Events Manager & CAPI', 'Triple Whale', 'Canva Pro / Figma', 'Zapier CRM Bridge'],
    industryUseCases: {
      healthcare: 'Generating qualified consultation inquiries for dental implants, aesthetics, and cosmetic procedures with verified consent forms.',
      ecommerce: 'Driving high-volume orders for fashion, beauty, skincare, and home decor using dynamic Advantage+ catalogs and creator UGC.',
    },
    faqs: [
      { question: 'How do you handle iOS 14.5+ tracking loss on Meta?', answer: 'We implement Meta Conversions API (CAPI) with maximum first-party data parameter matching, ensuring 95%+ event match quality and accurate algorithmic attribution.' },
      { question: 'Do you produce the ad creatives or do we need to supply them?', answer: 'We do both: we provide detailed creative briefs, hooks, and storyboards, and we design high-converting static cards and video edits from your raw assets or product photography.' },
      { question: 'How often do you refresh ad creatives to prevent ad fatigue?', answer: 'We operate on a bi-weekly creative sprint, introducing new variations into testing sandboxes before audience fatigue impacts main campaigns.' },
    ],
  },

  'shopify-seo': {
    slug: 'shopify-seo',
    category: 'Ecommerce SEO',
    categorySlug: 'ecommerce-seo',
    title: 'Shopify SEO',
    headline: 'Enterprise Shopify SEO & Collection Architecture',
    tagline: 'Overcome Shopify default URL limitations, eliminate duplicate tag indexation, optimize collection pages, and accelerate organic store sales.',
    kpiStats: [
      { value: '+190%', label: 'Organic Revenue Growth in 6 Months' },
      { value: '100%', label: 'Collection Canonical Hierarchy Cleaned' },
      { value: '< 1.2s', label: 'Shopify Liquid Theme Load Time' },
      { value: '5-Star', label: 'Product Rich Snippet Stars in Google' },
    ],
    overview: {
      problem: 'Shopify defaults create duplicate URLs for products across collections, bloat theme code with unused apps, and make faceted collection filters impossible for Google to crawl cleanly.',
      solution: 'Grozix rewrites Shopify Liquid URL templates, cleans app bloat, implements schema.org Product markup with live stock status, and organizes keyword-driven collection hierarchies.',
      outcome: 'Thousands of high-intent commercial product keywords ranking on Page 1, delivering profitable organic store revenue.',
    },
    deliverables: [
      { title: 'Shopify Canonical & Sub-collection Siloing', detail: 'Fixing the /collections/collection-name/products/product-name duplicate URL issue permanently.' },
      { title: 'Theme Liquid Speed Cleanup', detail: 'Pruning orphan JavaScript tracking tags from deleted apps and compressing imagery without quality loss.' },
      { title: 'Automated Product & Review Schema', detail: 'Embedding rich snippets for pricing, currency, availability, and aggregate star ratings.' },
      { title: 'Collection Page Search Intent Optimization', detail: 'Designing content-rich collection headers and footers that satisfy Google buyer search intent.' },
      { title: 'Blog-to-Product Conversion Funnels', detail: 'Building internal linking bridges from informational guides directly to relevant product collections.' },
      { title: 'Shopify Out-of-Stock Governance', detail: 'Managing 301 redirects and collection visibility for discontinued vs temporarily out-of-stock SKUs.' },
    ],
    process: [
      { step: '01', title: 'Store Architecture & App Audit', description: 'Crawling all products, collections, tags, and theme assets to catalog duplicate content and script bloat.' },
      { step: '02', title: 'Liquid Code & Schema Modifications', description: 'Updating theme template files to output canonical product URLs and nested Product schema.' },
      { step: '03', title: 'Collection Hierarchy Expansion', description: 'Creating targeted sub-collection silos based on customer keyword search demand.' },
      { step: '04', title: 'Internal Link & PageRank Sculpting', description: 'Directing authority from top-performing content directly to high-margin product collections.' },
    ],
    toolsUsed: ['Shopify Liquid Studio', 'Google Search Console', 'Ahrefs Site Explorer', 'Screaming Frog', 'TinyPNG API'],
    industryUseCases: {
      healthcare: 'Optimizing medical-grade skincare, dental hygiene products, and supplement stores on Shopify with full ingredient disclosures.',
      ecommerce: 'Scaling multi-thousand SKU apparel, jewelry, and home decor Shopify stores to Page 1 rankings.',
    },
    faqs: [
      { question: 'Will editing Shopify theme code break our store design or checkout?', answer: 'Never. All code updates are completed on a duplicate theme preview and tested across desktop and mobile checkouts before publishing.' },
      { question: 'How do you handle products that go out of stock frequently?', answer: 'We preserve PageRank by keeping the page live with out-of-stock schema and recommended alternative products, rather than deleting the URL and triggering a 404.' },
      { question: 'Can Shopify really compete with custom headless stores for SEO?', answer: 'Yes. When configured with clean canonical code and fast caching, standard Shopify stores rank identically to headless builds at a fraction of the maintenance cost.' },
    ],
  },
};

/**
 * Returns the subpage data for a given slug, or dynamically generates
 * a complete, polished demo subpage matching the agency aesthetic.
 */
export function getServiceSubpage(slug: string): ServiceSubpageDetail {
  if (SUBPAGES_DATA[slug]) {
    return SUBPAGES_DATA[slug];
  }

  // Format clean human title from slug
  const title = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  let category = 'SEO Services';
  let categorySlug = 'seo';

  if (slug.includes('geo') || slug.includes('ai') || slug.includes('llm') || slug.includes('aeo')) {
    category = 'AI SEO & Generative Search';
    categorySlug = 'ai-seo';
  } else if (slug.includes('google') || slug.includes('search-ads') || slug.includes('pmax')) {
    category = 'Paid Media (Google Ads)';
    categorySlug = 'google-ads';
  } else if (slug.includes('meta') || slug.includes('facebook') || slug.includes('instagram')) {
    category = 'Paid Media (Meta Ads)';
    categorySlug = 'meta-ads';
  } else if (slug.includes('ecommerce') || slug.includes('shopify') || slug.includes('amazon') || slug.includes('woo')) {
    category = 'Ecommerce SEO';
    categorySlug = 'ecommerce-seo';
  } else if (slug.includes('local') || slug.includes('maps') || slug.includes('gbp')) {
    category = 'Local SEO';
    categorySlug = 'local-seo';
  } else if (slug.includes('wordpress') || slug.includes('wix') || slug.includes('squarespace') || slug.includes('magento')) {
    category = 'Platform & CMS SEO';
    categorySlug = 'platform-seo';
  } else if (slug.includes('healthcare') || slug.includes('clinic')) {
    category = 'Industry Practice';
    categorySlug = 'industries';
  }

  return {
    slug,
    category,
    categorySlug,
    title,
    headline: `${title} Architecture & Optimization`,
    tagline: `Full-scope professional deployment of ${title} engineered for maximum ROI, algorithmic authority, and scalable performance.`,
    kpiStats: [
      { value: '+185%', label: 'Average Client Performance Uplift' },
      { value: '48h', label: 'Initial Strategy Roadmap Delivery' },
      { value: '100%', label: 'Strict Platform Policy Compliance' },
      { value: '4.9★', label: 'Dedicated Account SLA Benchmark' },
    ],
    overview: {
      problem: `Without specialized focus, standard approaches to ${title} result in wasted spend, missed search engine visibility, and weak customer attribution.`,
      solution: `Grozix deploys proven data-driven frameworks for ${title}, combining proprietary auditing tools, senior practitioner execution, and transparent weekly reporting.`,
      outcome: `A durable, high-converting customer acquisition engine designed specifically around your target audience and profit margins.`,
    },
    deliverables: [
      { title: `Comprehensive ${title} Diagnostic`, detail: `Complete audit evaluating current configuration, competitor positioning, and untapped growth opportunities.` },
      { title: 'Technical Architecture & Setup', detail: 'End-to-end implementation of tracking, schema structured data, and performance optimization protocols.' },
      { title: 'Execution & Continuous Optimization', detail: 'Hands-on management, split-testing, bid adjustments, or editorial content deployment by senior specialists.' },
      { title: 'Attribution & Executive Reporting', detail: 'Real-time dashboard access with bi-weekly video strategy walkthroughs and clear revenue tracking.' },
      { title: 'Risk & Policy Governance', detail: 'Pre-flight policy verification ensuring zero compliance violations or ad account flags.' },
    ],
    process: [
      { step: '01', title: 'Forensic Audit & Gap Discovery', description: `In-depth analysis of existing assets, analytics data, and industry benchmarks.` },
      { step: '02', title: 'Strategic Roadmap & SLA Alignment', description: `Delivering prioritized action items and key milestones ranked by business value.` },
      { step: '03', title: 'Hands-On Execution & Testing', description: `Executing code, creative, or algorithmic changes directly with quality assurance.` },
      { step: '04', title: 'Scale & Performance Governance', description: `Iterative weekly refinement to compound return on investment over time.` },
    ],
    toolsUsed: ['Google Search Console', 'Ahrefs Enterprise', 'Screaming Frog', 'GA4 Analytics', 'Meta Ads Manager', 'Custom Grozix Diagnostic Engine'],
    industryUseCases: {
      healthcare: `Customized application of ${title} for clinics, aesthetic practices, and medical facilities under strict YMYL standards.`,
      ecommerce: `High-velocity deployment of ${title} for high-growth online stores to drive direct product orders and repeat customer LTV.`,
    },
    faqs: [
      { question: `How does Grozix handle ${title} differently than generic agencies?`, answer: `We don't use junior account coordinators. You work directly with senior growth engineers who execute the code, campaigns, and diagnostics themselves.` },
      { question: `What is the expected timeline for measurable results?`, answer: `Initial technical fixes and quick-win optimizations typically reflect in metrics within 14 to 30 days, with major compounding gains across 60 to 90 days.` },
      { question: `Can this service be customized to our internal tech stack?`, answer: `Yes. We integrate directly with your existing CMS, CRM, and analytics tools without disrupting active operations.` },
    ],
  };
}
