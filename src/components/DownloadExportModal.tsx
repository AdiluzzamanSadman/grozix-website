import React, { useState } from 'react';
import {
  downloadStandaloneHtmlFile,
  downloadCompleteWebsiteZip,
  copyStandaloneHtmlToClipboard,
  getStandaloneHtmlDataUri,
  STANDALONE_HTML,
} from '../utils/downloadHelpers';

interface DownloadExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadExportModal: React.FC<DownloadExportModalProps> = ({ isOpen, onClose }) => {
  const [toastMessage, setToMessage] = useState<string | null>(null);
  const [isZipping, setIsZipping] = useState<boolean>(false);
  const [zipProgress, setZipProgress] = useState<number>(0);
  const [showCodePreview, setShowCodePreview] = useState<boolean>(false);

  if (!isOpen) return null;

  const showToast = (msg: string) => {
    setToMessage(msg);
    setTimeout(() => setToMessage(null), 4000);
  };

  const handleDownloadHtml = () => {
    try {
      downloadStandaloneHtmlFile('grozix-figma-canvas.html');
      showToast('✓ "grozix-figma-canvas.html" downloaded successfully to your computer!');
    } catch (err) {
      console.error(err);
      showToast('Triggering fallback download...');
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
      showToast('✓ "grozix-full-website-project.zip" downloaded successfully (all 23 files)!');
    } catch (err) {
      setIsZipping(false);
      console.error(err);
      showToast('Download error. Please use the standalone .HTML option or Copy code.');
    }
  };

  const handleCopyHtml = async () => {
    const success = await copyStandaloneHtmlToClipboard();
    if (success) {
      showToast('✓ Full HTML copied to clipboard (820 lines)! Paste into any file or Figma plugin.');
    } else {
      showToast('Clipboard access denied. Please use the "Download .HTML" button.');
    }
  };

  const handleCopyPreviewUrl = async () => {
    const currentUrl = window.location.href;
    try {
      await navigator.clipboard.writeText(currentUrl);
      showToast('✓ Preview URL copied to clipboard! Paste directly into Figma html.to.design plugin.');
    } catch {
      showToast(`URL: ${currentUrl}`);
    }
  };

