import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { ServicesExplorer } from './ServicesExplorer';
import { AiGeoShowcase } from './AiGeoShowcase';
import { PaidMediaSection } from './PaidMediaSection';
import { IndustriesFocus } from './IndustriesFocus';
import { ComplianceTrust } from './ComplianceTrust';
import { ContactSection } from './ContactSection';
import { Footer } from './Footer';
import { ServicesHub } from './ServicesHub';
import { ServiceSubpage } from './ServiceSubpage';
import { GrozixLogo } from './GrozixLogo';
import { DownloadExportModal } from './DownloadExportModal';
import {
  downloadStandaloneHtmlFile,
  downloadCompleteWebsiteZip,
  copyStandaloneHtmlToClipboard,
} from '../utils/downloadHelpers';

interface ScreenMeta {
  id: string;
  number: string;
  title: string;
  type: string;
  dimensions: string;
}

export const FigmaCanvasView: React.FC = () => {
  const [activeFrame, setActiveFrame] = useState<string>('screen-01');
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);
  const [isZipping, setIsZipping] = useState<boolean>(false);
  const [zipProgress, setZipProgress] = useState<number>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const screens: ScreenMeta[] = [
    { id: 'screen-01', number: 'Screen 01', title: 'Agency Homepage (Full Landing & Proof)', type: 'Landing Page', dimensions: '1440 × AUTO' },
    { id: 'screen-02', number: 'Screen 02', title: 'Services Hub (27-Service Catalog Directory)', type: 'Directory Page', dimensions: '1440 × AUTO' },
    { id: 'screen-03', number: 'Screen 03', title: 'Technical SEO & Core Web Vitals', type: 'Technical SEO', dimensions: '1440 × AUTO' },
    { id: 'screen-04', number: 'Screen 04', title: 'Local SEO & Google Maps 3-Pack', type: 'Local SEO', dimensions: '1440 × AUTO' },
    { id: 'screen-05', number: 'Screen 05', title: 'Generative Engine Optimization (GEO)', type: 'AI Search & GEO', dimensions: '1440 × AUTO' },
    { id: 'screen-06', number: 'Screen 06', title: 'Google Ads (Search, Shopping, PMax, YouTube)', type: 'Google Ads', dimensions: '1440 × AUTO' },
    { id: 'screen-07', number: 'Screen 07', title: 'Meta Ads (Facebook & Instagram Advantage+)', type: 'Meta Ads', dimensions: '1440 × AUTO' },
    { id: 'screen-08', number: 'Screen 08', title: 'Enterprise Shopify SEO Architecture', type: 'Shopify SEO', dimensions: '1440 × AUTO' },
    { id: 'screen-09', number: 'Screen 09', title: 'Healthcare & Clinic Practice (YMYL)', type: 'Industry Vertical', dimensions: '1440 × AUTO' },
    { id: 'screen-10', number: 'Screen 10', title: 'E-Commerce DTC Scaling Practice', type: 'Industry Vertical', dimensions: '1440 × AUTO' },
    { id: 'screen-11', number: 'Screen 11', title: '48-Hour Growth Audit Dialog & Lead Form', type: 'Component Dialog', dimensions: '800 × AUTO' },
  ];

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const scrollToScreen = (id: string) => {
    setActiveFrame(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownloadStandaloneHtml = () => {
    try {
      downloadStandaloneHtmlFile('grozix-figma-canvas.html');
      showToast('✓ "grozix-figma-canvas.html" downloaded successfully! Ready for Figma HTML-to-Design.');
    } catch (err) {
      console.error(err);
      showToast('Failed to trigger download. Opening Export Center...');
      setIsExportModalOpen(true);
    }
  };

  const handleDownloadZip = async () => {
    try {
      setIsZipping(true);
      setZipProgress(10);
      await downloadCompleteWebsiteZip((percent) => {
        setZipProgress(percent);
      });
      setIsZipping(false);
      showToast('✓ "grozix-full-website-project.zip" downloaded! (All 23 components & configs)');
    } catch (err) {
      setIsZipping(false);
      console.error(err);
      showToast('Failed to pack ZIP. Opening Export Center...');
      setIsExportModalOpen(true);
    }
  };

  const handleCopyHtml = async () => {
    const success = await copyStandaloneHtmlToClipboard();
    if (success) {
      showToast('✓ Standalone HTML copied to clipboard (820 lines)! Ready to paste into Figma or file.');
    } else {
      showToast('Clipboard blocked. Please use the Direct Download button.');
    }
  };

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-slate-100 font-sans selection:bg-[#13617e] selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[1000] bg-[#13617e] text-white px-5 py-3 rounded-xl shadow-2xl border border-cyan-400 font-sans text-xs md:text-sm flex items-center gap-2.5 animate-bounce">
          <span className="font-bold text-cyan-200">Export:</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ========================================================================= */}
      {/* FIGMA CANVAS HEADER / TOOLBAR (Sticky #2C2C2C) */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-50 bg-[#2C2C2C]/95 backdrop-blur-md border-b border-[#383838] px-4 py-3 shadow-2xl">
        <div className="max-w-[1720px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Left: Canvas Branding */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#13617e] flex items-center justify-center font-bold text-white text-xs font-mono shadow-sm">
              FIG
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-white font-mono tracking-wider uppercase">
                  Grozix UI Design Canvas
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#383838] text-[10px] font-mono text-cyan-300 border border-[#484848]">
                  11 Artboards (#1E1E1E Background)
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                All webpages side-by-side in labeled containers optimized for Figma HTML-to-Design import.
              </p>
            </div>
          </div>

          {/* Right: Direct Download & Export Action Buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Direct HTML Download */}
            <button
              onClick={handleDownloadStandaloneHtml}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#13617e] hover:bg-[#0f4f66] rounded-lg transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
              title="Download 100% self-contained HTML file with embedded CSS and all 11 screens"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download .HTML File</span>
            </button>

            {/* Direct ZIP Download */}
            <button
              onClick={handleDownloadZip}
              disabled={isZipping}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 rounded-lg transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
              title="Download entire project source code (React, TSX, CSS, components, configs) in a ZIP"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <span>{isZipping ? `Zipping (${zipProgress}%)...` : 'Download Full .ZIP'}</span>
            </button>

            {/* Copy Raw HTML */}
            <button
              onClick={handleCopyHtml}
              className="px-3 py-1.5 text-xs font-medium text-slate-200 bg-[#383838] hover:bg-[#484848] rounded-lg transition border border-[#484848] flex items-center gap-1.5 cursor-pointer"
              title="Copy the complete 820-line HTML to clipboard"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              <span>Copy HTML</span>
            </button>

            {/* Export Center Modal Opener */}
            <button
              onClick={() => setIsExportModalOpen(true)}
              className="px-3 py-1.5 text-xs font-bold text-cyan-300 bg-[#222222] hover:bg-[#2e2e2e] rounded-lg transition border border-cyan-500/50 flex items-center gap-1.5 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <span>Export Hub</span>
            </button>
          </div>
        </div>

        {/* Quick Screen Navigation Chips */}
        <div className="max-w-[1720px] mx-auto mt-2.5 pt-2 border-t border-[#383838] flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px]">
          <span className="text-slate-400 shrink-0 font-mono text-[10px] uppercase mr-1">Artboards:</span>
          {screens.map((screen) => (
            <button
              key={screen.id}
              onClick={() => scrollToScreen(screen.id)}
              className={`px-2.5 py-1 rounded-md font-mono shrink-0 transition-colors cursor-pointer border ${
                activeFrame === screen.id
                  ? 'bg-[#13617e] text-white border-teal-400/50 shadow-sm'
                  : 'bg-[#242424] text-slate-300 hover:text-white border-[#383838] hover:bg-[#333]'
              }`}
            >
              <span className="text-cyan-300 font-bold mr-1">{screen.number}</span>
              <span className="text-slate-300">{screen.title.split('(')[0].trim()}</span>
            </button>
          ))}
        </div>
      </header>

      {/* Prominent Download Banner */}
      <div className="bg-gradient-to-r from-[#13617e]/40 via-[#204958]/50 to-[#13617e]/40 border-b border-[#2da1ca]/40 px-4 py-3">
        <div className="max-w-[1720px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5 text-slate-200">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            <span>
              <strong>Website Download Ready:</strong> All 11 artboards are packaged into a single standalone HTML file (53 KB) with embedded CSS, plus a full 23-file React project ZIP.
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleDownloadStandaloneHtml}
              className="px-3 py-1 bg-[#13617e] hover:bg-[#0f4f66] text-white font-medium rounded text-[11px] transition shadow cursor-pointer"
            >
              Download .HTML
            </button>
            <button
              onClick={handleDownloadZip}
              className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded text-[11px] transition shadow cursor-pointer"
            >
              Download Full .ZIP
            </button>
            <button
              onClick={() => setIsExportModalOpen(true)}
              className="px-3 py-1 bg-[#2C2C2C] hover:bg-[#3a3a3a] text-cyan-300 font-medium rounded text-[11px] border border-[#444] transition cursor-pointer"
            >
              All Options →
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* FIGMA DESIGN CANVAS AREA (Background #1E1E1E) */}
      {/* ========================================================================= */}
      <main className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-28">

        {/* ======================================================================= */}
        {/* ARTBOARD 01: HOMEPAGE */}
        {/* ======================================================================= */}
        <section id="screen-01" className="figma-artboard-container">
          <div className="flex items-center justify-between mb-3 px-1 text-slate-300">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[#13617e] text-white font-mono font-bold text-xs tracking-wider">
                Screen 01
              </span>
              <h2 className="text-sm font-bold text-white font-heading">
                Homepage — Full Agency Architecture, Proof & Services
              </h2>
            </div>
            <span className="text-xs font-mono text-cyan-300 bg-[#282828] px-2.5 py-1 rounded border border-[#3a3a3a]">
              1440 × AUTO (Desktop)
            </span>
          </div>

          {/* Artboard Webpage Box (White Light Theme Design) */}
          <div className="w-full max-w-[1440px] mx-auto rounded-xl overflow-hidden bg-white text-slate-900 border border-slate-300 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]">
            <Navbar
              onOpenAuditModal={() => {}}
              onNavigateHome={() => scrollToScreen('screen-01')}
              onNavigateSubpage={(slug) => scrollToScreen(`screen-${slug}`)}
              currentRoute="home"
            />
            <Hero onOpenAuditModal={() => scrollToScreen('screen-11')} />
            <ServicesExplorer
              onSelectService={() => scrollToScreen('screen-11')}
              onNavigateSubpage={(slug) => scrollToScreen(`screen-${slug}`)}
            />
            <AiGeoShowcase onOpenAuditModal={() => scrollToScreen('screen-11')} />
            <PaidMediaSection onOpenAuditModal={() => scrollToScreen('screen-11')} />
            <IndustriesFocus onOpenAuditModal={() => scrollToScreen('screen-11')} />
            <ComplianceTrust />
            <ContactSection />
            <Footer
              onOpenAuditModal={() => scrollToScreen('screen-11')}
              onNavigateSubpage={(slug) => scrollToScreen(`screen-${slug}`)}
              onNavigateHome={() => scrollToScreen('screen-01')}
            />
          </div>
        </section>

        {/* ======================================================================= */}
        {/* ARTBOARD 02: SERVICES HUB DIRECTORY */}
        {/* ======================================================================= */}
        <section id="screen-02" className="figma-artboard-container">
          <div className="flex items-center justify-between mb-3 px-1 text-slate-300">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[#13617e] text-white font-mono font-bold text-xs tracking-wider">
                Screen 02
              </span>
              <h2 className="text-sm font-bold text-white font-heading">
                Services Directory Hub — 27-Service Taxonomy & Category Filtering
              </h2>
            </div>
            <span className="text-xs font-mono text-cyan-300 bg-[#282828] px-2.5 py-1 rounded border border-[#3a3a3a]">
              1440 × AUTO (Desktop)
            </span>
          </div>

          <div className="w-full max-w-[1440px] mx-auto rounded-xl overflow-hidden bg-white text-slate-900 border border-slate-300 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]">
            <Navbar
              onOpenAuditModal={() => {}}
              onNavigateHome={() => scrollToScreen('screen-01')}
              onNavigateSubpage={(slug) => scrollToScreen(`screen-${slug}`)}
              currentRoute="all-services"
            />
            <ServicesHub
              onNavigateSubpage={(slug) => scrollToScreen(`screen-${slug}`)}
              onNavigateHome={() => scrollToScreen('screen-01')}
              onOpenAuditModal={() => scrollToScreen('screen-11')}
            />
            <Footer
              onOpenAuditModal={() => scrollToScreen('screen-11')}
              onNavigateSubpage={(slug) => scrollToScreen(`screen-${slug}`)}
              onNavigateHome={() => scrollToScreen('screen-01')}
            />
          </div>
        </section>

        {/* ======================================================================= */}
        {/* ARTBOARD 03: TECHNICAL SEO SUBPAGE */}
        {/* ======================================================================= */}
        <section id="screen-03" className="figma-artboard-container">
          <div className="flex items-center justify-between mb-3 px-1 text-slate-300">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[#13617e] text-white font-mono font-bold text-xs tracking-wider">
                Screen 03
              </span>
              <h2 className="text-sm font-bold text-white font-heading">
                Technical SEO & Core Web Vitals Engineering
              </h2>
            </div>
            <span className="text-xs font-mono text-cyan-300 bg-[#282828] px-2.5 py-1 rounded border border-[#3a3a3a]">
              1440 × AUTO (Desktop)
            </span>
          </div>

          <div className="w-full max-w-[1440px] mx-auto rounded-xl overflow-hidden bg-white text-slate-900 border border-slate-300 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]">
            <Navbar
              onOpenAuditModal={() => {}}
              onNavigateHome={() => scrollToScreen('screen-01')}
              onNavigateSubpage={(slug) => scrollToScreen(`screen-${slug}`)}
              currentRoute="subpage"
            />
            <ServiceSubpage
              slug="technical-seo"
              onNavigateHome={() => scrollToScreen('screen-01')}
              onNavigateSubpage={(slug) => scrollToScreen(`screen-${slug}`)}
              onOpenAuditModal={() => scrollToScreen('screen-11')}
            />
            <Footer
              onOpenAuditModal={() => scrollToScreen('screen-11')}
              onNavigateSubpage={(slug) => scrollToScreen(`screen-${slug}`)}
              onNavigateHome={() => scrollToScreen('screen-01')}
            />
          </div>
        </section>

        {/* ======================================================================= */}
        {/* ARTBOARD 04: LOCAL SEO SUBPAGE */}
        {/* ======================================================================= */}
        <section id="screen-04" className="figma-artboard-container">
          <div className="flex items-center justify-between mb-3 px-1 text-slate-300">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[#13617e] text-white font-mono font-bold text-xs tracking-wider">
                Screen 04
              </span>
              <h2 className="text-sm font-bold text-white font-heading">
                Local SEO & Google Maps 3-Pack Domination
              </h2>
            </div>
            <span className="text-xs font-mono text-cyan-300 bg-[#282828] px-2.5 py-1 rounded border border-[#3a3a3a]">
              1440 × AUTO (Desktop)
            </span>
          </div>

          <div className="w-full max-w-[1440px] mx-auto rounded-xl overflow-hidden bg-white text-slate-900 border border-slate-300 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]">
            <Navbar
              onOpenAuditModal={() => {}}
              onNavigateHome={() => scrollToScreen('screen-01')}
              onNavigateSubpage={(slug) => scrollToScreen(`screen-${slug}`)}
              currentRoute="subpage"
            />
            <ServiceSubpage
              slug="local-seo"
              onNavigateHome={() => scrollToScreen('screen-01')}
              onNavigateSubpage={(slug) => scrollToScreen(`screen-${slug}`)}
              onOpenAuditModal={() => scrollToScreen('screen-11')}
            />
            <Footer
              onOpenAuditModal={() => scrollToScreen('screen-11')}
              onNavigateSubpage={(slug) => scrollToScreen(`screen-${slug}`)}
              onNavigateHome={() => scrollToScreen('screen-01')}
            />
          </div>
        </section>

        {/* ======================================================================= */}
        {/* ARTBOARD 05: GENERATIVE ENGINE OPTIMIZATION (GEO) */}
        {/* ======================================================================= */}
        <section id="screen-05" className="figma-artboard-container">
          <div className="flex items-center justify-between mb-3 px-1 text-slate-300">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[#13617e] text-white font-mono font-bold text-xs tracking-wider">
                Screen 05
              </span>
              <h2 className="text-sm font-bold text-white font-heading">
                Generative Engine Optimization (GEO) for ChatGPT & Gemini
              </h2>
            </div>
            <span className="text-xs font-mono text-cyan-300 bg-[#282828] px-2.5 py-1 rounded border border-[#3a3a3a]">
              1440 × AUTO (Desktop)
            </span>
          </div>

          <div className="w-full max-w-[1440px] mx-auto rounded-xl overflow-hidden bg-white text-slate-900 border border-slate-300 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]">
            <Navbar
              onOpenAuditModal={() => {}}
              onNavigateHome={() => scrollToScreen('screen-01')}
              onNavigateSubpage={(slug) => scrollToScreen(`screen-${slug}`)}
              currentRoute="subpage"
            />
            <ServiceSubpage
              slug="geo"
              onNavigateHome={() => scrollToScreen('screen-01')}
              onNavigateSubpage={(slug) => scrollToScreen(`screen-${slug}`)}
              onOpenAuditModal={() => scrollToScreen('screen-11')}
            />
            <Footer
              onOpenAuditModal={() => scrollToScreen('screen-11')}
              onNavigateSubpage={(slug) => scrollToScreen(`screen-${slug}`)}
              onNavigateHome={() => scrollToScreen('screen-01')}
            />
          </div>
        </section>

        {/* ======================================================================= */}
        {/* ARTBOARD 06: GOOGLE ADS */}
        {/* ======================================================================= */}
        <section id="screen-06" className="figma-artboard-container">
          <div className="flex items-center justify-between mb-3 px-1 text-slate-300">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[#13617e] text-white font-mono font-bold text-xs tracking-wider">
                Screen 06
              </span>
              <h2 className="text-sm font-bold text-white font-heading">
                Google Ads Management (PMax, Search, Shopping, YouTube)
              </h2>
            </div>
            <span className="text-xs font-mono text-cyan-300 bg-[#282828] px-2.5 py-1 rounded border border-[#3a3a3a]">
              1440 × AUTO (Desktop)
            </span>
          </div>

          <div className="w-full max-w-[1440px] mx-auto rounded-xl overflow-hidden bg-white text-slate-900 border border-slate-300 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]">
            <Navbar
              onOpenAuditModal={() => {}}
              onNavigateHome={() => scrollToScreen('screen-01')}
              onNavigateSubpage={(slug) => scrollToScreen(`screen-${slug}`)}
              currentRoute="subpage"
            />
            <ServiceSubpage
              slug="google-ads"
              onNavigateHome={() => scrollToScreen('screen-01')}
              onNavigateSubpage={(slug) => scrollToScreen(`screen-${slug}`)}
              onOpenAuditModal={() => scrollToScreen('screen-11')}
            />
            <Footer
              onOpenAuditModal={() => scrollToScreen('screen-11')}
              onNavigateSubpage={(slug) => scrollToScreen(`screen-${slug}`)}
              onNavigateHome={() => scrollToScreen('screen-01')}
            />
          </div>
        </section>

        {/* ======================================================================= */}
        {/* ARTBOARD 07: META ADS */}
        {/* ======================================================================= */}
        <section id="screen-07" className="figma-artboard-container">
          <div className="flex items-center justify-between mb-3 px-1 text-slate-300">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[#13617e] text-white font-mono font-bold text-xs tracking-wider">
                Screen 07
              </span>
              <h2 className="text-sm font-bold text-white font-heading">
                Meta Ads (Facebook & Instagram Advantage+ & CAPI)
              </h2>
            </div>
            <span className="text-xs font-mono text-cyan-300 bg-[#282828] px-2.5 py-1 rounded border border-[#3a3a3a]">
              1440 × AUTO (Desktop)
            </span>
          </div>

          <div className="w-full max-w-[1440px] mx-auto rounded-xl overflow-hidden bg-white text-slate-900 border border-slate-300 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]">
            <Navbar
              onOpenAuditModal={() => {}}
              onNavigateHome={() => scrollToScreen('screen-01')}
              onNavigateSubpage={(slug) => scrollToScreen(`screen-${slug}`)}
              currentRoute="subpage"
            />
            <ServiceSubpage
              slug="meta-ads"
              onNavigateHome={() => scrollToScreen('screen-01')}
              onNavigateSubpage={(slug) => scrollToScreen(`screen-${slug}`)}
              onOpenAuditModal={() => scrollToScreen('screen-11')}
            />
            <Footer
              onOpenAuditModal={() => scrollToScreen('screen-11')}
              onNavigateSubpage={(slug) => scrollToScreen(`screen-${slug}`)}
              onNavigateHome={() => scrollToScreen('screen-01')}
            />
          </div>
        </section>

        {/* ======================================================================= */}
        {/* ARTBOARD 08: SHOPIFY ECOMMERCE SEO */}
        {/* ======================================================================= */}
        <section id="screen-08" className="figma-artboard-container">
          <div className="flex items-center justify-between mb-3 px-1 text-slate-300">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[#13617e] text-white font-mono font-bold text-xs tracking-wider">
                Screen 08
              </span>
              <h2 className="text-sm font-bold text-white font-heading">
                Enterprise Shopify SEO Architecture
              </h2>
            </div>
            <span className="text-xs font-mono text-cyan-300 bg-[#282828] px-2.5 py-1 rounded border border-[#3a3a3a]">
              1440 × AUTO (Desktop)
            </span>
          </div>

          <div className="w-full max-w-[1440px] mx-auto rounded-xl overflow-hidden bg-white text-slate-900 border border-slate-300 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]">
            <Navbar
              onOpenAuditModal={() => {}}
              onNavigateHome={() => scrollToScreen('screen-01')}
              onNavigateSubpage={(slug) => scrollToScreen(`screen-${slug}`)}
              currentRoute="subpage"
            />
            <ServiceSubpage
              slug="shopify-seo"
              onNavigateHome={() => scrollToScreen('screen-01')}
              onNavigateSubpage={(slug) => scrollToScreen(`screen-${slug}`)}
              onOpenAuditModal={() => scrollToScreen('screen-11')}
            />
            <Footer
              onOpenAuditModal={() => scrollToScreen('screen-11')}
              onNavigateSubpage={(slug) => scrollToScreen(`screen-${slug}`)}
              onNavigateHome={() => scrollToScreen('screen-01')}
            />
          </div>
        </section>

        {/* ======================================================================= */}
        {/* ARTBOARD 09: HEALTHCARE PRACTICE (YMYL) */}
        {/* ======================================================================= */}
        <section id="screen-09" className="figma-artboard-container">
          <div className="flex items-center justify-between mb-3 px-1 text-slate-300">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[#13617e] text-white font-mono font-bold text-xs tracking-wider">
                Screen 09
              </span>
              <h2 className="text-sm font-bold text-white font-heading">
                Industry Practice — Healthcare, Dental & Clinic Acquisition (YMYL)
              </h2>
            </div>
            <span className="text-xs font-mono text-cyan-300 bg-[#282828] px-2.5 py-1 rounded border border-[#3a3a3a]">
              1440 × AUTO (Desktop)
            </span>
          </div>

          <div className="w-full max-w-[1440px] mx-auto rounded-xl overflow-hidden bg-white text-slate-900 border border-slate-300 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]">
            <Navbar
              onOpenAuditModal={() => {}}
              onNavigateHome={() => scrollToScreen('screen-01')}
              onNavigateSubpage={(slug) => scrollToScreen(`screen-${slug}`)}
              currentRoute="subpage"
            />
            <ServiceSubpage
              slug="healthcare-growth"
              onNavigateHome={() => scrollToScreen('screen-01')}
              onNavigateSubpage={(slug) => scrollToScreen(`screen-${slug}`)}
              onOpenAuditModal={() => scrollToScreen('screen-11')}
            />
            <Footer
              onOpenAuditModal={() => scrollToScreen('screen-11')}
              onNavigateSubpage={(slug) => scrollToScreen(`screen-${slug}`)}
              onNavigateHome={() => scrollToScreen('screen-01')}
            />
          </div>
        </section>

        {/* ======================================================================= */}
        {/* ARTBOARD 10: E-COMMERCE DTC PRACTICE */}
        {/* ======================================================================= */}
        <section id="screen-10" className="figma-artboard-container">
          <div className="flex items-center justify-between mb-3 px-1 text-slate-300">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[#13617e] text-white font-mono font-bold text-xs tracking-wider">
                Screen 10
              </span>
              <h2 className="text-sm font-bold text-white font-heading">
                Industry Practice — E-Commerce & DTC Scaling Practice
              </h2>
            </div>
            <span className="text-xs font-mono text-cyan-300 bg-[#282828] px-2.5 py-1 rounded border border-[#3a3a3a]">
              1440 × AUTO (Desktop)
            </span>
          </div>

          <div className="w-full max-w-[1440px] mx-auto rounded-xl overflow-hidden bg-white text-slate-900 border border-slate-300 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]">
            <Navbar
              onOpenAuditModal={() => {}}
              onNavigateHome={() => scrollToScreen('screen-01')}
              onNavigateSubpage={(slug) => scrollToScreen(`screen-${slug}`)}
              currentRoute="subpage"
            />
            <ServiceSubpage
              slug="ecommerce-growth"
              onNavigateHome={() => scrollToScreen('screen-01')}
              onNavigateSubpage={(slug) => scrollToScreen(`screen-${slug}`)}
              onOpenAuditModal={() => scrollToScreen('screen-11')}
            />
            <Footer
              onOpenAuditModal={() => scrollToScreen('screen-11')}
              onNavigateSubpage={(slug) => scrollToScreen(`screen-${slug}`)}
              onNavigateHome={() => scrollToScreen('screen-01')}
            />
          </div>
        </section>

        {/* ======================================================================= */}
        {/* ARTBOARD 11: 48-HOUR GROWTH AUDIT MODAL DIALOG */}
        {/* ======================================================================= */}
        <section id="screen-11" className="figma-artboard-container">
          <div className="flex items-center justify-between mb-3 px-1 text-slate-300">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[#13617e] text-white font-mono font-bold text-xs tracking-wider">
                Screen 11
              </span>
              <h2 className="text-sm font-bold text-white font-heading">
                Interactive Component — 48-Hour Growth Audit Dialog & Lead Form
              </h2>
            </div>
            <span className="text-xs font-mono text-cyan-300 bg-[#282828] px-2.5 py-1 rounded border border-[#3a3a3a]">
              Modal Component View
            </span>
          </div>

          <div className="w-full max-w-[1440px] mx-auto p-12 sm:p-20 rounded-xl bg-[#252525] border border-[#383838] flex items-center justify-center shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]">
            <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden text-slate-900">
              <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-slate-50">
                <div className="flex items-center gap-3">
                  <GrozixLogo size="sm" showText={false} />
                  <div>
                    <h3 className="text-base font-bold text-slate-950 font-heading">
                      Request Free Grozix Growth & Channel Audit
                    </h3>
                    <p className="text-xs text-slate-600">
                      Customized roadmap delivered in 48 hours · Zero sales pressure · Senior practitioner review
                    </p>
                  </div>
                </div>
                <div className="text-xs font-mono text-slate-500 bg-slate-200/80 px-2.5 py-1 rounded">
                  ESC / Close
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2 font-mono">
                    Select Channels to Audit (Multi-Select)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['Core SEO Services', 'AI SEO & GEO', 'Google Ads', 'Meta Ads'].map((ch, idx) => (
                      <div
                        key={ch}
                        className={`px-3 py-2 text-xs font-medium rounded-lg border text-left ${
                          idx === 0 || idx === 1
                            ? 'bg-[#13617e] text-white border-[#13617e] shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200'
                        }`}
                      >
                        {ch}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Website or Brand URL *
                    </label>
                    <div className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-800 font-mono">
                      https://clinic-practice.com
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Industry Sector
                    </label>
                    <div className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-800">
                      Healthcare (Dental, Aesthetic, Clinics)
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Your Name *
                    </label>
                    <div className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-800">
                      Dr. Sarah Collins
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Work Email *
                    </label>
                    <div className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-800 font-mono">
                      sarah@clinicpractice.com
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Monthly Marketing Spend Bracket
                  </label>
                  <div className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-800">
                    $5,000 - $20,000 / mo (Growth Stage)
                  </div>
                </div>

                <div className="pt-2">
                  <div className="w-full py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#13617e] rounded-lg text-center shadow-md shadow-[#13617e]/20 cursor-pointer">
                    Generate Free Strategic Audit Roadmap (48h) →
                  </div>
                  <p className="text-[11px] text-center text-slate-500 mt-2">
                    Delivered with NDA protection · 100% confidential
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Floating Bottom Quick Download Dock */}
      <div className="fixed bottom-5 right-5 z-40 bg-[#282828]/95 backdrop-blur-md border border-[#444] rounded-2xl shadow-2xl p-2.5 flex items-center gap-2">
        <span className="hidden sm:inline-block text-xs font-mono text-slate-300 px-2 font-semibold">
          Download Website:
        </span>
        <button
          onClick={handleDownloadStandaloneHtml}
          className="px-3 py-1.5 bg-[#13617e] hover:bg-[#0f4f66] text-white text-xs font-medium rounded-lg shadow transition flex items-center gap-1.5 cursor-pointer"
          title="Download single self-contained HTML file"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span>.HTML</span>
        </button>
        <button
          onClick={handleDownloadZip}
          disabled={isZipping}
          className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-xs font-medium rounded-lg shadow transition flex items-center gap-1.5 cursor-pointer"
          title="Download full project ZIP archive"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
          <span>{isZipping ? `${zipProgress}%` : '.ZIP'}</span>
        </button>
        <button
          onClick={() => setIsExportModalOpen(true)}
          className="px-2.5 py-1.5 bg-[#383838] hover:bg-[#484848] text-cyan-300 text-xs font-medium rounded-lg transition border border-[#555] cursor-pointer"
          title="Open export and download hub"
        >
          Options
        </button>
      </div>

      {/* Download and Export Modal */}
      <DownloadExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />
    </div>
  );
};
