import caseHealthcareClinicImg from '../assets/images/case_healthcare_clinic_1791369645355.jpg';
import caseEcommerceStoreImg from '../assets/images/case_ecommerce_store_1791369634860.jpg';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables?: string[];
  metricsPreview?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  headline: string;
  tagline: string;
  services: ServiceItem[];
}

export const SEO_SERVICES: ServiceItem[] = [
  {
    id: 'local-seo',
    title: 'Local SEO',
    description: 'Get found in local searches and on Google Maps in the areas you serve.',
    deliverables: ['Map Pack Top 3 positioning', 'Local citation audit & sync', 'Geo-targeted landing page hierarchy'],
    metricsPreview: '+184% local footfall & calls',
  },
  {
    id: 'technical-seo',
    title: 'Technical SEO',
    description: 'Fix speed, crawl, indexing and site structure issues so search engines can read your site.',
    deliverables: ['Core Web Vitals optimization', 'Crawl budget & indexation engineering', 'XML sitemap & robots directive overhaul'],
    metricsPreview: '<0.8s LCP page load speed',
  },
  {
    id: 'on-page-seo',
    title: 'On-Page SEO',
    description: 'Improve titles, headings, content and internal links on every key page.',
    deliverables: ['Intent-matched title & meta tags', 'Contextual topic clustering', 'Semantic hierarchy & internal PageRank sculpting'],
    metricsPreview: '+92% impressions per page',
  },
  {
    id: 'seo-audit',
    title: 'SEO Audit',
    description: 'A full review of your site with a clear report and a list of fixes in order of priority.',
    deliverables: ['120-point technical checklist', 'Priority score matrix (Critical to Low)', 'Developer-ready implementation roadmap'],
    metricsPreview: '48-hour executive report',
  },
  {
    id: 'keyword-research',
    title: 'Keyword Research',
    description: 'Find the terms your buyers search and map each one to the right page.',
    deliverables: ['Commercial intent mapping', 'Competitor keyword gap analysis', 'Search volume & SERP difficulty scoring'],
    metricsPreview: '500+ mapped high-intent terms',
  },
  {
    id: 'content-seo',
    title: 'Content SEO',
    description: 'Plan and write content that ranks and answers the questions your buyers ask.',
    deliverables: ['Editorial calendar based on search gaps', 'Information-dense, E-E-A-T compliant articles', 'Featured snippet optimization'],
    metricsPreview: '3.4x average session duration',
  },
  {
    id: 'link-building',
    title: 'Link Building',
    description: 'Earn quality links from relevant sites to build trust and authority.',
    deliverables: ['Manual outreach to niche publications', 'Digital PR & data-led asset placement', 'Zero-spam white-hat editorial mentions'],
    metricsPreview: 'DR 50+ contextual backlinks',
  },
  {
    id: 'international-seo',
    title: 'International SEO',
    description: 'Reach buyers in other countries and languages with the right site setup.',
    deliverables: ['Hreflang code implementation', 'ccTLD vs subfolder architecture', 'Geo-targeting indexation in regional search engines'],
    metricsPreview: 'Multi-territory indexation',
  },
];

export const AI_SEO_SERVICES: ServiceItem[] = [
  {
    id: 'ai-seo',
    title: 'AI SEO',
    description: 'Make your brand visible in AI-powered search as well as on Google.',
    deliverables: ['Cross-engine brand footprint analysis', 'Knowledge graph entity synchronization', 'Search Generative Experience (SGE) optimization'],
    metricsPreview: 'Direct AI recommendation slots',
  },
  {
    id: 'geo',
    title: 'Generative Engine Optimization (GEO)',
    description: 'Get your brand cited in answers from ChatGPT, Gemini, Perplexity and other AI tools.',
    deliverables: ['Citation source authority auditing', 'Contextual snippet engineering for LLMs', 'Third-party trust node amplification'],
    metricsPreview: 'Ranked in ChatGPT & Gemini citations',
  },
  {
    id: 'aeo',
    title: 'Answer Engine Optimization (AEO)',
    description: 'Structure content so search engines and voice assistants can use it as a direct answer.',
    deliverables: ['Concise Q&A direct answering protocols', 'Schema.org JSON-LD Answer markup', 'Voice assistant query alignment'],
    metricsPreview: '+220% snippet extraction rate',
  },
  {
    id: 'ai-seo-audit',
    title: 'AI SEO Audit',
    description: 'See how AI tools find, describe and cite your brand today, with a plan to improve it.',
    deliverables: ['LLM brand sentiment & accuracy report', 'Missing source entity identification', 'Actionable hallucination correction roadmap'],
    metricsPreview: 'Full multi-LLM benchmark report',
  },
  {
    id: 'ai-technical-seo',
    title: 'AI Technical SEO',
    description: 'Set up schema, crawler access and site structure that AI systems can read with ease.',
    deliverables: ['GPTBot, ClaudeBot, Perplexity crawler permission rules', 'Custom nested JSON-LD schema', 'Machine-readable content structure'],
    metricsPreview: '100% verified AI crawler indexing',
  },
  {
    id: 'llm-search-optimization',
    title: 'LLM / AI Search Optimization',
    description: 'Shape how large language models understand and mention your brand.',
    deliverables: ['Vector semantic relevance tuning', 'Corpus co-citation engineering', 'Entity association reinforcement'],
    metricsPreview: 'Consistent brand co-mention rate',
  },
];

