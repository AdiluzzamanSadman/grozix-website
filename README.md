# Grozix Agency — Performance Search, AI SEO (GEO) & Paid Media

Complete, publishable agency web application engineered for ambitious healthcare, clinic, and e-commerce brands. Built with React 19, TypeScript, and Tailwind CSS.

## 🌟 Key Architecture & Features

- **Light, Modern Design System**: High-contrast typography (**Outfit** headers & **DM Sans** body) with the exact Grozix teal brand mark (`#13617e`) and clean white/light slate surfaces.
- **Full-Funnel Agency Homepage**:
  - Hero with quantitative performance metrics ($48M+ revenue generated, 4.2x ROAS).
  - 5-category SEO & GEO Service Architecture with expandable deliverables.
  - Interactive Generative Engine Optimization (GEO & AEO) simulator comparing Perplexity, ChatGPT, and Gemini citation outcomes.
  - Dual-platform Paid Media switcher (Google Ads & Meta Ads Advantage+).
  - High-stakes Industry Verticals (Healthcare & Clinic Practices with YMYL standards, DTC E-Commerce).
  - Compliance & Trust Governance (Google E-E-A-T, Meta Medical Ad Policies, HIPAA/CAPI, FTC claims).
  - Direct Engagement lead contact section.
- **27-Service Catalog Hub & Dedicated Service Pages**:
  - Full catalog explorer (`/all-services`) with category filtering.
  - Dedicated service pages with breadcrumb hierarchy, deliverables, methodology timeline, and FAQ accordions.
- **Interactive 48-Hour Growth Audit Dialog**:
  - Multi-channel selector, spend tier calculator, and lead intake form.

## 🚀 Running Locally

```bash
npm install
npm run dev
```

The app will run at `http://localhost:3000`.

## 🌐 Deploying to GitHub Pages

This repository is pre-configured with relative base asset paths (`base: './'`) and a `.nojekyll` configuration file to prevent blank white screens on GitHub Pages.

### Option 1: GitHub Actions (Recommended & Automated)
1. Push your repository to GitHub.
2. Go to your repository **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. That's it! The included `.github/workflows/deploy.yml` workflow will automatically trigger on push to `main`, compile your assets to `dist/`, and deploy your live site with HTTPS.

### Option 2: Deploying via `gh-pages` Branch
1. Run `npm run build` locally to produce the production bundle inside `dist/`.
2. Push the contents of the `dist/` folder to the `gh-pages` branch.
3. In **Settings** → **Pages**, select **Deploy from a branch**, choose `gh-pages` and `/ (root)`.

