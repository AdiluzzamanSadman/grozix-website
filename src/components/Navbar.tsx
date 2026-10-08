import React, { useState } from 'react';
import { GrozixLogo } from './GrozixLogo';

interface NavbarProps {
  onOpenAuditModal: () => void;
  onNavigateHome: () => void;
  onNavigateSubpage: (slug: string) => void;
  currentRoute: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAuditModal,
  onNavigateHome,
  onNavigateSubpage,
  currentRoute,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const isHome = currentRoute === 'home';

  const handleNavClick = (sectionId: string) => {
    if (!isHome) {
      onNavigateHome();
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#13617e] text-left"
          aria-label="Grozix Home"
        >
          <GrozixLogo size="md" light={false} />
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <button
            onClick={onNavigateHome}
            className={`hover:text-slate-900 transition-colors duration-150 ${
              isHome ? 'text-slate-950 font-semibold' : ''
            }`}
          >
            Home
          </button>

          {/* Services Menu with Subpage Quick Links */}
          <div className="relative">
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              className="hover:text-slate-900 transition-colors duration-150 flex items-center gap-1 focus:outline-none cursor-pointer"
            >
              <span>Services</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {servicesDropdownOpen && (
              <div
                onMouseLeave={() => setServicesDropdownOpen(false)}
                className="absolute left-0 mt-2 w-72 bg-white border border-slate-200 rounded-xl shadow-xl p-2 z-50 space-y-1 text-xs text-slate-700"
              >
                <div className="px-3 py-1.5 text-[10px] font-mono uppercase text-slate-400 border-b border-slate-100">
                  Featured Services
                </div>
                <button
                  onClick={() => {
                    onNavigateSubpage('technical-seo');
                    setServicesDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors"
                >
                  Technical SEO
                </button>
                <button
                  onClick={() => {
                    onNavigateSubpage('local-seo');
                    setServicesDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors"
                >
                  Local Maps SEO
                </button>
                <button
                  onClick={() => {
                    onNavigateSubpage('geo');
                    setServicesDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors flex items-center justify-between"
                >
                  <span>Generative Engine (GEO)</span>
                  <span className="text-[10px] text-[#13617e] font-mono font-bold bg-teal-50 border border-teal-200/80 px-1 rounded">AI</span>
                </button>
                <button
                  onClick={() => {
                    onNavigateSubpage('shopify-seo');
                    setServicesDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors"
                >
                  Shopify Ecommerce SEO
                </button>
                <button
                  onClick={() => {
                    onNavigateSubpage('google-ads');
                    setServicesDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors"
                >
                  Google Ads (PMax & Search)
                </button>
                <button
                  onClick={() => {
                    onNavigateSubpage('meta-ads');
                    setServicesDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors"
                >
                  Meta Ads (FB/IG Advantage+)
                </button>
                <div className="pt-1 border-t border-slate-100">
                  <button
                    onClick={() => {
                      onNavigateSubpage('all-services');
                      setServicesDropdownOpen(false);
                    }}
                    className="w-full text-center px-3 py-2 rounded-lg bg-teal-50 hover:bg-[#13617e] text-[#13617e] hover:text-white font-medium transition-colors"
                  >
                    View All 27 Services Catalog →
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => onNavigateSubpage('geo')}
            className="hover:text-slate-900 transition-colors duration-150 flex items-center gap-1.5 cursor-pointer"
          >
            <span>AI Search & GEO</span>
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#13617e] bg-teal-50 border border-teal-200/80 px-1.5 py-0.5 rounded">
              New
            </span>
          </button>

          <button
            onClick={() => handleNavClick('paid-media')}
            className="hover:text-slate-900 transition-colors duration-150 cursor-pointer"
          >
            Google & Meta Ads
          </button>

          <button
            onClick={() => handleNavClick('industries')}
            className="hover:text-slate-900 transition-colors duration-150 cursor-pointer"
          >
            Industries
          </button>
        </nav>

        {/* Zone 3: Primary Action CTA */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenAuditModal}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#13617e] hover:bg-[#0f4f66] active:scale-[0.98] transition-all rounded-lg shadow-sm whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 cursor-pointer"
          >
            Request Free Audit
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none cursor-pointer"
            aria-expanded={mobileMenuOpen}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-2 shadow-lg">
          <button
            onClick={() => {
              onNavigateHome();
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-100 rounded-md"
          >
            Agency Homepage
          </button>
          <button
            onClick={() => {
              onNavigateSubpage('all-services');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 text-base font-medium text-[#13617e] hover:bg-teal-50 rounded-md"
          >
            All Services (27 Solutions)
          </button>
          <button
            onClick={() => {
              onNavigateSubpage('geo');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-100 rounded-md"
          >
            AI Search & GEO
          </button>
          <button
            onClick={() => {
              onNavigateSubpage('google-ads');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-100 rounded-md"
          >
            Google Ads
          </button>
          <button
            onClick={() => {
              onNavigateSubpage('meta-ads');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-100 rounded-md"
          >
            Meta Ads
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuditModal();
              }}
              className="w-full py-3 px-4 text-center font-semibold text-xs uppercase tracking-wider text-white bg-[#13617e] hover:bg-[#0f4f66] rounded-lg shadow-sm"
            >
              Request Free Growth Audit
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