export const LOCAL_SEO_DEEP: ServiceItem[] = [
  {
    id: 'monthly-local',
    title: 'Monthly Local SEO Services',
    description: 'Ongoing local SEO work for your business, with monthly reporting.',
    deliverables: ['Bi-weekly Google updates & review management', 'Local rank tracking across grid coordinates', 'Monthly video walkthroughs'],
  },
  {
    id: 'gbp-optimization',
    title: 'Google Business Profile Optimization',
    description: 'Set up and improve your profile to win more calls, visits and reviews.',
    deliverables: ['Primary & secondary category fine-tuning', 'High-converting services menu setup', 'Geotagged photographic portfolio'],
  },
  {
    id: 'maps-seo',
    title: 'Google Maps SEO',
    description: 'Rank higher in the map pack when people search near you.',
    deliverables: ['Proximity and prominence optimization', 'Local review velocity strategy', 'Geographic centroid authority expansion'],
  },
  {
    id: 'citations',
    title: 'Local Citation Building',
    description: 'List your business on trusted directories with the same name, address and phone details.',
    deliverables: ['NAP consistency audit across 60+ aggregators', 'Industry-specific niche directory listings', 'Duplicate listing suppression'],
  },
  {
    id: 'local-keywords',
    title: 'Local Keyword Research',
    description: 'Find the local terms people search in each city or area you serve.',
    deliverables: ['Sub-district and town intent mapping', 'Service + location combinatorial analysis', 'Hyper-local search demand modeling'],
  },
  {
    id: 'local-content',
    title: 'Local Content SEO',
    description: 'Create location and service area pages that rank in each market.',
    deliverables: ['Unique non-templated location pages', 'Neighborhood case studies & embedded maps', 'Localized schema markup'],
  },
];

export const ECOMMERCE_SEO_DEEP: ServiceItem[] = [
  {
    id: 'monthly-ecom',
    title: 'Monthly Ecommerce SEO',
    description: 'Ongoing SEO for your online store, with monthly reporting.',
    deliverables: ['Continuous category rank optimization', 'Revenue attribution by organic landing page', 'Product feed & rich snippet maintenance'],
  },
  {
    id: 'shopify-seo',
    title: 'Shopify SEO',
    description: 'Work around common Shopify SEO limits and grow traffic to product and collection pages.',
    deliverables: ['Collection tag pagination & canonical resolution', 'Shopify liquid speed optimization', 'App bloat removal & clean structured data'],
  },
  {
    id: 'woocommerce-seo',
    title: 'WooCommerce SEO',
    description: 'Improve speed, structure and product pages on WooCommerce stores.',
    deliverables: ['Database query & object caching setup', 'Facet & filter crawl barrier removal', 'WooCommerce product schema validation'],
  },
  {
    id: 'amazon-seo',
    title: 'Amazon SEO',
    description: 'Optimize listings so your products rank higher in Amazon search.',
    deliverables: ['A9/A10 algorithm keyword indexing', 'Backend search terms optimization', 'Title, bullet, and A+ content enhancement'],
  },
  {
    id: 'etsy-seo',
    title: 'Etsy SEO',
    description: 'Improve titles, tags and listings so buyers find your shop on Etsy.',
    deliverables: ['13-tag combinatorial matching', 'Attribute optimization', 'Shop quality score enhancement'],
  },
  {
    id: 'bigcommerce-seo',
    title: 'BigCommerce SEO',
    description: 'Set up and improve SEO on BigCommerce stores.',
    deliverables: ['Native URL redirect governance', 'AMP catalog validation', 'Enterprise faceted search optimization'],
  },
];

