import JSZip from 'jszip';
import { STANDALONE_HTML } from '../data/standaloneHtmlString';
import { PROJECT_SOURCE_FILES } from '../data/projectFilesData';

/**
 * Direct file download via Blob and temporary link
 */
export function triggerBrowserDownload(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  anchor.style.display = 'none';
  document.body.appendChild(anchor);
  anchor.click();
  setTimeout(() => {
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
  }, 2000);
}

/**
 * Download the single self-contained HTML file for Figma / offline viewing
 */
export function downloadStandaloneHtmlFile(filename = 'grozix-figma-canvas.html'): void {
  const blob = new Blob([STANDALONE_HTML], { type: 'text/html;charset=utf-8' });
  triggerBrowserDownload(blob, filename);
}

/**
 * Generate and download a complete ZIP archive with all website source files + standalone canvas
 */
export async function downloadCompleteWebsiteZip(
  onProgress?: (percent: number) => void,
  filename = 'grozix-full-website-project.zip'
): Promise<void> {
  const zip = new JSZip();

  // 1. Add standalone all-in-one HTML canvas (Screen 01 to 11)
  zip.file('grozix-figma-canvas.html', STANDALONE_HTML);

  // 2. Add README instructions
  const readmeContent = `# Grozix Agency — Complete Website & Figma Artboard Package

This archive contains the complete codebase and standalone artboards for the Grozix Performance Search, AI GEO & Paid Media website.

## Files Included:
1. **grozix-figma-canvas.html**:
   - Single self-contained HTML file containing all 11 artboard screens side-by-side on a #1E1E1E design canvas.
   - Embedded CSS inside <style> tags (zero dependencies, works completely offline).
   - Fully optimized for Figma "html.to.design" converter plugin.

2. **Full React / Vite Web Application Source Code**:
   - \`package.json\`, \`vite.config.ts\`, \`tsconfig.json\`
   - \`src/App.tsx\`, \`src/index.css\`, \`src/main.tsx\`
   - All 13 component files (\`Hero\`, \`ServicesExplorer\`, \`AiGeoShowcase\`, \`PaidMediaSection\`, \`IndustriesFocus\`, \`Navbar\`, \`Footer\`, \`ServiceSubpage\`, etc.)
   - All data dictionaries with 27 specialized service blueprints.

## How to Import into Figma:
1. Open Figma and create or open a Figma file.
2. Open the **"html.to.design"** plugin (or Builder.io / Figma web import).
3. Option A: Select "Local HTML file" and upload \`grozix-figma-canvas.html\`.
4. Option B: Double-click \`grozix-figma-canvas.html\` in your browser, copy the local URL, or paste the raw HTML.
5. Set viewport width to **1440px** and click **Import**.
6. All 11 artboards will be generated as native vector Figma frames with Outfit & DM Sans typography.

## How to Run the React Website Locally:
1. Ensure Node.js (v18+) is installed.
2. Run: \`npm install\`
3. Run: \`npm run dev\`
4. Open http://localhost:3000 in your browser.
`;
  zip.file('README.md', readmeContent);

  // 3. Add all project source files
  for (const [filePath, content] of Object.entries(PROJECT_SOURCE_FILES)) {
    zip.file(filePath, content);
  }

  // 4. Generate ZIP blob
  const zipBlob = await zip.generateAsync(
    { type: 'blob', compression: 'DEFLATE', compressionOptions: { level: 6 } },
    (metadata) => {
      if (onProgress) {
        onProgress(Math.round(metadata.percent));
      }
    }
  );

  triggerBrowserDownload(zipBlob, filename);
}

/**
 * Copy the full standalone HTML text directly to clipboard
 */
export async function copyStandaloneHtmlToClipboard(): Promise<boolean> {
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(STANDALONE_HTML);
      return true;
    }
    // Fallback for older browsers or restricted iframe contexts
    const textArea = document.createElement('textarea');
    textArea.value = STANDALONE_HTML;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    textArea.style.top = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  } catch (err) {
    console.error('Failed to copy HTML to clipboard:', err);
    return false;
  }
}

/**
 * Returns a Data URI string for raw HTML download link fallback
 */
export function getStandaloneHtmlDataUri(): string {
  return 'data:text/html;charset=utf-8,' + encodeURIComponent(STANDALONE_HTML);
}

export { STANDALONE_HTML };