  const dataUri = getStandaloneHtmlDataUri();

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      {/* Toast feedback */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[1000] bg-[#13617e] text-white px-5 py-3 rounded-xl shadow-2xl border border-cyan-400 font-sans text-sm flex items-center gap-3 animate-bounce">
          <span className="font-bold text-cyan-200">Notice:</span>
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="relative w-full max-w-3xl bg-[#222222] border border-[#3e3e3e] rounded-2xl shadow-2xl text-slate-100 overflow-hidden my-8">
        {/* Header */}
        <div className="bg-[#2a2a2a] px-6 py-5 border-b border-[#383838] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#13617e] flex items-center justify-center text-white shadow-inner">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-bold text-white font-heading">
                Download Website Files & Figma Export Center
              </h2>
              <p className="text-xs text-slate-400">
                Choose the format you need: Single-file HTML for Figma or full project ZIP archive.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-[#383838] transition cursor-pointer"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          {/* Card 1: Standalone HTML (Recommended for Figma) */}
          <div className="bg-[#292929] border-2 border-[#13617e]/80 rounded-xl p-5 hover:border-cyan-400 transition-all">
            <div className="flex items-start justify-between gap-4 flex-wrap sm:flex-nowrap">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-[#13617e] text-white text-[11px] font-mono font-bold">
                    RECOMMENDED FOR FIGMA
                  </span>
                  <span className="text-[11px] font-mono text-cyan-300">
                    grozix-figma-canvas.html (53 KB)
                  </span>
                </div>
                <h3 className="text-base font-bold text-white pt-1 font-heading">
                  Single Self-Contained HTML Canvas File
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Contains all <strong>11 artboard screens side-by-side</strong> on a #1E1E1E canvas with embedded CSS inside the head. Requires zero backend, server, or extra assets to view offline or convert in Figma.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#3a3a3a] flex items-center gap-3 flex-wrap">
              <button
                onClick={handleDownloadHtml}
                className="px-4 py-2.5 rounded-lg bg-[#13617e] hover:bg-[#0e4e66] text-white font-semibold text-xs transition shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download .HTML File (Direct)</span>
              </button>

              <button
                onClick={handleCopyHtml}
                className="px-4 py-2.5 rounded-lg bg-[#383838] hover:bg-[#484848] text-white font-semibold text-xs transition border border-[#4a4a4a] flex items-center gap-2 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                <span>Copy Full HTML Code</span>
              </button>

              {/* Native direct HTML download link (guaranteed browser fallback) */}
              <a
                href={dataUri}
                download="grozix-figma-canvas.html"
                className="px-3 py-2 text-[11px] text-slate-400 hover:text-cyan-300 underline font-mono flex items-center gap-1"
                title="Direct browser fallback link without JavaScript"
              >
                Fallback Link
              </a>
            </div>
          </div>

          {/* Card 2: Complete Project ZIP */}
          <div className="bg-[#292929] border border-[#3a3a3a] rounded-xl p-5 hover:border-slate-500 transition-all">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-emerald-700 text-white text-[11px] font-mono font-bold">
                  FULL CODEBASE
                </span>
                <span className="text-[11px] font-mono text-emerald-300">
                  grozix-full-website-project.zip (23 Files)
                </span>
              </div>
              <h3 className="text-base font-bold text-white pt-1 font-heading">
                Complete Website Project Archive (.ZIP)
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Includes all React 19 source code, TypeScript components (Hero, ServicesHub, 27 Services, Calculator Modal, Logo), Tailwind CSS styling, package.json, Vite configuration, and a README with local setup instructions.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#3a3a3a] flex items-center gap-3 flex-wrap">
              <button
                onClick={handleDownloadZip}
                disabled={isZipping}
                className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold text-xs transition shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                <span>
                  {isZipping ? `Generating ZIP (${zipProgress}%)...` : 'Download Complete Project (.ZIP)'}
                </span>
              </button>
              <span className="text-[11px] text-slate-400 font-mono">
                Ready to unzip and run with: npm install &amp;&amp; npm run dev
              </span>
            </div>
          </div>

          {/* Card 3: Figma Import Instructions */}
          <div className="bg-[#292929] border border-[#3a3a3a] rounded-xl p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white font-heading">
                  How to Import into Figma in 30 Seconds
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Use the Figma <strong>"html.to.design"</strong> plugin or Builder.io to generate editable vector frames.
                </p>
              </div>
              <button
                onClick={handleCopyPreviewUrl}
                className="px-3.5 py-2 rounded-lg bg-[#383838] hover:bg-[#484848] text-xs font-mono text-cyan-300 border border-[#4a4a4a] shrink-0 cursor-pointer"
              >
                Copy Preview URL
              </button>
            </div>

            <ol className="mt-3 space-y-1.5 text-xs text-slate-300 list-decimal list-inside bg-[#1f1f1f] p-3 rounded-lg border border-[#333]">
              <li>In Figma, open the <strong>html.to.design</strong> plugin.</li>
              <li>Click <strong>"Upload file"</strong> and choose <code>grozix-figma-canvas.html</code> (or paste the copied URL).</li>
              <li>Set Viewport to <strong>Desktop 1440px</strong>.</li>
              <li>Click <strong>Import</strong> — all 11 labeled artboards will render onto your Figma canvas with Outfit &amp; DM Sans fonts!</li>
            </ol>
          </div>

          {/* Card 4: Code Preview Toggle */}
          <div>
            <button
              onClick={() => setShowCodePreview(!showCodePreview)}
              className="text-xs text-slate-400 hover:text-cyan-300 flex items-center gap-1.5 font-mono cursor-pointer"
            >
              <span>{showCodePreview ? '▼ Hide' : '▶ Show'} Raw HTML Code Snippet ({STANDALONE_HTML.length.toLocaleString()} bytes)</span>
            </button>

            {showCodePreview && (
              <div className="mt-2 bg-[#181818] border border-[#333] rounded-lg p-3 font-mono text-[11px] text-slate-300">
                <div className="flex items-center justify-between pb-2 border-b border-[#333] mb-2">
                  <span className="text-slate-500">Previewing first 20 lines of grozix-figma-canvas.html:</span>
                  <button
                    onClick={handleCopyHtml}
                    className="text-cyan-400 hover:underline cursor-pointer"
                  >
                    Copy All Code
                  </button>
                </div>
                <pre className="max-h-40 overflow-y-auto overflow-x-auto text-slate-400 whitespace-pre">
                  {STANDALONE_HTML.split('\n').slice(0, 30).join('\n')}
                  {'\n... [820 lines total]'}
                </pre>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#2a2a2a] px-6 py-4 border-t border-[#383838] flex items-center justify-between">
          <span className="text-[11px] text-slate-400 font-mono">
            Grozix Digital Agency · 100% Client-Side Export
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#383838] hover:bg-[#484848] rounded-lg transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