export const PLATFORM_SEO: ServiceItem[] = [
  {
    id: 'wordpress-seo',
    title: 'WordPress SEO',
    description: 'Get the most from WordPress with clean setup, fast pages and the right plugins.',
    deliverables: ['Lightweight architecture config', 'Yoast/RankMath expert setup', 'Custom schema injection without plugin bloat'],
  },
  {
    id: 'wix-seo',
    title: 'Wix SEO',
    description: 'Fix the common SEO gaps on Wix sites and help your pages rank.',
    deliverables: ['Client-side rendering optimization', 'URL structure clean-up', 'Custom canonical and 301 redirect management'],
  },
  {
    id: 'squarespace-seo',
    title: 'Squarespace SEO',
    description: 'Improve structure, speed and on-page SEO on Squarespace sites.',
    deliverables: ['Asset compression & script deferral', 'Collection page metadata enhancement', 'Header tag hierarchy correction'],
  },
  {
    id: 'magento-seo',
    title: 'Magento SEO',
    description: 'Handle large catalogs, filters and duplicate pages on Magento stores.',
    deliverables: ['Layered navigation parameter handling', 'Multi-store view hreflang sync', 'Robots.txt crawl budget conservation'],
  },
];

export const GOOGLE_ADS_SERVICES: ServiceItem[] = [
  {
    id: 'gads-audit',
    title: 'Audit & Optimization',
    description: 'Full account audit with a report and recommendations, plus we make the fixes.',
    deliverables: ['Wasted ad spend identification', 'Quality score & bid strategy audit', 'Conversion tracking tag verification'],
    metricsPreview: 'Avg 28% budget recaptured',
  },
  {
    id: 'gads-management',
    title: 'Monthly Management',
    description: 'Ongoing management of the account, with monthly reporting.',
    deliverables: ['Daily negative keyword pruning', 'Smart Bidding value rules tuning', 'Weekly KPI dashboard & transparency reports'],
    metricsPreview: '4.2x target ROAS sustained',
  },
  {
    id: 'gads-scale',
    title: 'Launch to Scale Ads',
    description: 'We build new campaigns, launch them, and grow them as results come in.',
    deliverables: ['Full funnel structure architecture', 'High-converting ad copy & extensions', 'Controlled horizontal & vertical scaling'],
    metricsPreview: 'Predictable CAC reduction',
  },
];

export const GOOGLE_ADS_CAMPAIGNS = [
  { name: 'Search Ads', detail: 'High-intent buyer capture when customers look for solutions right now' },
  { name: 'Shopping Ads', detail: 'Visual product inventory ads with high conversion rates directly on Google SERP' },
  { name: 'Performance Max (PMax)', detail: 'Algorithmic multi-channel asset groups across Search, YouTube, Display, and Maps' },
  { name: 'Demand Gen', detail: 'Immersive visual and video formats across YouTube Shorts, Discover, and Gmail' },
  { name: 'YouTube Ads', detail: 'Targeted in-stream and non-skippable video driving brand recall and conversions' },
  { name: 'Display Ads', detail: 'Contextual banner placements across 3M+ high-authority publisher websites' },
  { name: 'Remarketing', detail: 'Tailored sequential re-engagement for site visitors who did not yet convert' },
];

export const META_ADS_SERVICES: ServiceItem[] = [
  {
    id: 'meta-audit',
    title: 'Audit & Optimization',
    description: 'Full account audit with a report and recommendations, plus we make the fixes.',
    deliverables: ['Conversions API (CAPI) & pixel audit', 'Ad creative fatigue analysis', 'Audience overlap reduction'],
    metricsPreview: 'Instant leak elimination',
  },
  {
    id: 'meta-management',
    title: 'Monthly Management',
    description: 'Ongoing management of the account, with monthly reporting.',
    deliverables: ['Creative asset testing cycles', 'Cost-per-acquisition (CPA) stabilization', 'In-depth cohort ROAS reporting'],
    metricsPreview: 'Consistent lead / sale flow',
  },
  {
    id: 'meta-scale',
    title: 'Launch to Scale Ads',
    description: 'We build new campaigns, launch them, and grow them as results come in.',
    deliverables: ['Broad targeting & ASC+ scaling framework', 'High-impact hook & UGC creative briefs', 'Scaling without ROAS degradation'],
    metricsPreview: '3x-5x monthly budget scaling',
  },
];

export const META_ADS_CAMPAIGNS = [
  { name: 'Lead Generation Ads', detail: 'Instant on-platform interactive forms with high completion rates and CRM sync' },
  { name: 'Sales & Conversion Ads', detail: 'Direct purchase funnels optimized for high average order value (AOV)' },
  { name: 'Advantage+ Shopping & Catalog Ads', detail: 'AI-driven dynamic catalog delivery matching user intent on Instagram & Facebook' },
  { name: 'Retargeting Ads', detail: 'Precision reminder ads showing the exact items viewed or abandoned in carts' },
  { name: 'Click-to-WhatsApp & Messenger Ads', detail: 'Direct one-on-one conversational sales channels for high-touch inquiries' },
  { name: 'Awareness & Reach Ads', detail: 'Maximizing targeted local or national brand saturation at optimal CPMs' },
  { name: 'Video & Reels Ads', detail: 'Native vertical 9:16 video creative built to stop the scroll in under 2 seconds' },
  { name: 'App Install Ads', detail: 'Deep-linked mobile app installs with post-install event tracking' },
];

