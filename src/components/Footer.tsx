import React from 'react';
import { GrozixLogo } from './GrozixLogo';

interface FooterProps {
  onOpenAuditModal: () => void;
  onNavigateSubpage: (slug: string) => void;
  onNavigateHome: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAuditModal,
  onNavigateSubpage,
  onNavigateHome,
}) => {
  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-200">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <button onClick={onNavigateHome} className="text-left focus:outline-none cursor-pointer">
              <GrozixLogo size="md" light={false} />
            </button>
            <p className="text-slate-600 max-w-sm leading-relaxed text-xs">
              Grozix is a high-performance search and paid media agency. We scale ambitious brands across Google Organic, AI Search engines (GEO/AEO), Google Ads, and Meta Ads.
            </p>
            <div className="pt-1 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <button
                onClick={onOpenAuditModal}
                className="text-xs font-semibold text-[#13617e] hover:text-[#0f4f66] flex items-center gap-1.5 focus:outline-none cursor-pointer"
              >
                <span>Request Free Performance Audit</span>
                <span aria-hidden="true">→</span>
              </button>
              <span className="hidden sm:inline text-slate-300">·</span>
              <button
                onClick={() => onNavigateSubpage('all-services')}
                className="text-xs font-semibold text-slate-700 hover:text-slate-950 cursor-pointer"
              >
                All 27 Services Catalog
              </button>
            </div>
          </div>

          {/* Column 1: Organic & AI Search Services */}
          <div>
            <div className="font-semibold text-slate-900 uppercase tracking-wider text-[11px] mb-3 font-heading">
              Organic & AI Search
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigateSubpage('local-seo')}
                  className="hover:text-[#13617e] transition-colors text-left cursor-pointer"
                >
                  Local & Maps SEO
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSubpage('technical-seo')}
                  className="hover:text-[#13617e] transition-colors text-left cursor-pointer"
                >
                  Technical Site SEO
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSubpage('on-page-seo')}
                  className="hover:text-[#13617e] transition-colors text-left cursor-pointer"
                >
                  On-Page Optimization
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSubpage('shopify-seo')}
                  className="hover:text-[#13617e] transition-colors text-left cursor-pointer"
                >
                  Shopify & Ecommerce SEO
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSubpage('geo')}
                  className="hover:text-[#13617e] transition-colors text-left cursor-pointer"
                >
                  Generative Engine (GEO)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSubpage('aeo')}
                  className="hover:text-[#13617e] transition-colors text-left cursor-pointer"
                >
                  Answer Engine (AEO)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Paid Media Services */}
          <div>
            <div className="font-semibold text-slate-900 uppercase tracking-wider text-[11px] mb-3 font-heading">
              Paid Media
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigateSubpage('google-ads')}
                  className="hover:text-[#13617e] transition-colors text-left cursor-pointer"
                >
                  Google Ads & Search
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSubpage('meta-ads')}
                  className="hover:text-[#13617e] transition-colors text-left cursor-pointer"
                >
                  Meta Ads & Advantage+
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSubpage('seo-audit')}
                  className="hover:text-[#13617e] transition-colors text-left cursor-pointer"
                >
                  Full Account Audits
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSubpage('google-ads')}
                  className="hover:text-[#13617e] transition-colors text-left cursor-pointer"
                >
                  Performance Max (PMax)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSubpage('meta-ads')}
                  className="hover:text-[#13617e] transition-colors text-left cursor-pointer"
                >
                  Lead Gen Ads
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <div className="font-semibold text-slate-900 uppercase tracking-wider text-[11px] mb-3 font-heading">
              Industry Practices
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigateSubpage('healthcare-growth')}
                  className="hover:text-[#13617e] transition-colors text-left cursor-pointer"
                >
                  Healthcare & Medical Clinics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSubpage('ecommerce-growth')}
                  className="hover:text-[#13617e] transition-colors text-left cursor-pointer"
                >
                  E-Commerce DTC Brands
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSubpage('all-services')}
                  className="hover:text-[#13617e] transition-colors text-left text-[#13617e] font-semibold cursor-pointer"
                >
                  View All Services →
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory note & bottom row */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Grozix. All rights reserved. Search, AI optimization and paid media engineered with rigor.
          </div>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <span>Healthcare & Finance YMYL Compliant</span>
            <span aria-hidden="true">·</span>
            <span>E-E-A-T Verified Architecture</span>
            <span aria-hidden="true">·</span>
            <span>HIPAA & Privacy Safe</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