export interface IndustryItem {
  id: string;
  name: string;
  priority: 'primary' | 'secondary';
  status: 'Start here' | 'Add later';
  examples: string;
  seoFocus: string;
  adsPlatform: string;
  complianceNote?: string;
  image?: string;
  caseMetric?: string;
  headlineSummary: string;
}

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    priority: 'primary',
    status: 'Start here',
    examples: 'Dental clinics, aesthetic and skin clinics, general clinics, diagnostic centers',
    seoFocus: 'Local SEO + AI SEO (GBP, Maps, Doctor Schema)',
    adsPlatform: 'Google + Meta Ads (High-intent search & patient booking)',
    complianceNote: 'Strict YMYL & Medical Ad Compliance: Expert doctor author profiles, verified claims, and HIPAA-safe tracking.',
    image: caseHealthcareClinicImg,
    caseMetric: '+310% qualified patient bookings in 4 months',
    headlineSummary: 'Dominating local maps and patient trust while staying 100% Google YMYL & Meta medical policy compliant.',
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    priority: 'primary',
    status: 'Start here',
    examples: 'Shopify stores, beauty & skincare, fashion, supplements, home decor, jewelry',
    seoFocus: 'Ecommerce SEO + Technical (Collection architecture, Product schema, LLM citations)',
    adsPlatform: 'Google + Meta Ads (PMax, Advantage+ Shopping, Dynamic Catalogs)',
    complianceNote: 'Supplement & health claims require rigorous ingredient disclosures and FTC/ad policy compliance.',
    image: caseEcommerceStoreImg,
    caseMetric: '4.8x Blended ROAS across $1.2M ad spend',
    headlineSummary: 'Technical storefront architecture paired with aggressive Advantage+ and PMax catalog acquisition.',
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    priority: 'secondary',
    status: 'Add later',
    examples: 'Law firms, accountants and tax advisers, finance, consultants',
    seoFocus: 'Local SEO + Content (Authoritative guides, practice area hubs)',
    adsPlatform: 'Google first (High-intent search for immediate counsel)',
    complianceNote: 'Finance and legal fall under YMYL standards and bar association advertising guidelines.',
    headlineSummary: 'High-ticket inbound client acquisition with structured case result proof and consultation funnels.',
  },
  {
    id: 'home-services',
    name: 'Home Services',
    priority: 'secondary',
    status: 'Add later',
    examples: 'HVAC, plumbing, electricians, cleaning, solar',
    seoFocus: 'Local SEO (Emergency service radius, Google Maps #1 pack)',
    adsPlatform: 'Google first (Local Services Ads & Emergency Search)',
    headlineSummary: 'Capture emergency calls first with dominant local map placement and instant click-to-call search campaigns.',
  },
  {
    id: 'hospitality-travel',
    name: 'Hospitality & Travel',
    priority: 'secondary',
    status: 'Add later',
    examples: 'Hotels, travel agencies, tour operators, restaurants',
    seoFocus: 'Local SEO + Content (Destinations, localized experience hubs)',
    adsPlatform: 'Google + Meta (Seasonal booking campaigns & visual travel reels)',
    headlineSummary: 'Visual experiential storytelling on Instagram coupled with high-intent search capture for direct bookings.',
  },
  {
    id: 'saas',
    name: 'SaaS & Tech',
    priority: 'secondary',
    status: 'Add later',
    examples: 'B2B software, startups, online platforms',
    seoFocus: 'Content SEO + AI SEO (GEO citations, solution comparison matrices)',
    adsPlatform: 'Google + Meta (Problem-aware search & retargeting demo ads)',
    headlineSummary: 'Engineered for generative engine discovery on ChatGPT and high-converting B2B demo acquisition.',
  },
  {
    id: 'education',
    name: 'Education & Training',
    priority: 'secondary',
    status: 'Add later',
    examples: 'Study abroad, coaching institutes, test prep, online courses',
    seoFocus: 'Content SEO + Local (Curriculum rankings, enrollment hubs)',
    adsPlatform: 'Meta first (Lead gen ads for course counseling & webinars)',
    headlineSummary: 'High-volume qualified student inquiries through interactive Lead Forms and structured course authority content.',
  },
];
